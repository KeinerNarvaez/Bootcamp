package com.BootCamp.Juego.Ranking;

import com.BootCamp.Juego.Player.Player;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
}
