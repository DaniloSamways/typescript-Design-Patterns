/** Chain of Responsability Pattern
 * Padrão que permite passar uma solicitação ao longo de uma cadeia de handlers,
 * até que um deles a processe.
 */

import { DogHandler } from "./handlers/DogHandler";
import { MonkeyHandler } from "./handlers/MonkeyHandler";
import { SquirrelHandler } from "./handlers/SquirrelHandler";

const monkey = new MonkeyHandler();
const squirrel = new SquirrelHandler();
const dog = new DogHandler();

monkey.setNext(squirrel).setNext(dog);

const food = "Nut";

console.log(monkey.handle(food));
