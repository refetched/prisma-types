import { Encoded } from '@refetched/core-types';
import { Encrypted } from '@refetched/cryptography';

export type DecodedCursor = {
  iv: Encoded;
  data: Encrypted;
};
