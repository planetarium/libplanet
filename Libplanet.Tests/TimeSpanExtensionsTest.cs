using System;
using System.Collections.Generic;
using Xunit;

namespace Libplanet.Tests
{
    public class TimeSpanExtensionsTest
    {
        public static IEnumerable<object[]> MultiplicationTestData()
        {
            // This code is borrowed from the official .NET implementation:
            //   https://git.io/JYvjS#L1095-L1105
            // We can remove these copy-and-pasted lines in the future when Libplanet drops
            // .NET Standard 2.0 support and becomes to support .NET Standard 2.1 or higher.
            yield return new object[]
            {
                new TimeSpan(2, 30, 0),
                2.0,
                new TimeSpan(5, 0, 0),
            };
            yield return new object[]
            {
                new TimeSpan(14, 2, 30, 0),
                192.0,
                TimeSpan.FromDays(2708),
            };
            yield return new object[]
            {
                TimeSpan.FromDays(366),
                Math.PI,
                new TimeSpan(993446995288779),
            };
            yield return new object[]
            {
                TimeSpan.FromDays(366),
                -Math.E,
                new TimeSpan(-859585952922633),
            };
#if NET
            // For unknown reason, TimeSpan.FromDays()'s behavior on Mono
            // slightly differs from .NET Core.
            yield return new object[]
            {
                TimeSpan.FromDays(29.530587981),
                13.0,
                TimeSpan.FromDays(29.530587981 * 13.0),
            };
            yield return new object[]
            {
                TimeSpan.FromDays(-29.530587981),
                -12.0,
                TimeSpan.FromDays(-29.530587981 * -12.0),
            };
#endif
            yield return new object[]
            {
                TimeSpan.FromDays(-29.530587981),
                0.0,
                TimeSpan.Zero,
            };
            yield return new object[]
            {
                TimeSpan.MaxValue,
                0.5,
                TimeSpan.FromTicks((long)(long.MaxValue * 0.5)),
            };
        }

        [Theory]
        [MemberData(nameof(MultiplicationTestData))]
        public static void Multiplication(TimeSpan timeSpan, double factor, TimeSpan expected)
        {
            // This code is borrowed from the official .NET implementation:
            //   https://bit.ly/3MhgH63
            // We can remove these copy-and-pasted lines in the future when Libplanet drops
            // .NET Standard 2.0 support and becomes to support .NET Standard 2.1 or higher.
            Assert.Equal(expected, TimeSpanExtensions.Multiply(timeSpan, factor));
        }

        [Theory]
        [MemberData(nameof(MultiplicationTestData))]
        public static void Division(TimeSpan timeSpan, double factor, TimeSpan expected)
        {
            // This code is borrowed from the official .NET implementation:
            //   https://bit.ly/3FVRjAw
            // We can remove these copy-and-pasted lines in the future when Libplanet drops
            // .NET Standard 2.0 support and becomes to support .NET Standard 2.1 or higher.
            double divisor = 1.0 / factor;
            Assert.Equal(expected, TimeSpanExtensions.Divide(timeSpan, divisor));
        }

        [Fact]
        public static void DivideByZero()
        {
            // This code is borrowed from the official .NET implementation:
            //   https://bit.ly/3MhilEx
            // We can remove these copy-and-pasted lines in the future when Libplanet drops
            // .NET Standard 2.0 support and becomes to support .NET Standard 2.1 or higher.
            Assert.Throws<OverflowException>(
                () => TimeSpanExtensions.Divide(TimeSpan.FromDays(1), 0)
            );
            Assert.Throws<OverflowException>(
                () => TimeSpanExtensions.Divide(TimeSpan.FromDays(-1), 0)
            );
            Assert.Throws<OverflowException>(() => TimeSpanExtensions.Divide(TimeSpan.Zero, 0));
        }

        [Fact]
        public static void NaNMultiplication()
        {
            // This code is borrowed from the official .NET implementation:
            //   https://bit.ly/3PgO36S
            // We can remove these copy-and-pasted lines in the future when Libplanet drops
            // .NET Standard 2.0 support and becomes to support .NET Standard 2.1 or higher.
            ArgumentException e = Assert.Throws<ArgumentException>(
                () => TimeSpanExtensions.Multiply(TimeSpan.FromDays(1), double.NaN));
            Assert.Equal("factor", e.ParamName);
        }

        [Fact]
        public static void NaNDivision()
        {
            // This code is borrowed from the official .NET implementation:
            //   https://bit.ly/3FRNXP0
            // We can remove these copy-and-pasted lines in the future when Libplanet drops
            // .NET Standard 2.0 support and becomes to support .NET Standard 2.1 or higher.
            ArgumentException e = Assert.Throws<ArgumentException>(
                () => TimeSpanExtensions.Divide(TimeSpan.FromDays(1), double.NaN)
            );
            Assert.Equal("divisor", e.ParamName);
        }
    }
}
