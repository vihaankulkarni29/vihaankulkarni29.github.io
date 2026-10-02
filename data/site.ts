import type { SiteConfig } from "@/types";

/**
 * Identity and social links surfaced in the hero and footer.
 *
 * The hero's long-form tagline is deliberately NOT here: it wraps the words
 * "maximum velocity" in an <em>, and inline markup cannot live in a plain
 * data file. Keep it in HeroSection.tsx unless the copy becomes markup-free.
 */
export const site: SiteConfig = {
  name: "Vihaan Kulkarni",
  location: "Mumbai",
  availability: "The architecture is ready. All you have to do is set up a call.",
  /**
   * TODO(vihaan): fill these in. Until schedulingUrl is set the primary hero
   * CTA renders disabled rather than silently doing nothing.
   */
  contact: {
    schedulingUrl: "",
    email: "",
    logsAnchor: "work",
  },
  links: {
    github: "https://github.com/vihaankulkarni29",
    linkedin: "https://www.linkedin.com/in/vihaan-kulkarni-aa8668248/",
  },
};