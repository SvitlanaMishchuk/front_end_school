import { useState, useRef, useEffect } from 'react';
import { mockVideoUrl } from '../constants';
import { useStyles } from '../styles';

export const PostPreview = () => {
  const classes = useStyles();
  const [isHovering, setIsHovering] = useState(false);

  const reference = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (!reference.current) {
      return;
    }

    if (isHovering) {
      reference.current.play();
    } else {
      reference.current.pause();
    }
  }, [isHovering]);

  const handleHovering = (value: boolean) => () => setIsHovering(value);

  return (
    <video
      onMouseEnter={handleHovering(true)}
      onMouseLeave={handleHovering(false)}
      ref={reference}
      className={classes.imgPreview}
      muted
      src={mockVideoUrl}
    />
  );
};
