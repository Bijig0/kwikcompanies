export const Urls = {
  Company: "/company",
  Partnership: "/partnership",
  "Individual or Sole Trader": "/sole-trader",
  "Choose Structure": "/choose",
  "Checkout Success": "/success",
  Error: "/404",
  Home: "/",
} as const;

export type Url = (typeof Urls)[keyof typeof Urls];
