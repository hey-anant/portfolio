import { useState } from 'react'

export default function Contact() {
  const [contactData, setContactData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('')

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setContactData((prev) => ({ ...prev, [name]: value }))
  }

  const handleContactSubmit = (event) => {
    event.preventDefault()
    const trimmedName = contactData.name.trim()
    const trimmedEmail = contactData.email.trim()
    const trimmedMessage = contactData.message.trim()

    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      setStatus('Please fill in all fields before sending.')
      return
    }

    if (!/^\S+@\S+\.\S+$/.test(trimmedEmail)) {
      setStatus('Please enter a valid email address.')
      return
    }

    const subject = encodeURIComponent(`Portfolio contact from ${trimmedName}`)
    const body = encodeURIComponent(
      `Name: ${trimmedName}\nEmail: ${trimmedEmail}\n\nMessage:\n${trimmedMessage}`,
    )
    window.location.href = `mailto:anantkumar.r77@gmail.com?subject=${subject}&body=${body}`
    setStatus(`Thanks, ${trimmedName}! Your email draft is now open.`)
    setContactData({ name: '', email: '', message: '' })
  }

  return (
    <section className="contact card" id="contact">
      <h2>Contact</h2>
      <form onSubmit={handleContactSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your name"
          value={contactData.name}
          onChange={handleInputChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your email"
          value={contactData.email}
          onChange={handleInputChange}
          required
        />
        <textarea
          name="message"
          placeholder="Write your message"
          rows="4"
          value={contactData.message}
          onChange={handleInputChange}
          required
        />
        <button type="submit">Send Message</button>
      </form>
      {status && <p className="status-text">{status}</p>}
    </section>
  )
}
