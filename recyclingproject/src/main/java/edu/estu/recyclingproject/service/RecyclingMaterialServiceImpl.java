package edu.estu.recyclingproject.service;

import edu.estu.recyclingproject.model.RecyclingMaterial;
import edu.estu.recyclingproject.model.User;
import edu.estu.recyclingproject.repository.RecyclingMaterialRepository;
import edu.estu.recyclingproject.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RecyclingMaterialServiceImpl implements RecyclingMaterialService {

    @Autowired
    private RecyclingMaterialRepository repository;

    @Autowired
    private UserRepository userRepository;

    @Override
    public RecyclingMaterial saveMaterial(RecyclingMaterial material) {
        if (material.getUser() == null || material.getUser().getId() == null) {
            throw new RuntimeException("User ID is required");
        }

        User user = userRepository.findById(material.getUser().getId()).orElseThrow(() ->
                new RuntimeException("User not found"));

        material.setUser(user);
        return repository.save(material);
    }
    @Override
    public RecyclingMaterial getMaterialById(Long id) {
        return repository.findById(id).orElse(null);
    }

    @Override
    public void deleteMaterial(Long id) {
        repository.deleteById(id);
    }

    @Override
    public RecyclingMaterial updateMaterial(RecyclingMaterial material, Long id) {
        RecyclingMaterial existingMaterial = repository.findById(id).orElse(null);
        if (existingMaterial != null) {
            existingMaterial.setMaterialType(material.getMaterialType());
            existingMaterial.setQuantity(material.getQuantity());
            return repository.save(existingMaterial);
        }
        return null;
    }

    @Override
    public List<RecyclingMaterial> getMaterialsByUserId(Long userId) {
        return repository.findAllByUserId(userId);
    }
}
