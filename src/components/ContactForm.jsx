import React from 'react'

function ContactForm() {
  return (
    <form className='space-y-4'>
      <div>
        <label class="block text-sm font-semibold mb-2" for="name">Name</label>
        <input class="w-full bg-white dark:bg-card border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 focus:ring-2 focus:ring-prim-violet focus:border-transparent outline-none transition-all" id="name" name="name" placeholder="Name" type="text" />
      </div>
      <div>
        <label class="block text-sm font-semibold mb-2" for="email">Email</label>
        <input class="w-full bg-white dark:bg-card border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 focus:ring-2 focus:ring-prim-violet focus:border-transparent outline-none transition-all" id="email" name="email" placeholder="email@example.com" type="email" />
      </div>
      <div>
        <label class="block text-sm font-semibold mb-2" for="message">Message</label>
        <textarea class="w-full bg-white dark:bg-card border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 focus:ring-2 focus:ring-prim-violet focus:border-transparent outline-none transition-all" id="message" name="message" placeholder="How can I help you?" rows="4"></textarea>
      </div>
      <button class="w-full py-4 bg-prim-violet text-white font-bold rounded-xl hover:bg-prim-violet/90 transition-all shadow-lg shadow-prim-violet/20" type="submit">
        Send Message
      </button>
    </form>
  )
}

export default ContactForm