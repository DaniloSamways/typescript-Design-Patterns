import { ISubscriber } from "./Subscriber";

// A interface IPublisher declara um conjunto de métodos para gerenciar os objetos subscriber
export interface IPublisher {
  // Injeta um subscriber no Publisher
  attach(subscriber: ISubscriber): void;

  // Remove um subscriber do Publisher
  detach(subscriber: ISubscriber): void;

  // Notifica todos os subscribers sobre eventos
  notify(): void;
}

export class Publisher implements IPublisher {
  public state: number = 0;
  private subscribers: ISubscriber[] = [];

  // Método de inscrição
  public attach(subscriber: ISubscriber): void {
    const isExist = this.subscribers.includes(subscriber);
    if (isExist) {
      return console.log("Publisher: subscriber já foi inserido.");
    }

    console.log("Publisher: subscriber inserido.");
    this.subscribers.push(subscriber);
  }

  // Método de remover incrição
  public detach(subscriber: ISubscriber): void {
    const subscriberIndex = this.subscribers.indexOf(subscriber);
    if (subscriberIndex === -1) {
      return console.log("Publisher: subscriber não existente.");
    }

    this.subscribers.splice(subscriberIndex, 1);
    console.log("Publisher: subscriber removido.");
  }

  // Método de notificação
  public notify(): void {
    console.log("Publisher: Notificando subscribers...");
    for (const subscriber of this.subscribers) {
      subscriber.update(this);
    }
  }

  // Método para atualizar o estado do Publisher
  public updateState(state: number): void {
    console.log("Publisher: Atualizando estado do Publisher...");
    this.state = state;
    this.notify();
  }
}
