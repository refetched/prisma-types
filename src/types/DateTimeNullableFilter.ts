import { Nullable } from '@refetched/core-types';

export type DateTimeNullableFilter = {
  equals?: Nullable<Date>;
  gt?: Date;
  gte?: Date;
  in?: Date[];
  lt?: Date;
  lte?: Date;
};
