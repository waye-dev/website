import React from "react";
import { EverestSectionHeroDetails } from "./section-hero-details";
import { EverestSectionThisWorkHelps } from "./section-this-work-helps";
import { EverestSectionImagine } from "./section-imagine";
import { EverestSectionHowItWorks } from "./section-how-it-works";
import { EverestSectionApproach } from "./section-approach";
import { EverestSectionInterested } from "./section-interested";

/**
 * Shared Everest cohort body. Compose the base OS Reboot page from these sections,
 * or render this tree wholesale for `#everest` and the default route.
 */
export function EverestRebootContent() {
  return (
    <div>
      <EverestSectionHeroDetails />
      <EverestSectionThisWorkHelps />
      <EverestSectionImagine />
      <EverestSectionHowItWorks />
      <EverestSectionApproach />
      <EverestSectionInterested />
    </div>
  );
}
