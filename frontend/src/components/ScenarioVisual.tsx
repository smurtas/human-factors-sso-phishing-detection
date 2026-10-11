import type { Scenario } from "../data/scenarioTypes";
import { BrowserMockup } from "./BrowserMockup";
import { MfaMockup } from "./MfaMockup";
import EmailScenarioContainer from "./EmailScenarioContainer";
import { SamlMockup } from "./SamlMockup";
import { GoogleUpdatedLoginMockup } from "./GoogleUpdatedLoginMockup";
import { UC09Scenario } from "./UC09Scenario";
import { UC06Scenario } from "./UC06Scenario";
import { OAuthConsentMockup } from "./OAuthConsentMockup";
import canvaLogo from "../assets/logo-canva.png";
import padletLogo from "../assets/logo-padlet.png";
import { UC08Scenario } from "./UC08Scenario";
import { UC10Scenario } from "./UC10Scenario";
import { UC04Scenario } from "./UC04Scenario";
interface ScenarioVisualProps {
  scenario: Scenario;
  onEvaluate?: () => void;

}

export function ScenarioVisual({
  scenario,
  onEvaluate,
}: ScenarioVisualProps) {
  if (scenario.category === "email") {
    return <EmailScenarioContainer scenarioId={scenario.id} />;
  }
  switch (scenario.id) {
    case "UC03":
      return (
        <OAuthConsentMockup
          appName="Kahoot"
          accountEmail="studente@scuola.it"
        />
      );
    case "UC04":
      return (
        <SamlMockup
          includeFakeProvider={false}
        />
      );
    case "UC05":
      return <GoogleUpdatedLoginMockup />;
    case "UC06":
      return (
        <UC06Scenario
          onEvaluate={
            onEvaluate ?? (() => { })
          }
        />
      );
    case "UC08":
      return <UC08Scenario />;
    case "UC09":
      return (
        <SamlMockup
          includeFakeProvider={true}
          onEvaluate={onEvaluate}
        />
      );
    case "UC10":
      return <UC10Scenario />;


    case "UC11":
      return (
        <BrowserMockup
          domain="accounts.google.com.secure-login.school"
          secure
          provider="google"
        />
      );
    case "UC12":
      return (
        <BrowserMockup
          domain="accounts.g00gle.com"
          secure
          provider="google"
        />
      );
    case "UC14":
      return (
        <OAuthConsentMockup
          appName="Canva"
          appLogo={canvaLogo}
          accountName="Studente"
          accountEmail="studente@scuola.it"
          permissions={[
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
            {
              icon: "email",
              title: "Gmail",
              description:
                "Leggere, cercare e visualizzare tutti i messaggi email del tuo account Gmail",
            },
          ]}
        />
      );
    case "UC16":
      return (
        <OAuthConsentMockup
          appName="Padlet"
          appLogo={padletLogo}
          accountName="Studente"
          accountEmail="studente@scuola.it"
          permissions={[
            {
              icon: "profile",
              title: "Studente",
              description: "Nome e immagine del profilo",
            },
            /*
            {
              icon: "email",
              title: "studente@scuola.it",
              description: "Indirizzo email",
            },
            */
            {
              icon: "drive",
              title: "Google Drive",
              description:
                "Visualizzare, modificare, creare ed eliminare tutti i tuoi file di Google Drive",
            },
            {
              icon: "calendar",
              title: "Google Calendar",
              description:
                "Visualizzare, modificare, creare ed eliminare tutti gli eventi dei tuoi calendari",
            },
          ]}
        />
      );


    default:
      return (
        <div className="scenario-placeholder">
          <p>Scenario non ancora implementato.</p>
        </div>
      );
  }
}