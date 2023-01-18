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

        // FIXME: Order should be checked when deserializing.
        public ValidatorSet(Bencodex.Types.List encoded)
            : this(encoded.Select(elem => new Validator((Bencodex.Types.Dictionary)elem)).ToList())
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

        public Bencodex.Types.List Encoded => new Bencodex.Types.List(
            Validators.Select(validator => validator.Encoded));

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
            // would require heavier refactoring of BlockPolicy<T>.
            return Validators.IsEmpty
                ? throw new InvalidOperationException(
                    "Cannot select a proposer from an empty list of validators.")
                : Validators[(int)((height + round) % Validators.Count)];
        }
    }
}
