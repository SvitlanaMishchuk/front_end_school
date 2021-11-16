import { useGetTrendingFeed } from "../../api-hooks/useGetTrendingFeed";
import { Post } from "../../models";
import { PostItem } from "./post-item";
import { useStyles } from "./styles";

const Trend = () => {
  const classes = useStyles();
  const { posts, isFetching } = useGetTrendingFeed();

  const renderPostList = posts.map((post: Post) => (
    <PostItem {...post} key={post.id} />
  ));

  return <div className={classes.container}>{renderPostList}</div>;
};

export default Trend;
