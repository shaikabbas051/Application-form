import React from "react";
export default function DataList(props) {
  const { fieldProps = {}, value = "", handleChange = () => {}, index } = props;
  const {
    label = "",
    type = "text",
    placeholder = "",
    id = "",
    required = false,
    options = [],
  } = fieldProps;
  const newlabel = `${index + 1}. ${label}${required ? "*" : ""}`;
  return (
    <div className="form-group">
      <label>{newlabel}</label>

      <input
        list={id + type}
        name={id}
        id={id}
        placeholder={placeholder}
        onChange={(e) => handleChange(e)}
      />
      <datalist id={id + type}>
        {options.map(({ optionName, optionValue }, idx) => {
          return <option value={optionValue} />;
        })}
      </datalist>
    </div>
  );
}
