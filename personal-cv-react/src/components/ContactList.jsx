import { useEffect, useState } from "react";

function ContactList() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch("http://localhost/cv-api/getContacts.php")
      .then(res => res.json())
      .then(data => setContacts(data))
      .catch(err => console.error("Error fetching data:", err));
  }, []);

  return (
    <section className="card">
      <h2>Saved Contacts</h2>
      {contacts.length === 0 ? (
        <p className="contacts-empty">No contacts yet</p>
      ) : (
        <ul className="contacts-list">
          {contacts.map((contact) => (
            <li key={contact.id} className="contact-item">
              <div className="contact-avatar">
                {contact.name.charAt(0).toUpperCase()}
              </div>
              <span className="contact-name">{contact.name}</span>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default ContactList;