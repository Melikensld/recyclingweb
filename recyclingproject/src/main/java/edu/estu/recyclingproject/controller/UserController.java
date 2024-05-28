package edu.estu.recyclingproject.controller;

import edu.estu.recyclingproject.dto.UserDto;
import edu.estu.recyclingproject.model.RecyclingMaterial;
import edu.estu.recyclingproject.model.User;
import edu.estu.recyclingproject.service.RecyclingMaterialService;
import edu.estu.recyclingproject.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/user")
public class UserController {
    @Autowired
    private UserService userService;

    @Autowired
    private RecyclingMaterialService recyclingMaterialService;
    public UserController(UserService userService){
        this.userService = userService;
    }

    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody UserDto userDto) {
        userService.saveUser(userDto);
        return ResponseEntity.ok("User registered successfully");
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestParam String email, @RequestParam String password) {
        User authenticatedUser = userService.authenticateUser(email, password);
        if (authenticatedUser != null) {
            Map<String, Object> response = new HashMap<>();
            response.put("message", "Login successful");
            response.put("userId", authenticatedUser.getId()); // Kullanıcı ID'sini ekle
            return ResponseEntity.ok(response);
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
        }
    }
    @GetMapping("/{id}")
    public ResponseEntity<UserDto> getUserById(@PathVariable long id) {
        UserDto user = userService.getUserById(id);
        if (user == null) {
            return ResponseEntity.notFound().build(); // Kullanıcı bulunamazsa 404 dön
        }

        List<RecyclingMaterial> materials = recyclingMaterialService.getMaterialsByUserId(id);
        Map<String, Double> materialMap = materials.stream()
                .collect(Collectors.groupingBy(RecyclingMaterial::getMaterialType,
                        Collectors.summingDouble(RecyclingMaterial::getQuantity)));

        UserDto userProfileDto = new UserDto();
        userProfileDto.setName(user.getName());
        userProfileDto.setEmail(user.getEmail());
        userProfileDto.setPhone(user.getPhone());
        userProfileDto.setAddress(user.getAddress());
        userProfileDto.setMaterials(materialMap);

        return ResponseEntity.ok(userProfileDto);
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

    @PostMapping("/{id}/materials")
    public ResponseEntity<Map<String, String>> addOrUpdateMaterial(@PathVariable Long id, @RequestBody Map<String, Double> materials) {
        materials.forEach((materialType, quantity) -> {
            RecyclingMaterial material = new RecyclingMaterial();
            material.setMaterialType(materialType);
            material.setQuantity(quantity);
            recyclingMaterialService.saveOrUpdateMaterial(material, id);
        });
        Map<String, String> response = new HashMap<>();
        response.put("message", "Materials updated successfully");
        return ResponseEntity.ok(response);
    }
}
