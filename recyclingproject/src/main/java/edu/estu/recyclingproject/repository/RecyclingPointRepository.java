package edu.estu.recyclingproject.repository;


import edu.estu.recyclingproject.model.RecyclingPoint;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RecyclingPointRepository extends JpaRepository<RecyclingPoint, Long> {
}
