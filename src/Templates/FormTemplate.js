import React from "react";
export default function FormTemplate(props) {
  const { title = "", description = "" } = props.templateItem;
  return (
    <div
      className={`template ${props.active ? "active-template" : ""}`}
      onClick={() => {
        props.action && props.action(props.idx);
      }}
    >
      <div className={"logo"} />
      <div className={"content"}>
        <p className={"title"}>{title}</p>
        <p className={"sub-title"}>{description}</p>
      </div>
    </div>
  );
}
