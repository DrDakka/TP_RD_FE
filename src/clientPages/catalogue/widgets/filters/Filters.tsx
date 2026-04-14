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
import { FilterState } from '../../model';

type Props = {
  tagHandler: (arg: Tags) => void;
  propTagHandler: (arg: PropTags) => void;
  state: FilterState;
  getHref: {
    tag: (arg: Tags) => string;
    propTag: (arg: PropTags) => string;
  };
};

export const Filters: React.FC<Props> = ({
  tagHandler,
  propTagHandler,
  state,
  getHref,
}) => {
  const tags = Object.keys(uiToApi.tag) as TagUiLabel[];
  const propTags = Object.keys(uiToApi.propTag) as PropTagUiLabel[];

  const onTag = (uiKey: TagUiLabel) => tagHandler(uiToApi.tag[uiKey]);
  const onPropTag = (uiKey: PropTagUiLabel) =>
    propTagHandler(uiToApi.propTag[uiKey]);

  const activeTag = state.tag ? [apiToUi.tag[state.tag]] : [];
  const activePropTags = state.prop.map(p => apiToUi.propTag[p]);

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
          getHref={uiKey => getHref.tag(uiToApi.tag[uiKey])}
        />
        <DropDown
          label={'Property filter'}
          list={propTags}
          multiselect={true}
          onSelect={onPropTag}
          active={activePropTags}
          getHref={uiKey => getHref.propTag(uiToApi.propTag[uiKey])}
        />
      </div>
    </section>
  );
};
