import React from "react";
import { useField } from "formik";
import PropTypes from "prop-types";

function CustomInput({ label, ...props }) {
  const [field, meta] = useField(props);

  return (
    <div>
      {label && (
        <label htmlFor={props.id || props.name || props.key}>{label}</label>
      )}
      <input {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
}
CustomInput.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  key: PropTypes.string,
};

export default CustomInput;
