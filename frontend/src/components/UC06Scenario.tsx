import { BuonarrotiGestOreMockup } from "./BuonarrotiGestOreMockup";
import { RelLoginMockup } from "./RelLoginMockup";

type School =
  | "buonarroti"
  | "marconi"
  | "tambosi";

type UC06ScenarioProps = {
  onEvaluate: () => void;
};

function getParticipantSchool(): School {
  try {
    const rawProfile =
      sessionStorage.getItem("participantProfile");

    if (!rawProfile) {
      return "buonarroti";
    }

    const profile = JSON.parse(rawProfile);

    const school = String(
      profile.school ?? "",
    )
      .toLowerCase()
      .trim();

    if (
      school.includes("buonarroti") ||
      school.includes("buonarrotti")
    ) {
      return "buonarroti";
    }

    if (school.includes("marconi")) {
      return "marconi";
    }

    if (school.includes("tambosi")) {
      return "tambosi";
    }
  } catch (error) {
    console.error(
      "Errore nella lettura del participantProfile:",
      error,
    );
  }

  return "buonarroti";
}

export function UC06Scenario({
  onEvaluate,
}: UC06ScenarioProps) {
  const school = getParticipantSchool();

  return (
    <div className="uc06-school-flow">

      {school === "buonarroti" ? (
        <BuonarrotiGestOreMockup />
      ) : (
        <RelLoginMockup />
      )}

      <div className="uc06-evaluation-action">
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