import React, { useState, useRef, useMemo } from 'react';
import PauseIcon from '@mui/icons-material/Pause';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { CardMedia, IconButton } from '@mui/material';

import { useStyles } from './styles';
import { Post } from '../../../models';

export var Video = function ({ videoUrl }: Pick<Post, 'videoUrl'>) {
  const [isHovering, setIsHovering] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const reference = useRef<HTMLVideoElement | null>(null);
  const classes = useStyles();

  const handlePlayPause = () => {
    if (!reference.current) {
      return;
    }

    const isPaused = reference.current.paused;
    if (isPaused) {
      reference.current.play();
      setIsPlaying(true);
    } else {
      reference.current.pause();
      setIsPlaying(false);
    }
  };

  const handleHovering = (value: boolean) => () => setIsHovering(value);

  const playPauseButton = useMemo(() => {
    const icon = isPlaying ? <PauseIcon /> : <PlayArrowIcon />;
    if (!isPlaying || isHovering) {
      return (
        <IconButton
          onClick={handlePlayPause}
          classes={{ root: classes.postVideoPlayButton }}
        >
          {icon}
        </IconButton>
      );
    }

    return null;
  }, [isHovering, isPlaying, classes.postVideoPlayButton]);

  return (
    <div
      onMouseEnter={handleHovering(true)}
      onMouseLeave={handleHovering(false)}
      className={classes.postVideoContainer}
    >
      {playPauseButton}
      <CardMedia
        className={classes.postVideo}
        ref={reference}
        component="video"
        image={videoUrl}
      />
    </div>
  );
};
