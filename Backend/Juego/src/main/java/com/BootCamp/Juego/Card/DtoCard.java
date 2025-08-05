package com.BootCamp.Juego.Card;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class DtoCard {

    private int idCard;
    private String name;
    private String imageUrl;
    private int st_Heal;
    private int st_Speed;
    private int st_Defense;
    private int st_Power;
    private int st_Intelligence;
    private int st_Total;
}
