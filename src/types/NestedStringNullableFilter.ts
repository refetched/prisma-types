import { BaseStringNullableFilter } from './BaseStringNullableFilter';

export type NestedStringNullableFilter = BaseStringNullableFilter | { not?: NestedStringNullableFilter };
