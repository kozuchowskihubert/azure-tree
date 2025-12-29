import { useState } from 'react'
import Link from 'next/link'
import styles from '@/styles/Header.module.css'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { href: '/', label: 'Strona główna' },
    { href: '/oferta', label: 'Oferta' },
    { href: '/galeria', label: 'Galeria' },
    { href: '/rezerwacja', label: 'Rezerwacja' },
    { href: '/sklep', label: 'Sklep', badge: 'Wkrótce' },
    { href: '/opinie', label: 'Opinie' },
    { href: '/dojazd', label: 'Dojazd' },
    { href: '/kontakt', label: 'Kontakt' },
  ]

  return (
    <header className={styles.header}>
      {/* Top bar z kontaktem */}
      <div className={styles.topBar}>
        <div className={styles.topBarContainer}>
          <div className={styles.topBarLeft}>
            <span>📍 ul. Górna 8, 95-200 Rydzyny</span>
            <span>📞 <a href="tel:+48509724030">509 724 030</a></span>
          </div>
          <div className={styles.topBarRight}>
            <a 
              href="https://www.facebook.com/profile.php?id=100054269541065" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className={styles.mainHeader}>
        <div className={styles.container}>
          <Link href="/" className={styles.logo}>
            <span className={styles.logoIcon}>🌲</span>
            <span className={styles.logoText}>Szkółka Rydzyny</span>
          </Link>
          
          <nav className={`${styles.nav} ${mobileMenuOpen ? styles.navOpen : ''}`}>
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href} 
                className={styles.navLink}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
                {link.badge && <span className={styles.navBadge}>{link.badge}</span>}
              </Link>
            ))}
          </nav>

          <div className={styles.headerActions}>
            <a href="tel:+48509724030" className={styles.phoneButton}>
              📞 509 724 030
            </a>
            
            <button 
              className={styles.mobileMenuBtn}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menu"
            >
              {mobileMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
