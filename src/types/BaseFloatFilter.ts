import { Enumerable } from '@refetched/core-types';

export type BaseFloatFilter = {
  equals?: number;
  gt?: number;
  gte?: number;
  in?: Enumerable<number>;
  lt?: number;
  lte?: number;
  not?: number;
  notIn?: Enumerable<number>;
};
