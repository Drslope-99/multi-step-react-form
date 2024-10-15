import { useState } from "react";
import "./PersonalInfo.css";

const PersonalInfo = () => {
  const [errorMessage, setErrorMessage] = useState({
    name: "",
    email: "",
    phone: "",
  });

  function validateInput(e) {
    let message = "This field is required";
    if (!e.target.value) {
      setErrorMessage((prev) => ({
        ...prev,
        [e.target.name]: message,
      }));
    } else {
      setErrorMessage((prev) => ({
        ...prev,
        [e.target.name]: "",
      }));
    }
  }

  return (
    <div className="info">
      <h1 className="info__header">Personal info</h1>
      <p className="info__description">
        Please provide your name, email address, and phone number.
      </p>
      {/* the form element goes here */}
      <form className="info__form">
        <div className="info__form-control">
          <label htmlFor="name" className="info__form-label">
            Name
          </label>
          <p className="info__form-error">{errorMessage.name}</p>
          <input
            type="text"
            name="name"
            className="info__form-input"
            placeholder="e.g. Stephen King"
            onBlur={validateInput}
          />
        </div>

        <div className="info__form-control">
          <label htmlFor="email" className="info__form-label">
            Email Address
          </label>
          <p className="info__form-error">{errorMessage.email}</p>
          <input
            type="text"
            name="email"
            className="info__form-input"
            placeholder="e.g. stephenking@lorem.com"
            onBlur={validateInput}
          />
        </div>

        <div className="info__form-control">
          <label htmlFor="phone" className="info__form-label">
            Phone Number
          </label>
          <p className="info__form-error">{errorMessage.phone}</p>
          <input
            type="text"
            name="phone"
            className="info__form-input"
            placeholder="e.g. +1 234 567 890"
            onBlur={validateInput}
          />
        </div>
      </form>
    </div>
  );
};

export default PersonalInfo;
