import { render, screen } from '@testing-library/react';
import { UserPost } from '../../../../../models';
import { PostInfo } from '../PostInfo';

const argPostRightViewCount: UserPost = {
    id: '123',
    cover: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    videoGif: 'https://p16-sign-sg.tiktokcdn.com/obj/tos-alisg-p-0037/2793e67efe2149f6b91164d6556022c9_1636817171?x-expires=1637028000&x-signature=nm9n300RVR%2BkLEki4mjTD%2BPKtJw%3D',
    viewCount: 1342,
};

const argPostwithUndefinedViewCount: UserPost = {
    id: '123',
    cover: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    videoGif: 'https://p16-sign-sg.tiktokcdn.com/obj/tos-alisg-p-0037/2793e67efe2149f6b91164d6556022c9_1636817171?x-expires=1637028000&x-signature=nm9n300RVR%2BkLEki4mjTD%2BPKtJw%3D',
    viewCount: undefined,
};

test('PostInfo: render right view count', async () => {
    render( <PostInfo {...argPostRightViewCount}/>);
    const viewCount = screen.getByText(/1.3K/i);
    expect(viewCount).toBeInTheDocument();
});

test('PostInfo: render with undefined', async () => {
    render( <PostInfo {...argPostwithUndefinedViewCount}/>);
    const viewCountElement = screen.queryByTestId('printed-viewcount');
    expect(viewCountElement).toBeEmptyDOMElement();
});

// test('PostInfo: render right element by role', async () => {
//     render( <PostInfo {...argPostRightViewCount}/>);
//     const viewCountElement = screen.getByRole('');
//     expect(viewCountElement).toBeInTheDocument();
// })