using Libplanet.Action;
using Libplanet.Blockchain;
using Libplanet.Blocks;
using Libplanet.Tests.Common.Action;
using Libplanet.Tx;
using Xunit;
using Xunit.Abstractions;

namespace Libplanet.Tests.Action
{
    public class AccountStateDeltaImplTest : AccountStateDeltaTest
    {
        public AccountStateDeltaImplTest(ITestOutputHelper output)
            : base(output)
        {
        }

        public override int ProtocolVersion { get; } = Block<DumbAction>.CurrentProtocolVersion;

        public override IAccountStateDelta CreateInstance(
            AccountStateGetter accountStateGetter,
            AccountBalanceGetter accountBalanceGetter,
            Address signer
        ) =>
            new AccountStateDeltaImpl(accountStateGetter, accountBalanceGetter, signer);

        [Fact]
        public override void TransferAsset()
        {
            base.TransferAsset();
            Assert.IsType<AccountStateDeltaImpl>(_init);

            IAccountStateDelta a = _init.TransferAsset(
                _addr[0],
                _addr[1],
                Value(0, 6),
                allowNegativeBalance: true
            );
            Assert.IsType<AccountStateDeltaImpl>(a);
            Assert.Equal(Value(0, 6), a.GetBalance(_addr[1], _currencies[0]));
            a = a.TransferAsset(_addr[1], _addr[1], Value(0, 5));
            Assert.IsType<AccountStateDeltaImpl>(a);
            Assert.Equal(Value(0, 6), a.GetBalance(_addr[1], _currencies[0]));
        }

        [Fact]
        public override BlockChain<DumbAction> TransferAssetInBlock()
        {
            BlockChain<DumbAction> chain = base.TransferAssetInBlock();

            DumbAction action = new DumbAction(_addr[0], "a", _addr[0], _addr[0], 1);
            Transaction<DumbAction> tx = Transaction<DumbAction>.Create(
                chain.GetNextTxNonce(_addr[0]),
                _keys[0],
                chain.Genesis.Hash,
                new[] { action }
            );
            chain.Append(
                TestUtils.MineNext(
                    chain.Tip,
                    chain.Policy.GetHashAlgorithm,
                    new[] { tx },
                    protocolVersion: ProtocolVersion
                ).AttachStateRootHash(chain.StateStore, chain.Policy)
            );
            Assert.Equal(
                DumbAction.DumbCurrency * 5,
                chain.GetBalance(_addr[0], DumbAction.DumbCurrency)
            );

            return chain;
        }
    }
}
