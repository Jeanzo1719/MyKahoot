#ifndef SERVER_HPP
#define SERVER_HPP

#include "file_descriptor.hpp"

#include <netinet/in.h>

namespace network
{
  class server
  {
  private:
    raii_classes::file_descriptor m_server_fd;
    sockaddr_in m_server_address{};
    static constexpr int m_server_port = 8080;

    void handle_client(raii_classes::file_descriptor client_fd);

  public:
    explicit server();

    void run();
  };
} // namespace network

#endif
