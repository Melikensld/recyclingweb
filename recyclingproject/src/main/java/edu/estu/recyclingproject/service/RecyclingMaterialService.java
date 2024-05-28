package edu.estu.recyclingproject.service;

import edu.estu.recyclingproject.model.RecyclingMaterial;

import java.util.List;

public interface RecyclingMaterialService {
    RecyclingMaterial saveMaterial(RecyclingMaterial material);
    RecyclingMaterial getMaterialById(Long id);
    void deleteMaterial(Long id);
    RecyclingMaterial updateMaterial(RecyclingMaterial material, Long id);
    List<RecyclingMaterial> getMaterialsByUserId(Long userId);

    RecyclingMaterial saveOrUpdateMaterial(RecyclingMaterial material, Long userId);
    RecyclingMaterial findByUserIdAndMaterialType(Long userId, String materialType);
}
