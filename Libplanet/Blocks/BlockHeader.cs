#nullable enable
using System;
using System.Collections.Immutable;
using System.Numerics;
using System.Security.Cryptography;
using Bencodex;
using Libplanet.Store.Trie;

namespace Libplanet.Blocks
{
    /// <summary>
    /// Block header containing information about <see cref="Block{T}"/>s except transactions.
    /// </summary>
    public readonly struct BlockHeader : IBlockHeader
    {
        private const int CurrentProtocolVersion = BlockMetadata.CurrentProtocolVersion;
        private static readonly Codec Codec = new Codec();

        /// <summary>
        /// Creates a <see cref="BlockHeader"/> instance by manually filling in all the properties.
        /// </summary>
        /// <param name="protocolVersion">The protocol version.  Goes to
        /// <see cref="ProtocolVersion"/>.</param>
        /// <param name="index">The height of the block.  Goes to <see cref="Index"/>.
        /// </param>
        /// <param name="timestamp">The time the block is created.
        /// Goes to <see cref="Timestamp"/>.</param>
        /// <param name="nonce">The nonce which satisfies given <paramref name="difficulty"/>.
        /// Goes to <see cref="Nonce"/>.</param>
        /// <param name="miner">The address of the miner.  Goes to <see cref="Miner"/>.</param>
        /// <param name="difficulty">The mining difficulty that <paramref name="nonce"/>
        /// has to satisfy.  Goes to <see cref="Difficulty"/>.</param>
        /// <param name="totalDifficulty">The total mining difficulty since the genesis,
        /// including the block's difficulty.  See also <see cref="Difficulty"/>.</param>
        /// <param name="previousHash">The previous block's <see cref="Hash"/>.  If it's a genesis
        /// block (i.e., its <see cref="Block{T}.Index"/> is 0) this should be <c>null</c>.
        /// Goes to <see cref="PreviousHash"/>.</param>
        /// <param name="txHash">The result of hashing the transactions the block has.
        /// Goes to <see cref="TxHash"/>.</param>
        /// <param name="hash">The hash digest derived from the whole contents of the block
        /// including <paramref name="stateRootHash"/>, which is determined by evaluating
        /// transactions.  This is used for block's unique identifier. Goes to <see cref="Hash"/>.
        /// </param>
        /// <param name="preEvaluationHash">The hash derived from the block <em>excluding</em>
        /// <paramref name="stateRootHash"/> (i.e., without action evaluation).
        /// Used for checking <paramref name="nonce"/>.  See also <see cref="Validate"/>.</param>
        /// <param name="stateRootHash">The <see cref="ITrie.Hash"/> of the resulting states after
        /// evaluating transactions and a block action (if exists).</param>
        /// <param name="hashAlgorithm">The hash algorithm used for PoW mining.</param>
        /// <remarks>
        /// This is only exposed for testing. Should not be used as an entry point to create
        /// a <see cref="BlockHeader"/> instance under normal circumstances.
        /// </remarks>
        public BlockHeader(
            int protocolVersion,
            long index,
            DateTimeOffset timestamp,
            Nonce nonce,
            Address miner,
            long difficulty,
            BigInteger totalDifficulty,
            BlockHash? previousHash,
            HashDigest<SHA256>? txHash,
            BlockHash hash,
            ImmutableArray<byte> preEvaluationHash,
            HashDigest<SHA256> stateRootHash,
            HashAlgorithmType hashAlgorithm)
        {
            ProtocolVersion = protocolVersion;
            Index = index;
            Timestamp = timestamp.ToUniversalTime();
            Nonce = nonce;
            Miner = miner;
            Difficulty = difficulty;
            TotalDifficulty = totalDifficulty;
            PreviousHash = previousHash;
            TxHash = txHash;
            Hash = hash;
            PreEvaluationHash = preEvaluationHash;
            StateRootHash = stateRootHash;
            HashAlgorithm = hashAlgorithm;

            Validate();
        }

        /// <summary>
        /// Creates a <see cref="BlockHeader"/> instance for a <see cref="Block{T}"/>.
        /// </summary>
        /// <param name="protocolVersion">The protocol version.  Goes to
        /// <see cref="ProtocolVersion"/>.</param>
        /// <param name="index">The height of the block.  Goes to <see cref="Index"/>.
        /// </param>
        /// <param name="timestamp">The time the block is created.
        /// Goes to <see cref="Timestamp"/>.</param>
        /// <param name="nonce">The nonce which satisfies given <paramref name="difficulty"/>.
        /// Goes to <see cref="Nonce"/>.</param>
        /// <param name="miner">The address of the miner.  Goes to <see cref="Miner"/>.</param>
        /// <param name="difficulty">The mining difficulty that <paramref name="nonce"/>
        /// has to satisfy.  Goes to <see cref="Difficulty"/>.</param>
        /// <param name="totalDifficulty">The total mining difficulty since the genesis
        /// including the block's difficulty.  See also <see cref="Difficulty"/>.</param>
        /// <param name="previousHash">The previous block's <see cref="Hash"/>.  If it's a genesis
        /// block (i.e., its <see cref="Block{T}.Index"/> is 0) this should be <c>null</c>.
        /// Goes to <see cref="PreviousHash"/>.</param>
        /// <param name="txHash">The result of hashing the transactions the block has.
        /// Goes to <see cref="TxHash"/>.</param>
        /// <param name="preEvaluationHash">The hash derived from the block <em>excluding</em>
        /// <paramref name="stateRootHash"/> (i.e., without action evaluation).
        /// Used for checking <paramref name="nonce"/>.  See also <see cref="Validate"/>.</param>
        /// <param name="stateRootHash">The <see cref="ITrie.Hash"/> of the resulting states after
        /// evaluating transactions and a block action (if exists).</param>
        /// <param name="hashAlgorithm">The hash algorithm used for PoW mining.</param>
        internal BlockHeader(
            int protocolVersion,
            long index,
            DateTimeOffset timestamp,
            Nonce nonce,
            Address miner,
            long difficulty,
            BigInteger totalDifficulty,
            BlockHash? previousHash,
            HashDigest<SHA256>? txHash,
            ImmutableArray<byte> preEvaluationHash,
            HashDigest<SHA256> stateRootHash,
            HashAlgorithmType hashAlgorithm
        )
        {
            // FIXME: Basic sanity check, such as whether stateRootHash is empty or not,
            // to prevent improper usage should be present. For the same reason as
            // a comment in Block<T>(), should be added in on further refactoring.
            ProtocolVersion = protocolVersion;
            Index = index;
            Timestamp = timestamp.ToUniversalTime();
            Nonce = nonce;
            Miner = miner;
            Difficulty = difficulty;
            TotalDifficulty = totalDifficulty;
            PreviousHash = previousHash;
            TxHash = txHash;

            PreEvaluationHash = preEvaluationHash;
            StateRootHash = stateRootHash;
            HashAlgorithm = hashAlgorithm;
            byte[] serialized = Codec.Encode(
                new PreEvaluationBlockHeader(
                    this.Copy(),
                    hashAlgorithm,
                    Nonce
                ).ToBencodex(StateRootHash)
            );
            Hash = BlockHash.DeriveFrom(serialized);

            Validate();
        }

        /// <inheritdoc cref="IBlockMetadata.ProtocolVersion"/>
        public int ProtocolVersion { get; }

        /// <inheritdoc cref="IPreEvaluationBlockHeader.HashAlgorithm"/>
        public HashAlgorithmType HashAlgorithm { get; }

        /// <inheritdoc cref="IBlockMetadata.Index"/>
        public long Index { get; }

        /// <inheritdoc cref="IBlockMetadata.Timestamp"/>
        public DateTimeOffset Timestamp { get; }

        /// <inheritdoc cref="IPreEvaluationBlockHeader.Nonce"/>
        public Nonce Nonce { get; }

        /// <inheritdoc cref="IBlockMetadata.Miner"/>
        public Address Miner { get; }

        /// <inheritdoc cref="IBlockMetadata.Difficulty"/>
        public long Difficulty { get; }

        /// <inheritdoc cref="IBlockMetadata.TotalDifficulty"/>
        public BigInteger TotalDifficulty { get; }

        /// <inheritdoc cref="IBlockMetadata.PreviousHash"/>
        public BlockHash? PreviousHash { get; }

        /// <inheritdoc cref="IBlockMetadata.TxHash"/>
        public HashDigest<SHA256>? TxHash { get; }

        /// <summary>
        /// The hash digest derived from the whole contents of the block including
        /// <see cref="StateRootHash"/>, which is determined by evaluating transactions and
        /// a <see cref="Blockchain.Policies.IBlockPolicy{T}.BlockAction"/> (if exists).
        /// <para>This is used for block's unique identifier.</para>
        /// </summary>
        /// <seealso cref="PreEvaluationHash"/>
        /// <seealso cref="StateRootHash"/>
        public BlockHash Hash { get; }

        /// <inheritdoc cref="IPreEvaluationBlockHeader.PreEvaluationHash"/>
        public ImmutableArray<byte> PreEvaluationHash { get; }

        /// <inheritdoc cref="IBlockHeader.StateRootHash"/>
        public HashDigest<SHA256> StateRootHash { get; }

        internal void Validate()
        {
            if (ProtocolVersion < 0)
            {
                throw new InvalidBlockProtocolVersionException(
                    ProtocolVersion,
                    $"A block's protocol version cannot be less than zero: {ProtocolVersion}."
                );
            }
            else if (ProtocolVersion > CurrentProtocolVersion)
            {
                string message =
                    $"Unknown protocol version: {ProtocolVersion}; " +
                    $"the highest known version is {CurrentProtocolVersion}.";
                throw new InvalidBlockProtocolVersionException(ProtocolVersion, message);
            }

            if (Index < 0)
            {
                throw new InvalidBlockIndexException(
                    $"Block #{Index} {Hash}'s index must be 0 or more."
                );
            }

            if (Difficulty > TotalDifficulty)
            {
                var msg = $"Block #{Index} {Hash}'s difficulty ({Difficulty}) " +
                          $"must be less than its TotalDifficulty ({TotalDifficulty}).";
                throw new InvalidBlockTotalDifficultyException(
                    Difficulty,
                    TotalDifficulty,
                    msg
                );
            }

            if (Index == 0)
            {
                if (Difficulty != 0)
                {
                    throw new InvalidBlockDifficultyException(
                        $"Difficulty must be 0 for the genesis block {Hash}, " +
                        $"but its difficulty is {Difficulty}."
                    );
                }

                if (TotalDifficulty != 0)
                {
                    var msg = "Total difficulty must be 0 for the genesis block " +
                              $"{Hash}, but its total difficulty is " +
                              $"{TotalDifficulty}.";
                    throw new InvalidBlockTotalDifficultyException(
                        Difficulty,
                        TotalDifficulty,
                        msg
                    );
                }

                if (PreviousHash is { })
                {
                    throw new InvalidBlockPreviousHashException(
                        $"Previous hash must be empty for the genesis block " +
                        $"{Hash}, but its value is {PreviousHash}."
                    );
                }
            }
            else
            {
                if (Difficulty < 1)
                {
                    throw new InvalidBlockDifficultyException(
                        $"Block #{Index} {Hash}'s difficulty must be more than 0 " +
                        $"(except of the genesis block), but its difficulty is {Difficulty}."
                    );
                }

                if (PreviousHash is null)
                {
                    throw new InvalidBlockPreviousHashException(
                        $"Block #{Index} {Hash}'s previous hash " +
                        "must be present since it's not the genesis block."
                    );
                }
            }

            if (!ByteUtil.Satisfies(PreEvaluationHash, Difficulty))
            {
                throw new InvalidBlockNonceException(
                    $"Block #{Index} {Hash}'s pre-evaluation hash " +
                    $"({ByteUtil.Hex(PreEvaluationHash)}) with nonce " +
                    $"({Nonce}) does not satisfy its difficulty level {Difficulty}."
                );
            }

            // PreEvaluationHash comparison between the actual and the expected was not
            // implemented in ProtocolVersion == 0.
            if (ProtocolVersion > 0)
            {
                var expected = new PreEvaluationBlockHeader(
                    this.Copy(),
                    HashAlgorithm,
                    Nonce
                );
                if (!ByteUtil.TimingSafelyCompare(expected.PreEvaluationHash, PreEvaluationHash))
                {
                    string message =
                        $"The expected pre-evaluation hash of block #{Index} " +
                        $"{Hash} is {ByteUtil.Hex(expected.PreEvaluationHash)}, " +
                        $"but its pre-evaluation hash is {ByteUtil.Hex(PreEvaluationHash)}.";
                    throw new InvalidBlockPreEvaluationHashException(
                        PreEvaluationHash,
                        expected.PreEvaluationHash.ToImmutableArray(),
                        message);
                }
            }

            byte[] expect = Codec.Encode(
                new PreEvaluationBlockHeader(
                    this.Copy(),
                    HashAlgorithm,
                    Nonce
                ).ToBencodex(StateRootHash)
            );
            BlockHash expectedHash = BlockHash.DeriveFrom(expect);
            if (!Hash.Equals(expectedHash))
            {
                throw new InvalidBlockHashException(
                    $"The expected hash {expectedHash} of block #{Index} {Hash} does not match " +
                    "the hash provided by the block.");
            }
        }
    }
}
