const base = process.env.NEXT_PUBLIC_API_URL ?? '';

const endpoints = {
  calc: `${base}/norms/calculate`,
  prod: `${base}/products`,
  prodBatch: `${base}/products/batch`,
};

type Endpoint = (typeof endpoints)[keyof typeof endpoints];

export { endpoints, type Endpoint };
