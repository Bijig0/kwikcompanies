const Urls = {
  Company: "/company",
  Partnership: "/partnership",
  "Individual or Sole Trader": "/sole-trader",
  "Choose Structure": "/choose",
} as const;

type Urls = (typeof Urls)[keyof typeof Urls];
