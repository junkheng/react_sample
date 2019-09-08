import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '25vh',
    textAlign: 'left',
    padding: '0 2em',
    fontSize: '20px'
  },
//   main: {
//     marginTop: theme.spacing(4),
//     marginBottom: theme.spacing(2),
//   },
  footer: {
    padding: theme.spacing(2),
    marginTop: 'auto',
    backgroundColor: 'white',
  },
  bluetext: {
    color: '#4A90E2',
  },
}));

export default function StickyFooter() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <div>
                <h6>
                    Don't have an account?<br />                 
                <span className={classes.bluetext}>
                    Sign up for an account.
                </span>
                </h6>
          </div>
        </Container>
      </footer>
    </div>
  );
}