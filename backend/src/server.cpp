#include "server.hpp"

#include <cstddef>
#include <cstring>
#include <iostream>
#include <stdexcept>
#include <unistd.h>

#include <sys/socket.h>

using namespace network;

server::server() : m_server_fd(socket(AF_INET, SOCK_STREAM, 0))
{
  if (m_server_fd.get() < 0)
  {
    throw std::runtime_error("Couldn't initialize the socket");
  }

  m_server_address.sin_family = AF_INET;
  m_server_address.sin_port = htons(m_server_port);
  m_server_address.sin_addr.s_addr = htonl(INADDR_LOOPBACK);

  if (bind(m_server_fd.get(),
           reinterpret_cast<sockaddr*>(&m_server_address),
           sizeof(m_server_address)) < 0)
  {
    throw std::runtime_error("Bind error");
  }

  if (listen(m_server_fd.get(), 10) < 0)
  {
    throw std::runtime_error("Listen error");
  }
}

void server::handle_client(raii_classes::file_descriptor client_fd)
{
  std::cout << "\033[32m Client connected\033[0m \n";

  while (true)
  {
    char request_buffer[1024];
    ssize_t request_bytes = recv(client_fd.get(), request_buffer, sizeof(request_buffer) - 1, 0);

    if (request_bytes <= 0)
    {
      break;
    }

    request_buffer[static_cast<std::size_t>(request_bytes)] = '\0';

    std::cout << "\033[32m Request received \033[0m \n"
              << request_buffer << "\n"
              << request_bytes << "\n";

    const char* server_response = "Hello from pure C++ backend\n";
    std::size_t response_length = strlen(server_response);
    std::size_t total_sent = 0;

    while (total_sent < response_length)
    {
      ssize_t sent_bytes =
          send(client_fd.get(), server_response + total_sent, response_length - total_sent, MSG_NOSIGNAL);

      if (sent_bytes < 0)
      {
        return;
      }

      total_sent += static_cast<std::size_t>(sent_bytes);
    }
  }
}

void server::run()
{
  std::cout << "Server listening in 127.0.0.1:8080\n";

  while (true)
  {
    int fd = accept(m_server_fd.get(), nullptr, nullptr);

    if (fd < 0)
    {
      continue;
    }

    handle_client(raii_classes::file_descriptor(fd));
  }
}
