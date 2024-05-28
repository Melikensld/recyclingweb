package edu.estu.recyclingproject.repository;

import edu.estu.recyclingproject.model.RecyclingMaterial;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RecyclingMaterialRepository extends JpaRepository<RecyclingMaterial, Long> {
    List<RecyclingMaterial> findAllByUserId(Long userId);
}
