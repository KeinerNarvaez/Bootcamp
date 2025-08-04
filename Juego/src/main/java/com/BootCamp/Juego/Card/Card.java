package com.BootCamp.Juego.Card;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity(name = "Card")
public class Card {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idCard", nullable = false)
    private int idCard;

    @Column(name = "name", length = 50, nullable = false)
    private String name;

    @Lob
    @Column(name = "image_url", length = 800, nullable = false)
    private String imageUrl;

    @Column(name = "st_Heal", nullable = false)
    private int st_Heal;

    @Column(name = "st_Speed", nullable = false)
    private int st_Speed;

    @Column(name = "st_Defense", nullable = false)
    private int st_Defense;

    @Column(name = "st_Power", nullable = false)
    private int st_Power;

    @Column(name = "st_Intelligence", nullable = false)
    private int st_Intelligence;

    @Column(name = "st_Total", nullable = false)
    private int st_Total;
}
