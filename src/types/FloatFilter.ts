import { Enumerable } from '@refetched/core-types';

export type FloatFilter = {
  equals?: number;
  gt?: number;
  gte?: number;
  in?: Enumerable<number>;
  lt?: number;
  lte?: number;
};
