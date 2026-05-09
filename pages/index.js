import { useState } from 'react'
import Head from 'next/head'

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    date: '',
    time: '',
    message: ''
  })

  const services = [
    { name: 'Dameklipp', price: '550,-', duration: '45 min' },
    { name: 'Herreklipp', price: '450,-', duration: '30 min' },
    { name: 'Barneklipp (under 12 år)', price: '350,-', duration: '30 min' },
    { name: 'Farge - hel', price: 'fra 750,-', duration: '90 min' },
    { name: 'Farge - utv', price: 'fra 650,-', duration: '60 min' },
    { name: 'Striper', price: 'fra 850,-', duration: '120 min' },
    { name: 'Balayage', price: 'fra 1200,-', duration: '150 min' },
    { name: 'Permanent', price: 'fra 900,-', duration: '120 min' },
    { name: 'Styling/Føning', price: '400,-', duration: '30 min' },
    { name: 'Bryllupsstyling', price: 'fra 800,-', duration: '60 min' }
  ]

  const reviews = [
    {
      text: 'Fantastisk service og resultat! Anbefales på det sterkeste.',
      author: 'Fornøyd kunde'
    },
    {
      text: 'Veldig dyktige frisører. Kommer alltid tilbake hit.',
      author: 'Fornøyd kunde'
    },
    {
      text: 'Beste frisørsalongen i Bergen! Hyggelig personale.',
      author: 'Fornøyd kunde'
    }
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Takk for din bestilling! Vi kontakter deg snart for bekreftelse.')
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'auto' })
    }
  }

  return (
    <>
      <Head>
        <title>Kom Inn Frisør AS - Bergen</title>
        <meta name="description" content="Profesjonell frisørsalong i Bergen sentrum - Valkendorfsgaten 7" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Watermark - Fixed and visible */}
      <div style={{
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        background: 'rgba(0, 0, 0, 0.85)',
        color: 'white',
        padding: '12px 24px',
        borderRadius: '6px',
        fontSize: '14px',
        fontWeight: 'bold',
        zIndex: 10000,
        fontFamily: 'Arial, sans-serif',
        boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
        letterSpacing: '2px'
      }}>
        DEMO
      </div>

      {/* Navigation */}
      <nav style={{
        position: 'sticky',
        top: 0,
        background: '#2c3e50',
        padding: '1rem 2rem',
        boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
        zIndex: 100
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <h1 style={{
            color: '#ecf0f1',
            margin: 0,
            fontSize: '1.5rem',
            fontFamily: 'Georgia, serif'
          }}>
            Kom Inn Frisør AS
          </h1>
          <div style={{ display: 'flex', gap: '2rem' }}>
            {['hjem', 'om-oss', 'tjenester', 'bestill', 'anmeldelser', 'kontakt'].map(section => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#ecf0f1',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  textTransform: 'capitalize',
                  padding: '0.5rem',
                  transition: 'color 0.3s'
                }}
                onMouseOver={(e) => e.target.style.color = '#3498db'}
                onMouseOut={(e) => e.target.style.color = '#ecf0f1'}
              >
                {section === 'om-oss' ? 'Om oss' : section.replace('-', ' ')}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hjem" style={{
        padding: '6rem 2rem',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '3rem',
            marginBottom: '1rem',
            fontFamily: 'Georgia, serif'
          }}>
            Velkommen til Kom Inn Frisør AS
          </h2>
          <p style={{
            fontSize: '1.3rem',
            lineHeight: '1.6',
            marginBottom: '2rem'
          }}>
            Din profesjonelle frisørsalong i Bergen sentrum
          </p>
          <button
            onClick={() => scrollToSection('bestill')}
            style={{
              background: 'white',
              color: '#667eea',
              padding: '1rem 2.5rem',
              border: 'none',
              borderRadius: '50px',
              fontSize: '1.1rem',
              cursor: 'pointer',
              fontWeight: 'bold',
              transition: 'transform 0.3s, box-shadow 0.3s',
              boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
            }}
            onMouseOver={(e) => {
              e.target.style.transform = 'scale(1.05)'
              e.target.style.boxShadow = '0 6px 20px rgba(0,0,0,0.3)'
            }}
            onMouseOut={(e) => {
              e.target.style.transform = 'scale(1)'
              e.target.style.boxShadow = '0 4px 15px rgba(0,0,0,0.2)'
            }}
          >
            Bestill time
          </button>
        </div>
      </section>

      {/* Om Oss Section */}
      <section id="om-oss" style={{
        padding: '5rem 2rem',
        background: '#f8f9fa'
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '2.5rem',
            marginBottom: '2.5rem',
            textAlign: 'center',
            color: '#2c3e50',
            fontFamily: 'Georgia, serif'
          }}>
            Om oss
          </h2>
          <div style={{
            fontSize: '1.15rem',
            lineHeight: '1.9',
            color: '#34495e'
          }}>
            <p style={{ marginBottom: '1.5rem' }}>
              Kom Inn Frisør AS er en profesjonell frisørsalong lokalisert i hjertet av Bergen, 
              på Valkendorfsgaten 7. Med mange års erfaring og et brennende engasjement for 
              hårstyling, tilbyr vi et bredt spekter av tjenester for hele familien.
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
              Våre dyktige frisører holder seg oppdatert på de nyeste trendene og teknikkene, 
              samtidig som vi legger vekt på individuell tilpasning og personlig service. 
              Vi bruker kun kvalitetsprodukter for å sikre best mulig resultat og en sunn 
              hårhelse.
            </p>
            <p>
              Hos oss møtes du av et hyggelig og profesjonelt team i trivelige lokaler midt 
              i Bergen sentrum. Vi ser frem til å gi deg en fantastisk frisøropplevelse.
            </p>
          </div>
        </div>
      </section>

      {/* Tjenester Section */}
      <section id="tjenester" style={{
        padding: '5rem 2rem',
        background: 'white'
      }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '2.5rem',
            marginBottom: '3rem',
            textAlign: 'center',
            color: '#2c3e50',
            fontFamily: 'Georgia, serif'
          }}>
            Våre tjenester
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem'
          }}>
            {services.map((service, index) => (
              <div key={index} style={{
                padding: '2rem',
                border: '1px solid #e0e0e0',
                borderRadius: '12px',
                textAlign: 'center',
                transition: 'transform 0.3s, box-shadow 0.3s',
                background: '#fafafa'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)'
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.1)'
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}>
                <h3 style={{
                  fontSize: '1.4rem',
                  color: '#2c3e50',
                  marginBottom: '0.8rem'
                }}>
                  {service.name}
                </h3>
                <p style={{
                  fontSize: '1.6rem',
                  color: '#3498db',
                  fontWeight: 'bold',
                  marginBottom: '0.5rem'
                }}>
                  {service.price}
                </p>
                <p style={{
                  fontSize: '0.95rem',
                  color: '#7f8c8d',
                  margin: 0
                }}>
                  {service.duration}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bestill Time Section - Improved */}
      <section id="bestill" style={{
        padding: '5rem 2rem',
        background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)'
      }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '2.5rem',
            marginBottom: '1rem',
            textAlign: 'center',
            color: '#2c3e50',
            fontFamily: 'Georgia, serif'
          }}>
            Bestill time
          </h2>
          <p style={{
            textAlign: 'center',
            color: '#555',
            marginBottom: '2.5rem',
            fontSize: '1.05rem'
          }}>
            Fyll ut skjemaet under, så kontakter vi deg for bekreftelse
          </p>
          <form onSubmit={handleSubmit} style={{
            background: 'white',
            padding: '3rem',
            borderRadius: '16px',
            boxShadow: '0 10px 40px rgba(0,0,0,0.1)'
          }}>
            <div style={{ marginBottom: '1.8rem' }}>
              <label style={{
                display: 'block',
                marginBottom: '0.6rem',
                color: '#2c3e50',
                fontWeight: '600',
                fontSize: '1rem'
              }}>
                Navn *
              </label>
              <input
                type="text"
                required
                placeholder="Ditt fulle navn"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                style={{
                  width: '100%',
                  padding: '1rem',
                  border: '2px solid #e0e0e0',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  boxSizing: 'border-box',
                  transition: 'border-color 0.3s'
                }}
                onFocus={(e) => e.target.style.borderColor = '#3498db'}
                onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
              />
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.8rem' }}>
              <div>
                <label style={{
                  display: 'block',
                  marginBottom: '0.6rem',
                  color: '#2c3e50',
                  fontWeight: '600',
                  fontSize: '1rem'
                }}>
                  Telefon *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="XXX XX XXX"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  style={{
                    width: '100%',
                    padding: '1rem',
                    border: '2px solid #e0e0e0',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    boxSizing: 'border-box',
                    transition: 'border-color 0.3s'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#3498db'}
                  onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
                />
              </div>
              
              <div>
                <label style={{
                  display: 'block',
                  marginBottom: '0.6rem',
                  color: '#2c3e50',
                  fontWeight: '600',
                  fontSize: '1rem'
                }}>
                  E-post
                </label>
                <input
                  type="email"
                  placeholder="din@epost.no"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  style={{
                    width: '100%',
                    padding: '1rem',
                    border: '2px solid #e0e0e0',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    boxSizing: 'border-box',
                    transition: 'border-color 0.3s'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#3498db'}
                  onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
                />
              </div>
            </div>
            
            <div style={{ marginBottom: '1.8rem' }}>
              <label style={{
                display: 'block',
                marginBottom: '0.6rem',
                color: '#2c3e50',
                fontWeight: '600',
                fontSize: '1rem'
              }}>
                Tjeneste *
              </label>
              <select
                required
                value={formData.service}
                onChange={(e) => setFormData({...formData, service: e.target.value})}
                style={{
                  width: '100%',
                  padding: '1rem',
                  border: '2px solid #e0e0e0',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  boxSizing: 'border-box',
                  transition: 'border-color 0.3s',
                  background: 'white',
                  cursor: 'pointer'
                }}
                onFocus={(e) => e.target.style.borderColor = '#3498db'}
                onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
              >
                <option value="">Velg tjeneste</option>
                {services.map((service, index) => (
                  <option key={index} value={service.name}>
                    {service.name} - {service.price} ({service.duration})
                  </option>
                ))}
              </select>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.8rem' }}>
              <div>
                <label style={{
                  display: 'block',
                  marginBottom: '0.6rem',
                  color: '#2c3e50',
                  fontWeight: '600',
                  fontSize: '1rem'
                }}>
                  Dato *
                </label>
                <input
                  type="date"
                  required
                  value={formData.date}
                  onChange={(e) => setFormData({...formData, date: e.target.value})}
                  style={{
                    width: '100%',
                    padding: '1rem',
                    border: '2px solid #e0e0e0',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    boxSizing: 'border-box',
                    transition: 'border-color 0.3s'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#3498db'}
                  onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
                />
              </div>
              
              <div>
                <label style={{
                  display: 'block',
                  marginBottom: '0.6rem',
                  color: '#2c3e50',
                  fontWeight: '600',
                  fontSize: '1rem'
                }}>
                  Tidspunkt *
                </label>
                <select
                  required
                  value={formData.time}
                  onChange={(e) => setFormData({...formData, time: e.target.value})}
                  style={{
                    width: '100%',
                    padding: '1rem',
                    border: '2px solid #e0e0e0',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    boxSizing: 'border-box',
                    transition: 'border-color 0.3s',
                    background: 'white',
                    cursor: 'pointer'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#3498db'}
                  onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
                >
                  <option value="">Velg tidspunkt</option>
                  <option value="09:00">09:00</option>
                  <option value="10:00">10:00</option>
                  <option value="11:00">11:00</option>
                  <option value="12:00">12:00</option>
                  <option value="13:00">13:00</option>
                  <option value="14:00">14:00</option>
                  <option value="15:00">15:00</option>
                  <option value="16:00">16:00</option>
                  <option value="17:00">17:00</option>
                </select>
              </div>
            </div>
            
            <div style={{ marginBottom: '2rem' }}>
              <label style={{
                display: 'block',
                marginBottom: '0.6rem',
                color: '#2c3e50',
                fontWeight: '600',
                fontSize: '1rem'
              }}>
                Melding / Spesielle ønsker
              </label>
              <textarea
                placeholder="Har du spesielle ønsker eller behov? La oss vite..."
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                rows="4"
                style={{
                  width: '100%',
                  padding: '1rem',
                  border: '2px solid #e0e0e0',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  boxSizing: 'border-box',
                  transition: 'border-color 0.3s',
                  fontFamily: 'inherit',
                  resize: 'vertical'
                }}
                onFocus={(e) => e.target.style.borderColor = '#3498db'}
                onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
              />
            </div>
            
            <button type="submit" style={{
              width: '100%',
              padding: '1.2rem',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
              border: 'none',
              borderRadius: '50px',
              fontSize: '1.15rem',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'transform 0.3s, box-shadow 0.3s',
              boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)'
            }}
            onMouseOver={(e) => {
              e.target.style.transform = 'translateY(-2px)'
              e.target.style.boxShadow = '0 6px 20px rgba(102, 126, 234, 0.6)'
            }}
            onMouseOut={(e) => {
              e.target.style.transform = 'translateY(0)'
              e.target.style.boxShadow = '0 4px 15px rgba(102, 126, 234, 0.4)'
            }}>
              Send bestilling
            </button>
          </form>
        </div>
      </section>

      {/* Anmeldelser Section */}
      <section id="anmeldelser" style={{
        padding: '5rem 2rem',
        background: 'white'
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '2.5rem',
            marginBottom: '3rem',
            textAlign: 'center',
            color: '#2c3e50',
            fontFamily: 'Georgia, serif'
          }}>
            Hva våre kunder sier
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            {reviews.map((review, index) => (
              <div key={index} style={{
                background: '#f8f9fa',
                padding: '2.5rem',
                borderRadius: '12px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                transition: 'transform 0.3s'
              }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                <div style={{
                  color: '#f39c12',
                  fontSize: '1.8rem',
                  marginBottom: '1.2rem'
                }}>
                  ★★★★★
                </div>
                <p style={{
                  color: '#34495e',
                  fontSize: '1.1rem',
                  lineHeight: '1.7',
                  marginBottom: '1.5rem',
                  fontStyle: 'italic'
                }}>
                  &quot;{review.text}&quot;
                </p>
                <p style={{
                  color: '#7f8c8d',
                  fontWeight: '600',
                  margin: 0
                }}>
                  - {review.author}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kontakt Section */}
      <section id="kontakt" style={{
        padding: '5rem 2rem',
        background: '#2c3e50',
        color: 'white'
      }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '2.5rem',
            marginBottom: '3rem',
            textAlign: 'center',
            fontFamily: 'Georgia, serif'
          }}>
            Kontakt oss
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2.5rem',
            marginBottom: '3rem'
          }}>
            <div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#3498db' }}>Adresse</h3>
              <p style={{ lineHeight: '1.8', fontSize: '1.1rem' }}>
                Valkendorfsgaten 7<br />
                5012 Bergen
              </p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#3498db' }}>Åpningstider</h3>
              <p style={{ lineHeight: '1.8', fontSize: '1.1rem' }}>
                Mandag - Fredag: 09:00 - 18:00<br />
                Lørdag: 09:00 - 15:00<br />
                Søndag: Stengt
              </p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#3498db' }}>Kontakt</h3>
              <p style={{ lineHeight: '1.8', fontSize: '1.1rem' }}>
                Telefon: 55 55 55 55<br />
                E-post: post@kominnfrisor.no
              </p>
            </div>
          </div>
          <div style={{
            width: '100%',
            height: '450px',
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: '0 8px 24px rgba(0,0,0,0.3)'
          }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1973.8586094722742!2d5.323515!3d60.393056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x463cf9579c57c1a3%3A0x9a95c0d53e4c7f0d!2sValkendorfsgaten%207%2C%205012%20Bergen!5e0!3m2!1sno!2sno!4v1234567890"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
        }
        html {
          scroll-behavior: auto;
        }
      `}</style>
    </>
  )
}
