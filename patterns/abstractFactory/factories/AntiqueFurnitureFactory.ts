import {
  AntiqueChairFurniture,
  ChairFurniture,
} from "../furnitures/ChairFurniture";
import {
  TableFurniture,
  AntiqueTableFurniture,
} from "../furnitures/TableFurniture";
import { FurnitureFactory } from "./FurnitureFactory";

// Implementação concreta da fábrica de móveis antigos
export class AntiqueFurnitureFactory implements FurnitureFactory {
  public createChair(): ChairFurniture {
    return new AntiqueChairFurniture();
  }

  public createTable(): TableFurniture {
    return new AntiqueTableFurniture();
  }
}
