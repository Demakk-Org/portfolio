import React, { FormEvent, useState } from "react";
import emailjs from "@emailjs/browser";

interface FormData {
  fullName: string;
  emailAddress: string;
  userMessage: string;
}

export default function useContactForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    emailAddress: "",
    userMessage: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [formSuccess, setFormSuccess] = useState(false);

  const serviceId = process.env.NEXT_PUBLIC_YOUR_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_YOUR_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_YOUR_PUBLIC_KEY;

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { fullName, emailAddress, userMessage } = formData;
    setFormError(null);
    setFormSuccess(false);

    if (!emailAddress) {
      setFormError("Please provide a valid email address.");
      return;
    }
    if (!userMessage) {
      setFormError("Please provide a message.");
      return;
    }

    if (!serviceId || !templateId || !publicKey) {
      setFormError("Email service configuration is incomplete.");
      return;
    }

    const emailParams = {
      from_name: emailAddress,
      message: userMessage,
    };

    setIsSubmitting(true);

    try {
      await emailjs.send(serviceId, templateId, emailParams, publicKey);
      setFormData({ fullName: "", emailAddress: "", userMessage: "" });
      setFormSuccess(true);
    } catch (error) {
      console.error("Email send error:", error);
      setFormError("Failed to send the email. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    formError,
    formSuccess,
    isSubmitting,
    handleInputChange,
    handleFormSubmit,
  };
}
