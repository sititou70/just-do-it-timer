import React, { useState, FC } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import styled from '@emotion/styled';

export const SimpleButtonDialog: FC<{
  title: string;
  button_content: JSX.Element;
  default_open?: boolean;
  className?: string;
  children: JSX.Element;
}> = ({ title, button_content, default_open, className, children }) => {
  const [open, setOpen] = useState<boolean>(default_open || false);

  return (
    <div className={className}>
      <Button onClick={() => setOpen(true)}>{button_content}</Button>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>{title}</DialogTitle>
        <StyledDialogContent>{children}</StyledDialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>OK</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

const StyledDialogContent = styled.div`
  padding: 0 24px;
`;

export default SimpleButtonDialog;
