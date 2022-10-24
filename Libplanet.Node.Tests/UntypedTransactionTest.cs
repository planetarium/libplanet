using System;
using System.Collections.Immutable;
using Bencodex;
using Bencodex.Types;
using Libplanet.Blocks;
using Libplanet.Crypto;
using Libplanet.Tx;
using Xunit;

namespace Libplanet.Node.Tests
{
    public class UntypedTransactionTest
    {
        private readonly PrivateKey _key1;
        private readonly PrivateKey _key2;
        private readonly TxMetadata _meta;
        private readonly IValue _systemActionValue;
        private readonly IValue _customActionsValue;

        private readonly ImmutableArray<byte> _withSystemActionSignature;
        private readonly ImmutableArray<byte> _withCustomActionsSignature;

        public UntypedTransactionTest()
        {
            _key1 = new PrivateKey(new byte[]
            {
                0x9b, 0xf4, 0x66, 0x4b, 0xa0, 0x9a, 0x89, 0xfa, 0xeb, 0x68, 0x4b,
                0x94, 0xe6, 0x9f, 0xfd, 0xe0, 0x1d, 0x26, 0xae, 0x14, 0xb5, 0x56,
                0x20, 0x4d, 0x3f, 0x6a, 0xb5, 0x8f, 0x61, 0xf7, 0x84, 0x18,
            });
            _key2 = new PrivateKey(new byte[]
            {
                0xfc, 0xf3, 0x0b, 0x33, 0x3d, 0x04, 0xcc, 0xfe, 0xb5, 0x62, 0xf0,
                0x00, 0xa3, 0x2d, 0xf4, 0x88, 0xe7, 0x15, 0x49, 0x49, 0xd3, 0x1d,
                0xdc, 0xac, 0x3c, 0xf9, 0x27, 0x8a, 0xcb, 0x57, 0x86, 0xc7,
            });
            _meta = new TxMetadata(_key2.PublicKey)
            {
                Nonce = 0L,
                UpdatedAddresses = new[]
                {
                    _key1.ToAddress(),
                    _key2.ToAddress(),
                }.ToImmutableHashSet(),
                Timestamp = new DateTimeOffset(2022, 1, 12, 4, 56, 7, 890, default),
                GenesisHash = BlockHash.FromString(
                    "83915317ebdbf870c567b263dd2e61ec9dca7fb381c592d80993291b6ffe5ad5"),
            };

            var codec = new Codec();
            _systemActionValue = new Integer(123);
            _withSystemActionSignature = ImmutableArray.Create(_key2.Sign(codec.Encode(
                _meta.ToBencodex().Add(TxMetadata.SystemActionKey, _systemActionValue))));
            _customActionsValue = new Bencodex.Types.List(
                new Integer[] { new Integer(123), new Integer(456) });
            _withCustomActionsSignature = ImmutableArray.Create(_key2.Sign(codec.Encode(
                _meta.ToBencodex().Add(TxMetadata.CustomActionsKey, _customActionsValue))));
        }

        [Fact]
        public void Constructor()
        {
            var untyped = new UntypedTransaction(
                _meta, _systemActionValue, null, _withSystemActionSignature);
            Assert.Equal(_meta.Nonce, untyped.Nonce);
            Assert.Equal(_meta.Signer, untyped.Signer);
            Assert.Equal(_meta.UpdatedAddresses, untyped.UpdatedAddresses);
            Assert.Equal(_meta.Timestamp, untyped.Timestamp);
            Assert.Equal(_meta.PublicKey, untyped.PublicKey);
            Assert.Equal(_meta.GenesisHash, untyped.GenesisHash);
            Assert.Equal(_systemActionValue, untyped.SystemActionValue);
            Assert.Null(untyped.CustomActionsValue);
            Assert.Equal(_withSystemActionSignature, untyped.Signature);

            untyped = new UntypedTransaction(
                _meta, null, _customActionsValue, _withCustomActionsSignature);
            Assert.Equal(_meta.Nonce, untyped.Nonce);
            Assert.Equal(_meta.Signer, untyped.Signer);
            Assert.Equal(_meta.UpdatedAddresses, untyped.UpdatedAddresses);
            Assert.Equal(_meta.Timestamp, untyped.Timestamp);
            Assert.Equal(_meta.PublicKey, untyped.PublicKey);
            Assert.Equal(_meta.GenesisHash, untyped.GenesisHash);
            Assert.Null(untyped.SystemActionValue);
            Assert.Equal(_customActionsValue, untyped.CustomActionsValue);
            Assert.Equal(_withCustomActionsSignature, untyped.Signature);

            Assert.Throws<ArgumentException>(
                () => new UntypedTransaction(
                    _meta, _systemActionValue, _customActionsValue, default));

            InvalidTxSignatureException e;
            e = Assert.Throws<InvalidTxSignatureException>(
                () => new UntypedTransaction(_meta, null, _customActionsValue, default));
            Assert.Equal(
                TxId.FromHex("ea601351c27c3c6291c4352ec060f06650b81c02ded4a4d22858da756098fd4e"),
                e.TxId);

            e = Assert.Throws<InvalidTxSignatureException>(
                () => new UntypedTransaction(
                    _meta, null, Bencodex.Types.List.Empty, _withCustomActionsSignature));
            Assert.Equal(
                TxId.FromHex("f91abd37cad6962cb206a9c29faffddede8bce47751f3e5e4b0e1c8f714a4a82"),
                e.TxId);
        }

        [Fact]
        public void Deserialize()
        {
            Bencodex.Types.Dictionary signedDict = _meta
                .ToBencodex()
                .Add(TxMetadata.CustomActionsKey, _customActionsValue)
                .Add(TxMetadata.SignatureKey, _withCustomActionsSignature);
            var untyped = new UntypedTransaction(signedDict);
            Assert.Equal(_meta.Nonce, untyped.Nonce);
            Assert.Equal(_meta.Signer, untyped.Signer);
            Assert.Equal(_meta.UpdatedAddresses, untyped.UpdatedAddresses);
            Assert.Equal(_meta.Timestamp, untyped.Timestamp);
            Assert.Equal(_meta.PublicKey, untyped.PublicKey);
            Assert.Equal(_meta.GenesisHash, untyped.GenesisHash);
            Assert.Equal(_customActionsValue, untyped.CustomActionsValue);
            Assert.Equal(_withCustomActionsSignature, untyped.Signature);

            var invalidActionsDict = signedDict.SetItem(
                TxMetadata.SystemActionKey, _systemActionValue);
            Assert.Throws<ArgumentException>(() => new UntypedTransaction(invalidActionsDict));

            InvalidTxSignatureException e;
            var invalidSigDict = signedDict.SetItem(TxMetadata.SignatureKey, Array.Empty<byte>());
            e = Assert.Throws<InvalidTxSignatureException>(
                () => new UntypedTransaction(invalidSigDict));
            Assert.Equal(
                TxId.FromHex("ea601351c27c3c6291c4352ec060f06650b81c02ded4a4d22858da756098fd4e"),
                e.TxId);

            invalidSigDict =
                signedDict.SetItem(TxMetadata.CustomActionsKey, new List());
            e = Assert.Throws<InvalidTxSignatureException>(
                () => new UntypedTransaction(invalidSigDict));
            Assert.Equal(
                TxId.FromHex("f91abd37cad6962cb206a9c29faffddede8bce47751f3e5e4b0e1c8f714a4a82"),
                e.TxId);
        }

        [Fact]
        public void ToBencodex()
        {
            Bencodex.Types.Dictionary dict =
                new UntypedTransaction(
                    _meta, null, _customActionsValue, _withCustomActionsSignature).ToBencodex();
            Assert.Equal(
                _meta.ToBencodex()
                    .Add(TxMetadata.CustomActionsKey, _customActionsValue)
                    .Add(TxMetadata.SignatureKey, _withCustomActionsSignature),
                dict);

            var deserialized = new UntypedTransaction(dict);
            Assert.Equal(_meta.Nonce, deserialized.Nonce);
            Assert.Equal(_meta.Signer, deserialized.Signer);
            Assert.Equal(_meta.UpdatedAddresses, deserialized.UpdatedAddresses);
            Assert.Equal(_meta.Timestamp, deserialized.Timestamp);
            Assert.Equal(_meta.PublicKey, deserialized.PublicKey);
            Assert.Equal(_meta.GenesisHash, deserialized.GenesisHash);
            Assert.Equal(_customActionsValue, deserialized.CustomActionsValue);
            Assert.Equal(_withCustomActionsSignature, deserialized.Signature);
        }
    }
}
