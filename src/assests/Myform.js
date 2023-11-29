import { useState } from 'react';

function MyForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    alert(`Name: ${name}\nEmail: ${email}\nNumber: ${number}`);
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('number', number);
    try {
      const response = await fetch('http://your_domain.com/save_data.php', {
        method: 'POST',
        body: formData,
      });
  
      if (response.ok) {
        alert('Data saved successfully!');
      } else {
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
