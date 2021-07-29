import { useState, useEffect } from "react";
import Datecode from "../components/Controls/Datecode";
import ProductDef from "../components/Controls/ProductDef";
import { CssBaseline } from "@material-ui/core";

import React from "react";

export default function Controls() {
  const [text, setText] = useState("");
  const [data, setData] = useState(null);

  const handleChange = (value) => {
    setText(value);
  };

  const handleDownload = () => {
    window.open(`/api/controls/${text}/file`, "_blank");
  };

  useEffect(() => {
    const handleData = () => {
      fetch(`/api/controls/${text}`)
        .then((res) => res.clone().json())
        .then((data) => {
          setData(data);
        });
    };

    if (text.length === 7) {
      handleData();
    }
  }, [text]);
  return (
    <React.Fragment>
      <CssBaseline />

      <Datecode
        onChange={(value) => handleChange(value)}
        onDownload={() => handleDownload()}
      />
      <ProductDef datecode={text} itemData={data} />
    </React.Fragment>
  );
}
