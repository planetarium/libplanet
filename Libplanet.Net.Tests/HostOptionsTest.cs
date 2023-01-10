using System;
using System.Collections.Immutable;
using Xunit;

namespace Libplanet.Net.Tests
{
    public class HostOptionsTest
    {
        [Fact]
        public void Constructor()
        {
            var iceServers = ImmutableList<IceServer>.Empty
                .Add(new IceServer("turn://user:info@some.path"));
            Assert.Throws<ArgumentException>(
                () => new HostOptions(null, ImmutableList<IceServer>.Empty, 0));
            Assert.Throws<ArgumentException>(
                () => new HostOptions("localhost", iceServers, 0));
        }
    }
}
