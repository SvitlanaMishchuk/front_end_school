import { Box, AppBar, Toolbar } from '@mui/material';
import { Link } from 'react-router-dom';
import { routes } from '../../constants';
import { Logo } from './Logo';

export var Header = function () {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar color="transparent" elevation={0} position="static">
        <Toolbar>
          <Link to={routes.home}>
            <Logo />
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
