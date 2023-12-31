import { Keys } from '@refetched/core-types';
import { SortOrder } from './SortOrder';

export type OrderByInput<T extends object> = {
  [K in Keys<T>]?: SortOrder;
};
