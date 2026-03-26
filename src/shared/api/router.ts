const base =
  typeof window === 'undefined'
    ? `http://localhost:${process.env.PORT ?? 3000}`
    : '';

const endpoints = {
  calc: `${base}/api/norms/calculate`,
  prod: `${base}/api/products`,
  prodBatch: `${base}/api/products/batch`,
};

type Endpoint = (typeof endpoints)[keyof typeof endpoints];

export { endpoints, type Endpoint };
