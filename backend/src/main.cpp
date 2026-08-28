#include "server_setup.hpp"

#include <netinet/in.h>
#include <sys/socket.h>

int main()
{
  network::server server;
  server.run();

  return 0;
}
