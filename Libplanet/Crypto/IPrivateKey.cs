using System.Collections.Generic;

namespace Libplanet.Crypto
{
    public interface IPrivateKey
    {
        IReadOnlyList<byte> KeyBytes { get; }

        IPublicKey PublicKey { get; }

        public byte[] Sign(byte[] message);
    }
}
