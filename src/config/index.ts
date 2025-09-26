export const FORM_ID = process.env.JOTFORM_FORM_ID ?? "";

export const API_KEY = process.env.JOTFORM_API_KEY ?? "";

export const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY ?? "";

export const MAILCHIMP_SERVER = process.env.MAILCHIMP_SERVER ?? "";

export const MAILCHIMP_LIST_ID = process.env.MAILCHIMP_LIST_ID ?? "";

if (!MAILCHIMP_API_KEY) {
  throw new Error("MAILCHIMP_API_KEY not found");
}
