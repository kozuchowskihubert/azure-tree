import Link from 'next/link'
import Layout from '@/components/Layout'
import styles from '@/styles/Sklep.module.css'

export default function Sklep() {
  return (
    <Layout 
      title="Sklep online" 
      description="Sklep internetowy Szkółki Drzew i Krzewów Rydzyny - wkrótce dostępny"
    >
      <section className={styles.page}>
        <div className={styles.container}>
          <div className={styles.comingSoon}>
            <div className={styles.icon}>🛒</div>
            <h1 className={styles.title}>Sklep Online</h1>
            <div className={styles.badge}>Wkrótce!</div>
            <p className={styles.description}>
              Pracujemy nad sklepem internetowym, gdzie będziesz mógł wygodnie 
              przeglądać i zamawiać nasze rośliny online.
            </p>
            
            <div className={styles.features}>
              <div className={styles.featureItem}>
                <span className={styles.featureIcon}>📱</span>
                <span>Wygodne zakupy 24/7</span>
              </div>
              <div className={styles.featureItem}>
                <span className={styles.featureIcon}>🚚</span>
                <span>Dostawa pod dom</span>
              </div>
              <div className={styles.featureItem}>
                <span className={styles.featureIcon}>💳</span>
                <span>Bezpieczne płatności</span>
              </div>
              <div className={styles.featureItem}>
                <span className={styles.featureIcon}>📸</span>
                <span>Zdjęcia rzeczywiste</span>
              </div>
            </div>

            <div className={styles.alternative}>
              <h2>A tymczasem...</h2>
              <p>Możesz już teraz zarezerwować rośliny lub odwiedzić nas osobiście!</p>
              <div className={styles.buttons}>
                <Link href="/rezerwacja" className={styles.btnPrimary}>
                  📋 Zarezerwuj online
                </Link>
                <Link href="/kontakt" className={styles.btnSecondary}>
                  📞 Zadzwoń: 509 724 030
                </Link>
              </div>
            </div>

            <div className={styles.notify}>
              <h3>🔔 Powiadom mnie o otwarciu sklepu</h3>
              <form className={styles.notifyForm} onSubmit={(e) => {
                e.preventDefault()
                alert('Dziękujemy! Powiadomimy Cię o otwarciu sklepu.')
              }}>
                <input 
                  type="email" 
                  placeholder="Twój adres email" 
                  required 
                  className={styles.emailInput}
                />
                <button type="submit" className={styles.notifyBtn}>
                  Zapisz mnie
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
