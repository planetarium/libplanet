using System;
using Xunit;

namespace Libplanet.Net.Tests
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
                    "localhost", new IceServer[] { new IceServer("turn://user:info@some.path") }));
        }
    }
}
