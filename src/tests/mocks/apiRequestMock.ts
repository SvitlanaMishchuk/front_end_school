import * as api from '../../api-service/apiRequest';

const resolve = (response: any) => jest.fn(() => Promise.resolve(response));
const reject = (error: any) => jest.fn(() => Promise.reject(error));

export const createApiRequestMocks = (response: any = undefined, failure: boolean = false) => {
  const mockedApiRequest = failure ? reject(response) : resolve(response);
  return jest.spyOn(api, 'apiRequest').mockImplementationOnce(mockedApiRequest);
};
