import React from "react";
import { IconButton, Badge } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import { Post } from "../../../models";
import { numFormatter } from "../../../helpers";
import { useStyles } from "./styles";

export const Reactions = ({
  likesCount,
  commentsCount,
}: Pick<Post, "likesCount" | "commentsCount">) => {
  const classes = useStyles();
  return (
    <>
      <IconButton
        disableRipple={true}
        disabled={true}
        className={classes.postLikes}
      >
        <Badge
          badgeContent={numFormatter(likesCount)}
          anchorOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          color="primary"
        >
          <FavoriteIcon fontSize="large" color="action" />
        </Badge>
      </IconButton>
      <IconButton
        disableRipple={true}
        disabled={true}
        className={classes.postLikes}
      >
        <Badge
          badgeContent={numFormatter(commentsCount)}
          anchorOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          color="primary"
        >
          <ChatBubbleIcon fontSize="large" color="action" />
        </Badge>
      </IconButton>
    </>
  );
};
