using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using Libplanet.Types.Consensus;

namespace Libplanet.Net.Consensus
{
    /// <summary>
    /// Pool that gathers duplicated <see cref="Vote"/> pairs.
    /// </summary>
    internal sealed class DuplicatedVotePairPool
    {
        private ConcurrentDictionary<Tuple<Vote, Vote>, bool> _duplicatedVotePairs;

        /// <summary>
        /// Creates a <see cref="DuplicatedVotePairPool"/> instance.
        /// </summary>
        public DuplicatedVotePairPool()
        {
            _duplicatedVotePairs = new ConcurrentDictionary<Tuple<Vote, Vote>, bool>();
        }

        /// <summary>
        /// Add duplicated <see cref="Vote"/>s to the pool.
        /// </summary>
        /// <param name="voteRef">
        /// Reference <see cref="Vote"/> of duplicated pair.
        /// In general, <see cref="Vote"/> that has been made first, and added on the
        /// <see cref="DuplicatedVotePairPool"/>.</param>
        /// <param name="voteDup">
        /// Conflicting <see cref="Vote"/> of duplicated pair.
        /// In general, latter <see cref="Vote"/> that will be rejected from the
        /// <see cref="DuplicatedVotePairPool"/>.</param>
        /// <exception cref="ArgumentException">Thrown if pair of <see cref="Vote"/>s
        /// are not conflicting.</exception>
        public void Add(Vote voteRef, Vote voteDup)
        {
            if (voteRef.Height != voteDup.Height)
            {
                throw new ArgumentException(
                    $"Heights of vote pair are different : {voteRef.Height}, {voteDup.Height}");
            }

            if (voteRef.Round != voteDup.Round)
            {
                throw new ArgumentException(
                    $"Rounds of vote pair are different : {voteRef.Round}, {voteDup.Round}");
            }

            if (voteRef.ValidatorPublicKey != voteDup.ValidatorPublicKey)
            {
                throw new ArgumentException(
                    $"Public keys of vote pair are different " +
                    $": {voteRef.ValidatorPublicKey}, {voteDup.ValidatorPublicKey}");
            }

            if (voteRef.Flag != voteDup.Flag)
            {
                throw new ArgumentException(
                    $"Vote flags of vote pair are different : {voteRef.Flag}, {voteDup.Flag}");
            }

            if (voteRef.BlockHash.Equals(voteDup.BlockHash))
            {
                throw new ArgumentException(
                    $"Block hash of vote pair are equal : {voteRef.BlockHash}");
            }

            if (!voteRef.Verify())
            {
                throw new ArgumentException(
                    $"vote has invalid signature : {voteRef}, {voteRef.Signature}");
            }

            if (!voteDup.Verify())
            {
                throw new ArgumentException(
                    $"voteDup has invalid signature : {voteDup}, {voteDup.Signature}");
            }

            _duplicatedVotePairs.TryAdd(
                Tuple.Create(voteRef, voteDup), true);
        }

        /// <summary>
        /// Retrieve duplicated vote pairs from the <see cref="DuplicatedVotePairPool"/>.
        /// <seealso cref="Blockchain.BlockChain.UpdateEvidence(
        /// IEnumerable{Tuple{Vote, Vote}}, IEnumerable{Evidence}?)"/>
        /// <seealso cref="Context.ProcessHeightOrRoundUponRules(Messages.ConsensusMsg)"/>
        /// </summary>
        /// <returns>Duplicated vote pairs retrieved from the
        /// <see cref="DuplicatedVotePairPool"/>.
        /// </returns>
        public IEnumerable<Tuple<Vote, Vote>> Exhaust()
        {
            foreach (Tuple<Vote, Vote> key in _duplicatedVotePairs.Keys)
            {
                if (_duplicatedVotePairs.TryRemove(key, out _))
                {
                    yield return key;
                }
            }
        }
    }
}
