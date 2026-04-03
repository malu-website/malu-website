import logo from './logo.png'

const benefits = [
  {
    title: 'Hochwertiger Auftritt für Events',
    text: 'MALU fügt sich mit klarem, modernem Look nahtlos in hochwertige Veranstaltungen ein.',
  },
  {
    title: 'Zuverlässig & professionell',
    text: 'Klare Abläufe sorgen für kurze Wartezeiten und einen reibungslosen Ablauf.',
  },
  {
    title: 'Mehr als ein Foodtruck',
    text: 'Ein bewusst gestaltetes Getränkekonzept, das Menschen zusammenbringt.',
  },
  {
    title: 'Social-Media-Potenzial',
    text: 'Unser Branding lädt zum Teilen ein und erhöht die Sichtbarkeit eures Events.',
  },
]

const values = [
  'Qualität statt Masse',
  'Reduktion & Klarheit',
  'Zeitgemäße Ästhetik',
  'Nähe zur Community',
  'Verlässlichkeit & Professionalität',
]

const offerings = [
  'Hochwertiger Kaffee',
  'Matcha',
  'Moderne Getränkevariationen',
  'Frische Säfte',
]

const targetGroups = [
  'Bewusster, offener Lebensstil',
  'Interesse an Qualität und Ästhetik',
  'Urbanität und Neugier',
  'Wertschätzung für kleine Genussmomente',
  'Wunsch nach Orten, die einladen statt bewerten',
]

export default function App() {
  return (
    <div className="site-shell">

      {/* HEADER */}
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

        {/* HERO */}
        <section id="start" className="hero-section">
          <div className="container hero-grid">

            <div className="hero-copy">
              <p className="section-label">Für Events, Märkte & Festivals</p>

              <h1>
                Mobile Kaffeekultur für Events, die in Erinnerung bleiben.
              </h1>

              <p>
                MALU steht für Qualität, Leichtigkeit und eine moderne Kaffeekultur.
                Wir bringen hochwertigen Kaffee, Matcha und Getränke dorthin,
                wo Menschen zusammenkommen.
              </p>
            </div>

            <div className="hero-cards">

              <div className="card card-span-2">
                <p className="section-label">Unser Konzept</p>
                <p>
                  Wenige, hochwertige Produkte. Klare Abläufe.
                  Ein moderner, ruhiger Markenauftritt.
                </p>
              </div>

              <div className="card">
                <p className="section-label">Sortiment</p>
                <ul className="tag-list">
                  {offerings.map((o) => <li key={o}>{o}</li>)}
                </ul>
              </div>

              <div className="card">
                <p className="section-label">Mobil</p>
                <p>Flexibel einsetzbar auf Events, Märkten und Festivals.</p>
              </div>

            </div>

          </div>
        </section>

        {/* WARUM MALU */}
        <section id="warum-malu" className="section section-white">
          <div className="container">

            <p className="section-label">Warum MALU?</p>

            <h2>
              Mehr als Kaffee – ein Erlebnis für eure Gäste.
            </h2>

            <div className="grid grid-4">
              {benefits.map((b) => (
                <div className="card" key={b.title}>
                  <h3>{b.title}</h3>
                  <p>{b.text}</p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* WERTE + ZIELGRUPPE */}
        <section className="section">
          <div className="container two-column-layout">

            <div className="card dark-card">
              <p className="section-label">Markenwerte</p>
              <h2>Wofür MALU steht</h2>
              <div className="grid grid-2">
                {values.map((v) => <div key={v}>{v}</div>)}
              </div>
            </div>

            <div className="card">
              <p className="section-label">Zielgruppe</p>
              <h2>Unsere Gäste</h2>
              <ul className="tag-list">
                {targetGroups.map((t) => <li key={t}>{t}</li>)}
              </ul>
            </div>

          </div>
        </section>

        {/* ÜBER UNS */}
        <section id="ueber-uns" className="section section-alt">
          <div className="container two-column-layout">

            <div>
              <p className="section-label">Über uns</p>
              <h2>Marie & Laurids</h2>
              <p>
                MALU ist unser Herzensprojekt. Wir möchten Menschen kleine
                Genussmomente im Alltag schenken.
              </p>
            </div>

            <div className="card">
              <h3>Unsere Motivation</h3>
              <p>
                Wir glauben daran, dass es wichtig ist, Orte zu schaffen,
                an denen man kurz durchatmen kann.
              </p>
            </div>

          </div>
        </section>

        {/* KONTAKT */}
        <section id="kontakt" className="section">
          <div className="container">
            <h2>Kontakt</h2>
            <p>info@malu2go.de</p>
            <p>017664701484</p>
          </div>
        </section>

      </main>

    </div>
  )
}
