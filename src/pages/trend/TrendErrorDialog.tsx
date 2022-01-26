import {
  Dialog, DialogTitle, DialogActions, Button,
} from '@mui/material';

export interface TrendErrorDialogProperties {
  refetch: VoidFunction;
}

export const TrendErrorDialog = ({ refetch }: TrendErrorDialogProperties) => (
  <Dialog open>
    <DialogTitle>Something went wrong. Please try again</DialogTitle>
    <DialogActions>
      <Button onClick={refetch}>try again</Button>
    </DialogActions>
  </Dialog>
);
