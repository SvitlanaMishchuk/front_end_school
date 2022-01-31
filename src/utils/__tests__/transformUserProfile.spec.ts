import { UserProfile } from "../../models";
import { transformUserProfile } from "../transformUserProfile";
import mockUserProfile from "./mocks/mock-user-profile/mockUserProfile.json";
import mockUserProfileWithoutStats from "./mocks/mock-user-profile/mockUserProfileWithoutStats.json";
import mockUserProfileWithoutUserData from "./mocks/mock-user-profile/mockUserProfileWithoutUserData.json";

const eRMockUserProfile: UserProfile = {
    id: '123',
    avatar: 'https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/a4777fe51994e2ff798bdc9dd1100846.jpeg?x-expires=1637089200&x-signature=U5vtfhg6CM%2BmKOh6DT24I0SecWk%3D',
    name: 'testName',
    nickName: 'Test Name',
    signature: '@xoteam Instagram: @kikakim Cooperation: kikakim.booking@gmail.com',
    followersCount: 24000000,
    followingCount: 88,
    likesCount: 626900000,
};

const eRMockUserProfileWithoutStats: UserProfile = {
    id: '123',
    avatar: 'https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/a4777fe51994e2ff798bdc9dd1100846.jpeg?x-expires=1637089200&x-signature=U5vtfhg6CM%2BmKOh6DT24I0SecWk%3D',
    name: 'testName',
    nickName: 'Test Name',
    signature: '@xoteam Instagram: @kikakim Cooperation: kikakim.booking@gmail.com',
    followersCount: undefined,
    followingCount: undefined,
    likesCount: undefined,
};

beforeEach(() => {
    const voidFunction = () => undefined;
    global.console.error = jest.fn(voidFunction)
});

afterAll(() => {
    jest.clearAllMocks();
})

test('transformUserProfile: transform api response to UserProfile', () => {
    expect(transformUserProfile(mockUserProfile)).toStrictEqual(eRMockUserProfile);
    expect(transformUserProfile(mockUserProfileWithoutStats)).toStrictEqual(eRMockUserProfileWithoutStats);
    expect(() => {transformUserProfile(mockUserProfileWithoutUserData)}).toThrowError();
})