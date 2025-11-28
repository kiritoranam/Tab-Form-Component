const Setting = ({ formData, setFormData }) => {
  const { darkMode } = formData;
  console.log(darkMode);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      darkMode: e.target.value,
    }));
  };

  return (
    <div>
      <div>
        <label>Dark</label>
        <input
          type="radio"
          name="theme"
          value={"true"}
          checked={darkMode === "true"}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Light</label>
        <input
          type="radio"
          name="theme"
          value={"false"}
          checked={darkMode === "false"}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default Setting;
