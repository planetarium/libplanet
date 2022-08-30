using System;
using System.Collections.Immutable;
using System.Linq;
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
        private readonly IValue[] _actionValues;
        private readonly ImmutableArray<byte> _sig;

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
            _actionValues = new IValue[] { new Integer(123), new Integer(456) };
            Bencodex.Types.Dictionary unsignedDict = _meta.ToBencodex(_actionValues);
            var codec = new Codec();
            _sig = ImmutableArray.Create(_key2.Sign(codec.Encode(unsignedDict)));
        }

        [Fact]
        public void Constructor()
        {
            var untyped = new UntypedTransaction(_meta, _actionValues, _sig);
            Assert.Equal(_meta.Nonce, untyped.Nonce);
            Assert.Equal(_meta.Signer, untyped.Signer);
            Assert.Equal(_meta.UpdatedAddresses, untyped.UpdatedAddresses);
            Assert.Equal(_meta.Timestamp, untyped.Timestamp);
            Assert.Equal(_meta.PublicKey, untyped.PublicKey);
            Assert.Equal(_meta.GenesisHash, untyped.GenesisHash);
            Assert.Equal(_actionValues, untyped.ActionValues);
            Assert.Equal(_sig, untyped.Signature);

            InvalidTxSignatureException e;
            e = Assert.Throws<InvalidTxSignatureException>(
                () => new UntypedTransaction(_meta, _actionValues, default)
            );
            Assert.Equal(
                TxId.FromHex("ea601351c27c3c6291c4352ec060f06650b81c02ded4a4d22858da756098fd4e"),
                e.TxId
            );

            e = Assert.Throws<InvalidTxSignatureException>(
                () => new UntypedTransaction(_meta, Enumerable.Empty<IValue>(), _sig)
            );
            Assert.Equal(
                TxId.FromHex("f91abd37cad6962cb206a9c29faffddede8bce47751f3e5e4b0e1c8f714a4a82"),
                e.TxId
            );
        }

        [Fact]
        public void Deserialize()
        {
            Bencodex.Types.Dictionary signedDict = _meta.ToBencodex(_actionValues, _sig);
            var untyped = new UntypedTransaction(signedDict);
            Assert.Equal(_meta.Nonce, untyped.Nonce);
            Assert.Equal(_meta.Signer, untyped.Signer);
            Assert.Equal(_meta.UpdatedAddresses, untyped.UpdatedAddresses);
            Assert.Equal(_meta.Timestamp, untyped.Timestamp);
            Assert.Equal(_meta.PublicKey, untyped.PublicKey);
            Assert.Equal(_meta.GenesisHash, untyped.GenesisHash);
            Assert.Equal(_actionValues, untyped.ActionValues);
            Assert.Equal(_sig, untyped.Signature);

            InvalidTxSignatureException e;
            var invalidSigDict = signedDict.SetItem(TxMetadata.SignatureKey, Array.Empty<byte>());
            e = Assert.Throws<InvalidTxSignatureException>(
                () => new UntypedTransaction(invalidSigDict)
            );
            Assert.Equal(
                TxId.FromHex("ea601351c27c3c6291c4352ec060f06650b81c02ded4a4d22858da756098fd4e"),
                e.TxId
            );

            var invalidActionsDict =
                signedDict.SetItem(TxMetadata.CustomActionsKey, (IValue)new List());
            e = Assert.Throws<InvalidTxSignatureException>(
                () => new UntypedTransaction(invalidActionsDict)
            );
            Assert.Equal(
                TxId.FromHex("f91abd37cad6962cb206a9c29faffddede8bce47751f3e5e4b0e1c8f714a4a82"),
                e.TxId
            );
        }

        [Fact]
        public void ToBencodex()
        {
            Bencodex.Types.Dictionary dict =
                new UntypedTransaction(_meta, _actionValues, _sig).ToBencodex();
            Assert.Equal(_meta.ToBencodex(_actionValues, _sig), dict);

            var deserialized = new UntypedTransaction(dict);
            Assert.Equal(_meta.Nonce, deserialized.Nonce);
            Assert.Equal(_meta.Signer, deserialized.Signer);
            Assert.Equal(_meta.UpdatedAddresses, deserialized.UpdatedAddresses);
            Assert.Equal(_meta.Timestamp, deserialized.Timestamp);
            Assert.Equal(_meta.PublicKey, deserialized.PublicKey);
            Assert.Equal(_meta.GenesisHash, deserialized.GenesisHash);
            Assert.Equal(_actionValues, deserialized.ActionValues);
            Assert.Equal(_sig, deserialized.Signature);
        }
    }
}
