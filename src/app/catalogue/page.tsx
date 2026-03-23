import { Suspense } from 'react';
import { CatalogueContent } from './CatalogueContent';

export default function CataloguePage() {
  return (
    <Suspense>
      <CatalogueContent />
    </Suspense>
  );
}
