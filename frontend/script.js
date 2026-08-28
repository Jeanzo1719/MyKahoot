// Mock quiz data, shaped like game::question from backend/src/game.hpp
const QUESTION_BANK = [
    {
      question_text: '¿Cuál es la capital de Venezuela?',
      question_answers: ['Caracas', 'Maracaibo', 'Valencia', 'Barquisimeto'],
      correct_answer: 'Caracas',
    },
    {
      question_text: '¿En qué lenguaje está escrito el backend de MyKahoot?',
      question_answers: ['Python', 'C++', 'JavaScript', 'Rust'],
      correct_answer: 'C++',
    },
    {
      question_text: '¿Cuánto es 7 x 8?',
      question_answers: ['54', '56', '58', '64'],
      correct_answer: '56',
    },
    {
      question_text: '¿Qué planeta es conocido como el planeta rojo?',
      question_answers: ['Venus', 'Marte', 'Júpiter', 'Saturno'],
      correct_answer: 'Marte',
    },
    {
      question_text: '¿Quién escribió "Cien años de soledad"?',
      question_answers: ['Mario Vargas Llosa', 'Gabriel García Márquez', 'Julio Cortázar', 'Jorge Luis Borges'],
      correct_answer: 'Gabriel García Márquez',
    },
    {
      question_text: '¿Cuál es el río más largo del mundo?',
      question_answers: ['Nilo', 'Amazonas', 'Yangtsé', 'Misisipi'],
      correct_answer: 'Amazonas',
    },
    {
      question_text: '¿Qué estructura de datos usa el orden LIFO?',
      question_answers: ['Cola', 'Pila', 'Árbol', 'Grafo'],
      correct_answer: 'Pila',
    },
    {
      question_text: '¿En qué año llegó el ser humano a la Luna?',
      question_answers: ['1965', '1969', '1972', '1959'],
      correct_answer: '1969',
    },
    {
      question_text: '¿Cuál es el hueso más largo del cuerpo humano?',
      question_answers: ['Húmero', 'Fémur', 'Tibia', 'Radio'],
      correct_answer: 'Fémur',
    },
    {
      question_text: '¿Qué significa "HTTP"?',
      question_answers: [
        'HyperText Transfer Protocol',
        'High Transfer Text Process',
        'Host Transfer Protocol',
        'HyperLink Text Transport',
      ],
      correct_answer: 'HyperText Transfer Protocol',
    },
];

const quiz = {
  quiz_questions: [],
  quiz_players: [],
  current_question: 0,
};

const QUESTION_TIME_MS = 10000;

const startScreen = document.getElementById('start-screen');
const formScreen = document.getElementById('form-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultsScreen = document.getElementById('results-screen');

const startButton = document.getElementById('start-button');
const playerForm = document.getElementById('player-form');
const playerNameInput = document.getElementById('player-name');
const restartButton = document.getElementById('restart-button');
const themeToggleButton = document.getElementById('theme-toggle');

const progressEl = document.getElementById('progress');
const progressFillEl = document.getElementById('progress-fill');
const timerFillEl = document.getElementById('timer-fill');
const questionTextEl = document.getElementById('question-text');
const answersEl = document.getElementById('answers');
const resultsListEl = document.getElementById('results-list');
const confettiEl = document.getElementById('confetti');

let timerRafId = null;

function showScreen(screen) {
  for (const s of [startScreen, formScreen, quizScreen, resultsScreen]) {
    s.classList.toggle('hidden', s !== screen);
  }

  screen.classList.remove('animate-in');
  void screen.offsetWidth; // force reflow so the animation restarts
  screen.classList.add('animate-in');
}

// --- Theme ---

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  themeToggleButton.textContent = theme === 'dark' ? '☀️' : '🌙';
  localStorage.setItem('mykahoot-theme', theme);
}

function initTheme() {
  const stored = localStorage.getItem('mykahoot-theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  applyTheme(stored ?? (prefersDark ? 'dark' : 'light'));
}

themeToggleButton.addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme');
  applyTheme(current === 'dark' ? 'light' : 'dark');
});

initTheme();

// --- Game flow ---

startButton.addEventListener('click', () => {
  showScreen(formScreen);
});

playerForm.addEventListener('submit', (event) => {
  event.preventDefault();

  quiz.quiz_players = [
    {
      player_name: playerNameInput.value.trim(),
      player_score: 0,
      player_position: 0,
    },
  ];
  quiz.quiz_questions = shuffleArray(QUESTION_BANK);
  quiz.current_question = 0;

  showScreen(quizScreen);
  renderQuestion();
});

function shuffleArray(array) {
  const shuffled = [...array];

  for (let i = shuffled.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
}

function renderQuestion() {
  const question = quiz.quiz_questions[quiz.current_question];
  const player = quiz.quiz_players[0];

  progressEl.textContent = `Pregunta ${quiz.current_question + 1} de ${quiz.quiz_questions.length}`;
  progressFillEl.style.width = `${(quiz.current_question / quiz.quiz_questions.length) * 100}%`;
  questionTextEl.textContent = question.question_text;
  answersEl.innerHTML = '';

  const shuffledAnswers = shuffleArray(question.question_answers);

  for (const answer of shuffledAnswers) {
    const button = document.createElement('button');
    button.className = 'answer-button';
    button.textContent = answer;
    button.addEventListener('click', () => selectAnswer(answer, question, player));
    answersEl.appendChild(button);
  }

  startTimer(question, player);
}

function startTimer(question, player) {
  const startTime = performance.now();

  cancelAnimationFrame(timerRafId);

  const tick = (now) => {
    const elapsed = now - startTime;
    const remainingRatio = Math.max(0, 1 - elapsed / QUESTION_TIME_MS);

    timerFillEl.style.width = `${remainingRatio * 100}%`;
    timerFillEl.style.background = remainingRatio > 0.5
      ? 'var(--correct)'
      : remainingRatio > 0.2
        ? '#eab308'
        : 'var(--incorrect)';

    if (remainingRatio <= 0) {
      selectAnswer(null, question, player);
      return;
    }

    timerRafId = requestAnimationFrame(tick);
  };

  timerRafId = requestAnimationFrame(tick);
}

function selectAnswer(selectedAnswer, question, player) {
  cancelAnimationFrame(timerRafId);

  const buttons = answersEl.querySelectorAll('.answer-button');

  for (const button of buttons) {
    button.disabled = true;

    if (button.textContent === question.correct_answer) {
      button.classList.add('correct');
    } else if (button.textContent === selectedAnswer) {
      button.classList.add('incorrect');
    }
  }

  if (selectedAnswer === question.correct_answer) {
    player.player_score += 1;
  }

  setTimeout(() => {
    quiz.current_question += 1;

    if (quiz.current_question < quiz.quiz_questions.length) {
      renderQuestion();
    } else {
      showResults();
    }
  }, 1000);
}

function showResults() {
  const ranked = [...quiz.quiz_players].sort((a, b) => b.player_score - a.player_score);

  ranked.forEach((player, index) => {
    player.player_position = index + 1;
  });

  resultsListEl.innerHTML = '';

  for (const player of ranked) {
    const item = document.createElement('li');
    const isWinner = player.player_position === 1;

    if (isWinner) {
      item.classList.add('winner');
    }

    const label = document.createElement('span');
    label.textContent = `${isWinner ? '🏆 ' : ''}#${player.player_position} ${player.player_name} — `;

    const scoreEl = document.createElement('span');
    scoreEl.textContent = '0 puntos';

    item.appendChild(label);
    item.appendChild(scoreEl);
    resultsListEl.appendChild(item);

    animateScoreCount(scoreEl, player.player_score);
  }

  showScreen(resultsScreen);
  launchConfetti();
}

function animateScoreCount(el, target) {
  if (target === 0) {
    el.textContent = '0 puntos';
    return;
  }

  const duration = 700;
  const startTime = performance.now();

  const tick = (now) => {
    const progress = Math.min(1, (now - startTime) / duration);
    const value = Math.round(progress * target);
    el.textContent = `${value} punto${value === 1 ? '' : 's'}`;

    if (progress < 1) {
      requestAnimationFrame(tick);
    }
  };

  requestAnimationFrame(tick);
}

function launchConfetti() {
  const colors = ['#7c3aed', '#a855f7', '#22c55e', '#eab308', '#3b82f6', '#ef4444'];
  confettiEl.innerHTML = '';

  for (let i = 0; i < 40; i += 1) {
    const piece = document.createElement('span');
    piece.className = 'confetti-piece';
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.background = colors[Math.floor(Math.random() * colors.length)];
    piece.style.animationDuration = `${1.5 + Math.random() * 1.5}s`;
    piece.style.animationDelay = `${Math.random() * 0.5}s`;
    confettiEl.appendChild(piece);
  }

  setTimeout(() => {
    confettiEl.innerHTML = '';
  }, 3500);
}

restartButton.addEventListener('click', () => {
  playerNameInput.value = '';
  quiz.quiz_players = [];
  quiz.current_question = 0;
  progressFillEl.style.width = '0%';
  confettiEl.innerHTML = '';
  showScreen(startScreen);
});
