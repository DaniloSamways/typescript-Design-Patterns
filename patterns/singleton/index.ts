/** Singleton
 *  Garante que apenas um objeto da classe exista, e fornece um ponto de acesso global para ele.
 */

class Singleton {
  static #instance: Singleton;

  private constructor() {}

  public static get instance(): Singleton {
    if (!this.#instance) {
      this.#instance = new Singleton();
    }

    return this.#instance;
  }

  public fazerAlgumaCoisa() {
    // Regra de negócio
  }
}

const s1 = Singleton.instance;
const s2 = Singleton.instance;

if (s1 === s2) {
  console.log("Singleton funcionou, os dois objetos são iguais");
} else {
  console.log("Singleton falhou, os dois objetos são diferentes");
}
