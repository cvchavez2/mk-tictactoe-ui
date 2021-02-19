import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { GameState, GameStatus } from 'src/app/models/game-state.model';
import { CommunicationService } from 'src/app/services/communication/communication.service';
import { GameLogicService } from 'src/app/services/game-logic.service';
import { GameTileComponent } from '../game-tile/game-tile.component';

import { GameBoardComponent } from './game-board.component';

describe('GameBoardComponent', () => {
  let component: GameBoardComponent;
  let fixture: ComponentFixture<GameBoardComponent>;
  let gameLogicServiceStub = {
    getNextGamePlay(gameBoard: string[][]): Observable<GameState> {
      let gameState = new GameState();
      gameState.board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
      ];
      return of(gameState);
    },
  };
  let communicationService: CommunicationService = new CommunicationService();

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        providers: [
          { provide: GameLogicService, useValue: gameLogicServiceStub },
          { provide: CommunicationService, useValue: communicationService },
        ],
        declarations: [GameBoardComponent, GameTileComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(GameBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('restart should clear board', () => {
    component.gameState.board[0][0] = 'X';
    component.gameState.board[0][1] = 'X';
    component.gameState.board[0][2] = 'X';
    component.gameState.status = GameStatus.X;
    component.gameState.winLine_StartBox = 1;
    component.gameState.winLine_EndBox = 3;
    component.restart();
    expect(component.gameState.board[0][0]).toEqual('');
    expect(component.gameState.board[0][1]).toEqual('');
    expect(component.gameState.board[0][2]).toEqual('');
    expect(component.gameState.status).toBe(0);
    expect(component.gameState.winLine_EndBox).toEqual(undefined);
    expect(component.gameState.winLine_StartBox).toEqual(undefined);
  });

  it('communication reloadBoard should clear board', () => {
    component.gameState.board[0][0] = 'X';
    component.gameState.board[0][1] = 'X';
    component.gameState.board[0][2] = 'X';
    component.gameState.status = GameStatus.X;
    component.gameState.winLine_StartBox = 1;
    component.gameState.winLine_EndBox = 3;
    communicationService.reloadBoard();
    expect(component.gameState.board[0][0]).toEqual('');
    expect(component.gameState.board[0][1]).toEqual('');
    expect(component.gameState.board[0][2]).toEqual('');
    expect(component.gameState.status).toBe(0);
    expect(component.gameState.winLine_EndBox).toEqual(undefined);
    expect(component.gameState.winLine_StartBox).toEqual(undefined);
  });

  // describe('ShowWinner', ()=>{
  //   component.gameState.board[0][0] = 'X_';
  // });

  describe('ngOnInit', ()=>{
    it('should call restart function', () => {
      const restartSpy = spyOn(component, 'restart');
      component.ngOnInit();
      expect(restartSpy).toHaveBeenCalled();
    });
  });

  describe('restart', () =>{
    it('it should clear the game state', () => {
      component.gameState.board = [
        ['X', '', ''],
        ['X', 'O', ''],
        ['', '', 'O'],
      ];
      component.restart();
      expect(component.gameState.board).toEqual([
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
      ]);
    });
  });

  describe('checkWinner', () => {
    it('should return true if win line is populated', ()=>{
      component.gameState.winLine_StartBox = 1;
      component.gameState.winLine_EndBox = 3;
      expect(component.checkWinner(1)).toBeTruthy();
      expect(component.checkWinner(2)).toBeTruthy();
      expect(component.checkWinner(3)).toBeTruthy();
      expect(component.checkWinner(4)).toBeFalsy();
    });
  });
});
