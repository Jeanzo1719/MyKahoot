cmake_minimum_required(VERSION 3.25)
project(MyKahoot LANGUAGES CXX)

set(SOURCES
  src/main.cpp
  src/game.hpp
  src/server.hpp
  src/server.cpp
  src/file_descriptor.hpp
)

add_executable(${PROJECT_NAME}
  ${SOURCES}
)
