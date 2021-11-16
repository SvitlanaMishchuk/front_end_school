import { useGetTrendingFeed } from "../../api-hooks/useGetTrendingFeed";

const Trend = () => {
  const { posts, isFetching } = useGetTrendingFeed();

  return <>trend</>;
};

export default Trend;
