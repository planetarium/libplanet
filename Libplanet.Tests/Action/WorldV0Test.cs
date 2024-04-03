using Libplanet.Action;
using Libplanet.Action.State;
using Libplanet.Action.Tests.Common;
using Libplanet.Blockchain;
using Libplanet.Crypto;
using Libplanet.Types.Blocks;
using Libplanet.Types.Tx;
using Xunit;
using Xunit.Abstractions;

namespace Libplanet.Tests.Action
{
    public class WorldV0Test : WorldTest
    {
        public WorldV0Test(ITestOutputHelper output)
            : base(output)
        {
        }

        public override int ProtocolVersion { get; } = 0;

        public override IActionContext CreateContext(IWorld world, Address signer)
        {
            return new ActionContext(
                signer,
                null,
                signer,
                0,
                ProtocolVersion,
                world,
                0,
                0);
        }

        [Fact]
        public override void TransferAsset()
        {
            base.TransferAsset();

            IWorld a = _initWorld.TransferAsset(
                _initContext,
                _addr[0],
                _addr[1],
                Value(0, 6));
            Assert.Equal(Value(0, 6), a.GetBalance(_addr[1], _currencies[0]));
            IActionContext c = CreateContext(a, _addr[0]);
            a = a.TransferAsset(c, _addr[1], _addr[1], Value(0, 5));
            Assert.Equal(Value(0, 11), a.GetBalance(_addr[1], _currencies[0]));
        }

        [Fact]
        public override BlockChain TransferAssetInBlock()
        {
            BlockChain chain = base.TransferAssetInBlock();

            DumbAction action = DumbAction.Create((_addr[0], "a"), (_addr[0], _addr[0], 1));
            Transaction tx = Transaction.Create(
                chain.GetNextTxNonce(_addr[0]),
                _keys[0],
                chain.Genesis.Hash,
                new[] { action }.ToPlainValues()
            );
            PreEvaluationBlock preEval = TestUtils.ProposeNext(
                chain.Tip,
                new[] { tx },
                miner: _keys[1].PublicKey,
                protocolVersion: ProtocolVersion
            );
            var stateRootHash = chain.DetermineBlockStateRootHash(preEval, out _);
            var hash = preEval.Header.DeriveBlockHash(stateRootHash, null);
            Block block = new Block(preEval, (stateRootHash, null, hash));
            chain.Append(block, TestUtils.CreateBlockCommit(block));
            Assert.Equal(
                DumbAction.DumbCurrency * 6,
                chain.GetWorldState().GetBalance(_addr[0], DumbAction.DumbCurrency));

            return chain;
        }
    }
}
