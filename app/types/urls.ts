export const Urls = {
  Company: "/company",
  Partnership: "/partnership",
  "Individual or Sole Trader": "/sole-trader",
  "Choose Structure": "/choose",
  "Checkout Success": "/success",
  Error: "/404",
} as const;

export type Urls = (typeof Urls)[keyof typeof Urls];
