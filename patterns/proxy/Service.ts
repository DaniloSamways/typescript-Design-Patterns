export interface IService {
  request(): void;
}

export class Service implements IService {
  public request(): void {
    console.log("Service: Manipulando a requisição.");
  }
}
