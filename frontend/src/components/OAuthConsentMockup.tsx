import kahootLogo from "../assets/logo-kahoot.png";

type PermissionIcon =
  | "profile"
  | "email"
  | "calendar"
  | "drive"
  | "send-email"
  | "generic";

export type OAuthPermission = {
  icon: PermissionIcon;
  title: string;
  description: string;
};

type OAuthConsentMockupProps = {
  appName?: string;
  appLogo?: string;

  accountName?: string;
  accountEmail?: string;

  permissions?: OAuthPermission[];
};


/* =========================================================
   GOOGLE LOGO
   ========================================================= */

function GoogleG() {
  return (
    <div
      className="google-g"
      aria-label="Google"
    >
      G
    </div>
  );
}


/* =========================================================
   PROFILE ICON
   ========================================================= */

function ProfileIcon() {
  return (
    <svg
      className="oauth-permission-svg"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <circle
        cx="12"
        cy="12"
        r="10"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />

      <circle
        cx="12"
        cy="9"
        r="3.2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />

      <path
        d="M6.8 18c1.2-3 3-4.5 5.2-4.5s4 1.5 5.2 4.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}


/* =========================================================
   EMAIL ICON
   ========================================================= */

function EmailIcon() {
  return (
    <svg
      className="oauth-permission-svg"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <rect
        x="3"
        y="5"
        width="18"
        height="14"
        rx="1"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />

      <path
        d="M4 7l8 6 8-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}


/* =========================================================
   CALENDAR ICON
   ========================================================= */

function CalendarIcon() {
  return (
    <svg
      className="oauth-permission-svg"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <rect
        x="3.5"
        y="5"
        width="17"
        height="15"
        rx="2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />

      <path
        d="M7 3v4M17 3v4M4 9h16"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}


/* =========================================================
   DRIVE / FILE ICON
   ========================================================= */

function DriveIcon() {
  return (
    <svg
      className="oauth-permission-svg"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        d="M8 3h7l4 4v14H8z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />

      <path
        d="M15 3v5h5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}


/* =========================================================
   SEND EMAIL ICON
   ========================================================= */

function SendEmailIcon() {
  return (
    <svg
      className="oauth-permission-svg"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        d="M3 11.5L21 3l-6.5 18-3.2-6.2L3 11.5z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />

      <path
        d="M11.3 14.8L21 3"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}


/* =========================================================
   GENERIC ICON
   ========================================================= */

function GenericIcon() {
  return (
    <svg
      className="oauth-permission-svg"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <circle
        cx="12"
        cy="12"
        r="9"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />

      <path
        d="M12 8v5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />

      <circle
        cx="12"
        cy="16.5"
        r="1"
        fill="currentColor"
      />
    </svg>
  );
}


/* =========================================================
   ICON SELECTOR
   ========================================================= */

function PermissionIcon({
  type,
}: {
  type: PermissionIcon;
}) {
  switch (type) {
    case "profile":
      return <ProfileIcon />;

    case "email":
      return <EmailIcon />;

    case "calendar":
      return <CalendarIcon />;

    case "drive":
      return <DriveIcon />;

    case "send-email":
      return <SendEmailIcon />;

    default:
      return <GenericIcon />;
  }
}


/* =========================================================
   DEFAULT KAHOOT PERMISSIONS
   ========================================================= */

const defaultPermissions: OAuthPermission[] = [
  {
    icon: "profile",
    title: "Studente",
    description: "Nome e immagine del profilo",
  },
  {
    icon: "email",
    title: "studente@scuola.it",
    description: "Indirizzo email",
  },
];


/* =========================================================
   COMPONENT
   ========================================================= */

export function OAuthConsentMockup({
  appName = "Kahoot!",
  appLogo = kahootLogo,

  accountName = "Studente",
  accountEmail = "studente@scuola.it",

  permissions,
}: OAuthConsentMockupProps) {

  /*
   * Se non vengono specificati permessi,
   * utilizziamo quelli reali/minimi di Kahoot.
   *
   * Sostituiamo inoltre automaticamente i dati
   * dell'account nei permessi di profilo/email.
   */

  const displayedPermissions =
    permissions ??
    defaultPermissions.map((permission) => {
      if (permission.icon === "profile") {
        return {
          ...permission,
          title: accountName,
        };
      }

      if (permission.icon === "email") {
        return {
          ...permission,
          title: accountEmail,
        };
      }

      return permission;
    });


  return (
    <div className="oauth-browser">

      {/* =====================================================
          BROWSER BAR
          ===================================================== */}

      <div className="oauth-browser-toolbar">

        <div className="oauth-browser-controls">
          <span>●</span>
          <span>●</span>
          <span>●</span>
        </div>

        <div className="oauth-browser-address">

          <span aria-hidden="true">
            🔒
          </span>

          <strong>
            accounts.google.com
          </strong>

        </div>

      </div>


      {/* =====================================================
          GOOGLE PAGE
          ===================================================== */}

      <div className="oauth-google-page">

        <div className="oauth-google-shell">

          {/* =================================================
              HEADER
              ================================================= */}

          <div className="oauth-google-header">

            <GoogleG />

            <span>
              Accedi con Google
            </span>

          </div>

          <div className="oauth-google-divider" />


          {/* =================================================
              CONTENT
              ================================================= */}

          <div className="oauth-google-content">


            {/* =================================================
                LEFT COLUMN
                ================================================= */}

            <section className="oauth-google-left">

              <div className="oauth-app-logo">

                <img
                  src={appLogo}
                  alt={`${appName} logo`}
                />

              </div>


              <h1>
                Accedi a {appName}
              </h1>


              <button
                type="button"
                className="oauth-account-chip"
              >

                <span className="oauth-account-avatar">
                  {accountName.charAt(0).toUpperCase()}
                </span>

                <span>
                  {accountEmail}
                </span>

                <span
                  className="oauth-account-arrow"
                  aria-hidden="true"
                >
                  ▾
                </span>

              </button>

            </section>


            {/* =================================================
                RIGHT COLUMN
                ================================================= */}

            <section className="oauth-google-right">

              <h2>
                Google consentirà a{" "}
                <strong>{appName}</strong>{" "}
                di accedere a queste informazioni su di te
              </h2>


              {/* ===============================================
                  PERMISSIONS
                  =============================================== */}

              <div className="oauth-google-permissions">

                {displayedPermissions.map(
                  (permission, index) => (

                    <div
                      key={`${permission.title}-${index}`}
                      className="oauth-google-permission"
                    >

                      <div className="oauth-permission-symbol">

                        <PermissionIcon
                          type={permission.icon}
                        />

                      </div>


                      <div>

                        <strong>
                          {permission.title}
                        </strong>

                        <span>
                          {permission.description}
                        </span>

                      </div>

                    </div>

                  ),
                )}

              </div>


              {/* ===============================================
                  GOOGLE INFORMATION
                  =============================================== */}

              <div className="oauth-google-info">

                <p>
                  Leggi le{" "}

                  <a
                    href="#"
                    onClick={(event) =>
                      event.preventDefault()
                    }
                  >
                    norme sulla privacy
                  </a>

                  {" "}e i{" "}

                  <a
                    href="#"
                    onClick={(event) =>
                      event.preventDefault()
                    }
                  >
                    Termini di servizio
                  </a>

                  {" "}di {appName} per capire in che
                  modo {appName} elaborerà e proteggerà
                  i tuoi dati.
                </p>


                <p>
                  Per apportare modifiche in qualsiasi
                  momento, accedi al tuo{" "}

                  <a
                    href="#"
                    onClick={(event) =>
                      event.preventDefault()
                    }
                  >
                    Account Google
                  </a>.
                </p>


                <p>
                  Scopri di più su{" "}

                  <a
                    href="#"
                    onClick={(event) =>
                      event.preventDefault()
                    }
                  >
                    Accedi con Google
                  </a>.
                </p>

              </div>


              {/* ===============================================
                  ACTIONS
                  =============================================== */}

              <div className="oauth-google-actions">

                <button
                  type="button"
                  className="oauth-google-action"
                >
                  Annulla
                </button>

                <button
                  type="button"
                  className="oauth-google-action"
                >
                  Continua
                </button>

              </div>

            </section>

          </div>

        </div>


        {/* =====================================================
            FOOTER
            ===================================================== */}

        <footer className="oauth-google-footer">

          <button type="button">

            Italiano

            <span aria-hidden="true">
              ▾
            </span>

          </button>


          <div>
            <span>Guida</span>
            <span>Privacy</span>
            <span>Termini</span>
          </div>

        </footer>

      </div>

    </div>
  );
}