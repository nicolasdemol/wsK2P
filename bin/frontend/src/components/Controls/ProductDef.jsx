import React from "react";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import ImageListItemBar from "@material-ui/core/ImageListItemBar";
import Skeleton from "@material-ui/lab/Skeleton";

export default function ProductDef(props) {
  return (
    <React.Fragment>
      <ImageList
        sx={{ width: 500, height: 450 }}
        gap={2}
        rowHeight={200}
        cols={5}
      >
        {props.itemData
          ? props.itemData.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  onClick={() => window.open(item.img, "_blank")}
                  srcSet={`${item.img}?w=248&fit=crop&auto=format 1x,
                  ${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                />
                <Skeleton
                  animation={"wave"}
                  variant="rect"
                  width={"100%"}
                  height={"100%"}
                />
                <ImageListItemBar title={item.title} />
              </ImageListItem>
            ))
          : null}
      </ImageList>
    </React.Fragment>
  );
}
