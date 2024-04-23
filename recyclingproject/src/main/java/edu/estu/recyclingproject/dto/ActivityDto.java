package edu.estu.recyclingproject.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ActivityDto {
    private Long id;
    private Long userId;
    private Long materialId;
    private LocalDateTime timestamp;
    private double quantity;

}
