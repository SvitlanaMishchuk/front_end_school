import { ApiService } from "../apiService";

test('ApiService: services have been implemented', () => {
    const apiServiceInstance = new ApiService();

    expect(apiServiceInstance.feedService).toBeDefined();
    expect(apiServiceInstance.userService).toBeDefined();
})