import React, { useState } from 'react';
import ProfileCard from './ProfileCard';
import defaulImage from './Images/formal.jpg'
const App = () => {

  const [profiles, setProfiles] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    title: "",
    imgFile: null, // for local file image
    bgColor: "",
  });

  // for validating input type
  const handleChange = (e) => {
    const {name, value, files} = e.target;

    if(name === "imgFile"){
      setFormData({
        ...formData,
        imgFile: files[0],
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };


  // Handle form data
  const handleAddProfile = (e) => {
    e.preventDefault(); // prevent reload

    const newProfile  = {
      id: Date.now(),
      name: formData.name,
      title: formData.title,
      img: formData.imgFile ? URL.createObjectURL(formData.imgFile): defaulImage,
      bgColor: formData.bgColor || "bg-green",
    };

    setProfiles([...profiles, newProfile])

    // Clear form
    setFormData({
      name: "",
      title: "",
      imgFile: null,
      bgColor: "",
    });
  };

  return (
    <div className='mainDiv'>
      <h2>Profile Card</h2>

      <form onSubmit={handleAddProfile}> 
        <input onChange={handleChange} type="text" name="name" placeholder="Name" value={formData.name} required/>

        <input onChange={handleChange} type="text" name="title" placeholder="Title" value={formData.title} required/>

        <input onChange={handleChange} type="file" name="imgFile" accept="image/*"/>

        <input onChange={handleChange} type="text" name="bgColor" placeholder="type 'bg-blue|bg-red|bg-green'" value={formData.bgColor}/><br />

        <button type="submit">Add Profile</button>
      </form>

      <div className='app'>
        {profiles.map((person) => (
          <ProfileCard
            key={person.id}
            name={person.name}
            title={person.title}
            img={person.img}
            bgColor={person.bgColor}
          />
        ))}
      </div>
    </div>
  );
};

export default App;