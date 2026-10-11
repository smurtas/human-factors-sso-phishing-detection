export function UC08Scenario() {
  return (
    <div className="uc08-flow">

      <div className="uc08-browser">

        {/* Browser toolbar */}
        <div className="uc08-browser-toolbar">

          <div
            className="uc08-browser-controls"
            aria-hidden="true"
          >
            <span />
            <span />
            <span />
          </div>

          <div className="uc08-browser-address">

            <span
              className="uc08-lock"
              aria-hidden="true"
            >
              🔒
            </span>

            <strong>
              google.classroom-login.com
            </strong>

            <span>
              /signin
            </span>

          </div>

        </div>


        {/* Page */}
        <div className="uc08-page">

          <div className="uc08-login-card">

            {/* Google wordmark */}
            <div
              className="uc08-google-logo"
              aria-label="Google"
            >
              <span className="uc08-google-g">G</span>
              <span className="uc08-google-o1">o</span>
              <span className="uc08-google-o2">o</span>
              <span className="uc08-google-g2">g</span>
              <span className="uc08-google-l">l</span>
              <span className="uc08-google-e">e</span>
            </div>


            {/* Classroom identity */}
            <div className="uc08-classroom-brand">

              <div
                className="uc08-classroom-icon"
                aria-hidden="true"
              >
                <div className="uc08-classroom-board">

                  <span className="uc08-classroom-head" />

                  <span className="uc08-classroom-body" />

                  <span className="uc08-classroom-person-left" />

                  <span className="uc08-classroom-person-right" />

                </div>
              </div>

              <span>
                Google Classroom
              </span>

            </div>


            <h1>
              Accedi
            </h1>

            <p className="uc08-login-subtitle">
              Continua su Google Classroom
            </p>


            {/* Email field */}
            <div className="uc08-email-field">

              <span>
                Email o telefono
              </span>

            </div>


            <button
              type="button"
              className="uc08-forgot-link"
            >
              Hai dimenticato l'indirizzo email?
            </button>


            <p className="uc08-school-context">
              Utilizza il tuo account scolastico per accedere
              ai corsi, ai materiali e alle attività didattiche.
            </p>


            <div className="uc08-login-actions">

              <button
                type="button"
                className="uc08-create-account"
              >
                Crea account
              </button>

              <button
                type="button"
                className="uc08-next-button"
              >
                Avanti
              </button>

            </div>

          </div>


          <div className="uc08-google-footer">

            <span>
              Italiano
            </span>

            <div>
              <span>Guida</span>
              <span>Privacy</span>
              <span>Termini</span>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}