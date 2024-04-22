package edu.estu.recyclingproject.service;

import edu.estu.recyclingproject.model.User;
import edu.estu.recyclingproject.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService{
    @Autowired
    private UserRepository userRepository;

    @Override
    public User saveUser(User user) {
        return userRepository.save(user);
    }

    @Override
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @Override
    public User authenticateUser(String email, String password) {
        return userRepository.findByEmailAndPassword(email, password);
    }
}
