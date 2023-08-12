import { BaseDateTimeNullableFilter } from '.';

export type DateTimeNullableFilter = BaseDateTimeNullableFilter | { not?: DateTimeNullableFilter };
