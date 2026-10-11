interface BuonarrotiGestOreMockupProps {
  onGoogleClick?: () => void;
  onMastercomClick?: () => void;
  onSpidClick?: () => void;
  onCieClick?: () => void;
}

export function BuonarrotiGestOreMockup({
  onGoogleClick,
  onMastercomClick,
  onSpidClick,
  onCieClick,
}: BuonarrotiGestOreMockupProps) {
  return (
    <div className="gestore-browser">
      <div className="browser-toolbar">
        <div className="browser-controls" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>

        <div className="browser-address">
          <span>🔒</span>
          <span>https://</span>
          <strong>buonarroti.tn.it/GestOre/</strong>
        </div>
      </div>

      <div className="gestore-page">
        <header className="gestore-heading">
          <div className="gestore-school-logo">
            <span className="gestore-school-symbol">B</span>

            <div>
              <strong>Buonarroti</strong>
              <small>Istituto Tecnico Tecnologico Trento</small>
            </div>
          </div>

          <h1>GestOre</h1>

          <p>
            Sportelli · Permessi · Corsi · Carenze · Gestione Ore ·
            Programmi
          </p>
        </header>

        <button
          type="button"
          className="gestore-passkey"
        >
          🔒&nbsp;&nbsp; Entra con impronta / passkey
        </button>

        <div className="gestore-login-grid">
          {/* GOOGLE */}
          <section className="gestore-column gestore-column-google">
            <div className="gestore-column-label">
              Accesso con account Google
            </div>

            <h2>Google: docenti, ATA, studenti e genitori</h2>

            <div className="gestore-info-box gestore-info-google">
              Usa questa colonna se hai un account Google oppure
              se sei docente, ATA o studente.
            </div>

            <p>
              Accesso con account Google. Se la mail è presente
              in GestOre, l'utente viene riconosciuto.
            </p>

            <ul>
              <li>Docenti, Dirigente, Amministratori</li>
              <li>Personale ATA</li>
              <li>Studenti</li>
              <li>Genitori con account Google</li>
              <li>Esterni autorizzati</li>
            </ul>

            <button
              type="button"
              className="gestore-google-button"
              onClick={onGoogleClick}
            >
              <span className="gestore-google-icon">G</span>
              Continua con Google
            </button>

            <small>
              Se non riesci ad accedere con il tuo account Google
              contatta il supporto della scuola.
            </small>
          </section>

          {/* MASTERCOM */}
          <section className="gestore-column gestore-column-mastercom">
            <div className="gestore-column-label">
              Solo genitori - Registro elettronico
            </div>

            <h2>MasterCom: solo genitori</h2>

            <div className="gestore-info-box gestore-info-mastercom">
              Usa questa colonna solo se sei genitore e vuoi entrare
              con le credenziali MasterCom.
            </div>

            <p>
              Docenti, personale ATA e studenti devono usare
              la colonna Google a sinistra.
            </p>

            <input
              type="text"
              placeholder="Username genitore MasterCom"
              aria-label="Username MasterCom"
            />

            <input
              type="password"
              placeholder="Password (MasterCom)"
              aria-label="Password MasterCom"
            />

            <button
              type="button"
              className="gestore-mastercom-button"
              onClick={onMastercomClick}
            >
              ↪&nbsp;&nbsp; Entra con MasterCom
            </button>
          </section>

          {/* SPID / CIE */}
          <section className="gestore-column gestore-column-identity">
            <div className="gestore-column-label">
              Identità digitale
            </div>

            <h2>SPID e CIE</h2>

            <div className="gestore-info-box">
              Entra con identità digitale.
            </div>

            <p>
              Usa questa colonna per accedere con Sistema Pubblico
              di Identità Digitale o Carta di Identità Elettronica.
            </p>

            <button
              type="button"
              className="gestore-spid-button"
              onClick={onSpidClick}
            >
              <strong>SPID</strong>
              <span>Entra con SPID</span>
            </button>

            <button
              type="button"
              className="gestore-cie-button"
              onClick={onCieClick}
            >
              <strong>CIE</strong>
              <span>Entra con CIE</span>
            </button>

            <small>
              Disponibile per gli utenti abilitati al servizio.
            </small>
          </section>
        </div>
      </div>
    </div>
  );
}