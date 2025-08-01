package com.BootCamp.Juego.Game;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class DtoGame {

    private int idGame;
    private int player;
    private int deck;
    private int score;
}
