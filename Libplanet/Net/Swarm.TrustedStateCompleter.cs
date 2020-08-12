using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Security.Cryptography;
using System.Threading;
using System.Threading.Tasks;
using Libplanet.Blockchain;
using Libplanet.Net.Messages;

namespace Libplanet.Net
{
    public partial class Swarm<T>
    {
        /// <summary>
        /// Gets state completers that complement incomplete block states by trusting
        /// (i.e., download-and-reusing) states calculated by the given
        /// <paramref name="trustedStateValidators"/>.  If no trustworthy states are available
        /// incomplete states are complemented by recalculating
        /// (i.e., <see cref="StateCompleterSet{T}.Recalculate"/>).
        /// </summary>
        /// <param name="trustedStateValidators">
        /// If any peer in this set is reachable and there are no block states in the current node
        /// <see cref="Swarm{T}"/> tries to receive the needed states from that trusted peer,
        /// which is also calculated by that peer.
        /// <para>If it fails to find or receive trustworthy states from peers it recalculates
        /// (i.e., <see cref="StateCompleterSet{T}.Recalculate"/>) states by executing actions by
        /// itself instead.</para>
        /// <para>Note that this option is intended to be exposed to end users through a feasible
        /// user interface so that they can decide whom to trust for themselves.</para>
        /// </param>
        /// <param name="dialTimeout">
        /// When the <see cref="Swarm{T}"/> tries to dial each peer in <paramref
        /// name="trustedStateValidators"/>, the dial-up is cancelled after this timeout,
        /// and it tries another peer.  If <c>null</c> is given it never gives up dial-ups.
        /// </param>
        /// <param name="fallbackCompleterSet">
        /// If no <paramref name="trustedStateValidators"/> are available or have the needed state
        /// try to complete state using this <paramref name="fallbackCompleterSet"/> instead.
        /// <see cref="StateCompleterSet{T}.Recalculate"/> by default.
        /// </param>
        /// <param name="cancellationToken">A cancellation token to observe while waiting for
        /// dial-ups.</param>
        /// <returns>A set of state completers.</returns>
        /// <exception cref="ArgumentNullException">Thrown when <paramref
        /// name="trustedStateValidators"/> is <c>null</c>.</exception>
        public async Task<StateCompleterSet<T>> GetTrustedStateCompleterAsync(
            IImmutableSet<Address> trustedStateValidators,
            TimeSpan? dialTimeout = null,
            StateCompleterSet<T>? fallbackCompleterSet = null,
            CancellationToken cancellationToken = default(CancellationToken)
        )
        {
            if (trustedStateValidators is null)
            {
                throw new ArgumentNullException(nameof(trustedStateValidators));
            }

            IReadOnlyList<BoundPeer> trustedPeers =
                (await DialToExistingPeers(dialTimeout, cancellationToken))
                    .Select(pair => pair.Peer)
                    .Where(peer => trustedStateValidators.Contains(peer.Address))
                    .ToArray();

            StateCompleterSet<T> fallback = fallbackCompleterSet
                ?? StateCompleterSet<T>.Recalculate;

            async Task FillTrustedBlockStates(
                HashDigest<SHA256> blockHash,
                Func<IDisposable> enterWriteMode
            )
            {
                var request = new GetBlockStates(blockHash);
                foreach (BoundPeer peer in trustedPeers)
                {
                    _logger.Debug(
                        "Requests the block {BlockHash}'s states to a trusted peer {Peer}...",
                        blockHash,
                        peer
                    );
                    Message reply;
                    try
                    {
                        reply = await Transport.SendMessageWithReplyAsync(
                            peer,
                            request,
                            timeout: Options.RecentStateRecvTimeout,
                            cancellationToken: cancellationToken
                        );
                    }
                    catch (TimeoutException e)
                    {
                        string msg = "Failed to receive the block {BlockHash}'s states from " +
                            "a trusted peer {Peer}: " + e;
                        _logger.Error(e, msg, blockHash, peer);
                        continue;
                    }

                    if (reply is BlockStates blockStates)
                    {
                        if (!blockStates.BlockHash.Equals(blockHash))
                        {
                            string msg =
                                $"Expected a {nameof(BlockStates)} message for the block " +
                                "{RequestedBlockHash}, but received a wrong reply instead from " +
                                "a trusted peer {Peer}: {RepliedBlockHash}";
                            _logger.Error(msg, blockHash, peer, blockStates.BlockHash);
                            continue;
                        }
                        else if (blockStates.States is null)
                        {
                            string msg =
                                "A trusted peer {Peer} does not have the block {BlockHash}'s " +
                                "states.";
                            _logger.Error(msg, peer, blockHash);
                            continue;
                        }

                        using (enterWriteMode())
                        {
                            BlockChain.Store.SetBlockStates(
                                blockStates.BlockHash,
                                blockStates.States
                            );
                        }
                    }
                    else
                    {
                        string msg =
                            $"Expected a {nameof(BlockStates)} message, but received a wrong " +
                            "reply instead from a trusted peer {Peer}: {ReplyMessage}";
                        _logger.Error(msg, peer, reply);
                    }
                }
            }

            return new StateCompleterSet<T>
            {
                StateCompleter = (blockChain, blockHash, address, enterWriteLock) =>
                {
                    FillTrustedBlockStates(blockHash, enterWriteLock).Wait(cancellationToken);
                    return blockChain.GetState(address, blockHash, fallback.StateCompleter);
                },
                FungibleAssetStateCompleter =
                    (blockChain, blockHash, address, currency, enterWriteLock) =>
                    {
                        FillTrustedBlockStates(blockHash, enterWriteLock).Wait(cancellationToken);
                        return blockChain.GetBalance(
                            address,
                            currency,
                            blockHash,
                            fallback.FungibleAssetStateCompleter
                        );
                    },
            };
        }
    }
}
