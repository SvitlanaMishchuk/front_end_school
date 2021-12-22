import { Container } from '@mui/material';
import { PropsWithChildren } from 'react';
import { Header } from '../header';
import { useStyles } from './styles';

export var Layout = function ({ children }: PropsWithChildren<unknown>) {
  const classes = useStyles();
  return (
    <Container maxWidth="md">
      <Header />
      <div className={classes.content}>{children}</div>
    </Container>
  );
};
