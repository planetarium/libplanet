using System;

namespace Libplanet.Stun.Tests.Messages
{
    internal class TestStunContext : IStunContext
    {
        public string Username { get; set; } = string.Empty;

        public string Password { get; set; } = string.Empty;

        public string Realm { get; set; } = string.Empty;

        public byte[] Nonce { get; set; } = Array.Empty<byte>();
    }
}
