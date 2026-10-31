import type { Scenario } from "../data/scenarioTypes";
import { BrowserMockup } from "./BrowserMockup";
//import { MfaMockup } from "./MfaMockup";
import EmailScenarioContainer from "./EmailScenarioContainer";
//import { SamlMockup } from "./SamlMockup";
import { GoogleUpdatedLoginMockup } from "./GoogleUpdatedLoginMockup";

import { OAuthConsentMockup } from "./OAuthConsentMockup";
import canvaLogo from "../assets/logo-canva.png";
import padletLogo from "../assets/logo-padlet.png";
import kahootLogo from "../assets/logo-kahoot.png";

import { UC02Scenario } from "./UC02Scenario";
import { UC06Scenario } from "./UC06Scenario";
import { UC08Scenario } from "./UC08Scenario";
import { UC09Scenario } from "./UC09Scenario";
import { UC10Scenario } from "./UC10Scenario";
import { UC04Scenario } from "./UC04Scenario";
interface ScenarioVisualProps {
  scenario: Scenario;

  /**
   * Used by scenarios that need to notify the parent
   * when their internal interaction is complete.
   */
  onEvaluate?: () => void;

  /**
   * Used by UC02 to start the Microsoft authentication flow.
   */
  onStartMicrosoftFlow?: () => void;
}

export function ScenarioVisual({
  scenario,
  onEvaluate,
  onStartMicrosoftFlow,
}: ScenarioVisualProps) {
  if (scenario.category === "email") {
    return <EmailScenarioContainer scenarioId={scenario.id} />;
  }
  switch (scenario.id) {
    case "UC02":
      return (
        <UC02Scenario
          completed={
            sessionStorage.getItem(
              "completedFlowScenarioId",
            ) === "UC02"
          }
          onStart={() => {
            onStartMicrosoftFlow?.();
          }}
        />
      );
    case "UC03":
      return (
        <OAuthConsentMockup
          appName="Kahoot"
          accountEmail="studente@scuola.it"
        />
      );
    case "UC04":
      return <UC04Scenario />;
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
      return <UC09Scenario onEvaluate={onEvaluate} />;

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
    case "UC13":
  return (
    <OAuthConsentMockup
      appName="Kahoot!"
      appLogo={kahootLogo}
      accountName="Studente"
      accountEmail="studente@scuola.it"
      permissions={[
        {
          icon: "profile",
          title: "Profilo",
          description:
            "Visualizzare il tuo nome e l'immagine del profilo",
        },
        {
          icon: "email",
          title: "Indirizzo email",
          description:
            "Visualizzare il tuo indirizzo email",
        },
      ]}
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
    case "UC15":
  return (
    <OAuthConsentMockup
      appName="Canva!"
      appLogo={canvaLogo}
      accountName="Studente"
      accountEmail="studente@scuola.it"
      permissions={[
        {
          icon: "profile",
          title: "Profilo",
          description:
            "Visualizzare il tuo nome e l'immagine del profilo",
        },
        {
          icon: "email",
          title: "Gmail",
          description:
            "Inviare email a tuo nome utilizzando il tuo account",
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
    case "UC17":
  return (
    <OAuthConsentMockup
      appName="Padlet!"
      appLogo={padletLogo}
      accountName="Studente"
      accountEmail="studente@scuola.it"
      permissions={[
        {
          icon: "profile",
          title: "Profilo",
          description:
            "Visualizzare il tuo nome e l'immagine del profilo",
        },
        {
          icon: "drive",
          title: "Accesso ai dati",
          description:
            "Accedere ai tuoi dati anche quando non utilizzi questa applicazione",
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