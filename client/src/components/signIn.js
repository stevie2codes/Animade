import React, { useState } from "react";
import { Redirect } from "react-router-dom";
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
import NavBar from "./nav/nav";
import Cookies from "js-cookie";

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
    fontWeight: "Bolder",
    color: theme.palette.text.primary
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(3),
    fontFamily: "Poiret One"
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    fontFamily: "Poiret One",
    fontWeight: "bolder"
  }
}));

const buttonStyle = {
  background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  borderRadius: 3,
  border: 0,
  color: "#212121",
  letterSpacing: "3px",
  height: 48,
  padding: "0 30px",
  boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)"
};

export default function SignUp() {
  const [activeUser] = useState(Cookies.get("name"));
  const classes = useStyles();
  //constucting an object to send to the DB to store the user
  const [formUserObject, setFormUserObject] = useState({});
  const [redirect, setRedirect] = useState({ toProfile: false });

  //setting the object up to be sent to the axios call, to be placed in DB
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormUserObject({ ...formUserObject, [name]: value });
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    if (formUserObject.username && formUserObject.password) {
      API.logInUser({
        username: formUserObject.username,
        password: formUserObject.password
      })
        .then(data => {
          setRedirect({ toProfile: true });
        })
        .catch(err => console.log(err));
    }
  }

  if (redirect.toProfile) {
    return <Redirect to="/Profile" />;
  }

  return (
    <div>
      <div>
        <NavBar name={activeUser} />
      </div>

      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography
            component="h1"
            variant="h4"
            fontWeight="bolder"
            className={classes.paper}
          >
            Sign In
          </Typography>
          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12}>
                <TextField
                  onChange={handleInputChange}
                  autoComplete="fname"
                  name="username"
                  variant="standard"
                  color="secondary"
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
                  variant="standard"
                  color="secondary"
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
              style={buttonStyle}
            >
              Sign In
            </Button>
          </form>
        </div>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
    </div>
  );
}
