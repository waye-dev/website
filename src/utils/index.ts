import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const isValidEmail = (email: string): boolean => EMAIL_REGEX.test(email);

export const isValidName = (name: string): boolean => {
  const nameRegex = /^[a-zA-Z\s'-]{2,50}$/;
  return nameRegex.test(name);
};

export const checkFormValues = (name: string, email: string, setMessage: React.Dispatch<React.SetStateAction<string>>) => {
  if (!name || !email) {
    setMessage("Please fill in all fields");
    return;
  }

  if (!isValidName(name)) {
    setMessage("Please enter a valid name (2-50 characters, letters only)");
    return;
  }

  if (!isValidEmail(email)) {
    setMessage("Please enter a valid email address");
    return;
  }

  setMessage("");
};

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const EMAIL_REGEX = /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;

export const PRESET_AMOUNTS = [50, 100, 250, 500];

export const DONATION_DESCRIPTIONS = [
  "Supporting freedom tech builders' mental well-being",
  "Empowering builders through psycho-social care",
  "Funding mental health support for developers",
  "Building resilient tech communities",
  "Supporting Bitcoin builders' wellbeing",
  "Advancing builders' mental health",
  "Nurturing freedom tech talent",
  "Supporting sustainable open source",
  "Enabling builders' resilience",
  "Fostering healthy tech culture",
  "Supporting builders' psychological well-being",
  "Building strong support networks",
  "Funding builders' wellness programs",
  "Supporting sustainable development",
  "Building resilient tech ecosystems",
];
