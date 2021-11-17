import { Typography } from "@mui/material";
import { Post } from "../../../models";
import { useStyles } from "./styles";

export interface TitleProps extends Pick<Post["author"], "name" | "nickName"> {
  onClick: VoidFunction;
}
export const Title = ({ name, nickName, onClick }: TitleProps) => {
  const classes = useStyles();
  return (
    <div onClick={onClick} className={classes.postTitle}>
      <Typography fontWeight={"bold"} component={"span"}>
        {name}
      </Typography>
      <Typography variant={"caption"} component={"span"}>
        {nickName}
      </Typography>
    </div>
  );
};
