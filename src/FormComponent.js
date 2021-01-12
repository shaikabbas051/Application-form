import React from "react";
import TextField from "./Components/TextField.js";
import DateField from "./Components/DateField.js";
import FileField from "./Components/FileField.js";
import TextAreaField from "./Components/TextArea.js";
import SelectOptionField from "./Components/SelectOption.js";
import DataList from "./Components/Datalist.js";
export default function FormContainer(props) {
  const { formInputData, formMetaData, handleChange = () => {} } = props;
  //JSON driven form
  // const handleChange = (e) => {
  //   const formInputDataCopy = formInputData;
  //   formInputDataCopy[e.target.name] = e.target.value;
  //   setFormInputData({ ...formInputDataCopy });
  // };
  const customField = ({ type }) => {
    switch (type) {
      case "date":
        return DateField;
      case "file":
        return FileField;
      case "textarea":
        return TextAreaField;
      case "select":
        return SelectOptionField;
      case "datalist":
        return DataList;
      default:
        return TextField;
    }
  };

  return (
    <div className={"form-container"}>
      <div className={"form-info"}>
        <h4 className={"title"}>Preview</h4>
        <p className={"sub-title"}>
          You will be able to customize the fields in the later stage
        </p>
      </div>
      <div className={"form"}>
        <div className={"form-header"}>
          <h2> Name of the Enquiry Form</h2>
          <h4>One line description of the form</h4>
          <p>Provide the following information to process your application</p>
        </div>
        <div className={"fields"}>
          {formMetaData.map((item, idx) => {
            const InputComponent = customField(item);
            return (
              <InputComponent
                index={idx}
                fieldProps={item}
                label={`${idx + 1}. ${item.label}${item.required ? "*" : ""}`}
                placeholder={item.placeholder}
                type={item.type}
                value={formInputData[item.id] || ""}
                id={item.id}
                handleChange={handleChange}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
