import timIdLogo from "../assets/logo-timid.png";
import sielteIdLogo from "../assets/logo-sielteid.png";
import etnaIdLogo from "../assets/logo-etnaid.png";
import posteIdLogo from "../assets/logo-posteid.png";
import spidItaliaLogo from "../assets/logo-spidid.png";
import arubaIdLogo from "../assets/logo-arubaid.png";
import infoCertIdLogo from "../assets/logo-infocertid.png";
// import namirialIdLogo from "../assets/logo-namirialid.png";
import lepidaIdLogo from "../assets/logo-lepidaid.png";
import infoCamereIdLogo from "../assets/logo-infocamereid.png";
import { useMemo } from "react";
// import teamSystemIdLogo from "../assets/logo-teamsystemid.png";
// import intesiGroupLogo from "../assets/logo-intesigroup.png";


interface SamlMockupProps {
  includeFakeProvider?: boolean;
  onEvaluate?: () => void;
}


type SpidProvider = {
  id: string;
  name: string;
  logo?: string;
  fake?: boolean;
};


/* =========================================================
   REAL SPID PROVIDERS
   ========================================================= */

const realProviders: SpidProvider[] = [
  {
    id: "tim",
    name: "TIM id",
    logo: timIdLogo,
  },
  {
    id: "sielte",
    name: "SielteID",
    logo: sielteIdLogo,
  },
  {
    id: "etna",
    name: "etnaID",
    logo: etnaIdLogo,
  },
  {
    id: "poste",
    name: "PosteID",
    logo: posteIdLogo,
  },
  {
    id: "spiditalia",
    name: "SpidItalia",
    logo: spidItaliaLogo,
  },
  {
    id: "aruba",
    name: "Aruba ID",
    logo: arubaIdLogo,
  },
  {
    id: "infocert",
    name: "InfoCert ID",
    logo: infoCertIdLogo,
  },

  /*
  {
    id: "namirial",
    name: "Namirial ID",
    logo: namirialIdLogo,
  },
  */

  {
    id: "lepida",
    name: "LepidaID",
    logo: lepidaIdLogo,
  },
  {
    id: "infocamere",
    name: "InfoCamere ID",
    logo: infoCamereIdLogo,
  },

  /*
  {
    id: "teamsystem",
    name: "TeamSystem ID",
    logo: teamSystemIdLogo,
  },
  {
    id: "intesi",
    name: "Intesi Group",
    logo: intesiGroupLogo,
  },
  */
];


/* =========================================================
   FAKE PROVIDERS - ONLY UC09
   ========================================================= */

const fakeProviders: SpidProvider[] = [
  {
    id: "civica",
    name: "CivicaID",
    fake: true,
  },
  {
    id: "trentino",
    name: "TrentinoID",
    fake: true,
  },
  {
    id: "italiaconnect",
    name: "ItaliaConnect ID",
    fake: true,
  },
];


/* =========================================================
   FAKE PROVIDER LOGOS
   ========================================================= */

function FakeProviderLogo({
  provider,
}: {
  provider: SpidProvider;
}) {

  switch (provider.id) {

    /* -----------------------------
       CIVICA ID
       ----------------------------- */

    case "civica":
      return (
        <div className="fake-spid-logo fake-civica-logo">

          <div className="fake-civica-mark">
            C
          </div>

          <div className="fake-provider-word">
            Civica
            <strong>ID</strong>
          </div>

          <span className="fake-provider-spid">
            spid
          </span>

        </div>
      );


    /* -----------------------------
       TRENTINO ID
       ----------------------------- */

    case "trentino":
      return (
        <div className="fake-spid-logo fake-trentino-logo">

          <div className="fake-trentino-mark">
            T
          </div>

          <div className="fake-provider-word">
            Trentino
            <strong>ID</strong>
          </div>

          <span className="fake-provider-spid">
            spid
          </span>

        </div>
      );


    /* -----------------------------
       ITALIA CONNECT
       ----------------------------- */

    case "italiaconnect":
      return (
        <div className="fake-spid-logo fake-italiaconnect-logo">

          <div className="fake-italiaconnect-mark">
            IC
          </div>

          <div className="fake-provider-word">
            ItaliaConnect
            <strong>ID</strong>
          </div>

          <span className="fake-provider-spid">
            spid
          </span>

        </div>
      );


    default:
      return null;
  }
}


/* =========================================================
   COMPONENT
   ========================================================= */

export function SamlMockup({
  includeFakeProvider = false,
  onEvaluate,
}: SamlMockupProps) {

  /*
   * UC04:
   * solo provider reali.
   *
   * UC09:
   * stessa pagina con tre provider fittizi
   * distribuiti tra quelli reali.
   */

const providers = useMemo(() => {
  const list = includeFakeProvider
    ? [...realProviders, ...fakeProviders]
    : [...realProviders];

  // Fisher-Yates shuffle
  for (let i = list.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [list[i], list[j]] = [list[j], list[i]];
  }

  return list;
}, [includeFakeProvider]);


  return (
    <div className="uc09-flow">

      <div className="spid-selection-browser">

        {/* =====================================================
            BROWSER BAR
            ===================================================== */}

        <div className="spid-browser-toolbar">

          <div className="spid-browser-controls">
            <span>●</span>
            <span>●</span>
            <span>●</span>
          </div>


          <div className="spid-browser-address">

            <span aria-hidden="true">
              🔒
            </span>

            <strong>
              istruzione.cloud.provincia.tn.it
            </strong>

            <span>
              /apps/famiglia/it/login
            </span>

          </div>

        </div>


        {/* =====================================================
            SPID PAGE
            ===================================================== */}

        <div className="spid-selection-page">

          <div className="spid-selection-panel">


            {/* =================================================
                MAIN SPID BUTTON
                ================================================= */}

            <div className="spid-main-button">

              <div className="spid-person-icon">

                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >

                  <circle
                    cx="12"
                    cy="8"
                    r="4"
                    fill="currentColor"
                  />

                  <path
                    d="M5.5 20c.7-4.3 3-6.5 6.5-6.5s5.8 2.2 6.5 6.5"
                    fill="currentColor"
                  />

                </svg>

              </div>

              <span>
                Entra con SPID
              </span>

            </div>


            {/* =================================================
                PROVIDERS
                ================================================= */}

            <div className="spid-provider-list">

              {providers.map((provider) => (

                <button
                  key={provider.id}
                  type="button"
                  className="spid-provider-row"
                  aria-label={provider.name}
                >

                  {provider.fake ? (

                    <FakeProviderLogo
                      provider={provider}
                    />

                  ) : (

                    <img
                      className="spid-provider-image"
                      src={provider.logo}
                      alt={provider.name}
                    />

                  )}

                </button>

              ))}

            </div>

          </div>

        </div>

      </div>


      {/* =====================================================
          OPTIONAL EVALUATION
          ===================================================== */}

      {onEvaluate && (

        <div className="uc09-evaluation-action">

          <button
            type="button"
            className="primary-button"
            onClick={onEvaluate}
          >
            Valuta questo scenario
          </button>

        </div>

      )}

    </div>
  );
}