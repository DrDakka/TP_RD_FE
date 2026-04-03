const base = process.env.NEXT_PUBLIC_API_URL ?? '';

const endpoints = {
  calc: `${base}/norms/calculate`,
  prod: `${base}/products`,
  prodBatch: '/api/products/batch',
};

const clientEndpoints = {
  prod: '/api/products',
};

type Endpoint = (typeof endpoints)[keyof typeof endpoints];

export { endpoints, clientEndpoints, type Endpoint };
