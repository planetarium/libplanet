using System;
using Libplanet.Common;
using Libplanet.Common.Extensions;
using Xunit;

namespace Libplanet.Tests;

public class ByteArrayExtensionsTest
{
    [Fact]
    public void StartsWith()
    {
        var bytes = new byte[]
        {
            0, 1,
        };

        Assert.False(bytes.StartsWith([0, 1, 2]));
        Assert.False(bytes.StartsWith([0, 2]));
        Assert.False(bytes.StartsWith([1]));

        Assert.True(bytes.StartsWith([0]));
        Assert.True(bytes.StartsWith([0, 1]));
    }

    [Fact]
    public void IndexOf()
    {
        Func<string, byte[]> b = ByteUtil.ParseHex;
        Assert.Equal(-1, Array.Empty<byte>().IndexOf(b("0a0b0c")));
        Assert.Equal(-1, b("0a0b").IndexOf(b("0a0b0c")));
        Assert.Equal(0, b("0a0b0c0d").IndexOf(b("0a0b0c")));
        Assert.Equal(1, b("0a0b0c0d").IndexOf(b("0b0c0d")));
        Assert.Equal(2, b("08090a0b0c0d").IndexOf(b("0a0b0c")));
        Assert.Equal(-1, b("07080a0b0c0d").IndexOf(b("070809")));
    }
}
