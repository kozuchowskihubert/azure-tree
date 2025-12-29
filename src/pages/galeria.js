import { useState } from 'react'
import Layout from '@/components/Layout'
import styles from '@/styles/Galeria.module.css'

export default function Galeria() {
  const [activeTab, setActiveTab] = useState('zdjecia')
  const [selectedMedia, setSelectedMedia] = useState(null)

  // Zdjęcia - wszystkie zdjęcia z /public/images/ i /public/images/gallery/
  const images = [
    { src: '/images/0F2B4C33-4544-4298-939C-AD2A403889FC_1_102_o.jpeg', alt: 'Tuje Smaragd', title: 'Tuje Smaragd' },
    { src: '/images/1A0C7254-47A5-488D-984A-29F8FD326FF3_1_102_o.jpeg', alt: 'Drzewa liściaste', title: 'Drzewa liściaste' },
    { src: '/images/1E4DBE44-EEA2-4154-BA87-54740D7DCA62_1_102_o.jpeg', alt: 'Krzewy ozdobne', title: 'Krzewy ozdobne' },
    { src: '/images/355444E5-F901-4D11-8B53-BEC237727810_1_102_o.jpeg', alt: 'Rośliny iglaste', title: 'Rośliny iglaste' },
    { src: '/images/36180E18-828C-4538-AA35-E87E2A666467_1_102_o.jpeg', alt: 'Nasza szkółka', title: 'Nasza szkółka' },
    { src: '/images/3F31810A-B923-4364-AC26-517F01149789_1_102_o.jpeg', alt: 'Krzewy kwitnące', title: 'Krzewy kwitnące' },
    { src: '/images/4C6D3C79-7F9C-4D1F-8880-51F90122C6FE_1_102_o.jpeg', alt: 'Rośliny ozdobne', title: 'Rośliny ozdobne' },
    { src: '/images/74F80879-4DE8-42D2-BC69-E55E219F879D_1_102_o.jpeg', alt: 'Drzewka', title: 'Drzewka' },
    { src: '/images/7709BE4F-1237-476C-B3B6-2AA14A01F264_1_102_o.jpeg', alt: 'Sadzonki', title: 'Sadzonki' },
    { src: '/images/8089AD7F-29B2-4CD2-B11B-0EFCEFE3604E_1_102_o.jpeg', alt: 'Drzewa iglaste', title: 'Drzewa iglaste' },
    { src: '/images/8886E289-0C2F-4B1A-A597-23596822049C_1_102_o.jpeg', alt: 'Krzewy liściaste', title: 'Krzewy liściaste' },
    { src: '/images/89295277-22DB-481A-8227-B9DB5D6492BF_1_102_o.jpeg', alt: 'Rośliny do ogrodu', title: 'Rośliny do ogrodu' },
    { src: '/images/8A9FBFB6-79F3-4B1D-AEBB-AF830E3B41D7_1_102_o.jpeg', alt: 'Tuje na żywopłot', title: 'Tuje na żywopłot' },
    { src: '/images/8EAB3E97-CB62-471D-AAA8-C1F74ADC849A_1_102_o.jpeg', alt: 'Szkółka', title: 'Szkółka' },
    { src: '/images/B957B91B-358A-43A8-B9EC-EE3931FFAE4A_1_102_o.jpeg', alt: 'Róże i kwiaty', title: 'Róże i kwiaty' },
    { src: '/images/C7FF3090-CD6D-4BB2-BD49-E87A1204BA39_1_102_o.jpeg', alt: 'Hortensja', title: 'Hortensja' },
    { src: '/images/CB30ED50-EE73-428C-9D13-0C4AD3A19B4C_1_102_o.jpeg', alt: 'Rośliny ozdobne', title: 'Rośliny ozdobne' },
    { src: '/images/EA1C2491-4F93-45B1-AFE7-329347AACC4E_1_102_o.jpeg', alt: 'Drzewka formowane', title: 'Drzewka formowane' },
    { src: '/images/EAD8A72C-AAF2-4854-8BB9-4E3570200B6A_1_102_o.jpeg', alt: 'Krzewy liściaste', title: 'Krzewy liściaste' },
    { src: '/images/F468720A-C02E-47B1-96F2-A9272DEEB540_1_102_o.jpeg', alt: 'Rośliny', title: 'Rośliny' },
    { src: '/images/F650929A-1F0B-4571-99C6-EEDA335A6D46_1_102_o.jpeg', alt: 'Nasza oferta', title: 'Nasza oferta' },
    { src: '/images/F81B4ED4-3A0C-42D0-830E-935AB5E576F3_1_102_o.jpeg', alt: 'W szkółce', title: 'W szkółce' },
    { src: '/images/FEF2B64E-4A6D-42ED-A33B-D64021B231FF_1_102_o.jpeg', alt: 'Piękne rośliny', title: 'Piękne rośliny' },
    { src: '/images/gallery/475848071_661402346214157_3106701970656297283_n.jpg', alt: 'Choinki', title: 'Choinki świąteczne' },
    { src: '/images/gallery/498527797_9794114537310691_3816962558267444035_n.jpg', alt: 'Transport', title: 'Dostawa roślin' },
    { src: '/images/gallery/596493401_25323224600639767_2865473862037379473_n.jpg', alt: 'Choinki', title: 'Choinki' },
    { src: '/images/gallery/596808713_25323224157306478_5363416883650563080_n.jpg', alt: 'Tuje', title: 'Tuje i iglaki' },
    { src: '/images/gallery/597087615_25323224527306441_6840263767502556965_n.jpg', alt: 'Ogród', title: 'Realizacje ogrodowe' },
    { src: '/images/gallery/597381623_25323224257306468_465821106525587879_n.jpg', alt: 'Rośliny', title: 'Rośliny ozdobne' },
    { src: '/images/gallery/597575318_25323224130639814_4815702639010843478_n.jpg', alt: 'Krzewy', title: 'Krzewy' },
    { src: '/images/gallery/599535217_25323224387306455_4450463131101867487_n.jpg', alt: 'Oferta', title: 'Nasza oferta' },
    { src: '/images/gallery/image.png', alt: 'Voucher', title: 'Voucher podarunkowy' },
    { src: '/images/samochod-dowoz.png', alt: 'Dostawa', title: 'Samochód dostawczy' },
  ]

  // Filmy - wszystkie filmy z /public/videos/
  const videos = [
    { 
      src: '/videos/Download.mp4', 
      poster: '/images/0F2B4C33-4544-4298-939C-AD2A403889FC_1_102_o.jpeg',
      title: 'Spacer po szkółce',
      description: 'Zobacz naszą szkółkę z bliska'
    },
    { 
      src: '/videos/Download-2.mp4', 
      poster: '/images/1A0C7254-47A5-488D-984A-29F8FD326FF3_1_102_o.jpeg',
      title: 'Nasze rośliny',
      description: 'Prezentacja naszych roślin'
    },
    { 
      src: '/videos/Download-3.mp4', 
      poster: '/images/3F31810A-B923-4364-AC26-517F01149789_1_102_o.jpeg',
      title: 'W szkółce',
      description: 'Dzień w szkółce Rydzyny'
    },
    { 
      src: '/videos/Download-4.mp4', 
      poster: '/images/gallery/596493401_25323224600639767_2865473862037379473_n.jpg',
      title: 'Sezon choinkowy',
      description: 'Przygotowania do świąt'
    },
    { 
      src: '/videos/grok-2-short.mp4', 
      poster: '/images/355444E5-F901-4D11-8B53-BEC237727810_1_102_o.jpeg',
      title: 'Piękne rośliny',
      description: 'Bogaty wybór roślin ozdobnych'
    },
    { 
      src: '/videos/grok-3-short.mp4', 
      poster: '/images/gallery/498527797_9794114537310691_3816962558267444035_n.jpg',
      title: 'Tuje i iglaki',
      description: 'Idealne na żywopłoty'
    },
  ]

  const openLightbox = (media) => {
    setSelectedMedia(media)
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setSelectedMedia(null)
    document.body.style.overflow = 'auto'
  }

  return (
    <Layout 
      title="Galeria" 
      description="Galeria zdjęć i filmów ze Szkółki Drzew i Krzewów Rydzyny"
    >
      <section className={styles.page}>
        <div className={styles.container}>
          <div className={styles.pageHeader}>
            <h1 className={styles.pageTitle}>📸 Galeria</h1>
            <p className={styles.pageSubtitle}>
              Zobacz nasze drzewa, krzewy i filmy z życia szkółki. 
              Zachęcamy do odwiedzenia nas osobiście!
            </p>
          </div>

          {/* Tabs */}
          <div className={styles.tabs}>
            <button 
              className={`${styles.tab} ${activeTab === 'zdjecia' ? styles.tabActive : ''}`}
              onClick={() => setActiveTab('zdjecia')}
            >
              📷 Zdjęcia
            </button>
            <button 
              className={`${styles.tab} ${activeTab === 'filmy' ? styles.tabActive : ''}`}
              onClick={() => setActiveTab('filmy')}
            >
              🎬 Filmy
            </button>
          </div>

          {/* Zdjęcia */}
          {activeTab === 'zdjecia' && (
            <div className={styles.gallery}>
              {images.map((image, index) => (
                <div 
                  key={index} 
                  className={styles.galleryItem}
                  onClick={() => openLightbox({ type: 'image', ...image })}
                >
                  <div 
                    className={styles.galleryImage}
                    style={{ backgroundImage: `url(${image.src})` }}
                  >
                    <div className={styles.galleryOverlay}>
                      <span className={styles.galleryIcon}>🔍</span>
                    </div>
                  </div>
                  <div className={styles.galleryCaption}>
                    <h3>{image.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Filmy */}
          {activeTab === 'filmy' && (
            <div className={styles.videoGallery}>
              {videos.map((video, index) => (
                <div 
                  key={index} 
                  className={styles.videoItem}
                  onClick={() => openLightbox({ type: 'video', ...video })}
                >
                  <div 
                    className={styles.videoThumbnail}
                    style={{ backgroundImage: video.poster ? `url(${video.poster})` : undefined }}
                  >
                    <div className={styles.playButton}>▶</div>
                  </div>
                  <div className={styles.videoInfo}>
                    <h3>{video.title}</h3>
                    <p>{video.description}</p>
                  </div>
                </div>
              ))}
              
              <div className={styles.videoNote}>
                <p>💡 Aby dodać filmy, umieść pliki .mp4 w folderze <code>/public/videos/</code></p>
              </div>
            </div>
          )}

          {/* Lightbox */}
          {selectedMedia && (
            <div className={styles.lightbox} onClick={closeLightbox}>
              <button className={styles.lightboxClose} onClick={closeLightbox}>✕</button>
              <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
                {selectedMedia.type === 'image' ? (
                  <img 
                    src={selectedMedia.src} 
                    alt={selectedMedia.alt}
                    className={styles.lightboxImage}
                  />
                ) : (
                  <video 
                    src={selectedMedia.src}
                    poster={selectedMedia.poster}
                    controls
                    autoPlay
                    className={styles.lightboxVideo}
                  />
                )}
                <div className={styles.lightboxCaption}>
                  <h3>{selectedMedia.title}</h3>
                  {selectedMedia.description && <p>{selectedMedia.description}</p>}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </Layout>
  )
}
