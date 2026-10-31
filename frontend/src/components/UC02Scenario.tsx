import wordLogo from "../assets/logo-word.png";
import powerpointLogo from "../assets/logo-powerpoint.png";
import excelLogo from "../assets/logo-excel.png";
import outlookLogo from "../assets/logo-outlook.png";
import onedriveLogo from "../assets/logo-onedrive.png";

interface UC02ScenarioProps {
    completed: boolean;
    onStart: () => void;
}

/**
 * UC02 — Legitimate Microsoft 365 SSO baseline.
 *
 * The scenario represents a standard Microsoft 365 authentication flow
 * and acts as a control condition for comparison with malicious or
 * manipulated Microsoft authentication scenarios.
 */
export function UC02Scenario({
    completed,
    onStart,
}: UC02ScenarioProps) {
    /**
     * Post-authentication state.
     * The participant has completed the legitimate Microsoft flow
     * and returned to Microsoft 365.
     */
    if (completed) {
        return (
            <div className="uc02-m365">
                <header className="uc02-m365-header">
                    <div className="uc02-m365-brand">
                        <span
                            className="uc02-m365-logo"
                            aria-hidden="true"
                        >
                            <i />
                            <i />
                            <i />
                            <i />
                        </span>

                        <strong>Microsoft 365</strong>
                    </div>

                    <div className="uc02-m365-user">
                        studente@scuola.it
                    </div>
                </header>

                <main className="uc02-m365-home">
                    <section className="uc02-m365-welcome">
                        <span className="uc02-m365-status">
                            Accesso effettuato
                        </span>

                        <h2>Microsoft 365</h2>

                        <p>
                            Ora puoi accedere alle applicazioni e ai servizi
                            disponibili con il tuo account.
                        </p>
                    </section>

                    <div className="uc02-m365-apps">
    <div className="uc02-m365-app-card">
        <div className="uc02-app-logo-box">
            <img
                src={wordLogo}
                alt="Word"
                className="uc02-app-logo uc02-app-logo--word"
            />
        </div>
        <span>Word</span>
    </div>

    <div className="uc02-m365-app-card">
        <div className="uc02-app-logo-box">
            <img
                src={powerpointLogo}
                alt="PowerPoint"
                className="uc02-app-logo uc02-app-logo--powerpoint"
            />
        </div>
        <span>PowerPoint</span>
    </div>

    <div className="uc02-m365-app-card">
        <div className="uc02-app-logo-box">
            <img
                src={excelLogo}
                alt="Excel"
                className="uc02-app-logo uc02-app-logo--excel"
            />
        </div>
        <span>Excel</span>
    </div>

    <div className="uc02-m365-app-card">
        <div className="uc02-app-logo-box">
            <img
                src={outlookLogo}
                alt="Outlook"
                className="uc02-app-logo uc02-app-logo--outlook"
            />
        </div>
        <span>Outlook</span>
    </div>

    <div className="uc02-m365-app-card">
        <div className="uc02-app-logo-box">
            <img
                src={onedriveLogo}
                alt="OneDrive"
                className="uc02-app-logo uc02-app-logo--onedrive"
            />
        </div>
        <span>OneDrive</span>
    </div>
</div>
                </main>
            </div>
        );
    }

    /**
     * Initial Microsoft 365 state.
     *
     * No school-specific service is shown here in order to reduce
     * familiarity-related confounding across different schools.
     */
    return (
        <div className="uc02-m365">
            <header className="uc02-m365-header">
                <div className="uc02-m365-brand">
                    <span
                        className="uc02-m365-logo"
                        aria-hidden="true"
                    >
                        <i />
                        <i />
                        <i />
                        <i />
                    </span>

                    <strong>Microsoft 365</strong>
                </div>
            </header>

            <main className="uc02-m365-login">
                <section className="uc02-m365-intro">
                    <div className="uc02-m365-large-logo">
                        <span
                            className="uc02-m365-logo"
                            aria-hidden="true"
                        >
                            <i />
                            <i />
                            <i />
                            <i />
                        </span>
                    </div>

                    <h2>Microsoft 365</h2>

                    <p>
                        Accedi alle applicazioni e ai servizi Microsoft
                        utilizzando il tuo account.
                    </p>

                    <button
                        type="button"
                        className="uc02-m365-login-button"
                        onClick={onStart}
                    >
                        Accedi
                    </button>
                </section>

                <section className="uc02-m365-preview">
                    <div className="uc02-preview-grid">
    <div>
        <div className="uc02-app-logo-box">
            <img
                src={wordLogo}
                alt="Word"
                className="uc02-app-logo uc02-app-logo--word"
            />
        </div>
        <span>Word</span>
    </div>

    <div>
        <div className="uc02-app-logo-box">
            <img
                src={powerpointLogo}
                alt="PowerPoint"
                className="uc02-app-logo uc02-app-logo--powerpoint"
            />
        </div>
        <span>PowerPoint</span>
    </div>

    <div>
        <div className="uc02-app-logo-box">
            <img
                src={excelLogo}
                alt="Excel"
                className="uc02-app-logo uc02-app-logo--excel"
            />
        </div>
        <span>Excel</span>
    </div>

    <div>
        <div className="uc02-app-logo-box">
            <img
                src={outlookLogo}
                alt="Outlook"
                className="uc02-app-logo uc02-app-logo--outlook"
            />
        </div>
        <span>Outlook</span>
    </div>
</div>
                </section>
            </main>
        </div>
    );
}