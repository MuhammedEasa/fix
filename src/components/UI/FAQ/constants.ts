type FAQItem = {
  question: string;
  answer: string;
};

export const desktopHeaderPhrase = ["Frequently asked", "questions"];
export const mobileHeaderPhrase = ["Frequently", "asked", "questions"];
export const animate = {
  initial: {
    y: "100%",
    opacity: 0,
  },
  open: (i: number) => ({
    y: "0%",
    opacity: 1,
    transition: { duration: 1, delay: 0.1 * i, ease: [0.33, 1, 0.68, 1] },
  }),
};

export const faqData: FAQItem[] = [
  {
    question: "Do you offer onsite repair services?",
    answer:
      "Yes, we offer onsite repair for select services. Our technicians will visit your location to fix the issue on the spot, ensuring convenience for you.",
  },
  {
    question: "Is my personal data secure?",
    answer:
      "Absolutely! We use advanced encryption and security protocols to ensure your data remains safe and confidential.",
  },
  {
    question: "How long will it take to repair my device?",
    answer:
      "Repair times depend on the type and complexity of the issue. Simple repairs may take a few hours, while more complex fixes can take a few days. We’ll always provide an estimated time when you request service.",
  },
  {
    question: "Do I need to back up my data before the repair?",
    answer:
      "Yes, we recommend that you back up your data before any repair, especially for data-sensitive devices like laptops and smartphones. While we handle repairs with care, data loss is always a risk.",
  },
];
