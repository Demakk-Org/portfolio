"use client";

import useContactForm from "../../hooks/useContactFormHandler";

const ContactSection: React.FC = () => {
  const {
    formData,
    formError,
    isFormSuccess,
    isSubmitting,
    handleInputChange,
    handleFormSubmit,
  } = useContactForm();

  return (
    <section
      id="contact"
      className="px-[5%] pt-[10%] flex flex-col items-center justify-center gap-5 dark:text-white"
    >
      <h1 className="text-3xl tablet:text-3xl mb-0">Let's Work Together</h1>
      <p className="flex items-center justify-center text-center">
        Reach out with your ideas or questions. I'd love to collaborate with
        you!
      </p>
      <form className="mt-5" onSubmit={handleFormSubmit}>
        <div className="flex gap-10">
          <div className="hidden tablet:flex flex-col gap-2 w-1/2">
            <label htmlFor="fullName">Name</label>
            <input
              id="fullName"
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              placeholder="Enter your full name"
              className="px-10 py-4 rounded-lg dark:bg-white bg-whitesmoke-200"
            />
          </div>
          <div className="flex flex-col gap-2 tablet:w-1/2">
            <label htmlFor="emailAddress">Email</label>
            <input
              id="emailAddress"
              type="email"
              name="emailAddress"
              value={formData.emailAddress}
              onChange={handleInputChange}
              placeholder="Enter your email"
              className="px-10 py-4 rounded-lg dark:bg-white bg-whitesmoke-200"
            />
          </div>
        </div>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-3 w-full mt-10">
            <label htmlFor="userMessage">Message</label>
            <textarea
              id="userMessage"
              name="userMessage"
              value={formData.userMessage}
              onChange={handleInputChange}
              placeholder="Enter your message"
              className="p-5 rounded-lg bg-whitesmoke-200"
            />
          </div>
          {formError && <p className="text-red-500 text-center">{formError}</p>}
          {isFormSuccess && (
            <p className="text-green-500 text-center">
              Email sent successfully! Thank you for having me
            </p>
          )}
          <button
            type="submit"
            disabled={isSubmitting}
            className="self-center text-xl text-white bg-orangered px-10 py-3 rounded-2xl cursor-pointer tablet:text-md"
          >
            {isSubmitting ? "Sending..." : "Send"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactSection;
