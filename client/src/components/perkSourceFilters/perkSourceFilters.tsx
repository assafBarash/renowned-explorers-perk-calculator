import { FC } from 'react';
import { PerkSources } from '../../business/types';
import {
  CheckboxFilters,
  CheckboxFiltersProps,
} from '../checkboxFilters/checkboxFilters';

type FilterOnChange = CheckboxFiltersProps<PerkSources>['onChange'];

export const PerkSourceFilters: FC<{
  onChange: FilterOnChange;
}> = ({ onChange }) => (
  <CheckboxFilters options={PerkSources} onChange={onChange} />
);
