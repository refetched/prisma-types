import { Encoded } from '@refetched/core-types';
import { Encrypted } from '@refetched/cryptography-types';

export type DecodedCursor = {
  data: Encrypted;
  iv: Encoded;
};
