"use client";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import NewsLatterBox from "./NewsLatterBox";

const Contact = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const validateInput = (input) => {
    const pattern = /^[a-zA-Z0-9\s]+$/; // 只允许字母和数字
    return pattern.test(input);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const name = formRef.current.user_name.value;
    const email = formRef.current.user_email.value;
    const message = formRef.current.message.value;

    if (!validateInput(name)) {
      setError("Invalid name. Only letters and numbers are allowed.");
      return;
    }

    if (!validateInput(message)) {
      setError("Invalid message content. Please avoid special characters.");
      return;
    }

    setError(null); // 清除错误
    setLoading(true);

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const userId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;

    emailjs
        .sendForm(
            serviceId,           // your service ID
            templateId,          // your template ID
            formRef.current,
            userId               // your public key
        )
        .then(
            (result) => {
              alert("✅ Message sent successfully!");
              formRef.current.reset();
            },
            (error) => {
              alert("❌ Failed to send message. Please try again.");
              console.error(error);
            }
        )
        .finally(() => {
          setLoading(false);
        });
  };

  return (
      <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
              <div className="mb-12 rounded-xs bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]" data-wow-delay=".15s">
                <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">Need Help? Open a Ticket</h2>
                <p className="mb-12 text-base font-medium text-body-color">Our support team will get back to you ASAP via email.</p>
                {error && <p className="text-red-500">{error}</p>}
                <form ref={formRef} onSubmit={sendEmail}>
                  <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4 md:w-1/2">
                      <div className="mb-8">
                        <label htmlFor="user_name" className="mb-3 block text-sm font-medium text-dark dark:text-white">Your Name</label>
                        <input type="text" name="user_name" required placeholder="Enter your name" className="border-stroke w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-hidden focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none" />
                      </div>
                    </div>
                    <div className="w-full px-4 md:w-1/2">
                      <div className="mb-8">
                        <label htmlFor="user_email" className="mb-3 block text-sm font-medium text-dark dark:text-white">Your Email</label>
                        <input type="email" name="user_email" required placeholder="Enter your email" className="border-stroke w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-hidden focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none" />
                      </div>
                    </div>
                    <div className="w-full px-4">
                      <div className="mb-8">
                        <label htmlFor="message" className="mb-3 block text-sm font-medium text-dark dark:text-white">Your Message</label>
                        <textarea name="message" rows={5} required placeholder="Enter your Message" className="border-stroke w-full resize-none rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-hidden focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"></textarea>
                      </div>
                    </div>
                    <div className="w-full px-4">
                      <button type="submit" className="rounded-xs bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark">
                        {loading ? "Sending..." : "Submit Ticket"}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
              <NewsLatterBox />
            </div>
          </div>
        </div>
      </section>
  );
};

export default Contact;
