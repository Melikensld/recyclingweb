package edu.estu.recyclingproject.controller;


import edu.estu.recyclingproject.dto.ActivityDto;
import edu.estu.recyclingproject.service.ActivityService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/activity")
public class ActivityController {


    private final ActivityService activityService;

    public ActivityController(ActivityService activityService) {
        this.activityService = activityService;
    }


    @PostMapping
    public ResponseEntity<ActivityDto> createActivity(@RequestBody ActivityDto activityDto) {
        ActivityDto created = activityService.saveActivity(activityDto);
        return new ResponseEntity<>(created, HttpStatus.CREATED);
    }

    @GetMapping
    public List<ActivityDto> getAllActivities() {
        return activityService.getAllActivities();
    }

    @GetMapping("/{id}")
    public ResponseEntity<ActivityDto> getActivityById(@PathVariable Long id) {
        ActivityDto activityDto = activityService.getActivityById(id);
        return activityDto != null ? ResponseEntity.ok(activityDto) : ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteActivity(@PathVariable Long id) {
        activityService.deleteActivity(id);
        return ResponseEntity.ok().build();
    }
}
