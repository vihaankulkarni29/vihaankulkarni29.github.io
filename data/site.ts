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
  links: {
    github: "https://github.com/vihaankulkarni29",
    linkedin: "https://linkedin.com/in/vihaankulkarni",
  },
};