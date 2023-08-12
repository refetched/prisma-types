import { Enumerable, Nullable } from '@refetched/core';

export type BaseIDNullableFilter = {
  equals?: Nullable<string>;
  in?: Nullable<Enumerable<string>>;
  not?: Nullable<string>;
  notIn?: Nullable<Enumerable<string>>;
};
