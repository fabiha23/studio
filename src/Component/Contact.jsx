import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FiMail, FiPhone, FiMessageSquare } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs.sendForm(
      'service_u85tgc8',
      'template_glyxurp',
      form.current,
      'vB6gIhiQUZD4KSVCC'
    )
    .then((result) => {
      setSubmitStatus('success');
      form.current.reset();
    }, (error) => {
      setSubmitStatus('error');
    })
    .finally(() => {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    });
  };

  return (
    <section id="contact" className="min-h-[calc(100vh-72px)] py-20 px-6 text-[#cec0a7]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-2">Get In Touch</h2>
          <div className="w-20 h-1 bg-[#cec0a7]"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <h3 className="text-2xl font-medium">Direct Contact</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-[#1a1a1a]/50 border border-[#3f3f3f] hover:border-[#cec0a7]/50 transition-colors duration-300">
                <FiMail className="text-[#cec0a7] mt-1 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-medium mb-1">Email</h4>
                  <a 
                    href="mailto:your.email@example.com" 
                    className="opacity-90 hover:underline hover:text-[#cec0a7] transition-colors duration-300"
                  >
                    fabiha.amatullah@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-[#1a1a1a]/50 border border-[#3f3f3f] hover:border-[#cec0a7]/50 transition-colors duration-300">
                <FiPhone className="text-[#cec0a7] mt-1 flex-shrink-0" size={20} />
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
                <FaWhatsapp className="text-[#25D366] mt-1 flex-shrink-0" size={20} />
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
              <p className="opacity-90">I'm typically available Monday through Friday, 9 AM to 5 PM EST. Responses usually within 24 hours.</p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-medium mb-6">Send Me a Message</h3>
            <form 
              ref={form} 
              onSubmit={sendEmail}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    name="user_name"
                    id="name"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-[#1a1a1a]/50 border border-[#3f3f3f] focus:border-[#cec0a7] focus:outline-none transition-colors duration-300"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    name="user_email"
                    id="email"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-[#1a1a1a]/50 border border-[#3f3f3f] focus:border-[#cec0a7] focus:outline-none transition-colors duration-300"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-[#1a1a1a]/50 border border-[#3f3f3f] focus:border-[#cec0a7] focus:outline-none transition-colors duration-300"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  name="message"
                  id="message"
                  rows="5"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-[#1a1a1a]/50 border border-[#3f3f3f] focus:border-[#cec0a7] focus:outline-none transition-colors duration-300"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-3 rounded-full bg-[#cec0a7] text-black font-medium hover:bg-[#e0e0d8] transition-colors duration-300 flex items-center gap-2"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                {!isSubmitting && <FiMessageSquare size={18} />}
              </button>
              {submitStatus === 'success' && (
                <p className="text-green-500 mt-2">Message sent successfully!</p>
              )}
              {submitStatus === 'error' && (
                <p className="text-red-500 mt-2">Failed to send message. Please try again.</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;