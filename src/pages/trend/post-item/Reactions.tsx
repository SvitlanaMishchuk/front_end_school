import React from 'react';
import { IconButton, Badge } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import { Post } from '../../../models';
import { numFormatter as numberFormatter } from '../../../helpers';
import { useStyles } from './styles';

export var Reactions = function ({
  likesCount,
  commentsCount,
}: Pick<Post, 'likesCount' | 'commentsCount'>) {
  const classes = useStyles();
  return (
    <>
      <IconButton
        disableRipple
        disabled
        className={classes.postLikes}
      >
        <Badge
          badgeContent={numberFormatter(likesCount)}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          color="primary"
        >
          <FavoriteIcon fontSize="large" color="action" />
        </Badge>
      </IconButton>
      <IconButton
        disableRipple
        disabled
        className={classes.postLikes}
      >
        <Badge
          badgeContent={numberFormatter(commentsCount)}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          color="primary"
        >
          <ChatBubbleIcon fontSize="large" color="action" />
        </Badge>
      </IconButton>
    </>
  );
};
