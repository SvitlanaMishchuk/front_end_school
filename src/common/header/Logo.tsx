import { makeStyles } from '@mui/styles';
import logo from '../../assets/logo.png';

const useStyles = makeStyles({
  img: {
    height: 40,
    cursor: 'pointer',
  },
});

export var Logo = function () {
  const classes = useStyles();
  return <img className={classes.img} src={logo} alt="logo" />;
};
