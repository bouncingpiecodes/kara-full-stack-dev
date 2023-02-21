import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();
  const [formName, setName] = useState("");
  const [formEmail, setEmail] = useState("");
  const [formMessage, setMessage] = useState("");
  const [warningMessage, setWarningMessage] = useState("");

  const botHider1 = "mailto";
  const botHider2 = "karafullstack";
  const botHider3 = "harvey";
  const botHider4 = "@gma";
  const botHider5 = "il.c";
  const botHider6 = "om";

  const sendEmail = (event) => {
    event.preventDefault();

    if (
      formName.trim().length === 0 ||
      formEmail.trim().length === 0 ||
      formMessage.trim().length === 0
    ) {
      setWarningMessage("All fields must be completed!");
      return;
    } else setWarningMessage("");

    emailjs
      .sendForm(
        "service_6912jgl",
        "template_nxmathh",
        form.current,
        "IIBjjcjGKvHQDurqZ"
      )
      .then(
        (result) => {
          console.log(result.text);
          setWarningMessage("Email sent!");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="m-5 mt-0 mb-0 d-flex flex-column align-items-center align-items-lg-start">
      <h3>Contact</h3>
      <p className="border-0">
        Fill out the form below, or send me a message at{" "}
        <a
          href={`${botHider1}:${botHider2}${botHider3}${botHider4}${botHider5}${botHider6}`}
        >
          m{/* Hide from Bots */}ax.{/* Hide from Bots */}mcd
          {/* Hide from Bots */}ono{/* Hide from Bots */}ugh
          {/* Hide from Bots */}@g{/* Hide from Bots */}ma{/* Hide from Bots */}
          il.com
        </a>
      </p>
      <form ref={form} onSubmit={sendEmail} className="form-control border-0">
        <div className="form-group m-2">
          <label htmlFor="from_name">Name</label>
          <input
            name="from_name"
            type="text"
            value={formName}
            onChange={(e) => setName(e.target.value)}
            className="form-control col-8"
          />
        </div>
        <div className="form-group m-2">
          <label htmlFor="reply_to">Email</label>
          <input
            name="reply_to"
            type="email"
            value={formEmail}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control col-8"
          />
        </div>
        <div className="form-group m-2">
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            type="text"
            value={formMessage}
            onChange={(e) => setMessage(e.target.value)}
            className="form-control col-8"
          ></textarea>
        </div>
        <div className="form-group m-2 d-flex flex-row">
          <input type="submit" value="Send" />
          <p className="ms-5">{warningMessage}</p>
        </div>
      </form>
    </div>
  );
}
