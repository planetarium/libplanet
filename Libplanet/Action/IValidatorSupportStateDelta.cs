using System.Diagnostics.Contracts;
using Libplanet.Consensus;

namespace Libplanet.Action
{
    internal interface IValidatorSupportStateDelta
    {
        /// <summary>
        /// Returns the validator set.
        /// </summary>
        /// <returns>The validator set of type <see cref="ValidatorSet"/>.
        /// </returns>
        [Pure]
        ValidatorSet GetValidatorSet();

        /// <summary>
        /// Sets <paramref name="validator"/> to the stored <see cref="ValidatorSet"/>.
        /// If 0 is given as its power, removes the validator from the <see cref="ValidatorSet"/>.
        /// </summary>
        /// <param name="validator">The <see cref="Validator"/> instance to write.</param>
        /// <returns>A new <see cref="IAccountStateDelta"/> instance with
        /// <paramref name="validator"/> set.</returns>
        [Pure]
        IAccountStateDelta SetValidator(Validator validator);
    }
}
