import { Enumerable } from '@refetched/core';

export type BaseIDFilter = {
  equals?: string;
  in?: Enumerable<string>;
  not?: string;
  notIn?: Enumerable<string>;
};
