#nullable enable
using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Globalization;
using System.Linq;
using System.Numerics;
using System.Security.Cryptography;
using System.Text;
using System.Threading;
using Bencodex;
using Libplanet.Action;
using Libplanet.Tx;

namespace Libplanet.Blocks
{
    /// <summary>
    /// A block content without any proofs like nonce or hash.  This represents contents of a
    /// block that is not yet mined.
    /// </summary>
    /// <typeparam name="T">A class implementing <see cref="IAction"/> to include.  This type
    /// parameter is aligned with <see cref="Transaction{T}"/>'s type parameter.</typeparam>
    /// <remarks>Unlike other model types like <see cref="Block{T}"/> or
    /// <see cref="Transaction{T}"/>, this type is mutable.  To get a distinct instance with
    /// partly changed fields, use <see cref="Clone()"/> method and property setters on a copy
    /// instead.</remarks>
    public sealed class BlockContent<T> : ICloneable
        where T : IAction, new()
    {
        private const int CurrentProtocolVersion = BlockHeader.CurrentProtocolVersion;
        private const string TimestampFormat = "yyyy-MM-ddTHH:mm:ss.ffffffZ";

        private int _protocolVersion = CurrentProtocolVersion;
        private long _index;
        private DateTimeOffset _timestamp = DateTimeOffset.UtcNow;
        private long _difficulty;
        private BigInteger _totalDifficulty;
        private IReadOnlyList<Transaction<T>> _transactions = ImmutableArray<Transaction<T>>.Empty;

        /// <summary>
        /// The protocol version number.
        /// </summary>
        public int ProtocolVersion
        {
            get => _protocolVersion;
            set
            {
                if (value < 0)
                {
                    throw new InvalidBlockProtocolVersionException(
                        value,
                        $"A block's protocol version cannot be less than zero: {value}."
                    );
                }
                else if (value > CurrentProtocolVersion)
                {
                    string msg =
                        "A block's protocol version cannot be greater than " +
                        $"{CurrentProtocolVersion}: {value}.";
                    throw new InvalidBlockProtocolVersionException(value, msg);
                }

                _protocolVersion = value;
            }
        }

        /// <summary>
        /// The height of the block.
        /// </summary>
        /// <remarks>Zero means it is a genesis block.  Disallowed to be negative.</remarks>
        /// <exception cref="InvalidBlockIndexException">Thrown when the value to set is negative.
        /// </exception>
        public long Index
        {
            get => _index;
            set => _index
                = value >= 0L
                ? value
                : throw new InvalidBlockIndexException($"A negative index is disallowed: {value}.");
        }

        /// <summary>
        /// The time the block is created.
        /// </summary>
        /// <remarks>This is always UTC.</remarks>
        public DateTimeOffset Timestamp
        {
            get => _timestamp;
            set => _timestamp = value.ToUniversalTime();
        }

        /// <summary>
        /// The address of the miner.
        /// </summary>
        public Address Miner { get; set; }

        /// <summary>
        /// The mining difficulty that the block's <see cref="Nonce"/> has to satisfy.
        /// </summary>
        /// <exception cref="InvalidBlockDifficultyException">Thrown when the value to set is
        ///  is negative.</exception>
        /// <remarks>This cannot not be negative.  When <see cref="Difficulty"/> is updated,
        /// <see cref="TotalDifficulty"/> is updated together.  For example, when
        /// <see cref="Difficulty"/> = 10 and <see cref="TotalDifficulty"/> = 50,
        /// if <see cref="Difficulty"/> is updated to 20 (= 10 + 10) <see cref="TotalDifficulty"/>
        /// is also updated to 60 (= 50 + 10).</remarks>
        public long Difficulty
        {
            get => _difficulty;
            set
            {
                if (value < 0L)
                {
                    throw new InvalidBlockDifficultyException(
                        $"{nameof(Difficulty)} cannot be negative: {value}"
                    );
                }

                long delta = value - _difficulty;
                _difficulty = value;
                _totalDifficulty += delta;
            }
        }

        /// <summary>
        /// The total mining difficulty since the genesis including the block's
        /// <see cref="Difficulty"/>.
        /// </summary>
        /// <exception cref="InvalidBlockTotalDifficultyException">Thrown when the value to set
        /// is less than <see cref="Difficulty"/>.</exception>
        /// <remarks>This must be greater than or equal to <see cref="Difficulty"/> at least, and
        /// must not be negative.</remarks>
        public BigInteger TotalDifficulty
        {
            get => _totalDifficulty;
            set
            {
                if (value < BigInteger.Zero)
                {
                    throw new InvalidBlockTotalDifficultyException(
                        Difficulty,
                        value,
                        $"{nameof(TotalDifficulty)} cannot be negative: ${value}."
                    );
                }
                else if (value < Difficulty)
                {
                    string msg =
                        $"{nameof(TotalDifficulty)} ({value}) cannot be less than " +
                        $"{nameof(Difficulty)} ({Difficulty}).";
                    throw new InvalidBlockTotalDifficultyException(Difficulty, value, msg);
                }

                _totalDifficulty = value;
            }
        }

        /// <summary>
        /// The previous block's hash.  If it's a genesis block (i.e., its <see cref="Index"/> is 0)
        /// this should be <c>null</c>.
        /// </summary>
        public BlockHash? PreviousHash { get; set;  }

        /// <summary>
        /// Transactions belonging to the block.
        /// </summary>
        /// <remarks>This is always ordered by <see cref="Transaction{T}.Id"/>.</remarks>
        /// <exception cref="InvalidTxSignatureException">Thrown when any tx signature is invalid or
        /// not signed by its signer.</exception>
        /// <exception cref="InvalidTxPublicKeyException">Thrown when any tx signer is not derived
        /// from its its public key.</exception>
        /// <exception cref="InvalidTxNonceException">Thrown when the same tx nonce is used by
        /// a signer twice or more, or a tx nonce is used without its previous nonce by a signer.
        /// Note that this validates only a block's intrinsic integrity between its transactions,
        /// but does not guarantee integrity between blocks.  Such validation needs to be conducted
        /// by <see cref="Blockchain.BlockChain{T}"/>.</exception>
        /// <exception cref="InvalidTxGenesisHashException">Thrown when transactions to set have
        /// inconsistent genesis hashes.</exception>
        public IReadOnlyList<Transaction<T>> Transactions
        {
            get => _transactions;
            set
            {
                IEnumerable<IGrouping<Address, Transaction<T>>> signerTxs =
                    value.OrderBy(tx => tx.Nonce).GroupBy(tx => tx.Signer);
                BlockHash? genesisHash = null;
                foreach (IGrouping<Address, Transaction<T>> txs in signerTxs)
                {
                    long lastNonce = -1L;
                    foreach (Transaction<T> tx in txs)
                    {
                        // FIXME: Transaction<T> should disallow illegal states to be represented
                        // as its instances.  https://github.com/planetarium/libplanet/issues/1164
                        tx.Validate();

                        long nonce = tx.Nonce;
                        if (lastNonce >= 0 && lastNonce + 1 != nonce)
                        {
                            Address s = tx.Signer;
                            string msg = nonce <= lastNonce
                                ? $"The signer {s}'s nonce {nonce} was already consumed before."
                                : $"The signer {s}'s nonce {lastNonce} has to be added first.";
                            throw new InvalidTxNonceException(tx.Id, lastNonce + 1, tx.Nonce, msg);
                        }

                        if (genesisHash is { } g && !tx.GenesisHash.Equals(g))
                        {
                            throw new InvalidTxGenesisHashException(
                                tx.Id,
                                g,
                                tx.GenesisHash,
                                "Transactions in a block are inconsistent."
                            );
                        }

                        lastNonce = nonce;
                        genesisHash = tx.GenesisHash;
                    }
                }

                _transactions = value.OrderBy(tx => tx.Id).ToImmutableArray();
            }
        }

        /// <summary>
        /// The hash of all transactions in the block.  This is <c>null</c> if the block has no
        /// transactions.
        /// </summary>
        /// <remarks>This is calculated on the fly.  When this value is needed multiple times,
        /// cache the value in the client code.</remarks>
        // FIXME: Remove Block<T>.CalculateTxHashes() method, and move the logic behind it to here.
        public HashDigest<SHA256>? TxHash => Block<T>.CalculateTxHashes(_transactions);

        /// <summary>
        /// Makes a copy of the <see cref="BlockContent{T}"/> instance.
        /// </summary>
        /// <returns>A copy of the instance.</returns>
        public BlockContent<T> Clone() =>
            (BlockContent<T>)MemberwiseClone();

        /// <inheritdoc cref="ICloneable.Clone"/>
        object ICloneable.Clone() => Clone();

        /// <summary>
        /// Serializes the block content into a Bencodex dictionary.  This data is used for
        /// PoW (proof-of-work) to find the nonce, rather than transmitting the block over the
        /// network.
        /// </summary>
        /// <param name="nonce">The nonce of the block.</param>
        /// <returns>The serialized block content in a Bencodex dictionary.</returns>
        public Bencodex.Types.Dictionary ToBencodex(Nonce nonce)
        {
            // TODO: Include TotalDifficulty as well
            var dict = Bencodex.Types.Dictionary.Empty
                .Add("index", Index)
                .Add("timestamp", Timestamp.ToString(TimestampFormat, CultureInfo.InvariantCulture))
                .Add("difficulty", Difficulty)
                .Add("nonce", nonce.ByteArray)
                .Add("reward_beneficiary", Miner.ByteArray);

            if (ProtocolVersion != 0)
            {
                dict = dict.Add("protocol_version", ProtocolVersion);
            }

            if (PreviousHash is { } prevHash)
            {
                dict = dict.Add("previous_hash", prevHash.ByteArray);
            }

            if (TxHash is { } txHash)
            {
                dict = dict.Add("transaction_fingerprint", txHash.ByteArray);
            }

            return dict;
        }

        /// <summary>
        /// Mines the PoW (proof-of-work) nonce satisfying the block <see cref="Difficulty"/>.
        /// </summary>
        /// <param name="hashAlgorithm">The hash algorithm to use for calculating pre-evaluation
        /// hash.</param>
        /// <param name="cancellationToken">An optional cancellation token used to propagate signal
        /// that this operation should be cancelled.</param>
        /// <returns>A pair of the mined nonce and the pre-evaluation hash that satisfy the
        /// block <see cref="Difficulty"/>.</returns>
        /// <exception cref="OperationCanceledException">Thrown when the specified
        /// <paramref name="cancellationToken"/> received a cancellation request.</exception>
        public (Nonce Nonce, ImmutableArray<byte> PreEvaluationHash) MineNonce(
            HashAlgorithmType hashAlgorithm,
            CancellationToken cancellationToken = default
        ) =>
            Hashcash.Answer(GetStampFunction(), hashAlgorithm, Difficulty, cancellationToken);

        private Hashcash.Stamp GetStampFunction()
        {
            // Poor man' way to optimize stamp...
            // FIXME: We need to rather reorganize the serialization layout.
            var codec = new Codec();
            byte[] emptyNonce = codec.Encode(ToBencodex(default));
            byte[] oneByteNonce = codec.Encode(ToBencodex(new Nonce(new byte[1])));
            int offset = 0;
            while (offset < emptyNonce.Length && emptyNonce[offset].Equals(oneByteNonce[offset]))
            {
                offset++;
            }

            // Prepares fixed parts (stampPrefix, stampSuffix, colon) ahead of time
            // so that they can be reused:
            const int nonceLength = 2;  // In Bencodex, empty bytes are represented as "0:".
            byte[] stampPrefix = new byte[offset];
            Array.Copy(emptyNonce, stampPrefix, stampPrefix.Length);
            byte[] stampSuffix = new byte[emptyNonce.Length - offset - nonceLength];
            Array.Copy(emptyNonce, offset + nonceLength, stampSuffix, 0, stampSuffix.Length);
            byte[] colon = { 0x3a }; // ':'

            IEnumerable<byte[]> Stamp(Nonce nonce)
            {
                int nLen = nonce.ByteArray.Length;
                yield return stampPrefix;
                yield return Encoding.ASCII.GetBytes(nLen.ToString(CultureInfo.InvariantCulture));
                yield return colon; // ':'
                yield return nonce.ToByteArray();
                yield return stampSuffix;
            }

            return Stamp;
        }
    }
}
