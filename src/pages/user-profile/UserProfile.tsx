import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import { useGetUserProfile } from "../../api-hooks/useGetUserProfile";
import { routes } from "../../constants";
import { UserFeed } from "./UserFeed";
import { ProfileContent } from "./ProfileContent";

type UserProfileParams = {
  name: string;
};

const UserProfile = () => {
  const { name } = useParams() as UserProfileParams;
  const { data, isFetched, isFetching } = useGetUserProfile(name);
  const navigate = useNavigate();

  if (isFetched && !data) {
    // show error message
    navigate(routes.home);
  }

  if (isFetching) {
    <CircularProgress />;
  }

  return data ? (
    <>
      <ProfileContent {...data} />
      <UserFeed name={name} />
    </>
  ) : null;
};

export default UserProfile;
