export class GameState {

    public board : string[][];
    
    public winLine_StartBox: Number;

    public winLine_EndBox: Number;
    
    public status: GameStatus;    
}

export enum GameStatus {
    Undefined,
    X,
    O,
    Cats
 }

