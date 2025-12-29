import { useState, useEffect } from 'react'
import styles from '@/styles/ImageSlider.module.css'

export default function ImageSlider({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Domyślne zdjęcia jeśli nie przekazano
  const defaultImages = [
    {
      src: '/images/voucher.png',
      alt: 'Voucher podarunkowy - Szkółka Rydzyny',
      title: 'Voucher Podarunkowy',
      subtitle: 'Idealny prezent dla miłośników ogrodów'
    },
    {
      src: '/images/slide1.jpg',
      alt: 'Szkółka Rydzyny - drzewa iglaste',
      title: 'Drzewa Iglaste',
      subtitle: 'Świerki, tuje, sosny najwyższej jakości'
    },
    {
      src: '/images/slide2.jpg',
      alt: 'Szkółka Rydzyny - krzewy ozdobne',
      title: 'Krzewy Ozdobne',
      subtitle: 'Bogaty wybór krzewów do Twojego ogrodu'
    },
    {
      src: '/images/slide3.jpg',
      alt: 'Szkółka Rydzyny - choinki',
      title: 'Choinki Świąteczne',
      subtitle: 'Piękne jodły i świerki na święta'
    }
  ]

  const slides = images || defaultImages

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, slides.length])

  const goToSlide = (index) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  return (
    <div className={styles.slider}>
      <div className={styles.slidesContainer}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`${styles.slide} ${index === currentIndex ? styles.active : ''}`}
            style={{
              backgroundImage: slide.src ? `url(${slide.src})` : undefined,
              backgroundColor: !slide.src ? 'var(--color-primary)' : undefined
            }}
          >
            <div className={styles.slideOverlay} />
            <div className={styles.slideContent}>
              {slide.title && <h2 className={styles.slideTitle}>{slide.title}</h2>}
              {slide.subtitle && <p className={styles.slideSubtitle}>{slide.subtitle}</p>}
            </div>
          </div>
        ))}
      </div>

      {/* Arrows */}
      <button 
        className={`${styles.arrow} ${styles.arrowLeft}`} 
        onClick={goToPrevious}
        aria-label="Poprzedni slajd"
      >
        ❮
      </button>
      <button 
        className={`${styles.arrow} ${styles.arrowRight}`} 
        onClick={goToNext}
        aria-label="Następny slajd"
      >
        ❯
      </button>

      {/* Dots */}
      <div className={styles.dots}>
        {slides.map((_, index) => (
          <button
            key={index}
            className={`${styles.dot} ${index === currentIndex ? styles.dotActive : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Przejdź do slajdu ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
