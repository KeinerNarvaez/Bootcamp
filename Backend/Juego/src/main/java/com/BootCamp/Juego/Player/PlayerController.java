package com.BootCamp.Juego.Player;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/Player")
@RequiredArgsConstructor
public class PlayerController {

    private final PlayerService playerService;


    @GetMapping("/")
    public List<Player>getAllPlayers(){
        return playerService.getPlayers();
    }

    @PostMapping("/create")
    public ResponseEntity<Object> cratePlayer(@RequestBody DtoPlayer dtoPlayer){
        var message = playerService.createPlayer(dtoPlayer);
        return ResponseEntity.status(HttpStatus.CREATED).body(message);
    }
}
