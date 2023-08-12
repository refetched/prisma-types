import { FloatNullableFilter, IntNullableFilter } from '.';
import { BaseIntNullableFilter } from './BaseIntNullableFilter';

export type IntNullableWithAggregatesFilter =
  | BaseIntNullableFilter
  | { not?: IntNullableWithAggregatesFilter }
  | {
      _avg?: FloatNullableFilter;
      _count?: IntNullableFilter;
      _max?: IntNullableFilter;
      _min?: IntNullableFilter;
      _sum?: IntNullableFilter;
    };
