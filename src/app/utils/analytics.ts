declare global {
  interface Window {
    gtag?: (
      command: string,
      targetId: string,
      config?: Record<string, unknown>
    ) => void;
    dataLayer?: unknown[];
  }
}

export const GA_TRACKING_ID = "G-X8E1Q4N30H";

export const pageview = (url: string) => {
  if (!GA_TRACKING_ID || !window.gtag) return;
  window.gtag("config", GA_TRACKING_ID, {
    page_path: url,
  });
};

type GAEvent = {
  action: string;
  category: string;
  label?: string;
  value?: number;
  [key: string]: unknown;
};

export const event = ({ action, category, label, value, ...params }: GAEvent) => {
  if (!window.gtag) return;
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
    ...params,
  });
};

export const trackDonationClick = (location: string) => {
  event({
    action: "donation_button_click",
    category: "Donation",
    label: location,
  });
};

export const trackDonationPageView = () => {
  event({
    action: "donation_page_view",
    category: "Donation",
  });
};

export const trackDonationSubmit = (method: "bitcoin" | "fiat", amount: number) => {
  event({
    action: "donation_submit",
    category: "Donation",
    label: method,
    value: amount,
    payment_method: method,
  });
};

export const trackDonationSuccess = (method: "bitcoin" | "fiat", amount: number) => {
  event({
    action: "donation_success",
    category: "Donation",
    label: method,
    value: amount,
    payment_method: method,
  });
};

export const trackDonationFailure = (method: "bitcoin" | "fiat", error: string) => {
  event({
    action: "donation_failure",
    category: "Donation",
    label: method,
    error_message: error,
  });
};

export const trackSectionView = (sectionName: string, timeSpent?: number) => {
  event({
    action: "section_view",
    category: "Research Report",
    label: sectionName,
    value: timeSpent,
  });
};

export const trackScrollDepth = (depth: number, pagePath: string) => {
  event({
    action: "scroll_depth",
    category: "Engagement",
    label: pagePath,
    value: depth,
    scroll_percentage: depth,
  });
};

export const trackResearchReportSection = (sectionName: string, order: number) => {
  event({
    action: "research_section_entered",
    category: "Research Report",
    label: sectionName,
    section_order: order,
  });
};
