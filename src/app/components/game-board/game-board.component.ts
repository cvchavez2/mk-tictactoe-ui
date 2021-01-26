import { Component, OnInit } from '@angular/core';
import { GameState } from 'src/app/models/game-state.model';
import { GameLogicService } from 'src/app/services/game-logic.service';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.css']
})
export class GameBoardComponent implements OnInit {
  sign22:string = "_";

  gameState: GameState;
  
  constructor(private gameLogicService: GameLogicService) { }

  ngOnInit(): void {
  }

}
