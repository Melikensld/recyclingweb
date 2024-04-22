package edu.estu.recyclingproject.service;

import edu.estu.recyclingproject.model.User;

import java.util.List;

public interface UserService {
    User saveUser(User user);
    List<User> getAllUsers();
    User authenticateUser(String email, String password);
}
