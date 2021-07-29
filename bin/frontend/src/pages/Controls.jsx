import { useState, useEffect } from "react";
import Datecode from "../components/Controls/Datecode";
import ProductDef from "../components/Controls/ProductDef";
import { CssBaseline } from "@material-ui/core";
import axios from "axios";
import React from "react";

export default function Controls() {
  const [text, setText] = useState("");
  const [data, setData] = useState([]);

  const handleChange = (value) => {
    setText(value);
  };

  const handleDownload = () => {
    const method = "GET";
    const url = `https://90.24.146.169:8000/controls/${text}`;

    axios
      .request({
        url,
        method,
        responseType: "blob", //important
      })
      .then(({ data }) => {
        const downloadUrl = window.URL.createObjectURL(new Blob([data]));
        const link = document.createElement("a");

        link.href = downloadUrl;
        link.setAttribute("download", `${text}.txt`); //any other extension
        document.body.appendChild(link);
        link.click();
        link.remove();
      });
  };

  useEffect(() => {
    const handleData = () => {
      axios
        .get(`https://90.24.146.169:8000/controls/${text}/img`)
        .then((res) => {
          let imgs = [];
          res.data.images.forEach((img) => {
            imgs.push(`https://90.24.146.169:8000/controls/${text}/img/${img}`);
          });
          let items = imgs.map((id, index) => {
            return {
              img: imgs[index],
              title: res.data.products[index],
            };
          });
          setData(items);
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
      <ProductDef itemData={data} />
    </React.Fragment>
  );
}
