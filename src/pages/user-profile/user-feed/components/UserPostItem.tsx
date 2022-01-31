import React from 'react';
import { UserPost } from '../../../../models';
import { useStyles } from '../styles';
import { PostInfo } from './PostInfo';
import { PostPreview } from './PostPreview';

export const UserPostItem = (post: UserPost) => {
  const classes = useStyles();
  return (
    <div className={classes.postItemContainer}>
      <PostPreview />
      <PostInfo {...post} />
    </div>
  );
};
