import { EduHubPage } from "../pages/EduHubPage";

export function UC10Scenario() {

  /*
   * =========================================================
   * MICROSOFT VERSION
   * =========================================================
   *
   * If this scenario were presented in a Microsoft Teams
   * context, the following Microsoft Authenticator interface
   * could be used instead of the Google verification prompt.
   *
   * <div className="uc10-auth-header">
   *
   *   <div className="uc10-ms-logo">
   *     <span />
   *     <span />
   *     <span />
   *     <span />
   *   </div>
   *
   *   <div>
   *     <strong>Microsoft Authenticator</strong>
   *     <span>Adesso</span>
   *   </div>
   *
   * </div>
   *
   *
   * <div className="uc10-auth-content">
   *
   *   <div className="uc10-shield">
   *     ✓
   *   </div>
   *
   *   <h2>
   *     Approvare l'accesso?
   *   </h2>
   *
   *   <p className="uc10-account">
   *     studente@scuola.it
   *   </p>
   *
   *
   *   <div className="uc10-login-details">
   *
   *     <div>
   *       <span>Applicazione</span>
   *       <strong>Microsoft 365</strong>
   *     </div>
   *
   *     <div>
   *       <span>Posizione</span>
   *       <strong>Italia</strong>
   *     </div>
   *
   *     <div>
   *       <span>Dispositivo</span>
   *       <strong>Browser web</strong>
   *     </div>
   *
   *   </div>
   *
   *
   *   <p className="uc10-question">
   *     Stai tentando di accedere?
   *   </p>
   *
   *
   *   <button
   *     type="button"
   *     className="uc10-approve-button"
   *   >
   *     Approva
   *   </button>
   *
   *
   *   <button
   *     type="button"
   *     className="uc10-deny-button"
   *   >
   *     Rifiuta
   *   </button>
   *
   *
   *   <p className="uc10-help">
   *     Se non riconosci questa richiesta,
   *     puoi rifiutarla.
   *   </p>
   *
   * </div>
   */


  return (
    <div className="uc10-scene">

      <div className="uc10-desktop-background">

        {/* Familiar EduHub / Google Classroom context */}
        <div className="uc10-school-service">
          <EduHubPage />
        </div>


        {/* Smartphone displaying the unexpected MFA request */}
        <div className="uc10-phone">

          {/* Smartphone speaker / notch */}
          <div className="uc10-phone-speaker" />


          <div className="uc10-phone-screen">

            {/* Smartphone status bar */}
            <div className="uc10-status-bar">
              <span>18:42</span>
              <span>●●● Wi-Fi ▰</span>
            </div>


            {/*
             * =========================================================
             * GOOGLE VERSION
             * =========================================================
             *
             * This version is used in UC10 because the participant
             * is working in the EduHub / Google Classroom context.
             *
             * The Google interface itself is legitimate-looking.
             * The anomaly is that the MFA request appears even though
             * the participant has not initiated a new sign-in.
             */}


            {/* Google verification header */}
            <div className="uc10-auth-header">

              <div className="uc10-google-logo">
                <span className="uc10-google-g">
                  G
                </span>
              </div>

              <div>
                <strong>
                  Google
                </strong>

                <span>
                  Verifica in due passaggi
                </span>
              </div>

            </div>


            {/* Google MFA request */}
            <div className="uc10-auth-content">

              <div className="uc10-shield">
                ✓
              </div>


              <h2>
                Stai tentando di accedere?
              </h2>


              <p className="uc10-account">
                studente@scuola.it
              </p>


              {/* Sign-in details */}
              <div className="uc10-login-details">

                <div>
                  <span>Applicazione</span>
                  <strong>Google Workspace</strong>
                </div>

                <div>
                  <span>Dispositivo</span>
                  <strong>Chrome su macOS</strong>
                </div>

                <div>
                  <span>Posizione</span>
                  <strong>Trento, Italia</strong>
                </div>

              </div>


              <p className="uc10-question">
                Confermi questo tentativo di accesso?
              </p>


              {/* Approval action */}
              <button
                type="button"
                className="uc10-approve-button"
              >
                Sì, sono io
              </button>


              {/* Rejection action */}
              <button
                type="button"
                className="uc10-deny-button"
              >
                No, non sono io
              </button>


              {/* Standard security guidance */}
              <p className="uc10-help">
                Se non hai effettuato tu questo tentativo
                di accesso, seleziona "No, non sono io".
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}