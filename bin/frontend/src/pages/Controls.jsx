import { useState, useEffect } from "react";
import Datecode from "../components/Controls/Datecode";
import ProductDef from "../components/Controls/ProductDef";
import { Container, makeStyles } from "@material-ui/core";
import axios from "axios";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down("sm")]: {
      padding: 0,
    },
  },
}));

export default function Controls() {
  const classes = useStyles();
  const [text, setText] = useState("");
  const [data, setData] = useState(null);

  const handleChange = (value) => {
    setText(value);
  };

  const handleDownload = () => {
    const method = "GET";
    const url = `https://localhost:8000/controls/${text}`;

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

  const handleData = () => {
    axios.get(`https://localhost:8000/controls/${text}/img`).then((res) => {
      let imgs = [];
      res.data.images.forEach((img) => {
        imgs.push(`https://localhost:8000/controls/${text}/img/${img}`);
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

  useEffect(() => {
    if (text.length === 7) {
      handleData();
      console.log(data);
    }
  }, [text]);

  return (
    <Container maxWidth={"lg"} className={classes.root}>
      <Datecode
        onChange={(value) => handleChange(value)}
        onDownload={() => handleDownload()}
      />
      <ProductDef itemData={data} />
    </Container>
  );
}
