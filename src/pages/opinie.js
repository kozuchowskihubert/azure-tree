import Layout from '@/components/Layout'
import styles from '@/styles/Opinie.module.css'

export default function Opinie() {
  const reviews = [
    {
      id: 1,
      author: 'Marcin Olejnik',
      rating: 5,
      date: '2 tygodnie temu',
      isNew: true,
      text: 'Super miejsce super obsługa, bardzo mili, przyjaźni ludzie z pasją życiu którą są rośliny, polecam z całego serca wszystkim mieszkańcom :)'
    },
    {
      id: 2,
      author: 'Marek Kozim',
      rating: 5,
      date: '2 tygodnie temu',
      isNew: true,
      text: 'Super wybór choinek. Przemiła obsługa. Polecam'
    },
    {
      id: 3,
      author: 'Kamil Hamrin',
      rating: 5,
      date: '4 miesiące temu',
      text: 'Wszystkie rośliny na zdjęciu od Was :) bardzo polecamy!!'
    },
    {
      id: 4,
      author: 'Sebastian Bednarczyk',
      rating: 5,
      date: 'rok temu',
      text: 'Super miejsce. Wszystko można dostać od ręki po kwiaty, krzewy i drzewka, a także piękne trawy. Obsługa miła i pomocna, myśleliśmy że organizacja ogrodu będzie dla nas udręką, ale dzięki licznym poradom i podpowiedziom poszło nam całkiem nieźle 😉'
    },
    {
      id: 5,
      author: 'Izabela Chodakowska',
      rating: 5,
      date: 'rok temu',
      text: 'Kolejny rok zakupu choinki na Święta. Kupiona jodła 200 cm 150 zł. Piękna'
    },
    {
      id: 6,
      author: 'A. L. (ludwiG)',
      rating: 5,
      date: 'rok temu',
      text: 'Jak co roku piękna, żywa jodła. W moim przypadku wysokość 260cm - 200zł. Polecam :)'
    },
    {
      id: 7,
      author: 'Milena Barys',
      rating: 5,
      date: '2 lata temu',
      text: 'Serdecznie polecam. Zaopatrujemy się tutaj w żywe choinki od 10 lat. Choinki są piękne i stoją w mieszkaniu naprawdę długo. Można też kupić stroiki z żywych gałązek gwiazdy betlejemskie, a poza sezonem "świątecznym" drzewka do ogrodu.'
    },
    {
      id: 8,
      author: 'zbi lak',
      rating: 5,
      date: 'rok temu',
      text: 'Luty a tu już pierwszy zakup tui, na szczęście już są. Miła obsługa, duży wybór, ceny przystępne.'
    },
    {
      id: 9,
      author: 'Dariusz Jasiński',
      rating: 5,
      date: '4 lata temu',
      text: 'Świetne miejsce na zakup choinki. Szalenie miła obsługa. Wyjechaliśmy z drzewkiem bardzo zadowoleni (po przystrojeniu utwierdziliśmy się, że to był idealny wybór).'
    },
    {
      id: 10,
      author: 'Ilona Patoleta',
      rating: 4,
      date: '4 lata temu',
      text: 'Dużo "świeżych" krzewów. Bardzo miła i cierpliwa Pani która obsługuje klientów. Ogólnie spoko.'
    },
    {
      id: 11,
      author: 'Kasia Kati',
      rating: 5,
      date: '4 lata temu',
      text: 'Bardzo ładne i zdrowe rośliny. Duży wybór i atrakcyjne ceny. Bardzo miła obsługa i profesjonalne doradztwo. Jesteśmy zadowoleni, chętnie będziemy wracać po kolejne zakupy i polecać to miejsce.'
    },
    {
      id: 12,
      author: 'Krzysztof Mikosik',
      rating: 5,
      date: '5 lat temu',
      text: 'Dobre ceny i miła obsługa. Zakupione tuje pięknie rosną ;) Polecam'
    },
    {
      id: 13,
      author: 'Adam Malec',
      rating: 5,
      date: '3 lata temu',
      text: 'Bardzo duży wybór towaru. Szkółkę prowadzi młode małżeństwo, bardzo mili ludzie, fachowa pomoc w zakupie, doradztwo. Przemiła Pani właścicielka. Gorąco polecam.'
    },
    {
      id: 14,
      author: 'Joanna G',
      rating: 1,
      date: 'rok temu',
      text: 'Gwiazdy betlejemskie w zeszłym roku były przelane i po prostu całe opadły po 3 dniach.'
    },
    {
      id: 15,
      author: 'Turar',
      rating: 1,
      date: 'rok temu',
      text: 'Niestety nie podzielam pozytywnych opinii. Rośliny do ogrodu kupione za kilka tys złotych. Jakość roślin pozostawia wiele do życzenia.'
    },
    {
      id: 16,
      author: 'Karolina Zielińska',
      rating: 1,
      date: '2 lata temu',
      text: 'Kupiliśmy choinkę ze szkółki, bo bardzo zależało Nam żeby ją posadzić w ogrodzie. Nie była tania w porównaniu do marketów.'
    },
    {
      id: 17,
      author: 'Piotr B',
      rating: 2,
      date: '4 lata temu',
      text: 'Sam nie wiem co o tym sądzić... Kupuję tam choinki od wielu, wielu lat - wczoraj kupiłem jodłę kaukaską, która po ustawieniu w pokoju okazała się być...'
    }
  ]

  const avgRating = 4.4
  const totalReviews = 185

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <span key={i} className={i < rating ? styles.starFilled : styles.starEmpty}>
        ★
      </span>
    ))
  }

  const positiveReviews = reviews.filter(r => r.rating >= 4)
  const negativeReviews = reviews.filter(r => r.rating < 4)

  return (
    <Layout 
      title="Opinie klientów" 
      description="Opinie i recenzje klientów Szkółki Drzew i Krzewów Rydzyny"
    >
      <section className={styles.page}>
        <div className={styles.container}>
          <div className={styles.pageHeader}>
            <h1 className={styles.pageTitle}>💬 Opinie naszych klientów</h1>
            <p className={styles.pageSubtitle}>
              Zobacz, co mówią o nas nasi klienci
            </p>
          </div>

          {/* Podsumowanie */}
          <div className={styles.summary}>
            <div className={styles.summaryCard}>
              <div className={styles.summaryRating}>
                <span className={styles.ratingNumber}>{avgRating}</span>
                <span className={styles.ratingMax}>/5</span>
              </div>
              <div className={styles.summaryStars}>
                {renderStars(Math.round(avgRating))}
              </div>
              <p className={styles.summaryCount}>{totalReviews} opinii w Google</p>
              <a 
                href="https://www.google.com/search?q=Szk%C3%B3%C5%82ka+drzew+i+krzew%C3%B3w+Rydzyny+Opinie" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.googleLink}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Zobacz wszystkie opinie w Google
              </a>
            </div>

            <div className={styles.summaryStats}>
              <div className={styles.statItem}>
                <span className={styles.statIcon}>⭐</span>
                <span className={styles.statValue}>85%</span>
                <span className={styles.statLabel}>pozytywnych opinii</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statIcon}>🌲</span>
                <span className={styles.statValue}>10+</span>
                <span className={styles.statLabel}>lat doświadczenia</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statIcon}>👥</span>
                <span className={styles.statValue}>1000+</span>
                <span className={styles.statLabel}>zadowolonych klientów</span>
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <div className={styles.disclaimer}>
            <p>ℹ️ Opinie pochodzą z Google i nie są przez nas weryfikowane. Prezentujemy zarówno pozytywne, jak i negatywne recenzje, aby zapewnić pełny obraz naszej działalności.</p>
          </div>

          {/* Pozytywne opinie */}
          <div className={styles.reviewsSection}>
            <h2 className={styles.sectionTitle}>🌟 Pozytywne opinie</h2>
            <div className={styles.reviewsGrid}>
              {positiveReviews.map(review => (
                <div key={review.id} className={styles.reviewCard}>
                  <div className={styles.reviewHeader}>
                    <div className={styles.reviewAuthor}>
                      <div className={styles.avatar}>
                        {review.author.charAt(0).toUpperCase()}
                      </div>
                      <div>
                        <h4 className={styles.authorName}>{review.author}</h4>
                        <span className={styles.reviewDate}>{review.date}</span>
                      </div>
                    </div>
                    {review.isNew && <span className={styles.newBadge}>NOWA</span>}
                  </div>
                  <div className={styles.reviewStars}>
                    {renderStars(review.rating)}
                  </div>
                  <p className={styles.reviewText}>{review.text}</p>
                  <div className={styles.reviewSource}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="#4285F4">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                    <span>Opinia z Google</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Negatywne opinie - transparentność */}
          <div className={styles.reviewsSection}>
            <h2 className={styles.sectionTitle}>📝 Inne opinie</h2>
            <p className={styles.sectionSubtitle}>
              Wierzymy w transparentność - prezentujemy również opinie krytyczne.
            </p>
            <div className={styles.reviewsGrid}>
              {negativeReviews.map(review => (
                <div key={review.id} className={`${styles.reviewCard} ${styles.reviewNegative}`}>
                  <div className={styles.reviewHeader}>
                    <div className={styles.reviewAuthor}>
                      <div className={styles.avatar}>
                        {review.author.charAt(0).toUpperCase()}
                      </div>
                      <div>
                        <h4 className={styles.authorName}>{review.author}</h4>
                        <span className={styles.reviewDate}>{review.date}</span>
                      </div>
                    </div>
                  </div>
                  <div className={styles.reviewStars}>
                    {renderStars(review.rating)}
                  </div>
                  <p className={styles.reviewText}>{review.text}</p>
                  <div className={styles.reviewSource}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="#4285F4">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                    <span>Opinia z Google</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className={styles.cta}>
            <h2>Byłeś u nas? Podziel się opinią!</h2>
            <p>Twoja opinia jest dla nas bardzo ważna i pomaga nam się rozwijać.</p>
            <a 
              href="https://www.google.com/search?q=Szk%C3%B3%C5%82ka+drzew+i+krzew%C3%B3w+Rydzyny" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.ctaButton}
            >
              ✍️ Dodaj opinię w Google
            </a>
          </div>
        </div>
      </section>
    </Layout>
  )
}
