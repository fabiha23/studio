import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FiMail, FiPhone } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    emailjs.sendForm(
      'service_u85tgc8',
      'template_glyxurp',
      e.target,
      'vB6gIhiQUZD4KSVCC'
    )
      .then(
        (result) => {
          console.log("Message sent:", result.text);
          setSubmitStatus("success");
          form.current.reset();
        },
        (error) => {
          console.log("Error:", error.text);
          setSubmitStatus("error");
        }
      )
      .finally(() => setIsSubmitting(false));
  };

  return (
    <section
      id="contact"
      className="min-h-[calc(100vh-72px)] py-20 px-6 text-[#cec0a7]"
    >
      <div>
        <div className="mb-16">
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-2">
            Let's Talk
          </h2>
          <div className="sm:w-1/4 w-1/2 h-1 bg-gradient-to-r from-[#cec0a7] to-transparent"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <h3 className="text-2xl font-medium">Direct Contact</h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-[#1a1a1a]/50 border border-[#3f3f3f] hover:border-[#cec0a7]/50 transition-colors duration-300">
                <FiMail
                  className="text-[#cec0a7] mt-1 flex-shrink-0"
                  size={20}
                />
                <div>
                  <h4 className="font-medium mb-1">Email</h4>
                  <a
                    href="mailto:fabiha.amatullah@gmail.com"
                    className="opacity-90 hover:underline hover:text-[#cec0a7] transition-colors duration-300"
                  >
                    fabiha.amatullah@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-[#1a1a1a]/50 border border-[#3f3f3f] hover:border-[#cec0a7]/50 transition-colors duration-300">
                <FiPhone
                  className="text-[#cec0a7] mt-1 flex-shrink-0"
                  size={20}
                />
                <div>
                  <h4 className="font-medium mb-1">Phone</h4>
                  <a
                    href="tel:+8801990115685"
                    className="opacity-90 hover:underline hover:text-[#cec0a7] transition-colors duration-300"
                  >
                    +8801990115685
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-[#1a1a1a]/50 border border-[#3f3f3f] hover:border-[#cec0a7]/50 transition-colors duration-300">
                <FaWhatsapp
                  className="text-[#25D366] mt-1 flex-shrink-0"
                  size={20}
                />
                <div>
                  <h4 className="font-medium mb-1">WhatsApp</h4>
                  <a
                    href="https://wa.me/+8801990115685"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="opacity-90 hover:underline hover:text-[#cec0a7] transition-colors duration-300"
                  >
                    +8801990115685
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-[#3f3f3f]">
              <h3 className="text-xl font-medium mb-4">Availability</h3>
              <p className="opacity-90">
                I'm typically available Monday through Friday, 9 AM to 5 PM EST.
                Responses usually within 24 hours.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-medium mb-6">Send Me a Message</h3>
            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              <input
                type="text"
                name="from_name"
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 rounded-lg bg-[#1a1a1a]/50 border border-[#3f3f3f] focus:border-[#cec0a7] outline-none transition-colors"
              />
              <input
                type="email"
                name="from_email"
                placeholder="Your Email"
                required
                className="w-full px-4 py-3 rounded-lg bg-[#1a1a1a]/50 border border-[#3f3f3f] focus:border-[#cec0a7] outline-none transition-colors"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                required
                rows="5"
                className="w-full px-4 py-3 rounded-lg bg-[#1a1a1a]/50 border border-[#3f3f3f] focus:border-[#cec0a7] outline-none transition-colors"
              ></textarea>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-3 rounded-lg bg-[#cec0a7] text-black font-semibold hover:bg-[#b5a68f] transition-colors disabled:opacity-50"
              >
                {isSubmitting ? "Sending..." : "Send"}
              </button>
              {submitStatus === "success" && (
                <p className="text-green-400">Message sent successfully!</p>
              )}
              {submitStatus === "error" && (
                <p className="text-red-400">Something went wrong. Try again.</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
