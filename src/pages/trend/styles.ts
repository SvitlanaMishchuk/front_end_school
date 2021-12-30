import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
  },
  errorDialog: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    // eslint-disable-next-line more/no-hardcoded-configuration-data
    bgcolor: 'background.paper',
    border: '2px solid #000',
    p: 4,
  },
});
