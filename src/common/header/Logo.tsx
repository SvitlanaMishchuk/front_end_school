import { makeStyles } from "@material-ui/core";
import logo from "../../assets/logo.png";

const useStyles = makeStyles({
  img: {
    height: 40,
    cursor: "pointer",
  },
});

export const Logo = () => {
  const classes = useStyles();
  return <img className={classes.img} src={logo} alt="logo" />;
};
