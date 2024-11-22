export interface IHandler<Request = string, Result = string | null> {
  setNext(handler: IHandler<Request, Result>): IHandler<Request, Result>;
  handle(request: Request): Result;
}

export abstract class AbstractHandler implements IHandler {
  private nextHandler!: IHandler;

  public setNext(handler: IHandler): IHandler {
    this.nextHandler = handler;
    return handler;
    // Retornando o handler para permitir a conexão de handlers em linha
    // ex.: monkey.setNext(squirrel).setNext(dog);
  }

  public handle(request: string): string | null {
    if (this.nextHandler) {
      return this.nextHandler.handle(request);
    }

    return null;
  }
}
