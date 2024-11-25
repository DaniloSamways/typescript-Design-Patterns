export class House {
  public parts: string[] = [];

  public listParts(): void {
    console.log(`House parts: ${this.parts.join(", ")}\n`);
  }

  public addPart(part: string): void {
    this.parts.push(part);
  }
}
