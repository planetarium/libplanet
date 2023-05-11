using System;
using Libplanet.Net.Options;
using Xunit;

namespace Libplanet.Net.Tests.Options
{
    public class HostOptionsTest
    {
        [Fact]
        public void Constructor()
        {
            Assert.Throws<ArgumentException>(
                () => new HostOptions(null, new IceServer[] { }));
            Assert.Throws<ArgumentException>(
                () => new HostOptions(
                    "127.0.0.1", new IceServer[] { new IceServer("turn://user:info@some.path") }));
        }
    }
}
