import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  avatar: {
    width: 50,
    height: 50,
    borderRadius: "50%",
  },
  postTitle: {
    display: "flex",
    gap: 5,
    alignItems: "center",
    "&:hover": {
      textDecoration: "underline",
      cursor: "pointer"
    },
  },
  tags: {
    display: "flex",
    gap: 5,
  },
  postVideoContainer: {
    position: "relative",
  },

  postVideo: {
    background: "#c2c2c2",
  },
  postVideoPlayButton: {
    // TODO fix important issue and remove any type
    position: "absolute!important" as any,
    top: "50%",
    left: "50%",
    height: 100,
    width: 100,
    transform: "translate(-50%, -50%)",
    // TODO fix important issue and remove any type
    color: "#fff!important",
    zIndex: 1,

    "&:hover": {
      border: "1px solid #fff",
    },

    "& > svg": {
      height: "inherit",
      width: "inherit",
    },
  },

  postLikes: {
    width: 50,
    height: 50,
  },
});
