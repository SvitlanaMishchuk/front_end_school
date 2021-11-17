import { Avatar, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { numFormatter } from "../../helpers";
import { UserProfile } from "../../models";

const useStyles = makeStyles({
  profileContainer: {},
  userInfoContainer: {
    display: "grid",
    gridTemplateColumns: "128px auto",
    gridGap: 20,
    alignItems: "center",
  },
  statsContainer: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    margin: "20px 0",
    textAlign: "center"
  },
});

export const ProfileContent = (profile: UserProfile) => {
  const classes = useStyles();
  return (
    <div className={classes.profileContainer}>
      <div className={classes.userInfoContainer}>
        <Avatar
          alt={profile.name}
          src={profile.avatar}
          sx={{ width: 128, height: 128 }}
        />
        <div>
          <Typography component={"h4"} variant={"h4"}>
            {profile.nickName}
          </Typography>
          <Typography component={"p"}>{profile.name}</Typography>
        </div>
      </div>
      <div className={classes.statsContainer}>
        <div>
          <Typography component={"h4"} variant={"h4"}>
            {numFormatter(profile.followersCount)}
          </Typography>
          <Typography component={"p"}>Followers</Typography>
        </div>
        <div>
          <Typography component={"h4"} variant={"h4"}>
            {numFormatter(profile.followingCount)}
          </Typography>
          <Typography component={"p"}>Following</Typography>
        </div>
        <div>
          <Typography component={"h4"} variant={"h4"}>
            {numFormatter(profile.likesCount)}
          </Typography>
          <Typography component={"p"}>Likes</Typography>
        </div>
      </div>
    </div>
  );
};
