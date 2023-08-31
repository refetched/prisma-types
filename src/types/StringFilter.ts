import { QueryMode } from '.';

export type StringFilter = {
  contains?: string;
  endsWith?: string;
  equals?: string;
  gt?: string;
  gte?: string;
  in?: string[];
  lt?: string;
  lte?: string;
  mode?: QueryMode;
  startsWith?: string;
};
