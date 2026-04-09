import {
  PropTags,
  type PropTagUiLabel,
  Tags,
  type TagUiLabel,
  uiToApi,
  apiToUi,
} from '@/shared';
import { DropDown } from './ui';

import s from './filters.module.scss';

type Props = {
  tagHandler: (arg: Tags) => void;
  propTagHandler: (arg: PropTags) => void;
  active: {
    tag: Tags | null;
    propTag: PropTags[];
  };
};

export const Filters: React.FC<Props> = ({
  tagHandler,
  propTagHandler,
  active,
}) => {
  const tags = Object.keys(uiToApi.tag) as TagUiLabel[];
  const propTags = Object.keys(uiToApi.propTag) as PropTagUiLabel[];

  const onTag = (uiKey: TagUiLabel) => tagHandler(uiToApi.tag[uiKey]);
  const onPropTag = (uiKey: PropTagUiLabel) =>
    propTagHandler(uiToApi.propTag[uiKey]);

  const activeTag = active.tag ? [apiToUi.tag[active.tag]] : [];
  const propTagArr = Array.isArray(active.propTag)
    ? active.propTag
    : active.propTag
      ? [active.propTag]
      : [];
  const activePropTags = propTagArr.map(p => apiToUi.propTag[p]);

  return (
    <section className={s.container} data-widget="filters">
      <h2>Filters</h2>
      <div className={s.scrollable}>
        <input type="text" disabled placeholder="Category filter"></input>
        <DropDown
          label={'Tags filter'}
          list={tags}
          multiselect={false}
          onSelect={onTag}
          active={activeTag}
        />
        <DropDown
          label={'Property filter'}
          list={propTags}
          multiselect={true}
          onSelect={onPropTag}
          active={activePropTags}
        />
      </div>
    </section>
  );
};
