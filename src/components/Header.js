import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '@/styles/Header.module.css'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const router = useRouter()

  const navLinks = [
    { href: '/', label: 'Strona główna', icon: '🏠' },
    { href: '/oferta', label: 'Oferta', icon: '🌳' },
    { href: '/galeria', label: 'Galeria', icon: '📸' },
    { href: '/rezerwacja', label: 'Rezerwacja', icon: '📅' },
    { href: '/sklep', label: 'Sklep', icon: '🛒', badge: 'Wkrótce' },
    { href: '/opinie', label: 'Opinie', icon: '⭐' },
    { href: '/dojazd', label: 'Dojazd', icon: '🚗' },
    { href: '/kontakt', label: 'Kontakt', icon: '📞' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Zamknij menu po zmianie strony
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [router.pathname])

  // Blokuj scroll gdy menu otwarte
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])

  return (
    <header className={`${styles.header} ${scrolled ? styles.headerScrolled : ''}`}>
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
              📘 Facebook
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
          
          {/* Desktop nav */}
          <nav className={styles.desktopNav}>
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href} 
                className={`${styles.navLink} ${router.pathname === link.href ? styles.navLinkActive : ''}`}
              >
                {link.label}
                {link.badge && <span className={styles.navBadge}>{link.badge}</span>}
              </Link>
            ))}
          </nav>

          <div className={styles.headerActions}>
            <a href="tel:+48509724030" className={styles.phoneButton}>
              📞 Zadzwoń
            </a>
            
            <button 
              className={`${styles.mobileMenuBtn} ${mobileMenuOpen ? styles.mobileMenuBtnOpen : ''}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menu"
            >
              <span className={styles.hamburgerLine}></span>
              <span className={styles.hamburgerLine}></span>
              <span className={styles.hamburgerLine}></span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay - Kafelki */}
      <div className={`${styles.mobileOverlay} ${mobileMenuOpen ? styles.mobileOverlayOpen : ''}`}>
        <div className={styles.mobileMenuContent}>
          <div className={styles.mobileMenuHeader}>
            <span className={styles.mobileMenuLogo}>🌲 Szkółka Rydzyny</span>
            <button 
              className={styles.mobileCloseBtn}
              onClick={() => setMobileMenuOpen(false)}
            >
              ✕
            </button>
          </div>
          
          <nav className={styles.mobileNav}>
            {navLinks.map((link, index) => (
              <Link 
                key={link.href} 
                href={link.href} 
                className={`${styles.mobileNavTile} ${router.pathname === link.href ? styles.mobileNavTileActive : ''}`}
                style={{ animationDelay: `${index * 0.05}s` }}
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className={styles.tileIcon}>{link.icon}</span>
                <span className={styles.tileLabel}>{link.label}</span>
                {link.badge && <span className={styles.tileBadge}>{link.badge}</span>}
              </Link>
            ))}
          </nav>

          <div className={styles.mobileMenuFooter}>
            <a href="tel:+48509724030" className={styles.mobilePhoneBtn}>
              📞 509 724 030
            </a>
            <p className={styles.mobileAddress}>ul. Górna 8, 95-200 Rydzyny</p>
          </div>
        </div>
      </div>
    </header>
  )
}
