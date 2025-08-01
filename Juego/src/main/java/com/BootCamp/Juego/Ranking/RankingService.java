package com.BootCamp.Juego.Ranking;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class RankingService {

    private final IRanking RankingRepository;

    public List<Ranking> getRankings() {
        log.debug("Getting list of rankings");
        return RankingRepository.findAll();
    }
}
