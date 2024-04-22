package edu.estu.recyclingproject.service;

import edu.estu.recyclingproject.model.User;

import java.util.List;

public interface UserService {
    public User saveUser(User user);
    public List<User> getAllUsers();
}
