import Link from 'next/link'
import styles from '@/styles/Footer.module.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.section}>
            <h3 className={styles.title}>
              <span className={styles.logoIcon}>🌲</span>
              Szkółka Drzew i Krzewów Rydzyny
            </h3>
            <p className={styles.description}>
              Profesjonalna szkółka oferująca najwyższej jakości drzewa i krzewy ozdobne. 
              Zapraszamy do współpracy!
            </p>
          </div>

          <div className={styles.section}>
            <h4 className={styles.subtitle}>Nawigacja</h4>
            <nav className={styles.nav}>
              <Link href="/">Strona główna</Link>
              <Link href="/oferta">Oferta</Link>
              <Link href="/galeria">Galeria</Link>
              <Link href="/rezerwacja">Rezerwacja</Link>
              <Link href="/opinie">Opinie</Link>
              <Link href="/kontakt">Kontakt</Link>
            </nav>
          </div>

          <div className={styles.section}>
            <h4 className={styles.subtitle}>Kontakt</h4>
            <address className={styles.address}>
              <p>📍 ul. Górna 8, 95-200 Rydzyny</p>
              <p>📞 <a href="tel:+48509724030">509 724 030</a></p>
            </address>
          </div>

          <div className={styles.section}>
            <h4 className={styles.subtitle}>Social Media</h4>
            <div className={styles.social}>
              <a 
                href="https://www.facebook.com/profile.php?id=100054269541065" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Facebook Profil 1"
              >
                📘 Facebook - Profil główny
              </a>
              <a 
                href="https://www.facebook.com/profile.php?id=100070331925140" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Facebook Profil 2"
              >
                📘 Facebook - Szkółka
              </a>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>&copy; {currentYear} Szkółka Drzew i Krzewów Rydzyny. Wszelkie prawa zastrzeżone.</p>
        </div>
      </div>
    </footer>
  )
}
