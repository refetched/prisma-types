import { Enumerable, Nullable } from '@refetched/core-types';

export type IDNullableFilter = {
  equals?: Nullable<string>;
  in?: Nullable<Enumerable<string>>;
};
