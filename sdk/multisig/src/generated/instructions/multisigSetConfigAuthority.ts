/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@metaplex-foundation/beet'
import * as web3 from '@solana/web3.js'
import {
  MultisigSetConfigAuthorityArgs,
  multisigSetConfigAuthorityArgsBeet,
} from '../types/MultisigSetConfigAuthorityArgs'

/**
 * @category Instructions
 * @category MultisigSetConfigAuthority
 * @category generated
 */
export type MultisigSetConfigAuthorityInstructionArgs = {
  args: MultisigSetConfigAuthorityArgs
}
/**
 * @category Instructions
 * @category MultisigSetConfigAuthority
 * @category generated
 */
export const multisigSetConfigAuthorityStruct = new beet.FixableBeetArgsStruct<
  MultisigSetConfigAuthorityInstructionArgs & {
    instructionDiscriminator: number[] /* size: 8 */
  }
>(
  [
    ['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['args', multisigSetConfigAuthorityArgsBeet],
  ],
  'MultisigSetConfigAuthorityInstructionArgs'
)
/**
 * Accounts required by the _multisigSetConfigAuthority_ instruction
 *
 * @property [_writable_] multisig
 * @property [**signer**] configAuthority
 * @property [_writable_, **signer**] rentPayer (optional)
 * @category Instructions
 * @category MultisigSetConfigAuthority
 * @category generated
 */
export type MultisigSetConfigAuthorityInstructionAccounts = {
  multisig: web3.PublicKey
  configAuthority: web3.PublicKey
  rentPayer?: web3.PublicKey
  systemProgram?: web3.PublicKey
  anchorRemainingAccounts?: web3.AccountMeta[]
}

export const multisigSetConfigAuthorityInstructionDiscriminator = [
  143, 93, 199, 143, 92, 169, 193, 232,
]

/**
 * Creates a _MultisigSetConfigAuthority_ instruction.
 *
 * Optional accounts that are not provided will be omitted from the accounts
 * array passed with the instruction.
 * An optional account that is set cannot follow an optional account that is unset.
 * Otherwise an Error is raised.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category MultisigSetConfigAuthority
 * @category generated
 */
export function createMultisigSetConfigAuthorityInstruction(
  accounts: MultisigSetConfigAuthorityInstructionAccounts,
  args: MultisigSetConfigAuthorityInstructionArgs,
  programId = new web3.PublicKey('SQDS4ep65T869zMMBKyuUq6aD6EgTu8psMjkvj52pCf')
) {
  const [data] = multisigSetConfigAuthorityStruct.serialize({
    instructionDiscriminator:
      multisigSetConfigAuthorityInstructionDiscriminator,
    ...args,
  })
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.multisig,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.configAuthority,
      isWritable: false,
      isSigner: true,
    },
  ]

  if (accounts.rentPayer != null) {
    keys.push({
      pubkey: accounts.rentPayer,
      isWritable: true,
      isSigner: true,
    })
  }
  if (accounts.systemProgram != null) {
    if (accounts.rentPayer == null) {
      throw new Error(
        "When providing 'systemProgram' then 'accounts.rentPayer' need(s) to be provided as well."
      )
    }
    keys.push({
      pubkey: accounts.systemProgram,
      isWritable: false,
      isSigner: false,
    })
  }

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
