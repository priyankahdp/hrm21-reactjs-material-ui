import React from "react";
import { Grid } from "@material-ui/core";
import { UseForm, Form } from "../../components/UseForm";
import Controls from "../../controls/Controls";
import * as departmentService from "./../../service/service";

const genderItems = [
  { id: "male", title: "Male" },
  { id: "female", title: "Female" },
  { id: "other", title: "Other" },
];

const initialValues = {
  id: 0,
  fullName: "",
  email: "",
  mobile: "",
  city: "",
  gender: "male",
  departmentId: "",
  hireDate: new Date(),
  isPermanent: false,
};

export default function EmployeesForm() {
  const { values, setValues, handleInputChange } = UseForm(initialValues);

  return (
    <Form>
      <Grid container>
        <Grid item xs={6}>
          <Controls.Input
            name="fullName"
            label="Full Name"
            value={values.fullName}
            onChange={handleInputChange}
          />
          <Controls.Input
            name="email"
            label="Email"
            value={values.email}
            onChange={handleInputChange}
          />

          <Controls.Input
            name="mobile"
            label="Mobile"
            value={values.mobile}
            onChange={handleInputChange}
          />

          <Controls.Input
            name="city"
            label="City"
            value={values.city}
            onChange={handleInputChange}
          />
        </Grid>

        <Grid item xs={6}></Grid>

        <Grid item sx={6}>
          <Controls.RadioGroup
            name="gender"
            label="Gender"
            value={values.gender}
            onChange={handleInputChange}
            items={genderItems}
          />

          <Controls.Select
            name="departmentId"
            label="Department"
            value={values.departmentId}
            onChange={handleInputChange}
            options={departmentService.getDepartment()}
          />

          <Controls.DatePicker
            name="hireDate"
            label="Hire Date"
            value={values.hireDate}
            onChange={handleInputChange}
          />

          <Controls.Checkbox
            name="isPermanent"
            label="Permanent Employee"
            value={values.isPermanent}
            onChange={handleInputChange}
          />

          <div>
            <Controls.Button type="submit" text="Submit" />
            <Controls.Button text="Reset" color='default' />
          </div>
        </Grid>
      </Grid>
    </Form>
  );
}
