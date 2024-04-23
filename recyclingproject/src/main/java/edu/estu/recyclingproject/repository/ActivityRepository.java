package edu.estu.recyclingproject.repository;

import edu.estu.recyclingproject.model.Activity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ActivityRepository  extends JpaRepository<Activity, Long> {
}
