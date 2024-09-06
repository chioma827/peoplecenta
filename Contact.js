import React from 'react';

const Contact = () => {
  return (
    <div>
      <h1>Contact Us</h1>
      <form>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Message" />
        <button>Send</button>
      </form>
    </div>
  );
};

export default Contact;
