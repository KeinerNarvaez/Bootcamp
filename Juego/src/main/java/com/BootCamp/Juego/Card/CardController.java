package com.BootCamp.Juego.Card;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/Card")
@RequiredArgsConstructor
public class CardController {

    private final CardService cardService;

    @GetMapping("/")
    public List<Card> getAllCards(){
        return cardService.getCards();
    }

    @PostMapping("/create")
    public ResponseEntity<Object> createCard(@RequestBody DtoCard dtoCard){
        var message = cardService.createCard(dtoCard);
        return ResponseEntity.status(HttpStatus.CREATED).body(message);
    }
}
