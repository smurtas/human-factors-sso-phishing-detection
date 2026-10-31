import { useNavigate, useParams } from "react-router";
import { ScenarioVisual } from "../components/ScenarioVisual";
import { pilotScenarios } from "../data/scenarios";

export function TestPage() {
  const { scenarioId } = useParams();
  const navigate = useNavigate();

  const scenario = pilotScenarios.find(
    (item) => item.id === scenarioId,
  );

  function handleStartUC02MicrosoftFlow() {
    sessionStorage.setItem(
      "microsoftFlowScenarioId",
      "UC02"
    );

    sessionStorage.setItem(
      "microsoftFlowReturnTo",
      "/test/UC02"
    );

    sessionStorage.removeItem(
      "completedFlowScenarioId"
    );

    navigate("/microsoft-login");
  }

  if (!scenario) {
    return (
      <main>
        <h1>Scenario non trovato</h1>
      </main>
    );
  }

  return (
    <main className="scenario-test-page">
      <div className="scenario-test-info">
        <p className="eyebrow">
          TEST {scenario.id}
        </p>

        <h1>{scenario.title}</h1>

        <p>{scenario.instruction}</p>
      </div>

      <div className="scenario-full-bleed">
        <ScenarioVisual
          scenario={scenario}
          onStartMicrosoftFlow={
            scenario.id === "UC02"
              ? handleStartUC02MicrosoftFlow
              : undefined
          }
        />
      </div>
    </main>
  );
}