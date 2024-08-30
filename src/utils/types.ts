//Types from the typescript
//That can take one of four string
export type AlgorithmType = "DIJKSTRA" | "A_STAR" | "BFS" | "DFS";
export interface AlgorithmSelectType {
//TS interface that defines the shape of an object used for selecting the algorithms
  name: string;
  value: AlgorithmType;
}

export type MazeType = "NONE" | "BINARY_TREE" | "RECURSIVE_DIVISION";
export interface MazeSelectType {
  name: string;
  value: MazeType;
}

//shape of a tile object in the grid
export type TileType = {
  row: number;
  col: number;
  isEnd: boolean;
  isWall: boolean;
  isPath: boolean;
  distance: number;
  isTraversed: boolean;
  isStart: boolean;
  parent: TileType | null;
};


//2 dimensional array of tiletype objects
export type GridType = TileType[][];


//one of three values
export type SpeedType = 2 | 1 | 0.5;
export interface SpeedSelectType {
  name: string;
  value: SpeedType;
}
