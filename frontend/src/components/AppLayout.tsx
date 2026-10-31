import type { ReactNode } from "react";

interface AppLayoutProps {
  children: ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="app-shell">
      <header className="site-header">
        <div className="site-header__inner">
          <span className="site-title">SSO Phishing Lab</span>
          <img
            className="site-logo"
            src={`${import.meta.env.BASE_URL}sso-logo.webp`}
            alt="SSO Phishing Lab"
          />
          <span className="site-subtitle">
            Studio sull'Identità federata
          </span>
        </div>
      </header>

      <main className="page-container">{children}</main>

      <footer className="site-footer">
        <p>
          Piattaforma sperimentale. Non vengono richieste credenziali reali.
        </p>
      </footer>
    </div>
  );
}