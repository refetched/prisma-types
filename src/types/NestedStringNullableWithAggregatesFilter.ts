import { BaseStringNullableFilter, IntNullableFilter, NestedStringNullableFilter } from '.';

export type NestedStringNullableWithAggregatesFilter =
  | BaseStringNullableFilter
  | { not?: NestedStringNullableWithAggregatesFilter }
  | {
      _count?: IntNullableFilter;
      _max?: NestedStringNullableFilter;
      _min?: NestedStringNullableFilter;
    };
