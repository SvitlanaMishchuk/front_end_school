import { createApiRequestMocks } from "../../tests/mocks/apiRequestMock"
import { UserService } from "../userService";

test('UserService: getUserProfile success', () => {
    const apiRequestMock = createApiRequestMocks();

    const userServiceInstance = new UserService();
    userServiceInstance.getUserProfile('test');
    expect(apiRequestMock).toBeCalledWith('/mocks/user-profile.json');
});

test('UserService: getUserProfile failure', () => {
    const apiRequestMock = createApiRequestMocks('failure getUserProfile', true);

    const userServiceInstance = new UserService();
    userServiceInstance.getUserProfile('test').catch((e) => {
        expect(e).toBe('failure getUserProfile');
    });
});

test('UserService: getUserFeed success', () => {
    const apiRequestMock = createApiRequestMocks();

    const userServiceInstance = new UserService();
    userServiceInstance.getUserFeed('test', 1);
    expect(apiRequestMock).toBeCalledWith('/mocks/user-post.json');
});

test('UserService: getUserFeed failure', () => {
    const apiRequestMock = createApiRequestMocks('failure getUserFeed', true);

    const userServiceInstance = new UserService();
    userServiceInstance.getUserFeed('test', 1).catch((e) => {
        expect(e).toBe('failure getUserFeed');
    })
});

afterAll(() => {
    jest.clearAllMocks();
})