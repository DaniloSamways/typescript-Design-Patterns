// Interfaces base para os móveis do tipo cadeira
export interface ChairFurniture {
  category(): string;
}

// Implementações concretas para os móveis do tipo cadeira (cadeira moderna e cadeira antiga)
export class ModernChairFurniture implements ChairFurniture {
  category(): string {
    return "Cadeira Moderna";
  }
}

export class AntiqueChairFurniture implements ChairFurniture {
  category(): string {
    return "Cadeira Antiga";
  }
}
