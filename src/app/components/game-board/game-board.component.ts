import { Component, OnInit } from '@angular/core';
import { GameState, GameStatus } from 'src/app/models/game-state.model';
import { CommunicationService } from 'src/app/services/communication/communication.service';
import { GameLogicService } from 'src/app/services/game-logic.service';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.css']
})
export class GameBoardComponent implements OnInit {
  gameState: GameState;

  constructor(private gameLogicService: GameLogicService,
    private communicationService: CommunicationService) {
    communicationService.reloadEvent.subscribe(() => {
      this.restart();
    })
  }

  ngOnInit(): void {
    this.restart();
  }

  restart() {
    this.gameState = new GameState();
    this.gameState.board = [["", "", ""], ["", "", ""], ["", "", ""]];
    this.gameState.status = GameStatus.Undefined;
  }

  tileClick($event) {
    if (this.gameState.status === GameStatus.Undefined) {
      this.gameState.board[$event.x][$event.y] = "X";
      this.gameLogicService.getNextGamePlay(this.gameState.board).subscribe(gs => {
        this.gameState = gs;
      });
    }
  }
}
