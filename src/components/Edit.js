// Edit.js

import React, { useState } from "react";
import axios from "axios";

function Edit({ data, onUpdate }) {
  const [editedData, setEditedData] = useState(data);

  const handleInputChange = (e) => {
    const { name, value,email, number } = e.target;
    setEditedData({ ...editedData, [name]: value , [email]: value, [number]: value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:3001/register/${editedData._id}`,
        editedData
      );
      onUpdate(response.data); 
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Edit Data</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={editedData.name}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={editedData.email}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Number:
          <input
            type="text"
            name="number"
            value={editedData.number}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default Edit;
