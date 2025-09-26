export const FORM_ID = process.env.NEXT_PUBLIC_JOTFORM_FORM_ID ?? "";

export const API_KEY = process.env.NEXT_PUBLIC_JOTFORM_API ?? "";

export const MAILCHIMP_API_KEY = process.env.NEXT_PUBLIC_MAILCHIMP_API ?? "";

export const MAILCHIMP_SERVER = process.env.NEXT_PUBLIC_MAILCHIMP_SERVER ?? "";

export const MAILCHIMP_LIST_ID = process.env.NEXT_PUBLIC_MAILCHIMP_LIST_ID ?? "";

if (!MAILCHIMP_API_KEY) {
  throw new Error("MAILCHIMP_API_KEY not found");
}
