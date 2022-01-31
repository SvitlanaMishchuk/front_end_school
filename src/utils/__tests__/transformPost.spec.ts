import { Post } from './../../models/Post';
import { transformPost } from "../transformPost";
import mockPost from './mocks/mock-post/mockPost.json';
import mockPostWithoutAuthor from './mocks/mock-post/mockPostWithoutAuthor.json';
import mockPostWithoutHashtags from './mocks/mock-post/mockPostWithoutHashtags.json';

const eRMockPost: Post = {
    id: '123',
    author: {
        id: '123',
        name:'testName' ,
        nickName: 'Test Name', 
        avatar: 'https://static.vecteezy.com/system/resources/thumbnails/001/993/889/small/beautiful-latin-woman-avatar-character-icon-free-vector.jpg'
    },
    text: 'Inst: kikakim🤍',
    videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    hashtags: [
        {
            id: '1',
            name: 'ouhmanalta'
        },
        {
            id: '2',
            name: 'test 2'
        }
    ],
    likesCount: 4100000,
    commentsCount: 20100
};

beforeEach(() => {
    const voidFunction = () => undefined;
    global.console.error = jest.fn(voidFunction)
});

afterAll(() => {
    jest.clearAllMocks();
})


test('transformPost: transform api response to Post', () => {
    expect(transformPost(mockPost)).toStrictEqual(eRMockPost);
    expect(() => {transformPost(mockPostWithoutAuthor)}).toThrowError();
    expect(() => {transformPost(mockPostWithoutHashtags)}).toThrowError();
})

