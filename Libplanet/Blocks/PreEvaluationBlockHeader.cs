using System;
using System.Collections.Immutable;
using System.Linq;
using System.Security.Cryptography;
using Bencodex;
using Bencodex.Types;
using Libplanet.Consensus;
using Libplanet.Crypto;

namespace Libplanet.Blocks
{
    /// <summary>
    /// A block candidate without evaluating actions (in its transactions and a possible
    /// <see cref="Blockchain.Policies.IBlockPolicy{T}.BlockAction"/>) and state root hash.
    /// </summary>
    public class PreEvaluationBlockHeader : IPreEvaluationBlockHeader
    {
        protected static readonly Codec Codec = new Codec();

        /// <summary>
        /// Creates a <see cref="PreEvaluationBlockHeader"/>  by copying the fields of another
        /// pre-evaluation block <paramref name="header"/>.
        /// </summary>
        /// <param name="header">A pre-evaluation block header to copy.</param>
        /// <exception cref="InvalidBlockProtocolVersionException">Thrown when
        /// the <paramref name="header"/>'s to set is <see cref="IBlockMetadata.ProtocolVersion"/>
        /// is less than 0, or greater than <see cref="BlockMetadata.CurrentProtocolVersion"/>,
        /// the latest known protocol version.</exception>
        /// <exception cref="InvalidBlockIndexException">Thrown when the <paramref name="header"/>
        /// has a negative <see cref="IBlockMetadata.Index"/>.</exception>
        /// <exception cref="InvalidBlockPreEvaluationHashException">Thrown when the given
        /// pre-evaluation <paramref name="header"/>'s
        /// <seealso cref="IPreEvaluationBlockHeader.PreEvaluationHash"/> is invalid.</exception>
        public PreEvaluationBlockHeader(IPreEvaluationBlockHeader header)
            : this(header, header.PreEvaluationHash)
        {
        }

        /// <summary>
        /// Creates a <see cref="PreEvaluationBlockHeader"/> instance with its
        /// <paramref name="metadata"/>.
        /// </summary>
        /// <param name="metadata">Block's metadata.</param>
        /// <exception cref="InvalidBlockProtocolVersionException">Thrown when
        /// the <paramref name="metadata"/>'s to set is <see cref="IBlockMetadata.ProtocolVersion"/>
        /// is less than 0, or greater than <see cref="BlockMetadata.CurrentProtocolVersion"/>,
        /// the latest known protocol version.</exception>
        /// <exception cref="InvalidBlockIndexException">Thrown when the <paramref name="metadata"/>
        /// has a negative <see cref="IBlockMetadata.Index"/>.</exception>
        /// <remarks><see cref="PreEvaluationHash"/> is automatically derived from the given
        /// arguments.</remarks>
        public PreEvaluationBlockHeader(IBlockMetadata metadata)
            : this(new BlockMetadata(metadata))
        {
        }

        /// <summary>
        /// Creates a <see cref="PreEvaluationBlockHeader"/> instance with its
        /// <paramref name="metadata"/>, a valid proof-of-work
        /// a <paramref name="preEvaluationHash"/> digest.
        /// </summary>
        /// <param name="metadata">Block's metadata.</param>
        /// <param name="preEvaluationHash">The hash digest derived from the given arguments.
        /// </param>
        /// <exception cref="InvalidBlockProtocolVersionException">Thrown when
        /// the <paramref name="metadata"/>'s to set is <see cref="IBlockMetadata.ProtocolVersion"/>
        /// is less than 0, or greater than <see cref="BlockMetadata.CurrentProtocolVersion"/>,
        /// the latest known protocol version.</exception>
        /// <exception cref="InvalidBlockIndexException">Thrown when the <paramref name="metadata"/>
        /// has a negative <see cref="IBlockMetadata.Index"/>.</exception>
        /// <exception cref="InvalidBlockPreEvaluationHashException">Thrown when the given
        /// <paramref name="preEvaluationHash"/> is invalid.</exception>
        public PreEvaluationBlockHeader(
            IBlockMetadata metadata,
            HashDigest<SHA256> preEvaluationHash)
                : this(new BlockMetadata(metadata), preEvaluationHash)
        {
        }

        /// <summary>
        /// Unsafely creates a <see cref="PreEvaluationBlockHeader"/> instance with its
        /// <paramref name="metadata"/>, and a <paramref name="preEvaluationHash"/>
        /// which is probably considered as to be valid.
        /// </summary>
        /// <param name="metadata">Block's metadata.</param>
        /// <param name="preEvaluationHash">A valid proof-of-work bytearray which is probably
        /// considered to satisfy the required difficulty, and the hash digest which is probably
        /// considered to be derived from the block <paramref name="metadata"/> and the nonce.
        /// </param>
        /// <exception cref="InvalidBlockPreEvaluationHashException">Thrown when the given proof's
        /// hash is invalid.</exception>
        internal PreEvaluationBlockHeader(
            BlockMetadata metadata,
            HashDigest<SHA256> preEvaluationHash)
        {
            // FIXME: CheckPreEvaluationHash(metadata, preEvaluationHash) should fit in somewhere.
            if (metadata.Index == 0L && metadata.PreviousHash is { } ph)
            {
                throw new InvalidBlockPreviousHashException(
                    $"Genesis block must not have {nameof(PreviousHash)}: {ph}."
                );
            }
            else if (metadata.Index > 0L && metadata.PreviousHash is null)
            {
                throw new InvalidBlockPreviousHashException(
                    $"Block #{metadata.Index} must have its {nameof(PreviousHash)} " +
                    "(except for genesis)."
                );
            }
            else if (metadata.ProtocolVersion >= 2 && metadata.PublicKey is null)
            {
                throw new InvalidBlockPublicKeyException(
                    "Block's public key cannot be null unless its protocol version is less than 2.",
                    metadata.PublicKey
                );
            }
            else if (metadata.ProtocolVersion < 2 && metadata.PublicKey is { })
            {
                string msg =
                    "As blocks became to have public keys since the protocol version 2, blocks " +
                    $"with a protocol version {metadata.ProtocolVersion} cannot have public keys.";
                throw new InvalidBlockPublicKeyException(msg, metadata.PublicKey);
            }
            else if (metadata.PublicKey is { } pubKey && !metadata.Miner.Equals(pubKey.ToAddress()))
            {
                string msg =
                    $"The miner address {metadata.Miner} is not consistent with its public key " +
                    $"{pubKey}.";
                throw new InvalidBlockPublicKeyException(msg, pubKey);
            }
            else if (metadata.LastCommit is { } commit)
            {
                // NOTE: Validator might be depend on chain's status, then validity check should
                // be moved to blockchain's ValidateNextBlock.
                if (commit.Height != metadata.Index - 1)
                {
                    throw new InvalidBlockLastCommitException(
                        $"The block #{metadata.Index}'s lastcommit's height " +
                        $"({commit.Height}) does not match " +
                        $"the previous block's index {metadata.Index - 1}.");
                }

                if (!commit.BlockHash.Equals(metadata.PreviousHash))
                {
                    throw new InvalidBlockLastCommitException(
                        $"The block #{metadata.Index}'s lastcommit's previous hash " +
                        $"({commit.BlockHash}) does not match " +
                        $"the previous block's hash {metadata.PreviousHash}.");
                }

                if (commit.Votes is { } votes)
                {
                    // If the flag of a vote is not null or unknown, it should have valid signature.
                    if (!votes.All(
                            vote =>
                            {
                                if (vote.Signature is { } sign &&
                                    vote.Validator.Verify(vote.RemoveSignature.ByteArray, sign))
                                {
                                    return true;
                                }

                                if (vote.Flag == VoteFlag.Null || vote.Flag == VoteFlag.Unknown)
                                {
                                    return true;
                                }

                                return false;
                            }))
                    {
                        throw new InvalidBlockLastCommitException(
                            $"Some of the block #{metadata.Index}'s lastcommit's votes' " +
                            "are not valid.");
                    }

                    // The height of all votes are same with the lastcommit's height.
                    if (!votes.All(vote => vote.Height == commit.Height))
                    {
                        throw new InvalidBlockLastCommitException(
                            $"The block #{metadata.Index}'s lastcommit's votes' " +
                            "height does not match the previous block's index " +
                            $"{metadata.Index - 1}.");
                    }
                }
                else if (metadata.Index != 0)
                {
                    throw new InvalidBlockLastCommitException(
                        $"The block #{metadata.Index}'s votes can only be null " +
                        "for the genesis block.");
                }
            }

            Metadata = metadata;
            PreEvaluationHash = preEvaluationHash;
        }

        protected PreEvaluationBlockHeader(BlockMetadata metadata)
            : this(metadata, metadata.DerivePreEvaluationHash(default))
        {
        }

        /// <inheritdoc cref="IBlockMetadata.ProtocolVersion"/>
        public int ProtocolVersion => Metadata.ProtocolVersion;

        /// <inheritdoc cref="IBlockMetadata.Index"/>
        public long Index => Metadata.Index;

        /// <inheritdoc cref="IBlockMetadata.Timestamp"/>
        public DateTimeOffset Timestamp => Metadata.Timestamp;

        /// <inheritdoc cref="IBlockMetadata.Miner"/>
        public Address Miner => Metadata.Miner;

        /// <inheritdoc cref="IBlockMetadata.PublicKey"/>
        public PublicKey? PublicKey => Metadata.PublicKey;

        /// <inheritdoc cref="IBlockMetadata.PreviousHash"/>
        public BlockHash? PreviousHash => Metadata.PreviousHash;

        /// <inheritdoc cref="IBlockMetadata.TxHash"/>
        public HashDigest<SHA256>? TxHash => Metadata.TxHash;

        public Address? PreviousMiner => Metadata.PreviousMiner;

        public BlockCommit? LastCommit => Metadata.LastCommit;

        /// <inheritdoc cref="IPreEvaluationBlockHeader.PreEvaluationHash"/>
        public HashDigest<SHA256> PreEvaluationHash { get; }

        /// <summary>
        /// The internal block metadata.
        /// </summary>
        protected BlockMetadata Metadata { get; }

        /// <summary>
        /// Serializes data of a possible candidate shifted from it into a Bencodex dictionary.
        /// This data is used as the input to calculate the block <see cref="Block{T}.Hash"/>,
        /// rather than transmitting the block over the network.
        /// </summary>
        /// <param name="stateRootHash">The <see cref="Libplanet.Store.Trie.ITrie.Hash"/> of
        /// the resulting states after evaluating transactions and
        /// a <see cref="Blockchain.Policies.IBlockPolicy{T}.BlockAction"/> (if exists).</param>
        /// <param name="signature">The block signature created using <see cref="MakeSignature"/>
        /// method with the <paramref name="stateRootHash"/>.  This must be <c>null</c> for
        /// blocks with earlier <seealso cref="ProtocolVersion"/>s than 2.</param>
        /// <returns>The serialized block header in a Bencodex dictionary.</returns>
        public Bencodex.Types.Dictionary MakeCandidateData(
            HashDigest<SHA256> stateRootHash,
            ImmutableArray<byte>? signature = null
        )
        {
            Dictionary dict = Metadata.MakeCandidateData(default(Nonce))
                .Add("state_root_hash", stateRootHash.ByteArray);
            if (signature is { } sig)
            {
                dict = dict.Add("signature", sig);
            }

            return dict;
        }

        /// <summary>
        /// Makes a signature of the block content with a <paramref name="stateRootHash"/> using
        /// the given <paramref name="privateKey"/>.
        /// </summary>
        /// <param name="privateKey">The miner's private key.  This must match to the block's
        /// <see cref="Miner"/> and <see cref="PublicKey"/>.</param>
        /// <param name="stateRootHash">The state root hash to include to the input message to
        /// sign.</param>
        /// <returns>The signature of the block content with a <paramref name="stateRootHash"/>
        /// using the given <paramref name="privateKey"/>.</returns>
        /// <exception cref="InvalidOperationException">Thrown when the block's
        /// <see cref="ProtocolVersion"/> is less than 2.</exception>
        /// <exception cref="ArgumentException">Thrown when the given <paramref name="privateKey"/>
        /// does not match to the block miner's <see cref="PublicKey"/>.</exception>
        /// <remarks>As blocks have their signatures since the <see cref="ProtocolVersion"/> 2,
        /// it is not usable with blocks of the earlier <see cref="ProtocolVersion"/>s than 2.
        /// </remarks>
        public ImmutableArray<byte> MakeSignature(
            PrivateKey privateKey,
            HashDigest<SHA256> stateRootHash
        )
        {
            if (PublicKey is null)
            {
                throw new InvalidOperationException(
                    "The block with the protocol version < 2 cannot be signed, because it lacks " +
                    "its miner's public key so that others cannot verify its signature."
                );
            }
            else if (!privateKey.PublicKey.Equals(PublicKey))
            {
                string m = "The given private key does not match to the miner's public key." +
                    $"Block's public key: {PublicKey}\n" +
                    $"Derived public key: {privateKey.PublicKey}\n";
                throw new ArgumentException(m, nameof(privateKey));
            }

            byte[] msg = Codec.Encode(MakeCandidateData(stateRootHash));
            byte[] sig = privateKey.Sign(msg);
            return ImmutableArray.Create(sig);
        }

        /// <summary>
        /// Verifies if the given block <paramref name="signature"/> is valid with the block
        /// content and the specified <paramref name="stateRootHash"/>.
        /// </summary>
        /// <param name="signature">The block signature created using <see cref="MakeSignature"/>
        /// method with the <paramref name="stateRootHash"/>.  This must be <c>null</c> for
        /// blocks with earlier <seealso cref="ProtocolVersion"/>s than 2.</param>
        /// <param name="stateRootHash">The state root hash included in the original message
        /// of the signature.</param>
        /// <returns><c>true</c> if the signature is valid.  <c>false</c> otherwise.</returns>
        public bool VerifySignature(
            ImmutableArray<byte>? signature,
            HashDigest<SHA256> stateRootHash
        )
        {
            if (PublicKey is { } pubKey && signature is { } sig)
            {
                byte[] msg = Codec.Encode(MakeCandidateData(stateRootHash));
                return pubKey.Verify(msg, sig);
            }
            else if (PublicKey is null)
            {
                return signature is null;
            }

            return false;
        }

        /// <summary>
        /// Derives a hash digest from the given pre-evaluation block header and
        /// <paramref name="stateRootHash"/>.
        /// </summary>
        /// <param name="stateRootHash">The state root hash.</param>
        /// <param name="signature">The block signature created using <see cref="MakeSignature"/>
        /// method with the <paramref name="stateRootHash"/>.  This must be <c>null</c> for
        /// blocks with earlier <seealso cref="ProtocolVersion"/>s than 2.</param>
        /// <returns>A block hash.</returns>
        public BlockHash DeriveBlockHash(
            in HashDigest<SHA256> stateRootHash,
            ImmutableArray<byte>? signature
        ) =>
            BlockHash.DeriveFrom(Codec.Encode(MakeCandidateData(stateRootHash, signature)));

        /// <summary>
        /// Verifies if the <paramref name="preEvaluationHash"/> is the proper hash digest
        /// derived from the given block <paramref name="metadata"/>.
        /// If it's incorrect throws an <see cref="InvalidBlockPreEvaluationHashException"/>.
        /// Throws nothing and returns <paramref name="preEvaluationHash"/> instead.
        /// </summary>
        /// <param name="metadata">The block metadata.</param>
        /// <param name="preEvaluationHash">The pre-evaluation hash digest to verify.</param>
        /// <returns>A <paramref name="preEvaluationHash"/>
        /// if the <paramref name="preEvaluationHash"/> is verified to be correct.</returns>
        /// <exception cref="InvalidBlockPreEvaluationHashException">Thrown when the given
        /// <paramref name="preEvaluationHash"/> is incorrect.</exception>
        private static ImmutableArray<byte> CheckPreEvaluationHash(
            BlockMetadata metadata,
            in ImmutableArray<byte> preEvaluationHash)
        {
            return preEvaluationHash;
        }
    }
}
