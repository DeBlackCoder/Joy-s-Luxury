"use client";
import EmailIcon from "@/components/svg/EmailIcon";
import FaceBookIcon from "@/components/svg/FaceBookIcon";
import PhoneCall from "@/components/svg/PhoneCall";
import WhatsappIcon from "@/components/svg/WhatsappIcon";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setStatus("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("✅ Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("❌ Failed to send message.");
      }
    } catch (err) {
      console.error(err);
      setStatus("⚠️ Something went wrong.");
    }

    setSending(false);
  };

  return (
  
    <div className="contact-body">
      <div className="contact-page">
        <h1>Contact Us</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit" disabled={sending}>
            {sending ? "Sending..." : "Send Message"}
          </button>
        </form>
        {status && <p>{status}</p>}

        {/* Extra Contact Writeup with Social Links */}
       
      </div>

       <div className="contact-info">
          <h2>We’d Love to Hear From You!</h2>
          <p>
            Whether you have a question, suggestion, or just want to say hello,
            our team is here to help. Connect with us through any of the
            channels below.
          </p>

          <div className="contact-details">
            <p>
              <PhoneCall /> <strong>Phone:</strong> +234 814 306 6493
            </p>
          </div>

          <div className="social-links">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              {/* Facebook SVG */}
              <FaceBookIcon />
            </a>

            <a
              href="https://wa.me/2348123456789"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              {/* WhatsApp SVG */}
              <WhatsappIcon />
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              {/* Twitter SVG */}
              <svg width="24" height="24" fill="#1DA1F2" viewBox="0 0 24 24">
                <path d="M23.954 4.569c-.885.392-1.83.656-2.825.775a4.932 4.932 0 0 0 2.163-2.724 9.864 9.864 0 0 1-3.127 1.195 4.916 4.916 0 0 0-8.384 4.482 13.944 13.944 0 0 1-10.125-5.138 4.822 4.822 0 0 0-.664 2.475c0 1.708.869 3.214 2.188 4.099a4.902 4.902 0 0 1-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.828a4.996 4.996 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417a9.867 9.867 0 0 1-6.102 2.105c-.395 0-.788-.023-1.17-.068a13.945 13.945 0 0 0 7.548 2.212c9.056 0 14-7.496 14-13.986 0-.21-.004-.423-.014-.634a9.936 9.936 0 0 0 2.46-2.548l.002-.003z" />
              </svg>
            </a>
          </div>
        </div>
    </div>
    
    
  );
}
