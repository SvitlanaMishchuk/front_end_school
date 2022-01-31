import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
  userFeedContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 3fr)',
    gridGap: 8,
  },
  postItemContainer: {
    position: 'relative',
  },
  imgPreview: {
    width: '100%',
  },
  postInfoContainer: {
    position: 'absolute',
    left: 10,
    bottom: 10,
    color: '#fff',
    display: 'grid',
    gridTemplateColumns: '24px auto',
  },
});
