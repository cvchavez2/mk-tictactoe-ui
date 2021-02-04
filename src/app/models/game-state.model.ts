export class GameState {

    public board : string[][];
    
    public winLine_StartBox: Number;

    public winLine_EndBox: Number;
    
    public status: GameStatus;    
}

enum GameStatus {
    Undefined,
    X,
    O,
    Cats
 }

