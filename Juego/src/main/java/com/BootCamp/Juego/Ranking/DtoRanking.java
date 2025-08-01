package com.BootCamp.Juego.Ranking;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class DtoRanking {

    private int idRanking;
    private int game;
    private int player;
    private int wins;
    private int score;
}
