import { useState, useEffect, useRef, useMemo } from 'react'
import Link from 'next/link'
import styles from '@/styles/HeroSlider.module.css'

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const videoRef = useRef(null)

  // Mix of videos and images for the hero slider
  const slides = useMemo(() => [
    { type: 'video', src: '/videos/grok-video-0c7a3608-3be8-49d9-9afb-2ab6876505c7.mp4', title: 'Szkółka Drzew i Krzewów Rydzyny', subtitle: 'Profesjonalna szkółka z wieloletnim doświadczeniem' },
    { type: 'video', src: '/videos/grok-video-0c7a3608-3be8-49d9-9afb-2ab6876505c7-2.mp4', title: 'Najwyższa jakość roślin', subtitle: 'Drzewa, krzewy i rośliny ozdobne dla Twojego ogrodu' },
    { type: 'video', src: '/videos/grok-video-0c7a3608-3be8-49d9-9afb-2ab6876505c7-3.mp4', title: 'Tuje żywopłotowe Smaragd', subtitle: 'Idealne na żywopłoty i ogrodzenia naturalne' },
    { type: 'image', src: '/images/gallery/475848071_661402346214157_3106701970656297283_n.jpg', title: 'Choinki świąteczne', subtitle: 'Piękne jodły kaukaskie i świerki - tradycja od lat!' },
    { type: 'video', src: '/videos/Download.mp4', title: 'Krzewy ozdobne', subtitle: 'Szeroki wybór krzewów do każdego ogrodu' },
    { type: 'image', src: '/images/gallery/596493401_25323224600639767_2865473862037379473_n.jpg', title: 'Drzewa alejowe', subtitle: 'Profesjonalne nasadzenia dla miast i osiedli' },
    { type: 'video', src: '/videos/Download-2.mp4', title: 'Rośliny ozdobne', subtitle: 'Bogaty wybór roślin dla Twojego ogrodu marzeń' },
    { type: 'image', src: '/images/gallery/498527797_9794114537310691_3816962558267444035_n.jpg', title: 'Twój ogród z dostawą pod drzwi', subtitle: 'Dowozimy rośliny na terenie całej Polski' },
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
