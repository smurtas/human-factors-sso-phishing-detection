interface SamlMockupProps {
  serviceDomain: string;
  identityProvider: string;
  serviceName: string;
  email: string;
  role: string;
  secure?: boolean;
}

export function SamlMockup({
  serviceDomain,
  identityProvider,
  serviceName,
  email,
  role,
  secure = true,
}: SamlMockupProps) {
  return (
    <div className="saml-mockup">
      <div className="browser-toolbar">
        <div className="browser-controls" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>

        <div className="browser-address">
          <span
            aria-label={
              secure
                ? "Connessione HTTPS"
                : "Connessione non sicura"
            }
          >
            {secure ? "🔒" : "🔓"}
          </span>

          <span>{secure ? "https://" : "http://"}</span>
          <strong>{serviceDomain}</strong>
        </div>
      </div>

      <div className="saml-content">
        <div className="saml-service-header">
          <div
            className="saml-service-icon"
            aria-hidden="true"
          >
            🏫
          </div>

          <div>
            <h2>{serviceName}</h2>
            <p>Accesso tramite identità scolastica</p>
          </div>
        </div>

        <div className="saml-success">
          <span
            className="saml-success-icon"
            aria-hidden="true"
          >
            ✓
          </span>

          <div>
            <strong>Autenticazione completata</strong>
            <p>
              L'identità è stata verificata tramite il provider
              istituzionale.
            </p>
          </div>
        </div>

        <dl className="saml-details">
          <div>
            <dt>Identity Provider</dt>
            <dd>{identityProvider}</dd>
          </div>

          <div>
            <dt>Utente</dt>
            <dd>{email}</dd>
          </div>

          <div>
            <dt>Ruolo</dt>
            <dd>{role}</dd>
          </div>

          <div>
            <dt>Servizio</dt>
            <dd>{serviceDomain}</dd>
          </div>
        </dl>

        <div className="saml-flow">
          <span>Portale scolastico</span>
          <span aria-hidden="true">→</span>
          <span>{identityProvider}</span>
          <span aria-hidden="true">→</span>
          <span>{serviceName}</span>
        </div>

        <p className="simulation-label">
          Ambiente simulato: non vengono utilizzate credenziali
          reali.
        </p>
      </div>
    </div>
  );
}