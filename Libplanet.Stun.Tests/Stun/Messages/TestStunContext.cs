using Libplanet.Stun;

namespace Libplanet.Tests.Stun.Messages
{
    internal class TestStunContext : IStunContext
    {
        public string Username { get; set; }

        public string Password { get; set; }

        public string Realm { get; set; }

        public byte[] Nonce { get; set; }
    }
}
