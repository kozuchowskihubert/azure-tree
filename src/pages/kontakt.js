import { useState } from 'react'
import Layout from '@/components/Layout'
import styles from '@/styles/Pages.module.css'

export default function Kontakt() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Tu można dodać logikę wysyłania formularza
    alert('Dziękujemy za wiadomość! Skontaktujemy się wkrótce.')
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  return (
    <Layout 
      title="Kontakt" 
      description="Skontaktuj się ze Szkółką Drzew i Krzewów Rydzyny"
    >
      <section className={styles.page}>
        <div className={styles.container}>
          <div className={styles.pageHeader}>
            <h1 className={styles.pageTitle}>Kontakt</h1>
            <p className={styles.pageSubtitle}>
              Masz pytania? Skontaktuj się z nami!
            </p>
          </div>

          <div className={styles.contactGrid}>
            <div className={styles.contactInfo}>
              <div className={styles.contactCard}>
                <h3>📍 Adres</h3>
                <p>
                  <strong>Szkółka Drzew i Krzewów Rydzyny</strong><br />
                  ul. Górna 8<br />
                  95-200 Rydzyny<br />
                  woj. łódzkie
                </p>
              </div>

              <div className={styles.contactCard}>
                <h3>📞 Telefon</h3>
                <p>
                  Zadzwoń do nas:<br />
                  <a href="tel:+48509724030"><strong>509 724 030</strong></a>
                </p>
              </div>

              <div className={styles.contactCard}>
                <h3>� Social Media</h3>
                <p>Znajdziesz nas również na Facebooku:</p>
                <div className={styles.socialLinks}>
                  <a 
                    href="https://www.facebook.com/profile.php?id=100054269541065" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                  >
                    Facebook - Profil główny
                  </a>
                  <a 
                    href="https://www.facebook.com/profile.php?id=100070331925140" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                  >
                    Facebook - Szkółka
                  </a>
                </div>
              </div>

              <div className={styles.contactCard}>
                <h3>🕐 Godziny otwarcia</h3>
                <p>
                  Poniedziałek - Piątek: 8:00 - 18:00<br />
                  Sobota: 8:00 - 14:00<br />
                  Niedziela: Zamknięte<br />
                  <em>(zalecamy wcześniejszy kontakt telefoniczny)</em>
                </p>
              </div>
            </div>

            <div className={styles.contactForm}>
              <h3>Wyślij wiadomość</h3>
              <form onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">Imię i nazwisko *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Jan Kowalski"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="jan@example.com"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="phone">Telefon</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+48 123 456 789"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message">Wiadomość *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Twoja wiadomość..."
                  />
                </div>

                <button type="submit" className={styles.submitBtn}>
                  Wyślij wiadomość 📨
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
