import { Enumerable } from '@refetched/core-types';

export type BaseStringFilter = {
  contains?: string;
  endsWith?: string;
  equals?: string;
  gt?: string;
  gte?: string;
  in?: Enumerable<string>;
  lt?: string;
  lte?: string;
  not?: string;
  notIn?: Enumerable<string>;
  startsWith?: string;
};
