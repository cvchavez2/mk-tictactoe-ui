import { ReadVarExpr } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { exit } from 'process';
import { GameState, GameStatus } from 'src/app/models/game-state.model';
import { CommunicationService } from 'src/app/services/communication/communication.service';
import { GameLogicService } from 'src/app/services/game-logic.service';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.css'],
})
export class GameBoardComponent implements OnInit {
  gameState: GameState;

  constructor(
    private gameLogicService: GameLogicService,
    private readonly communicationService: CommunicationService
  ) {
    this.communicationService.reloadEvent.subscribe(() => {
      this.restart();
    });
  }

  ngOnInit(): void {
    this.restart();
  }

  restart(): void {
    this.gameState = new GameState();
    this.gameState.board = [
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
    ];
    this.gameState.status = GameStatus.Undefined;
  }

  tileClick($event) {
    if (this.gameState.status === GameStatus.Undefined) {
      this.gameState.board[$event.x][$event.y] = 'X';
      this.gameLogicService
        .getNextGamePlay(this.gameState.board)
        .subscribe((gs) => {
          this.gameState = gs;
        });
    }
  }
  computerFirst(): void {
    this.restart();
    this.gameLogicService
      .getNextGamePlay(this.gameState.board)
      .subscribe((gs) => {
        this.gameState = gs;
      });
  }

  checkWinner(val: number): boolean {
    let mid: number;
    if (this.gameState.winLine_EndBox != null || this.gameState.winLine_EndBox != 0) {
      mid = (this.gameState.winLine_EndBox + this.gameState.winLine_StartBox) / 2;
      if (
        this.gameState.winLine_EndBox == val || this.gameState.winLine_StartBox == val ||
        mid == val) {
        return true;
      }
    }

    return false;
  }
}
