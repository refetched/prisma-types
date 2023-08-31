import { Enumerable } from '@refetched/core-types';

export type IntFilter = {
  equals?: number;
  gt?: number;
  gte?: number;
  in?: Enumerable<number>;
  lt?: number;
  lte?: number;
};
