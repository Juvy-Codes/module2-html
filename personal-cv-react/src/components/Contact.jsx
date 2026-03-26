import { useState } from "react";
import Card from "./Card"; // Import the Card wrapper for Task 2

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(""); // Add state for the message box

  const handleSubmit = (event) => {
    event.preventDefault(); 
    if (name === "" || email === "" || message === "") {
      alert("Please fill in all required fields.");
    } else {
      alert(`Form submitted successfully! Hello, ${name}`);
      // Clear fields after success
      setName("");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <Card title="Contact Me">
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          className="form-input"
        />
        <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          className="form-input"
        />
        {/* Added state connection to the textarea */}
        <textarea 
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="form-textarea"
        ></textarea>
        
        <button type="submit" id="submitBtn">Send</button>
      </form>
    </Card>
  );
}

export default Contact;
