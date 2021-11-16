import { Typography } from "@mui/material";
import { Post } from "../../../models";
import { useStyles } from "./styles";

export const Title = ({
  name,
  nickName,
}: Pick<Post["author"], "name" | "nickName">) => {
  const classes = useStyles();
  return (
    <div className={classes.postTitle}>
      <Typography fontWeight={"bold"} component={"span"}>
        {name}
      </Typography>
      <Typography variant={"caption"} component={"span"}>
        {nickName}
      </Typography>
    </div>
  );
};
