import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
// import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameLogicService {

  constructor(private http: HttpClient) { 
    
  }

  // "    x    " - when x is center square: "?grid=%20%20%20%20x%20%20%20%20%20"
  getNextGamePlay(gameGrid: string, computerSymbol: string): any {
    return this.http.get(environment.apiUrl + "?grid=" + gameGrid + "&compSymb=" + computerSymbol);
  }
}
