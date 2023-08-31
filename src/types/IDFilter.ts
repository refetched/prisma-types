import { Enumerable } from '@refetched/core-types';

export type IDFilter = {
  equals?: string;
  in?: Enumerable<string>;
};
