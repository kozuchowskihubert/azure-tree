import Link from 'next/link'
import Layout from '@/components/Layout'
import ImageSlider from '@/components/ImageSlider'
import styles from '@/styles/Home.module.css'

export default function Home() {
  const sliderImages = [
    {
      src: '/images/gallery/image.png',
      alt: 'Voucher podarunkowy - Szkółka Rydzyny',
      title: '🎁 Voucher Podarunkowy',
      subtitle: 'Idealny prezent dla miłośników ogrodów - dostępny w naszej szkółce!'
    },
    {
      src: '/images/gallery/475848071_661402346214157_3106701970656297283_n.jpg',
      alt: 'Szkółka Rydzyny',
      title: '🌲 Drzewa i Krzewy',
      subtitle: 'Najwyższa jakość roślin do Twojego ogrodu'
    },
    {
      src: '/images/gallery/596493401_25323224600639767_2865473862037379473_n.jpg',
      alt: 'Choinki świąteczne',
      title: '🎄 Choinki Świąteczne',
      subtitle: 'Piękne jodły kaukaskie i świerki - tradycja od lat!'
    },
    {
      src: '/images/gallery/498527797_9794114537310691_3816962558267444035_n.jpg',
      alt: 'Rośliny ozdobne',
      title: '🌿 Rośliny Ozdobne',
      subtitle: 'Bogaty wybór roślin do Twojego ogrodu'
    }
  ]

  const features = [
    {
      icon: '🌲',
      title: 'Drzewa Iglaste',
      text: 'Świerki, sosny, jodły i wiele innych gatunków iglastych najwyższej jakości.'
    },
    {
      icon: '🌳',
      title: 'Drzewa Liściaste',
      text: 'Szeroki wybór drzew liściastych - od klonów po dęby i buki.'
    },
    {
      icon: '🌿',
      title: 'Krzewy Ozdobne',
      text: 'Krzewy kwitnące, zimozielone i sezonowe do każdego ogrodu.'
    },
    {
      icon: '🌹',
      title: 'Róże',
      text: 'Róże pnące, parkowe i rabatowe w wielu odmianach kolorystycznych.'
    },
    {
      icon: '🍎',
      title: 'Drzewa Owocowe',
      text: 'Jabłonie, grusze, śliwy i inne drzewa owocowe sprawdzonych odmian.'
    },
    {
      icon: '🌱',
      title: 'Sadzonki',
      text: 'Młode sadzonki gotowe do sadzenia w Twoim ogrodzie.'
    }
  ]

  const products = [
    { icon: '🌲', title: 'Świerk pospolity', desc: 'Idealne na żywopłoty' },
    { icon: '🌳', title: 'Klon palmowy', desc: 'Ozdoba każdego ogrodu' },
    { icon: '🌿', title: 'Bukszpan', desc: 'Klasyka wśród krzewów' },
    { icon: '🌺', title: 'Hortensja', desc: 'Piękne kwiaty całe lato' }
  ]

  return (
    <Layout>
      {/* Hero Section with Slider */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Szkółka Drzew i Krzewów Rydzyny
          </h1>
          <p className={styles.heroSubtitle}>
            Profesjonalna szkółka oferująca najwyższej jakości drzewa i krzewy ozdobne. 
            Od lat dbamy o to, by Twój ogród był wyjątkowy.
          </p>
          <div className={styles.heroButtons}>
            <Link href="/oferta" className={styles.btnPrimary}>
              Zobacz ofertę 🌿
            </Link>
            <Link href="/kontakt" className={styles.btnSecondary}>
              Zadzwoń: 509 724 030 📞
            </Link>
          </div>
        </div>
      </section>

      {/* Image Slider */}
      <section className={styles.sliderSection}>
        <div className={styles.container}>
          <ImageSlider images={sliderImages} />
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Co oferujemy?</h2>
            <p className={styles.sectionSubtitle}>
              Bogaty wybór roślin dla profesjonalistów i hobbystów
            </p>
          </div>
          <div className={styles.features}>
            {features.map((feature, index) => (
              <div key={index} className={styles.featureCard}>
                <div className={styles.featureIcon}>{feature.icon}</div>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureText}>{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Popularne produkty</h2>
            <p className={styles.sectionSubtitle}>
              Najchętniej wybierane rośliny przez naszych klientów
            </p>
          </div>
          <div className={styles.products}>
            {products.map((product, index) => (
              <div key={index} className={styles.productCard}>
                <div className={styles.productImage}>{product.icon}</div>
                <div className={styles.productContent}>
                  <h3 className={styles.productTitle}>{product.title}</h3>
                  <p className={styles.productText}>{product.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.aboutGrid}>
            <div className={styles.aboutImage}>🌲🌳</div>
            <div className={styles.aboutContent}>
              <h2>O naszej szkółce</h2>
              <p>
                Szkółka Drzew i Krzewów Rydzyny to rodzinne przedsiębiorstwo z wieloletnim 
                doświadczeniem w produkcji i sprzedaży roślin ozdobnych.
              </p>
              <p>
                Naszą misją jest dostarczanie klientom najwyższej jakości drzew i krzewów, 
                które będą cieszyć oko przez wiele lat.
              </p>
              <ul className={styles.aboutList}>
                <li>Wieloletnie doświadczenie</li>
                <li>Profesjonalna obsługa</li>
                <li>Szeroki wybór roślin</li>
                <li>Konkurencyjne ceny</li>
                <li>Fachowe doradztwo</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <h2 className={styles.ctaTitle}>Zapraszamy do współpracy!</h2>
        <p className={styles.ctaText}>
          Skontaktuj się z nami i sprawdź naszą pełną ofertę. 
          Chętnie pomożemy Ci wybrać idealne rośliny do Twojego ogrodu.
        </p>
        <Link href="/kontakt" className={styles.btnPrimary}>
          Skontaktuj się z nami 📧
        </Link>
      </section>
    </Layout>
  )
}
