using System;
using System.Collections.Immutable;
using System.Security.Cryptography;
using Libplanet.Blocks;
using Xunit;
using static Libplanet.Tests.TestUtils;
using FxAction = Libplanet.Action.PolymorphicAction<Libplanet.Tests.Common.Action.BaseAction>;

namespace Libplanet.Tests.Blocks
{
    public class BlockHeaderTest : IClassFixture<BlockFixture>
    {
        private BlockFixture _fx;

        public BlockHeaderTest(BlockFixture fixture) => _fx = fixture;

        [Fact]
        public void Constructors()
        {
            Block<FxAction>[] fixtures = { _fx.Genesis, _fx.Next, _fx.HasTx };
            foreach (Block<FxAction> fx in fixtures)
            {
                var preEval = new PreEvaluationBlockHeader(fx);
                var header = new BlockHeader(preEval, (fx.StateRootHash, fx.Signature, fx.Hash));
                AssertBytesEqual(header.Hash, fx.Hash);
                AssertPreEvaluationBlockHeadersEqual(fx, header);
                AssertBytesEqual(fx.StateRootHash, header.StateRootHash);

                Assert.Throws<InvalidBlockHashException>(() =>
                    new BlockHeader(preEval, (fx.StateRootHash, fx.Signature, default))
                );
            }
        }

        [Fact]
        public void ValidateSignature()
        {
            Block<FxAction> fx = _fx.HasTx;
            var preEval = new PreEvaluationBlockHeader(fx);
            HashDigest<SHA256> arbitraryHash = new Random().NextHashDigest<SHA256>();
            ImmutableArray<byte> invalidSig = preEval.MakeSignature(_fx.Miner, arbitraryHash);
            InvalidBlockSignatureException e = Assert.Throws<InvalidBlockSignatureException>(() =>
                new BlockHeader(
                    preEval,
                    (
                        fx.StateRootHash,
                        invalidSig,
                        preEval.DeriveBlockHash(fx.StateRootHash, invalidSig)
                    )));
            Assert.Equal(invalidSig, e.InvalidSignature);
            Assert.Equal(fx.PublicKey, e.PublicKey);

            BlockHash hashWithInvalidSig = preEval.DeriveBlockHash(arbitraryHash, invalidSig);
            e = Assert.Throws<InvalidBlockSignatureException>(() =>
                new BlockHeader(preEval, (fx.StateRootHash, invalidSig, hashWithInvalidSig))
            );
            Assert.Equal(invalidSig, e.InvalidSignature);
            Assert.Equal(fx.PublicKey, e.PublicKey);
        }

        [Fact]
        public void ValidateHash()
        {
            Block<FxAction> fx = _fx.HasTx;
            var preEval = new PreEvaluationBlockHeader(fx);
            ImmutableArray<byte> sig = fx.Signature.Value;
            HashDigest<SHA256> arbitraryHash = new Random().NextHashDigest<SHA256>();
            BlockHash invalidHash = preEval.DeriveBlockHash(arbitraryHash, sig);
            Assert.Throws<InvalidBlockHashException>(() =>
                new BlockHeader(preEval, (fx.StateRootHash, sig, invalidHash))
            );
        }

        [Fact]
        public void String()
        {
            var header = new BlockHeader(
                new PreEvaluationBlockHeader(_fx.HasTx),
                (_fx.HasTx.StateRootHash, _fx.HasTx.Signature, _fx.HasTx.Hash));
            Assert.Equal($"#{_fx.HasTx.Index} {_fx.HasTx.Hash}", header.ToString());
        }
    }
}
