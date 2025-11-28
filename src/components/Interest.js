const Interest = ({ formData, setFormData }) => {
  const { interest } = formData;

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      interest: {
        ...prev.interest,
        [e.target.name]: e.target.checked,
      },
    }));
  };

  return (
    <div>
      <div>
        <label>Anime</label>
        <input
          type="checkbox"
          name="Anime"
          checked={interest.Anime}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Music</label>
        <input
          type="checkbox"
          name="Music"
          checked={interest.Music}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Books</label>
        <input
          type="checkbox"
          name="Books"
          checked={interest.Books}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default Interest;
