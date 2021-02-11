export class GameState {

    public board : string[][];

    public winLine_StartBox: number;

    public winLine_EndBox: number;

    public status: GameStatus;
}

export enum GameStatus {
    Undefined,
    X,
    O,
    Cats
 }

