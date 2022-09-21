#pragma warning disable S1764
using System;
using System.IO;
using System.Runtime.Serialization.Formatters.Binary;
using Libplanet.Assets;
using Xunit;
using static Libplanet.Tests.TestUtils;

namespace Libplanet.Tests.Assets
{
    public class FungibleAssetValueTest
    {
        private static readonly Currency FOO = Currency.Uncapped("FOO", 2, null);
        private static readonly Currency BAR = Currency.Uncapped("BAR", 0, null);
        private static readonly Currency BARMAX = Currency.Capped("BAR", 0, (100000, 0), null);
#pragma warning disable CS0618  // must test obsoleted Currency.Legacy() for backwards compatibility
        private static readonly Currency BARNOTRACK = Currency.Legacy("BAR", 0, null);
#pragma warning restore CS0618  // must test obsoleted Currency.Legacy() for backwards compatibility

        [Fact]
        public void Constructor()
        {
            FungibleAssetValue v;
            v = new FungibleAssetValue(FOO, 123, 45);
            Assert.Equal(new FungibleAssetValue(FOO, 1, 123, 45), v);
            Assert.Equal(12345, v.RawValue);
            Assert.Equal(123, v.MajorUnit);
            Assert.Equal(45, v.MinorUnit);
            Assert.Equal(1, v.Sign);

            v = new FungibleAssetValue(FOO, 456, 9);
            Assert.Equal(new FungibleAssetValue(FOO, 1, 456, 9), v);
            Assert.Equal(45609, v.RawValue);
            Assert.Equal(456, v.MajorUnit);
            Assert.Equal(9, v.MinorUnit);
            Assert.Equal(1, v.Sign);

            v = new FungibleAssetValue(FOO, 0, 10);
            Assert.Equal(new FungibleAssetValue(FOO, 1, 0, 10), v);
            Assert.Equal(10, v.RawValue);
            Assert.Equal(0, v.MajorUnit);
            Assert.Equal(10, v.MinorUnit);
            Assert.Equal(1, v.Sign);

            v = new FungibleAssetValue(FOO, 0, 9);
            Assert.Equal(new FungibleAssetValue(FOO, 1, 0, 9), v);
            Assert.Equal(9, v.RawValue);
            Assert.Equal(0, v.MajorUnit);
            Assert.Equal(9, v.MinorUnit);
            Assert.Equal(1, v.Sign);

            v = new FungibleAssetValue(FOO, -789, 1);
            Assert.Equal(new FungibleAssetValue(FOO, -1, 789, 1), v);
            Assert.Equal(-78901, v.RawValue);
            Assert.Equal(789, v.MajorUnit);
            Assert.Equal(1, v.MinorUnit);
            Assert.Equal(-1, v.Sign);

            v = new FungibleAssetValue(FOO, 0, -2);
            Assert.Equal(new FungibleAssetValue(FOO, -1, 0, 2), v);
            Assert.Equal(-2, v.RawValue);
            Assert.Equal(0, v.MajorUnit);
            Assert.Equal(2, v.MinorUnit);
            Assert.Equal(-1, v.Sign);

            v = new FungibleAssetValue(FOO, 123, 0);
            Assert.Equal(new FungibleAssetValue(FOO, 1, 123, 0), v);
            Assert.Equal(12300, v.RawValue);
            Assert.Equal(123, v.MajorUnit);
            Assert.Equal(0, v.MinorUnit);
            Assert.Equal(1, v.Sign);

            v = new FungibleAssetValue(BAR, 1, 0);
            Assert.Equal(new FungibleAssetValue(BAR, 1, 1, 0), v);
            Assert.Equal(FungibleAssetValue.FromRawValue(BAR, 1), v);
            Assert.Equal(1, v.RawValue);
            Assert.Equal(1, v.MajorUnit);
            Assert.Equal(0, v.MinorUnit);
            Assert.Equal(1, v.Sign);

            v = new FungibleAssetValue(FOO, 0, 0);
            Assert.Equal(new FungibleAssetValue(FOO, 0, 0, 0), v);
            Assert.Equal(new FungibleAssetValue(FOO), v);
            Assert.Equal(0, v.RawValue);
            Assert.Equal(0, v.MajorUnit);
            Assert.Equal(0, v.MinorUnit);
            Assert.Equal(0, v.Sign);

            Assert.Throws<ArgumentException>(() => new FungibleAssetValue(FOO, -2, 1, 0));
            Assert.Throws<ArgumentException>(() => new FungibleAssetValue(FOO, 2, 1, 0));
            Assert.Throws<ArgumentException>(() => new FungibleAssetValue(FOO, 0, 1, 0));
            Assert.Throws<ArgumentException>(() => new FungibleAssetValue(FOO, 0, 0, 1));
            Assert.Throws<ArgumentException>(() => new FungibleAssetValue(FOO, 1, -1, 0));
            Assert.Throws<ArgumentException>(() => new FungibleAssetValue(FOO, 1, 1, -1));
            Assert.Throws<ArgumentException>(() => new FungibleAssetValue(FOO, 1, 1, 100));
            Assert.Throws<ArgumentException>(() => new FungibleAssetValue(FOO, 10, -10));
            Assert.Throws<ArgumentException>(() => new FungibleAssetValue(FOO, -10, -10));
            Assert.Throws<ArgumentException>(() => new FungibleAssetValue(FOO, 1, 100));
            Assert.Throws<ArgumentException>(() => new FungibleAssetValue(BAR, 1, 2));
        }

        [Fact]
        public void Equality()
        {
            FungibleAssetValue foo100a = FungibleAssetValue.FromRawValue(FOO, 100);
            FungibleAssetValue foo100b = FungibleAssetValue.FromRawValue(FOO, 100);
            FungibleAssetValue foo200a = FungibleAssetValue.FromRawValue(FOO, 200);
            FungibleAssetValue foo200b = FungibleAssetValue.FromRawValue(FOO, 200);
            FungibleAssetValue bar100a = FungibleAssetValue.FromRawValue(BAR, 100);
            FungibleAssetValue bar100b = FungibleAssetValue.FromRawValue(BAR, 100);
            FungibleAssetValue bar200a = FungibleAssetValue.FromRawValue(BAR, 200);
            FungibleAssetValue bar200b = FungibleAssetValue.FromRawValue(BAR, 200);
            FungibleAssetValue barmax100 = FungibleAssetValue.FromRawValue(BARMAX, 100);
            FungibleAssetValue barnotrack100 = FungibleAssetValue.FromRawValue(BARNOTRACK, 100);

            Assert.Equal(foo100b, foo100a);
            Assert.Equal(foo100b.GetHashCode(), foo100a.GetHashCode());
            Assert.True(foo100b.Equals((object)foo100a));
            Assert.True(foo100b == foo100a);
            Assert.False(foo100b != foo100a);
            Assert.Equal(foo200b, foo200a);
            Assert.Equal(foo200b.GetHashCode(), foo200a.GetHashCode());
            Assert.True(foo200b.Equals((object)foo200a));
            Assert.True(foo200b == foo200a);
            Assert.False(foo200b != foo200a);
            Assert.Equal(bar100b, bar100a);
            Assert.Equal(bar100b.GetHashCode(), bar100a.GetHashCode());
            Assert.True(bar100b.Equals((object)bar100a));
            Assert.True(bar100b == bar100a);
            Assert.False(bar100b != bar100a);
            Assert.Equal(bar200b, bar200a);
            Assert.Equal(bar200b.GetHashCode(), bar200a.GetHashCode());
            Assert.True(bar200b.Equals((object)bar200a));
            Assert.True(bar200b == bar200a);
            Assert.False(bar200b != bar200a);

            Assert.NotEqual(foo100a, foo200a);
            Assert.False(foo100a.Equals((object)foo200a));
            Assert.False(foo100a == foo200a);
            Assert.True(foo100a != foo200a);
            Assert.NotEqual(foo100a, bar100a);
            Assert.False(foo100a.Equals((object)bar100a));
            Assert.False(foo100a == bar100a);
            Assert.True(foo100a != bar100a);
            Assert.NotEqual(foo100a, bar200a);
            Assert.False(foo100a.Equals((object)bar200a));
            Assert.False(foo100a == bar200a);
            Assert.True(foo100a != bar200a);
            Assert.NotEqual(bar100a, foo200a);
            Assert.False(bar100a.Equals((object)foo200a));
            Assert.False(bar100a == foo200a);
            Assert.True(bar100a != foo200a);
            Assert.NotEqual(foo100a, bar100a);
            Assert.False(foo100a.Equals((object)bar100a));
            Assert.False(foo100a == bar100a);
            Assert.True(foo100a != bar100a);
            Assert.NotEqual(foo100a, bar200a);
            Assert.False(foo100a.Equals((object)bar200a));
            Assert.False(foo100a == bar200a);
            Assert.True(foo100a != bar200a);
            Assert.NotEqual(bar100a, barmax100);
            Assert.False(bar100a.Equals((object)barmax100));
            Assert.False(bar100a == barmax100);
            Assert.True(bar100a != barmax100);
            Assert.NotEqual(bar100a, barnotrack100);
            Assert.False(bar100a.Equals((object)barnotrack100));
            Assert.False(bar100a == barnotrack100);
            Assert.True(bar100a != barnotrack100);

            Assert.False(foo100a.Equals(100));
            Assert.False(foo200a.Equals(200));
        }

        [Fact]
        public void Compare()
        {
            FungibleAssetValue foo100a = FungibleAssetValue.FromRawValue(FOO, 100);
            FungibleAssetValue foo100b = FungibleAssetValue.FromRawValue(FOO, 100);
            FungibleAssetValue foo200 = FungibleAssetValue.FromRawValue(FOO, 200);
            FungibleAssetValue bar100 = FungibleAssetValue.FromRawValue(BAR, 100);
            FungibleAssetValue barmax100 = FungibleAssetValue.FromRawValue(BARMAX, 100);
            FungibleAssetValue barnotrack100 = FungibleAssetValue.FromRawValue(BARNOTRACK, 100);

            Assert.Equal(0, foo100a.CompareTo(foo100b));
            Assert.Equal(0, foo100a.CompareTo((object)foo100b));
            Assert.False(foo100a < foo100b);
            Assert.True(foo100a <= foo100b);
            Assert.False(foo100a > foo100b);
            Assert.True(foo100a >= foo100b);

            Assert.True(foo100a.CompareTo(foo200) < 0);
            Assert.True(foo100a.CompareTo((object)foo200) < 0);
            Assert.True(foo100a < foo200);
            Assert.True(foo100a <= foo200);
            Assert.False(foo100a > foo200);
            Assert.False(foo100a >= foo200);

            Assert.True(foo200.CompareTo(foo100b) > 0);
            Assert.True(foo200.CompareTo((object)foo100b) > 0);
            Assert.False(foo200 < foo100b);
            Assert.False(foo200 <= foo100b);
            Assert.True(foo200 > foo100b);
            Assert.True(foo200 >= foo100b);

            Assert.Throws<ArgumentException>(() => foo100a.CompareTo(bar100));
            Assert.Throws<ArgumentException>(() => foo100a.CompareTo((object)bar100));
            Assert.Throws<ArgumentException>(() => foo100a < bar100);
            Assert.Throws<ArgumentException>(() => foo100a <= bar100);
            Assert.Throws<ArgumentException>(() => foo100a > bar100);
            Assert.Throws<ArgumentException>(() => foo100a >= bar100);

            Assert.Throws<ArgumentException>(() => bar100.CompareTo(barmax100));
            Assert.Throws<ArgumentException>(() => bar100.CompareTo((object)barmax100));
            Assert.Throws<ArgumentException>(() => bar100 < barmax100);
            Assert.Throws<ArgumentException>(() => bar100 <= barmax100);
            Assert.Throws<ArgumentException>(() => bar100 > barmax100);
            Assert.Throws<ArgumentException>(() => bar100 >= barmax100);

            Assert.Throws<ArgumentException>(() => bar100.CompareTo(barnotrack100));
            Assert.Throws<ArgumentException>(() => bar100.CompareTo((object)barnotrack100));
            Assert.Throws<ArgumentException>(() => bar100 < barnotrack100);
            Assert.Throws<ArgumentException>(() => bar100 <= barnotrack100);
            Assert.Throws<ArgumentException>(() => bar100 > barnotrack100);
            Assert.Throws<ArgumentException>(() => bar100 >= barnotrack100);

            Assert.Throws<ArgumentException>(() => foo100a.CompareTo(100));
        }

        [Fact]
        public void Negate()
        {
            FungibleAssetValue foo_3 = FungibleAssetValue.FromRawValue(FOO, -3);
            FungibleAssetValue foo0 = new FungibleAssetValue(FOO);
            FungibleAssetValue foo3 = FungibleAssetValue.FromRawValue(FOO, 3);

            Assert.Equal(foo_3, -foo3);
            Assert.Equal(foo3, -foo_3);
            Assert.Equal(foo0, -foo0);
        }

        [Fact]
        public void Add()
        {
            FungibleAssetValue foo_1 = FungibleAssetValue.FromRawValue(FOO, -1);
            FungibleAssetValue foo0 = new FungibleAssetValue(FOO);
            FungibleAssetValue foo1 = FungibleAssetValue.FromRawValue(FOO, 1);
            FungibleAssetValue foo2 = FungibleAssetValue.FromRawValue(FOO, 2);
            FungibleAssetValue foo3 = FungibleAssetValue.FromRawValue(FOO, 3);
            FungibleAssetValue bar3 = FungibleAssetValue.FromRawValue(BAR, 3);
            FungibleAssetValue barmax3 = FungibleAssetValue.FromRawValue(BARMAX, 3);
            FungibleAssetValue barnotrack3 = FungibleAssetValue.FromRawValue(BARNOTRACK, 3);

            Assert.Equal(foo1, foo1 + foo0);
            Assert.Equal(foo1, foo0 + foo1);
            Assert.Equal(foo2, foo1 + foo1);
            Assert.Equal(foo3, foo1 + foo2);
            Assert.Equal(foo3, foo2 + foo1);
            Assert.Equal(foo1, foo2 + foo_1);
            Assert.Equal(foo1, foo_1 + foo2);
            Assert.Equal(foo_1, foo_1 + foo0);
            Assert.Equal(foo_1, foo0 + foo_1);

            Assert.Throws<ArgumentException>(() => foo1 + bar3);
            Assert.Throws<ArgumentException>(() => bar3 + barmax3);
            Assert.Throws<ArgumentException>(() => bar3 + barnotrack3);
        }

        [Fact]
        public void Subtract()
        {
            FungibleAssetValue foo_1 = FungibleAssetValue.FromRawValue(FOO, -1);
            FungibleAssetValue foo0 = new FungibleAssetValue(FOO);
            FungibleAssetValue foo1 = FungibleAssetValue.FromRawValue(FOO, 1);
            FungibleAssetValue foo2 = FungibleAssetValue.FromRawValue(FOO, 2);
            FungibleAssetValue bar3 = FungibleAssetValue.FromRawValue(BAR, 3);
            FungibleAssetValue barmax3 = FungibleAssetValue.FromRawValue(BARMAX, 3);
            FungibleAssetValue barnotrack3 = FungibleAssetValue.FromRawValue(BARNOTRACK, 3);

            Assert.Equal(foo0, foo1 - foo1);
            Assert.Equal(foo_1, foo1 - foo2);
            Assert.Equal(foo2, foo1 - foo_1);
            Assert.Equal(foo0, foo_1 - foo_1);

            Assert.Throws<ArgumentException>(() => bar3 - foo1);
            Assert.Throws<ArgumentException>(() => bar3 - barmax3);
            Assert.Throws<ArgumentException>(() => bar3 - barnotrack3);
        }

        [Fact]
        public void Multiply()
        {
            FungibleAssetValue foo_2 = FungibleAssetValue.FromRawValue(FOO, -2);
            FungibleAssetValue foo_1 = FungibleAssetValue.FromRawValue(FOO, -1);
            FungibleAssetValue foo0 = new FungibleAssetValue(FOO);
            FungibleAssetValue foo1 = FungibleAssetValue.FromRawValue(FOO, 1);
            FungibleAssetValue foo2 = FungibleAssetValue.FromRawValue(FOO, 2);
            FungibleAssetValue foo4 = FungibleAssetValue.FromRawValue(FOO, 4);

            Assert.Equal(foo2, foo1 * 2);
            Assert.Equal(foo2, 2 * foo1);
            Assert.Equal(foo2, foo2 * 1);
            Assert.Equal(foo2, 1 * foo2);
            Assert.Equal(foo_2, foo2 * -1);
            Assert.Equal(foo_2, -1 * foo2);
            Assert.Equal(foo_2, foo_1 * 2);
            Assert.Equal(foo_2, 2 * foo_1);
            Assert.Equal(foo_1, foo_1 * 1);
            Assert.Equal(foo_1, 1 * foo_1);
            Assert.Equal(foo4, foo2 * 2);
            Assert.Equal(foo4, 2 * foo2);
            Assert.Equal(foo0, foo2 * 0);
            Assert.Equal(foo0, 0 * foo2);
            Assert.Equal(foo0, foo_1 * 0);
            Assert.Equal(foo0, 0 * foo_1);
        }

        [Fact]
        public void DivRem()
        {
            FungibleAssetValue foo7 = FungibleAssetValue.FromRawValue(FOO, 7);
            FungibleAssetValue foo6 = FungibleAssetValue.FromRawValue(FOO, 6);
            FungibleAssetValue foo3 = FungibleAssetValue.FromRawValue(FOO, 3);
            FungibleAssetValue foo2 = FungibleAssetValue.FromRawValue(FOO, 2);
            FungibleAssetValue foo1 = FungibleAssetValue.FromRawValue(FOO, 1);
            FungibleAssetValue foo0 = new FungibleAssetValue(FOO);
            FungibleAssetValue rem;

            Assert.Equal((foo6, foo0), foo6.DivRem(1));
            Assert.Equal(foo6, foo6.DivRem(1, out rem));
            Assert.Equal(foo0, rem);
            Assert.Equal(foo0, foo6 % 1);

            Assert.Equal((foo2, foo0), foo6.DivRem(3));
            Assert.Equal(foo2, foo6.DivRem(3, out rem));
            Assert.Equal(foo0, rem);
            Assert.Equal(foo0, foo6 % 3);

            Assert.Equal((foo2, foo1), foo7.DivRem(3));
            Assert.Equal(foo2, foo7.DivRem(3, out rem));
            Assert.Equal(foo1, rem);
            Assert.Equal(foo1, foo7 % 3);

            Assert.Equal((foo0, foo6), foo6.DivRem(7));
            Assert.Equal(foo0, foo6.DivRem(7, out rem));
            Assert.Equal(foo6, rem);
            Assert.Equal(foo6, foo6 % 7);

            Assert.Equal((foo0, foo0), foo0.DivRem(2));
            Assert.Equal(foo0, foo0.DivRem(2, out rem));
            Assert.Equal(foo0, rem);
            Assert.Equal(foo0, foo0 % 2);

            Assert.Equal((6, foo0), foo6.DivRem(foo1));
            Assert.Equal(6, foo6.DivRem(foo1, out rem));
            Assert.Equal(foo0, rem);
            Assert.Equal(foo0, foo6 % foo1);

            Assert.Equal((2, foo0), foo6.DivRem(foo3));
            Assert.Equal(2, foo6.DivRem(foo3, out rem));
            Assert.Equal(foo0, rem);
            Assert.Equal(foo0, foo6 % foo3);

            Assert.Equal((2, foo1), foo7.DivRem(foo3));
            Assert.Equal(2, foo7.DivRem(foo3, out rem));
            Assert.Equal(foo1, rem);
            Assert.Equal(foo1, foo7 % foo3);

            Assert.Equal((0, foo6), foo6.DivRem(foo7));
            Assert.Equal(0, foo6.DivRem(foo7, out rem));
            Assert.Equal(foo6, rem);
            Assert.Equal(foo6, foo6 % foo7);

            Assert.Equal((0, foo0), foo0.DivRem(foo2));
            Assert.Equal(0, foo0.DivRem(foo2, out rem));
            Assert.Equal(foo0, rem);
            Assert.Equal(foo0, foo0 % foo2);

            Assert.Throws<DivideByZeroException>(() => foo1.DivRem(0));
            Assert.Throws<DivideByZeroException>(() => foo1.DivRem(0, out rem));
            Assert.Throws<DivideByZeroException>(() => foo1 % 0);
            Assert.Throws<DivideByZeroException>(() => foo1.DivRem(foo0));
            Assert.Throws<DivideByZeroException>(() => foo1.DivRem(foo0, out rem));
            Assert.Throws<DivideByZeroException>(() => foo1 % foo0);

            FungibleAssetValue bar1 = FungibleAssetValue.FromRawValue(BAR, 1);
            Assert.Throws<ArgumentException>(() => bar1.DivRem(foo1));
            Assert.Throws<ArgumentException>(() => bar1.DivRem(foo1, out rem));
            Assert.Throws<ArgumentException>(() => bar1 % foo1);
        }

        [Fact]
        public void Abs()
        {
            FungibleAssetValue foo_3 = FungibleAssetValue.FromRawValue(FOO, -3);
            FungibleAssetValue foo0 = new FungibleAssetValue(FOO);
            FungibleAssetValue foo3 = FungibleAssetValue.FromRawValue(FOO, 3);

            Assert.Equal(foo3, foo3.Abs());
            Assert.Equal(foo3, foo_3.Abs());
            Assert.Equal(foo0, foo0.Abs());
        }

        [Fact]
        public void Serialize()
        {
            FungibleAssetValue foo100 = FungibleAssetValue.FromRawValue(FOO, 100);
            var f = new BinaryFormatter();
            var s = new MemoryStream();
            f.Serialize(s, foo100);
            s.Seek(0, SeekOrigin.Begin);
            var deserialized = f.Deserialize(s);
            Assert.IsType<FungibleAssetValue>(deserialized);
            Assert.Equal(foo100, (FungibleAssetValue)deserialized);
        }

        [Fact]
        public void GetQuantityString()
        {
            FungibleAssetValue v;
            v = new FungibleAssetValue(FOO, 123, 45);
            Assert.Equal("123.45", v.GetQuantityString());
            Assert.Equal("123.45", v.GetQuantityString(true));

            v = new FungibleAssetValue(FOO, 456, 9);
            Assert.Equal("456.09", v.GetQuantityString());
            Assert.Equal("456.09", v.GetQuantityString(true));

            v = new FungibleAssetValue(FOO, 0, 10);
            Assert.Equal("0.1", v.GetQuantityString());
            Assert.Equal("0.10", v.GetQuantityString(true));

            v = new FungibleAssetValue(FOO, 0, 9);
            Assert.Equal("0.09", v.GetQuantityString());
            Assert.Equal("0.09", v.GetQuantityString(true));

            v = new FungibleAssetValue(FOO, -789, 1);
            Assert.Equal("-789.01", v.GetQuantityString());
            Assert.Equal("-789.01", v.GetQuantityString(true));

            v = new FungibleAssetValue(FOO, 0, -2);
            Assert.Equal("-0.02", v.GetQuantityString());
            Assert.Equal("-0.02", v.GetQuantityString(true));

            v = new FungibleAssetValue(FOO, 123, 0);
            Assert.Equal("123", v.GetQuantityString());
            Assert.Equal("123.00", v.GetQuantityString(true));

            v = new FungibleAssetValue(FOO, 0, 0);
            Assert.Equal("0", v.GetQuantityString());
            Assert.Equal("0.00", v.GetQuantityString(true));
        }

        [Fact]
        public void String()
        {
            FungibleAssetValue foo100 = FungibleAssetValue.FromRawValue(FOO, 100);
            FungibleAssetValue bar90000000 = FungibleAssetValue.FromRawValue(BAR, 90000000);
            Assert.Equal("1 FOO", foo100.ToString());
            Assert.Equal("90000000 BAR", bar90000000.ToString());
        }

        [Fact]
        public void Parse()
        {
            var baz = Currency.Uncapped("BAZ", 1, null);
            FormatException e;

            e = Assert.Throws<FormatException>(() => FungibleAssetValue.Parse(FOO, "abc"));
            Assert.StartsWith("The value string must consist of digits", e.Message);

            const string signError = "Plus (+) or minus (-) sign can be appeared only at";
            e = Assert.Throws<FormatException>(() => FungibleAssetValue.Parse(FOO, "++123"));
            Assert.StartsWith(signError, e.Message);
            e = Assert.Throws<FormatException>(() => FungibleAssetValue.Parse(FOO, "--123"));
            Assert.StartsWith(signError, e.Message);
            e = Assert.Throws<FormatException>(() => FungibleAssetValue.Parse(FOO, "++123.45"));
            Assert.StartsWith(signError, e.Message);
            e = Assert.Throws<FormatException>(() => FungibleAssetValue.Parse(FOO, "--123.45"));
            Assert.StartsWith(signError, e.Message);
            e = Assert.Throws<FormatException>(() => FungibleAssetValue.Parse(FOO, "23.4-5"));
            Assert.StartsWith(signError, e.Message);
            e = Assert.Throws<FormatException>(() => FungibleAssetValue.Parse(FOO, "45.6+7"));
            Assert.StartsWith(signError, e.Message);
            e = Assert.Throws<FormatException>(() => FungibleAssetValue.Parse(FOO, "2-3"));
            Assert.StartsWith(signError, e.Message);
            e = Assert.Throws<FormatException>(() => FungibleAssetValue.Parse(FOO, "45+6"));
            Assert.StartsWith(signError, e.Message);
            e = Assert.Throws<FormatException>(() => FungibleAssetValue.Parse(FOO, "+12-3"));
            Assert.StartsWith(signError, e.Message);
            e = Assert.Throws<FormatException>(() => FungibleAssetValue.Parse(FOO, "-45+6"));
            Assert.StartsWith(signError, e.Message);

            const string decimalSeparatorError = "The decimal separator (.) cannot be appeared";
            e = Assert.Throws<FormatException>(() => FungibleAssetValue.Parse(FOO, "123..4"));
            Assert.Contains(decimalSeparatorError, e.Message);
            e = Assert.Throws<FormatException>(() => FungibleAssetValue.Parse(FOO, "123.4.5"));
            Assert.Contains(decimalSeparatorError, e.Message);

            const string decimalsError = "does not allow more than";
            e = Assert.Throws<FormatException>(() => FungibleAssetValue.Parse(FOO, "123.456"));
            Assert.Contains(decimalsError, e.Message);
            e = Assert.Throws<FormatException>(() => FungibleAssetValue.Parse(BAR, "123.0"));
            Assert.Contains(decimalsError, e.Message);
            e = Assert.Throws<FormatException>(() => FungibleAssetValue.Parse(baz, "123.12"));
            Assert.Contains(decimalsError, e.Message);

            Assert.Equal(
                new FungibleAssetValue(FOO, 123, 45),
                FungibleAssetValue.Parse(FOO, "123.45")
            );
            Assert.Equal(
                new FungibleAssetValue(FOO, 123, 45),
                FungibleAssetValue.Parse(FOO, "+123.45")
            );
            Assert.Equal(
                new FungibleAssetValue(FOO, -123, 45),
                FungibleAssetValue.Parse(FOO, "-123.45")
            );
            Assert.Equal(
                new FungibleAssetValue(FOO, 123, 40),
                FungibleAssetValue.Parse(FOO, "123.4")
            );
            Assert.Equal(
                new FungibleAssetValue(FOO, 123, 40),
                FungibleAssetValue.Parse(FOO, "+123.4")
            );
            Assert.Equal(
                new FungibleAssetValue(FOO, -123, 40),
                FungibleAssetValue.Parse(FOO, "-123.4")
            );
            Assert.Equal(new FungibleAssetValue(FOO, 123, 0), FungibleAssetValue.Parse(FOO, "123"));
            Assert.Equal(new FungibleAssetValue(FOO, 12, 0), FungibleAssetValue.Parse(FOO, "+12"));
            Assert.Equal(new FungibleAssetValue(FOO, -12, 0), FungibleAssetValue.Parse(FOO, "-12"));
        }

        [SkippableFact]
        public void JsonSerialization()
        {
            var v = new FungibleAssetValue(FOO, 123, 45);
            AssertJsonSerializable(v, @"
                {
                    ""quantity"": ""123.45"",
                    ""currency"": {
                        ""hash"": ""946ea39b6f49926c0ed3df2a3aa0d2aba0f0fc25"",
                        ""ticker"": ""FOO"",
                        ""decimalPlaces"": 2,
                        ""minters"": null,
                        ""maximumSupply"": null,
                        ""totalSupplyTrackable"": true,
                    }
                }
            ");

            v = new FungibleAssetValue(FOO, -456, 0);
            AssertJsonSerializable(v, @"
                {
                    ""quantity"": ""-456"",
                    ""currency"": {
                        ""hash"": ""946ea39b6f49926c0ed3df2a3aa0d2aba0f0fc25"",
                        ""ticker"": ""FOO"",
                        ""decimalPlaces"": 2,
                        ""minters"": null,
                        ""maximumSupply"": null,
                        ""totalSupplyTrackable"": true,
                    }
                }
            ");
        }
    }
}

#pragma warning restore S1764
