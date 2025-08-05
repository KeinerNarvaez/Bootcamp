package com.BootCamp.Juego.Deck;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/Deck")
@RequiredArgsConstructor
public class DeckController {

    private final DeckService deckService;

    @GetMapping("/")
    public List<Deck> getDecks(){
        return deckService.getDeck();
    }

    @PostMapping("/create")
    public ResponseEntity<Object> createDeck(@RequestBody DtoDeck dtoDeck){
        var message = deckService.createDeck(dtoDeck);
        return ResponseEntity.status(HttpStatus.CREATED).body(message);

    }
}
