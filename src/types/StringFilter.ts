import { Enumerable } from '@refetched/core-types';
import { QueryMode } from '.';

export type StringFilter = {
  contains?: string;
  endsWith?: string;
  equals?: string;
  gt?: string;
  gte?: string;
  in?: Enumerable<string>;
  lt?: string;
  lte?: string;
  mode?: QueryMode;
  startsWith?: string;
};
