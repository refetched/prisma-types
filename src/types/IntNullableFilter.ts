import { Nullable } from '@refetched/core-types';

export type IntNullableFilter = {
  equals?: Nullable<number>;
  gt?: number;
  gte?: number;
  in?: Nullable<number[]>;
  lt?: number;
  lte?: number;
};
