using System;
using System.Collections.Immutable;
using Libplanet.Crypto;
using Libplanet.Types.Assets;
using Libplanet.Types.Blocks;

namespace Libplanet.Types.Tx
{
    /// <summary>
    /// Content of a transaction without any information related to author or signature.
    /// The content is ready to be signed by any account.  It can be made a fully fledged
    /// <see cref="ITransaction"/> by being combined with an <see cref="ITxSigningMetadata"/>
    /// and a signature.
    /// </summary>
    /// <seealso cref="TxInvoice" />
    /// <seealso cref="ITxSigningMetadata" />
    /// <seealso cref="IUnsignedTx" />
    /// <seealso cref="ITransaction" />
    public interface ITxInvoice : IEquatable<ITxInvoice>
    {
        /// <summary>
        /// <para>
        /// A deprecated property which was used as an approximated list of addresses whose states
        /// would be affected by actions in this transaction.
        /// </para>
        /// <para>
        /// This is no longer officially supported in the sense that a <see cref="Transaction"/>
        /// cannot be created with a non-empty set of <see cref="Address"/>es through normal means
        /// (i.e. using intended APIs).
        /// </para>
        /// <para>
        /// It is still possible to create a <see cref="Transaction"/> through other means,
        /// such as creating a payload directly by assigning appropriate values and signing
        /// an "unsigned transaction".  This is not recommended.
        /// </para>
        /// </summary>
        IImmutableSet<Address> UpdatedAddresses { get; }

        /// <summary>
        /// The time this transaction is created and signed.
        /// </summary>
        DateTimeOffset Timestamp { get; }

        /// <summary>
        /// A <see cref="BlockHash"/> value of the genesis which this transaction is made
        /// from.  This can be <see langword="null"/> iff the transaction is contained in
        /// the genesis block.
        /// </summary>
        BlockHash? GenesisHash { get; }

        /// <summary>
        /// A list of actions in this transaction.
        /// </summary>
        TxActionList Actions { get; }

        /// <summary>
        /// <para>
        /// The maximum amount of <see cref="FungibleAssetValue"/> that the
        /// <see cref="Transaction"/>'s author is willing to pay per gas
        /// for the <see cref="Transaction"/>.
        /// </para>
        /// <para>
        /// If <see langword="null"/>, gas processing is entirely bypassed.
        /// The parity of <see langword="null"/>-ness is always the same as
        /// that of <see cref="GasLimit"/>.
        /// </para>
        /// <para>
        /// If not <see langword="null"/>, this value cannot be negative.
        /// </para>
        /// </summary>
        /// <seealso cref="IFeeCollector"/>
        /// <seealso cref="GasLimit"/>
        FungibleAssetValue? MaxGasPrice { get; }

        /// <summary>
        /// <para>
        /// The limit on the total amount of gas that the <see cref="Transaction"/> can use.
        /// </para>
        /// <para>
        /// If <see langword="null"/>, gas processing is entirely bypassed.
        /// The parity of <see langword="null"/>-ness is always the same as
        /// that of <see cref="MaxGasPrice"/>.
        /// </para>
        /// <para>
        /// If not <see langword="null"/>, this value cannot be negative.
        /// </para>
        /// </summary>
        /// <seealso cref="IFeeCollector"/>
        /// <seealso cref="GasLimit"/>
        long? GasLimit { get; }
    }
}
