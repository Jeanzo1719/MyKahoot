// Mock quiz data, shaped like game::question from backend/src/game.hpp
const QUESTION_BANK = [
    {
      question_text: '¿Qué defiende el humanismo personalista?',
      question_answers: [
        'La dignidad y el valor único de cada persona humana',
        'La supremacía del Estado sobre el individuo',
        'El avance técnico como fin en sí mismo',
        'El relativismo absoluto en la ética',
      ],
      correct_answer: 'La dignidad y el valor único de cada persona humana',
      explanation: 'El personalismo sitúa a la persona concreta, con su dignidad intrínseca, como medida de toda institución y acción.',
    },
    {
      question_text: '¿Cuál es el máximo principio del humanismo personalista?',
      question_answers: [
        'La persona humana',
        'El progreso económico',
        'La voluntad del pueblo',
        'La razón instrumental',
      ],
      correct_answer: 'La persona humana',
      explanation: 'La persona es anterior y superior a cualquier colectividad, sistema o técnica.',
    },
    {
      question_text: '¿La dignidad humana es uno de los principios del derecho?',
      question_answers: ['Verdadero', 'Falso'],
      correct_answer: 'Verdadero',
      explanation: 'La dignidad humana es un principio rector del derecho contemporáneo, reconocido en constituciones y tratados.',
    },
    {
      question_text: '¿Quién es el principal representante del humanismo personalista?',
      question_answers: [
        'Emmanuel Mounier',
        'Jean-Paul Sartre',
        'Friedrich Nietzsche',
        'Karl Marx',
      ],
      correct_answer: 'Emmanuel Mounier',
      explanation: 'Mounier fundó la revista Esprit en 1932 y es considerado el principal exponente del personalismo.',
    },
    {
      question_text: '¿La tecnología reemplaza la dignidad de la persona?',
      question_answers: [
        'No, la dignidad humana es anterior a cualquier técnica',
        'Sí, la eficiencia tecnológica sustituye la dignidad',
        'Solo cuando es bien utilizada',
        'Únicamente en contextos laborales',
      ],
      correct_answer: 'No, la dignidad humana es anterior a cualquier técnica',
      explanation: 'Para el personalismo, la técnica está al servicio de la persona, no al revés.',
    },
    {
      question_text: '¿Immanuel Kant es una figura importante en el humanismo personalista?',
      question_answers: ['Verdadero', 'Falso'],
      correct_answer: 'Verdadero',
      explanation: 'Aunque el personalismo se formaliza en el s. XX, Kant es un predecesor clave: su ética del deber y del respeto a la persona influyen profundamente al movimiento.',
    },

    {
      question_text: '¿El humanismo personalista nació formalmente en el siglo XX?',
      question_answers: ['Verdadero', 'Falso'],
      correct_answer: 'Verdadero',
      explanation: 'Se consolida en el siglo XX, sobre todo con Mounier y el grupo francés de los 1930.',
    },
    {
      question_text: '¿Según el humanismo personalista, el ser humano es digno por sí mismo?',
      question_answers: ['Verdadero', 'Falso'],
      correct_answer: 'Verdadero',
      explanation: 'La dignidad es inherente a todo ser humano por el hecho de serlo, no por su utilidad o condición social.',
    },
    {
      question_text: '¿Mounier era de origen francés?',
      question_answers: ['Verdadero', 'Falso'],
      correct_answer: 'Verdadero',
      explanation: 'Emmanuel Mounier nació en Grenoble, Francia, en 1905.',
    },
    {
      question_text: '¿Cuál de estos NO es un valor personalista?',
      question_answers: [
        'La cosificación del otro',
        'El respeto a la persona',
        'La responsabilidad comunitaria',
        'La libertad comprometida',
      ],
      correct_answer: 'La cosificación del otro',
      explanation: 'Cosificar al otro (tratarlo como cosa o instrumento) es exactamente lo que el personalismo rechaza.',
    },
    {
      question_text: '¿El humanismo personalista es un movimiento individualista?',
      question_answers: ['Verdadero', 'Falso'],
      correct_answer: 'Falso',
      explanation: 'El personalismo es comunitario pero no colectivista: valora a la persona en su dimensión social sin absorberla en la masa.',
    },
    {
      question_text: '¿Dónde surgió el humanismo personalista?',
      question_answers: [
        'Francia, en el siglo XX',
        'Alemania, en el siglo XIX',
        'Italia, en el siglo XX',
        'Inglaterra, en el siglo XVIII',
      ],
      correct_answer: 'Francia, en el siglo XX',
      explanation: 'El humanismo personalista surge en Francia en el siglo XX, con Emmanuel Mounier y el grupo de la revista Esprit (1932).',
    },
    {
      question_text: '¿Las dos guerras mundiales influyeron en el pensamiento de Mounier?',
      question_answers: ['Verdadero', 'Falso'],
      correct_answer: 'Verdadero',
      explanation: 'Mounier escribió su Manifiesto al servicio del personalismo en 1936, profundamente marcado por la crisis de entreguerras y el ascenso de los totalitarismos.',
    },
    {
      question_text: '¿La persona, en el personalismo, se define principalmente por su...?',
      question_answers: [
        'Vocación integral como ser libre, comunitario y creativo',
        'Productividad y aporte económico',
        'Adhesión ideológica a un partido',
        'Cumplimiento estricto de normas legales',
      ],
      correct_answer: 'Vocación integral como ser libre, comunitario y creativo',
      explanation: 'El personalismo describe a la persona como un ser total: libre, ligado a otros y creativo, no reducible a una sola dimensión.',
    },
    {
      question_text: '¿Cuál es la relación entre persona y comunidad en el personalismo?',
      question_answers: [
        'La comunidad es un espacio de realización, no de absorción',
        'La persona desaparece en la comunidad',
        'La comunidad es irrelevante para la persona',
        'Solo importa la autonomía individual',
      ],
      correct_answer: 'La comunidad es un espacio de realización, no de absorción',
      explanation: 'Para el personalismo, la persona se realiza en la comunidad, pero sin ser anulada por ella.',
    },
    {
      question_text: '¿El personalismo es contrario al diálogo con otras corrientes filosóficas?',
      question_answers: ['Verdadero', 'Falso'],
      correct_answer: 'Falso',
      explanation: 'El personalismo es plural y dialogante: busca convergencias con fenomenología, existencialismo, marxismo crítico y cristianismo.',
    },
    {
      question_text: '¿Qué siglo vio nacer formalmente al humanismo personalista?',
      question_answers: ['Siglo XIX', 'Siglo XX', 'Siglo XVIII', 'Siglo XVII'],
      correct_answer: 'Siglo XX',
      explanation: 'El personalismo se formaliza en el siglo XX, en torno a Mounier y la revista Esprit.',
    },
    {
      question_text: 'Para el humanismo personalista, ¿qué es lo que debe orientar el desarrollo económico?',
      question_answers: [
        'La dignidad y el bien integral de la persona',
        'La acumulación ilimitada de capital',
        'La rentabilidad a corto plazo',
        'Los indicadores macroeconómicos únicamente',
      ],
      correct_answer: 'La dignidad y el bien integral de la persona',
      explanation: 'El personalismo sostiene que la economía está al servicio de la persona, no la persona al servicio del mercado.',
    },
];

const QUESTIONS_PER_ROUND = 6;

const quiz = {
  quiz_questions: [],
  quiz_players: [],
  current_question: 0,
};

const startScreen = document.getElementById('start-screen');
const formScreen = document.getElementById('form-screen');
const quizScreen = document.getElementById('quiz-screen');
const roundScreen = document.getElementById('round-screen');
const resultsScreen = document.getElementById('results-screen');

const startButton = document.getElementById('start-button');
const playerForm = document.getElementById('player-form');
const playerNameInput = document.getElementById('player-name');
const restartButton = document.getElementById('restart-button');
const themeToggleButton = document.getElementById('theme-toggle');
const nextButton = document.getElementById('next-button');
const roundContinueButton = document.getElementById('round-continue');

const progressEl = document.getElementById('progress');
const progressFillEl = document.getElementById('progress-fill');
const questionTextEl = document.getElementById('question-text');
const answersEl = document.getElementById('answers');
const feedbackEl = document.getElementById('feedback');
const feedbackTextEl = document.getElementById('feedback-text');
const roundTitleEl = document.getElementById('round-title');
const roundSubtitleEl = document.getElementById('round-subtitle');
const roundListEl = document.getElementById('round-list');
const resultsListEl = document.getElementById('results-list');
const confettiEl = document.getElementById('confetti');

function showScreen(screen) {
  for (const s of [startScreen, formScreen, quizScreen, roundScreen, resultsScreen]) {
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
  feedbackEl.classList.add('hidden');

  const shuffledAnswers = shuffleArray(question.question_answers);

  for (const answer of shuffledAnswers) {
    const button = document.createElement('button');
    button.className = 'answer-button';
    button.textContent = answer;
    button.addEventListener('click', () => selectAnswer(answer, question, player));
    answersEl.appendChild(button);
  }
}

function selectAnswer(selectedAnswer, question, player) {
  const buttons = answersEl.querySelectorAll('.answer-button');
  const isCorrect = selectedAnswer === question.correct_answer;

  for (const button of buttons) {
    button.disabled = true;

    if (button.textContent === question.correct_answer) {
      button.classList.add('correct');
    } else if (button.textContent === selectedAnswer) {
      button.classList.add('incorrect');
    }
  }

  if (isCorrect) {
    player.player_score += 1;
  }

  const prefix = isCorrect ? '¡Correcto! ' : 'Incorrecto. ';
  feedbackTextEl.textContent = `${prefix}${question.explanation}`;
  feedbackEl.classList.remove('hidden');
  feedbackEl.classList.toggle('feedback-correct', isCorrect);
  feedbackEl.classList.toggle('feedback-incorrect', !isCorrect);
}

function advanceAfterAnswer() {
  const nextIndex = quiz.current_question + 1;
  const isRoundBoundary =
    nextIndex > 0
    && nextIndex % QUESTIONS_PER_ROUND === 0
    && nextIndex < quiz.quiz_questions.length;

  if (isRoundBoundary) {
    quiz.current_question = nextIndex;
    showRoundResults();
    return;
  }

  quiz.current_question = nextIndex;

  if (quiz.current_question < quiz.quiz_questions.length) {
    showScreen(quizScreen);
    renderQuestion();
  } else {
    showResults();
  }
}

nextButton.addEventListener('click', advanceAfterAnswer);

roundContinueButton.addEventListener('click', () => {
  showScreen(quizScreen);
  renderQuestion();
});

function buildRankingList(listEl, animate) {
  const ranked = [...quiz.quiz_players].sort((a, b) => b.player_score - a.player_score);

  ranked.forEach((player, index) => {
    player.player_position = index + 1;
  });

  listEl.innerHTML = '';

  for (const player of ranked) {
    const item = document.createElement('li');
    const isWinner = player.player_position === 1;

    if (isWinner) {
      item.classList.add('winner');
    }

    const label = document.createElement('span');
    label.textContent = `${isWinner ? '🏆 ' : ''}#${player.player_position} ${player.player_name} — `;

    const scoreEl = document.createElement('span');
    scoreEl.textContent = `${player.player_score} punto${player.player_score === 1 ? '' : 's'}`;

    item.appendChild(label);
    item.appendChild(scoreEl);
    listEl.appendChild(item);

    if (animate) {
      animateScoreCount(scoreEl, player.player_score);
    }
  }

  return ranked;
}

function showRoundResults() {
  const totalRounds = Math.ceil(quiz.quiz_questions.length / QUESTIONS_PER_ROUND);
  const currentRound = Math.floor(quiz.current_question / QUESTIONS_PER_ROUND);

  roundTitleEl.textContent = `Fin de la ronda ${currentRound} de ${totalRounds}`;
  roundSubtitleEl.textContent = 'Así vas hasta ahora. Tómate un momento y luego continúa.';
  buildRankingList(roundListEl, false);
  showScreen(roundScreen);
}

function showResults() {
  buildRankingList(resultsListEl, true);
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
  feedbackEl.classList.add('hidden');
  confettiEl.innerHTML = '';
  showScreen(startScreen);
});