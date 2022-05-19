using System;
using System.Collections.Specialized;
#if !NETFRAMEWORK
using static System.Web.HttpUtility;
#endif
using Libplanet.Misc;
#if NETFRAMEWORK
using static Mono.Web.HttpUtility;
#endif
using Xunit;

namespace Libplanet.Tests.Misc
{
    public class NameValueCollectionExtensionsTest
    {
        [Fact]
        public void GetInt32()
        {
            NameValueCollection c = ParseQueryString(
                "foo=12&bar=345&baz=-1&qux=0&quux=9999999999999999&quuz=invalid");
            Assert.Equal(12, c.GetInt32("foo"));
            Assert.Equal(12, c.GetInt32("foo", -123));
            Assert.Equal(345, c.GetInt32("bar"));
            Assert.Equal(345, c.GetInt32("bar", -123));
            Assert.Equal(-1, c.GetInt32("baz"));
            Assert.Equal(-1, c.GetInt32("baz", -123));
            Assert.Equal(0, c.GetInt32("qux"));
            Assert.Equal(0, c.GetInt32("qux", -123));
            Assert.Throws<OverflowException>(() => c.GetInt32("quux"));
            Assert.Equal(-123, c.GetInt32("quux", -123));
            Assert.Throws<FormatException>(() => c.GetInt32("quuz"));
            Assert.Equal(-123, c.GetInt32("quuz", -123));
            Assert.Null(c.GetInt32("non-existent"));
            Assert.Equal(-123, c.GetInt32("non-existent", -123));
        }

        [Fact]
        public void GetUInt64()
        {
            NameValueCollection c = ParseQueryString(
                "foo=12&bar=345&baz=-1&qux=0&quux=9999999999999999999999999999999999&quuz=invalid");
            Assert.Equal(12UL, c.GetUInt64("foo"));
            Assert.Equal(12UL, c.GetUInt64("foo", 11223344UL));
            Assert.Equal(345UL, c.GetUInt64("bar"));
            Assert.Equal(345UL, c.GetUInt64("bar", 11223344UL));
            Assert.Throws<OverflowException>(() => c.GetUInt64("baz"));
            Assert.Equal(11223344UL, c.GetUInt64("baz", 11223344UL));
            Assert.Equal(0UL, c.GetUInt64("qux"));
            Assert.Equal(0UL, c.GetUInt64("qux", 11223344UL));
            Assert.Throws<OverflowException>(() => c.GetUInt64("quux"));
            Assert.Equal(11223344UL, c.GetUInt64("quux", 11223344UL));
            Assert.Throws<FormatException>(() => c.GetUInt64("quuz"));
            Assert.Equal(11223344UL, c.GetUInt64("quuz", 11223344UL));
            Assert.Null(c.GetUInt64("non-existent"));
            Assert.Equal(11223344UL, c.GetUInt64("non-existent", 11223344UL));
        }

        [Fact]
        public void GetBoolean()
        {
            NameValueCollection c = ParseQueryString(
                "num-f=0&num-t=1&yn-f=n&yn-t=y&yesno-f=no&yesno-t=yes&tf-t=t&tf-f=f&" +
                "truefalse-t=true&truefalse-f=false&onoff-t=on&onoff-f=off&invalid=xyz"
            );
            Assert.False(c.GetBoolean("num-f"));
            Assert.False(c.GetBoolean("num-f", true));
            Assert.True(c.GetBoolean("num-t"));
            Assert.True(c.GetBoolean("num-t", true));
            Assert.False(c.GetBoolean("yn-f"));
            Assert.False(c.GetBoolean("yn-f", true));
            Assert.True(c.GetBoolean("yn-t"));
            Assert.True(c.GetBoolean("yn-t", true));
            Assert.False(c.GetBoolean("yesno-f"));
            Assert.False(c.GetBoolean("yesno-f", true));
            Assert.True(c.GetBoolean("yesno-t"));
            Assert.True(c.GetBoolean("yesno-t", true));
            Assert.False(c.GetBoolean("tf-f"));
            Assert.False(c.GetBoolean("tf-f", true));
            Assert.True(c.GetBoolean("tf-t"));
            Assert.True(c.GetBoolean("tf-t", true));
            Assert.False(c.GetBoolean("truefalse-f"));
            Assert.False(c.GetBoolean("truefalse-f", true));
            Assert.True(c.GetBoolean("truefalse-t"));
            Assert.True(c.GetBoolean("truefalse-t", true));
            Assert.False(c.GetBoolean("onoff-f"));
            Assert.False(c.GetBoolean("onoff-f", true));
            Assert.True(c.GetBoolean("onoff-t"));
            Assert.True(c.GetBoolean("onoff-t", true));
            Assert.False(c.GetBoolean("invalid"));
            Assert.True(c.GetBoolean("invalid", true));
            Assert.False(c.GetBoolean("non-existent"));
            Assert.True(c.GetBoolean("non-existent", true));
        }
    }
}
