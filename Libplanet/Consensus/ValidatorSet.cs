using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Diagnostics.Contracts;
using System.Linq;
using System.Numerics;
using Libplanet.Crypto;

namespace Libplanet.Consensus
{
    /// <summary>
    /// A wrapper class for a <see cref="List{T}"/> of <see cref="Validator"/>s.
    /// This standardizes the ordering of validators by <see cref="Address"/>.
    /// </summary>
    public class ValidatorSet : IEquatable<ValidatorSet>
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
        public ValidatorSet(List<Validator> validators)
        {
            Validators = validators
                .OrderBy(validator => validator.PublicKey.ToAddress())
                .ToImmutableList();
        }

        public ValidatorSet(Bencodex.Types.List encoded)
        {
            Validators = encoded
                .Select(value => new Validator(((Bencodex.Types.Binary)value).ByteArray))
                .OrderBy(validator => validator.PublicKey.ToAddress())
                .ToImmutableList();
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

        public Bencodex.Types.List Encoded => new Bencodex.Types.List(
            Validators.Select(validator => validator.ByteArray));

        /// <summary>
        /// Gets the validator at given <paramref name="index"/>.
        /// </summary>
        /// <param name="index">The index to search.</param>
        /// <returns>The validator at given <paramref name="index"/>.</returns>
        public Validator this[int index] => Validators[index];

        public Validator GetValidator(PublicKey publicKey)
            => Validators.Find(validator => validator.PublicKey == publicKey);

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
        /// Create new <see cref="ValidatorSet"/> that given validator has been added.
        /// Original <see cref="ValidatorSet"/> does not change.
        /// </summary>
        /// <param name="validator">The validator to be added.</param>
        /// <returns>New <see cref="ValidatorSet"/> that given validator has been added.</returns>
        [Pure]
        public ValidatorSet Add(Validator validator)
            => new ValidatorSet(Validators.Add(validator).ToList());

        /// <summary>
        /// Create new <see cref="ValidatorSet"/> that given validator has been removed.
        /// Original <see cref="ValidatorSet"/> does not change.
        /// On removal, check given validator's publickey and power.
        /// </summary>
        /// <param name="validator">The validator to be removed.</param>
        /// <returns>New <see cref="ValidatorSet"/> that given validator has been removed.</returns>
        [Pure]
        public ValidatorSet Remove(Validator validator)
            => new ValidatorSet(Validators.Remove(validator).ToList());

        /// <summary>
        /// Create new <see cref="ValidatorSet"/>
        /// that validator of given public key has been removed.
        /// Original <see cref="ValidatorSet"/> does not change.
        /// </summary>
        /// <param name="publicKey">The <see cref="PublicKey"/> of validator to be removed.</param>
        /// <returns>New <see cref="ValidatorSet"/> that
        /// validator of given public key has been removed.</returns>
        [Pure]
        public ValidatorSet Remove(PublicKey publicKey)
            => new ValidatorSet(Validators.RemoveAll(v => v.PublicKey.Equals(publicKey)).ToList());

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
            // would require heavier refactoring of BlockPolicy<T>.
            return Validators.IsEmpty
                ? throw new InvalidOperationException(
                    "Cannot select a proposer from an empty list of validators.")
                : Validators[(int)((height + round) % Validators.Count)];
        }
    }
}
