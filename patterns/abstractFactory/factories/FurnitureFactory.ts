import { ChairFurniture } from "../furnitures/ChairFurniture";
import { TableFurniture } from "../furnitures/TableFurniture";

// Interface base para as fábricas de móveis
export interface FurnitureFactory {
  createChair(): ChairFurniture;
  createTable(): TableFurniture;
}
