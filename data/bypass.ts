import type { BypassComparison } from "@/types";

/**
 * The Velocity Bypass section: the standard agency pipeline contrasted with
 * the Vihaan architecture, plus the metrics that quantify the difference.
 */
export const bypassComparison: BypassComparison = {
  standard: [
    { id: "data-broker", label: "Data Broker Subscriptions" },
    { id: "manual-sdr", label: "Manual SDR Searching" },
    { id: "human-verification", label: "Human Verification" },
    { id: "spreadsheet", label: "Spreadsheet Formatting" },
    { id: "outreach", label: "Outreach" },
  ],
  vihaan: [
    { id: "osint", label: "Parallel OSINT Extraction" },
    { id: "smtp", label: "Automated SMTP Engine" },
    { id: "crm", label: "Next.js CRM Injection" },
  ],
  metrics: {
    standard: [
      { id: "time", label: "Time to Delivery", value: "3 Weeks", icon: "zap" },
      { id: "cost", label: "Infrastructure Cost", value: "€10,000/yr", icon: "euro" },
      { id: "accuracy", label: "Lead Accuracy", value: "70%", icon: "trending" },
    ],
    vihaan: [
      { id: "time", label: "Time to Delivery", value: "24 Hours", icon: "zap" },
      { id: "cost", label: "Infrastructure Cost", value: "€0 (Custom Stack)", icon: "euro" },
      {
        id: "accuracy",
        label: "Lead Accuracy",
        value: "100% (Zero-Bounce)",
        icon: "trending",
      },
    ],
  },
};