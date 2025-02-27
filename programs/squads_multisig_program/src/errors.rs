use anchor_lang::prelude::*;

#[error_code]
pub enum MultisigError {
    #[msg("Found multiple members with the same pubkey")]
    DuplicateMember,
    #[msg("Members array is empty")]
    EmptyMembers,
    #[msg("Too many members, can be up to 65535")]
    TooManyMembers,
    #[msg("Invalid threshold, must be between 1 and number of members with Vote permission")]
    InvalidThreshold,
    #[msg("Attempted to perform an unauthorized action")]
    Unauthorized,
    #[msg("Provided pubkey is not a member of multisig")]
    NotAMember,
    #[msg("TransactionMessage is malformed.")]
    InvalidTransactionMessage,
    #[msg("Proposal is stale")]
    StaleProposal,
    #[msg("Invalid proposal status")]
    InvalidProposalStatus,
    #[msg("Invalid transaction index")]
    InvalidTransactionIndex,
    #[msg("Member already approved the transaction")]
    AlreadyApproved,
    #[msg("Member already rejected the transaction")]
    AlreadyRejected,
    #[msg("Member already cancelled the transaction")]
    AlreadyCancelled,
    #[msg("Wrong number of accounts provided")]
    InvalidNumberOfAccounts,
    #[msg("Invalid account provided")]
    InvalidAccount,
    #[msg("Cannot remove last member")]
    RemoveLastMember,
    #[msg("Members don't include any voters")]
    NoVoters,
    #[msg("Members don't include any proposers")]
    NoProposers,
    #[msg("Members don't include any executors")]
    NoExecutors,
    #[msg("`stale_transaction_index` must be <= `transaction_index`")]
    InvalidStaleTransactionIndex,
    #[msg("Instruction not supported for controlled multisig")]
    NotSupportedForControlled,
    #[msg("Proposal time lock has not been released")]
    TimeLockNotReleased,
    #[msg("Config transaction must have at least one action")]
    NoActions,
    #[msg("Missing account")]
    MissingAccount,
    #[msg("Invalid mint")]
    InvalidMint,
    #[msg("Invalid destination")]
    InvalidDestination,
    #[msg("Spending limit exceeded")]
    SpendingLimitExceeded,
    #[msg("Decimals don't match the mint")]
    DecimalsMismatch,
    #[msg("Member has unknown permission")]
    UnknownPermission,
    #[msg("Account is protected, it cannot be passed into a CPI as writable")]
    ProtectedAccount,
}
