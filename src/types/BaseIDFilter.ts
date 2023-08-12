import { Enumerable } from '@refetched/core-types';

export type BaseIDFilter = {
  equals?: string;
  in?: Enumerable<string>;
  not?: string;
  notIn?: Enumerable<string>;
};
