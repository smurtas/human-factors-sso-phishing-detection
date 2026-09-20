import googleLogo from "../assets/logoG_google.png";

export function GoogleUpdatedLoginMockup() {
  return (
    <div className="google-updated-browser">
      <div className="browser-toolbar">
        <div className="browser-controls" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>

        <div className="browser-address">
          <span aria-label="Connessione HTTPS">🔒</span>
          <span>https://</span>
          <strong>accounts.google.com</strong>
        </div>
      </div>

      <div className="google-updated-page">
        <div className="google-updated-card">
          <div className="google-updated-intro">
            <img
              src={googleLogo}
              alt="Google"
              className="google-updated-logo"
            />

            <h2>Accedi</h2>

            <p>
              Utilizza il tuo Account Google
            </p>
          </div>

          <div className="google-updated-form">
            <div className="google-updated-input">
              <span>Email o telefono</span>
            </div>

            <button
              type="button"
              className="google-forgot-link"
              tabIndex={-1}
            >
              Hai dimenticato l'email?
            </button>

            <p className="google-guest-text">
              Non si tratta del tuo computer? Utilizza la
              modalità Ospite per accedere in privato.
            </p>

            <button
              type="button"
              className="google-info-link"
              tabIndex={-1}
            >
              Scopri di più sull'utilizzo della modalità Ospite
            </button>

            <div className="google-updated-actions">
              <button
                type="button"
                className="google-create-account"
                tabIndex={-1}
              >
                Crea un account
              </button>

              <button
                type="button"
                className="google-next-button"
                tabIndex={-1}
              >
                Avanti
              </button>
            </div>
          </div>
        </div>

        <div className="google-updated-footer">
          <span>Italiano</span>

          <div>
            <span>Guida</span>
            <span>Privacy</span>
            <span>Termini</span>
          </div>
        </div>

        <p className="simulation-label">
          Schermata simulata: non inserire credenziali.
        </p>
      </div>
    </div>
  );
}