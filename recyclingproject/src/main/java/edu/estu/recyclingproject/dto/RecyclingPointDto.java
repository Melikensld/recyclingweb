package edu.estu.recyclingproject.dto;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class RecyclingPointDto {

    private Long id;
    private String name;
    private double latitude;
    private double longitude;


}
