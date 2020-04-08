import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import API from "../utils/API";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="/">
        Animade
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(0),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    fontFamily: "Poiret One",
    fontWeight: "Bolder"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
    fontFamily: "Poiret One"
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    fontFamily: "Poiret One",
    fontWeight: "bolder"
  }
}));

export default function SignUp() {
  const classes = useStyles();

  //keeping for now, unsure if I may need this to keep track of user being
  //logged in
  const [newUser, setNewUser] = useState([]);

  //constucting an object to send to the DB to store the user
  const [formUserObject, setFormUserObject] = useState({});

  //setting the object up to be sent to the axios call, to be placed in DB
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormUserObject({ ...formUserObject, [name]: value });
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    if (formUserObject.username && formUserObject.password) {
      API.createUser({
        username: formUserObject.username,
        email: formUserObject.email,
        password: formUserObject.password
      })
        .then(data => {
          console.log(data);
          console.log(formUserObject);
        })
        .catch(err => console.log(err));
    }
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography
          component="h1"
          variant="h5"
          fontWeight="bolder"
          className={classes.paper}
        >
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
              <TextField
                onChange={handleInputChange}
                autoComplete="fname"
                name="username"
                variant="outlined"
                required
                fullWidth
                id="userName"
                label="Username"
                autoFocus
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                onChange={handleInputChange}
                variant="outlined"
                color="primary"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={handleInputChange}
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.submit}
            disabled={!(formUserObject.username && formUserObject.password)}
            onClick={handleFormSubmit}
          >
            <Link href="Profile">Sign Up</Link>
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="signin" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}
