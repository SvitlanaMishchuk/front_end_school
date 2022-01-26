import { Card, CardHeader, CardContent } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { Post } from '../../../models';

import { Reactions } from './Reactions';
import { UserAvatar } from './UserAvatar';
import { Title } from './Title';
import { Hashtags } from './Hashtags';
import { Video } from './Video';
import { routes } from '../../../constants';

export const PostItem = ({
  author,
  text,
  likesCount,
  commentsCount,
  videoUrl,
  hashtags,
}: Post) => {
  const navigate = useNavigate();

  const handleGoToUser = () => {
    const url = routes.profile.replace(':name', author.name);
    navigate(url);
  };

  return (
    <Card>
      <CardHeader
        avatar={<UserAvatar {...author} />}
        title={<Title onClick={handleGoToUser} {...author} />}
        subheader={text}
        action={
          <Reactions likesCount={likesCount} commentsCount={commentsCount} />
        }
      />
      <Video videoUrl={videoUrl} />
      <CardContent>
        <Hashtags hashtags={hashtags} />
      </CardContent>
    </Card>
  );
};
