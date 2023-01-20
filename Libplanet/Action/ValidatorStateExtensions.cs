using System;
using Libplanet.Consensus;

namespace Libplanet.Action
{
    internal static class ValidatorStateExtensions
    {
        public static ValidatorSet GetValidatorSet(this IAccountStateDelta delta)
        {
            if (delta is IValidatorSupportStateDelta impl)
            {
                return impl.GetValidatorSet();
            }

            throw new NotSupportedException();
        }

        /// <summary>
        /// Sets <paramref name="validator"/> to the stored <see cref="ValidatorSet"/>.
        /// If 0 is given as its power, removes the validator from the <see cref="ValidatorSet"/>.
        /// </summary>
        /// <param name="delta">The target <see cref="IAccountStateDelta"/> instance.</param>
        /// <param name="validator">The <see cref="Validator"/> instance to write.</param>
        /// <returns>A new <see cref="IAccountStateDelta"/> instance with
        /// <paramref name="validator"/> set.</returns>
        public static IAccountStateDelta SetValidator(
            this IAccountStateDelta delta,
            Validator validator)
        {
            if (delta is IValidatorSupportStateDelta impl)
            {
                return impl.SetValidator(validator);
            }

            throw new NotSupportedException();
        }
    }
}
