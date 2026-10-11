type UC09ScenarioProps = {
  onEvaluate?: () => void;
};

export function UC09Scenario({
  onEvaluate,
}: UC09ScenarioProps) {
  return (
    <div className="uc09-flow">

      <div className="spid-selection-browser">

        {/* Browser bar */}
        <div className="spid-browser-toolbar">

          <div className="spid-browser-controls">
            <span>●</span>
            <span>●</span>
            <span>●</span>
          </div>

          <div className="spid-browser-address">
            <span>🔒</span>

            <strong>
              istruzione.cloud.provincia.tn.it
            </strong>

            <span>
              /apps/famiglia/it/login
            </span>
          </div>

        </div>


        {/* Pagina */}
        <div className="spid-selection-page">

          <div className="spid-selection-panel">

            {/* Header SPID */}
            <div className="spid-main-button">

              <div className="spid-person-icon">
                👤
              </div>

              <span>
                Entra con SPID
              </span>

            </div>


            <div className="spid-provider-list">

              {/* Poste-like */}
              <button
                type="button"
                className="spid-provider-row"
              >
                <div className="mock-poste-logo">
                  <span className="mock-poste-word">
                    Poste
                  </span>

                  <span className="mock-poste-id">
                    ID
                  </span>

                  <span className="mock-spid-small">
                    spid
                  </span>
                </div>
              </button>


              {/* InfoCert-like */}
              <button
                type="button"
                className="spid-provider-row"
              >
                <div className="mock-infocert-logo">

                  <span className="mock-info">
                    Info
                  </span>

                  <span className="mock-cert">
                    Cert
                  </span>

                  <span className="mock-infocert-id">
                    ID
                  </span>

                </div>
              </button>


              {/* Aruba-like */}
              <button
                type="button"
                className="spid-provider-row"
              >
                <div className="mock-aruba-logo">

                  <span className="mock-aruba-word">
                    aruba.it
                  </span>

                  <span className="mock-aruba-id">
                    ID
                  </span>

                </div>
              </button>


              {/* Lepida-like */}
              <button
                type="button"
                className="spid-provider-row"
              >
                <div className="mock-lepida-logo">

                  <span className="mock-lepida-symbol">
                    ●
                  </span>

                  <span>
                    lepida
                  </span>

                  <strong>
                    ID
                  </strong>

                </div>
              </button>


              {/* Provider inventato */}
              <button
                type="button"
                className="spid-provider-row"
              >
                <div className="mock-civica-logo">

                  <span className="mock-civica-symbol">
                    C
                  </span>

                  <span className="mock-civica-name">
                    Civica
                  </span>

                  <strong>
                    ID
                  </strong>

                  <span className="mock-civica-spid">
                    spid
                  </span>

                </div>
              </button>


              {/* Sielte-like */}
              <button
                type="button"
                className="spid-provider-row"
              >
                <div className="mock-sielte-logo">

                  <span className="mock-sielte-symbol">
                    ≋
                  </span>

                  <strong>
                    SIELTE
                  </strong>

                  <span>
                    id
                  </span>

                </div>
              </button>

            </div>

          </div>

        </div>

      </div>


      {/* Valutazione */}
      <div className="uc09-evaluation-action">

        <button
          type="button"
          className="primary-button"
          onClick={onEvaluate}
        >
          Valuta questo scenario
        </button>

      </div>

    </div>
  );
}