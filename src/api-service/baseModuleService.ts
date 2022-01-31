import { ApiRequest, apiRequest } from './apiRequest';

export class BaseModuleService {
  apiRequest: ApiRequest;

  constructor() {
    this.apiRequest = apiRequest;
  }
}
