import { Enumerable, Nullable } from '@refetched/core-types';

export type IntNullableFilter = {
  equals?: Nullable<number>;
  gt?: number;
  gte?: number;
  in?: Nullable<Enumerable<number>>;
  lt?: number;
  lte?: number;
};
