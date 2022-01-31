import { createApiRequestMocks } from '../../tests/mocks/apiRequestMock';
import { BaseModuleService } from '../baseModuleService';

test('BaseModuleService: apiRequest to be defined', async () => {
  createApiRequestMocks('1', false);
  const inst = new BaseModuleService();
  expect(inst.apiRequest).toBeDefined();
});
