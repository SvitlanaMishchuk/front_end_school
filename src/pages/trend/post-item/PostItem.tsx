import { Card, CardHeader, CardContent } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { Post } from '../../../models';

import { Reactions } from './Reactions';
import { UserAvatar } from './UserAvatar';
import { Title } from './Title';
import { Hashtags } from './Hashtags';
import { Video } from './Video';
import { routes } from '../../../constants';

export var PostItem = function (properties: Post) {
  const navigate = useNavigate();

  const handleGoToUser = () => {
    const url = routes.profile.replace(':name', properties.author.name);
    navigate(url);
  };

  return (
    <Card>
      <CardHeader
        avatar={<UserAvatar {...properties.author} />}
        title={<Title onClick={handleGoToUser} {...properties.author} />}
        subheader={properties.text}
        action={(
          <Reactions
            likesCount={properties.likesCount}
            commentsCount={properties.commentsCount}
          />
        )}
      />
       <Video videoUrl={properties.videoUrl} />
      <CardContent>
        <Hashtags hashtags={properties.hashtags} />
      </CardContent>
    </Card>
  );
};
