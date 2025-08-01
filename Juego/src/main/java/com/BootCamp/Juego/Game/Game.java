package com.BootCamp.Juego.Game;

import com.BootCamp.Juego.Deck.Deck;
import com.BootCamp.Juego.Player.Player;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity(name = "Game")
public class Game {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_Game")
    private int idGame;

    @ManyToOne
    @JoinColumn(name = "id_Player")
    public Player player;

    @OneToOne
    @JoinColumn(name = "id_Deck")
    public Deck deck;

    @Column(name = "score")
    private int score;

    @Column(name = "rounds")
    private int rounds;
}
