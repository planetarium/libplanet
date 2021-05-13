using System.Collections.Generic;
using System.Collections.Immutable;
using Xunit;

namespace Libplanet.Tests
{
    public class KeyValuePairExtensionsTest
    {
        [Fact]
        public void ReplaceKey()
        {
            Assert.Equal(
                new KeyValuePair<string, int>("FOO", 1),
                new KeyValuePair<string, int>("foo", 1).ReplaceKey("FOO")
            );
            Assert.Equal(
                new KeyValuePair<string, int>("baz", 2),
                new KeyValuePair<string, int>("bar", 2).ReplaceKey("baz")
            );
        }

        [Fact]
        public void ReplaceValue()
        {
            Assert.Equal(
                new KeyValuePair<string, int>("foo", 0),
                new KeyValuePair<string, int>("foo", 1).ReplaceValue(0)
            );
            Assert.Equal(
                new KeyValuePair<string, int>("bar", 3),
                new KeyValuePair<string, int>("bar", 2).ReplaceValue(3)
            );
        }

        [Fact]
        public void SelectWithinKeys()
        {
            var @in = ImmutableDictionary<string, int>.Empty.Add("foo", 1).Add("bar", 2);
            var @out = @in.SelectWithinKeys(k => k.ToUpperInvariant()).ToImmutableDictionary();
            Assert.Equal(
                new Dictionary<string, int> { ["FOO"] = 1, ["BAR"] = 2 }.ToImmutableDictionary(),
                @out
            );
        }

        [Fact]
        public void SelectWithinValues()
        {
            var @in = ImmutableDictionary<string, int>.Empty.Add("foo", 1).Add("bar", 2);
            var @out = @in.SelectWithinValues(v => -v * 2).ToImmutableDictionary();
            Assert.Equal(
                new Dictionary<string, int> { ["foo"] = -2, ["bar"] = -4 }.ToImmutableDictionary(),
                @out
            );
        }
    }
}
