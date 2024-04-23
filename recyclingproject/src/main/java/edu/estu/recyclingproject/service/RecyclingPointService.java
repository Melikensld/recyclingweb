package edu.estu.recyclingproject.service;

import edu.estu.recyclingproject.dto.RecyclingPointDto;

import java.util.List;

public interface RecyclingPointService {

    String saveRecyclingPoint(RecyclingPointDto recyclingPointDto) ;


    List<RecyclingPointDto> getAllRecyclingPoints();

    RecyclingPointDto getRecyclingPointById(long id);

    String deleteRecyclingPoint(long id);

}
