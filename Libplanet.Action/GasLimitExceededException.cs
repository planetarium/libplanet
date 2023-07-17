using System;
using System.Globalization;

namespace Libplanet.Action
{
    [Serializable]
    public sealed class GasLimitExceededException : Exception
    {
        public GasLimitExceededException(long limit, long used)
            : base($"Gas usage cannot be exceed limit. Gas limit is " +
                $"{limit.ToString(CultureInfo.InvariantCulture)} but used gas is " +
                $"{used.ToString(CultureInfo.InvariantCulture)}. " +
                $"Please ensure that the gas limit is not exceeded.")
        {
            Limit = limit;
            Used = used;
        }

        public long Limit { get; }

        public long Used { get; }
    }
}
