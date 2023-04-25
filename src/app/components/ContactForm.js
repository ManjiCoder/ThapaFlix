"use client";
import { useState } from "react";
import styles from "../contact/contact.module.css";
import { Mulish } from "next/font/google";

const mulish = Mulish({
  weight: "400",
  subsets: ["latin"],
});

function ContactForm() {
  const [status, setStatus] = useState(null);
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    message: "",
  });
  const { username, email, phone, message } = user;
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser((prevUser) => ({ ...user, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          Content_Type: "application/json",
        },
        body: JSON.stringify({ username, email, phone, message }),
      });
      console.log({ response });
      if (response.status === 200) {
        setStatus("success");
        setUser({
          username: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form className={styles.contact_form} onSubmit={handleSubmit}>
      <div className={styles.input_field}>
        <label htmlFor="username" className={styles.label}>
          Enter your name:
          <input
            type="text"
            name="username"
            id="username"
            className={mulish.className}
            placeholder="Enter your name"
            onChange={handleChange}
            value={user.username}
            autoComplete="off"
          />
        </label>
      </div>
      <div className={styles.input_field}>
        <label htmlFor="username" className={styles.label}>
          Enter your email:
          <input
            type="email"
            name="email"
            id="email"
            className={mulish.className}
            placeholder="Enter your email"
            onChange={handleChange}
            value={user.email}
            autoComplete="off"
          />
        </label>
      </div>
      <div className={styles.input_field}>
        <label htmlFor="username" className={styles.label}>
          Enter your phone:
          <input
            type="number"
            name="phone"
            id="phone"
            className={mulish.className}
            placeholder="Enter your phone"
            onChange={handleChange}
            value={user.phone}
          />
        </label>
      </div>
      <div className={styles.input_field}>
        <label htmlFor="username" className={styles.label}>
          Message:
          <textarea
            rows={5}
            name="message"
            id="message"
            className={mulish.className}
            placeholder="Enter your message"
            onChange={handleChange}
            value={user.message}
          />
        </label>
      </div>
      <div className={styles.input_field}>
        {status === "success" && (
          <p className={styles.success_msg}>Thank you for your message.</p>
        )}
        {status === "error" && (
          <p className={styles.error_msg}>
            There was an error submitting your message. Please try again.
          </p>
        )}
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

export default ContactForm;
