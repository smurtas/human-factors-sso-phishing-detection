export function MfaMockup() {
  return (
    <div className="mfa-card">
      <div className="mfa-card__header">
        <div className="mfa-microsoft-brand" aria-label="Microsoft">
          <div className="microsoft-logo" aria-hidden="true">
            <span className="ms-red" />
            <span className="ms-green" />
            <span className="ms-blue" />
            <span className="ms-yellow" />
          </div>
          <span className="mfa-microsoft-text">Microsoft</span>
        </div>
      </div>

      <div className="mfa-card__account">
        <span className="mfa-back-arrow" aria-hidden="true">
          ←
        </span>
        <span>nome.cognome@scuola.it</span>
      </div>

      <div className="mfa-card__body">
        <h2>Approve sign in</h2>

        <div className="mfa-card__subtitle">
          <span className="mfa-shield" aria-hidden="true">
            🛡
          </span>

          <p>
            Tap the number you see below in your
            <br />
            Microsoft Authenticator app to sign in.
          </p>
        </div>

        <div className="mfa-number-box">83</div>

        <button
          type="button"
          className="mfa-password-link"
          tabIndex={-1}
        >
          Use your password instead
        </button>
      </div>

      <p className="simulation-label">
        Schermata simulata: richiesta MFA inattesa da valutare.
      </p>
    </div>
  );
}