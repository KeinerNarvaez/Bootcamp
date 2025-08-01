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

    private ICard CardRepository;

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

    private DtoCard convertToDtoCard(Card card) {
        DtoCard dtoCard = new DtoCard();
        dtoCard.setName(card.getName());
        dtoCard.setImageUrl(card.getImageUrl());
        dtoCard.setSt_Heal(card.getSt_Heal());
        dtoCard.setSt_Speed(card.getSt_Speed());
        dtoCard.setSt_Defense(card.getSt_Defense());
        dtoCard.setSt_Power(card.getSt_Power());
        dtoCard.setSt_Intelligence(card.getSt_Intelligence());
        dtoCard.setSt_Total(card.getSt_Total());
        return dtoCard;
    }
}
