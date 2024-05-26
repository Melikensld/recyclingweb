package edu.estu.recyclingproject.service;

import edu.estu.recyclingproject.model.RecyclingMaterial;
import edu.estu.recyclingproject.repository.RecyclingMaterialRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RecyclingMaterialServiceImpl implements RecyclingMaterialService {

    @Autowired
    private RecyclingMaterialRepository repository;

    @Override
    public RecyclingMaterial saveMaterial(RecyclingMaterial material) {
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
            existingMaterial.setPaper(material.getPaper());
            existingMaterial.setMetal(material.getMetal());
            existingMaterial.setGlass(material.getGlass());
            existingMaterial.setPlastic(material.getPlastic());
            return repository.save(existingMaterial);
        }
        return null;
    }
}
