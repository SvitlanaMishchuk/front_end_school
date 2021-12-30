import { Avatar, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { numberFormatter } from '../../helpers';
import { UserProfile } from '../../models';

const useStyles = makeStyles({
  profileContainer: {},
  userInfoContainer: {
    display: 'grid',
    gridTemplateColumns: '128px auto',
    gridGap: 20,
    alignItems: 'center',
  },
  statsContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    margin: '20px 0',
    textAlign: 'center',
  },
});

export const ProfileContent = ({
  name, nickName, avatar, followersCount, followingCount, likesCount,
}: UserProfile) => {
  const classes = useStyles();
  return (
    <div className={classes.profileContainer}>
      <div className={classes.userInfoContainer}>
        <Avatar
          alt={name}
          src={avatar}
          sx={{ width: 128, height: 128 }}
        />
        <div>
          <Typography component="h4" variant="h4">
            {nickName}
          </Typography>
          <Typography component="p">{name}</Typography>
        </div>
      </div>
      <div className={classes.statsContainer}>
        <div>
          <Typography component="h4" variant="h4">
            {numberFormatter(followersCount)}
          </Typography>
          <Typography component="p">Followers</Typography>
        </div>
        <div>
          <Typography component="h4" variant="h4">
            {numberFormatter(followingCount)}
          </Typography>
          <Typography component="p">Following</Typography>
        </div>
        <div>
          <Typography component="h4" variant="h4">
            {numberFormatter(likesCount)}
          </Typography>
          <Typography component="p">Likes</Typography>
        </div>
      </div>
    </div>
  );
};
