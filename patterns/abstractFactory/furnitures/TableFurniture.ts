// Interface base para os móveis do tipo mesa
export interface TableFurniture {
  category(): string;
}

// Implementações concretas para os móveis do tipo mesa (mesa moderna e mesa antiga)
export class ModernTableFurniture implements TableFurniture {
  category(): string {
    return "Mesa Moderna";
  }
}

export class AntiqueTableFurniture implements TableFurniture {
  category(): string {
    return "Mesa Antiga";
  }
}
