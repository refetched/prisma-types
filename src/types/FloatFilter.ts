import { BaseFloatFilter } from '.';

export type FloatFilter = BaseFloatFilter | { not?: FloatFilter };
