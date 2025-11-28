const Profile = ({ formData, setFormData, error }) => {
  const { name, age, email } = formData;

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div>
      <div>
        <label>Name</label>
        <input type="text" name="name" value={name} onChange={handleChange} />
      </div>
      <div>{error.name}</div>
      <div>
        <label>age</label>
        <input type="number" name="age" value={age} onChange={handleChange} />
      </div>
      <div>
        <label>email</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default Profile;
