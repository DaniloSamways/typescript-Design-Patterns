import { HouseBuilder } from "./Builder";

export class HouseDirector {
  private builder!: HouseBuilder;

  public setBuilder(builder: HouseBuilder): void {
    this.builder = builder;
  }

  public buildSimpleHouse(): void {
    this.builder.addDoors();
    this.builder.addWalls();
    this.builder.addWindows();
  }

  public buildModernHouse(): void {
    this.builder.addDoors();
    this.builder.addWalls();
    this.builder.addWindows();
    this.builder.addPool();
  }
}
