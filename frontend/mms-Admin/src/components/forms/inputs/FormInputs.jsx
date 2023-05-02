import React from "react";
import { Formik, Form, useFormik } from "formik";
import CustomInput from "./CustomInput";
import { Button } from "@mui/material";
import PropTypes from "prop-types";

function FormInputs({ initialValues, validationSchema, onSubmit, inputField }) {
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit,
    enableReinitialize: true,
  });

  const { errors, getFieldProps, touched } = formik;

  const fieldNames = Object.keys(errors);
  //   const options = Object.keys(model.data);

  const handleSubmit = () => formik.submitForm();
  return (
    <Formik
      initialValues={{ firstName: "", lastName: "" }}
      onSubmit={(values) => console.log(values)}
    >
      <Form>
        {inputField.map((field) => (
          <CustomInput
            {...field}
            {...getFieldProps(field.name)}
            error={touched[field.name] && fieldNames.includes(field.name)}
            helperText={
              fieldNames.includes(field.name) && touched[field.name]
                ? errors[field.name]
                : ""
            }
            key={field.name}
            // options={
            //   options.includes(field.name) ? model.data[field.name] : undefined
            // }
          />
        ))}

        <Button onClick={handleSubmit} type="submit" variant="contained">
          Submit
        </Button>
      </Form>
    </Formik>
  );
}

FormInputs.propTypes = {
  initialValues: PropTypes.object,
  validationSchema: PropTypes.object,
  onSubmit: PropTypes.func,
  inputField: PropTypes.func,
};

export default FormInputs;
