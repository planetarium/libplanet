using System.Collections.Generic;

namespace Libplanet.Crypto
{
    public interface IPublicKey
    {
        IReadOnlyList<byte> KeyBytes { get; }

        public bool Verify(IReadOnlyList<byte> message, IReadOnlyList<byte> signature);
    }
}
