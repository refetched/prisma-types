import { Enumerable, Nullable } from '@refetched/core-types';
import { QueryMode } from '.';

export type StringNullableFilter = {
  contains?: string;
  endsWith?: string;
  equals?: Nullable<string>;
  gt?: string;
  gte?: string;
  in?: Nullable<Enumerable<string>>;
  lt?: string;
  lte?: string;
  mode?: QueryMode;
  startsWith?: string;
};
