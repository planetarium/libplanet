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
        /// The maximum amount of <see cref="FungibleAssetValue"/> that the transaction author is
        /// willing to pay for the transaction.
        /// This can be <see langword="null"/> if align the handling of that transaction
        /// with the <see cref="IFeeCollector"/>.
        /// </summary>
        FungibleAssetValue? MaxGasPrice { get; }

        /// <summary>
        /// The limit of the total amount of gas that the transaction will use.
        /// This can be <see langword="null"/> if align the handling of that transaction
        /// with the <see cref="IFeeCollector"/>.
        /// </summary>
        long? GasLimit { get; }
    }
}
