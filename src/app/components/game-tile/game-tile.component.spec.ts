import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { GameBoardComponent } from '../game-board/game-board.component';

import { GameTileComponent } from './game-tile.component';

describe('GameTileComponent', () => {
  let component: GameTileComponent;
  let fixture: ComponentFixture<GameTileComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [RouterTestingModule],
        declarations: [GameTileComponent, GameBoardComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(GameTileComponent);
    component = fixture.componentInstance;
    component.x = 0;
    component.y = 0;
    component.sign = 'X';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not let me move the same move twice', () => {
    component.sign = 'X';
    spyOn(component.tileClickEvent, 'emit');
    component.clickTile();
    expect(component.tileClickEvent.emit).not.toHaveBeenCalled();
  });
});
