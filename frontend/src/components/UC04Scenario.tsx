import { SamlMockup } from "./SamlMockup";

export function UC04Scenario() {
  return (
    <SamlMockup
      includeFakeProvider={false}
    />
  );
}