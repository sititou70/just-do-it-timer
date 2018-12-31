import React, {useState} from "react";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';

const App = ({title, button_content, children}) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="simple_button_dialog"
    >
      <Button
        onClick={() => setOpen(true)}
        color="primary"
      >
        {button_content}
      </Button>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
      >
        <DialogTitle>{ title }</DialogTitle>
        <div>
          {children}
        </div>
        <DialogActions>
          <Button
            onClick={() => setOpen(false)}
          >
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default App;

