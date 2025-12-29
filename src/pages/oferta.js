import Layout from '@/components/Layout'
import styles from '@/styles/Pages.module.css'

export default function Oferta() {
  const categories = [
    {
      icon: '🌲',
      title: 'Drzewa Iglaste',
      description: 'Szeroki wybór drzew iglastych do ogrodu i na żywopłoty.',
      items: ['Świerk pospolity', 'Świerk srebrny', 'Sosna pospolita', 'Jodła kaukaska', 'Cyprysik', 'Tuja']
    },
    {
      icon: '🌳',
      title: 'Drzewa Liściaste',
      description: 'Piękne drzewa liściaste na każdą porę roku.',
      items: ['Klon palmowy', 'Klon pospolity', 'Dąb czerwony', 'Buk pospolity', 'Brzoza brodawkowata', 'Lipa drobnolistna']
    },
    {
      icon: '🌿',
      title: 'Krzewy Ozdobne',
      description: 'Krzewy kwitnące i zimozielone do każdego ogrodu.',
      items: ['Bukszpan', 'Berberys', 'Forsycja', 'Tawuła', 'Irga', 'Dereń']
    },
    {
      icon: '🌺',
      title: 'Krzewy Kwitnące',
      description: 'Rośliny kwitnące przez całe lato.',
      items: ['Hortensja', 'Azalia', 'Różanecznik', 'Budleja', 'Lilak', 'Magnolia']
    },
    {
      icon: '🌹',
      title: 'Róże',
      description: 'Różne odmiany róż do ogrodu i na rabaty.',
      items: ['Róże pnące', 'Róże parkowe', 'Róże rabatowe', 'Róże okrywowe', 'Róże wielkokwiatowe', 'Róże miniaturowe']
    },
    {
      icon: '🍎',
      title: 'Drzewa Owocowe',
      description: 'Sprawdzone odmiany drzew owocowych.',
      items: ['Jabłonie', 'Grusze', 'Śliwy', 'Wiśnie', 'Czereśnie', 'Brzoskwinie']
    }
  ]

  return (
    <Layout 
      title="Oferta" 
      description="Szeroki wybór drzew i krzewów ozdobnych w Szkółce Rydzyny"
    >
      <section className={styles.page}>
        <div className={styles.container}>
          <div className={styles.pageHeader}>
            <h1 className={styles.pageTitle}>Nasza Oferta</h1>
            <p className={styles.pageSubtitle}>
              Zapoznaj się z naszym bogatym asortymentem drzew i krzewów. 
              Wszystkie rośliny są starannie pielęgnowane i przygotowane do sadzenia.
            </p>
          </div>

          <div className={styles.categories}>
            {categories.map((category, index) => (
              <div key={index} className={styles.categoryCard}>
                <div className={styles.categoryImage}>{category.icon}</div>
                <div className={styles.categoryContent}>
                  <h2 className={styles.categoryTitle}>{category.title}</h2>
                  <p className={styles.categoryText}>{category.description}</p>
                  <ul className={styles.categoryList}>
                    {category.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}
