import { Typography } from '@mui/material';
import { Post } from '../../../models';
import { useStyles } from './styles';

export interface TitleProperties
  extends Pick<Post['author'], 'name' | 'nickName'> {
  onClick: VoidFunction;
}
export const Title = ({ name, nickName, onClick }: TitleProperties) => {
  const classes = useStyles();
  return (
    <div
      role="link"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={onClick}
      className={classes.postTitle}
    >
      <Typography fontWeight="bold" component="span">
        {name}
      </Typography>
      <Typography variant="caption" component="span">
        {nickName}
      </Typography>
    </div>
  );
};
