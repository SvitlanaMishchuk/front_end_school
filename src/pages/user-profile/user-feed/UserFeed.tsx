import React from 'react';
import { useGetUserFeed } from '../../../api-hooks/useGetUserFeed';
import { UserPost, UserProfile } from '../../../models';
import { UserPostItem } from './components/index';
import { useStyles } from './styles';

export const UserFeed = ({ name }: Pick<UserProfile, 'name'>) => {
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
