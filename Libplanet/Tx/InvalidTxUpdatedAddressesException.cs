using System;
using System.Collections.Immutable;
using System.Diagnostics.CodeAnalysis;
using System.Linq;

namespace Libplanet.Tx
{
    /// <summary>
    /// The exception that is thrown when a given
    /// <see cref="InvalidTxException.TxId"/> cannot be found.
    /// The exception that is thrown when a <see cref="Transaction{T}"/>'s
    /// <see cref="Transaction{T}.Actions"/> try to update any
    /// <see cref="Address"/>es that are not included in
    /// <see cref="Transaction{T}.UpdatedAddresses"/> (i.e., <see
    /// cref="Address"/>es that <see cref="Transaction{T}"/>'s
    /// <see cref="Transaction{T}.Signer"/> granted to update.)
    /// </summary>
    public class InvalidTxUpdatedAddressesException : InvalidTxException
    {
        /// <summary>
        /// Creates a new <see cref="InvalidTxUpdatedAddressesException"/>
        /// object.
        /// </summary>
        /// <param name="txid">The invalid <see cref="Transaction{T}"/>'s
        /// <see cref="Transaction{T}.Id"/>.  It is automatically included to
        /// the <see cref="Exception.Message"/> string.</param>
        /// <param name="updatableAddresses">Specifies the
        /// <see cref="UpdatableAddresses"/>.</param>
        /// <param name="updatedAddresses">Specified the
        /// <see cref="UpdatedAddresses"/>.</param>
        /// <param name="message">Specifies a <see cref="Exception.Message"/>.
        /// </param>
        [SuppressMessage(
            "Microsoft.StyleCop.CSharp.ReadabilityRules",
            "SA1118",
            Justification = "A long error message should be multiline.")]
        public InvalidTxUpdatedAddressesException(
            TxId txid,
            IImmutableSet<Address> updatableAddresses,
            IImmutableSet<Address> updatedAddresses,
            string message
        )
            : base(
                txid,
                $"{message}\n" +
                $"Updatable addresses: {ListAddresses(updatableAddresses)}\n" +
                $"Updated addresses: {ListAddresses(updatedAddresses)}"
            )
        {
            UpdatableAddresses = updatableAddresses;
            UpdatedAddresses = updatedAddresses;
        }

        /// <summary>
        /// Expected <see cref="Address"/>es to be updated.  That means,
        /// <see cref="Address"/>es that <see cref="Transaction{T}"/>'s
        /// <see cref="Transaction{T}.Signer"/> granted to update.
        /// </summary>
        public IImmutableSet<Address> UpdatableAddresses { get; }

        /// <summary>
        /// <see cref="Address"/>es that <see cref="Transaction{T}.Actions"/>
        /// actually try to update.
        /// </summary>
        public IImmutableSet<Address> UpdatedAddresses { get; }

        private static string ListAddresses(IImmutableSet<Address> addresses) =>
            string.Join(", ", addresses.Select(a => a.ToHex()).OrderBy(a => a));
    }
}
