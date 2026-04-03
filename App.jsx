import logo from './logo.png'

const benefits = [
  {
    title: 'Hochwertiger Auftritt für Events',
    text: 'MALU fügt sich mit klarem, modernem Look nahtlos in hochwertige Veranstaltungen, Märkte, Messen und Festivals ein.',
  },
  {
    title: 'Zuverlässig & professionell',
    text: 'Klare Abläufe sorgen für kurze Wartezeiten und einen reibungslosen Ablauf.',
  },
]

export default function App() {
  return (
    <div className="site-shell">

      <header className="site-header">
        <div className="container header-inner">

          <div className="header-left">
            <img src={logo} alt="MALU Logo" className="logo" />
          </div>

          <nav className="nav">
            <a href="#start">Start</a>
            <a href="#warum-malu">Warum MALU?</a>
            <a href="#ueber-uns">Über uns</a>
            <a href="#kontakt">Kontakt</a>
          </nav>

        </div>
      </header>

      <main>

        <section id="start" className="hero-section">
          <div className="container">
            <h1>Mobile Kaffeekultur für Events</h1>
            <p>MALU bringt hochwertigen Kaffee und moderne Getränke auf euer Event.</p>
          </div>
        </section>

      </main>

    </div>
  )
}
