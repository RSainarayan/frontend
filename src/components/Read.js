// Read.js

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import Edit from "./Edit"; // Import your Edit component here

function Read() {
  const [gotoedit, setGoToedit] = React.useState(false);
  const [editItem, setEditItem] = React.useState(null); // State to track the item being edited
  const [formData, setFormData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/register")
      .then(response => setFormData(response.data))
      .catch(err => console.log(err));
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/register/${id}`);
      // Filter out the deleted item from state
      setFormData(formData.filter(data => data._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = (id) => {
    // Find the item to be edited from formData
    const itemToEdit = formData.find(data => data._id === id);
    setEditItem(itemToEdit); // Set the item to edit in state
    setGoToedit(true);
  };

  const handleUpdate = (updatedData) => {
    // Update the formData with the edited item
    const updatedFormData = formData.map(data =>
      data._id === updatedData._id ? updatedData : data
    );
    setFormData(updatedFormData);
    setGoToedit(false);
    setEditItem(null);
  };

  if (gotoedit) {
    return <Edit data={editItem} onUpdate={handleUpdate} />;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Registered Data</h1>
      <table className="min-w-full">
        {/* Your table header */}
        <thead>
          <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left">Name</th>
            <th className="py-3 px-6 text-left">Email</th>
            <th className="py-3 px-6 text-left">Number</th>
            <th className="py-3 px-6 text-center">Actions</th>
          </tr>
        </thead>
        {/* Table body */}
        <tbody className="text-gray-600 text-sm font-light">
          {formData.map(data => (
            <tr key={data._id} className="border-b border-gray-200 hover:bg-gray-100">
              <td className="py-3 px-6 text-left whitespace-nowrap">{data.name}</td>
              <td className="py-3 px-6 text-left">{data.email}</td>
              <td className="py-3 px-6 text-left">{data.number}</td>
              <td className="py-3 px-6 text-center">
                <button
                  onClick={() => handleDelete(data._id)}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mx-1"
                >
                  Delete
                </button>
                <button
                  onClick={() => handleEdit(data._id)}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-1"
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Read;
