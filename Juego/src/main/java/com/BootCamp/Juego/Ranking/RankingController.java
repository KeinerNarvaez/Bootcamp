package com.BootCamp.Juego.Ranking;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/Ranking")
@RequiredArgsConstructor
public class RankingController {

    private final RankingService rankingService;

    @GetMapping("/")
    public List<Ranking> getAllRanking(){
        return rankingService.getRankings();
    }

    @PostMapping("/create")
    public ResponseEntity<Object> cratePlayer(@RequestBody DtoRanking dtoRanking){
        var message = rankingService.createRanking(dtoRanking);
        return ResponseEntity.status(HttpStatus.CREATED).body(message);
    }

}
