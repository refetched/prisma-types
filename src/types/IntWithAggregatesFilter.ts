import { BaseIntFilter, FloatFilter, IntFilter } from '.';

export type IntWithAggregatesFilter =
  | BaseIntFilter
  | { not?: IntWithAggregatesFilter }
  | {
      _avg?: FloatFilter;
      _count?: IntFilter;
      _max?: IntFilter;
      _min?: IntFilter;
      _sum?: IntFilter;
    };
