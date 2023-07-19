#nullable disable
using System;
using System.Collections.Immutable;
using System.Linq;
using Bencodex;
using Libplanet.Crypto;
using Xunit;

namespace Libplanet.Net.Tests
{
    public class AppProtocolVersionTest
    {
        public static readonly PrivateKey SignerFixture = new PrivateKey(new byte[]
        {
            0x45, 0x7a, 0xfa, 0x94, 0x17, 0x78, 0x6e, 0x0c, 0xff, 0x4b, 0xa2,
            0x5b, 0x35, 0x95, 0xe1, 0xfb, 0x2a, 0x54, 0x39, 0xf9, 0x0e, 0xd2,
            0x9d, 0x39, 0xdf, 0x54, 0x57, 0x9b, 0x13, 0xea, 0x7c, 0x0f,
        });

        private static readonly AppProtocolVersion ValidClaimFixture = new AppProtocolVersion(
            version: 1,
            extra: null,
            signer: SignerFixture.ToAddress(),
            signature: new byte[]
            {
                0x30, 0x45, 0x02, 0x21, 0x00, 0x89, 0x95, 0x9c, 0x59, 0x25, 0x83, 0x4e,
                0xbc, 0x45, 0x59, 0xd7, 0x9b, 0xca, 0x82, 0x4a, 0x69, 0x20, 0xe5, 0x18,
                0xf0, 0xc5, 0xad, 0xe2, 0xb9, 0xa3, 0xa3, 0xb3, 0x29, 0xbb, 0xa3, 0x3d,
                0xd8, 0x02, 0x20, 0x1d, 0xcb, 0x88, 0xa1, 0x3a, 0x3c, 0x19, 0x2d, 0xe1,
                0x9e, 0x39, 0xf6, 0x58, 0x05, 0xd4, 0x06, 0xbf, 0xb2, 0x93, 0xd1, 0x64,
                0x85, 0x75, 0xa8, 0xa2, 0xcb, 0x9f, 0x95, 0xd9, 0x90, 0xb9, 0x51,
            }.ToImmutableArray()
        );

        private static readonly AppProtocolVersion ValidClaimWExtraFixture = new AppProtocolVersion(
            version: 123,
            extra: (Bencodex.Types.Text)"foo",
            signer: SignerFixture.ToAddress(),
            signature: new byte[]
            {
                0x30, 0x44, 0x02, 0x20, 0x08, 0x5d, 0xd4, 0x4d, 0x2f, 0xa1, 0x57, 0xe0,
                0x01, 0xca, 0x6f, 0xca, 0x98, 0x8d, 0x7a, 0x1d, 0x13, 0x74, 0xcb, 0xc9,
                0x26, 0xca, 0x3b, 0xc3, 0xdf, 0x14, 0x3d, 0x37, 0xe2, 0xad, 0x04, 0x88,
                0x02, 0x20, 0x16, 0xd4, 0xae, 0x72, 0x42, 0x31, 0x63, 0xe9, 0x73, 0x99,
                0x50, 0x0b, 0xb9, 0x19, 0x49, 0xa1, 0xf2, 0xbb, 0x63, 0x20, 0x99, 0x5a,
                0x77, 0xd2, 0x15, 0xfd, 0xbd, 0x59, 0x99, 0xec, 0x5c, 0x51,
            }.ToImmutableArray()
        );

        [Fact]
        public void Sign()
        {
            var signer = new PrivateKey();
            PublicKey otherParty = new PrivateKey().PublicKey;
            AppProtocolVersion claim = AppProtocolVersion.Sign(signer, 1, null);
            Assert.Equal(1, claim.Version);
            Assert.Null(claim.Extra);
            Assert.True(claim.Verify(signer.PublicKey));
            Assert.False(claim.Verify(otherParty));

            AppProtocolVersion claimWithExtra =
                AppProtocolVersion.Sign(signer, 2, (Bencodex.Types.Text)"extra");
            Assert.Equal(2, claimWithExtra.Version);
            Assert.Equal((Bencodex.Types.Text)"extra", claimWithExtra.Extra);
            Assert.True(claimWithExtra.Verify(signer.PublicKey));
            Assert.False(claimWithExtra.Verify(otherParty));

            ArgumentNullException exception =
                Assert.Throws<ArgumentNullException>(() => AppProtocolVersion.Sign(null, 1));
            Assert.Equal("signer", exception.ParamName);
        }

        [Fact]
        public void Verify()
        {
            PublicKey signerPublicKey = SignerFixture.PublicKey;
            var otherParty = new PrivateKey();
            PublicKey otherPartyPublicKey = otherParty.PublicKey;

            Assert.True(ValidClaimFixture.Verify(signerPublicKey));
            Assert.False(ValidClaimFixture.Verify(otherPartyPublicKey));

            // A signature is no more valid for a different version.
            var invalidVersionClaim = new AppProtocolVersion(
                version: ValidClaimFixture.Version + 1,
                extra: ValidClaimFixture.Extra,
                signer: ValidClaimFixture.Signer,
                signature: ValidClaimFixture.Signature
            );
            Assert.False(invalidVersionClaim.Verify(signerPublicKey));
            Assert.False(invalidVersionClaim.Verify(otherPartyPublicKey));

            // A signature is no more valid for a different extra data.
            var invalidExtraClaim = new AppProtocolVersion(
                version: ValidClaimFixture.Version,
                extra: (Bencodex.Types.Text)"invalid extra",
                signer: ValidClaimFixture.Signer,
                signature: ValidClaimFixture.Signature
            );
            Assert.False(invalidExtraClaim.Verify(signerPublicKey));
            Assert.False(invalidExtraClaim.Verify(otherPartyPublicKey));

            // If a signer field does not correspond to an actual private key which signed
            // a signature a claim is invalid even if a signature in itself is valid.
            var invalidSigner = new AppProtocolVersion(
                version: ValidClaimFixture.Version,
                extra: ValidClaimFixture.Extra,
                signer: otherPartyPublicKey.ToAddress(),
                signature: ValidClaimFixture.Signature
            );
            Assert.False(invalidSigner.Verify(signerPublicKey));
            Assert.False(invalidSigner.Verify(otherPartyPublicKey));
        }

        [Fact]
        public void Equality()
        {
            Codec codec = new Codec();
            var signer = new PrivateKey();
            AppProtocolVersion claim =
                AppProtocolVersion.Sign(signer, 123, (Bencodex.Types.Text)"foo");

            // Copy to make sure not to use the same reference
            var address = new Address(claim.Signer.ByteArray);
            var version = claim.Version;
            var extra = codec.Decode(codec.Encode(claim.Extra));
            var signature = claim.Signature.ToArray().ToImmutableArray();

            // Different version
            var claim2 = new AppProtocolVersion(version + 1, extra, signature, address);
            Assert.False(((IEquatable<AppProtocolVersion>)claim).Equals(claim2));
            Assert.False(((object)claim).Equals(claim2));
            Assert.NotEqual(claim.GetHashCode(), claim2.GetHashCode());
            Assert.False(claim == claim2);
            Assert.True(claim != claim2);

            // Different extra
            var claim3 = new AppProtocolVersion(
                version,
                Bencodex.Types.Null.Value,
                signature,
                address);
            Assert.False(((IEquatable<AppProtocolVersion>)claim).Equals(claim3));
            Assert.False(((object)claim).Equals(claim3));
            Assert.NotEqual(claim.GetHashCode(), claim3.GetHashCode());
            Assert.False(claim == claim3);
            Assert.True(claim != claim3);

            // Empty signature
            var claim4 = new AppProtocolVersion(
                version,
                extra,
                ImmutableArray<byte>.Empty,
                address);
            Assert.False(((IEquatable<AppProtocolVersion>)claim).Equals(claim4));
            Assert.False(((object)claim).Equals(claim4));
            Assert.NotEqual(claim.GetHashCode(), claim4.GetHashCode());
            Assert.False(claim == claim4);
            Assert.True(claim != claim4);

            // Different address
            var claim5 = new AppProtocolVersion(
                version,
                extra,
                signature,
                new PrivateKey().ToAddress());
            Assert.False(((IEquatable<AppProtocolVersion>)claim).Equals(claim5));
            Assert.False(((object)claim).Equals(claim5));
            Assert.NotEqual(claim.GetHashCode(), claim5.GetHashCode());
            Assert.False(claim == claim5);
            Assert.True(claim != claim5);

            var sameClaim = new AppProtocolVersion(
                version,
                extra,
                signature,
                address);
            Assert.True(((IEquatable<AppProtocolVersion>)claim).Equals(sameClaim));
            Assert.True(((object)claim).Equals(sameClaim));
            Assert.Equal(claim.GetHashCode(), sameClaim.GetHashCode());
            Assert.True(claim == sameClaim);
            Assert.False(claim != sameClaim);

            AppProtocolVersion claimWithoutExtra = AppProtocolVersion.Sign(signer, 1);
            var sameClaimWithoutExtra = new AppProtocolVersion(
                claimWithoutExtra.Version,
                claimWithoutExtra.Extra,
                ImmutableArray.Create(
                    claimWithoutExtra.Signature,
                    0,
                    claimWithoutExtra.Signature.Length
                ),
                new Address(claimWithoutExtra.Signer.ByteArray)
            );
            Assert.True(
                ((IEquatable<AppProtocolVersion>)claimWithoutExtra).Equals(sameClaimWithoutExtra)
            );
            Assert.True(((object)claimWithoutExtra).Equals(sameClaimWithoutExtra));
            Assert.Equal(claimWithoutExtra.GetHashCode(), sameClaimWithoutExtra.GetHashCode());
            Assert.True(claimWithoutExtra == sameClaimWithoutExtra);
            Assert.False(claimWithoutExtra != sameClaimWithoutExtra);
        }

        [Fact]
        public void String()
        {
            var signer = new PrivateKey();
            AppProtocolVersion claim = AppProtocolVersion.Sign(signer, 123);
            Assert.Equal("123", claim.ToString());

            AppProtocolVersion claimWithExtra =
                AppProtocolVersion.Sign(signer, 456, (Bencodex.Types.Text)"extra");
            Assert.Equal("456 (Bencodex.Types.Text \"extra\")", claimWithExtra.ToString());
        }

        [Fact]
        public void Token()
        {
            var expected =
                "1/271e00B29aeB93B2F4e30ECbebA4f72ac02f72b4/" +
                "MEUCIQCJlZxZJYNOvEVZ15vKgkppIOUY8MWt4rmjo7Mpu6M92AIgHcuIoTo8GS3hnjn2WAXUBr+yk9Fk" +
                "hXWoosufldmQuVE=";
            Assert.Equal(expected, ValidClaimFixture.Token);

            expected =
                "123/271e00B29aeB93B2F4e30ECbebA4f72ac02f72b4/" +
                "MEQCIAhd1E0voVfgAcpvypiNeh0TdMvJJso7w98UPTfirQSIAiAW1K5yQjFj6XOZUAu5GUmh8rtjIJla" +
                "d9IV.b1ZmexcUQ==/" +
                "dTM6Zm9v";
            Assert.Equal(expected, ValidClaimWExtraFixture.Token);
        }

        [Fact]
        public void FromToken()
        {
            Assert.Equal(
                ValidClaimFixture,
                AppProtocolVersion.FromToken(
                    "1/271e00B29aeB93B2F4e30ECbebA4f72ac02f72b4/" +
                    "MEUCIQCJlZxZJYNOvEVZ15vKgkppIOUY8MWt4rmjo7Mpu6M92AIgHcuIoTo8GS3hnjn2WAXUBr+y" +
                    "k9FkhXWoosufldmQuVE="
                )
            );
            Assert.Equal(
                ValidClaimWExtraFixture,
                AppProtocolVersion.FromToken(
                    "123/271e00B29aeB93B2F4e30ECbebA4f72ac02f72b4/" +
                    "MEQCIAhd1E0voVfgAcpvypiNeh0TdMvJJso7w98UPTfirQSIAiAW1K5yQjFj6XOZUAu5GUmh8rtj" +
                    "IJlad9IV.b1ZmexcUQ==/" +
                    "dTM6Zm9v"
                )
            );

            Assert.Throws<ArgumentNullException>(() => AppProtocolVersion.FromToken(null));

            // No first delimiter
            Assert.Throws<FormatException>(() => AppProtocolVersion.FromToken("123"));

            // No second delimiter
            Assert.Throws<FormatException>(() =>
                AppProtocolVersion.FromToken("123/271e00B29aeB93B2F4e30ECbebA4f72ac02f72b4")
            );

            // A version is not an integer
            Assert.Throws<FormatException>(() =>
                AppProtocolVersion.FromToken(
                    "INCORRECT/271e00B29aeB93B2F4e30ECbebA4f72ac02f72b4/" +
                    "MEUCIQCJlZxZJYNOvEVZ15vKgkppIOUY8MWt4rmjo7Mpu6M92AIgHcuIoTo8GS3hnjn2WAXUBr+y" +
                    "k9FkhXWoosufldmQuVE="
                )
            );

            // A signer address is incorrect
            Assert.Throws<FormatException>(() =>
                AppProtocolVersion.FromToken(
                    "123/INCORRECT/" +
                    "MEUCIQCJlZxZJYNOvEVZ15vKgkppIOUY8MWt4rmjo7Mpu6M92AIgHcuIoTo8GS3hnjn2WAXUBr+y" +
                    "k9FkhXWoosufldmQuVE="
                )
            );

            // A signature is not a valid base64 string
            Assert.Throws<FormatException>(() =>
                AppProtocolVersion.FromToken(
                    "123/271e00B29aeB93B2F4e30ECbebA4f72ac02f72b4/_INCORRECT_"
                )
            );

            // An extra data is not a valid base64 string
            Assert.Throws<FormatException>(() =>
                AppProtocolVersion.FromToken(
                    "123/271e00B29aeB93B2F4e30ECbebA4f72ac02f72b4/" +
                    "MEQCIAhd1E0voVfgAcpvypiNeh0TdMvJJso7w98UPTfirQSIAiAW1K5yQjFj6XOZUAu5GUmh8rtj" +
                    "IJlad9IV.b1ZmexcUQ==/" +
                    "_INCORRECT_"
                )
            );
        }

        [Fact]
        public void DefaultConstructor()
        {
            AppProtocolVersion defaultValue = default(AppProtocolVersion);
            ImmutableArray<byte> defaultSig = defaultValue.Signature;
            Assert.False(defaultSig.IsDefault);
            Assert.True(defaultSig.IsEmpty);
            Assert.Equal("0/0000000000000000000000000000000000000000/", defaultValue.Token);
        }
    }
}
