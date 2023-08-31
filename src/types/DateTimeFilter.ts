import { Enumerable } from '@refetched/core-types';

export type DateTimeFilter = {
  equals?: Date | string;
  gt?: Date | string;
  gte?: Date | string;
  in?: Enumerable<Date> | Enumerable<string>;
  lt?: Date | string;
  lte?: Date | string;
};
