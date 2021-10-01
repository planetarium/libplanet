#nullable enable
using System;
using System.Collections.Immutable;
using System.Numerics;
using System.Security.Cryptography;
using Libplanet.Crypto;

namespace Libplanet.Blocks
{
    /// <summary>
    /// Block header containing information about <see cref="Block{T}"/>s except transactions.
    /// </summary>
    public sealed class BlockHeader : IBlockHeader
    {
        private readonly PreEvaluationBlockHeader _preEvaluationBlockHeader;

        /// <summary>
        /// Creates a <see cref="BlockHeader"/> instance from the given
        /// <paramref name="preEvaluationBlockHeader"/> and <paramref name="stateRootHash"/>.
        /// This automatically derives its hash from the given inputs.
        /// </summary>
        /// <param name="preEvaluationBlockHeader">The pre-evaluation block header.</param>
        /// <param name="stateRootHash">The state root hash.</param>
        public BlockHeader(
            PreEvaluationBlockHeader preEvaluationBlockHeader,
            HashDigest<SHA256> stateRootHash
        )
            : this(
                preEvaluationBlockHeader,
                (stateRootHash, preEvaluationBlockHeader.DeriveBlockHash(stateRootHash))
            )
        {
        }

        /// <summary>
        /// Creates a <see cref="BlockHeader"/> instance from the given
        /// <paramref name="preEvaluationBlockHeader"/> and <paramref name="stateRootHash"/>.
        /// It also checks the sanity of the given <paramref name="hash"/>.
        /// </summary>
        /// <param name="preEvaluationBlockHeader">The pre-evaluation block header.</param>
        /// <param name="stateRootHash">The state root hash.</param>
        /// <param name="hash">The block hash to check.</param>
        /// <exception cref="InvalidBlockHashException">Thrown when the given block
        /// <paramref name="hash"/> is consistent with other arguments.</exception>
        public BlockHeader(
            PreEvaluationBlockHeader preEvaluationBlockHeader,
            HashDigest<SHA256> stateRootHash,
            BlockHash hash
        )
            : this(
                preEvaluationBlockHeader,
                (stateRootHash, hash)
            )
        {
            BlockHash expectedHash = preEvaluationBlockHeader.DeriveBlockHash(stateRootHash);
            if (!hash.Equals(expectedHash))
            {
                throw new InvalidBlockHashException(
                    $"The block #{Index} {Hash} has an invalid hash; expected: {expectedHash}."
                );
            }
        }

        /// <summary>
        /// Unsafely creates a <see cref="BlockHeader"/> instance with its
        /// <paramref name="preEvaluationBlockHeader"/> and <paramref name="proof"/> which is
        /// probably considered as to be valid.
        /// </summary>
        /// <param name="preEvaluationBlockHeader">The pre-evaluation block header.</param>
        /// <param name="proof">A pair of the state root hash and the block hash which is probably
        /// considered as to be derived from the <paramref name="preEvaluationBlockHeader"/> and
        /// the state root hash.</param>
        /// <remarks>This does not verify if a <paramref name="proof"/>'s hash is dervied from
        /// the <paramref name="preEvaluationBlockHeader"/> and the state root hash.</remarks>
        private BlockHeader(
            PreEvaluationBlockHeader preEvaluationBlockHeader,
            (HashDigest<SHA256> StateRootHash, BlockHash Hash) proof
        )
        {
            _preEvaluationBlockHeader = preEvaluationBlockHeader;
            StateRootHash = proof.StateRootHash;
            Hash = proof.Hash;
        }

        /// <inheritdoc cref="IBlockMetadata.ProtocolVersion"/>
        public int ProtocolVersion => _preEvaluationBlockHeader.ProtocolVersion;

        /// <inheritdoc cref="IPreEvaluationBlockHeader.HashAlgorithm"/>
        public HashAlgorithmType HashAlgorithm => _preEvaluationBlockHeader.HashAlgorithm;

        /// <inheritdoc cref="IBlockMetadata.Index"/>
        public long Index => _preEvaluationBlockHeader.Index;

        /// <inheritdoc cref="IBlockMetadata.Timestamp"/>
        public DateTimeOffset Timestamp => _preEvaluationBlockHeader.Timestamp;

        /// <inheritdoc cref="IPreEvaluationBlockHeader.Nonce"/>
        public Nonce Nonce => _preEvaluationBlockHeader.Nonce;

        /// <inheritdoc cref="IBlockMetadata.Miner"/>
        public Address Miner => _preEvaluationBlockHeader.Miner;

        /// <inheritdoc cref="IBlockMetadata.PublicKey"/>
        public PublicKey? PublicKey => _preEvaluationBlockHeader.PublicKey;

        /// <inheritdoc cref="IBlockMetadata.Difficulty"/>
        public long Difficulty => _preEvaluationBlockHeader.Difficulty;

        /// <inheritdoc cref="IBlockMetadata.TotalDifficulty"/>
        public BigInteger TotalDifficulty => _preEvaluationBlockHeader.TotalDifficulty;

        /// <inheritdoc cref="IBlockMetadata.PreviousHash"/>
        public BlockHash? PreviousHash => _preEvaluationBlockHeader.PreviousHash;

        /// <inheritdoc cref="IBlockMetadata.TxHash"/>
        public HashDigest<SHA256>? TxHash => _preEvaluationBlockHeader.TxHash;

        /// <inheritdoc cref="IBlockExcerpt.Hash"/>
        public BlockHash Hash { get; }

        /// <inheritdoc cref="IPreEvaluationBlockHeader.PreEvaluationHash"/>
        public ImmutableArray<byte> PreEvaluationHash =>
            _preEvaluationBlockHeader.PreEvaluationHash;

        /// <inheritdoc cref="IBlockHeader.StateRootHash"/>
        public HashDigest<SHA256> StateRootHash { get; }

        /// <inheritdoc cref="object.ToString()"/>
        public override string ToString() =>
            $"#{Index} {Hash}";
    }
}
