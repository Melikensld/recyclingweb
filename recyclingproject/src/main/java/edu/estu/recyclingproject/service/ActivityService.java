package edu.estu.recyclingproject.service;

import edu.estu.recyclingproject.dto.ActivityDto;

import java.util.List;


public interface ActivityService {
    ActivityDto saveActivity(ActivityDto activityDto);
    List<ActivityDto> getAllActivities();
    ActivityDto getActivityById(Long id);
    void deleteActivity(Long id);
}
