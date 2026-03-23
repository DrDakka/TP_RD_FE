'use client';

import { useUrlReducer } from './useUrlReducer';
import { Tags, PropTags } from '@/shared/api/types/product/enums';

export default function CataloguePage() {
  const [state, dispatch] = useUrlReducer();

  return (
    <div>
      <p>search: {state.search}</p>
      <p>tag: {state.tag}</p>
      <p>prop: {state.prop.join(', ')}</p>
      <p>page: {state.page}</p>

      <button onClick={() => dispatch({ type: 'SET_SEARCH', payload: 'test' })}>
        Set search
      </button>
      <button onClick={() => dispatch({ type: 'SET_TAG', payload: Tags.BAL })}>
        Set tag
      </button>
      <button
        onClick={() => dispatch({ type: 'TOGGLE_PROP', payload: PropTags.HP })}
      >
        Toggle hi-prot
      </button>
      <button
        onClick={() => dispatch({ type: 'SET_PAGE', payload: state.page + 1 })}
      >
        Next page
      </button>
      <button onClick={() => dispatch({ type: 'RESET_FILTERS' })}>Reset</button>
    </div>
  );
}
