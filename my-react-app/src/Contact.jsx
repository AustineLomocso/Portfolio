import {useState, useRef} from "react"
import emailjs from '@emailjs/browser';
 export default function Contact() {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then((result) => {
        console.log(result.text);
        setSubmitStatus('success');
        e.target.reset(); // This instantly clears all the input boxes for you!
    }, (error) => {
        console.log(error.text);
        setSubmitStatus('error');
    })
    .finally(() => {
        setIsSubmitting(false); // Turn the button back on
    });
  }
  return (
    <>
      <h1>REACH OUT</h1>
      <form ref={form} onSubmit = {handleSubmit}>
      <label htmlFor="name">Name: </label>
      <input type="text" id="name" name="name" required />
      <br />

      <label htmlFor="email">Email: </label>
      <input type="email" id="email" name="email" required />
      <br />

      <label htmlFor="message">Message: </label>
      <textarea rows="4" id="message" name="message" required></textarea>
      <br/>
        <input type="submit" value = {isSubmitting? "Sending..." : "Send"} disabled={isSubmitting}/> 
      </form>
      {submitStatus === 'success' && (
        <p style={{ color: "var(--gold)", marginTop: "1.5rem", fontWeight: "bold", textAlign: "center" }}>
          Message sent successfully!
        </p>
      )}
      
      {submitStatus === 'error' && (
        <p style={{ color: "#ff4d4d", marginTop: "1.5rem", fontWeight: "bold", textAlign: "center" }}>
          Failed to send message. Please try again.
        </p>
      )}
    </>
  );
}