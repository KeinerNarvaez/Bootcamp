package com.BootCamp.Juego.Game;

import com.BootCamp.Juego.Deck.Deck;
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
    @Column(name = "idGame")
    private int idGame;

    @OneToOne
    @JoinColumn(name = "idDeck")
    public Deck idDeck;

    @Column(name = "rounds")
    private int rounds;
}
