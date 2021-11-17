import { Avatar, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { useGetUserFeed } from "../../api-hooks/useGetUserFeed";
import { UserPost, UserProfile } from "../../models";
import { makeStyles } from "@mui/styles";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { numFormatter } from "../../helpers";

const useStyles = makeStyles({
  userFeedContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 3fr)",
    gridGap: 8,
  },
  postItemContainer: {
    position: "relative",
  },
  imgPreview: {
    width: "100%",
  },
  postInfoContainer: {
    position: "absolute",
    left: 10,
    bottom: 10,
    color: "#fff",
    display: "grid",
    gridTemplateColumns: "24px auto",
  },
});

const PostPreview = (post: UserPost) => {
  const classes = useStyles();
  const [isHovering, setIsHovering] = useState(false);

  const ref = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    isHovering ? ref.current.play() : ref.current.pause();
  }, [isHovering]);

  const handleHovering = (val: boolean) => () => setIsHovering(val);

  return (
    <video
      onMouseEnter={handleHovering(true)}
      onMouseLeave={handleHovering(false)}
      ref={ref}
      className={classes.imgPreview}
      muted={true}
      src={
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4"
      }
    />
  );
};

export const UserPostItem = (post: UserPost) => {
  const classes = useStyles();
  return (
    <div className={classes.postItemContainer}>
      <PostPreview {...post} />
      <PostInfo {...post} />
    </div>
  );
};

export const PostInfo = (post: UserPost) => {
  const classes = useStyles();
  return (
    <div className={classes.postInfoContainer}>
      <PlayArrowIcon />
      <Typography>{numFormatter(post.viewCount)}</Typography>
    </div>
  );
};

export const UserFeed = ({ name }: Pick<UserProfile, "name">) => {
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
