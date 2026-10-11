import trentinoLogo from "../assets/logo-Trentino.png";
import patLogo from "../assets/logoPAT.png";
import spidLogo from "../assets/logo-spid.png";
import cieLogo from "../assets/logo-cie.png";
import cpsLogo from "../assets/logo-cps.png";
import isiLogo from "../assets/logo-isi.png";


interface RelLoginMockupProps {
  onUserClick?: () => void;
  onSpidClick?: () => void;
  onCieClick?: () => void;
  onCpsClick?: () => void;
}

export function RelLoginMockup({
  onUserClick,
  onSpidClick,
  onCieClick,
  onCpsClick,
}: RelLoginMockupProps) {
  return (
    <div className="rel-browser">
      <div className="browser-toolbar">
        <div className="browser-controls" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>

        <div className="browser-address">
          <span>🔒</span>
          <span>https://</span>
          <strong>
            istruzione.cloud.provincia.tn.it/apps/famiglia/it/login
          </strong>
        </div>
      </div>

      <div className="rel-page">
        <header className="rel-pat-header">
          <strong>Provincia Autonoma di Trento</strong>

          <div className="rel-trentino-logo">
            <img src={trentinoLogo} alt="Trentino" />
          </div>
        </header>

        <div className="rel-titlebar">
          <div className="rel-header-logo" aria-hidden="true">
            {/* Logo/stemma PAT da inserire successivamente */}
            <img src={patLogo} alt="" />
          </div>

          <div>
            <h1>Registro elettronico FAMIGLIA</h1>
            <p>Sistema informativo della scuola trentina</p>
          </div>

          <span className="rel-menu" aria-hidden="true">
            ☰
          </span>
        </div>

        <div className="rel-options">
          {/* UTENTE E PASSWORD */}
          <section className="rel-login-card">
            <h2>
              <span>●</span> Utente e password
            </h2>

            <p>Accedi con le credenziali personali</p>

            <button
              type="button"
              className="rel-user-button"
              onClick={onUserClick}
            >
              <img
                src={isiLogo}
                alt="SPID"
                className="rel-button-logo"
              />
                <span className="rel-button-text">

              Entra con Utente</span>
            </button>

            <p className="rel-card-text">
              Se sei un nuovo utente o hai dimenticato la password{" "}
              <u>accedi qui</u>.
            </p>

            <small>
              L'accesso con utente e password è disponibile secondo le
              modalità previste dal servizio.
            </small>
          </section>

          {/* SPID */}
          <section className="rel-login-card">
            <h2>
              <span>●</span> SPID
            </h2>

            <p>Accedi con il Sistema Pubblico di Identità Digitale</p>

            <button
              type="button"
              className="rel-spid-button"
              onClick={onSpidClick}
            >
              <img
                src={spidLogo}
                alt="SPID"
                className="rel-button-logo"
              />
                <span className="rel-button-text">

              Entra con SPID</span>
            </button>

            <a
              href="#"
              onClick={(event) => event.preventDefault()}
            >
              Maggiori informazioni
            </a>
          </section>

          {/* CPS / CNS */}
          <section className="rel-login-card">
            <h2>
              <span>●</span> CPS oppure CNS
            </h2>

            <p>Accedi con la tessera sanitaria</p>

            <button
              type="button"
              className="rel-cps-button"
              onClick={onCpsClick}
            >
              { <img
                src={cpsLogo}
                alt="CPS/CNS"
                className="rel-button-logo"
              /> }
                <span className="rel-button-text">

              Entra con CPS/CNS</span>
            </button>

            <p className="rel-card-text">
              Security Card non consentita
            </p>

            <a
              href="#"
              onClick={(event) => event.preventDefault()}
            >
              Maggiori informazioni
            </a>
          </section>

          {/* CIE */}
          <section className="rel-login-card">
            <h2>
              <span>●</span> CIE
            </h2>

            <p>
              Utilizza le tue credenziali CIE
              (Carta di identità elettronica).
            </p>

            <button
              type="button"
              className="rel-cie-button"
              onClick={onCieClick}
            >
              { <img
                src={cieLogo}
                alt="CIE"
                className="rel-button-logo"
              /> }
            <span className="rel-button-text">

              Entra con CIE </span>
            </button>

            <a
              href="#"
              onClick={(event) => event.preventDefault()}
            >
              Maggiori informazioni
            </a>
          </section>
        </div>
      </div>
    </div>
  );
}