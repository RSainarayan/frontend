import { useState } from 'react';

function MyForm() {
  const [name, setName] = useState("a");
  const [email, setEmail] = useState("a");
  const [number, setNumber] = useState("a");

  const handleSubmit = async (event) => {
    event.preventDefault();
    alert(`Name: ${name}\nEmail: ${email}\nNumber: ${number}`);
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('number', number);
    
    try {
      const response = await fetch('http://localhost:3001/register', {
        method: 'POST',
        mode: 'cors',
        body: formData,
        
        
      });
      
      const data = await response.json(); // Parse response JSON
      
      if (response.ok) {
        console.log('Data saved successfully:', data);
        alert('Data saved successfully!');
      } else {
        console.error('Failed to save data:', data);
        alert('Failed to save data.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your name:
        <input 
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>Enter your email:
        <input 
          type="text" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>Enter your number:
        <input 
          type="text" 
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
      </label>
      <input type="submit" />
    </form>
  );
}

export default MyForm;
