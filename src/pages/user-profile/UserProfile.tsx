import { useNavigate, useParams } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import { useGetUserProfile } from "../../api-hooks/useGetUserProfile";
import { routes } from "../../constants";
import { UserFeed } from "./UserFeed";
import { ProfileContent } from "./ProfileContent";
import { useStyles } from "./styles";

type UserProfileParams = {
  name: string;
};

const UserProfile = () => {
  const { name } = useParams() as UserProfileParams;
  const { data, isFetched, isFetching, error } = useGetUserProfile(name);
  const classes = useStyles();
  const navigate = useNavigate();

  if (isFetched && !data && error) {
    console.error('user profile fetch error', error);
    alert("Something went wrong. Redirecting to the home page");
    navigate(routes.home);
  }

  if (isFetching) {
    return (
      <div className={classes.spinner}>
        <CircularProgress color={"primary"} />
      </div>
    );
  }

  return data ? (
    <>
      <ProfileContent {...data} />
      <UserFeed name={name} />
    </>
  ) : null;
};

export default UserProfile;
