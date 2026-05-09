import { useState } from 'react'
import Head from 'next/head'

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    date: '',
    time: ''
  })

  const services = [
    { name: 'Dameklipp', price: '550,-' },
    { name: 'Herreklipp', price: '450,-' },
    { name: 'Barneklipp', price: '350,-' },
    { name: 'Farge', price: 'fra 750,-' },
    { name: 'Striper', price: 'fra 850,-' },
    { name: 'Balayage', price: 'fra 1200,-' },
    { name: 'Permanent', price: 'fra 900,-' },
    { name: 'Styling', price: '400,-' }
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
        <meta name="description" content="Profesjonell frisørsalong i Bergen sentrum" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Watermark */}
      <div style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        background: 'rgba(0,0,0,0.7)',
        color: 'white',
        padding: '8px 16px',
        borderRadius: '4px',
        fontSize: '12px',
        zIndex: 9999,
        fontFamily: 'Arial, sans-serif'
      }}>
        DEMO
      </div>

      {/* Navigation */}
      <nav style={{
        position: 'sticky',
        top: 0,
        background: '#2c3e50',
        padding: '1rem 2rem',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
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
            fontSize: '1.2rem',
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
              padding: '1rem 2rem',
              border: 'none',
              borderRadius: '4px',
              fontSize: '1.1rem',
              cursor: 'pointer',
              fontWeight: 'bold',
              transition: 'transform 0.3s'
            }}
            onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
            onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
          >
            Bestill time
          </button>
        </div>
      </section>

      {/* Om Oss Section */}
      <section id="om-oss" style={{
        padding: '4rem 2rem',
        background: '#ecf0f1'
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '2.5rem',
            marginBottom: '2rem',
            textAlign: 'center',
            color: '#2c3e50',
            fontFamily: 'Georgia, serif'
          }}>
            Om oss
          </h2>
          <div style={{
            fontSize: '1.1rem',
            lineHeight: '1.8',
            color: '#34495e',
            textAlign: 'center'
          }}>
            <p style={{ marginBottom: '1rem' }}>
              Kom Inn Frisør AS er en profesjonell frisørsalong lokalisert i hjertet av Bergen. 
              Med mange års erfaring og et brennende engasjement for hårstyling, tilbyr vi et bredt 
              spekter av tjenester for hele familien.
            </p>
            <p style={{ marginBottom: '1rem' }}>
              Våre dyktige frisører holder seg oppdatert på de nyeste trendene og teknikkene, 
              samtidig som vi legger vekt på individuell tilpasning og personlig service. 
              Vi bruker kun kvalitetsprodukter for å sikre best mulig resultat.
            </p>
            <p>
              Hos oss møtes du av et hyggelig team i trivelige lokaler. Vi ser frem til å 
              gi deg en fantastisk frisøropplevelse.
            </p>
          </div>
        </div>
      </section>

      {/* Tjenester Section */}
      <section id="tjenester" style={{
        padding: '4rem 2rem',
        background: 'white'
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '2.5rem',
            marginBottom: '2rem',
            textAlign: 'center',
            color: '#2c3e50',
            fontFamily: 'Georgia, serif'
          }}>
            Våre tjenester
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem'
          }}>
            {services.map((service, index) => (
              <div key={index} style={{
                padding: '1.5rem',
                border: '2px solid #ecf0f1',
                borderRadius: '8px',
                textAlign: 'center',
                transition: 'transform 0.3s, box-shadow 0.3s'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)'
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)'
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}>
                <h3 style={{
                  fontSize: '1.3rem',
                  color: '#2c3e50',
                  marginBottom: '0.5rem'
                }}>
                  {service.name}
                </h3>
                <p style={{
                  fontSize: '1.5rem',
                  color: '#3498db',
                  fontWeight: 'bold',
                  margin: 0
                }}>
                  {service.price}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bestill Time Section */}
      <section id="bestill" style={{
        padding: '4rem 2rem',
        background: '#ecf0f1'
      }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '2.5rem',
            marginBottom: '2rem',
            textAlign: 'center',
            color: '#2c3e50',
            fontFamily: 'Georgia, serif'
          }}>
            Bestill time
          </h2>
          <form onSubmit={handleSubmit} style={{
            background: 'white',
            padding: '2rem',
            borderRadius: '8px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
          }}>
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{
                display: 'block',
                marginBottom: '0.5rem',
                color: '#2c3e50',
                fontWeight: 'bold'
              }}>
                Navn *
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '2px solid #ecf0f1',
                  borderRadius: '4px',
                  fontSize: '1rem',
                  boxSizing: 'border-box'
                }}
              />
            </div>
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{
                display: 'block',
                marginBottom: '0.5rem',
                color: '#2c3e50',
                fontWeight: 'bold'
              }}>
                Telefon *
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '2px solid #ecf0f1',
                  borderRadius: '4px',
                  fontSize: '1rem',
                  boxSizing: 'border-box'
                }}
              />
            </div>
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{
                display: 'block',
                marginBottom: '0.5rem',
                color: '#2c3e50',
                fontWeight: 'bold'
              }}>
                Tjeneste *
              </label>
              <select
                required
                value={formData.service}
                onChange={(e) => setFormData({...formData, service: e.target.value})}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '2px solid #ecf0f1',
                  borderRadius: '4px',
                  fontSize: '1rem',
                  boxSizing: 'border-box'
                }}
              >
                <option value="">Velg tjeneste</option>
                {services.map((service, index) => (
                  <option key={index} value={service.name}>
                    {service.name} - {service.price}
                  </option>
                ))}
              </select>
            </div>
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{
                display: 'block',
                marginBottom: '0.5rem',
                color: '#2c3e50',
                fontWeight: 'bold'
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
                  padding: '0.75rem',
                  border: '2px solid #ecf0f1',
                  borderRadius: '4px',
                  fontSize: '1rem',
                  boxSizing: 'border-box'
                }}
              />
            </div>
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{
                display: 'block',
                marginBottom: '0.5rem',
                color: '#2c3e50',
                fontWeight: 'bold'
              }}>
                Tidspunkt *
              </label>
              <select
                required
                value={formData.time}
                onChange={(e) => setFormData({...formData, time: e.target.value})}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '2px solid #ecf0f1',
                  borderRadius: '4px',
                  fontSize: '1rem',
                  boxSizing: 'border-box'
                }}
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
            <button type="submit" style={{
              width: '100%',
              padding: '1rem',
              background: '#3498db',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              fontSize: '1.1rem',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'background 0.3s'
            }}
            onMouseOver={(e) => e.target.style.background = '#2980b9'}
            onMouseOut={(e) => e.target.style.background = '#3498db'}>
              Send bestilling
            </button>
          </form>
        </div>
      </section>

      {/* Anmeldelser Section */}
      <section id="anmeldelser" style={{
        padding: '4rem 2rem',
        background: 'white'
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '2.5rem',
            marginBottom: '2rem',
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
                background: '#ecf0f1',
                padding: '2rem',
                borderRadius: '8px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
              }}>
                <div style={{
                  color: '#f39c12',
                  fontSize: '1.5rem',
                  marginBottom: '1rem'
                }}>
                  ★★★★★
                </div>
                <p style={{
                  color: '#34495e',
                  fontSize: '1.1rem',
                  lineHeight: '1.6',
                  marginBottom: '1rem',
                  fontStyle: 'italic'
                }}>
                  &quot;{review.text}&quot;
                </p>
                <p style={{
                  color: '#7f8c8d',
                  fontWeight: 'bold',
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
        padding: '4rem 2rem',
        background: '#2c3e50',
        color: 'white'
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '2.5rem',
            marginBottom: '2rem',
            textAlign: 'center',
            fontFamily: 'Georgia, serif'
          }}>
            Kontakt oss
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            marginBottom: '2rem'
          }}>
            <div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Adresse</h3>
              <p style={{ lineHeight: '1.6', fontSize: '1.1rem' }}>
                Valkendorfsgaten 7<br />
                5012 Bergen
              </p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Åpningstider</h3>
              <p style={{ lineHeight: '1.6', fontSize: '1.1rem' }}>
                Mandag - Fredag: 09:00 - 18:00<br />
                Lørdag: 09:00 - 15:00<br />
                Søndag: Stengt
              </p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Kontakt</h3>
              <p style={{ lineHeight: '1.6', fontSize: '1.1rem' }}>
                Telefon: 55 55 55 55<br />
                E-post: post@kominnfrisor.no
              </p>
            </div>
          </div>
          <div style={{
            width: '100%',
            height: '400px',
            borderRadius: '8px',
            overflow: 'hidden'
          }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1973.8586094722742!2d5.323515!3d60.393056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x463cf9579c57c1a3%3A0x9a95c0d53e4c7f0d!2sValkendorfsgaten%207%2C%205012%20Bergen!5e0!3m2!1sno!2sno!4v1234567890"
              width="100%"
              height="400"
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
