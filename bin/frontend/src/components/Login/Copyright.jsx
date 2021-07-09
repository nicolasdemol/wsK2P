import { Typography, Link } from "@material-ui/core";

export default function Copyright() {
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
