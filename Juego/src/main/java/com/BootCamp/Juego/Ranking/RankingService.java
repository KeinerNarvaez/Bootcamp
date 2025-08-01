package com.BootCamp.Juego.Ranking;

import com.BootCamp.Juego.Response.ResponseDto;
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

    public ResponseDto createRanking(DtoRanking dtoRanking) {
        try{
            Ranking ranking = new Ranking();
            ranking.setIdRanking(dtoRanking.getIdRanking());
            ranking.setWins(dtoRanking.getWins());
            ranking.setScore(dtoRanking.getScore());

            RankingRepository.save(ranking);
            return new ResponseDto("SUCCESS", "Ranking created successfully");

        }catch(Exception e){
            log.error("Error creating Ranking");
            return new ResponseDto("ERROR", "Error creating Ranking");
        }
    }

    public ResponseDto updateRanking(DtoRanking dtoRanking) {
        try {
            Ranking ranking = new Ranking();

            ranking.setWins(dtoRanking.getWins());
            ranking.setScore(dtoRanking.getScore());

            RankingRepository.save(ranking);
            return new ResponseDto("SUCCESS", "Ranking updated successfully");

        }catch(Exception e){
            log.error("Error Update Ranking");
            return new ResponseDto("ERROR", "Error Update Ranking");
        }

    }

}
