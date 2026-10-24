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
   * The hero's primary CTA resolves to the first of these that is set:
   *   1. schedulingUrl -> opens the booking link
   *   2. email         -> prefilled mailto: fallback
   * With only email set the CTA opens a mailto: to this address. Until a
   * scheduling URL is added the button stays enabled (mailto) rather than
   * rendering visibly disabled.
   */
  contact: {
    schedulingUrl: "",
    email: "vihaankulkarni29@gmail.com",
    logsAnchor: "work",
  },
  links: {
    github: "https://github.com/vihaankulkarni29",
    linkedin: "https://www.linkedin.com/in/vihaan-kulkarni-aa8668248/",
  },
};