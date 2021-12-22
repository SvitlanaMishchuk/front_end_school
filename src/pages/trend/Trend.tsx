import { useGetTrendingFeed } from '../../api-hooks/useGetTrendingFeed';
import { Post } from '../../models';
import { PostItem } from './post-item';
import { PostItemSkeleton } from './PostItemSkeleton';
import { useStyles } from './styles';
import { TrendErrorDialog } from './TrendErrorDialog';

const skeletonCount = 5;
const Trend = function () {
  const classes = useStyles();
  const {
    posts, refetch, isFetching, isFetched, error,
  } = useGetTrendingFeed();

  if (isFetching) {
    const renderArray = [...Array.from({ length: skeletonCount })].map((_, index) => (
      <PostItemSkeleton key={index} />
    ));
    return <div className={classes.container}>{renderArray}</div>;
  }

  const renderPostList = posts.map((post: Post) => (
    <PostItem {...post} key={post.id} />
  ));

  if (isFetched && error) {
    return <TrendErrorDialog refetch={refetch} />;
  }

  return <div className={classes.container}>{renderPostList}</div>;
};

export default Trend;
