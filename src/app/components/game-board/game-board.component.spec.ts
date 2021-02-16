import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { GameState, GameStatus } from 'src/app/models/game-state.model';
import { GameLogicService } from 'src/app/services/game-logic.service';

import { GameBoardComponent } from './game-board.component';

describe('GameBoardComponent', () => {
  let component: GameBoardComponent;
  let fixture: ComponentFixture<GameBoardComponent>;
  let gameLogicServiceStub= {
    getNextGamePlay(gameBoard: string[][]): Observable<GameState> {
      let gameState = new GameState();
      gameState.board = [["", "", ""], ["", "", ""], ["", "", ""]];
      return of(gameState);
    },
  };
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        { provide: GameLogicService, useValue: gameLogicServiceStub },
      ],
      declarations: [ GameBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
