import { Card, makeStyles, Paper, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#fdfdff",
  },
  pageHeader: {
    padding: theme.spacing(4),
    display: "flex",
    marginBottom: theme.spacing(3),
  },
  pageIcon: {
    display: "inline-block",
    padding: theme.spacing(2),
    color: "#3c44b1",
  },
  pageTitle: {
    paddingLeft: theme.spacing(4),
    '& .MuiTypography-subtitle2':{
        opacity:'0.6'
    }
  },
}));

const PageHeader = (props) => {
  const classes = useStyles();
  const { title, subtitle, icon } = props;

  return (
    <>
      <Paper elevation={0} square>
        <div className={classes.pageHeader}>
          <Card className={classes.pageIcon}>{icon}</Card>
          <div className={classes.pageTitle}>
            <Typography variant="h6" component="div">{title}</Typography>
            <Typography variant="subtitle2" component="div">{subtitle}</Typography>
          </div>
        </div>
      </Paper>
    </>
  );
};

export default PageHeader;