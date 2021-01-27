import { Component, OnInit } from '@angular/core';
import { GameState } from 'src/app/models/game-state.model';
import { GameLogicService } from 'src/app/services/game-logic.service';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.css']
})
export class GameBoardComponent implements OnInit {
  gameState: GameState;
  
  constructor(private gameLogicService: GameLogicService) { }

  ngOnInit(): void {
    this.gameState = new GameState();
    this.gameState.Board = [["", "", ""], ["", "", ""], ["", "", ""]];
  }

  tileClick($event){
    this.gameState.Board[$event.x][$event.y] = "X";

    this.gameLogicService.getNextGamePlay(this.gameState.Board).subscribe(gs=>{
      this.gameState = gs;
    });
  }
}
