import React from "react";
import CancelIcon from "./Icons/CancelIcon";
import CheckIcon from "./Icons/CheckIcon";
export default function Header(props) {
  const { activeTemplateIndex } = props;
  const formTypes = ["Form Selection", "Set up", "Form Creation", "Review"];
  return (
    <div className={"header"}>
      <ul className={"progress"}>
        {formTypes.map((formTitle, index) => {
          const isChecked = index < activeTemplateIndex;
          return (
            <li key={index} className={isChecked ? "hasCompleted" : ""}>
              <div>
                <span>{isChecked ? <CheckIcon /> : " "}</span>

                <span>{formTitle}</span>
              </div>
            </li>
          );
        })}
      </ul>
      <div className={"close-btn"} onClick={() => console.log("close")}>
        <CancelIcon />
      </div>
    </div>
  );
}
