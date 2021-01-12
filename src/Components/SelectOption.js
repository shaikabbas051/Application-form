import React from "react";

export default function SelectOptionField(props) {
  const { fieldProps = {}, value = "", handleChange = () => {}, index } = props;
  const {
    label = "",
    type = "text",
    placeholder = "",
    id = "",
    required = false,
    options = []
  } = fieldProps;
  const newlabel = `${index + 1}. ${label}${required ? "*" : ""}`;
  return (
    <div className="form-group">
      <label>{newlabel}</label>
      <select
        value={value}
        onChange={e => handleChange(e)}
        name={id}
        className={value ? "hasValue" : ""}
      >
        <option value="" disabled selected className={"placeholder"}>
          {placeholder}
        </option>

        {options.map(({ optionName, optionValue }, idx) => {
          return (
            <option value={optionValue} key={optionValue + idx} key={idx}>
              {optionName}
            </option>
          );
        })}
      </select>
    </div>
  );
}
