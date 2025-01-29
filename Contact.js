import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="section">
      <h2>Contact Me</h2>
      <p>Email: [your.email@example.com]</p>
      <button onClick={() => alert("Thank you for visiting!")}>
        Say Hi!
      </button>
    </section>
  );
};

export default Contact;
