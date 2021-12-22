import { Typography } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import { makeStyles } from '@mui/styles';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { useGetUserFeed } from '../../api-hooks/useGetUserFeed';
import { UserPost, UserProfile } from '../../models';
import { numFormatter as numberFormatter } from '../../helpers';

const useStyles = makeStyles({
  userFeedContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 3fr)',
    gridGap: 8,
  },
  postItemContainer: {
    position: 'relative',
  },
  imgPreview: {
    width: '100%',
  },
  postInfoContainer: {
    position: 'absolute',
    left: 10,
    bottom: 10,
    color: '#fff',
    display: 'grid',
    gridTemplateColumns: '24px auto',
  },
});

const PostPreview = function (post: UserPost) {
  const classes = useStyles();
  const [isHovering, setIsHovering] = useState(false);

  const reference = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (!reference.current) {
      return;
    }

    isHovering ? reference.current.play() : reference.current.pause();
  }, [isHovering]);

  const handleHovering = (value: boolean) => () => setIsHovering(value);

  return (
    <video
      onMouseEnter={handleHovering(true)}
      onMouseLeave={handleHovering(false)}
      ref={reference}
      className={classes.imgPreview}
      muted
      src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4"
    />
  );
};

export var UserPostItem = function (post: UserPost) {
  const classes = useStyles();
  return (
    <div className={classes.postItemContainer}>
      <PostPreview {...post} />
      <PostInfo {...post} />
    </div>
  );
};

export var PostInfo = function (post: UserPost) {
  const classes = useStyles();
  return (
    <div className={classes.postInfoContainer}>
      <PlayArrowIcon />
      <Typography>{numberFormatter(post.viewCount)}</Typography>
    </div>
  );
};

export var UserFeed = function ({ name }: Pick<UserProfile, 'name'>) {
  const { posts } = useGetUserFeed(name);
  const classes = useStyles();

  return (
    <div className={classes.userFeedContainer}>
      {posts.map((post: UserPost) => (
        <UserPostItem key={post.id} {...post} />
      ))}
    </div>
  );
};
