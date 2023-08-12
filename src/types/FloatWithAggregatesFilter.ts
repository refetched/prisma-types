import { BaseFloatFilter, FloatFilter } from '.';

export type FloatWithAggregatesFilter =
  | BaseFloatFilter
  | { not?: FloatWithAggregatesFilter }
  | {
      _avg?: FloatFilter;
      _count?: FloatFilter;
      _max?: FloatFilter;
      _min?: FloatFilter;
      _sum?: FloatFilter;
    };
