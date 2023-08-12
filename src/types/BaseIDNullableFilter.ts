import { Enumerable, Nullable } from '@refetched/core-types';

export type BaseIDNullableFilter = {
  equals?: Nullable<string>;
  in?: Nullable<Enumerable<string>>;
  not?: Nullable<string>;
  notIn?: Nullable<Enumerable<string>>;
};
