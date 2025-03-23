#nullable enable
using System;
using System.Collections.Immutable;
using System.ComponentModel;
using System.Security.Cryptography;
using Libplanet.Common;
using Xunit;
using static Libplanet.Tests.TestUtils;

namespace Libplanet.Tests;

public class HashDigestTest
{
    [Fact]
    public void DefaultConstructor()
    {
        HashDigest<SHA1> sha1Default = default;
        Assert.Equal(new HashDigest<SHA1>(new byte[20]), sha1Default);

        HashDigest<SHA256> sha256Default = default;
        Assert.Equal(new HashDigest<SHA256>(new byte[32]), sha256Default);
    }

    [Fact]
    public void Bencoded()
    {
        Assert.NotEqual(HashDigest<SHA1>.Size, HashDigest<SHA256>.Size);
        var digest = new HashDigest<SHA256>(GetRandomBytes(HashDigest<SHA256>.Size));
        var bencoded = digest.Bencoded;
        var decoded = new HashDigest<SHA256>(bencoded);
        Assert.Equal(digest, decoded);
        Assert.Throws<ArgumentOutOfRangeException>(() => new HashDigest<SHA1>(bencoded));
    }

    [Fact]
    public void ToHashDigestWorks()
    {
        var b =
            new byte[20]
            {
                0x45, 0xa2, 0x21, 0x87, 0xe2, 0xd8, 0x85, 0x0b, 0xb3, 0x57,
                0x88, 0x69, 0x58, 0xbc, 0x3e, 0x85, 0x60, 0x92, 0x9c, 0xcc,
            };
        var expected = new HashDigest<SHA1>(b);
        HashDigest<SHA1> actual =
            HashDigest<SHA1>.Parse("45a22187e2d8850bb357886958bc3e8560929ccc");

        Assert.Equal(expected, actual);
    }

    [Fact]
    public void DeriveFrom()
    {
        byte[] foo = { 0x66, 0x6f, 0x6f }, bar = { 0x62, 0x61, 0x72 };
        Assert.Equal(
            HashDigest<SHA1>.Parse("0beec7b5ea3f0fdbc95d0dd47f3c5bc275da8a33"),
            HashDigest<SHA1>.DeriveFrom(foo)
        );
        Assert.Equal(
            HashDigest<SHA1>.DeriveFrom(foo),
            HashDigest<SHA1>.DeriveFrom(ImmutableArray.Create(foo))
        );
        Assert.Equal(
            HashDigest<SHA1>.DeriveFrom(foo),
            HashDigest<SHA1>.DeriveFrom(foo.AsSpan())
        );
        Assert.Equal(
            HashDigest<SHA1>.Parse("62cdb7020ff920e5aa642c3d4066950dd1f01f4d"),
            HashDigest<SHA1>.DeriveFrom(bar)
        );
        Assert.Equal(
            HashDigest<MD5>.Parse("acbd18db4cc2f85cedef654fccc4a4d8"),
            HashDigest<MD5>.DeriveFrom(foo)
        );
        Assert.Equal(
            HashDigest<MD5>.Parse("37b51d194a7513e45b56f6524f2d51f2"),
            HashDigest<MD5>.DeriveFrom(bar)
        );
    }

    [Fact]
    public void HashDigestDisallowsIncorrectSizedBytes()
    {
        for (int i = 0; i < 22; ++i)
        {
            if (i == 20)
            {
                _ = new HashDigest<SHA1>(new byte[i]);
                _ = HashDigest<SHA1>.Parse(new string('0', i * 2));
                continue;
            }

            Assert.Throws<ArgumentOutOfRangeException>(
                () => new HashDigest<SHA1>(new byte[i]));
            Assert.Throws<ArgumentOutOfRangeException>(
                () => HashDigest<SHA1>.Parse(new string('0', i * 2)));
        }
    }

    [Fact]
    public void FromImmutableArrayConstructor()
    {
        var b =
            new byte[20]
            {
                0x45, 0xa2, 0x21, 0x87, 0xe2, 0xd8, 0x85, 0x0b, 0xb3, 0x57,
                0x88, 0x69, 0x58, 0xbc, 0x3e, 0x85, 0x60, 0x92, 0x9c, 0xcc,
            };
        var bAsArray = b.ToImmutableArray();

        var expected = new HashDigest<SHA1>(b);
        HashDigest<SHA1> actual = new HashDigest<SHA1>(bAsArray);

        Assert.Equal(expected, actual);
    }

    [Fact]
    public void FromImmutableArrayDisallowIncorrectSizeBytes()
    {
        var b =
            new byte[10]
            {
                0x45, 0xa2, 0x21, 0x87, 0xe2, 0xd8, 0x85, 0x0b, 0xb3, 0x57,
            };
        var bAsArray = b.ToImmutableArray();

        Assert.Throws<ArgumentOutOfRangeException>(
            () => new HashDigest<SHA1>(bAsArray)
        );
    }

    [Fact]
    public void TypeConverter()
    {
        TypeConverter converter = TypeDescriptor.GetConverter(typeof(HashDigest<SHA1>));
        var sha1 = HashDigest<SHA1>.Parse("62cdb7020ff920e5aa642c3d4066950dd1f01f4d");
        Assert.True(converter.CanConvertFrom(typeof(string)));
        Assert.Equal(
            sha1,
            converter.ConvertFrom("62cdb7020ff920e5aa642c3d4066950dd1f01f4d"));
        Assert.Equal(
            sha1,
            converter.ConvertFrom("62CDB7020FF920E5AA642C3D4066950DD1F01F4D"));
        Assert.Throws<ArgumentException>(() => converter.ConvertFrom("INVALID"));

        Assert.True(converter.CanConvertTo(typeof(string)));
        Assert.Equal(
            "62cdb7020ff920e5aa642c3d4066950dd1f01f4d",
            converter.ConvertTo(sha1, typeof(string)));
    }

    [SkippableFact]
    public void JsonSerialization()
    {
        HashDigest<SHA1> digest =
            HashDigest<SHA1>.Parse("0beec7b5ea3f0fdbc95d0dd47f3c5bc275da8a33");
        AssertJsonSerializable(
            digest,
            "\"0beec7b5ea3f0fdbc95d0dd47f3c5bc275da8a33\""
        );
    }
}
