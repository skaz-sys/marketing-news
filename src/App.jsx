
import { useState } from 'react'
import './App.css'

const cards = [
  {
    id: 1,
    title: 'Lorem ipsum',
    subtitle: 'Est venenatis',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800'
  },
  {
    id: 2,
    title: 'Lorem ipsum',
    subtitle: 'Est venenatis',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800'
  },
  {
    id: 3,
    title: 'Lorem ipsum',
    subtitle: 'Est venenatis',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800'
  }
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="page">

      {/* HEADER */}
      <header className="header">
        <div className="header-inner">

          <div className="logo">
            <div className="logo-circle"></div>
            <span>My Company</span>
          </div>

          <button
            className="burger"
            type="button"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

          <nav className={`nav ${menuOpen ? 'nav-open' : ''}`}>
            <a href="#home">Menu1</a>
            <a href="#news">Menu2</a>
            <a href="#news">Menu3</a>
            <button className="login-btn" type="button">Login</button>
          </nav>

        </div>
      </header>

      {/* HERO */}
      <main id="home">
        <section className="hero">
          <div className="hero-inner">

            <div className="hero-top">
              <h1>
                Lorem ipsum
                <br />
                dolor sit amet
              </h1>

              <img
                className="hero-image"
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900"
                alt="Team working together"
              />
            </div>

            {/* SEARCH */}
            <form
              className="search-bar"
              onSubmit={(e) => e.preventDefault()}
            >
              <input type="text" aria-label="Search" />
              <button type="submit">SEARCH</button>
            </form>

          </div>
        </section>

        {/* NEWS CARDS */}
        <section className="cards-section" id="news">
          <div className="cards-grid">

            {cards.map((card) => (
              <article className="card" key={card.id}>

                <img
                  src={card.image}
                  alt="News"
                  className="card-image"
                />

                <div className="card-text">
                  <h3>{card.title}</h3>
                  <p>{card.subtitle}</p>
                </div>

              </article>
            ))}

          </div>
        </section>
      </main>

    </div>
  )
}

export default App
