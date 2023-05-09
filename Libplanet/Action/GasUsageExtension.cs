using System;

namespace Libplanet.Action
{
    internal static class GasUsageExtension
    {
        public static IAccountStateDelta AddGas(
            this IAccountStateDelta delta,
            Address address,
            long gas)
        {
            if (delta is IGasUsageDelta impl)
            {
                return impl.AddGas(address, gas);
            }

            throw new NotSupportedException();
        }

        public static IAccountStateDelta SetGasLimit(
            this IAccountStateDelta delta,
            Address address,
            long gasLimit)
        {
            if (delta is IGasUsageDelta impl)
            {
                return impl.SetGasLimit(address, gasLimit);
            }

            throw new NotSupportedException();
        }
    }
}
