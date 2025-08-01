package com.BootCamp.Juego.Deck;

import com.BootCamp.Juego.Card.Card;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity(name = "Deck")
public class Deck {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idDeck")
    private int idDeck;

    @ManyToOne
    @JoinColumn(name = "idCard")
    public Card idCard;

    @Column(name = "name", length = 50, nullable = false)
    private String name;


}
