package edu.estu.recyclingproject.controller;

import edu.estu.recyclingproject.dto.RecyclingPointDto;
import edu.estu.recyclingproject.service.RecyclingPointService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/recyclingmaterial")
public class RecyclingPointController {
    @Autowired
    private final RecyclingPointService recyclingPointService;


    public RecyclingPointController(RecyclingPointService recyclingPointService) {
        this.recyclingPointService = recyclingPointService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<RecyclingPointDto>> getAllRecyclingPoints(){
        return ResponseEntity.ok(recyclingPointService.getAllRecyclingPoints());
    }

    @PostMapping
    public ResponseEntity<RecyclingPointDto> createRecyclingPoint(@RequestBody RecyclingPointDto recyclingPointDto) {
        String created = recyclingPointService.saveRecyclingPoint(recyclingPointDto);
        return new ResponseEntity(created, HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<RecyclingPointDto>getRecyclingPointById(@PathVariable long id){
        return ResponseEntity.ok(recyclingPointService.getRecyclingPointById(id));
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> delete(@PathVariable long id){
        return ResponseEntity.ok(recyclingPointService.deleteRecyclingPoint(id));
    }
}
