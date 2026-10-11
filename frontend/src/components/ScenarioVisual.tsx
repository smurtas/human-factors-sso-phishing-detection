import type { Scenario } from "../data/scenarioTypes";
import { BrowserMockup } from "./BrowserMockup";
import { MfaMockup } from "./MfaMockup";
import EmailScenarioContainer from "./EmailScenarioContainer";
import { SamlMockup } from "./SamlMockup";
import { GoogleUpdatedLoginMockup } from "./GoogleUpdatedLoginMockup";
import { ProviderSelectionMockup } from "./ProviderSelectionMockup";

interface ScenarioVisualProps {
  scenario: Scenario;
}

export function ScenarioVisual({
  scenario,
}: ScenarioVisualProps) {
  if (scenario.category === "email") {
    return <EmailScenarioContainer scenarioId={scenario.id} />;
  }
  switch (scenario.id) {
    case "UC03":
      return (
        <BrowserMockup
          domain="accounts.google.com"
          secure
          provider="google"
        />
      );
    case "UC04":
      return (
        <SamlMockup
          serviceDomain="registro.scuola.it"
          identityProvider="idp.scuola.it"
          serviceName="Registro elettronico"
          email="nome.cognome@scuola.it"
          role="Studente"
          secure
        />
      );
    case "UC05":
      return <GoogleUpdatedLoginMockup />;
    case "UC08":
      return (
        <BrowserMockup
          domain="accounts-google-auth.com"
          secure={false}
          provider="google"
        />
      );
    case "UC09":
      return (
        <ProviderSelectionMockup
          serviceName="Servizi online della scuola"
          serviceDomain="servizi.scuola.it"
          selectedProvider="PosteID"
          providers={[
            {
              name: "Aruba ID",
              domain: "login.aruba.it",
            },
            {
              name: "InfoCert ID",
              domain: "identity.infocert.it",
            },
            {
              name: "PosteID",
              domain: "poste-id-accesso.com",
            },
          ]}
        />
      );

    case "UC10":
      return <MfaMockup />;


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
    default:
      return (
        <div className="scenario-placeholder">
          <p>{scenario.instruction}</p>
        </div>
      );
  }
}