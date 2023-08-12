import { Enumerable, Nullable } from '@refetched/core';

export type BaseIntNullableFilter = {
  equals?: Nullable<number>;
  gt?: number;
  gte?: number;
  in?: Nullable<Enumerable<number>>;
  lt?: number;
  lte?: number;
  not?: Nullable<number>;
  notIn?: Nullable<Enumerable<number>>;
};
