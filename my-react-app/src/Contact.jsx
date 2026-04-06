import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();
  const [isSubmitting, setIsSubmitting]   = useState(false);
  const [submitStatus, setSubmitStatus]   = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => { setSubmitStatus("success"); e.target.reset(); },
        () => { setSubmitStatus("error"); }
      )
      .finally(() => setIsSubmitting(false));
  };

  return (
    <>
      <h2 className="section-title">REACH OUT</h2>

      <div className="contact-wrapper">
        <form ref={form} onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input type="text"  id="name"    name="name"    placeholder="Your name"         required />

          <label htmlFor="email">Email</label>
          <input type="email" id="email"   name="email"   placeholder="your@email.com"    required />

          <label htmlFor="message">Message</label>
          <textarea           id="message" name="message" placeholder="What's on your mind?" rows="5" required />

          <input
            type="submit"
            value={isSubmitting ? "Sending…" : "Send Message"}
            disabled={isSubmitting}
          />
        </form>

        {submitStatus === "success" && (
          <p style={{ color: "var(--gold)", marginTop: "1.2rem", fontWeight: 600, textAlign: "center" }}>
            ✓ Message sent successfully!
          </p>
        )}
        {submitStatus === "error" && (
          <p style={{ color: "#f07070", marginTop: "1.2rem", fontWeight: 600, textAlign: "center" }}>
            Something went wrong. Please try again.
          </p>
        )}

        <div className="contact-social">
          <a href="https://github.com/AustineLomocso" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/austine-lomocso-bb1448255/"               target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>
    </>
  );
}