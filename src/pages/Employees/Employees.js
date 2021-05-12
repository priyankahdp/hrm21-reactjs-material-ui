import React from "react";
import PageHeader from "../../components/PageHeader";
import EmployeesForm from "./EmployeesForm";
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";
import { makeStyles, Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
}));

export default function Employees() {
  const classes = useStyles();

  return (
    <div>
      <>
        <PageHeader
          title="HRM-21"
          subtitle="Employee Registration"
          icon={<PeopleOutlineIcon fontSize="large" />}
        />

        <Paper className={classes.pageContent}>
          <EmployeesForm />
        </Paper>
      </>
    </div>
  );
}