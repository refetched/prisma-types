import { NestedStringNullableFilter } from './NestedStringNullableFilter';
import { QueryMode } from './QueryMode';

export type StringNullableFilter = NestedStringNullableFilter & {
  mode?: QueryMode;
};
