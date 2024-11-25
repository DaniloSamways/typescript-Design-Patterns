import { House } from "./House";

interface IHouseBuilder {
  addWalls(): void;
  addDoors(): void;
  addWindows(): void;
  addPool(): void;
}

export class HouseBuilder implements IHouseBuilder {
  private house: House;

  constructor() {
    this.house = new House();
  }

  public reset(): void {
    this.house = new House();
  }

  public getHouse(): House {
    const result = this.house;
    this.reset();
    return result;
  }

  public addWalls(): void {
    this.house.addPart("walls");
  }

  public addDoors(): void {
    this.house.addPart("doors");
  }

  public addWindows(): void {
    this.house.addPart("windows");
  }

  public addPool(): void {
    this.house.addPart("pool");
  }
}
