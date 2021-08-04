import { useState, useEffect } from "react";
import DatecodeSearch from "../components/Controls/DatecodeSearch";
import ImageTra from "../components/Controls/ImageTra";
import { CssBaseline } from "@material-ui/core";

import React from "react";

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

  useEffect(() => {
    const handleData = () => {
      setError(false);
      fetch(`/api/controls/${text}`)
        .then((res) => res.clone().json())
        .then((data) => {
          setData(data);
        })
        .catch((err) => setError(true));
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
        <p>Datecode indisponible ou inexistant</p>
      ) : (
        <ImageTra datecode={text} itemData={data} />
      )}
    </React.Fragment>
  );
}
