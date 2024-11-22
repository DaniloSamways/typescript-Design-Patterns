/** Proxy Pattern
 *  Um proxy recebe solicitações, realiza alguma tarefa, e passa a solicitação
 *  para um objeto de serviço. O proxy pode ser usado para adicionar segurança,
 *  controle de acesso, log, etc.
 */

import { Service } from "./Service";
import { ServiceProxy } from "./ServiceProxy";

const service = new Service();
const serviceProxy = new ServiceProxy(service);

serviceProxy.request();
