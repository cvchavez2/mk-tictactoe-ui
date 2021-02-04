import { fakeAsync, TestBed,tick } from '@angular/core/testing';
import { GameLogicService } from './game-logic.service';
import { HttpClientTestingModule, HttpTestingController, TestRequest } from '@angular/common/http/testing';
import { environment } from 'src/environments/environment';
import { GameState, GameStatus} from '../models/game-state.model';
// class MockGamePlayService{
//   getNextGamePlay(){}
// }


describe('GameLogicService', () => {
  let service: GameLogicService;
  // let mockGamePlay: MockGamePlayService;
  let httpMock: HttpTestingController;
  let gameState: GameState = new GameState();

  beforeEach(() => {
    TestBed.configureTestingModule({
      // providers:[
      //   { provide: mockGamePlay, useClass: MockGamePlayService }
      // ],
      imports: [ HttpClientTestingModule ]
    });
    service = TestBed.inject(GameLogicService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // it('should verify that the request method was GET', (done: DoneFn) => {
  //   var grid = "----x----";
  //   service.getNextGamePlay(grid, "o").subscribe(gameArray => {
  //     done();
  //   });

  //   const req = httpMock.expectOne(environment.apiUrl + "?grid=" + grid + "&compSymb=" + "o");
  //   expect(req.request.method).toBe("POST");
  //   req.flush(null);
  // })

  it('Should return value of API Game Service - (O for Center[1,1])', fakeAsync(()=>{
     var value = [["", "", ""], ["", "", ""], ["", "", ""]];
     gameState.status = GameStatus.Undefined;
     gameState.board = [["", "", ""], ["", "O", ""], ["", "", ""]];
      service.getNextGamePlay(value).subscribe(gs => {
        const lgs: GameState = JSON.parse(gs.toString());
        expect("O").toEqual(lgs.board[1][1]);
        expect(GameStatus.Undefined).toEqual(lgs.status);
      });

      tick();
        let testRequest: TestRequest = httpMock.expectOne("http://localhost:5000/api/game");
        testRequest.flush(JSON.stringify(gameState));
  }));



});
