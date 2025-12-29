import Link from 'next/link'
import Layout from '@/components/Layout'
import HeroSlider from '@/components/HeroSlider'
import styles from '@/styles/Home.module.css'

export default function Home() {
  // Gallery images for the photo grid section - wszystkie dostępne zdjęcia
  const galleryImages = [
    { src: '/images/gallery/475848071_661402346214157_3106701970656297283_n.jpg', alt: 'Szkółka Rydzyny' },
    { src: '/images/0F2B4C33-4544-4298-939C-AD2A403889FC_1_102_o.jpeg', alt: 'Tuje Smaragd' },
    { src: '/images/1A0C7254-47A5-488D-984A-29F8FD326FF3_1_102_o.jpeg', alt: 'Drzewa liściaste' },
    { src: '/images/gallery/596493401_25323224600639767_2865473862037379473_n.jpg', alt: 'Choinki świąteczne' },
    { src: '/images/1E4DBE44-EEA2-4154-BA87-54740D7DCA62_1_102_o.jpeg', alt: 'Krzewy ozdobne' },
    { src: '/images/gallery/596808713_25323224157306478_5363416883650563080_n.jpg', alt: 'Tuje' },
    { src: '/images/355444E5-F901-4D11-8B53-BEC237727810_1_102_o.jpeg', alt: 'Rośliny iglaste' },
    { src: '/images/gallery/596809175_25323224117306482_8963869732943613624_n.jpg', alt: 'Krzewy' },
    { src: '/images/36180E18-828C-4538-AA35-E87E2A666467_1_102_o.jpeg', alt: 'Nasza szkółka' },
    { src: '/images/gallery/597087615_25323224527306441_6840263767502556965_n.jpg', alt: 'Rośliny' },
    { src: '/images/3F31810A-B923-4364-AC26-517F01149789_1_102_o.jpeg', alt: 'Krzewy kwitnące' },
    { src: '/images/gallery/597381623_25323224257306468_465821106525587879_n.jpg', alt: 'Drzewa' },
    { src: '/images/4C6D3C79-7F9C-4D1F-8880-51F90122C6FE_1_102_o.jpeg', alt: 'Rośliny ozdobne' },
    { src: '/images/gallery/597575318_25323224130639814_4815702639010843478_n.jpg', alt: 'Krzewy ozdobne' },
    { src: '/images/74F80879-4DE8-42D2-BC69-E55E219F879D_1_102_o.jpeg', alt: 'Drzewka' },
    { src: '/images/gallery/599535217_25323224387306455_4450463131101867487_n.jpg', alt: 'Nasza oferta' },
    { src: '/images/7709BE4F-1237-476C-B3B6-2AA14A01F264_1_102_o.jpeg', alt: 'Sadzonki' },
    { src: '/images/gallery/498527797_9794114537310691_3816962558267444035_n.jpg', alt: 'Transport roślin' },
    { src: '/images/8089AD7F-29B2-4CD2-B11B-0EFCEFE3604E_1_102_o.jpeg', alt: 'Drzewa iglaste' },
    { src: '/images/8886E289-0C2F-4B1A-A597-23596822049C_1_102_o.jpeg', alt: 'Krzewy liściaste' },
    { src: '/images/89295277-22DB-481A-8227-B9DB5D6492BF_1_102_o.jpeg', alt: 'Rośliny do ogrodu' },
    { src: '/images/8A9FBFB6-79F3-4B1D-AEBB-AF830E3B41D7_1_102_o.jpeg', alt: 'Tuje na żywopłot' },
    { src: '/images/8EAB3E97-CB62-471D-AAA8-C1F74ADC849A_1_102_o.jpeg', alt: 'Szkółka' },
    { src: '/images/samochod-dowoz.png', alt: 'Dostawa roślin' },
  ]

  const features = [
    {
      image: '/images/355444E5-F901-4D11-8B53-BEC237727810_1_102_o.jpeg',
      title: 'Drzewa Iglaste',
      text: 'Świerki, sosny, jodły i wiele innych gatunków iglastych najwyższej jakości.'
    },
    {
      image: '/images/1A0C7254-47A5-488D-984A-29F8FD326FF3_1_102_o.jpeg',
      title: 'Drzewa Liściaste',
      text: 'Szeroki wybór drzew liściastych - od klonów po dęby i buki.'
    },
    {
      image: '/images/3F31810A-B923-4364-AC26-517F01149789_1_102_o.jpeg',
      title: 'Krzewy Ozdobne',
      text: 'Krzewy kwitnące, zimozielone i sezonowe do każdego ogrodu.'
    },
    {
      image: '/images/B957B91B-358A-43A8-B9EC-EE3931FFAE4A_1_102_o.jpeg',
      title: 'Róże i kwiaty',
      text: 'Róże pnące, parkowe i rabatowe w wielu odmianach kolorystycznych.'
    },
    {
      image: '/images/74F80879-4DE8-42D2-BC69-E55E219F879D_1_102_o.jpeg',
      title: 'Drzewa Owocowe',
      text: 'Jabłonie, grusze, śliwy i inne drzewa owocowe sprawdzonych odmian.'
    },
    {
      image: '/images/7709BE4F-1237-476C-B3B6-2AA14A01F264_1_102_o.jpeg',
      title: 'Sadzonki',
      text: 'Młode sadzonki gotowe do sadzenia w Twoim ogrodzie.'
    }
  ]

  const products = [
    { image: '/images/0F2B4C33-4544-4298-939C-AD2A403889FC_1_102_o.jpeg', title: 'Tuje Smaragd', desc: 'Idealne na żywopłoty i ogrodzenia' },
    { image: '/images/8089AD7F-29B2-4CD2-B11B-0EFCEFE3604E_1_102_o.jpeg', title: 'Świerk pospolity', desc: 'Klasyczne drzewo iglaste' },
    { image: '/images/1E4DBE44-EEA2-4154-BA87-54740D7DCA62_1_102_o.jpeg', title: 'Krzewy ozdobne', desc: 'Piękna ozdoba ogrodu' },
    { image: '/images/gallery/596493401_25323224600639767_2865473862037379473_n.jpg', title: 'Choinki', desc: 'Świeże choinki na święta' },
    { image: '/images/8A9FBFB6-79F3-4B1D-AEBB-AF830E3B41D7_1_102_o.jpeg', title: 'Bukszpan', desc: 'Klasyka wśród krzewów' },
    { image: '/images/C7FF3090-CD6D-4BB2-BD49-E87A1204BA39_1_102_o.jpeg', title: 'Hortensja', desc: 'Piękne kwiaty całe lato' },
    { image: '/images/CB30ED50-EE73-428C-9D13-0C4AD3A19B4C_1_102_o.jpeg', title: 'Rośliny ozdobne', desc: 'Upiększ swój ogród' },
    { image: '/images/EA1C2491-4F93-45B1-AFE7-329347AACC4E_1_102_o.jpeg', title: 'Drzewka formowane', desc: 'Starannie przycinane' },
    { image: '/images/EAD8A72C-AAF2-4854-8BB9-4E3570200B6A_1_102_o.jpeg', title: 'Krzewy liściaste', desc: 'Różnorodność gatunków' },
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
                <div className={styles.featureImageWrapper}>
                  <img src={feature.image} alt={feature.title} className={styles.featureImage} />
                </div>
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
                <div className={styles.productImageWrapper}>
                  <img src={product.image} alt={product.title} className={styles.productImg} />
                </div>
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
            <div className={styles.aboutImageWrapper}>
              <img src="/images/36180E18-828C-4538-AA35-E87E2A666467_1_102_o.jpeg" alt="Nasza szkółka" className={styles.aboutImg} />
            </div>
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
