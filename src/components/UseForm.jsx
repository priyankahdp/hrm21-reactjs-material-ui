import { makeStyles } from "@material-ui/core";
import React, { useState } from "react";

export function UseForm(initialFormValues) {
  const [values, setValues] = useState(initialFormValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  return {
    values,
    setValues,
    handleInputChange,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiFormControl-root": {
      width: "80%",
      margin: theme.spacing(1),
    },
  },
}));

export function Form(props) {
  const classes = useStyles();
  return (
    <form className={classes.root} autoComplete='off'>
      {props.children}
    </form>
    )
}
