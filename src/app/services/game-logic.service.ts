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

  getNextGamePlay(gameBoard: string[][]): Observable<GameState> {
    return this.http.post<GameState>(environment.apiUrl, gameBoard);
  }

  // x x x
  // o   o
  // x   x
}
