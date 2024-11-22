import { IService, Service } from "./Service";

export class ServiceProxy implements IService {
  constructor(private realService: Service) {}

  public request(): void {
    if (this.checkAccess()) {
      this.realService.request();
      this.logAccess();
    }
  }

  private checkAccess(): boolean {
    console.log("ServiceProxy: Verificando acesso.");
    return true;
  }

  private logAccess(): void {
    console.log("ServiceProxy: Registrando o momento da requisição.");
  }
}
