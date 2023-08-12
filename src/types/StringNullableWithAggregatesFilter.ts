import { NestedStringNullableWithAggregatesFilter } from './NestedStringNullableWithAggregatesFilter';
import { QueryMode } from './QueryMode';

export type StringNullableWithAggregatesFilter = NestedStringNullableWithAggregatesFilter & {
  mode?: QueryMode;
};
