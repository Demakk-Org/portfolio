"use client";
import React, { FormEvent, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const serviceId = process.env.NEXT_PUBLIC_YOUR_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_YOUR_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_YOUR_PUBLIC_KEY;

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSuccess("");
    if (!email) {
      setError("Please enter a valid email address");
      return;
    }
    if (!message) {
      setError("Please enter a message");
      return;
    }

    const templateParams = {
      from_name: email,
      to_name: "Ermias Alhegn",
      message,
    };

    setError("");
    setIsLoading(true);

    emailjs
      .send(serviceId ?? "", templateId ?? "", templateParams, publicKey)
      .then(
        function (response) {
          setName("");
          setEmail("");
          setMessage("");
          setIsLoading(false);
          setSuccess(
            `Email sent successfully! Thank you for having me ${name}`
          );
          console.log("SUCCESS!", response.status);
        },
        function (error) {
          setError("Failed to send email!");
          console.error(error);
          setIsLoading(false);
        }
      );
  };

  return (
    <section
      id="contact"
      className="px-[5%] pt-[10%] flex flex-col items-center justify-center gap-5 dark:text-white"
    >
      <h1 className="text-3xl tablet:text-3xl mb-0">Let's Work Together</h1>
      <div className="flex items-center justify-center ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
        voluptates, labore nisi
      </div>
      <form className="mt-5" onSubmit={sendEmail}>
        <div className="flex gap-10">
          <div className="hidden tablet:flex flex-col gap-2 w-1/2">
            <label>Name</label>
            <input
              type="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="px-10 py-4 rounded-lg dark:bg-white bg-whitesmoke-200"
            />
          </div>
          <div className=" flex flex-col gap-2 tablet:w-1/2">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="px-10 py-4 rounded-lg dark:bg-white bg-whitesmoke-200"
            />
          </div>
        </div>
        <div className="flex flex-col gap-10 ">
          <div className="flex flex-col gap-3 w-full mt-10">
            <label>Message</label>
            <textarea
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="p-5 rounded-lg bg-whitesmoke-200"
            />
          </div>
          {error && <div className="text-red-500 text-center">{error}</div>}
          {success && (
            <div className="text-green-500 text-center">{success}</div>
          )}
          <button
            type="submit"
            disabled={isLoading}
            className="self-center text-xl text-white bg-orangered px-10 py-3 rounded-2xl text-nowrap cursor-pointer tablet:text-md"
          >
            {isLoading ? "Loading..." : "Send"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactSection;
