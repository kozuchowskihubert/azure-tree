import { useState } from 'react'
import Layout from '@/components/Layout'
import styles from '@/styles/Rezerwacja.module.css'

export default function Rezerwacja() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    items: [],
    notes: ''
  })

  const [selectedItems, setSelectedItems] = useState([])

  const plants = [
    { id: 1, category: 'Drzewa Iglaste', name: 'Świerk pospolity', sizes: ['50-80cm', '80-120cm', '120-150cm'] },
    { id: 2, category: 'Drzewa Iglaste', name: 'Świerk srebrny', sizes: ['50-80cm', '80-120cm', '120-150cm'] },
    { id: 3, category: 'Drzewa Iglaste', name: 'Tuja Smaragd', sizes: ['60-80cm', '80-100cm', '100-120cm', '120-150cm'] },
    { id: 4, category: 'Drzewa Iglaste', name: 'Tuja Brabant', sizes: ['60-80cm', '80-100cm', '100-120cm'] },
    { id: 5, category: 'Drzewa Iglaste', name: 'Sosna pospolita', sizes: ['80-100cm', '100-150cm'] },
    { id: 6, category: 'Drzewa Liściaste', name: 'Klon palmowy', sizes: ['40-60cm', '60-80cm', '80-100cm'] },
    { id: 7, category: 'Drzewa Liściaste', name: 'Buk pospolity', sizes: ['80-100cm', '100-150cm', '150-200cm'] },
    { id: 8, category: 'Drzewa Liściaste', name: 'Brzoza brodawkowata', sizes: ['150-200cm', '200-250cm'] },
    { id: 9, category: 'Krzewy', name: 'Bukszpan', sizes: ['20-30cm', '30-40cm', '40-50cm'] },
    { id: 10, category: 'Krzewy', name: 'Hortensja', sizes: ['30-40cm', '40-60cm'] },
    { id: 11, category: 'Krzewy', name: 'Róża parkowa', sizes: ['40-60cm'] },
    { id: 12, category: 'Owocowe', name: 'Jabłoń', sizes: ['120-150cm', '150-180cm'] },
    { id: 13, category: 'Owocowe', name: 'Grusza', sizes: ['120-150cm', '150-180cm'] },
    { id: 14, category: 'Owocowe', name: 'Śliwa', sizes: ['120-150cm', '150-180cm'] },
  ]

  const categories = [...new Set(plants.map(p => p.category))]

  const handleAddItem = (plant, size, quantity) => {
    if (quantity < 1) return
    
    const newItem = {
      id: Date.now(),
      plantId: plant.id,
      name: plant.name,
      size,
      quantity: parseInt(quantity)
    }
    
    setSelectedItems([...selectedItems, newItem])
  }

  const handleRemoveItem = (itemId) => {
    setSelectedItems(selectedItems.filter(item => item.id !== itemId))
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (selectedItems.length === 0) {
      alert('Proszę dodać przynajmniej jedną roślinę do rezerwacji.')
      return
    }
    
    const orderSummary = selectedItems.map(item => 
      `${item.name} (${item.size}) x ${item.quantity}`
    ).join('\n')
    
    alert(`Dziękujemy za rezerwację!\n\nPodsumowanie:\n${orderSummary}\n\nSkontaktujemy się wkrótce, aby potwierdzić dostępność i ustalić szczegóły.`)
    
    setFormData({ name: '', email: '', phone: '', date: '', items: [], notes: '' })
    setSelectedItems([])
  }

  return (
    <Layout 
      title="Rezerwacja" 
      description="Zarezerwuj drzewa i krzewy w Szkółce Rydzyny"
    >
      <section className={styles.page}>
        <div className={styles.container}>
          <div className={styles.pageHeader}>
            <h1 className={styles.pageTitle}>🌲 Rezerwacja Roślin</h1>
            <p className={styles.pageSubtitle}>
              Wybierz interesujące Cię rośliny i zarezerwuj je przed wizytą. 
              Potwierdzimy dostępność i skontaktujemy się z Tobą.
            </p>
          </div>

          <div className={styles.reservationGrid}>
            {/* Wybór roślin */}
            <div className={styles.plantsSection}>
              <h2 className={styles.sectionTitle}>1. Wybierz rośliny</h2>
              
              {categories.map(category => (
                <div key={category} className={styles.categorySection}>
                  <h3 className={styles.categoryTitle}>{category}</h3>
                  <div className={styles.plantsList}>
                    {plants.filter(p => p.category === category).map(plant => (
                      <PlantItem 
                        key={plant.id} 
                        plant={plant} 
                        onAdd={handleAddItem}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Koszyk i formularz */}
            <div className={styles.cartSection}>
              <div className={styles.cart}>
                <h2 className={styles.sectionTitle}>2. Twoja rezerwacja</h2>
                
                {selectedItems.length === 0 ? (
                  <p className={styles.emptyCart}>
                    Nie dodano jeszcze żadnych roślin
                  </p>
                ) : (
                  <ul className={styles.cartItems}>
                    {selectedItems.map(item => (
                      <li key={item.id} className={styles.cartItem}>
                        <div className={styles.cartItemInfo}>
                          <strong>{item.name}</strong>
                          <span>{item.size} × {item.quantity} szt.</span>
                        </div>
                        <button 
                          onClick={() => handleRemoveItem(item.id)}
                          className={styles.removeBtn}
                          aria-label="Usuń"
                        >
                          ✕
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <form onSubmit={handleSubmit} className={styles.form}>
                <h2 className={styles.sectionTitle}>3. Dane kontaktowe</h2>
                
                <div className={styles.formGroup}>
                  <label htmlFor="name">Imię i nazwisko *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Jan Kowalski"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="jan@example.com"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="phone">Telefon *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+48 123 456 789"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="date">Preferowana data odbioru</label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="notes">Dodatkowe uwagi</label>
                  <textarea
                    id="notes"
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    placeholder="Np. pytania o konkretne odmiany, transport..."
                    rows={3}
                  />
                </div>

                <button 
                  type="submit" 
                  className={styles.submitBtn}
                  disabled={selectedItems.length === 0}
                >
                  📧 Wyślij rezerwację
                </button>

                <p className={styles.note}>
                  * Po wysłaniu rezerwacji skontaktujemy się, aby potwierdzić dostępność i ustalić szczegóły.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

function PlantItem({ plant, onAdd }) {
  const [size, setSize] = useState(plant.sizes[0])
  const [quantity, setQuantity] = useState(1)

  const handleAdd = () => {
    onAdd(plant, size, quantity)
    setQuantity(1)
  }

  return (
    <div className={styles.plantItem}>
      <div className={styles.plantInfo}>
        <span className={styles.plantName}>{plant.name}</span>
      </div>
      <div className={styles.plantControls}>
        <select 
          value={size} 
          onChange={(e) => setSize(e.target.value)}
          className={styles.sizeSelect}
        >
          {plant.sizes.map(s => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
        <input
          type="number"
          min="1"
          max="100"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          className={styles.quantityInput}
        />
        <button 
          type="button"
          onClick={handleAdd}
          className={styles.addBtn}
        >
          + Dodaj
        </button>
      </div>
    </div>
  )
}
