import React from "react";
import AttachIcon from "../Icons/AttachIcon";
export default function FileField(props) {
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
        type={type}
        id={id}
        name={id}
        className="hidden"
        onChange={e => handleChange(e)}
      />
      <label htmlFor={id} className={"fileField"}>
        {value ? (
          value
        ) : (
          <>
            <AttachIcon /> {placeholder}
          </>
        )}
      </label>
    </div>
  );
}
