import { useState, useEffect, useRef, useMemo } from 'react'
import Link from 'next/link'
import styles from '@/styles/HeroSlider.module.css'

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const videoRef = useRef(null)

  // Mix of videos and images for the hero slider - przeplatane dla lepszego efektu
  const slides = useMemo(() => [
    { type: 'video', src: '/videos/Download.mp4', title: 'Szkółka Drzew i Krzewów Rydzyny', subtitle: 'Twój ogród z dostawą pod drzwi 🚚' },
    { type: 'image', src: '/images/0F2B4C33-4544-4298-939C-AD2A403889FC_1_102_o.jpeg', title: 'Tuje Smaragd', subtitle: 'Idealne na żywopłoty i ogrodzenia' },
    { type: 'video', src: '/videos/grok-2-short.mp4', title: 'Najwyższa jakość roślin', subtitle: 'Drzewa, krzewy i rośliny ozdobne dla Twojego ogrodu' },
    { type: 'image', src: '/images/1A0C7254-47A5-488D-984A-29F8FD326FF3_1_102_o.jpeg', title: 'Drzewa liściaste', subtitle: 'Klony, dęby, buki i wiele innych' },
    { type: 'video', src: '/videos/Download-2.mp4', title: 'Dowozimy rośliny', subtitle: 'Twój ogród z dostawą pod drzwi 🚚' },
    { type: 'image', src: '/images/3F31810A-B923-4364-AC26-517F01149789_1_102_o.jpeg', title: 'Krzewy ozdobne', subtitle: 'Hortensje, róże, azalie i rododendrony' },
    { type: 'video', src: '/videos/grok-3-short.mp4', title: 'Tuje żywopłotowe', subtitle: 'Naturalne ogrodzenia dla Twojego ogrodu' },
    { type: 'image', src: '/images/8A9FBFB6-79F3-4B1D-AEBB-AF830E3B41D7_1_102_o.jpeg', title: 'Iglaki premium', subtitle: 'Świerki, jodły i sosny najwyższej jakości' },
    { type: 'video', src: '/videos/Download-3.mp4', title: 'Profesjonalna obsługa', subtitle: 'Doradztwo i pomoc w wyborze roślin' },
  ], [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000) // Change slide every 6 seconds

    return () => clearInterval(interval)
  }, [slides.length])

  useEffect(() => {
    if (videoRef.current && slides[currentSlide].type === 'video') {
      videoRef.current.play().catch(() => {})
    }
  }, [currentSlide, slides])

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section className={styles.heroSlider}>
      {/* Background slides */}
      <div className={styles.slidesContainer}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`${styles.slide} ${index === currentSlide ? styles.active : ''}`}
          >
            {slide.type === 'video' ? (
              <video
                ref={index === currentSlide ? videoRef : null}
                className={styles.media}
                src={slide.src}
                muted
                loop
                playsInline
                autoPlay={index === currentSlide}
              />
            ) : (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img
                className={styles.media}
                src={slide.src}
                alt={slide.title}
              />
            )}
            <div className={styles.overlay} />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className={styles.content}>
        <div className={styles.textContent}>
          <span className={styles.badge}>🌲 Szkółka Rydzyny</span>
          <h1 className={styles.title}>{slides[currentSlide].title}</h1>
          <p className={styles.subtitle}>{slides[currentSlide].subtitle}</p>
          <div className={styles.buttons}>
            <Link href="/oferta" className={styles.btnPrimary}>
              Zobacz ofertę 🌿
            </Link>
            <Link href="/kontakt" className={styles.btnSecondary}>
              Skontaktuj się 📞
            </Link>
          </div>
          <div className={styles.quickInfo}>
            <div className={styles.infoItem}>
              <span className={styles.infoIcon}>📍</span>
              <span>ul. Górna 8, Rydzyny</span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoIcon}>📞</span>
              <a href="tel:+48509724030">509 724 030</a>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation arrows */}
      <button className={styles.navPrev} onClick={prevSlide} aria-label="Poprzedni slajd">
        ‹
      </button>
      <button className={styles.navNext} onClick={nextSlide} aria-label="Następny slajd">
        ›
      </button>

      {/* Dots navigation */}
      <div className={styles.dots}>
        {slides.map((slide, index) => (
          <button
            key={index}
            className={`${styles.dot} ${index === currentSlide ? styles.dotActive : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Przejdź do slajdu ${index + 1}`}
          >
            {slide.type === 'video' ? '▶' : '●'}
          </button>
        ))}
      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollIndicator}>
        <span>Przewiń w dół</span>
        <div className={styles.scrollArrow}>↓</div>
      </div>
    </section>
  )
}
