import React from "react";

import "./Form-input.scss";

const FormInput = ({ handleChange, label, ...otherProps }) => {
  return (
    <div className="group">
      <input className="form-input" onChange={handleChange} {...otherProps} />
      {label ? (
        <label
          htmlFor={label}
          className={`form-input-label ${
            otherProps.value?.length ? "shrink" : ""
          }`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;
