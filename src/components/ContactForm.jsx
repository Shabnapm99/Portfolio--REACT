import React, { useRef, useState } from 'react'
import { toast } from 'react-toastify';
import emailjs from '@emailjs/browser';
function ContactForm() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sending, setSending] = useState(false);
  const form = useRef();
  let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !message) {

      return toast.error("Please fill out all fields")
    }

    if (name.length < 4) {
      return toast.error("Name must be at least 4 characters")
    }

    if (!emailPattern.test(email)) {
      return toast.error("Please enter a valid email")
    }

    if (message.length <= 10) {
      return toast.error("Message must be at least 10 characters")
    }
    sendEmail();

  }

  const sendEmail = () => {
    setSending(true)

    emailjs
      .sendForm(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, form.current, {
        publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      })
      .then(
        () => {
          console.log('SUCCESS!');
          toast.success("Email sent successfully");
          setName('');
          setEmail('');
          setMessage('');
          setSending(false);

        },
        (error) => {
          console.log('FAILED...', error.text);
          toast.error("Sending failed...");
          setSending(false);

        },
      );
  };

  return (
    <form className='space-y-4' ref={form} onSubmit={handleSubmit} noValidate>
      <div>
        <label className="block text-sm font-semibold mb-2" htmlFor="name">Name</label>
        <input className="w-full bg-white dark:bg-card border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 focus:ring-2 focus:ring-prim-violet focus:border-transparent outline-none transition-all" id="name" name="name" placeholder="Name" type="text" value={name}
          onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label className="block text-sm font-semibold mb-2" htmlFor="email">Email</label>
        <input className="w-full bg-white dark:bg-card border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 focus:ring-2 focus:ring-prim-violet focus:border-transparent outline-none transition-all" id="email" name="email" placeholder="email@example.com" type="email" value={email}
          onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label className="block text-sm font-semibold mb-2" htmlFor="message">Message</label>
        <textarea className="w-full bg-white dark:bg-card border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 focus:ring-2 focus:ring-prim-violet focus:border-transparent outline-none transition-all" id="message" name="message" placeholder="How can I help you?" rows="4" value={message}
          onChange={(e) => setMessage(e.target.value)}></textarea>
      </div>
      <button className="w-full py-4 bg-prim-violet text-white font-bold rounded-xl hover:bg-prim-violet/90 transition-all shadow-lg shadow-prim-violet/20" type="submit" disabled={sending}>
        Send Message
      </button>
    </form>
  )
}

export default ContactForm