package com.BootCamp.Juego.Player;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@NoArgsConstructor
@AllArgsConstructor
public class PlayerService {

    private IPlayer repository;
}
