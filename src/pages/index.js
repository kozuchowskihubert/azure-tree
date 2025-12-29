import Link from 'next/link'
import Layout from '@/components/Layout'
import HeroSlider from '@/components/HeroSlider'
import styles from '@/styles/Home.module.css'

export default function Home() {
  // Gallery images for the photo grid section
  const galleryImages = [
    { src: '/images/gallery/475848071_661402346214157_3106701970656297283_n.jpg', alt: 'Szkółka Rydzyny' },
    { src: '/images/gallery/498527797_9794114537310691_3816962558267444035_n.jpg', alt: 'Rośliny ozdobne' },
    { src: '/images/gallery/596493401_25323224600639767_2865473862037379473_n.jpg', alt: 'Choinki' },
    { src: '/images/gallery/596493401_25323224600639767_2865473862037379473_n-2.jpg', alt: 'Choinki świąteczne' },
    { src: '/images/gallery/596808713_25323224157306478_5363416883650563080_n.jpg', alt: 'Tuje' },
    { src: '/images/gallery/596809175_25323224117306482_8963869732943613624_n.jpg', alt: 'Krzewy' },
    { src: '/images/gallery/597087615_25323224527306441_6840263767502556965_n.jpg', alt: 'Rośliny' },
    { src: '/images/gallery/597381623_25323224257306468_465821106525587879_n.jpg', alt: 'Drzewa' },
    { src: '/images/gallery/597575318_25323224130639814_4815702639010843478_n.jpg', alt: 'Krzewy ozdobne' },
    { src: '/images/gallery/599535217_25323224387306455_4450463131101867487_n.jpg', alt: 'Nasza oferta' },
    { src: '/images/gallery/image.png', alt: 'Voucher podarunkowy' },
    { src: '/images/samochod-dowoz.png', alt: 'Samochód dostawczy' },
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
      {/* Full-screen Hero Video/Image Slider */}
      <HeroSlider />

      {/* Photo Gallery Section */}
      <section className={styles.gallerySection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>📸 Nasza szkółka w obiektywie</h2>
            <p className={styles.sectionSubtitle}>
              Zobacz nasze drzewa, krzewy i realizacje ogrodowe
            </p>
          </div>
          <div className={styles.photoGrid}>
            {galleryImages.map((img, index) => (
              <div key={index} className={styles.photoItem}>
                <img src={img.src} alt={img.alt} loading="lazy" />
                <div className={styles.photoOverlay}>
                  <span>{img.alt}</span>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.galleryCta}>
            <Link href="/galeria" className={styles.btnOutline}>
              Zobacz pełną galerię 🖼️
            </Link>
          </div>
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

      {/* Delivery Section */}
      <section className={styles.deliverySection}>
        <div className={styles.container}>
          <div className={styles.deliveryGrid}>
            <div className={styles.deliveryContent}>
              <h2 className={styles.deliveryTitle}>🚚 Dowozimy rośliny!</h2>
              <p className={styles.deliveryText}>
                Oferujemy profesjonalny transport roślin bezpośrednio pod Twój dom. 
                Nasze specjalistyczne pojazdy gwarantują bezpieczny przewóz nawet największych drzew.
              </p>
              <ul className={styles.deliveryList}>
                <li>✅ Dostawa na terenie całej Polski</li>
                <li>✅ Profesjonalny transport z zabezpieczeniem</li>
                <li>✅ Możliwość rozładunku</li>
                <li>✅ Elastyczne terminy dostawy</li>
              </ul>
              <div className={styles.deliveryContact}>
                <p><strong>Zadzwoń i zamów dostawę:</strong></p>
                <a href="tel:+48509724030" className={styles.deliveryPhone}>📞 509 724 030</a>
              </div>
            </div>
            <div className={styles.deliveryImage}>
              <img 
                src="/images/samochod-dowoz.png" 
                alt="Samochód dostawczy Szkółki Rydzyny" 
                className={styles.deliveryImg}
              />
              <div className={styles.deliveryBadge}>
                <span>DOWÓZ</span>
                <span>na terenie całej Polski</span>
              </div>
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
