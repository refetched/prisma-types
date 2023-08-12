import { BaseFloatNullableFilter, FloatNullableFilter } from '.';

export type FloatNullableWithAggregatesFilter =
  | BaseFloatNullableFilter
  | { not?: FloatNullableWithAggregatesFilter }
  | {
      _avg?: FloatNullableFilter;
      _count?: FloatNullableFilter;
      _max?: FloatNullableFilter;
      _min?: FloatNullableFilter;
      _sum?: FloatNullableFilter;
    };
