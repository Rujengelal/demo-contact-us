import React from "react";
import "./App.css";
import { FiSmartphone, BsFillTelephoneFill, BsEnvelope } from "react-icons/all";

function App() {
  return (
    <div className="contact__us">
      <div className="contact__sections">
        <form action="#">
          <h1>contact us</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla,
            adipisci! Architecto commodi culpa, hic molestias cupiditate odit
            placeat nihil labore.
          </p>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter your name"
          />
          <input
            type="text"
            name="email"
            id="email"
            placeholder="enter your email address"
          />
          <textarea
            name="message"
            id="message"
            placeholder="enter your message"
          />
          <button>submit</button>
        </form>
      </div>
      <div className="contact__sections">
        <div className="contact__section__item">
          <FiSmartphone />
          <p>123-456-789</p>
        </div>
        <div className="contact__section__item">
          <BsFillTelephoneFill />
          <p>1-234-567-8900</p>
        </div>
        <div className="contact__section__item">
          <BsEnvelope />
          <p>contact@example.com</p>
        </div>
      </div>
    </div>
  );
}

export default App;
