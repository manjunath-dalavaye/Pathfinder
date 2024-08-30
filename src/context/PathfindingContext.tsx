import { ReactNode, createContext, useState } from "react";
import { AlgorithmType, GridType, MazeType } from "../utils/types";
import { createGrid } from "../utils/helpers";
import {
  END_TILE_CONFIGURATION,
  START_TILE_CONFIGURATION,
} from "../utils/constants";

interface PathfindingContextInterface {
// algorithm: Current algorithm type.
// setAlgorithm: Function to set the algorithm type.
// maze: Current maze type.
// setMaze: Function to set the maze type.
// grid: Current grid.
// setGrid: Function to set the grid.

  algorithm: AlgorithmType;
  setAlgorithm: (algorithm: AlgorithmType) => void;
  maze: MazeType;
  setMaze: (maze: MazeType) => void;
  grid: GridType;
  setGrid: (grid: GridType) => void;
  isGraphVisualized: boolean;
  setIsGraphVisualized: (isGraphVisualized: boolean) => void;
}

//Creates a context with a default value of undefined.
export const PathfindingContext = createContext<
  PathfindingContextInterface | undefined
>(undefined);


//Functional component that provides the context value to its children.
export const PathfindingProvider = ({ children }: { children: ReactNode }) => {
  const [algorithm, setAlgorithm] = useState<AlgorithmType>("BFS");
  const [maze, setMaze] = useState<MazeType>("NONE");
  const [grid, setGrid] = useState<GridType>(
    //starting and ending configaration in the project
    createGrid(START_TILE_CONFIGURATION, END_TILE_CONFIGURATION)
  );
  const [isGraphVisualized, setIsGraphVisualized] = useState<boolean>(false);

  return (
    <PathfindingContext.Provider
    //Passes an object with the current state and setter functions to the provider
      value={{
        algorithm,
        setAlgorithm,
        maze,
        setMaze,
        grid,
        setGrid,
        isGraphVisualized,
        setIsGraphVisualized,
      }}
    >
      {children}
      {/* Renders any nested components inside the provider */}
    </PathfindingContext.Provider>
  );
};


//This code sets up a context provider for a pathfinding application using React and TypeScript. The PathfindingProvider component maintains the state of the algorithm type, maze type, grid, and visualization status. It provides these values and their corresponding setter functions to any child components through the PathfindingContext. This allows for centralized state management and easy access to these values across the component tree.






