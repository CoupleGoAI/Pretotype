/** Shared TypeScript interfaces used across the application. */

export interface NavLink {
  label: string;
  href: string;
}

export interface QuizQuestion {
  q: string;
  left: string;
  right: string;
}

export interface QuizSnapshot {
  title: string;
  bullets: string[];
}

export interface FeatureCard {
  emoji: string;
  title: string;
  desc: string;
  bg: string;
}

export interface Step {
  emoji: string;
  title: string;
  desc: string;
  iconBg: string;
  iconShadow: string;
}

export interface PricingPlan {
  tier: string;
  price: string;
  desc: string;
  features: string[];
  cta: string;
  popular: boolean;
}

export interface FooterColumn {
  heading: string;
  links: NavLink[];
}
