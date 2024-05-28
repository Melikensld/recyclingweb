package edu.estu.recyclingproject.service.impl;

import edu.estu.recyclingproject.dto.UserDto;
import edu.estu.recyclingproject.model.RecyclingMaterial;
import edu.estu.recyclingproject.model.User;
import edu.estu.recyclingproject.repository.UserRepository;
import edu.estu.recyclingproject.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepository userRepository;

    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public String saveUser(UserDto userDto) {
        User user = new User();
        user.setName(userDto.getName());
        user.setEmail(userDto.getEmail());
        user.setPassword(userDto.getPassword());
        user.setPhone(userDto.getPhone());
        user.setAddress(userDto.getAddress());

        userRepository.save(user);

        return "User added successfully";}

    @Override
    public List<UserDto> getAllUsers() {
        List<User> users = userRepository.findAll();

        List<UserDto> userDtos = new ArrayList<>();

        users.forEach(user -> {

            UserDto userDto = UserDto.builder()
                    .name(user.getName())
                    .email(user.getEmail())
                    .password(user.getPassword())
                    .phone(user.getPhone())
                    .address(user.getAddress())
                    .build();

            userDtos.add(userDto);
        });

        return userDtos;
    }

    @Override
    public UserDto getUserById(long id) {
        User user = userRepository.findById(id).orElse(null);

        if (user == null) {
            throw new RuntimeException("User not found with id: " + id);
        }

        return UserDto.builder()
                .name(user.getName())
                .email(user.getEmail())
                .password(user.getPassword())
                .phone(user.getPhone())
                .address(user.getAddress())
                .build();
    }

    @Override
    public String updateUser(UserDto userDto, long id) {
        User user = userRepository.findById(id).orElse(null);

        if (user == null) {
            throw new RuntimeException("User not found with id: " + id);
        }
        userRepository.save(user);

        return "User updated successfully";
    }

    @Override
    @Transactional
    public String deleteUser(long id) {
        userRepository.deleteById(id);
        return "User deleted successfully";
    }

    @Override
    public User authenticateUser(String email, String password) {
        return userRepository.findByEmailAndPassword(email, password);
    }


    public List<RecyclingMaterial> getUserMaterials(Long userId) {
        User user = userRepository.findById(userId).orElse(null);
        if (user != null) {
            return user.getRecyclingMaterials();
        }
        return null;
    }
}
