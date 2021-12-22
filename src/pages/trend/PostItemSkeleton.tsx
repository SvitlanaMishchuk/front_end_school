import { Card, CardHeader, Skeleton } from '@mui/material';

export var PostItemSkeleton = function () {
  return (
    <Card>
      <CardHeader
        avatar={(
          <Skeleton
            animation="wave"
            variant="circular"
            width={40}
            height={40}
          />
        )}
        title={(
          <Skeleton
            animation="wave"
            height={10}
            width="80%"
            style={{ marginBottom: 6 }}
          />
        )}
        subheader={<Skeleton animation="wave" height={10} width="40%" />}
      />
      <Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" />
    </Card>
  );
};
