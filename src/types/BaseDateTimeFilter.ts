import { Enumerable } from '@refetched/core';

export type BaseDateTimeFilter = {
  equals?: Date | string;
  gt?: Date | string;
  gte?: Date | string;
  in?: Enumerable<Date> | Enumerable<string>;
  lt?: Date | string;
  lte?: Date | string;
  not?: Date | string;
  notIn?: Enumerable<Date> | Enumerable<string>;
};
