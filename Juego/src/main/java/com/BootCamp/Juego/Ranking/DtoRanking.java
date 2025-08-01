package com.BootCamp.Juego.Ranking;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class DtoRanking {

    private int idRanking;
    private int idGame;
    private int idPlayer;
    private int wins;
    private int score;
}
