import { Enumerable, Nullable } from '@refetched/core-types';

export type BaseFloatNullableFilter = {
  equals?: Nullable<number>;
  gt?: number;
  gte?: number;
  in?: Nullable<Enumerable<number>>;
  lt?: number;
  lte?: number;
  not?: Nullable<number>;
  notIn?: Nullable<Enumerable<number>>;
};
