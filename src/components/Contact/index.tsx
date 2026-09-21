"use client";

import emailjs from "@emailjs/browser";
import { FormEvent, useRef, useState } from "react";
import NewsLatterBox from "./NewsLatterBox";

type FormStatus = {
  type: "success" | "error";
  message: string;
} | null;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<FormStatus>(null);

  const sendEmail = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!formRef.current) {
      return;
    }

    const formData = new FormData(formRef.current);
    const name = String(formData.get("user_name") || "").trim();
    const email = String(formData.get("user_email") || "").trim();
    const message = String(formData.get("message") || "").trim();
    const company = String(formData.get("company") || "").trim();

    if (company) {
      setStatus({
        type: "success",
        message: "Thanks. Your request has been received.",
      });
      formRef.current.reset();
      return;
    }

    if (name.length < 2) {
      setStatus({
        type: "error",
        message: "Please enter a name with at least 2 characters.",
      });
      return;
    }

    if (!emailPattern.test(email)) {
      setStatus({
        type: "error",
        message: "Please enter a valid email address.",
      });
      return;
    }

    if (message.length < 10) {
      setStatus({
        type: "error",
        message: "Please share a few more details about your request.",
      });
      return;
    }

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;

    if (!serviceId || !templateId || !publicKey) {
      setStatus({
        type: "error",
        message:
          "Email service is not configured yet. Please add the EmailJS public environment variables.",
      });
      return;
    }

    setStatus(null);
    setLoading(true);

    try {
      await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);
      setStatus({
        type: "success",
        message: "Message sent successfully. We will reply by email soon.",
      });
      formRef.current.reset();
    } catch (error) {
      console.error(error);
      setStatus({
        type: "error",
        message: "Message failed to send. Please try again in a moment.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div
              className="shadow-three dark:bg-gray-dark mb-12 rounded-xs bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s"
            >
              <h2 className="mb-3 text-2xl font-bold text-black sm:text-3xl lg:text-2xl xl:text-3xl dark:text-white">
                Need Help? Open a Ticket
              </h2>
              <p className="text-body-color mb-8 text-base font-medium">
                Tell us what you are building and our team will get back to you
                by email.
              </p>
              {status && (
                <p
                  className={`mb-8 rounded-xs border px-4 py-3 text-sm font-medium ${
                    status.type === "success"
                      ? "border-green-200 bg-green-50 text-green-700"
                      : "border-red-200 bg-red-50 text-red-700"
                  }`}
                  role={status.type === "error" ? "alert" : "status"}
                >
                  {status.message}
                </p>
              )}
              <form ref={formRef} onSubmit={sendEmail}>
                <input
                  type="text"
                  name="company"
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                  aria-hidden="true"
                />
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="user_name"
                        className="text-dark mb-3 block text-sm font-medium dark:text-white"
                      >
                        Your Name
                      </label>
                      <input
                        id="user_name"
                        type="text"
                        name="user_name"
                        required
                        minLength={2}
                        placeholder="Enter your name"
                        className="border-stroke text-body-color focus:border-primary dark:text-body-color-dark dark:shadow-two dark:focus:border-primary w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base outline-hidden dark:border-transparent dark:bg-[#2C303B] dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="user_email"
                        className="text-dark mb-3 block text-sm font-medium dark:text-white"
                      >
                        Your Email
                      </label>
                      <input
                        id="user_email"
                        type="email"
                        name="user_email"
                        required
                        placeholder="Enter your email"
                        className="border-stroke text-body-color focus:border-primary dark:text-body-color-dark dark:shadow-two dark:focus:border-primary w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base outline-hidden dark:border-transparent dark:bg-[#2C303B] dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="message"
                        className="text-dark mb-3 block text-sm font-medium dark:text-white"
                      >
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        minLength={10}
                        placeholder="Tell us about your project, timeline, or support need"
                        className="border-stroke text-body-color focus:border-primary dark:text-body-color-dark dark:shadow-two dark:focus:border-primary w-full resize-none rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base outline-hidden dark:border-transparent dark:bg-[#2C303B] dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <button
                      type="submit"
                      disabled={loading}
                      className="bg-primary shadow-submit hover:bg-primary/90 dark:shadow-submit-dark rounded-xs px-9 py-4 text-base font-medium text-white duration-300 disabled:cursor-not-allowed disabled:opacity-70"
                    >
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
