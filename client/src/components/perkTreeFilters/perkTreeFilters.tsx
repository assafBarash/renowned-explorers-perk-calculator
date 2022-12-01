import { FC } from 'react';
import { PerkTrees } from '../../business/types';
import {
  CheckboxFilters,
  CheckboxFiltersProps,
} from '../checkboxFilters/checkboxFilters';

type FilterOnChange = CheckboxFiltersProps<PerkTrees>['onChange'];

export const PerkTreeFilters: FC<{
  onChange: FilterOnChange;
}> = ({ onChange }) => (
  <CheckboxFilters options={PerkTrees} onChange={onChange} />
);
