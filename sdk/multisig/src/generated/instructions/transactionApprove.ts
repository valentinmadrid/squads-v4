/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@metaplex-foundation/beet'
import * as web3 from '@solana/web3.js'
import {
  TransactionVoteArgs,
  transactionVoteArgsBeet,
} from '../types/TransactionVoteArgs'

/**
 * @category Instructions
 * @category TransactionApprove
 * @category generated
 */
export type TransactionApproveInstructionArgs = {
  args: TransactionVoteArgs
}
/**
 * @category Instructions
 * @category TransactionApprove
 * @category generated
 */
export const transactionApproveStruct = new beet.FixableBeetArgsStruct<
  TransactionApproveInstructionArgs & {
    instructionDiscriminator: number[] /* size: 8 */
  }
>(
  [
    ['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['args', transactionVoteArgsBeet],
  ],
  'TransactionApproveInstructionArgs'
)
/**
 * Accounts required by the _transactionApprove_ instruction
 *
 * @property [] multisig
 * @property [_writable_] transaction
 * @property [_writable_, **signer**] member
 * @category Instructions
 * @category TransactionApprove
 * @category generated
 */
export type TransactionApproveInstructionAccounts = {
  multisig: web3.PublicKey
  transaction: web3.PublicKey
  member: web3.PublicKey
  anchorRemainingAccounts?: web3.AccountMeta[]
}

export const transactionApproveInstructionDiscriminator = [
  71, 56, 60, 211, 81, 39, 26, 220,
]

/**
 * Creates a _TransactionApprove_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category TransactionApprove
 * @category generated
 */
export function createTransactionApproveInstruction(
  accounts: TransactionApproveInstructionAccounts,
  args: TransactionApproveInstructionArgs,
  programId = new web3.PublicKey('SQDS4ep65T869zMMBKyuUq6aD6EgTu8psMjkvj52pCf')
) {
  const [data] = transactionApproveStruct.serialize({
    instructionDiscriminator: transactionApproveInstructionDiscriminator,
    ...args,
  })
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.multisig,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.transaction,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.member,
      isWritable: true,
      isSigner: true,
    },
  ]

  if (accounts.anchorRemainingAccounts != null) {
    for (const acc of accounts.anchorRemainingAccounts) {
      keys.push(acc)
    }
  }

  const ix = new web3.TransactionInstruction({
    programId,
    keys,
    data,
  })
  return ix
}
