package com.BootCamp.Juego.Player;

import com.BootCamp.Juego.Response.ResponseDto;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class PlayerService {

    private  final IPlayer PlayerRepository;

    public List<Player> getPlayers() {
        log.debug("Getting player list");
        return PlayerRepository.findAll();
    }

    public ResponseDto createPlayer(DtoPlayer dtoPlayer) {
        try{
            Player player = new Player();
            player.setName(dtoPlayer.getName());

            PlayerRepository.save(player);
            log.info("Created Player" );

            return new ResponseDto("SUCCESS", "Player created successfully");

        } catch (Exception e) {
            log.error("Error creating player");
            return new ResponseDto("ERROR", "Error creating player");
        }
    }

    private DtoPlayer converToDto(Player player) {
        DtoPlayer dtoPlayer = new DtoPlayer();
        dtoPlayer.setIdPlayer((int) player.getIdPlayer());
        dtoPlayer.setName(player.getName());
        return dtoPlayer;
    }
}
