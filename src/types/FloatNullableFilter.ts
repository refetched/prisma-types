import { Nullable } from '@refetched/core-types';

export type FloatNullableFilter = {
  equals?: Nullable<number>;
  gt?: number;
  gte?: number;
  in?: number[];
  lt?: number;
  lte?: number;
};
