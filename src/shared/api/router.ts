const endpoints = {
  calc: 'norms/calculate',

  prod: 'products',
  prodById: 'products/:id',
  prodBatch: 'products/batch',

  me: 'account/me',
  login: 'auth/login',
  register: 'auth/register',
  logout: 'auth/logout',
} as const;

type Endpoint = (typeof endpoints)[keyof typeof endpoints];

export { endpoints, type Endpoint };
