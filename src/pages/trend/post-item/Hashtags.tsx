import { Chip } from '@mui/material';
import { Post, Hashtag } from '../../../models';
import { useStyles } from './styles';

export const Hashtags = ({ hashtags }: Pick<Post, 'hashtags'>) => {
  const classes = useStyles();
  const renderTags = hashtags.map((tag: Hashtag) => (
    <Chip label={`#${tag.name}`} key={tag.id} size="small" />
  ));

  return <div className={classes.tags}>{renderTags}</div>;
};
