using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using Libplanet.Blocks;
using Libplanet.Crypto;

namespace Libplanet.Consensus
{
    /// <summary>
    /// A wrapper class for a <see cref="List{T}"/> of <see cref="PublicKey"/>s for validators.
    /// This standardizes the ordering of validators by <see cref="Address"/>.
    /// </summary>
    public class ValidatorSet : IEquatable<ValidatorSet>
    {
        /// <summary>
        /// Creates an instance of an empty <see cref="ValidatorSet"/>.
        /// to <see cref="Validators"/>.
        /// </summary>
        public ValidatorSet()
            : this(new List<PublicKey>())
        {
        }

        /// <summary>
        /// Creates an instance of <see cref="ValidatorSet"/>.  Given <paramref name="validators"/>
        /// is ordered internally by <see cref="Address"/> before getting assigned
        /// to <see cref="Validators"/>.
        /// </summary>
        /// <param name="validators">The <see cref="List{T}"/> of validators to use.</param>
        public ValidatorSet(List<PublicKey> validators)
        {
            Validators = validators
                .OrderBy(validators => validators.ToAddress())
                .ToImmutableList();
        }

        public ValidatorSet(Bencodex.Types.List encoded)
        {
            Validators = encoded
                .Select(value => new PublicKey(((Bencodex.Types.Binary)value).ByteArray))
                .OrderBy(validators => validators.ToAddress())
                .ToImmutableList();
        }

        /// <summary>
        /// An <see cref="ImmutableList{T}"/> of validators.  This is guaranteed to be ordered
        /// by <see cref="Address"/>.
        /// </summary>
        public ImmutableList<PublicKey> Validators { get; }

        /// <summary>
        /// The total number of validators.
        /// </summary>
        public int TotalCount => Validators.Count;

        /// <summary>
        /// The two thirds of validator count, rounded down.
        /// </summary>
        public int TwoThirdsCount => Validators.Count * 2 / 3;

        /// <summary>
        /// The one third of validator count, rounded down.
        /// </summary>
        public int OneThirdCount => Validators.Count / 3;

        public Bencodex.Types.List Encoded => new Bencodex.Types.List(
            Validators.Select(validator => validator.Format(false)));

        /// <summary>
        /// Gets the validator at given <paramref name="index"/>.
        /// </summary>
        /// <param name="index">The index to search.</param>
        /// <returns>The validator at given <paramref name="index"/>.</returns>
        public PublicKey this[int index] => Validators[index];

        /// <summary>
        /// Checks if the validator is a member of <see cref="ValidatorSet"/>.
        /// </summary>
        /// <param name="validator">The validator to check.</param>
        /// <returns><see langword="true"/> if given <paramref name="validator"/>
        /// is in <see cref="Validators"/>, <see langword="false"/> otherwise.</returns>
        public bool Contains(PublicKey validator) => Validators.Contains(validator);

        public bool Equals(ValidatorSet? other) =>
            other is ValidatorSet validators && Validators.SequenceEqual(validators.Validators);

        public override bool Equals(object? obj) => obj is ValidatorSet other && Equals(other);

        public override int GetHashCode()
        {
            int hashCode = 17;
            foreach (PublicKey validator in Validators)
            {
                hashCode = unchecked(hashCode * (31 + validator.GetHashCode()));
            }

            return hashCode;
        }

        /// <summary>
        /// Gets the proposer for a given context.
        /// </summary>
        /// <param name="height">The height of the context under consideration.</param>
        /// <param name="round">The round of the context under consideration.</param>
        /// <returns>A <see cref="PublicKey"/> deterministically chosen from
        /// <see cref="Validators"/>, <paramref name="height"/>, and <paramref name="round"/>.
        /// </returns>
        /// <exception cref="InvalidOperationException">Thrown when
        /// <see cref="Validators"/> is empty.</exception>
        public PublicKey GetProposer(long height, int round)
        {
            // FIXME: Empty Validators should not be allowed.  Preventing during construction
            // would require heavier refactoring of BlockPolicy<T>.
            return Validators.IsEmpty
                ? throw new InvalidOperationException(
                    "Cannot select a proposer from an empty list of validators.")
                : Validators[(int)((height + round) % Validators.Count)];
        }

        /// <summary>
        /// Checks whether <see cref="BlockCommit.Votes"/> is ordered
        /// by <see cref="Address"/> of each <see cref="Vote.Validator"/>.
        /// </summary>
        /// <param name="blockCommit">The <see cref="BlockCommit"/> to check.</param>
        /// <returns><see langword="true"/> if the <see cref="BlockCommit.Votes"/> is
        /// ordered, <see langword="false"/> otherwise.</returns>
        public bool ValidateBlockCommitValidators(BlockCommit blockCommit)
        {
            return Validators.SequenceEqual(
                blockCommit.Votes.Select(vote => vote.Validator).ToList());
        }
    }
}
