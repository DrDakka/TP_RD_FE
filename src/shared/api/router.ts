const endpoints = {
  calc: '/api/norms/calculate',
  prod: '/api/products',
  prodBatch: '/api/products/batch',
} as const;

type Endpoint = (typeof endpoints)[keyof typeof endpoints];

export { endpoints, type Endpoint };
