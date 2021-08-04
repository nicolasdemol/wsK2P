import { useState, useEffect } from "react";
import DatecodeSearch from "../components/Controls/DatecodeSearch";
import ImageTra from "../components/Controls/ImageTra";
import { CssBaseline, Snackbar } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";

import React from "react";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function Controls() {
  const [text, setText] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);

  const handleChange = (value) => {
    setText(value);
  };

  const handleDownload = () => {
    window.open(`/api/controls/${text}/file`, "_blank");
  };

  const [open, setOpen] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  useEffect(() => {
    const handleData = () => {
      setError(false);
      fetch(`/api/controls/${text}`)
        .then((res) => res.clone().json())
        .then((data) => {
          setData(data);
        })
        .catch((err) => {
          setError(true);
          setOpen(true);
        });
    };

    if (text.length === 7) {
      handleData();
    }
    if (text.length === 0) {
      setData(null);
    }
  }, [text]);
  return (
    <React.Fragment>
      <CssBaseline />

      <DatecodeSearch
        onChange={(value) => handleChange(value)}
        onDownload={() => handleDownload()}
      />
      {error ? (
        <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="error">
            Datecode indisponible ou inexistant !
          </Alert>
        </Snackbar>
      ) : (
        <ImageTra datecode={text} itemData={data} />
      )}
    </React.Fragment>
  );
}
