export const Urls = {
  Company: "/company",
  Partnership: "/partnership",
  "Individual or Sole Trader": "/sole-trader",
  "Choose Structure": "/choose",
  "Checkout Success": "/success",
  Error: "/404",
  Home: "/",
  "Terms And Services": "/terms-of-service",
  "ATO Authorised Agent Declaration": "/declaration",
} as const;

export type Url = (typeof Urls)[keyof typeof Urls];
