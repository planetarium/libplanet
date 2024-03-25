using System;
using System.Collections.Immutable;
using System.Security.Cryptography;
using Libplanet.Common;
using Libplanet.Crypto;

namespace Libplanet.Types.Blocks
{
    /// <summary>
    /// Block header containing information about <see cref="Block"/>s except transactions.
    /// </summary>
    public sealed class BlockHeader : IBlockHeader
    {
        private readonly PreEvaluationBlockHeader _preEvaluationBlockHeader;
        private readonly HashDigest<SHA256> _stateRootHash;
        private readonly ImmutableArray<byte>? _signature;
        private readonly BlockHash _hash;

        /// <summary>
        /// Creates a <see cref="BlockHeader"/> by copying the fields of another
        /// block <paramref name="header"/>.
        /// </summary>
        /// <remarks>
        /// <para>
        /// As <paramref name="header"/> needn't be an actual <see cref="BlockHeader"/>
        /// instance, but simply any object implementing <see cref="IBlockHeader"/>
        /// interface, it can't be trusted to satisfy all the constraints for a valid
        /// <see cref="BlockHeader"/> instance.  As such, conditions are checked again
        /// whilst creating a copy.  This is a relatively heavy operation, so must be used
        /// sparingly.
        /// </para>
        /// <para>
        /// In particular, this creates a new instance of
        /// <see cref="PreEvaluationBlockHeader"/> with data extracted from
        /// <paramref name="header"/>.  Thus any <see cref="Exception"/>s that can be thrown from a
        /// <see cref="PreEvaluationBlockHeader"/>'s constructors may also be thrown
        /// in addition to the ones explicitly listed below.
        /// </para>
        /// </remarks>
        /// <param name="header">The block header to copy.</param>
        /// <exception cref="InvalidBlockSignatureException">Thrown if
        /// <paramref name="header.Signature"/> is invalid.</exception>
        /// <exception cref="InvalidBlockHashException">Thrown when <paramref name="header.Hash"/>
        /// is inconsistent with other arguments.</exception>
        /// <seealso cref="PreEvaluationBlockHeader"/>
        public BlockHeader(IBlockHeader header)
            : this(
                new PreEvaluationBlockHeader(header),
                (header.StateRootHash, header.Signature, header.Hash))
        {
        }

        /// <summary>
        /// Creates a <see cref="BlockHeader"/> instance from the given
        /// <paramref name="preEvaluationBlockHeader"/> and <paramref name="stateRootHash"/>.
        /// It also checks the sanity of the given <paramref name="hash"/>.
        /// </summary>
        /// <param name="preEvaluationBlockHeader">The pre-evaluation block header.</param>
        /// <param name="stateRootHash">The state root hash.</param>
        /// <param name="signature">The block signature.</param>
        /// <param name="hash">The block hash to check.</param>
        /// <exception cref="InvalidBlockSignatureException">Thrown when
        /// the <paramref name="signature"/> signature is invalid.</exception>
        /// <exception cref="InvalidBlockHashException">Thrown when the given block
        /// <paramref name="hash"/> is consistent with other arguments.</exception>
        public BlockHeader(
            PreEvaluationBlockHeader preEvaluationBlockHeader,
            HashDigest<SHA256> stateRootHash,
            ImmutableArray<byte>? signature,
            BlockHash hash)
            : this(
                preEvaluationBlockHeader,
                (stateRootHash, signature, hash))
        {
        }

        /// <summary>
        /// Creates a <see cref="BlockHeader"/> instance with its
        /// <paramref name="preEvaluationBlockHeader"/> and <paramref name="proof"/>.
        /// </summary>
        /// <param name="preEvaluationBlockHeader">The pre-evaluation block header.</param>
        /// <param name="proof">A triple of the state root hash, the block signature, and the block
        /// hash which is probably considered as to be derived from
        /// the <paramref name="preEvaluationBlockHeader"/> and the state root hash.</param>
        /// <exception cref="InvalidBlockSignatureException">Thrown if
        /// <paramref name="proof.Signature"/> signature is invalid.</exception>
        /// <exception cref="InvalidBlockHashException">Thrown when <paramref name="proof.Hash"/>
        /// is inconsistent with other arguments.</exception>
        public BlockHeader(
            PreEvaluationBlockHeader preEvaluationBlockHeader,
            (
                HashDigest<SHA256> StateRootHash,
                ImmutableArray<byte>? Signature,
                BlockHash Hash
            ) proof
        )
        {
            BlockHash expectedHash =
                preEvaluationBlockHeader.DeriveBlockHash(proof.StateRootHash, proof.Signature);
            if (preEvaluationBlockHeader.ProtocolVersion <= BlockMetadata.PoWProtocolVersion)
            {
                // Skip verifying signature for PoW blocks due to change of the block structure.
                // If verification is required, use older version of LibPlanet(<0.43).
            }
            else if (
                !preEvaluationBlockHeader.VerifySignature(proof.Signature, proof.StateRootHash))
            {
                long idx = preEvaluationBlockHeader.Index;
                string msg = preEvaluationBlockHeader.ProtocolVersion >= 2
                    ? $"The block #{idx} #{proof.Hash}'s signature is invalid."
                    : $"The block #{idx} #{proof.Hash} cannot be signed as its protocol version " +
                      $"is less than 2: {preEvaluationBlockHeader.ProtocolVersion}.";
                throw new InvalidBlockSignatureException(
                    msg,
                    preEvaluationBlockHeader.PublicKey,
                    proof.Signature);
            }
            else if (!proof.Hash.Equals(expectedHash))
            {
                throw new InvalidBlockHashException(
                    $"The block #{preEvaluationBlockHeader.Index} {proof.Hash} has " +
                    $"an invalid hash; expected: {expectedHash}.");
            }

            _preEvaluationBlockHeader = preEvaluationBlockHeader;
            _stateRootHash = proof.StateRootHash;
            _signature = proof.Signature;
            _hash = proof.Hash;
        }

        /// <summary>
        /// Internal <see cref="PreEvaluationBlockHeader"/>.
        /// </summary>
        public PreEvaluationBlockHeader Header => _preEvaluationBlockHeader;

        /// <inheritdoc cref="IBlockMetadata.ProtocolVersion"/>
        public int ProtocolVersion => _preEvaluationBlockHeader.ProtocolVersion;

        /// <inheritdoc cref="IBlockMetadata.Index"/>
        public long Index => _preEvaluationBlockHeader.Index;

        /// <inheritdoc cref="IBlockMetadata.Timestamp"/>
        public DateTimeOffset Timestamp => _preEvaluationBlockHeader.Timestamp;

        /// <inheritdoc cref="IBlockMetadata.Miner"/>
        public Address Miner => _preEvaluationBlockHeader.Miner;

        /// <inheritdoc cref="IBlockMetadata.PublicKey"/>
        public PublicKey? PublicKey => _preEvaluationBlockHeader.PublicKey;

        /// <inheritdoc cref="IBlockMetadata.PreviousHash"/>
        public BlockHash? PreviousHash => _preEvaluationBlockHeader.PreviousHash;

        /// <inheritdoc cref="IBlockMetadata.TxHash"/>
        public HashDigest<SHA256>? TxHash => _preEvaluationBlockHeader.TxHash;

        /// <inheritdoc cref="IBlockMetadata.LastCommit"/>
        public BlockCommit? LastCommit => _preEvaluationBlockHeader.LastCommit;

        /// <inheritdoc cref="IBlockMetadata.Proof"/>
        public Proof? Proof => _preEvaluationBlockHeader.Proof;

        /// <inheritdoc cref="IPreEvaluationBlockHeader.PreEvaluationHash"/>
        public HashDigest<SHA256> PreEvaluationHash =>
            _preEvaluationBlockHeader.PreEvaluationHash;

        /// <inheritdoc cref="IBlockHeader.StateRootHash"/>
        public HashDigest<SHA256> StateRootHash => _stateRootHash;

        /// <inheritdoc cref="IBlockHeader.Signature"/>
        public ImmutableArray<byte>? Signature => _signature;

        /// <inheritdoc cref="IBlockExcerpt.Hash"/>
        public BlockHash Hash => _hash;

        /// <inheritdoc cref="object.ToString()"/>
        public override string ToString() =>
            $"#{Index} {Hash}";
    }
}
