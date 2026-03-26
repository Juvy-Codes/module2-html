import { useState } from "react";
import Card from "./Card"; // Optional wrapper for styling

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic frontend validation
    if (!name || !email || !message) {
      alert("Please fill in all required fields.");
      return;
    }

    // Send data to PHP backend
    fetch("http://localhost/cv-api/process.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name,
        email: email,
        message: message
      })
    })
    .then((res) => res.json())
    .then((data) => {
      if (data.message) {
        alert(data.message);
        // Clear fields on success
        setName("");
        setEmail("");
        setMessage("");
      } else {
        alert("Unexpected error occurred.");
      }
    })
    .catch(() => {
      alert("Error connecting to server.");
    });
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
        <textarea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="form-textarea"
        ></textarea>
        <button type="submit">Send</button>
      </form>
    </Card>
  );
}

export default Contact;