import React from "react";
import ShimmerTemplate from "./ShimmerTemplate";
import FormTemplate from "./FormTemplate";
export default function FormAllTemplates(props) {
  const { templates, activeTemplate, isLoading } = props;
  return (
    <>
      {templates.map((templateItem, idx) =>
        isLoading ? ( //shimmer effect initially
          <ShimmerTemplate templateItem={templateItem} key={idx} />
        ) : (
          <FormTemplate
            templateItem={templateItem}
            key={idx}
            active={idx === activeTemplate}
            idx={idx}
            action={props.handleTemplateChange}
          />
        )
      )}
    </>
  );
}
