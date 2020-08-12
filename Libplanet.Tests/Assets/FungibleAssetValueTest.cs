#pragma warning disable S1764
using System;
using System.IO;
using System.Runtime.Serialization.Formatters.Binary;
using Libplanet.Assets;
using Xunit;

namespace Libplanet.Tests.Assets
{
    public class FungibleAssetValueTest
    {
        private static readonly Currency FOO = new Currency("FOO", minter: null);
        private static readonly Currency BAR = new Currency("BAR", minter: null);

        [Fact]
        public void Equality()
        {
            FungibleAssetValue foo100a = new FungibleAssetValue(FOO, 100);
            FungibleAssetValue foo100b = new FungibleAssetValue(FOO, 100);
            FungibleAssetValue foo200a = new FungibleAssetValue(FOO, 200);
            FungibleAssetValue foo200b = new FungibleAssetValue(FOO, 200);
            FungibleAssetValue bar100a = new FungibleAssetValue(BAR, 100);
            FungibleAssetValue bar100b = new FungibleAssetValue(BAR, 100);
            FungibleAssetValue bar200a = new FungibleAssetValue(BAR, 200);
            FungibleAssetValue bar200b = new FungibleAssetValue(BAR, 200);

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

            Assert.False(foo100a.Equals(100));
            Assert.False(foo200a.Equals(200));
        }

        [Fact]
        public void Compare()
        {
            FungibleAssetValue foo100a = new FungibleAssetValue(FOO, 100);
            FungibleAssetValue foo100b = new FungibleAssetValue(FOO, 100);
            FungibleAssetValue foo200 = new FungibleAssetValue(FOO, 200);
            FungibleAssetValue bar100 = new FungibleAssetValue(BAR, 100);

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

            Assert.Throws<ArgumentException>(() => foo100a.CompareTo(100));
        }

        [Fact]
        public void Negate()
        {
            FungibleAssetValue foo_3 = new FungibleAssetValue(FOO, -3);
            FungibleAssetValue foo0 = new FungibleAssetValue(FOO);
            FungibleAssetValue foo3 = new FungibleAssetValue(FOO, 3);

            Assert.Equal(foo_3, -foo3);
            Assert.Equal(foo3, -foo_3);
            Assert.Equal(foo0, -foo0);
        }

        [Fact]
        public void Add()
        {
            FungibleAssetValue foo_1 = new FungibleAssetValue(FOO, -1);
            FungibleAssetValue foo0 = new FungibleAssetValue(FOO);
            FungibleAssetValue foo1 = new FungibleAssetValue(FOO, 1);
            FungibleAssetValue foo2 = new FungibleAssetValue(FOO, 2);
            FungibleAssetValue foo3 = new FungibleAssetValue(FOO, 3);
            FungibleAssetValue bar3 = new FungibleAssetValue(BAR, 3);

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
        }

        [Fact]
        public void Subtract()
        {
            FungibleAssetValue foo_1 = new FungibleAssetValue(FOO, -1);
            FungibleAssetValue foo0 = new FungibleAssetValue(FOO);
            FungibleAssetValue foo1 = new FungibleAssetValue(FOO, 1);
            FungibleAssetValue foo2 = new FungibleAssetValue(FOO, 2);
            FungibleAssetValue bar3 = new FungibleAssetValue(BAR, 3);

            Assert.Equal(foo0, foo1 - foo1);
            Assert.Equal(foo_1, foo1 - foo2);
            Assert.Equal(foo2, foo1 - foo_1);
            Assert.Equal(foo0, foo_1 - foo_1);

            Assert.Throws<ArgumentException>(() => bar3 - foo1);
        }

        [Fact]
        public void Multiply()
        {
            FungibleAssetValue foo_2 = new FungibleAssetValue(FOO, -2);
            FungibleAssetValue foo_1 = new FungibleAssetValue(FOO, -1);
            FungibleAssetValue foo0 = new FungibleAssetValue(FOO);
            FungibleAssetValue foo1 = new FungibleAssetValue(FOO, 1);
            FungibleAssetValue foo2 = new FungibleAssetValue(FOO, 2);
            FungibleAssetValue foo4 = new FungibleAssetValue(FOO, 4);

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
            FungibleAssetValue foo7 = new FungibleAssetValue(FOO, 7);
            FungibleAssetValue foo6 = new FungibleAssetValue(FOO, 6);
            FungibleAssetValue foo3 = new FungibleAssetValue(FOO, 3);
            FungibleAssetValue foo2 = new FungibleAssetValue(FOO, 2);
            FungibleAssetValue foo1 = new FungibleAssetValue(FOO, 1);
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

            FungibleAssetValue bar1 = new FungibleAssetValue(BAR, 1);
            Assert.Throws<ArgumentException>(() => bar1.DivRem(foo1));
            Assert.Throws<ArgumentException>(() => bar1.DivRem(foo1, out rem));
            Assert.Throws<ArgumentException>(() => bar1 % foo1);
        }

        [Fact]
        public void Abs()
        {
            FungibleAssetValue foo_3 = new FungibleAssetValue(FOO, -3);
            FungibleAssetValue foo0 = new FungibleAssetValue(FOO);
            FungibleAssetValue foo3 = new FungibleAssetValue(FOO, 3);

            Assert.Equal(foo3, foo3.Abs());
            Assert.Equal(foo3, foo_3.Abs());
            Assert.Equal(foo0, foo0.Abs());
        }

        [Fact]
        public void Serialize()
        {
            FungibleAssetValue foo100 = new FungibleAssetValue(FOO, 100);
            var f = new BinaryFormatter();
            var s = new MemoryStream();
            f.Serialize(s, foo100);
            s.Seek(0, SeekOrigin.Begin);
            var deserialized = f.Deserialize(s);
            Assert.IsType<FungibleAssetValue>(deserialized);
            Assert.Equal(foo100, (FungibleAssetValue)deserialized);
        }

        [Fact]
        public void String()
        {
            FungibleAssetValue foo100 = new FungibleAssetValue(FOO, 100);
            FungibleAssetValue bar90000000 = new FungibleAssetValue(BAR, 90000000);
            Assert.Equal("100 FOO", foo100.ToString());
            Assert.Equal("90000000 BAR", bar90000000.ToString());
        }
    }
}

#pragma warning restore S1764
