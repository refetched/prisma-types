import { BaseIDFilter } from '.';

export type IDFilter = BaseIDFilter | { not?: IDFilter };
