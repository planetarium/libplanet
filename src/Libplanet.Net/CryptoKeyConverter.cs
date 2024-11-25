using System.Linq;
using Google.Protobuf;
using Libplanet.Crypto;
using Nethermind.Libp2p.Core;
using Libp2pKeyType = Nethermind.Libp2p.Core.Dto.KeyType;
using Libp2pPrivateKey = Nethermind.Libp2p.Core.Dto.PrivateKey;
using Libp2pPublicKey = Nethermind.Libp2p.Core.Dto.PublicKey;

namespace Libplanet.Net
{
    // FIXME: LibplanetPrivateKey to Libp2pPrivateKey conversion is missing.
    public static class CryptoKeyConverter
    {
        // NOTE: Do not use PublicKey for Identity.
        public static Identity ToLibp2pIdentity(PrivateKey privateKey) =>
            new Identity(
                privateKey: privateKey.ToByteArray(unsigned: false),
                keyType: Libp2pKeyType.Secp256K1);

        public static Libp2pPrivateKey ToLibp2pPrivateKey(PrivateKey privateKey) =>
            new Libp2pPrivateKey()
            {
                Data = ByteString.CopyFrom(privateKey.ToByteArray(unsigned: false)),
                Type = Libp2pKeyType.Secp256K1,
            };

        public static Libp2pPublicKey ToLibp2pPublicKey(PublicKey publicKey) =>
            new Libp2pPublicKey()
            {
                Data = ByteString.CopyFrom(publicKey.Format(true)),
                Type = Libp2pKeyType.Secp256K1,
            };

        // NOTE: This assumes all keys are secp256k1.
        public static Libp2pPublicKey ToLibp2pPublicKey(PeerId peerId) =>
            new Libp2pPublicKey()
            {
                // FIXME: Key type technically should be extracted from bytes.
                Type = Libp2pKeyType.Secp256K1,

                // NOTE: 1 byte (encoding function type) + 1 byte (digest length) +
                // 4 bytes (key type)
                Data = ByteString.CopyFrom(peerId.Bytes.Skip(6).ToArray()),
            };

        // NOTE: 1 byte (encoding function type) + 1 byte (digest length) +
        // 4 bytes (key type)
        public static PublicKey ToLibplanetPublicKey(PeerId peerId) =>
            new PublicKey(peerId.Bytes.Skip(6).ToArray());

        public static PublicKey ToLibplanetPublicKey(Libp2pPublicKey publicKey) =>
            new PublicKey(publicKey.Data.ToByteArray());
    }
}
