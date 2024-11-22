import { IPublisher, Publisher } from "./Publisher";

// A Interface ISubscriber declara o método de atualização, usado pelos pulishers
export interface ISubscriber {
  // Recebe a atualização do publisher
  update(subject: IPublisher): void;
}

export class Subscriber implements ISubscriber {
  public update(subject: IPublisher): void {
    if (subject instanceof Publisher && subject.state < 3) {
      console.log("Subscriber: Reagindo ao evento.");
    }
  }
}
