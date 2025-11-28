import { useState } from "react";
import Interest from "./Interest";
import Profile from "./Profile";
import Setting from "./Setting";

const TabForm = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    interest: [],
    darkMode: "true",
  });
  const [error, setError] = useState({});

  const tabList = [
    {
      label: "Profile",
      component: Profile,
    },
    {
      label: "Interest",
      component: Interest,
    },
    {
      label: "Setting",
      component: Setting,
    },
  ];

  const ActiveComp = tabList[activeTab].component;

  const validateFields = (formData) => {
    const errObj = {};

    if (!formData.name || formData.name.lenght < 2) {
      errObj.name = "Invalid name";
    }
    setError(errObj);
    return errObj;
  };

  const handlePrevious = () => {
    setActiveTab((activeTab) => activeTab - 1);
  };
  const handleNext = () => {
    const validte = validateFields(formData);
    if (Object.keys(validte).length === 0) {
      setActiveTab((activeTab) => activeTab + 1);
    }
  };
  const handleSubmit = () => {
    if (!validateFields(formData)) {
      console.log("form", formData);
    }
  };

  return (
    <div>
      <div className="headerContainer">
        {tabList.map((item, index) => {
          return (
            <div
              className="label"
              onClick={(e) => {
                const validte = validateFields(formData);
                if (Object.keys(validte).length === 0) {
                  setActiveTab(index);
                }
              }}
            >
              {item.label}
            </div>
          );
        })}
      </div>

      <div className="compContainer">
        <ActiveComp
          formData={formData}
          setFormData={setFormData}
          error={error}
        />
      </div>

      <div>
        {activeTab > 0 && <button onClick={handlePrevious}>Previous</button>}
      </div>
      <div>
        {activeTab < tabList.length - 1 && (
          <button onClick={handleNext}>Next</button>
        )}
      </div>
      <div>
        {activeTab === tabList.length - 1 && (
          <button onClick={handleSubmit}>Submit</button>
        )}
      </div>
    </div>
  );
};

export default TabForm;
