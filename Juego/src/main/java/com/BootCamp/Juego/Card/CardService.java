package com.BootCamp.Juego.Card;

import com.BootCamp.Juego.Response.ResponseDto;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class CardService {

    private final ICard CardRepository;

    public List<Card> getCards() {
        log.debug("Getting card list");
        return CardRepository.findAll();
    }

    public ResponseDto createCard(DtoCard dtoCard) {
        try{
            Card card = new Card();

            card.setName(dtoCard.getName());
            card.setImageUrl(dtoCard.getImageUrl());
            card.setSt_Heal(dtoCard.getSt_Heal());
            card.setSt_Speed(dtoCard.getSt_Speed());
            card.setSt_Defense(dtoCard.getSt_Defense());
            card.setSt_Power(dtoCard.getSt_Power());
            card.setSt_Intelligence(dtoCard.getSt_Intelligence());
            card.setSt_Total(dtoCard.getSt_Total());

            return new ResponseDto("SUCCESS", "Card created successfully");

        }catch(Exception e){
            log.error("Error creating Card");
            return new ResponseDto("ERROR", "Error creating card");
        }
    }
}
