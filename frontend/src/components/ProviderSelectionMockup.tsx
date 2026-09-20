 interface Provider {
  name: string;
  domain: string;
}

interface ProviderSelectionMockupProps {
  serviceName: string;
  serviceDomain: string;
  providers: Provider[];
  selectedProvider?: string;
}

export function ProviderSelectionMockup({
  serviceName,
  serviceDomain,
  providers,
  selectedProvider,
}: ProviderSelectionMockupProps) {
  const selected = providers.find(
    (provider) => provider.name === selectedProvider,
  );

  return (
    <div className="provider-selection-mockup">
      <div className="browser-toolbar">
        <div className="browser-controls" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>

        <div className="browser-address">
          <span aria-label="Connessione HTTPS">🔒</span>
          <span>https://</span>
          <strong>
            {selected ? selected.domain : serviceDomain}
          </strong>
        </div>
      </div>

      <div className="provider-selection-content">
        <header className="provider-selection-header">
          <div className="provider-selection-service-icon">
            PA
          </div>

          <div>
            <h2>{serviceName}</h2>
            <p>Autenticazione tramite identità digitale</p>
          </div>
        </header>

        <div className="spid-access-card">
          <div className="spid-badge">
            <strong>SPID</strong>
            <span>Identità Digitale</span>
          </div>

          <h3>Entra con SPID</h3>

          <p>
            Seleziona il tuo Identity Provider per continuare.
          </p>

          <div className="spid-provider-list">
            {providers.map((provider) => (
              <div
                key={provider.name}
                className={[
                  "spid-provider",
                  provider.name === selectedProvider
                    ? "spid-provider--selected"
                    : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                <div className="spid-provider-icon">
                  {provider.name.charAt(0)}
                </div>

                <div>
                  <strong>{provider.name}</strong>

                  {provider.name === selectedProvider && (
                    <small>
                      Reindirizzamento a {provider.domain}
                    </small>
                  )}
                </div>

                <span
                  className="spid-provider-arrow"
                  aria-hidden="true"
                >
                  ›
                </span>
              </div>
            ))}
          </div>

          <p className="provider-selection-help">
            L'accesso verrà completato sul sito del provider
            selezionato.
          </p>
        </div>

        <p className="simulation-label">
          Ambiente simulato: non vengono utilizzate credenziali
          reali.
        </p>
      </div>
    </div>
  );
}