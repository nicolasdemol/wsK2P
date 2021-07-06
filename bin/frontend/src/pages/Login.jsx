import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import boardLogin from "../images/boardLogin.jpg";
import Hidden from "@material-ui/core/Hidden";
import { useForm } from "react-hook-form";
import { useAuth } from "../hooks/useAuth";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { BackgroundSection } from "../components/Sections"

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Tous droits réservés © "}
      <Link color="inherit" href="/">
        K2Process
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    display: "flex",
    padding: theme.spacing(4),
    flexDirection: "column",
    alignItems: "center",
    marginTop: 30,
    [theme.breakpoints.down("sm")]: {
      marginTop: 0,
    },
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
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


function LoginForm() {
  const classes = useStyles();

  let history = useHistory();

  const { signin } = useAuth();
  const [error, setError] = useState();

  const { handleSubmit, register } = useForm();

  const onSubmit = async (data) => {
    await signin(data.email, data.password)
      .catch((error) => {
        setError(error);
      })
      .then(() => {
        history.push("/profile");
      });
  };

  return (
    <Grid container spacing={0} direction="column" alignItems="center">
      <Grid item xs={12} sm={8} md={6} lg={4}>
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
              variant="contained"
              color="primary"
              className={classes.submit}
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
              <Grid item>
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
      </Grid>
    </Grid>
  );
}

function Login() {
  return (
    <React.Fragment>
      <LoginForm />
      <BackgroundSection position="right bottom" image={boardLogin} />
    </React.Fragment>
  );
}

export default Login;
