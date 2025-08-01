package com.BootCamp.Juego.Ranking;

import com.BootCamp.Juego.Game.Game;
import com.BootCamp.Juego.Player.Player;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity(name = "Ranking")
public class Ranking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_Ranking")
    private int idRanking;

    @ManyToOne
    @JoinColumn(name = "id_Game")
    public Game idgame;

    @ManyToOne
    @JoinColumn(name = "id_Player")
    public Player idplayer;

    @Column(name = "Wins")
    private int wins;

    @Column(name = "score")
    private int score;

}
