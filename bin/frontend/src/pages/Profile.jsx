import React from "react";
import { TextField } from "@material-ui/core";
import EnhancedTable from "../components/EnhanceTable";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import { classes } from "istanbul-lib-coverage";
import { BackgroundSection } from "../components/Sections";
import boardProfile from "../images/boardProfile.jpg";
import { Box, Grid, Typography, IconButton } from "@material-ui/core";
import CloudDownloadIcon from "@material-ui/icons/CloudDownload";
import makeData from "../js/makeData";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 20,
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
  },
  paper: {
    margin: theme.spacing(4, "auto"),
    padding: theme.spacing(2),
    height: 100,
    maxWidth: 280,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  table: {
    width: 700,
  },
  datecode: {
    padding: theme.spacing(1, 0),
    display: "flex",
    alignItems: "center",
  },
}));

function Profile() {
  const classes = useStyles();

  const columns = React.useMemo(
    () => [
      {
        Header: "Référence",
        accessor: "ref",
      },
      {
        Header: "Datecode",
        accessor: "datecode",
      },
      {
        Header: "Description",
        accessor: "description",
      },
      {
        Header: "Date",
        accessor: "date",
      },
      {
        Header: "Conformité",
        accessor: "conformite",
      },
      {
        Header: "Progression",
        accessor: "progression",
      },
    ],
    []
  );

  const [data, setData] = React.useState(React.useMemo(() => makeData(20), []));
  const [skipPageReset, setSkipPageReset] = React.useState(false);

  // We need to keep the table from resetting the pageIndex when we
  // Update data. So we can keep track of that flag with a ref.

  // When our cell renderer calls updateMyData, we'll use
  // the rowIndex, columnId and new value to update the
  // original data
  const updateMyData = (rowIndex, columnId, value) => {
    // We also turn on the flag to not reset the page
    setSkipPageReset(true);
    setData((old) =>
      old.map((row, index) => {
        if (index === rowIndex) {
          return {
            ...old[rowIndex],
            [columnId]: value,
          };
        }
        return row;
      })
    );
  };

  return (
    <div>
      <EnhancedTable
        columns={columns}
        data={data}
        setData={setData}
        updateMyData={updateMyData}
        skipPageReset={skipPageReset}
      />
    </div>
  );
}

function DatecodeBox() {
  const classes = useStyles();

  return (
    <Paper elevation={3} className={classes.paper}>
      <Typography variant="button">Rechercher & Télécharger</Typography>
      <Box className={classes.datecode}>
        <TextField type="search" label="Datecode" variant="outlined" />
        <IconButton edge="end" color="primary" style={{ marginLeft: 6 }}>
          <CloudDownloadIcon />
        </IconButton>
      </Box>
    </Paper>
  );
}

export default Profile;
