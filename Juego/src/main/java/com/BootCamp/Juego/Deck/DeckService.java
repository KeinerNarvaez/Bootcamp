package com.BootCamp.Juego.Deck;

import com.BootCamp.Juego.Response.ResponseDto;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class DeckService {

    private final IDeck DeckRepository;

    public List<Deck> getDeck() {
        log.debug("Getting player list");
        return DeckRepository.findAll();
    }

    public ResponseDto createDeck(DtoDeck dtoDeck) {
        try {
            Deck deck = new Deck();
            deck.setName(dtoDeck.getNombre());

            DeckRepository.save(deck);
            log.info("Creating deck");

            return new ResponseDto("SUCCESS", "Ranking created successfully");

        }catch (Exception e){
            log.error("Error creating Ranking");
            return new ResponseDto("ERROR", "Error creating Ranking");
        }
    }


    private DtoDeck converToDtoDeck(Deck deck) {
        DtoDeck dtoDeck = new DtoDeck();
        dtoDeck.setIdDeck(deck.getIdDeck());
        dtoDeck.setIdCard(dtoDeck.getIdCard());
        dtoDeck.setNombre(deck.getName());
        return dtoDeck;
    }
}
