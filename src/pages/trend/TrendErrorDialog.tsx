import { Dialog, DialogTitle, DialogActions, Button } from "@mui/material";

export interface TrendErrorDialogProps {
  refetch: VoidFunction;
}

export const TrendErrorDialog = ({ refetch }: TrendErrorDialogProps) => {
  return (
    <Dialog open={true}>
      <DialogTitle>Something went wrong. Please try again</DialogTitle>
      <DialogActions>
        <Button onClick={refetch}>try again</Button>
      </DialogActions>
    </Dialog>
  );
};
