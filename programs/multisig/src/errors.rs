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
    #[msg("Transaction is stale")]
    StaleTransaction,
    #[msg("Invalid transaction status")]
    InvalidTransactionStatus,
    #[msg("Transaction does not belong to the multisig")]
    TransactionNotForMultisig,
    #[msg("Member already approved the transaction")]
    AlreadyApproved,
    #[msg("Member already rejected the transaction")]
    AlreadyRejected,
    #[msg("Wrong number of accounts provided")]
    InvalidNumberOfAccounts,
    #[msg("Invalid account provided")]
    InvalidAccount,
    #[msg("transaction_execute reentrancy is forbidden")]
    ExecuteReentrancy,
    #[msg("Cannot remove last member")]
    RemoveLastMember,
    #[msg("Members don't include any voters")]
    NoVoters,
    #[msg("config_authority must be set to non-default key")]
    InvalidStaleTransactionIndex,
}
