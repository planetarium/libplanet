#nullable disable
using System;
using System.Collections.Generic;
using System.Linq;
using System.Numerics;
using System.Security.Cryptography;
using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Action.State;
using Libplanet.Common;
using Libplanet.Crypto;
using Libplanet.Store;
using Libplanet.Types.Blocks;
using Libplanet.Types.Consensus;
using Libplanet.Types.Evidence;
using Libplanet.Types.Tx;

namespace Libplanet.Blockchain
{
    public partial class BlockChain
    {
        internal static Dictionary<Address, long> ValidateGenesisNonces(
            Block block)
        {
            var nonceDeltas = new Dictionary<Address, long>();
            foreach (Transaction tx in block.Transactions.OrderBy(tx => tx.Nonce))
            {
                nonceDeltas.TryGetValue(tx.Signer, out var nonceDelta);
                long expectedNonce = nonceDelta;

                if (!expectedNonce.Equals(tx.Nonce))
                {
                    throw new InvalidTxNonceException(
                        $"Transaction {tx.Id} has an invalid nonce {tx.Nonce} that is different " +
                        $"from expected nonce {expectedNonce}.",
                        tx.Id,
                        expectedNonce,
                        tx.Nonce);
                }

                nonceDeltas[tx.Signer] = nonceDelta + 1;
            }

            return nonceDeltas;
        }

        /// <summary>
        /// Checks if given <paramref name="block"/> is a valid genesis <see cref="Block"/>.
        /// </summary>
        /// <param name="block">The target <see cref="Block"/> to validate.</param>
        /// <exception cref="ArgumentException">If <paramref name="block"/> has
        /// <see cref="Block.Index"/> value anything other than 0.</exception>
        /// <exception cref="InvalidBlockException">Thrown when given <paramref name="block"/>
        /// is invalid.</exception>
        internal static void ValidateGenesis(Block block)
        {
            if (block.Index != 0)
            {
                throw new ArgumentException(
                    $"Given {nameof(block)} must have index 0 but has index {block.Index}",
                    nameof(block));
            }

            int actualProtocolVersion = block.ProtocolVersion;
            const int currentProtocolVersion = Block.CurrentProtocolVersion;
            if (block.ProtocolVersion > Block.CurrentProtocolVersion)
            {
                throw new InvalidBlockProtocolVersionException(
                    $"The protocol version ({actualProtocolVersion}) of the block " +
                    $"#{block.Index} {block.Hash} is not supported by this node." +
                    $"The highest supported protocol version is {currentProtocolVersion}.",
                    actualProtocolVersion);
            }

            if (block.PreviousHash != default)
            {
                throw new InvalidBlockPreviousHashException(
                    "A genesis block should not have previous hash, " +
                    $"but its value is {block.PreviousHash}.");
            }

            if (block.LastCommit is { } lastCommit)
            {
                throw new InvalidBlockLastCommitException(
                    "A genesis block should not have lastCommit, " +
                    $"but its value is {lastCommit}.");
            }
        }

        internal void ValidateBlockCommit(
            Block block,
            BlockCommit blockCommit)
        {
            if (block.ProtocolVersion < BlockMetadata.PBFTProtocolVersion)
            {
                if (blockCommit is { })
                {
                    throw new InvalidBlockCommitException(
                        "PoW Block doesn't have blockCommit.");
                }
                else
                {
                    // To allow the PoW block to be appended, we skips the validation.
                    return;
                }
            }

            if (block.Index == 0)
            {
                if (blockCommit is { })
                {
                    throw new InvalidBlockCommitException(
                        "Genesis block does not have blockCommit.");
                }
                else
                {
                    return;
                }
            }

            if (block.Index != 0 && blockCommit == null)
            {
                throw new InvalidBlockCommitException(
                    $"Block #{block.Hash} BlockCommit is required except for the genesis block.");
            }

            if (block.Index != blockCommit.Height)
            {
                throw new InvalidBlockCommitException(
                    "BlockCommit has height value that is not same with block index. " +
                    $"Block index is {block.Index}, however, BlockCommit height is " +
                    $"{blockCommit.Height}.");
            }

            if (!block.Hash.Equals(blockCommit.BlockHash))
            {
                throw new InvalidBlockCommitException(
                    $"BlockCommit has different block. Block hash is {block.Hash}, " +
                    $"however, BlockCommit block hash is {blockCommit.BlockHash}.");
            }

            // FIXME: When the dynamic validator set is possible, the functionality of this
            // condition should be checked once more.
            var validators = block.ProtocolVersion < BlockMetadata.SlothProtocolVersion
                ? GetWorldState(
                    block.PreviousHash != default ? block.PreviousHash : Genesis.Hash)
                    .GetValidatorSet()
                : GetWorldState(block.StateRootHash).GetValidatorSet();

            if (block.ProtocolVersion < BlockMetadata.EvidenceProtocolVersion)
            {
                validators.ValidateLegacyBlockCommitValidators(blockCommit);
            }
            else
            {
                validators.ValidateBlockCommitValidators(blockCommit);
            }

            BigInteger commitPower = blockCommit.Votes.Aggregate(
                BigInteger.Zero,
                (power, vote) => power + (vote.Flag == VoteFlag.PreCommit
                    ? validators.GetValidator(vote.ValidatorPublicKey).Power
                    : BigInteger.Zero));
            if (validators.TwoThirdsPower >= commitPower)
            {
                throw new InvalidBlockCommitException(
                    $"BlockCommit of BlockHash {blockCommit.BlockHash} " +
                    $"has insufficient vote power {commitPower} compared to 2/3 of " +
                    $"the total power {validators.TotalPower}");
            }
        }

        internal Dictionary<Address, long> ValidateBlockNonces(
            Dictionary<Address, long> storedNonces,
            Block block)
        {
            var nonceDeltas = new Dictionary<Address, long>();
            foreach (Transaction tx in block.Transactions.OrderBy(tx => tx.Nonce))
            {
                nonceDeltas.TryGetValue(tx.Signer, out var nonceDelta);
                storedNonces.TryGetValue(tx.Signer, out var storedNonce);

                long expectedNonce = nonceDelta + storedNonce;

                if (!expectedNonce.Equals(tx.Nonce))
                {
                    throw new InvalidTxNonceException(
                        $"Transaction {tx.Id} has an invalid nonce {tx.Nonce} that is different " +
                        $"from expected nonce {expectedNonce}.",
                        tx.Id,
                        expectedNonce,
                        tx.Nonce);
                }

                nonceDeltas[tx.Signer] = nonceDelta + 1;
            }

            return nonceDeltas;
        }

        internal void ValidateBlockLoadActions(Block block)
        {
            foreach (Transaction tx in block.Transactions)
            {
                foreach (IValue rawAction in tx.Actions)
                {
                    _ = ActionEvaluator.ActionLoader.LoadAction(block.Index, rawAction);
                }
            }
        }

        internal void ValidateBlock(Block block)
        {
            if (block.Index <= 0)
            {
                throw new ArgumentException(
                    $"Given {nameof(block)} must have a positive index but has index {block.Index}",
                    nameof(block));
            }

            long index = Count;
            if (block.Index != index)
            {
                throw new InvalidBlockIndexException(
                    $"The expected index of block {block.Hash} is #{index}, " +
                    $"but its index is #{block.Index}.");
            }

            int actualProtocolVersion = block.ProtocolVersion;
            const int currentProtocolVersion = Block.CurrentProtocolVersion;

            // FIXME: Crude way of checking protocol version for non-genesis block.
            // Ideally, whether this is called during instantiation should be made more explicit.
            if (actualProtocolVersion > currentProtocolVersion)
            {
                string message =
                    $"The protocol version ({actualProtocolVersion}) of the block " +
                    $"#{block.Index} {block.Hash} is not supported by this node." +
                    $"The highest supported protocol version is {currentProtocolVersion}.";
                throw new InvalidBlockProtocolVersionException(
                    message,
                    actualProtocolVersion
                );
            }
            else if (actualProtocolVersion < Tip.ProtocolVersion)
            {
                string message =
                    "The protocol version is disallowed to be downgraded from the topmost block " +
                    $"in the chain ({actualProtocolVersion} < {Tip.ProtocolVersion}).";
                throw new InvalidBlockProtocolVersionException(message, actualProtocolVersion);
            }

            Block lastBlock = this[index - 1];
            BlockHash? prevHash = lastBlock?.Hash;
            DateTimeOffset? prevTimestamp = lastBlock?.Timestamp;

            if (!block.PreviousHash.Equals(prevHash))
            {
                throw new InvalidBlockPreviousHashException(
                    $"The block #{index} {block.Hash} is not continuous from the " +
                    $"block #{index - 1}; while previous block's hash is " +
                    $"{prevHash}, the block #{index} {block.Hash}'s pointer to " +
                    "the previous hash refers to " +
                    (block.PreviousHash.ToString() ?? "nothing") + ".");
            }

            if (block.Timestamp < prevTimestamp)
            {
                throw new InvalidBlockTimestampException(
                    $"The block #{index} {block.Hash}'s timestamp " +
                    $"({block.Timestamp}) is earlier than " +
                    $"the block #{index - 1}'s ({prevTimestamp}).");
            }

            if (block.Index <= 1)
            {
                if (block.LastCommit is { })
                {
                    throw new InvalidBlockLastCommitException(
                        "The genesis block and the next block should not have lastCommit.");
                }
            }
            else
            {
                // Any block after a PoW block should not have a last commit regardless of
                // the protocol version.  As we have the target block index > 2, if it is a PoW
                // block, the previous block would be a PoW block and is covered by this case.
                if (lastBlock?.ProtocolVersion < BlockMetadata.PBFTProtocolVersion)
                {
                    if (block.LastCommit is { })
                    {
                        throw new InvalidBlockLastCommitException(
                            "A block after a PoW block should not have lastCommit.");
                    }
                }
                else
                {
                    if (block.LastCommit is null)
                    {
                        throw new InvalidBlockLastCommitException(
                            "A PBFT block that does not have zero or one index or " +
                            "is not a block after a PoW block should have lastCommit.");
                    }
                }

                try
                {
                    var hash = block.PreviousHash == default ? Genesis.Hash : block.PreviousHash;
                    ValidateBlockCommit(this[hash], block.LastCommit);
                }
                catch (InvalidBlockCommitException ibce)
                {
                    throw new InvalidBlockLastCommitException(ibce.Message);
                }
            }

            foreach (var ev in block.Evidence)
            {
                var stateRootHash = GetNextStateRootHash(ev.Height);
                var worldState = GetWorldState(stateRootHash ?? default);
                var validatorSet = worldState.GetValidatorSet();
                var evidenceContext = new EvidenceContext(validatorSet);
                ev.Verify(evidenceContext);
            }
        }

        /// <summary>
        /// Validates a result obtained from <see cref="EvaluateBlock"/> by
        /// comparing the state root hash from <see cref="GetNextStateRootHash(BlockHash)"/>
        /// which stores state root hash from <see cref="DetermineNextBlockStateRootHash"/>,
        /// to the one in <paramref name="block"/>.
        /// </summary>
        /// <param name="block">The <see cref="Block"/> to validate against.</param>
        /// <exception cref="InvalidOperationException">If this method is called
        /// when the result of <see cref="GetNextStateRootHash(BlockHash)"/>
        /// is <see langword="null"/>.  This can happen if <paramref name="block"/>
        /// is an index higher than the tip but its result is not ready yet.</exception>
        /// <exception cref="InvalidBlockStateRootHashException">If the state root hash
        /// calculated by committing to the <see cref="IStateStore"/> does not match
        /// the <paramref name="block"/>'s <see cref="Block.StateRootHash"/>.</exception>
        /// <seealso cref="EvaluateBlock"/>
        /// <seealso cref="DetermineNextBlockStateRootHash"/>
        internal void ValidateBlockStateRootHash(Block block)
        {
            // NOTE: Since previous hash validation is on block validation,
            // assume block is genesis if previous hash is null.
            if (!(block.PreviousHash is BlockHash previousHash))
            {
                return;
            }

            HashDigest<SHA256> stateRootHash = GetNextStateRootHash(previousHash) ??
                throw new InvalidOperationException(
                    $"Cannot validate a block' state root hash as the next " +
                    $"state root hash for block {previousHash} is missing.");

            if (!stateRootHash.Equals(block.StateRootHash))
            {
                var message = $"Block #{block.Index} {block.Hash}'s state root hash " +
                    $"is {block.StateRootHash}, but the execution result is {stateRootHash}.";
                throw new InvalidBlockStateRootHashException(
                    message,
                    block.StateRootHash,
                    stateRootHash);
            }
        }

        /// <summary>
        /// Validates a result obtained from <see cref="EvaluateBlockPrecededStateRootHash"/> by
        /// comparing the state root hash calculated using
        /// <see cref="DetermineBlockPrecededStateRootHash"/>
        /// to the one in <paramref name="block"/>.
        /// </summary>
        /// <param name="block">The <see cref="Block"/> to validate against.</param>
        /// <param name="evaluations">The list of <see cref="IActionEvaluation"/>s
        /// from which to extract the states to commit.</param>
        /// <exception cref="InvalidBlockStateRootHashException">If the state root hash
        /// calculated by committing to the <see cref="IStateStore"/> does not match
        /// the <paramref name="block"/>'s <see cref="Block.StateRootHash"/>.</exception>
        /// <remarks>
        /// Since the state root hash for can only be calculated from making a commit
        /// to an <see cref="IStateStore"/>, this always has a side-effect to the
        /// <see cref="IStateStore"/> regardless of whether the state root hash
        /// obdatined through committing to the <see cref="IStateStore"/>
        /// matches the <paramref name="block"/>'s <see cref="Block.StateRootHash"/> or not.
        /// </remarks>
        /// <seealso cref="EvaluateBlockPrecededStateRootHash"/>
        /// <seealso cref="DetermineBlockPrecededStateRootHash"/>
        internal void ValidateBlockPrecededStateRootHash(
            Block block, out IReadOnlyList<ICommittedActionEvaluation> evaluations)
        {
            var rootHash = DetermineBlockPrecededStateRootHash(block, out evaluations);
            if (!rootHash.Equals(block.StateRootHash))
            {
                var message = $"Block #{block.Index} {block.Hash}'s state root hash " +
                    $"is {block.StateRootHash}, but the execution result is {rootHash}.";
                throw new InvalidBlockStateRootHashException(
                    message,
                    block.StateRootHash,
                    rootHash);
            }
        }
    }
}
