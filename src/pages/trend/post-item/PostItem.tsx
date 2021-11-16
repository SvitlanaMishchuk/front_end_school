import { Card, CardHeader, CardContent } from "@mui/material";
import { Post } from "../../../models";

import { Reactions } from "./Reactions";
import { UserAvatar } from "./UserAvatar";
import { Title } from "./Title";
import { Hashtags } from "./Hashtags";
import { Video } from "./Video";

export const PostItem = (props: Post) => {
  return (
    <Card>
      <CardHeader
        avatar={<UserAvatar {...props.author} />}
        title={<Title {...props.author} />}
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
