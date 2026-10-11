import { useState } from "react";
import googleLogo from "../assets/logoG_google.png";

export function UC06Scenario() {
  const [showPopup, setShowPopup] = useState(false);
  const [step, setStep] = useState<"account" | "password">("account");

  const email = "nome.cognome@scuola.it";

  return (
    <div className="uc06-browser">
      {/* Vera barra del browser */}
      <div className="browser-toolbar">
        <div className="browser-controls" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>

        <div className="browser-address">
          <span aria-label="Connessione HTTPS">🔒</span>
          <span>https://</span>
          <strong>didattica.scuola.it</strong>
        </div>
      </div>

      <div className="uc06-service">
        <div className="uc06-service-card">
          <h2>Area didattica</h2>

          <p>
            Accedi con il tuo account scolastico per continuare.
          </p>

          <button
            type="button"
            className="uc06-google-button"
            onClick={() => {
              setStep("account");
              setShowPopup(true);
            }}
          >
            <img src={googleLogo} alt="" />
            Accedi con Google
          </button>
        </div>

        {showPopup && (
          <div className="uc06-overlay">
            <div className="uc06-popup">
              {/* Questa barra è FINTA: fa parte della pagina */}
              <div className="uc06-popup-toolbar">
                <div className="browser-controls" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </div>

                <div className="browser-address">
                  <span>🔒</span>
                  <span>https://</span>
                  <strong>accounts.google.com</strong>
                </div>
              </div>

              <div className="google-login-page uc06-google-page">
                <section className="google-login-card">
                  <div className="google-login-intro">
                    <div className="google-logo">
                      <img
                        className="google-logo-image"
                        src={googleLogo}
                        alt="Google"
                      />
                    </div>

                    <h1>
                      {step === "account"
                        ? "Scegli un account"
                        : "Bentornato"}
                    </h1>

                    {step === "account" && (
                      <p>per continuare</p>
                    )}
                  </div>

                  <div className="google-login-form">
                    {step === "account" ? (
                      <>
                        <button
                          type="button"
                          className="uc06-account-row"
                          onClick={() => setStep("password")}
                        >
                          <span className="google-account-avatar">
                            N
                          </span>

                          <span className="uc06-account-info">
                            <strong>Nome Cognome</strong>
                            <small>{email}</small>
                          </span>
                        </button>

                        <button
                          type="button"
                          className="uc06-other-account"
                        >
                          <span className="uc06-user-icon">
                            👤
                          </span>
                          Usa un altro account
                        </button>

                        <p className="google-simulation-warning">
                          Simulazione didattica: non inserire dati reali.
                        </p>
                      </>
                    ) : (
                      <>
                        <button
                          className="google-account-chip"
                          type="button"
                          onClick={() => setStep("account")}
                        >
                          <span className="google-account-avatar">
                            N
                          </span>

                          <span>{email}</span>
                          <span aria-hidden="true">⌄</span>
                        </button>

                        <div className="google-field">
                          <input
                            id="uc06-password"
                            type="password"
                            placeholder=" "
                            autoComplete="new-password"
                          />
                          <label htmlFor="uc06-password">
                            Inserisci la password
                          </label>
                        </div>

                        <p className="google-simulation-warning">
                          Non inserire una password reale.
                        </p>

                        <div className="google-login-actions">
                          <button
                            className="google-text-button"
                            type="button"
                            onClick={() => setStep("account")}
                          >
                            Indietro
                          </button>

                          <button
                            className="google-next-button"
                            type="button"
                          >
                            Avanti
                          </button>
                        </div>
                      </>
                    )}
                  </div>
                </section>
              </div>

              <button
                type="button"
                className="uc06-close"
                onClick={() => setShowPopup(false)}
                aria-label="Chiudi"
              >
                ×
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}