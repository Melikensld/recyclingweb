package edu.estu.recyclingproject.service;

import edu.estu.recyclingproject.dto.UserDto;
import edu.estu.recyclingproject.model.User;

import java.util.List;

public interface UserService {

    String saveUser(UserDto userDto);

    List<UserDto> getAllUsers();

    UserDto getUserById(long id);

    String updateUser(UserDto userDto, long id);

    String deleteUser(long id);
    User authenticateUser(String email, String password);
}
