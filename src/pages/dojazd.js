import Layout from '@/components/Layout'
import styles from '@/styles/Pages.module.css'

export default function Dojazd() {
  const directions = [
    {
      from: 'Leszno',
      distance: '~10 km',
      time: '~15 min',
      route: 'Jedź drogą krajową nr 5 w kierunku Wrocławia. Po około 8 km skręć zgodnie z oznakowaniem na Rydzyna. Szkółka znajduje się przy głównej drodze.'
    },
    {
      from: 'Poznań',
      distance: '~75 km',
      time: '~1 godz.',
      route: 'Jedź autostradą A2 w kierunku Wrocławia, zjazd na Kościan. Następnie drogą nr 5 przez Leszno do Rydzyny.'
    },
    {
      from: 'Wrocław',
      distance: '~100 km',
      time: '~1.5 godz.',
      route: 'Jedź drogą nr 5 przez Rawicz. Za Lesznem kieruj się na Rydzyna.'
    },
    {
      from: 'Kalisz',
      distance: '~60 km',
      time: '~50 min',
      route: 'Jedź drogą nr 25 do Jarocina, następnie drogą nr 12 do Leszna i dalej do Rydzyny.'
    }
  ]

  return (
    <Layout 
      title="Dojazd" 
      description="Jak dojechać do Szkółki Drzew i Krzewów Rydzyny - mapa i instrukcje dojazdu"
    >
      <section className={styles.page}>
        <div className={styles.container}>
          <div className={styles.pageHeader}>
            <h1 className={styles.pageTitle}>🗺️ Jak do nas dojechać?</h1>
            <p className={styles.pageSubtitle}>
              Znajdziesz nas w malowniczej miejscowości Rydzyna w województwie wielkopolskim
            </p>
          </div>

          {/* Mapa */}
          <div className={styles.mapSection}>
            <div className={styles.mapContainer}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2438.5!2d16.6556!3d51.7619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470536d0a5c8b8a9%3A0x4c8b9b7a1c0a1b2c!2sul.%20G%C3%B3rna%208%2C%2095-200%20Rydzyny!5e0!3m2!1spl!2spl!4v1234567890"
                width="100%"
                height="450"
                style={{ border: 0, borderRadius: 'var(--border-radius-lg)' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa dojazdu do Szkółki Rydzyny"
              />
            </div>
            <div className={styles.mapInfo}>
              <div className={styles.addressCard}>
                <h3>📍 Nasz adres</h3>
                <p className={styles.addressText}>
                  <strong>Szkółka Drzew i Krzewów Rydzyny</strong><br />
                  ul. Górna 8<br />
                  95-200 Rydzyny<br />
                  woj. łódzkie
                </p>
                <a 
                  href="https://www.google.com/maps/search/ul.+Górna+8+95-200+Rydzyny" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.mapButton}
                >
                  🧭 Otwórz w Google Maps
                </a>
              </div>
            </div>
          </div>

          {/* Instrukcje dojazdu */}
          <div className={styles.directionsSection}>
            <h2 className={styles.sectionTitle}>🚗 Instrukcje dojazdu</h2>
            <div className={styles.directionsGrid}>
              {directions.map((dir, index) => (
                <div key={index} className={styles.directionCard}>
                  <div className={styles.directionHeader}>
                    <h3>Z miasta: {dir.from}</h3>
                    <div className={styles.directionMeta}>
                      <span className={styles.badge}>📏 {dir.distance}</span>
                      <span className={styles.badge}>⏱️ {dir.time}</span>
                    </div>
                  </div>
                  <p className={styles.directionRoute}>{dir.route}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Wskazówki */}
          <div className={styles.tipsSection}>
            <h2 className={styles.sectionTitle}>💡 Przydatne informacje</h2>
            <div className={styles.tipsGrid}>
              <div className={styles.tipCard}>
                <span className={styles.tipIcon}>🅿️</span>
                <h4>Parking</h4>
                <p>Bezpłatny parking dla klientów bezpośrednio przy szkółce. Możliwość załadunku roślin.</p>
              </div>
              <div className={styles.tipCard}>
                <span className={styles.tipIcon}>📞</span>
                <h4>Kontakt przed wizytą</h4>
                <p>Zalecamy kontakt telefoniczny przed przyjazdem, aby upewnić się o dostępności wybranych roślin.</p>
              </div>
              <div className={styles.tipCard}>
                <span className={styles.tipIcon}>🕐</span>
                <h4>Godziny otwarcia</h4>
                <p>Pon-Pt: 8:00-18:00<br />Sob: 8:00-14:00<br />Nd: Zamknięte</p>
              </div>
              <div className={styles.tipCard}>
                <span className={styles.tipIcon}>🚚</span>
                <h4>Transport</h4>
                <p>Oferujemy możliwość transportu większych zamówień. Szczegóły ustalamy indywidualnie.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
