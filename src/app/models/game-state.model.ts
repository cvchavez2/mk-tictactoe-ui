export class GameState {

    public Board : string[][];

    public WinLine_StartBox: Number;

    public WinLine_EndBox: Number;

    public Status: GameStatus;
}

export enum GameStatus {
    Undefined,
    X,
    O,
    Cats
 }

