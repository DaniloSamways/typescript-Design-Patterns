/** Abstract Factory Pattern
 * O padrão Abstract Factory define uma interface Fábrica para criar todos os produtos que são parte de uma família de produtos.
 *
 * Neste exemplo, temos duas fábricas de móveis: uma fábrica de móveis modernos e uma fábrica de móveis antigos.
 * Cada fábrica é responsável por criar uma cadeira e uma mesa.
 *
 * Para criar uma nova fábrica de móveis, basta criar uma nova classe que implementa a interface FurnitureFactory.
 */

import { AntiqueFurnitureFactory } from "./factories/AntiqueFurnitureFactory";
import { ModernFurnitureFactory } from "./factories/ModernFurnitureFactory";

/**
 * Móveis Modernos Factory
 */

// Cria a fábrica de móveis modernos
const modernFurnitureFactory = new ModernFurnitureFactory();

const modernChair = modernFurnitureFactory.createChair(); // Cria uma cadeira moderna
const modernTable = modernFurnitureFactory.createTable(); // Cria uma mesa moderna

console.log(modernChair.category());
console.log(modernTable.category());

/**
 * Móveis Antigos Factory
 */

// Cria a fábrica de móveis antigos
const antiqueFurnitureFactory = new AntiqueFurnitureFactory();

const antiqueChair = antiqueFurnitureFactory.createChair(); // Cria uma cadeira antiga
const antiqueTable = antiqueFurnitureFactory.createTable(); // Cria uma mesa antiga

console.log(antiqueChair.category());
console.log(antiqueTable.category());
