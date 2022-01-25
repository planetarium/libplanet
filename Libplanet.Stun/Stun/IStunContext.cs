#nullable disable

namespace Libplanet.Stun
{
    public interface IStunContext
    {
        string Username { get; }

        string Password { get; }

        string Realm { get; }

        byte[] Nonce { get; }
    }
}
