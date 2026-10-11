export type ScenarioCategory =
  | "baseline"
  | "fake_sp"
  | "fake_idp"
  | "oauth_consent"
  | "redirect"
  | "oidc_confusion"
  | "saml"
  | "email";


export type ScenarioProtocol =
  | "SSO"
  | "OAuth"
  | "OIDC"
  | "SAML"
  | "Email→OAuth"
  | "Email→OIDC"
  | "Email→SSO";


export type ScenarioClassification =
  | "legitimate"
  | "suspicious"
  | "malicious";


export type ScenarioType =
  | "full-flow"
  | "single-page";


export type ScenarioSteps =
  | {
      type: "classroom-entry";
      serviceName: string;
      actionLabel: string;
    }
  | {
      type: "google-account-chooser";
      domain: string;
      email: string;
    }
  | {
      type: "google-psw";
      domain: string;
      email: string;
    }
  | {
      type: "oauth-consent";
      domain: string;
      appName: string;
      permissions: string[];
      publisher?: string;
    }
  | {
      type: "mfa-request";
      domain: string;
      message: string;
    }
  | {
      type: "browser-page";
      domain: string;
      heading: string;
      body: string;
    }
  | {
      type: "redirect";
      fromDomain: string;
      toDomain: string;
      label?: string;
    }
  | {
      type: "provider-selection";
      providers: {
        name: string;
        domain?: string;
      }[];
    }
  | {
      type: "oidc-provider";
      brand: string;
      issuer: string;
      authorizationEndpoint?: string;
    }
  | {
      type: "saml-result";
      issuer: string;
      audience?: string;
      recipient?: string;
      identity?: string;
      role?: string;
      status?: string;
    };


export interface Scenario {
  id: string;
  category: ScenarioCategory;
  protocol: ScenarioProtocol;
  title: string;
  instruction: string;
  expectedAnswer: ScenarioClassification;
  difficultyLevel: 1 | 2 | 3 | 4 | 5;
  type: ScenarioType;
  steps: ScenarioSteps[];
}


export interface ScenarioResponse {
  scenarioId: string;
  shownOrder: number;
  answer: ScenarioClassification;
  expectedAnswer: ScenarioClassification;
  isCorrect: boolean;
  confidence: number;
  reactionTimeMs: number;
  explanation: string;
  answeredAt: string;
}