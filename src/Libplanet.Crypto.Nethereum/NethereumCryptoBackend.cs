using System.Diagnostics.CodeAnalysis;
using System.Linq;
using System.Security.Cryptography;
using Libplanet;
using Libplanet.Common;
using Libplanet.Crypto;
using EthECKey = Nethereum.Signer.EthECKey;
using EthereumMessageSigner = Nethereum.Signer.EthereumMessageSigner;

namespace Libplanet.Crypto.Nethereum;

public class NethereumCryptoBackend<T> : ICryptoBackend<T>
    where T : HashAlgorithm
{
    private readonly EthereumMessageSigner _signer = new EthereumMessageSigner();
    private readonly object _instanceLock = new object();

    public byte[] Sign(HashDigest<T> messageHash, PrivateKey privateKey)
    {
        lock (_instanceLock)
        {
            var key = new EthECKey(privateKey.ToByteArray(), isPrivate: true);
            var signature = _signer.Sign(messageHash.ToByteArray(), key);
            if (signature.StartsWith("0x"))
            {
                signature = signature.Substring(2);
            }

            return ByteUtil.ParseHex(signature);
        }
    }

    public bool Verify(
        HashDigest<T> messageHash,
        byte[] signature,
        PublicKey publicKey)
    {
        lock (_instanceLock)
        {
            var address = _signer.EcRecover(messageHash.ToByteArray(), ByteUtil.Hex(signature));
            return publicKey.Address.Equals(new Address(address));
        }
    }
}
