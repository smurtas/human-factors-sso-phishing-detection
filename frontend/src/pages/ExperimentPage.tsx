import {
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import {
  Navigate,
  useNavigate,
  useLocation,
} from "react-router";

import { ScenarioVisual } from "../components/ScenarioVisual";
import { pilotScenarios } from "../data/scenarios";
import { selectExperimentScenarios } from "../components/selectExperimentScenarios";

import teamsLoginHero from "../assets/ms-background.png";

import type {
  ScenarioClassification,
  ScenarioResponse,
} from "../data/scenarioTypes";


const STORAGE_KEY = "pilotScenarioResponses";
const SCENARIO_ORDER_KEY = "pilotScenarioOrder";
const CURRENT_INDEX_KEY = "pilotScenarioCurrentIndex";


console.log(
  "participantProfile:",
  sessionStorage.getItem("participantProfile"),
);


export function ExperimentPage() {
  const navigate = useNavigate();
  const location = useLocation();


  /* =========================================================
     PARTICIPANT
     ========================================================= */

  const participantProfile =
    sessionStorage.getItem("participantProfile");


  /* =========================================================
     COMPLETED EXTERNAL FLOW
     ========================================================= */

  const completedScenarioID =
    (
      location.state as {
        completedScenarioID?: string;
      } | null
    )?.completedScenarioID;


  /* =========================================================
     SCENARIO ORDER
     ========================================================= */

  const scenarios = useMemo(() => {

    /*
     * If experiment was already started,
     * restore exactly the same order of scenarios.
     */

    const storedOrder =
      sessionStorage.getItem(SCENARIO_ORDER_KEY);


    if (storedOrder) {
      try {
        const storedIds =
          JSON.parse(storedOrder) as string[];


        const restoredScenarios = storedIds.flatMap(
          (id) => {
            const scenario = pilotScenarios.find(
              (item) => item.id === id,
            );

            return scenario ? [scenario] : [];
          },
        );


        if (
          restoredScenarios.length > 0 &&
          restoredScenarios.length === storedIds.length
        ) {
          return restoredScenarios;
        }

      } catch {
        sessionStorage.removeItem(
          SCENARIO_ORDER_KEY,
        );
      }
    }


    /* ---------------------------------------------------------
       UC01 always first
       --------------------------------------------------------- */

    const uc01 = pilotScenarios.find(
      (scenario) => scenario.id === "UC01",
    );


    /* ---------------------------------------------------------
       UC07 approximately in the middle
       --------------------------------------------------------- */

    const uc07 = pilotScenarios.find(
      (scenario) => scenario.id === "UC07",
    );


    /* ---------------------------------------------------------
       Random pool
       --------------------------------------------------------- */

    const randomPool = pilotScenarios.filter(
      (scenario) =>
        scenario.id !== "UC01" &&
        scenario.id !== "UC07",
    );


    const randomScenarios =
      selectExperimentScenarios(
        randomPool,
        28,
      );


    if (!uc01 || !uc07) {
      return randomScenarios;
    }


    const totalScenarios =
      randomScenarios.length + 2;


    /*
     * UC07 is placed approximately
     * in the middle of the experiment.
     *
     * Examples:
     *
     * 30 scenarios -> position 15
     * 9 scenarios  -> position 5
     * 8 scenarios  -> position 4
     */

    const uc07Position =
      Math.ceil(totalScenarios / 2);


    /*
     * UC01 is in the first position,
     * so calculate how many random scenarios
     * should come before UC07.
     */

    const randomBeforeUc07 =
      uc07Position - 2;


    const orderedScenarios = [
      uc01,

      ...randomScenarios.slice(
        0,
        randomBeforeUc07,
      ),

      uc07,

      ...randomScenarios.slice(
        randomBeforeUc07,
      ),
    ];


    sessionStorage.setItem(
      SCENARIO_ORDER_KEY,
      JSON.stringify(
        orderedScenarios.map(
          (scenario) => scenario.id,
        ),
      ),
    );


    return orderedScenarios;

  }, []);


  /* =========================================================
     CURRENT SCENARIO
     ========================================================= */

  const [currentIndex, setCurrentIndex] =
    useState(() => {

      const storedIndex =
        sessionStorage.getItem(
          CURRENT_INDEX_KEY,
        );


      if (storedIndex === null) {
        return 0;
      }


      const parsedIndex =
        Number(storedIndex);


      if (
        Number.isInteger(parsedIndex) &&
        parsedIndex >= 0 &&
        parsedIndex < scenarios.length
      ) {
        return parsedIndex;
      }


      return 0;
    });


  /* =========================================================
     USER ANSWER
     ========================================================= */

  const [answer, setAnswer] =
    useState<ScenarioClassification | null>(
      null,
    );

  const [confidence, setConfidence] =
    useState(3);

  const [explanation, setExplanation] =
    useState("");


  /*
   * UC06 has two phases:
   *
   * 1. show the school portal
   * 2. after "Valuta questo scenario",
   *    show the evaluation form
   */

  const [showEvaluation, setShowEvaluation] =
    useState(false);


  /* =========================================================
     RESPONSES
     ========================================================= */

  const [responses, setResponses] =
    useState<ScenarioResponse[]>(() => {

      const storedResponses =
        sessionStorage.getItem(STORAGE_KEY);


      if (!storedResponses) {
        return [];
      }


      try {
        return JSON.parse(
          storedResponses,
        ) as ScenarioResponse[];

      } catch {
        return [];
      }
    });


  /* =========================================================
     REACTION TIME
     ========================================================= */

  const startedAtRef =
    useRef<number>(
      performance.now(),
    );


  const currentScenario =
    scenarios[currentIndex];


  /* =========================================================
     COMPLETED FLOW
     ========================================================= */

  const completedFlowScenarioId =
    completedScenarioID ??
    sessionStorage.getItem(
      "completedFlowScenarioId",
    );


  /* =========================================================
     RESET VALUES WHEN SCENARIO CHANGES
     ========================================================= */

  useEffect(() => {
    startedAtRef.current =
      performance.now();

    setAnswer(null);
    setConfidence(3);
    setExplanation("");

    /*
     * Important for UC06.
     *
     * Every new scenario starts without
     * the evaluation explicitly opened.
     */

    setShowEvaluation(false);

  }, [currentIndex]);


  /* =========================================================
     UC06 - SCROLL TO EVALUATION
     ========================================================= */

  useEffect(() => {

    if (!showEvaluation) {
      return;
    }


    /*
     * Wait until React has rendered
     * the evaluation section.
     */

    requestAnimationFrame(() => {

      document
        .getElementById(
          "scenario-evaluation",
        )
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

    });

  }, [showEvaluation]);


  /* =========================================================
     PARTICIPANT GUARD
     ========================================================= */

  if (!participantProfile) {
    return (
      <Navigate
        to="/participant"
        replace
      />
    );
  }


  /* =========================================================
     START MICROSOFT FLOW - UC07
     ========================================================= */

  function handleStartMicrosoftFlow() {

    /*
     * Save current scenario because
     * Microsoft authentication uses
     * separate routes.
     */

    sessionStorage.setItem(
      CURRENT_INDEX_KEY,
      String(currentIndex),
    );


    sessionStorage.removeItem(
      "completedFlowScenarioId",
    );


    navigate("/microsoft-login");
  }


  /* =========================================================
     SUBMIT SCENARIO EVALUATION
     ========================================================= */

  function handleSubmit() {

    if (!answer) {
      return;
    }


    const reactionTimeMs =
      Math.round(
        performance.now() -
        startedAtRef.current,
      );


    const response: ScenarioResponse = {
      scenarioId:
        currentScenario.id,

      shownOrder:
        currentIndex + 1,

      answer,

      expectedAnswer:
        currentScenario.expectedAnswer,

      isCorrect:
        answer ===
        currentScenario.expectedAnswer,

      confidence,

      reactionTimeMs,

      explanation:
        explanation.trim(),

      answeredAt:
        new Date().toISOString(),
    };


    const updatedResponses = [
      ...responses,
      response,
    ];


    setResponses(
      updatedResponses,
    );


    sessionStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(
        updatedResponses,
      ),
    );


    const isLastScenario =
      currentIndex ===
      scenarios.length - 1;


    /* ---------------------------------------------------------
       End of experiment
       --------------------------------------------------------- */

    if (isLastScenario) {

      navigate("/results");

      return;
    }


    /* ---------------------------------------------------------
       Go to next scenario ONLY after evaluation
       --------------------------------------------------------- */

    setCurrentIndex(
      (value) => value + 1,
    );
  }


  /* =========================================================
     RENDER
     ========================================================= */

  return (
    <section className="experiment-card">


      {/* =====================================================
          HEADER
          ===================================================== */}

      <header className="experiment-header">

        <div>

          <p className="eyebrow">
            Scenario {currentIndex + 1} di{" "}
            {scenarios.length}
          </p>

          <h1>
            {currentScenario.title}
          </h1>

        </div>


        <div
          className="experiment-progress"
          aria-label={
            `Completamento: ${currentIndex + 1
            } di ${scenarios.length}`
          }
        >

          <span
            style={{
              width:
                `${(
                  (currentIndex + 1) /
                  scenarios.length
                ) * 100
                }%`,
            }}
          />

        </div>

      </header>


      {/* =====================================================
          CONTEXT
          ===================================================== */}

      <div className="scenario-context">

        <h2>
          Contesto
        </h2>

        <p>
          {currentScenario.instruction}
        </p>

      </div>


      {/* =====================================================
          SCENARIO VISUAL
          ===================================================== */}

      {currentScenario.id === "UC01" ? (

        /* -----------------------------------------------------
           UC01
           Google flow already completed
           ----------------------------------------------------- */

        <div className="completed-flow-summary">

          <h2>
            Flusso completato
          </h2>


          <p>
            Hai completato il flusso simulato
            di autenticazione Google e hai
            raggiunto la pagina del corso su
            Google Classroom.
          </p>


          <div className="completed-flow-steps">

            <span>
              Google Login
            </span>

            <span aria-hidden="true">
              →
            </span>

            <span>
              Inserimento password
            </span>

            <span aria-hidden="true">
              →
            </span>

            <span>
              Google Classroom
            </span>
            

          </div>

        </div>
        


      ) : currentScenario.id === "UC07" &&
        completedFlowScenarioId !== "UC07" ? (

        /* -----------------------------------------------------
           UC07
           Microsoft flow has not started yet
           ----------------------------------------------------- */

        <div
          className="teams-login-hero"
          style={{
            backgroundImage:
              `url(${teamsLoginHero})`,
          }}
        >

          <div className="teams-login-hero-content">

            <h2>
              Accesso a Microsoft
              <br />
              Teams
            </h2>


            <p>
              Teams ti aiuta a organizzare
              lavoro e tempo libero, a chiamare
              e a chattare con chi vuoi e ad
              accedere ai tuoi file in modo
              sicuro.
            </p>


            <div className="teams-login-hero-actions">

              <button
                type="button"
                className="teams-login-access-button"
                onClick={
                  handleStartMicrosoftFlow
                }
              >
                Accedi
              </button>


              <button
                type="button"
                className="teams-login-download-button"
              >
                Scarica Teams
              </button>

            </div>

          </div>

        </div>


      ) : currentScenario.id === "UC07" ? (

        /* -----------------------------------------------------
           UC07
           Microsoft flow completed
           ----------------------------------------------------- */

        <div className="completed-flow-summary">

          <h2>
            Flusso completato
          </h2>


          <p>
            Hai completato il flusso simulato
            di autenticazione Microsoft e hai
            raggiunto Microsoft Teams.
          </p>


          <div className="completed-flow-steps">

            <span>
              Microsoft Login
            </span>

            <span aria-hidden="true">
              →
            </span>

            <span>
              Inserimento password
            </span>

            <span aria-hidden="true">
              →
            </span>

            <span>
              Microsoft Teams
            </span>

          </div>

        </div>


      ) : (

        /*
         * All ordinary scenarios.
         *
         * UC06 receives onEvaluate:
         * when the user clicks
         * "Valuta questo scenario",
         * showEvaluation becomes true.
         */

        <div
          className={
            currentScenario.id === "UC06"
              ? "scenario-full-bleed"
              : undefined
          }
        >
          <ScenarioVisual
            scenario={currentScenario}
            onEvaluate={() =>
              setShowEvaluation(true)
            }
          />
        </div>

      )}


      {/* =====================================================
          EVALUATION
          =====================================================

          Hide evaluation when:

          1. UC07 Microsoft flow is still running
          2. UC06 has not yet clicked "Valuta questo scenario"

          For all other scenarios it is shown immediately.
          ===================================================== */}

      {!(
        currentScenario.id === "UC07" &&
        completedFlowScenarioId !== "UC07"
      ) &&
        (
          currentScenario.id !== "UC06" ||
          showEvaluation
        ) && (

          <div
            id="scenario-evaluation"
            className="scenario-question"
          >


            {/* -------------------------------------------------
                CLASSIFICATION
                ------------------------------------------------- */}

            <fieldset>

              <legend>
                Come valuti la situazione mostrata?
              </legend>


              {/* LEGITIMATE */}

              <label className="answer-option">

                <input
                  type="radio"
                  name="classification"
                  checked={
                    answer === "legitimate"
                  }
                  onChange={() =>
                    setAnswer(
                      "legitimate",
                    )
                  }
                />


                <span>

                  <strong>
                    Legittima
                  </strong>

                  <small>
                    Non vedo anomalie rilevanti.
                  </small>

                </span>

              </label>


              {/* SUSPICIOUS */}

              <label className="answer-option">

                <input
                  type="radio"
                  name="classification"
                  checked={
                    answer === "suspicious"
                  }
                  onChange={() =>
                    setAnswer(
                      "suspicious",
                    )
                  }
                />


                <span>

                  <strong>
                    Sospetta
                  </strong>

                  <small>
                    Non dispongo di informazioni
                    sufficienti.
                  </small>

                </span>

              </label>


              {/* MALICIOUS */}

              <label className="answer-option">

                <input
                  type="radio"
                  name="classification"
                  checked={
                    answer === "malicious"
                  }
                  onChange={() =>
                    setAnswer(
                      "malicious",
                    )
                  }
                />


                <span>

                  <strong>
                    Malevola
                  </strong>

                  <small>
                    Sono presenti segnali
                    compatibili con un attacco.
                  </small>

                </span>

              </label>

            </fieldset>


            {/* -------------------------------------------------
                CONFIDENCE
                ------------------------------------------------- */}

            <label className="range-field">

              <span>

                Quanto sei sicuro della risposta?

                <strong>
                  {confidence}/5
                </strong>

              </span>


              <input
                type="range"
                min="1"
                max="5"
                step="1"
                value={confidence}
                onChange={(event) =>
                  setConfidence(
                    Number(
                      event.target.value,
                    ),
                  )
                }
              />

            </label>


            {/* -------------------------------------------------
                EXPLANATION
                ------------------------------------------------- */}

            <label className="text-field">

              Quale elemento ha influenzato
              maggiormente la tua decisione?


              <textarea
                value={explanation}
                onChange={(event) =>
                  setExplanation(
                    event.target.value,
                  )
                }
                rows={4}
                maxLength={500}
                placeholder="Ad esempio: dominio, lucchetto, provider, richiesta inattesa..."
              />


              <small>
                {explanation.length}/500 caratteri
              </small>

            </label>


            {/* -------------------------------------------------
                SUBMIT
                ------------------------------------------------- */}

            <button
              type="button"
              className="primary-button"
              disabled={!answer}
              onClick={handleSubmit}
            >

              {currentIndex ===
                scenarios.length - 1
                ? "Completa il test"
                : "Conferma e continua"}

            </button>

          </div>

        )}

    </section>
  );
}