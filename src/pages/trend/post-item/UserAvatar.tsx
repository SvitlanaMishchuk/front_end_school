import { Post } from '../../../models';
import { useStyles } from './styles';

export const UserAvatar = ({
  avatar,
  name,
}: Pick<Post['author'], 'avatar' | 'name'>) => {
  const classes = useStyles();
  return <img className={classes.avatar} src={avatar} alt={name} />;
};
