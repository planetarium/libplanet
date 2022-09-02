using Libplanet.Action;
using Libplanet.Crypto;
using Libplanet.Tx;

namespace Libplanet.Tests
{
    public static class TransactionExtensions
    {
        /// <summary>
        /// Almost equivalent to <see cref="Transaction{T}.Validate()"/>, except that when
        /// the transaction's signature is invalid, it throws an <see
        /// cref="InvalidSignatureException"/> with a better error message, which suggests
        /// the valid one as well so that someone who is debugging the test can change
        /// the hard-coded outdated signature of fixture data.
        /// </summary>
        /// <param name="tx">The transaction to validate.</param>
        /// <param name="privateKey">The private key corresponding to the signer.</param>
        public static void Validate<T>(this Transaction<T> tx, PrivateKey privateKey)
            where T : IAction, new()
        {
            try
            {
                tx.Validate();
            }
            catch (InvalidTxSignatureException)
            {
                byte[] serialized = tx.Serialize(false);
                byte[] validSignature = privateKey.Sign(serialized);
                throw new InvalidTxSignatureException(
                    "The transaction's signature is invalid.  " +
                    "Suggest you to change it to the valid one instead.\n" +
                    $"Actual invalid signature:  {ByteUtil.Hex(tx.Signature)}\n" +
                    $"Suggested valid signature: {ByteUtil.Hex(validSignature)}",
                    tx.Id
                );
            }
        }
    }
}
