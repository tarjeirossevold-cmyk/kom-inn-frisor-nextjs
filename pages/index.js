import { useState } from 'react'
import Head from 'next/head'

export default function Home() {
  const [selectedDate, setSelectedDate] = useState(null)
  const [selectedTime, setSelectedTime] = useState(null)
  const [selectedService, setSelectedService] = useState(null)
  const [showBookingModal, setShowBookingModal] = useState(false)

  const services = [
    { id: 1, name: 'Dameklipp', price: '550,-', duration: '45 min', image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=600' },
    { id: 2, name: 'Herreklipp', price: '450,-', duration: '30 min', image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=600' },
    { id: 3, name: 'Barneklipp', price: '350,-', duration: '30 min', image: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=600' },
    { id: 4, name: 'Farge – hel', price: 'fra 750,-', duration: '90 min', image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600' },
    { id: 5, name: 'Balayage', price: 'fra 1200,-', duration: '150 min', image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600' },
    { id: 6, name: 'Permanent', price: 'fra 900,-', duration: '120 min', image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600' }
  ]

  const timeSlots = [
    { time: '09:00', available: true },
    { time: '09:30', available: false },
    { time: '10:00', available: true },
    { time: '10:30', available: true },
    { time: '11:00', available: false },
    { time: '11:30', available: true },
    { time: '12:00', available: true },
    { time: '13:00', available: true },
    { time: '13:30', available: false },
    { time: '14:00', available: true },
    { time: '14:30', available: true },
    { time: '15:00', available: true },
    { time: '15:30', available: false },
    { time: '16:00', available: true },
    { time: '16:30', available: true },
    { time: '17:00', available: true }
  ]

  const handleBooking = (service) => {
    setSelectedService(service)
    setShowBookingModal(true)
  }

  const confirmBooking = () => {
    if (selectedDate && selectedTime && selectedService) {
      alert(`Bestilling bekreftet!\n\nTjeneste: ${selectedService.name}\nDato: ${selectedDate}\nTidspunkt: ${selectedTime}\n\nVi sender deg en bekreftelse på e-post.`)
      setShowBookingModal(false)
      setSelectedDate(null)
      setSelectedTime(null)
    }
  }

  const jumpToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'auto', block: 'start' })
    }
  }

  return (
    <>
      <Head>
        <title>Kom Inn Frisør AS – Bergen</title>
        <meta name="description" content="Profesjonell frisørsalong i Bergen sentrum - Valkendorfsgaten 7" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* DEMO Watermark */}
      <div style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        background: 'rgba(0,0,0,0.9)',
        color: 'white',
        padding: '10px 20px',
        borderRadius: '4px',
        fontSize: '13px',
        fontWeight: 'bold',
        zIndex: 10000,
        letterSpacing: '1px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
      }}>
        DEMO
      </div>

      {/* Navigation */}
      <nav style={{
        position: 'sticky',
        top: 0,
        background: '#1a1a1a',
        padding: '1rem 0',
        zIndex: 100,
        borderBottom: '1px solid #333'
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <h1 style={{
            color: '#fff',
            margin: 0,
            fontSize: '1.5rem',
            fontWeight: '300',
            letterSpacing: '2px'
          }}>KOM INN FRISØR</h1>
          <div style={{ display: 'flex', gap: '2rem' }}>
            {[
              { label: 'Hjem', target: 'hjem' },
              { label: 'Tjenester', target: 'tjenester' },
              { label: 'Bestill', target: 'tjenester' },
              { label: 'Kontakt', target: 'kontakt' }
            ].map(item => (
              <button
                key={item.label}
                onClick={() => jumpToSection(item.target)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#ddd',
                  fontSize: '0.95rem',
                  letterSpacing: '1px',
                  cursor: 'pointer',
                  transition: 'color 0.2s',
                  padding: 0
                }}
                onMouseOver={(e) => e.target.style.color = '#fff'}
                onMouseOut={(e) => e.target.style.color = '#ddd'}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section id="hjem" style={{
        background: 'linear-gradient(135deg, #2d2d2d 0%, #1a1a1a 100%)',
        padding: '6rem 2rem',
        color: '#fff'
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{
            fontSize: '3.5rem',
            fontWeight: '200',
            marginBottom: '1rem',
            letterSpacing: '3px'
          }}>Velkommen til Kom Inn Frisør AS</h2>
          <p style={{
            fontSize: '1.3rem',
            color: '#ccc',
            marginBottom: '2rem',
            fontWeight: '300'
          }}>Din profesjonelle frisørsalong i Bergen sentrum</p>
          <button
            onClick={() => jumpToSection('tjenester')}
            style={{
              background: '#fff',
              color: '#1a1a1a',
              padding: '1rem 3rem',
              border: 'none',
              fontSize: '1rem',
              letterSpacing: '1px',
              cursor: 'pointer',
              transition: 'all 0.3s'
            }}
            onMouseOver={(e) => {
              e.target.style.background = '#f0f0f0'
              e.target.style.transform = 'translateY(-2px)'
            }}
            onMouseOut={(e) => {
              e.target.style.background = '#fff'
              e.target.style.transform = 'translateY(0)'
            }}
          >
            BESTILL TIME NÅ
          </button>
        </div>
      </section>

      {/* Om oss */}
      <section style={{
        padding: '5rem 2rem',
        background: '#fff'
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{
            fontSize: '2.5rem',
            marginBottom: '2rem',
            fontWeight: '300',
            letterSpacing: '2px',
            color: '#1a1a1a'
          }}>Om oss</h2>
          <p style={{
            fontSize: '1.1rem',
            lineHeight: '1.8',
            color: '#555',
            fontWeight: '300'
          }}>
            Kom Inn Frisør AS er en profesjonell frisørsalong lokalisert i hjertet av Bergen, på Valkendorfsgaten 7. Med mange års erfaring og et brennende engasjement for hårstyling, tilbyr vi et bredt spekter av tjenester for hele familien.
          </p>
        </div>
      </section>

      {/* Tjenester med bilder */}
      <section id="tjenester" style={{
        padding: '5rem 2rem',
        background: '#f8f8f8'
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '2.5rem',
            marginBottom: '3rem',
            fontWeight: '300',
            letterSpacing: '2px',
            color: '#1a1a1a',
            textAlign: 'center'
          }}>Våre tjenester</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '2rem'
          }}>
            {services.map(service => (
              <div
                key={service.id}
                style={{
                  background: '#fff',
                  overflow: 'hidden',
                  transition: 'transform 0.3s',
                  cursor: 'pointer',
                  border: '1px solid #e0e0e0'
                }}
                onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <img
                  src={service.image}
                  alt={service.name}
                  style={{
                    width: '100%',
                    height: '250px',
                    objectFit: 'cover'
                  }}
                />
                <div style={{ padding: '1.5rem' }}>
                  <h3 style={{
                    fontSize: '1.5rem',
                    marginBottom: '0.5rem',
                    fontWeight: '300',
                    letterSpacing: '1px'
                  }}>{service.name}</h3>
                  <p style={{
                    color: '#666',
                    marginBottom: '1rem',
                    fontSize: '0.95rem'
                  }}>{service.duration}</p>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}>
                    <span style={{
                      fontSize: '1.3rem',
                      fontWeight: '300',
                      color: '#1a1a1a'
                    }}>{service.price}</span>
                    <button
                      onClick={() => handleBooking(service)}
                      style={{
                        background: '#1a1a1a',
                        color: '#fff',
                        padding: '0.7rem 1.5rem',
                        border: 'none',
                        fontSize: '0.9rem',
                        letterSpacing: '1px',
                        cursor: 'pointer',
                        transition: 'background 0.3s'
                      }}
                      onMouseOver={(e) => e.target.style.background = '#333'}
                      onMouseOut={(e) => e.target.style.background = '#1a1a1a'}
                    >
                      BESTILL
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Modal */}
      {showBookingModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0,0,0,0.8)',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem'
        }}>
          <div style={{
            background: '#fff',
            padding: '3rem',
            maxWidth: '600px',
            width: '100%',
            maxHeight: '90vh',
            overflowY: 'auto'
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '2rem'
            }}>
              <h3 style={{
                fontSize: '1.8rem',
                fontWeight: '300',
                letterSpacing: '1px',
                margin: 0
              }}>Bestill {selectedService?.name}</h3>
              <button
                onClick={() => setShowBookingModal(false)}
                style={{
                  background: 'none',
                  border: 'none',
                  fontSize: '1.5rem',
                  cursor: 'pointer',
                  color: '#666'
                }}
              >
                ✕
              </button>
            </div>

            <p style={{ marginBottom: '2rem', color: '#666' }}>
              {selectedService?.duration} · {selectedService?.price}
            </p>

            <div style={{ marginBottom: '2rem' }}>
              <label style={{
                display: 'block',
                marginBottom: '0.5rem',
                fontWeight: '500',
                letterSpacing: '0.5px'
              }}>Velg dato</label>
              <input
                type="date"
                value={selectedDate || ''}
                onChange={(e) => setSelectedDate(e.target.value)}
                min={new Date().toISOString().split('T')[0]}
                style={{
                  width: '100%',
                  padding: '0.8rem',
                  border: '1px solid #ddd',
                  fontSize: '1rem'
                }}
              />
            </div>

            {selectedDate && (
              <div style={{ marginBottom: '2rem' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '1rem',
                  fontWeight: '500',
                  letterSpacing: '0.5px'
                }}>Velg tidspunkt</label>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(4, 1fr)',
                  gap: '0.5rem'
                }}>
                  {timeSlots.map(slot => (
                    <button
                      key={slot.time}
                      onClick={() => slot.available && setSelectedTime(slot.time)}
                      disabled={!slot.available}
                      style={{
                        padding: '0.8rem',
                        border: selectedTime === slot.time ? '2px solid #1a1a1a' : '1px solid #ddd',
                        background: slot.available ? '#fff' : '#f5f5f5',
                        color: slot.available ? '#1a1a1a' : '#ccc',
                        cursor: slot.available ? 'pointer' : 'not-allowed',
                        fontSize: '0.9rem',
                        transition: 'all 0.2s'
                      }}
                    >
                      {slot.time}
                    </button>
                  ))}
                </div>
                <p style={{
                  marginTop: '1rem',
                  fontSize: '0.85rem',
                  color: '#666'
                }}>
                  Ledige tider er hvite, opptatte er gråe
                </p>
              </div>
            )}

            {selectedTime && (
              <div style={{ marginBottom: '2rem' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  fontWeight: '500',
                  letterSpacing: '0.5px'
                }}>Ditt navn</label>
                <input
                  type="text"
                  placeholder="Navn"
                  style={{
                    width: '100%',
                    padding: '0.8rem',
                    border: '1px solid #ddd',
                    fontSize: '1rem',
                    marginBottom: '1rem'
                  }}
                />
                <label style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  fontWeight: '500',
                  letterSpacing: '0.5px'
                }}>Telefon</label>
                <input
                  type="tel"
                  placeholder="Telefonnummer"
                  style={{
                    width: '100%',
                    padding: '0.8rem',
                    border: '1px solid #ddd',
                    fontSize: '1rem'
                  }}
                />
              </div>
            )}

            <button
              onClick={confirmBooking}
              disabled={!selectedDate || !selectedTime}
              style={{
                width: '100%',
                padding: '1rem',
                background: selectedDate && selectedTime ? '#1a1a1a' : '#ccc',
                color: '#fff',
                border: 'none',
                fontSize: '1rem',
                letterSpacing: '1px',
                cursor: selectedDate && selectedTime ? 'pointer' : 'not-allowed',
                transition: 'background 0.3s'
              }}
            >
              BEKREFT BESTILLING
            </button>
          </div>
        </div>
      )}

      {/* Anmeldelser */}
      <section style={{
        padding: '5rem 2rem',
        background: '#fff'
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '2.5rem',
            marginBottom: '3rem',
            fontWeight: '300',
            letterSpacing: '2px',
            color: '#1a1a1a',
            textAlign: 'center'
          }}>Hva våre kunder sier</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            {[
              { text: 'Fantastisk service og resultat! Anbefales på det sterkeste.', author: 'Fornøyd kunde' },
              { text: 'Veldig dyktige frisører. Kommer alltid tilbake hit.', author: 'Fornøyd kunde' },
              { text: 'Beste frisørsalongen i Bergen! Hyggelig personale.', author: 'Fornøyd kunde' }
            ].map((review, i) => (
              <div
                key={i}
                style={{
                  padding: '2rem',
                  background: '#f8f8f8',
                  border: '1px solid #e0e0e0'
                }}
              >
                <p style={{
                  fontSize: '1.1rem',
                  fontStyle: 'italic',
                  marginBottom: '1rem',
                  color: '#333',
                  lineHeight: '1.6'
                }}>"{review.text}"</p>
                <p style={{
                  color: '#666',
                  fontSize: '0.9rem',
                  fontWeight: '500'
                }}>- {review.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kontakt */}
      <section id="kontakt" style={{
        padding: '5rem 2rem',
        background: '#1a1a1a',
        color: '#fff'
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '2.5rem',
            marginBottom: '3rem',
            fontWeight: '300',
            letterSpacing: '2px',
            textAlign: 'center'
          }}>Kontakt oss</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '3rem',
            marginBottom: '3rem'
          }}>
            <div>
              <h3 style={{
                fontSize: '1.3rem',
                marginBottom: '1rem',
                fontWeight: '300',
                letterSpacing: '1px',
                color: '#ccc'
              }}>Adresse</h3>
              <p style={{ lineHeight: '1.6', color: '#ddd' }}>
                Valkendorfsgaten 7<br />
                5012 Bergen
              </p>
            </div>
            <div>
              <h3 style={{
                fontSize: '1.3rem',
                marginBottom: '1rem',
                fontWeight: '300',
                letterSpacing: '1px',
                color: '#ccc'
              }}>Åpningstider</h3>
              <p style={{ lineHeight: '1.6', color: '#ddd' }}>
                Mandag - Fredag: 09:00 - 18:00<br />
                Lørdag: 09:00 - 15:00<br />
                Søndag: Stengt
              </p>
            </div>
            <div>
              <h3 style={{
                fontSize: '1.3rem',
                marginBottom: '1rem',
                fontWeight: '300',
                letterSpacing: '1px',
                color: '#ccc'
              }}>Kontakt</h3>
              <p style={{ lineHeight: '1.6', color: '#ddd' }}>
                Telefon: 55 55 55 55<br />
                E-post: post@kominnfrisor.no
              </p>
            </div>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1973.8568558635984!2d5.321956515769714!3d60.39273918191986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x463cf951b7c46fa7%3A0x75f3b5f5e8a7c29a!2sValkendorfsgaten%207%2C%205012%20Bergen!5e0!3m2!1sno!2sno!4v1234567890123"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          />
        </div>
      </section>
    </>
  )
}
