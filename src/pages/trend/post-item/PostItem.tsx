import { Card, CardHeader, CardContent } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { Post } from "../../../models";

import { Reactions } from "./Reactions";
import { UserAvatar } from "./UserAvatar";
import { Title } from "./Title";
import { Hashtags } from "./Hashtags";
import { Video } from "./Video";
import { routes } from "../../../constants";

export const PostItem = (props: Post) => {
  const navigate = useNavigate();

  const handleGoToUser = () => {
    const url = routes.profile.replace(":name", props.author.name);
    navigate(url);
  };

  return (
    <Card>
      <CardHeader
        avatar={<UserAvatar {...props.author} />}
        title={<Title onClick={handleGoToUser} {...props.author} />}
        subheader={props.text}
        action={
          <Reactions
            likesCount={props.likesCount}
            commentsCount={props.commentsCount}
          />
        }
      />
       <Video videoUrl={props.videoUrl} />
      <CardContent>
        <Hashtags hashtags={props.hashtags} />
      </CardContent>
    </Card>
  );
};
