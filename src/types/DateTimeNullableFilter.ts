import { Enumerable, Nullable } from '@refetched/core-types';

export type DateTimeNullableFilter = {
  equals?: Nullable<Date | string>;
  gt?: Date | string;
  gte?: Date | string;
  in?: Nullable<Enumerable<Date> | Enumerable<string>>;
  lt?: Date | string;
  lte?: Date | string;
};
