import React, { useState } from "react";

import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import IconButton from "@material-ui/core/IconButton";
import PropTypes from "prop-types";
import Switch from "@material-ui/core/Switch";
import TextField from "@material-ui/core/TextField";
import Tooltip from "@material-ui/core/Tooltip";

const initialUser = {
  ref: "",
  datecode: "",
  description: 0,
  date: 0,
  conformite: "",
  progression: 0,
  subRows: undefined,
};

const AddUserDialog = (props) => {
  const [user, setUser] = useState(initialUser);
  const { addUserHandler } = props;
  const [open, setOpen] = React.useState(false);

  const [switchState, setSwitchState] = React.useState({
    addMultiple: false,
  });

  const handleSwitchChange = (name) => (event) => {
    setSwitchState({ ...switchState, [name]: event.target.checked });
  };

  const resetSwitch = () => {
    setSwitchState({ addMultiple: false });
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    resetSwitch();
  };

  const handleAdd = (event) => {
    addUserHandler(user);
    setUser(initialUser);
    switchState.addMultiple ? setOpen(true) : setOpen(false);
  };

  const handleChange =
    (name) =>
    ({ target: { value } }) => {
      setUser({ ...user, [name]: value });
    };

  return (
    <div>
      <Tooltip title="Ajouter">
        <IconButton aria-label="add" onClick={handleClickOpen}>
          <AddIcon />
        </IconButton>
      </Tooltip>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Ajouter un élément</DialogTitle>
        <DialogContent>
          <DialogContentText>Si manquant uniquement</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label="Référence"
            type="text"
            fullWidth
            value={user.ref}
            onChange={handleChange("ref")}
          />
          <TextField
            margin="dense"
            label="Datecode"
            type="text"
            fullWidth
            value={user.datecode}
            onChange={handleChange("datecode")}
          />
          <TextField
            margin="dense"
            label="Description"
            type="number"
            fullWidth
            value={user.description}
            onChange={handleChange("description")}
          />
          <TextField
            margin="dense"
            label="Date"
            type="number"
            fullWidth
            value={user.date}
            onChange={handleChange("date")}
          />
          <TextField
            margin="dense"
            label="Status"
            type="text"
            fullWidth
            value={user.conformite}
            onChange={handleChange("conformite")}
          />
          <TextField
            margin="dense"
            label="Progression"
            type="number"
            fullWidth
            value={user.progression}
            onChange={handleChange("progression")}
          />
        </DialogContent>
        <DialogActions>
          <Tooltip title="Plusieurs ajouts">
            <Switch
              checked={switchState.addMultiple}
              onChange={handleSwitchChange("addMultiple")}
              value="addMultiple"
              inputProps={{ "aria-label": "secondary checkbox" }}
            />
          </Tooltip>
          <Button onClick={handleClose} color="primary">
            Annuler
          </Button>
          <Button onClick={handleAdd} color="primary">
            Ajouter
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

AddUserDialog.propTypes = {
  addUserHandler: PropTypes.func.isRequired,
};

export default AddUserDialog;
