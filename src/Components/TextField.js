import React from "react";

export default function TextField(props) {
  const { fieldProps = {}, value = "", handleChange = () => {}, index } = props;
  const {
    label = "",
    type = "text",
    placeholder = "",
    id = "",
    required = false
  } = fieldProps;
  const newlabel = `${index + 1}. ${label}${required ? "*" : ""}`;
  return (
    <div className="form-group">
      <label>{newlabel}</label>
      <input
        placeholder={placeholder}
        type={type}
        value={value}
        name={id}
        onChange={e => handleChange(e)}
      />
    </div>
  );
}
