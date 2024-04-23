package edu.estu.recyclingproject.service.impl;

import edu.estu.recyclingproject.dto.ActivityDto;
import edu.estu.recyclingproject.service.ActivityService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ActivityServiceImpl implements ActivityService {
    @Override
    public ActivityDto saveActivity(ActivityDto activityDto) {
        return null;
    }

    @Override
    public List<ActivityDto> getAllActivities() {
        return null;
    }

    @Override
    public ActivityDto getActivityById(Long id) {
        return null;
    }

    @Override
    public void deleteActivity(Long id) {

    }
}
