import { Keys } from '@refetched/core-types';

export type WhereInput<T extends object> =
  | { [K in Keys<T>]?: unknown }
  | { AND?: WhereInput<T>[] }
  | { OR?: WhereInput<T>[] }
  | { NOT?: WhereInput<T>[] };
