import { Service } from "./Service";
import { ServiceProxy } from "./ServiceProxy";

const service = new Service();
const serviceProxy = new ServiceProxy(service);

serviceProxy.request();
