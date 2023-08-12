import { BaseStringFilter } from './BaseStringFilter';

export type NestedStringFilter = BaseStringFilter | { not?: NestedStringFilter };
