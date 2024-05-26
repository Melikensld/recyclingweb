package edu.estu.recyclingproject.controller;

import edu.estu.recyclingproject.dto.UserDto;
import edu.estu.recyclingproject.model.User;
import edu.estu.recyclingproject.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
public class UserController {
    @Autowired
    private UserService userService;
    public UserController(UserService userService){
        this.userService = userService;
    }

    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody UserDto userDto) {
        userService.saveUser(userDto);
        return ResponseEntity.ok("User registered successfully");
    }

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestParam String email, @RequestParam String password) {
        User authenticatedUser = userService.authenticateUser(email, password);
        if (authenticatedUser != null) {
            return ResponseEntity.ok("Login successful");
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
        }
    }
    @GetMapping("/{id}")
    public ResponseEntity<UserDto> getUserById(@PathVariable long id) {
        return ResponseEntity.ok(userService.getUserById(id));
    }
    @PostMapping("/add")
    public String add(@RequestBody UserDto userDto) {
        userService.saveUser(userDto);
        return "User added successfully";
    }

    @GetMapping("/getAll")
    public List<UserDto> getAllUsers() {
        return userService.getAllUsers();
    }
    @PutMapping("/update/{id}")
    public ResponseEntity<String> update(@RequestBody UserDto userDto, @PathVariable long id){
        return ResponseEntity.ok(userService.updateUser(userDto, id));
    }
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> delete(@PathVariable long id){
        return ResponseEntity.ok(userService.deleteUser(id));
    }
}
