import Layout from '@/components/Layout'
import styles from '@/styles/Pages.module.css'

export default function ONas() {
  const timeline = [
    {
      year: '1990',
      title: 'Założenie szkółki',
      text: 'Rodzinne początki naszej działalności w Rydzynie.'
    },
    {
      year: '2000',
      title: 'Rozwój asortymentu',
      text: 'Rozszerzenie oferty o nowe gatunki drzew i krzewów.'
    },
    {
      year: '2010',
      title: 'Modernizacja',
      text: 'Inwestycje w nowoczesne technologie uprawy.'
    },
    {
      year: '2020',
      title: 'Nowe możliwości',
      text: 'Uruchomienie sprzedaży online i rozwój współpracy.'
    }
  ]

  return (
    <Layout 
      title="O nas" 
      description="Poznaj historię i działalność Szkółki Drzew i Krzewów Rydzyny"
    >
      <section className={styles.page}>
        <div className={styles.container}>
          <div className={styles.pageHeader}>
            <h1 className={styles.pageTitle}>O nas</h1>
            <p className={styles.pageSubtitle}>
              Poznaj naszą historię i pasję do roślin
            </p>
          </div>

          <div className={styles.aboutContent}>
            <div className={styles.aboutText}>
              <h2>Nasza Historia</h2>
              <p>
                Szkółka Drzew i Krzewów Rydzyny to rodzinne przedsiębiorstwo z wieloletnim 
                doświadczeniem w produkcji i sprzedaży roślin ozdobnych. Nasza przygoda z 
                roślinnością rozpoczęła się wiele lat temu i trwa do dziś.
              </p>
              <p>
                Przez lata zdobyliśmy cenne doświadczenie w uprawie różnorodnych gatunków 
                drzew i krzewów. Każda roślina w naszej szkółce jest pielęgnowana z pasją 
                i dbałością o najwyższą jakość.
              </p>
              <p>
                Specjalizujemy się w produkcji drzew iglastych i liściastych, krzewów 
                ozdobnych i kwitnących, a także drzew owocowych. Naszą misją jest 
                dostarczanie klientom roślin, które będą cieszyć oko przez wiele lat.
              </p>

              <h2>Nasza Misja</h2>
              <p>
                Wierzymy, że każdy ogród zasługuje na najlepsze rośliny. Dlatego 
                dokładamy wszelkich starań, aby nasze drzewa i krzewy były zdrowe, 
                dobrze ukorzenione i przygotowane do życia w nowym miejscu.
              </p>
              <p>
                Stawiamy na jakość, a nie ilość. Każda roślina jest starannie 
                selekcjonowana i pielęgnowana, aby sprostać oczekiwaniom najbardziej 
                wymagających klientów.
              </p>

              <div className={styles.timeline}>
                <h2>Nasza Droga</h2>
                {timeline.map((item, index) => (
                  <div key={index} className={styles.timelineItem}>
                    <div className={styles.timelineYear}>{item.year}</div>
                    <div className={styles.timelineContent}>
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.aboutImage}>🌲🌳</div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
