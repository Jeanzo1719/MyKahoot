#ifndef FILE_DESCRIPTOR_HPP
#define FILE_DESCRIPTOR_HPP

#include <unistd.h>

namespace raii_classes
{
  class file_descriptor
  {
  private:
    int m_file_descriptor;

  public:
    explicit file_descriptor(int file_descriptor) : m_file_descriptor(file_descriptor) {}

    file_descriptor(const file_descriptor&) = delete;
    file_descriptor& operator=(const file_descriptor&) = delete;

    file_descriptor(file_descriptor&& other) noexcept : m_file_descriptor(other.m_file_descriptor)
    {
      other.m_file_descriptor = -1;
    }

    file_descriptor& operator=(file_descriptor&& other) noexcept
    {
      if (this != &other)
      {
        if (m_file_descriptor >= 0)
        {
          close(m_file_descriptor);
        }

        m_file_descriptor = other.m_file_descriptor;
        other.m_file_descriptor = -1;
      }

      return *this;
    }

    [[nodiscard]]
    int get() const
    {
      return m_file_descriptor;
    }

    ~file_descriptor()
    {
      if (m_file_descriptor >= 0)
      {
        close(m_file_descriptor);
      }
    }
  };
} // namespace raii_classes

#endif
