import React from "react";

export default function TextAreaField(props) {
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
      <textarea
        placeholder={placeholder}
        type={type}
        value={value}
        name={id}
        onChange={e => handleChange(e)}
        rows={5}
        maxLength={10}
      >
        Enter
      </textarea>
      <div className={"word-limit-text"}>300 word limit</div>
    </div>
  );
}
