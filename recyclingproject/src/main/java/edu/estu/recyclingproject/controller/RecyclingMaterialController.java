package edu.estu.recyclingproject.controller;

import edu.estu.recyclingproject.model.RecyclingMaterial;
import edu.estu.recyclingproject.service.RecyclingMaterialService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/recycling")
public class RecyclingMaterialController {

    @Autowired
    private RecyclingMaterialService service;

    @PostMapping("/add")
    public ResponseEntity<RecyclingMaterial> addMaterial(@RequestBody RecyclingMaterial material) {
        return ResponseEntity.ok(service.saveMaterial(material));
    }

    @GetMapping("/get/{id}")
    public ResponseEntity<RecyclingMaterial> getMaterialById(@PathVariable Long id) {
        RecyclingMaterial material = service.getMaterialById(id);
        if (material != null) {
            return ResponseEntity.ok(material);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteMaterial(@PathVariable Long id) {
        service.deleteMaterial(id);
        return ResponseEntity.ok("Material deleted successfully");
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<RecyclingMaterial> updateMaterial(@RequestBody RecyclingMaterial material, @PathVariable Long id) {
        RecyclingMaterial updatedMaterial = service.updateMaterial(material, id);
        if (updatedMaterial != null) {
            return ResponseEntity.ok(updatedMaterial);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<List<RecyclingMaterial>> getMaterialsByUserId(@PathVariable Long userId) {
        List<RecyclingMaterial> materials = service.getMaterialsByUserId(userId);
        if (materials != null && !materials.isEmpty()) {
            return ResponseEntity.ok(materials);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
