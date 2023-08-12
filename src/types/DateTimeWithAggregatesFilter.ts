import { BaseDateTimeFilter, DateTimeFilter, IntFilter } from '.';

export type DateTimeWithAggregatesFilter =
  | BaseDateTimeFilter
  | { not?: DateTimeWithAggregatesFilter }
  | {
      _count?: IntFilter;
      _max?: DateTimeFilter;
      _min?: DateTimeFilter;
    };
