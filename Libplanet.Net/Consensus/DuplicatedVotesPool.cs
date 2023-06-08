using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using Libplanet.Consensus;
using Libplanet.Crypto;

namespace Libplanet.Net.Consensus
{
    /// <summary>
    /// Pool that gathers duplicated <see cref="Vote"/>s.
    /// </summary>
    public class DuplicatedVotesPool
    {
        private ConcurrentDictionary<(long, int, PublicKey), List<Vote>> _duplicatedVotes;

        /// <summary>
        /// Creates a <see cref="DuplicatedVotesPool"/> instance.
        /// </summary>
        public DuplicatedVotesPool()
        {
            _duplicatedVotes = new ConcurrentDictionary<(long, int, PublicKey), List<Vote>>();
        }

        /// <summary>
        /// Add duplicated <see cref="Vote"/>s to the pool.
        /// </summary>
        /// <param name="vote">
        /// Reference <see cref="Vote"/> of duplicated pair.
        /// In general, <see cref="Vote"/> that has been made first, and added on the
        /// <see cref="MessageLog"/>.</param>
        /// <param name="voteDup">
        /// Conflicting <see cref="Vote"/> of duplicated pair.
        /// In general, latter <see cref="Vote"/> that will be rejected from the
        /// <see cref="MessageLog"/>.</param>
        /// <exception cref="ArgumentException">Thrown if pair of <see cref="Vote"/>s
        /// are not conflicting.</exception>
        public void Add(Vote vote, Vote voteDup)
        {
            if (vote.Height != voteDup.Height)
            {
                throw new ArgumentException(
                    $"Heights of vote pair are different : {vote.Height}, {voteDup.Height}");
            }

            if (vote.Round != voteDup.Round)
            {
                throw new ArgumentException(
                    $"Rounds of vote pair are different : {vote.Round}, {voteDup.Round}");
            }

            if (vote.ValidatorPublicKey != voteDup.ValidatorPublicKey)
            {
                throw new ArgumentException(
                    $"Public keys of vote pair are different " +
                    $": {vote.ValidatorPublicKey}, {voteDup.ValidatorPublicKey}");
            }

            if (vote.Flag != voteDup.Flag)
            {
                throw new ArgumentException(
                    $"Vote flags of vote pair are different : {vote.Flag}, {voteDup.Flag}");
            }

            if (vote.BlockHash is null)
            {
                throw new ArgumentException("vote is nill");
            }

            if (voteDup.BlockHash is null)
            {
                throw new ArgumentException("voteDup is nill");
            }

            if (vote.BlockHash.Equals(voteDup.BlockHash))
            {
                throw new ArgumentException(
                    $"Block hash of vote pair are equal : {vote.BlockHash}");
            }

            if (!vote.Verify())
            {
                throw new ArgumentException(
                    $"vote has invalid signature : {vote}, {vote.Signature}");
            }

            if (!voteDup.Verify())
            {
                throw new ArgumentException(
                    $"voteDup has invalid signature : {voteDup}, {voteDup.Signature}");
            }

            _duplicatedVotes.AddOrUpdate(
                (vote.Height, vote.Round, vote.ValidatorPublicKey),
                new List<Vote>() { vote, voteDup },
                (key, voteList) => voteList.Concat(new List<Vote> { voteDup }).ToList());
        }

        /// <summary>
        /// Retrieve duplicated vote sets from the <see cref="DuplicatedVotesPool"/>.
        /// <seealso cref="Blockchain.BlockChain.UpdateEvidence(
        /// IEnumerable{IEnumerable{Vote}}, IEnumerable{Evidence}?)"/>
        /// <seealso cref="Context.ProcessHeightOrRoundUponRules(Messages.ConsensusMsg)"/>
        /// </summary>
        /// <returns>Duplicated vote sets retrieved from the <see cref="DuplicatedVotesPool"/>.
        /// </returns>
        public IEnumerable<IEnumerable<Vote>> Exhaust()
        {
            foreach ((long, int, PublicKey) key in _duplicatedVotes.Keys)
            {
                if (_duplicatedVotes.TryRemove(key, out List<Vote>? voteList))
                {
                    yield return voteList;
                }
            }
        }
    }
}
