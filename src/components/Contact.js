import React, { useState } from "react";
// Here we import a helper function that will check if the email is valid
import { validateEmail } from "./../utils/helpers";
import "../styles/Contact.css";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [blurError, setBlurError] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    let errorMessage = "";
    if (!name) {
      errorMessage = errorMessage + "A name is required. ";
    }
    if (!email) {
      errorMessage = errorMessage + "An email is required. ";
    }
    if (!validateEmail(email)) {
      errorMessage =
        errorMessage + "Email is invalid, a valid email is required. ";
    }
    if (!message) {
      errorMessage = errorMessage + "A message is required. ";
    }
    if (errorMessage) {
      setError(errorMessage);
    } else {
      // submit the form
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    if (!value) {
      setBlurError({ ...blurError, [name]: "This field is required." });
    } else {
      setBlurError({ ...blurError, [name]: "" });
    }
  };

  return (
    <div className="container">
      <h2>Contact Me</h2>
      Email: <a href="mailto:bouncingpie@icloud.com">bouncingpie@icloud</a>
      {/* <div className="row justify-content-center">
        <div className="col-6">
          <form onSubmit={handleSubmit}>
            <div className="form-outline mb-4">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                className="form-control"
                value={name}
                onBlur={handleBlur}
                onChange={(e) => setName(e.target.value)}
              />
              {blurError.name && (
                <div>
                  <p className="text-danger">{blurError.name}</p>
                </div>
              )}
            </div>

            <div className="form-outline mb-4">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                name="email"
                className="form-control"
                value={email}
                onBlur={handleBlur}
                onChange={(e) => setEmail(e.target.value)}
              />
              {blurError.email && (
                <div>
                  <p className="text-danger">{blurError.email}</p>
                </div>
              )}
            </div>

            <div className="form-outline mb-4">
              <label htmlFor="message">Message</label>
              <input
                type="textarea"
                name="message"
                className="form-control"
                value={message}
                onBlur={handleBlur}
                onChange={(e) => setMessage(e.target.value)}
              />
              {blurError.message && (
                <div>
                  <p className="text-danger">{blurError.message}</p>
                </div>
              )}
            </div>

            <button type="submit" className="btn btn-primary btn-block mb-4">
              Submit
            </button>
            {error && (
              <div>
                <p className="text-danger">{error}</p>
              </div>
            )}
          </form>
        </div>
      </div> */}
    </div>
  );
}

export default Contact;
