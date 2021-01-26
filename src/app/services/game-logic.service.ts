import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GameState } from '../models/game-state.model';
// import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameLogicService {

  constructor(private http: HttpClient) { 
    
  }

  // "    x    " - when x is center square: "?grid=%20%20%20%20x%20%20%20%20%20"
  getNextGamePlay(gameBoard: string[][]): Observable<GameState> {
    return this.http.post<GameState>(environment.apiUrl, gameBoard);
    //return this.http.post(environment.apiUrl + "?grid=" + gameGrid + "&compSymb=" + computerSymbol, null);
  }

  // x x x
  // o   o
  // x   x
}
