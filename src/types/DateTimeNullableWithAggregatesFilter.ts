import { BaseDateTimeNullableFilter, DateTimeNullableFilter, IntNullableFilter } from '.';

export type DateTimeNullableWithAggregatesFilter =
  | BaseDateTimeNullableFilter
  | { not?: DateTimeNullableWithAggregatesFilter }
  | {
      _count?: IntNullableFilter;
      _max?: DateTimeNullableFilter;
      _min?: DateTimeNullableFilter;
    };
