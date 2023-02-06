/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@metaplex-foundation/beet'
export type TransactionCreateArgs = {
  authorityIndex: number
  additionalSigners: number
  transactionMessage: Uint8Array
  memo: beet.COption<string>
}

/**
 * @category userTypes
 * @category generated
 */
export const transactionCreateArgsBeet =
  new beet.FixableBeetArgsStruct<TransactionCreateArgs>(
    [
      ['authorityIndex', beet.u8],
      ['additionalSigners', beet.u8],
      ['transactionMessage', beet.bytes],
      ['memo', beet.coption(beet.utf8String)],
    ],
    'TransactionCreateArgs'
  )
