#ifndef CORE_HPP
#define CORE_HPP

#include <string>
#include <vector>

namespace game
{
  struct player
  {
    std::string player_name;
    int player_score = 0;
    int8_t player_position;
  };

  struct question
  {
    std::string question_text;
    std::vector<std::string> question_answers;
    std::string correct_answer;
  };

  struct quiz
  {
    std::vector<question> quiz_questions;
    std::vector<player> quiz_players;
    int current_question = 0;
  };
} // namespace game

#endif
