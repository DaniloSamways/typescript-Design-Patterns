import {
  ChairFurniture,
  ModernChairFurniture,
} from "../furnitures/ChairFurniture";
import {
  TableFurniture,
  ModernTableFurniture,
} from "../furnitures/TableFurniture";
import { FurnitureFactory } from "./FurnitureFactory";

// Implementação concreta da fábrica de móveis modernos
export class ModernFurnitureFactory implements FurnitureFactory {
  public createChair(): ChairFurniture {
    return new ModernChairFurniture();
  }

  public createTable(): TableFurniture {
    return new ModernTableFurniture();
  }
}
