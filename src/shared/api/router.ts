const endpoints = {
  calc: 'norms/calculate',

  prod: 'products',
  prodById: 'products/:id',
  prodBatch: 'products/batch',

  me: 'me',
  login: 'login',
  logout: 'logout',
} as const;

type Endpoint = (typeof endpoints)[keyof typeof endpoints];

export { endpoints, type Endpoint };
