import { Post } from '../../../models';
import { useStyles } from './styles';

export var UserAvatar = function ({
  avatar,
  name,
}: Pick<Post['author'], 'avatar' | 'name'>) {
  const classes = useStyles();
  return <img className={classes.avatar} src={avatar} alt={name} />;
};
