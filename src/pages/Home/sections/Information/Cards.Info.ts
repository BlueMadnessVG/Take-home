import { InformationCard } from "../../../../models";
import {
  TextIcon,
  HeadPhonesIcon,
  TimerIcon,
  ShieldIcon,
  CircleIcon,
  GhostIcon,
} from "../../../../assets/icons/Home";

export const CardsInfo: Record<number, InformationCard> = {
  1: {
    icon: TextIcon,
    title: "Custom Plans Available",
    description:
      "Select from a variety of plans designed to fit your lifestyle, needs, and budget, ensuring the right coverage for you and your family.",
  },
  2: {
    icon: HeadPhonesIcon,
    title: "Support Anytime Anywhere",
    description:
      "Get professional assistance 24/7 from our dedicated team, ready to guide you through policies, claims, and insurance solutions anytime.",
  },
  3: {
    icon: TimerIcon,
    title: "Quick Claims Process",
    description:
      "Enjoy a fast, simple, and transparent claims process with minimal paperwork, ensuring swift approvals and hassle-free payouts.",
  },
  4: {
    icon: ShieldIcon,
    title: "Secure and Private",
    description:
      "Your personal data and transactions are fully protected with the latest encryption, ensuring security and confidentiality at all times.",
  },
  5: {
    icon: CircleIcon,
    title: "Global Coverage Plans",
    description:
      "Stay protected wherever you go with worldwide insurance coverage, offering peace of mind for both travel and daily life.",
  },
  6: {
    icon: GhostIcon,
    title: "Affordable Premium Options",
    description:
      "Get high-value insurance plans with transparent pricing, no hidden fees, and competitive rates tailored to your financial needs.",
  },
};
