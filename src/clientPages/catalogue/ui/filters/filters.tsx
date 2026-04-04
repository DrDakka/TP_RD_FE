'use client';

import { useEffect, useRef, useState } from 'react';
import { Tags, PropTags } from '@/shared/api/types/product/enums';

const TAG_LABELS: Record<Tags, string> = {
  [Tags.LC]: 'Lo-cal',
  [Tags.PRT]: 'Protein',
  [Tags.FAT]: 'Fat',
  [Tags.CRB]: 'Carb',
  [Tags.P_F]: 'Prot+Fat',
  [Tags.P_C]: 'Prot+Carb',
  [Tags.F_C]: 'Fat+Carb',
  [Tags.F_P]: 'Fat+Prot',
  [Tags.C_P]: 'Carb+Prot',
  [Tags.C_F]: 'Carb+Fat',
  [Tags.BAL]: 'Balanced',
};

const PROP_LABELS: Record<PropTags, string> = {
  [PropTags.HP]: 'Hi-prot',
  [PropTags.HF]: 'Hi-fat',
  [PropTags.HC]: 'Hi-carb',
  [PropTags.HKCAL]: 'Hi-cal',
  [PropTags.LP]: 'Lo-prot',
  [PropTags.LF]: 'Lo-fat',
  [PropTags.LC]: 'Lo-carb',
  [PropTags.LKCAL]: 'Lo-cal',
  [PropTags.FBR]: 'Fiber',
};

type Props = {
  tag: Tags | null;
  prop: PropTags[];
  onSetTag: (tag: Tags | null) => void;
  onToggleProp: (prop: PropTags) => void;
};

export const Filters: React.FC<Props> = ({
  tag,
  prop,
  onSetTag,
  onToggleProp,
}) => {
  const [propOpen, setPropOpen] = useState(false);
  const propRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!propOpen) return;

    const handler = (e: MouseEvent) => {
      if (!propRef.current?.contains(e.target as Node)) setPropOpen(false);
    };

    document.addEventListener('mousedown', handler);

    return () => document.removeEventListener('mousedown', handler);
  }, [propOpen]);

  const propLabel =
    prop.length > 0
      ? prop.map(p => PROP_LABELS[p]).join(', ')
      : '— Properties —';

  return (
    <section>
      <select
        value={tag ?? ''}
        onChange={e => onSetTag((e.target.value as Tags) || null)}
      >
        <option value="">— Tag —</option>
        {(Object.values(Tags) as Tags[]).map(t => (
          <option key={t} value={t}>
            {TAG_LABELS[t]}
          </option>
        ))}
      </select>

      <div ref={propRef} style={{ position: 'relative' }}>
        <button type="button" onClick={() => setPropOpen(o => !o)}>
          {propLabel}
        </button>

        {propOpen && (
          <div
            style={{ position: 'absolute', top: '100%', left: 0, zIndex: 10 }}
          >
            {(Object.values(PropTags) as PropTags[]).map(p => (
              <label key={p} style={{ display: 'block' }}>
                <input
                  type="checkbox"
                  checked={prop.includes(p)}
                  onChange={() => onToggleProp(p)}
                />
                {PROP_LABELS[p]}
              </label>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
