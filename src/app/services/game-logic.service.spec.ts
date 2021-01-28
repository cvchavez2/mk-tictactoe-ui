import { TestBed } from '@angular/core/testing';
import { GameLogicService } from './game-logic.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { environment } from 'src/environments/environment';

// class MockGamePlayService{
//   getNextGamePlay(){}
// }


fdescribe('GameLogicService', () => {
  let service: GameLogicService;
  // let mockGamePlay: MockGamePlayService;
  let httpMock: HttpTestingController;
 

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

  it('should verify that the request method was GET', (done: DoneFn) => {
    var grid = "----x----";
    service.getNextGamePlay(grid, "o").subscribe(gameArray => {
      done();
    });

    const req = httpMock.expectOne(environment.apiUrl + "?grid=" + grid + "&compSymb=" + "o");
    expect(req.request.method).toBe("POST");
    req.flush(null);
  })

});
