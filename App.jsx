const benefits = [
  {
    title: 'Hochwertiger Auftritt für Events',
    text: 'MALU fügt sich mit klarem, modernem Look nahtlos in hochwertige Veranstaltungen, Märkte, Messen und Festivals ein.',
  },
  {
    title: 'Zuverlässig & professionell',
    text: 'Klare Abläufe, ein fokussiertes Sortiment und strukturierte Prozesse sorgen für kurze Wartezeiten und einen reibungslosen Ablauf.',
  },
  {
    title: 'Mehr als ein Foodtruck',
    text: 'MALU ist ein bewusst gestaltetes, mobiles Getränkekonzept, das Menschen zusammenbringt und das Gesamtbild eines Events sichtbar aufwertet.',
  },
  {
    title: 'Social-Media-Potenzial',
    text: 'Unser Branding, unsere Ästhetik und unsere Getränke schaffen Inhalte, die Gäste gerne fotografieren, teilen und mit eurem Event verbinden.',
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
      <header className="site-header">
        <div className="container header-inner">
       <div>
  <img src="/MALU_Logo_braun.png" alt="MALU Logo" className="logo" />
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
          <div className="container hero-grid">
            <div className="hero-copy">
              <span className="eyebrow-pill">Für Events, Märkte, Messen & Festivals</span>
              <h1>Mobile Kaffeekultur für Events, die in Erinnerung bleiben.</h1>
              <p className="lead">
                MALU steht für Qualität, Leichtigkeit und eine moderne Kaffeekultur, die den
                Menschen in den Mittelpunkt stellt. Wir bringen hochwertigen Kaffee, Matcha,
                moderne Getränkevariationen und frische Säfte dorthin, wo Menschen
                zusammenkommen.
              </p>
              <p>
                Kein klassischer Foodtruck. Sondern ein mobiles Getränkekonzept mit urbaner
                Ästhetik, klaren Abläufen und echter Nähe zur Community.
              </p>
              <div className="button-group">
                <a className="button button-primary" href="mailto:info@malu2go.de?subject=Eventanfrage%20MALU">
                  Event anfragen
                </a>
                <a className="button button-secondary" href="#ueber-uns">
                  Mehr über uns
                </a>
              </div>
            </div>

            <div className="hero-cards">
              <article className="card card-highlight card-span-2">
                <p className="section-label">Unser Konzept</p>
                <p>
                  Wenige, bewusst ausgewählte Produkte. Klare Prozesse. Ruhige, moderne
                  Ästhetik. So schaffen wir Genussmomente mit Substanz – offen, herzlich und
                  professionell.
                </p>
              </article>

              <article className="card">
                <p className="section-label">Sortiment</p>
                <ul className="tag-list">
                  {offerings.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>

              <article className="card">
                <p className="section-label">Mobil einsetzbar</p>
                <p>
                  Flexibel auf Wochenmärkten, an Universitäten, bei Firmenevents, Messen,
                  Festivals und weiteren Formaten, die ein modernes Getränkeangebot brauchen.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section id="warum-malu" className="section section-white">
          <div className="container">
            <div className="section-intro max-width-text">
              <p className="section-label">Warum MALU?</p>
              <h2>
                Weil gute Events nicht nur organisiert, sondern auch atmosphärisch erlebbar
                gemacht werden.
              </h2>
              <p>
                MALU bringt nicht einfach Getränke mit – wir bringen Ruhe, Qualität und ein
                modernes Lebensgefühl in euer Eventformat. Unser Auftritt ist klar, hochwertig
                und nahbar. Dadurch entstehen kurze Genussmomente, die Gästen positiv im
                Gedächtnis bleiben und Veranstaltungen spürbar aufwerten.
              </p>
            </div>

            <div className="grid grid-4">
              {benefits.map((benefit) => (
                <article className="card soft-card" key={benefit.title}>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container two-column-layout">
            <article className="card dark-card">
              <p className="section-label section-label-dark">Markenwerte</p>
              <h2>Wofür MALU steht</h2>
              <p>
                Unsere Marke basiert auf klaren Werten, die unser Handeln, unseren Umgang mit
                Menschen und unseren Markenauftritt prägen. Sie bilden das Fundament von allem,
                was wir tun.
              </p>
              <div className="grid grid-2 compact-grid">
                {values.map((value) => (
                  <div className="value-box" key={value}>
                    {value}
                  </div>
                ))}
              </div>
            </article>

            <article className="card">
              <p className="section-label">Für wen wir da sind</p>
              <h2>Unsere Zielgruppe</h2>
              <p>
                MALU richtet sich an Menschen, die sich im Alltag bewusst kleine Pausen
                schaffen möchten – und an Veranstalter, die ein modernes, ästhetisches und
                verlässliches Getränkeangebot für ihr Publikum suchen.
              </p>
              <ul className="tag-list target-list">
                {targetGroups.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section id="ueber-uns" className="section section-alt">
          <div className="container two-column-layout">
            <div>
              <p className="section-label">Über uns</p>
              <h2>Wir sind Marie und Laurids.</h2>
              <p className="lead-text">
                Ein junges Ehepaar aus Essen – und die Gründer von MALU. Gemeinsam mit
                unserem Hund Frieda leben wir einen offenen, bewussten Lebensstil und die
                Überzeugung, dass Arbeit, Kreativität und Lebensfreude zusammengehören.
              </p>
              <p>
                MALU ist aus dem Wunsch entstanden, unsere Haltung zum Leben in ein eigenes
                Konzept zu übersetzen: offen, herzlich und nahbar. Wir wollten einen Ort
                schaffen, an dem Menschen kurz ankommen können – unabhängig davon, wo sie
                herkommen, wie ihr Tag war oder wie schnell sich der Alltag gerade anfühlt.
              </p>
            </div>

            <article className="card">
              <h3>Unsere Motivation</h3>
              <p>
                Für uns ist MALU mehr als ein mobiles Getränkekonzept. Es ist ein
                Herzensprojekt, in dem wir unsere Kreativität ausleben und gleichzeitig einen
                Raum für Begegnung, Genuss und kleine Pausen im Alltag schaffen.
              </p>
              <p>
                Wir glauben daran, dass es in einer schnelllebigen und oft stressigen Zeit
                wichtig ist, Momente zu schaffen, in denen man kurz durchatmen und alles um
                sich herum vergessen kann.
              </p>
              <div className="inner-box">
                <h4>Was uns als Team ausmacht</h4>
                <p>
                  Als Gründerpaar ergänzen wir uns auf natürliche Weise. Wir verbinden ein
                  starkes Gespür für Marke, Design und Ästhetik mit Organisation, Struktur und
                  einem klaren Blick für Wirtschaftlichkeit.
                </p>
              </div>
            </article>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <article className="card callout-card">
              <div>
                <p className="section-label">Event Booking</p>
                <h2>Ihr plant ein Event und sucht ein mobiles Kaffee- und Getränkekonzept?</h2>
                <p>
                  Dann lasst uns sprechen. Wir freuen uns über Anfragen für Firmenveranstaltungen,
                  Märkte, Messen, Festivals, Uni-Events und weitere Formate, bei denen Qualität,
                  Atmosphäre und ein stimmiger Auftritt wichtig sind.
                </p>
              </div>
              <a className="button button-primary" href="mailto:info@malu2go.de?subject=Anfrage%20Eventbuchung%20MALU">
                Jetzt anfragen
              </a>
            </article>
          </div>
        </section>
      </main>

      <footer id="kontakt" className="site-footer">
        <div className="container footer-grid">
          <div>
            <div className="brand">MALU</div>
            <p className="footer-copy">
              Modernes mobiles Getränkekonzept für hochwertige Events und echte Genussmomente.
            </p>
          </div>
          <div>
            <p className="section-label">Kontakt</p>
            <div className="contact-list">
              <p>Marie & Laurids Kleebolte</p>
              <p>Im Hesgarten 2</p>
              <p>45239 Essen</p>
              <p>
                <a href="mailto:info@malu2go.de">info@malu2go.de</a>
              </p>
              <p>
                <a href="tel:+4917664701484">0176 64701484</a>
              </p>
            </div>
          </div>
          <div>
            <p className="section-label">Kurz gesagt</p>
            <p className="footer-copy">
              MALU steht für Qualität, Leichtigkeit und eine moderne Kaffeekultur, die Menschen
              in den Mittelpunkt stellt.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
