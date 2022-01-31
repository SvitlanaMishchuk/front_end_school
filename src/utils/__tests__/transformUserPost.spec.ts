import { UserPost } from '../../models';
import { transformUserPost } from '../transformUserPost';
import mockUserFeed from './mocks/mock-user-feed/mockUserFeed.json';
import mockUserFeedWithoutVideoData from './mocks/mock-user-feed/mockUserFeedWithoutVideoData.json';
import mockUserFeedWithAnotherStats from './mocks/mock-user-feed/mockUserFeedWithAnotherStats.json';

const eRUserFeed: UserPost = {
    id: '123',
    cover: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    videoGif: 'https://p16-sign-sg.tiktokcdn.com/obj/tos-alisg-p-0037/2793e67efe2149f6b91164d6556022c9_1636817171?x-expires=1637028000&x-signature=nm9n300RVR%2BkLEki4mjTD%2BPKtJw%3D',
    viewCount: 5400000,
};

const eRUserFeedWithAnotherStats: UserPost = {
    id: '123',
    cover: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    videoGif: 'https://p16-sign-sg.tiktokcdn.com/obj/tos-alisg-p-0037/2793e67efe2149f6b91164d6556022c9_1636817171?x-expires=1637028000&x-signature=nm9n300RVR%2BkLEki4mjTD%2BPKtJw%3D',
    viewCount: undefined,
};

beforeEach(() => {
    const voidFunction = () => undefined;
    global.console.error = jest.fn(voidFunction)
});

afterAll(() => {
    jest.clearAllMocks();
})

test('transformUserPost: transform api response to UserPost', () => {
    expect(transformUserPost(mockUserFeed)).toStrictEqual(eRUserFeed);
    expect(transformUserPost(mockUserFeedWithAnotherStats)).toStrictEqual(eRUserFeedWithAnotherStats);
    expect(() => {transformUserPost(mockUserFeedWithoutVideoData)}).toThrowError();
})