import { BaseFloatNullableFilter } from '.';

export type FloatNullableFilter = BaseFloatNullableFilter | { not?: FloatNullableFilter };
