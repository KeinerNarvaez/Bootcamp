package com.BootCamp.Juego.Ranking;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@NoArgsConstructor
@AllArgsConstructor
public class RankingService {

    private IRanking repository;
}
