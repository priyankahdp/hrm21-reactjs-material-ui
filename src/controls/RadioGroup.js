import { FormControl, FormControlLabel, FormLabel, Radio,RadioGroup as MuiRadioGroup } from "@material-ui/core";
import React from "react";


export default function RadioGroup(props) {
  const { name, label, value, onChange, items } = props;

  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <MuiRadioGroup row
        name={name}
        label={label}
        value={value}
        onChange={onChange}>
        
       {
           items.map(
               (item) => (
                    <FormControlLabel key={item.id} value={item.id} control={<Radio />} label={item.title} />
               )
           )
       }

      </MuiRadioGroup>
    </FormControl>
  );
}
