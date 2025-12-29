import { useState } from 'react'
import Layout from '@/components/Layout'
import styles from '@/styles/Galeria.module.css'

export default function Galeria() {
  const [activeTab, setActiveTab] = useState('zdjecia')
  const [selectedMedia, setSelectedMedia] = useState(null)

  // Zdjęcia - dodaj własne pliki do /public/images/gallery/
  const images = [
    { src: '/images/gallery/image.png', alt: 'Voucher podarunkowy', title: 'Voucher Podarunkowy' },
    { src: '/images/gallery/475848071_661402346214157_3106701970656297283_n.jpg', alt: 'Szkółka Rydzyny', title: 'Nasza szkółka' },
    { src: '/images/gallery/498527797_9794114537310691_3816962558267444035_n.jpg', alt: 'Drzewa iglaste', title: 'Drzewa iglaste' },
    { src: '/images/gallery/596493401_25323224600639767_2865473862037379473_n.jpg', alt: 'Krzewy ozdobne', title: 'Krzewy ozdobne' },
    { src: '/images/gallery/596493401_25323224600639767_2865473862037379473_n-2.jpg', alt: 'Choinki', title: 'Choinki świąteczne' },
    { src: '/images/gallery/596808713_25323224157306478_5363416883650563080_n.jpg', alt: 'Tuje', title: 'Tuje i iglaki' },
    { src: '/images/gallery/596809175_25323224117306482_8963869732943613624_n.jpg', alt: 'Rośliny', title: 'Różnorodność roślin' },
    { src: '/images/gallery/597087615_25323224527306441_6840263767502556965_n.jpg', alt: 'Ogród', title: 'Realizacje ogrodowe' },
    { src: '/images/gallery/597381623_25323224257306468_465821106525587879_n.jpg', alt: 'Rośliny ozdobne', title: 'Rośliny ozdobne' },
    { src: '/images/gallery/597575318_25323224130639814_4815702639010843478_n.jpg', alt: 'Krzewy', title: 'Krzewy liściaste' },
    { src: '/images/gallery/599535217_25323224387306455_4450463131101867487_n.jpg', alt: 'Nasza oferta', title: 'Nasza oferta' },
  ]

  // Filmy - dodaj własne pliki do /public/videos/
  const videos = [
    { 
      src: '/videos/grok-video-0c7a3608-3be8-49d9-9afb-2ab6876505c7.mp4', 
      poster: '/images/gallery/475848071_661402346214157_3106701970656297283_n.jpg',
      title: 'Nasza szkółka',
      description: 'Profesjonalna szkółka drzew i krzewów'
    },
    { 
      src: '/videos/grok-video-0c7a3608-3be8-49d9-9afb-2ab6876505c7-2.mp4', 
      poster: '/images/gallery/498527797_9794114537310691_3816962558267444035_n.jpg',
      title: 'Piękne rośliny',
      description: 'Bogaty wybór roślin ozdobnych'
    },
    { 
      src: '/videos/grok-video-0c7a3608-3be8-49d9-9afb-2ab6876505c7-3.mp4', 
      poster: '/images/gallery/596493401_25323224600639767_2865473862037379473_n.jpg',
      title: 'Tuje i iglaki',
      description: 'Idealne na żywopłoty'
    },
    { 
      src: '/videos/Download.mp4', 
      poster: '/images/gallery/596808713_25323224157306478_5363416883650563080_n.jpg',
      title: 'Spacer po szkółce',
      description: 'Zobacz naszą szkółkę z bliska'
    },
    { 
      src: '/videos/Download-2.mp4', 
      poster: '/images/gallery/597087615_25323224527306441_6840263767502556965_n.jpg',
      title: 'Nasze rośliny',
      description: 'Prezentacja naszych roślin'
    },
    { 
      src: '/videos/Download-3.mp4', 
      poster: '/images/gallery/597381623_25323224257306468_465821106525587879_n.jpg',
      title: 'W szkółce',
      description: 'Dzień w szkółce Rydzyny'
    },
    { 
      src: '/videos/Download-4.mp4', 
      poster: '/images/gallery/597575318_25323224130639814_4815702639010843478_n.jpg',
      title: 'Sezon choinkowy',
      description: 'Przygotowania do świąt'
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
