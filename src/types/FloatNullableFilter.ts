import { Enumerable, Nullable } from '@refetched/core-types';

export type FloatNullableFilter = {
  equals?: Nullable<number>;
  gt?: number;
  gte?: number;
  in?: Nullable<Enumerable<number>>;
  lt?: number;
  lte?: number;
};
