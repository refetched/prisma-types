import { BaseStringFilter } from './BaseStringFilter';
import { IntFilter } from './IntFilter';
import { NestedStringFilter } from './NestedStringFilter';

export type NestedStringWithAggregatesFilter =
  | BaseStringFilter
  | { not?: NestedStringWithAggregatesFilter }
  | {
      _count?: IntFilter;
      _max?: NestedStringFilter;
      _min?: NestedStringFilter;
    };
