import { SamlMockup } from "./SamlMockUp";

export function UC04Scenario() {
  return (
    <SamlMockup
      includeFakeProvider={false}
    />
  );
}