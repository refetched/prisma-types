import { Keys } from '@refetched/core-types';
import { OrderByInput } from './OrderByInput';

export type DecryptedCursorData<T extends object> = {
  args: { orderBy: OrderByInput<T>[] };
  entity: { [K in Keys<T>]: T[K] };
};
