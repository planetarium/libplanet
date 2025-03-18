using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using Libplanet.Common;
using Xunit;

namespace Libplanet.Crypto.Secp256k1.Tests;

public class Secp256k1CryptoBackendTest
{
    public static IEnumerable<object[]> GenerateRandomBytes()
    {
        Random random = new();
        yield return new object[] { Array.Empty<byte>() };
        for (int i = 1; i < 100; i++)
        {
            byte[] bytes = new byte[i];
            random.NextBytes(bytes);
            yield return new object[] { bytes };
        }
    }

    [Theory]
    [MemberData(nameof(GenerateRandomBytes))]
    public void EnsureIfItBehavesEquivalentToDefaultCryptoBackend(byte[] bytes)
    {
        DefaultCryptoBackend<SHA256> defaultBackend = new();
        Secp256k1CryptoBackend<SHA256> nativeBackend = new();
        PrivateKey key = new();
        PublicKey pubKey = key.PublicKey;
        var msgHash = HashDigest<SHA256>.DeriveFrom(bytes);
        byte[] wrongHashBytes = new byte[HashDigest<SHA256>.Size];
        Array.Copy(msgHash.ToByteArray(), 0, wrongHashBytes, 0, wrongHashBytes.Length - 1);
        wrongHashBytes[wrongHashBytes.Length - 1] =
            unchecked((byte)(msgHash.ByteArray.Last() + 1));
        HashDigest<SHA256> wrongHash = new HashDigest<SHA256>(wrongHashBytes);

        byte[] nativeSig = nativeBackend.Sign(msgHash, key);
        Assert.True(defaultBackend.Verify(msgHash, nativeSig, pubKey));
        byte[] wrongNativeSig = nativeBackend.Sign(wrongHash, key);
        Assert.False(defaultBackend.Verify(msgHash, wrongNativeSig, pubKey));

        byte[] defaultSig = defaultBackend.Sign(msgHash, key);
        Assert.True(nativeBackend.Verify(msgHash, defaultSig, pubKey));
        byte[] wrongDefaultSig = defaultBackend.Sign(wrongHash, key);
        Assert.False(nativeBackend.Verify(msgHash, wrongDefaultSig, pubKey));
    }
}
