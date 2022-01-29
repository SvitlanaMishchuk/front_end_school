import React from 'react';
import { Typography } from '@mui/material';

import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { numberFormatter } from '../../../../helpers';
import { UserPost } from '../../../../models';
import { useStyles } from '../styles';

export const PostInfo = ({ viewCount }: UserPost) => {
  const classes = useStyles();
  return (
    <div className={classes.postInfoContainer}>
      <PlayArrowIcon />
      <Typography>{numberFormatter(viewCount)}</Typography>
    </div>
  );
};
