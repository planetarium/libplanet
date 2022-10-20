using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using Libplanet.Consensus;
using Libplanet.Crypto;

namespace Libplanet.Blocks
{
    public static class BlockCommitExtensions
    {
        /// <summary>
        /// Checks whether <see cref="BlockCommit"/> has same validator public key with given
        /// <paramref name="validators"/>.
        /// </summary>
        /// <param name="commit">A <see cref="BlockCommit"/> to check.</param>
        /// <param name="validators">A <see cref="IEnumerable{T}"/> of validator public key.</param>
        /// <returns>Returns <see langword="true"/> if <see cref="BlockCommit"/> has same validator
        /// public keys with <paramref name="validators"/>, otherwise returns
        /// <see langword="false"/>. </returns>
        public static bool HasSameValidators(
            this BlockCommit commit,
            IEnumerable<PublicKey> validators)
        {
            List<PublicKey> iaVoteToHashSetList = new List<PublicKey>();
            foreach (var key in commit.Votes.Select(x => x.Validator))
            {
                iaVoteToHashSetList.Add(key);
            }

            ImmutableHashSet<PublicKey> voteValidators = iaVoteToHashSetList.ToImmutableHashSet();
            var publicKeys = validators as PublicKey[] ?? validators.ToArray();
            ImmutableHashSet<PublicKey> previousValidators = publicKeys.ToImmutableHashSet();

            return iaVoteToHashSetList.Count == publicKeys.Count() &&
                   voteValidators.SetEquals(previousValidators);
        }

        /// <summary>
        /// Checks whether <see cref="BlockCommit"/> has valid signatures for every votes.
        /// </summary>
        /// <param name="commit">A <see cref="BlockCommit"/> to check.</param>
        /// <returns>Returns <see langword="true"/> if <see cref="BlockCommit.Votes"/> has valid
        /// signatures, otherwise return <see langword="false"/>.</returns>
        /// <remarks>A vote with <see cref="VoteFlag.Null"/> or <see cref="VoteFlag.Unknown"/> is
        /// excluded from target, so these case returns <see langword="true"/>.</remarks>
        public static bool HasValidVotes(this BlockCommit commit) =>
            commit.Votes.All(
                vote => vote.Flag == VoteFlag.Null || vote.Flag == VoteFlag.Unknown ||
                        vote.Verify());
    }
}
