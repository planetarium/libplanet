using Libplanet.Blockchain;
using Libplanet.Blocks;
using Libplanet.State;
using Libplanet.Tests.Common.Action;
using Libplanet.Tx;
using Xunit;
using Xunit.Abstractions;

namespace Libplanet.Tests.State
{
    public class AccountStateDeltaV1Test : AccountStateDeltaTest
    {
        public AccountStateDeltaV1Test(ITestOutputHelper output)
            : base(output)
        {
        }

        public override int ProtocolVersion { get; } = Block.CurrentProtocolVersion;

        [Fact]
        public override void TransferAsset()
        {
            base.TransferAsset();
            Assert.IsType<AccountStateDelta>(_initDelta);

            IAccountStateDelta a = _initDelta.TransferAsset(
                _initContext,
                _addr[0],
                _addr[1],
                Value(0, 6),
                allowNegativeBalance: true
            );
            Assert.IsType<AccountStateDelta>(a);
            Assert.Equal(Value(0, 6), a.GetBalance(_addr[1], _currencies[0]));
            a = a.TransferAsset(_initContext, _addr[1], _addr[1], Value(0, 5));
            Assert.IsType<AccountStateDelta>(a);
            Assert.Equal(Value(0, 6), a.GetBalance(_addr[1], _currencies[0]));
        }

        [Fact]
        public override BlockChain TransferAssetInBlock()
        {
            BlockChain chain = base.TransferAssetInBlock();

            DumbAction action = new DumbAction(_addr[0], "a", _addr[0], _addr[0], 1);
            Transaction tx = Transaction.Create(
                chain.GetNextTxNonce(_addr[0]),
                _keys[0],
                chain.Genesis.Hash,
                new[] { action }
            );
            Block block = chain.EvaluateAndSign(
                TestUtils.ProposeNext(
                    chain.Tip,
                    new[] { tx },
                    miner: _keys[1].PublicKey,
                    protocolVersion: ProtocolVersion,
                    lastCommit: TestUtils.CreateBlockCommit(chain.Tip)),
                _keys[1]);
            chain.Append(
                block,
                TestUtils.CreateBlockCommit(block)
            );
            Assert.Equal(
                DumbAction.DumbCurrency * 5,
                chain.GetBalance(_addr[0], DumbAction.DumbCurrency)
            );

            return chain;
        }
    }
}
