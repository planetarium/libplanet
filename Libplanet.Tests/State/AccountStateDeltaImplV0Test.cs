using Libplanet.Action;
using Libplanet.Blockchain;
using Libplanet.Blocks;
using Libplanet.State;
using Libplanet.Tests.Common.Action;
using Libplanet.Tx;
using Xunit;
using Xunit.Abstractions;

namespace Libplanet.Tests.State
{
    public class AccountStateDeltaImplV0Test : AccountStateDeltaTest
    {
        public AccountStateDeltaImplV0Test(ITestOutputHelper output)
            : base(output)
        {
        }

        public override int ProtocolVersion { get; } = 0;

        public override IAccountStateDelta CreateDelta(
            AccountStateGetter accountStateGetter,
            AccountBalanceGetter accountBalanceGetter,
            TotalSupplyGetter totalSupplyGetter,
            ValidatorSetGetter validatorSetGetter) =>
            new AccountStateDeltaImplV0(
                accountStateGetter,
                accountBalanceGetter,
                totalSupplyGetter,
                validatorSetGetter);

        public override IActionContext CreateContext(Address signer, IAccountStateDelta delta) =>
            new ActionContext(
                signer,
                null,
                signer,
                0,
                0,  // Protocol version 0
                delta,
                0,
                0);

        [Fact]
        public override void TransferAsset()
        {
            base.TransferAsset();
            Assert.IsType<AccountStateDeltaImplV0>(_initDelta);

            IAccountStateDelta a = _initDelta.TransferAsset(
                _addr[0],
                _addr[1],
                Value(0, 6),
                allowNegativeBalance: true
            );
            Assert.IsType<AccountStateDeltaImplV0>(a);
            Assert.Equal(Value(0, 6), a.GetBalance(_addr[1], _currencies[0]));
            a = a.TransferAsset(_addr[1], _addr[1], Value(0, 5));
            Assert.IsType<AccountStateDeltaImplV0>(a);
            Assert.Equal(Value(0, 11), a.GetBalance(_addr[1], _currencies[0]));
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
                chain.GetBalance(_addr[0], DumbAction.DumbCurrency)
            );

            return chain;
        }
    }
}
