package com.BootCamp.Juego.Ranking;

import com.BootCamp.Juego.Game.Game;
import com.BootCamp.Juego.Player.Player;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity(name = "Ranking")
public class Ranking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idRanking")
    private int idRanking;

    @ManyToOne
    @JoinColumn(name = "idGame")
    public Game idGame;

    @ManyToOne
    @JoinColumn(name = "idPlayer")
    public Player idplayer;

    @Column(name = "Wins")
    private int wins;

    @Column(name = "score")
    private int score;

}
