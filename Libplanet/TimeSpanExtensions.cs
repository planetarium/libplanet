using System;

namespace Libplanet
{
    internal static class TimeSpanExtensions
    {
        internal static TimeSpan Divide(this TimeSpan timeSpan, double divisor)
        {
            // This code is borrowed from the official .NET implementation:
            //   https://git.io/JYvdZ#L462-L471
            // We can remove these copy-and-pasted lines in the future when Libplanet drops
            // .NET Standard 2.0 support and becomes to support .NET Standard 2.1 or higher.
            if (double.IsNaN(divisor))
            {
                const string Arg_CannotBeNaN =
                    nameof(TimeSpan) + " does not accept floating point Not-a-Number values.";
                throw new ArgumentException(Arg_CannotBeNaN, nameof(divisor));
            }

            double ticks = Math.Round(timeSpan.Ticks / divisor);
            return IntervalFromDoubleTicks(ticks);
        }

        private static TimeSpan IntervalFromDoubleTicks(double ticks)
        {
            // This code is borrowed from the official .NET implementation:
            //   https://git.io/JYvFe#L206-L213
            // We can remove these copy-and-pasted lines in the future when Libplanet drops
            // .NET Standard 2.0 support and becomes to support .NET Standard 2.1 or higher.
            if (ticks > long.MaxValue || ticks < long.MinValue || double.IsNaN(ticks))
            {
                const string Overflow_TimeSpanTooLong =
                    nameof(TimeSpan) + " overflowed because the duration is too long.";
                throw new OverflowException(Overflow_TimeSpanTooLong);
            }

            return ticks.Equals(long.MaxValue)
                ? TimeSpan.MaxValue
                : new TimeSpan((long)ticks);
        }
    }
}
