import React from "react";
import { EverestRebootContent } from "./everest/everest-reboot-content";

/**
 * Base `/initiatives/os-reboot` view. Edit `everest/*` sections or compose
 * additional blocks here (e.g. program tabs) without changing hash routing.
 */
const AboutOSReboot = () => {
  return <EverestRebootContent />;
};

export default AboutOSReboot;
