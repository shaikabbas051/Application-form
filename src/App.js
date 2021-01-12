import React, { useState, useEffect } from "react";
import "./style.scss";
import FormContainer from "./FormComponent";
import templateFixtures from "./template.json";
import FormAllTemplates from "./Templates/FormAllTemplates";
import ShimmerTemplate from "./Templates/ShimmerTemplate";
import FormTemplate from "./Templates/FormTemplate";
import Header from "./Header";

//loading the four details dynamically from json

export default function App() {
  const [activeTemplateIndex, setactiveTemplateIndex] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [formInputData, setFormInputData] = React.useState({});

  //get form fixtures for selected template
  const formMetaData =
    (templateFixtures[activeTemplateIndex] &&
      templateFixtures[activeTemplateIndex].formItems) ||
    [];
  const handleTemplateChange = (index) => {
    setactiveTemplateIndex(index);
  };
  useEffect(() => {
    //show shimmer effect initially for 2500ms
    setTimeout(() => {
      setactiveTemplateIndex(0); //setting default Details collection template
      setIsLoading(false);
    }, 2500);
  }, []);

  const handleChange = (e) => {
    const formInputDataCopy = formInputData;
    formInputDataCopy[e.target.name] = e.target.value;
    setFormInputData({ ...formInputDataCopy });
  };
  const gotoNext = () => {
    console.log(formInputData);
    //validate the required inputs here
    // setactiveTemplateIndex(activeTemplateIndex + 1);
  };
  return (
    <div className="container">
      <Header activeTemplateIndex={activeTemplateIndex} />
      <div className={"middle"}>
        <div className={"sidebar"}>
          <div>
            {isLoading ? ( //show shimmer effect initially
              <ShimmerTemplate />
            ) : (
              <FormTemplate
                templateItem={{
                  title: "New Form",
                  description:
                    "Start creating a new form with the wide options of fields available",
                }}
              />
            )}
          </div>
          <div>
            Explore All templates
            <FormAllTemplates
              templates={templateFixtures}
              activeTemplate={activeTemplateIndex}
              handleTemplateChange={handleTemplateChange}
              isLoading={isLoading}
              action={handleChange}
            />
          </div>
        </div>
        <FormContainer
          formMetaData={formMetaData}
          formInputData={formInputData}
          handleChange={handleChange}
        />
      </div>
      <div className={"footer"}>
        <button onClick={() => gotoNext()}>NEXT</button>
      </div>
    </div>
  );
}
