import React from "react";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import ImageListItemBar from "@material-ui/core/ImageListItemBar";
import Skeleton from "@material-ui/lab/Skeleton";

export default function ProductDef(props) {
  let datecode = props.datecode;
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
                  onClick={() =>
                    window.open(
                      `/api/controls/${datecode}/file/${item.img}`,
                      "_blank"
                    )
                  }
                  srcSet={`/api/controls/${datecode}/file/${item.img}?w=248&fit=crop&auto=format 1x,
                  /api/controls/${datecode}/file/${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.name}
                />
                <Skeleton
                  animation={"wave"}
                  variant="rect"
                  width={"100%"}
                  height={"100%"}
                />
                <ImageListItemBar title={item.name} />
              </ImageListItem>
            ))
          : null}
      </ImageList>
    </React.Fragment>
  );
}
