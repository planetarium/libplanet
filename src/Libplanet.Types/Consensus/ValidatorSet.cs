using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Diagnostics.Contracts;
using System.Linq;
using System.Numerics;
using Bencodex;
using Libplanet.Crypto;
using Libplanet.Types.Blocks;

namespace Libplanet.Types.Consensus
{
    /// <summary>
    /// A wrapper class for a <see cref="List{T}"/> of <see cref="Validator"/>s.
    /// This standardizes the ordering of validators by <see cref="Address"/>.
    /// </summary>
    public class ValidatorSet : IEquatable<ValidatorSet>, IBencodable
    {
        /// <summary>
        /// Creates an instance of an empty <see cref="ValidatorSet"/>.
        /// to <see cref="Validators"/>.
        /// </summary>
        public ValidatorSet()
            : this(new List<Validator>())
        {
        }

        /// <summary>
        /// Creates an instance of <see cref="ValidatorSet"/>.  Given <paramref name="validators"/>
        /// is ordered internally by <see cref="Address"/> before getting assigned
        /// to <see cref="Validators"/>.
        /// </summary>
        /// <param name="validators">The <see cref="List{T}"/> of validators to use.</param>
        /// <exception cref="ArgumentException">Thrown when one of the following is true:
        /// <list type="bullet">
        ///     <item><description>There is a duplicate among <see cref="PublicKey"/>s for
        ///     <paramref name="validators"/>.
        ///     </description></item>
        ///     <item><description>There is a <see cref="Validator"/> with zero power.
        ///     </description></item>
        /// </list>
        /// </exception>
        public ValidatorSet(List<Validator> validators)
        {
            if (validators
                .Select(validators => validators.PublicKey)
                .Distinct()
                .Count() != validators.Count)
            {
                throw new ArgumentException("All public keys for validators must be unique.");
            }
            else if (validators.Any(validator => validator.Power == BigInteger.Zero))
            {
                throw new ArgumentException("All validators must have positive power.");
            }

            Validators = validators
                .OrderBy(validator => validator.OperatorAddress)
                .ToImmutableList();
        }

        public ValidatorSet(Bencodex.Types.IValue bencoded)
            : this(bencoded is Bencodex.Types.List list
                ? list
                : throw new ArgumentException(
                    $"Given {nameof(bencoded)} must be of type " +
                    $"{typeof(Bencodex.Types.List)}: {bencoded.GetType()}",
                    nameof(bencoded)))
        {
        }

        // FIXME: Order should be checked when deserializing.
        private ValidatorSet(Bencodex.Types.List bencoded)
            : this(bencoded.Select(elem => new Validator(elem)).ToList())
        {
        }

        /// <summary>
        /// An <see cref="ImmutableList{T}"/> of validators.  This is guaranteed to be ordered
        /// by <see cref="Address"/>.
        /// </summary>
        public ImmutableList<Validator> Validators { get; }

        /// <summary>
        /// An <see cref="ImmutableList{T}"/> of public keys of validators.
        /// This is guaranteed to be ordered by <see cref="Address"/>.
        /// </summary>
        public ImmutableList<PublicKey> PublicKeys => Validators.Select(
            validator => validator.PublicKey).ToImmutableList();

        /// <summary>
        /// The total number of validators.
        /// </summary>
        public int TotalCount => Validators.Count;

        /// <summary>
        /// The total power of validators.
        /// </summary>
        public BigInteger TotalPower => Validators.Aggregate(
            BigInteger.Zero, (total, next) => total + next.Power);

        /// <summary>
        /// The two thirds of validator count, rounded down.
        /// </summary>
        public int TwoThirdsCount => TotalCount * 2 / 3;

        /// <summary>
        /// The two thirds of validator total power, rounded down.
        /// </summary>
        public BigInteger TwoThirdsPower => TotalPower * 2 / 3;

        /// <summary>
        /// The one third of validator count, rounded down.
        /// </summary>
        public int OneThirdCount => TotalCount / 3;

        /// <summary>
        /// The one third of validator total power, rounded down.
        /// </summary>
        public BigInteger OneThirdPower => TotalPower / 3;

        /// <inheritdoc/>
        public Bencodex.Types.IValue Bencoded =>
            new Bencodex.Types.List(Validators.Select(validator => validator.Bencoded));

        /// <summary>
        /// Gets the validator at given <paramref name="index"/>.
        /// </summary>
        /// <param name="index">The index to search.</param>
        /// <returns>The validator at given <paramref name="index"/>.</returns>
        public Validator this[int index] => Validators[index];

        /// <summary>
        /// Gets the index of given <paramref name="publicKey"/>.
        /// </summary>
        /// <param name="publicKey">The <see cref="PublicKey"/> to find index.</param>
        /// <returns>The index of given <paramref name="publicKey"/>.</returns>
        public int FindIndex(PublicKey publicKey) => Validators.FindIndex(
            validator => validator.PublicKey.Equals(publicKey));

        public Validator GetValidator(PublicKey publicKey)
        {
            if (Validators.Find(validator => validator.PublicKey == publicKey) is { } validator)
            {
                return validator;
            }

            throw new ArgumentException(
                message: $"No validator with the given public key: {publicKey}",
                paramName: nameof(publicKey));
        }

        public ImmutableList<Validator> GetValidators(IEnumerable<PublicKey> publicKeys)
            => (from publicKey in publicKeys select GetValidator(publicKey)).ToImmutableList();

        public BigInteger GetValidatorsPower(List<PublicKey> publicKeys)
        {
            return GetValidators(publicKeys).Aggregate(
                BigInteger.Zero, (total, next) => total + next.Power);
        }

        /// <summary>
        /// Checks if given <paramref name="validator"/> is a member of <see cref="ValidatorSet"/>.
        /// Checks both of <see cref="Validator.PublicKey"/> and <see cref="Validator.Power"/>.
        /// </summary>
        /// <param name="validator">The <see cref="Validator"/> to check.</param>
        /// <returns><see langword="true"/> if given <paramref name="validator"/>
        /// is in <see cref="Validators"/>, <see langword="false"/> otherwise.</returns>
        public bool Contains(Validator validator) => Validators.Contains(validator);

        /// <summary>
        /// Checks if given <paramref name="publicKey"/> is a member of <see cref="ValidatorSet"/>.
        /// </summary>
        /// <param name="publicKey">The <see cref="PublicKey"/> of the
        /// <see cref="Validator"/> to check.</param>
        /// <returns><see langword="true"/> if given <paramref name="publicKey"/>
        /// is in <see cref="Validators"/>, <see langword="false"/> otherwise.</returns>
        public bool ContainsPublicKey(PublicKey publicKey) =>
            Validators.Any(validator => validator.PublicKey.Equals(publicKey));

        /// <summary>
        /// Creates a new <see cref="ValidatorSet"/> that has been updated with
        /// given <paramref name="validator"/> according to the following rule:
        /// <list type="bullet">
        ///     <item><description>
        ///         If <paramref name="validator"/>'s power is zero, the <see cref="Validator"/>
        ///         with the same <see cref="PublicKey"/> is removed, if it exists.
        ///         If no matching <see cref="Validator"/> is found, no change is made.
        ///     </description></item>
        ///     <item><description>
        ///         If <paramref name="validator"/>'s power is positive, the <see cref="Validator"/>
        ///         with the same <see cref="PublicKey"/> is overwritten, if it exists.
        ///         If no matching <see cref="Validator"/> is found, <paramref name="validator"/>
        ///         is added to the set.
        ///     </description></item>
        /// </list>
        /// </summary>
        /// <param name="validator">The <see cref="Validator"/> to update.</param>
        /// <returns>New <see cref="ValidatorSet"/> updated with
        /// given <paramref name="validator"/>.</returns>
        [Pure]
        public ValidatorSet Update(Validator validator)
        {
            var updated = Validators.ToList();

            updated.RemoveAll(v => v.PublicKey.Equals(validator.PublicKey));

            if (validator.Power == BigInteger.Zero)
            {
                return new ValidatorSet(updated);
            }
            else
            {
                updated.Add(validator);
                return new ValidatorSet(updated);
            }
        }

        /// <inheritdoc/>
        public bool Equals(ValidatorSet? other) =>
            other is ValidatorSet validators && Validators.SequenceEqual(validators.Validators);

        /// <inheritdoc/>
        public override bool Equals(object? obj) => obj is ValidatorSet other && Equals(other);

        /// <inheritdoc/>
        public override int GetHashCode()
        {
            int hashCode = 17;
            foreach (Validator validator in Validators)
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
        /// <returns>A <see cref="Validator"/> deterministically chosen from
        /// <see cref="Validators"/>, <paramref name="height"/>, and <paramref name="round"/>.
        /// </returns>
        /// <exception cref="InvalidOperationException">Thrown when
        /// <see cref="Validators"/> is empty.</exception>
        public Validator GetProposer(long height, int round)
        {
            // FIXME: Empty Validators should not be allowed.  Preventing during construction
            // would require heavier refactoring of BlockPolicy.
            return Validators.IsEmpty
                ? throw new InvalidOperationException(
                    "Cannot select a proposer from an empty list of validators.")
                : Validators[(int)((height + round) % Validators.Count)];
        }

        /// <summary>
        /// Checks whether <see cref="BlockCommit.Votes"/> is ordered
        /// by <see cref="Address"/> of each <see cref="Vote.ValidatorPublicKey"/>,
        /// and <see cref="Vote.ValidatorPower"/> equals to the one recorded in the chain states.
        /// </summary>
        /// <remarks>
        /// If <see cref="Vote.ValidatorPower"/> is null, power check is ignored.</remarks>
        /// <param name="blockCommit">The <see cref="BlockCommit"/> to check.</param>
        /// <exception cref="InvalidBlockCommitException">Thrown when some votes in the
        /// <paramref name="blockCommit"/> does not have non-null power.</exception>
        /// <exception cref="InvalidBlockCommitException">Thrown when validators from
        /// <paramref name="blockCommit"/> is different from validators of this.</exception>
        public void ValidateBlockCommitValidators(BlockCommit blockCommit)
        {
            ValidatorSet validatorSetFromCommit = new ValidatorSet(blockCommit.Votes.Select(
                v => v.ValidatorPower is BigInteger power
                    ? new Validator(v.ValidatorPublicKey, power)
                    : throw new InvalidBlockCommitException(
                        "All votes in the block commit after block protocol version 10 " +
                        "must have power.")).ToList());

            if (!Equals(validatorSetFromCommit))
            {
                throw new InvalidBlockCommitException(
                    $"BlockCommit of BlockHash {blockCommit.BlockHash} " +
                    $"has different validator set with chain state's validator set: \n" +
                    $"in states | \n " +
                    Validators.Aggregate(
                        string.Empty, (s, v) => s + v + ", \n") +
                    $"in blockCommit | \n " +
                    validatorSetFromCommit.Validators.Aggregate(
                        string.Empty, (s, v) => s + v + ", \n"));
            }
        }

        /// <summary>
        /// Checks whether <see cref="BlockCommit.Votes"/> is ordered
        /// by <see cref="Address"/> of each <see cref="Vote.ValidatorPublicKey"/>,
        /// and <see cref="Vote.ValidatorPower"/> equals to the one recorded in the chain states.
        /// </summary>
        /// <remarks>
        /// If <see cref="Vote.ValidatorPower"/> is null, power check is ignored.</remarks>
        /// <param name="blockCommit">The <see cref="BlockCommit"/> to check.</param>
        /// <exception cref="InvalidBlockCommitException">Thrown when some votes in the
        /// <paramref name="blockCommit"/> does not have null power.</exception>
        /// <exception cref="InvalidBlockCommitException">Thrown when public key of validators from
        /// <paramref name="blockCommit"/> is different from validator's public keys of this.
        /// </exception>
        public void ValidateLegacyBlockCommitValidators(BlockCommit blockCommit)
        {
            if (blockCommit.Votes.Any(v => v.ValidatorPower is not null))
            {
                throw new InvalidBlockCommitException(
                    "All votes in the block commit before block protocol version 10 " +
                    "must have null power.");
            }

            if (!Validators.Select(validator => validator.PublicKey).SequenceEqual(
                blockCommit.Votes.Select(vote => vote.ValidatorPublicKey).ToList()))
            {
                throw new InvalidBlockCommitException(
                    $"BlockCommit of BlockHash {blockCommit.BlockHash} " +
                    $"has different validator set with chain state's validator set: \n" +
                    $"in states | \n " +
                    Validators.Aggregate(
                        string.Empty, (s, key) => s + key + ", \n") +
                    $"in blockCommit | \n " +
                    blockCommit.Votes.Aggregate(
                        string.Empty, (s, key) => s + key.ValidatorPublicKey + ", \n"));
            }
        }
    }
}
