import { Enumerable, Nullable } from '@refetched/core';

export type BaseStringNullableFilter = {
  contains?: string;
  endsWith?: string;
  equals?: Nullable<string>;
  gt?: string;
  gte?: string;
  in?: Nullable<Enumerable<string>>;
  lt?: string;
  lte?: string;
  not?: Nullable<string>;
  notIn?: Nullable<Enumerable<string>>;
  startsWith?: string;
};
