import { useState } from "react";

import {
  Box,
  Grid,
  Paper,
  Avatar,
  Typography,
  TextField,
  Checkbox,
  Button,
  Link,
  Container,
  FormControlLabel,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router";
import { useAuth } from "../hooks/useAuth";
import { useForm } from "react-hook-form";
import Copyright from "./Copyright";
import Sensor from "./Sensor";
import FingerprintIcon from "@material-ui/icons/Fingerprint";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(10),
    [theme.breakpoints.down("sm")]: {
      marginTop: 0,
      backgroundColor: theme.palette.background.default,
    },
  },
  paper: {
    display: "flex",
    padding: theme.spacing(4),
    flexDirection: "column",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(0, 4),
      boxShadow: "none",
      backgroundColor: theme.palette.background.default,
    },
  },
  avatar: {
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.background.paper,
    border: `2px solid ${theme.palette.primary.main}`,
    margin: theme.spacing(1),
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0),
    padding: 10,
  },
}));

export default function LoginForm() {
  const classes = useStyles();

  let history = useHistory();

  const { signin } = useAuth();
  const [error, setError] = useState([]);

  const { handleSubmit, register } = useForm();

  const onSubmit = async (data) => {
    await signin(data.email, data.password)
      .catch((error) => {
        setError(error.message);
      })
      .then(() => {
        history.push("/controls");
      });
  };

  return (
    <Sensor>
      <Container className={classes.root} maxWidth="sm">
        <Paper elevation={2} className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            SE CONNECTER
          </Typography>
          <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              {...register("email")}
              label="Adresse email"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              {...register("password")}
              label="Mot de passe"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Connexion auto"
            />
            <Button
              type="submit"
              disableElevation
              fullWidth
              className={classes.submit}
              startIcon={<FingerprintIcon />}
            >
              Connexion
            </Button>
            {error}
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Mot de passe oublié?
                </Link>
              </Grid>
              <Grid item xs>
                <Link href="#" variant="body2">
                  {"Vous n'avez pas de compte? "}
                </Link>
              </Grid>
            </Grid>
          </form>
          <Box mt={8}>
            <Copyright />
          </Box>
        </Paper>
      </Container>
    </Sensor>
  );
}
