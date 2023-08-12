import { NestedStringWithAggregatesFilter } from './NestedStringWithAggregatesFilter';
import { QueryMode } from './QueryMode';

export type StringWithAggregatesFilter = NestedStringWithAggregatesFilter & {
  mode?: QueryMode;
};
