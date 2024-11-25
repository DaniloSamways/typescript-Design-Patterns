/** Builder Pattern
 *  Permite a construção de objetos complexos passo a passo.
 */

import { HouseBuilder } from "./Builder";
import { HouseDirector } from "./Director";

const director = new HouseDirector();

const builder = new HouseBuilder();
director.setBuilder(builder);

console.log("Casa Simples: ");
director.buildSimpleHouse();
builder.getHouse().listParts();

console.log("Casa Moderna: ");
director.buildModernHouse();
builder.getHouse().listParts();

console.log("Casa Customizada: ");
builder.addDoors();
builder.addWalls();
builder.getHouse().listParts();
