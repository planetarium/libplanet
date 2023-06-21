using System.Collections.Generic;
using Libplanet.Action;
using Libplanet.Assets;
using Libplanet.Blockchain;
using Libplanet.Blocks;
using Libplanet.State;
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

        public override int ProtocolVersion { get; } = Block.CurrentProtocolVersion;

        public override IAccountStateDelta CreateInstance(
            AccountStateGetter accountStateGetter,
            AccountBalanceGetter accountBalanceGetter,
            TotalSupplyGetter totalSupplyGetter,
            ValidatorSetGetter validatorSetGetter,
            Address signer
        ) =>
            new AccountStateDeltaImpl(
                accountStateGetter,
                accountBalanceGetter,
                totalSupplyGetter,
                validatorSetGetter,
                signer);

        public override IActionContext CreateContext(
            IAccountStateDelta delta, Address signer) =>
            new ActionContext(
                signer,
                null,
                signer,
                0,
                ProtocolVersion,
                delta,
                0,
                0);

        [Fact]
        public override void TransferAsset()
        {
            base.TransferAsset();
            Assert.IsType<AccountStateDeltaImpl>(_initDelta);

            IAccountStateDelta a = _initDelta.TransferAsset(
                _initContext,
                _addr[0],
                _addr[1],
                Value(0, 6),
                allowNegativeBalance: true
            );
            Assert.IsType<AccountStateDeltaImpl>(a);
            Assert.Equal(Value(0, 6), a.GetBalance(_addr[1], _currencies[0]));
            IActionContext c = CreateContext(a, _addr[0]);
            a = a.TransferAsset(c, _addr[1], _addr[1], Value(0, 5));
            Assert.IsType<AccountStateDeltaImpl>(a);
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

        [Fact]
        public void TotalSupplyTracking()
        {
            IAccountStateDelta delta = _initDelta;

            Assert.Empty(delta.GetUpdatedTotalSupplies());
            Assert.Empty(delta.TotalSupplyUpdatedCurrencies);

            Assert.Equal(
                new FungibleAssetValue(
                    _currencies[3],
                    _totalSupplies[_currencies[3]].Item1,
                    _totalSupplies[_currencies[3]].Item2),
                _initDelta.GetTotalSupply(_currencies[3])
            );
            Assert.Equal(
                new FungibleAssetValue(
                    _currencies[3],
                    _totalSupplies[_currencies[3]].Item1,
                    _totalSupplies[_currencies[3]].Item2),
                _initDelta.GetTotalSupply(_currencies[3])
            );

            Assert.Throws<TotalSupplyNotTrackableException>(() =>
                _initDelta.GetTotalSupply(_currencies[0]));
            Assert.DoesNotContain(
                new KeyValuePair<Currency, FungibleAssetValue>(
                    _currencies[0], Value(0, 5)),
                delta.GetUpdatedTotalSupplies());
            Assert.DoesNotContain(_currencies[0], delta.TotalSupplyUpdatedCurrencies);

            Assert.Equal(Value(4, 0), _initDelta.GetTotalSupply(_currencies[4]));
            Assert.DoesNotContain(_currencies[4], delta.TotalSupplyUpdatedCurrencies);

            delta = delta.MintAsset(_addr[0], Value(0, 10));
            Assert.Throws<TotalSupplyNotTrackableException>(() =>
                _initDelta.GetTotalSupply(_currencies[0]));
            Assert.DoesNotContain(_currencies[0], delta.TotalSupplyUpdatedCurrencies);

            delta = delta.MintAsset(_addr[0], Value(4, 10));
            Assert.Equal(Value(4, 10), delta.GetTotalSupply(_currencies[4]));
            Assert.Contains(
                new KeyValuePair<Currency, FungibleAssetValue>(
                    _currencies[4], Value(4, 10)),
                delta.GetUpdatedTotalSupplies());
            Assert.Contains(_currencies[4], delta.TotalSupplyUpdatedCurrencies);

            delta = delta.BurnAsset(_addr[0], Value(4, 5));
            Assert.Equal(Value(4, 5), delta.GetTotalSupply(_currencies[4]));
            Assert.Contains(
                new KeyValuePair<Currency, FungibleAssetValue>(
                    _currencies[4], Value(4, 5)),
                delta.GetUpdatedTotalSupplies());
            Assert.Contains(_currencies[4], delta.TotalSupplyUpdatedCurrencies);
        }

        [Fact]
        public override void MintAsset()
        {
            base.MintAsset();

            var delta = _initDelta;
            Assert.Throws<SupplyOverflowException>(() => delta.MintAsset(_addr[0], Value(4, 200)));
        }

        [Fact]
        public virtual void TotalUpdatedFungibleAssets()
        {
            IAccountStateDelta delta0 = _initDelta;

            // currencies[0] (FOO) allows only _addr[0] to burn
            delta0 = delta0.BurnAsset(_addr[0], Value(0, 1));
            Assert.Contains(_addr[0], delta0.TotalUpdatedFungibleAssets.Keys);
            Assert.Contains(Value(0, 0).Currency, delta0.TotalUpdatedFungibleAssets[_addr[0]]);
            Assert.DoesNotContain(
                Value(1, 0).Currency, delta0.TotalUpdatedFungibleAssets[_addr[0]]);

            // Forcefully create null delta
            delta0 = AccountStateDeltaImpl.ChooseSigner(delta0, _addr[0]);

            // currencies[1] (BAR) allows _addr[0] & _addr[1] to mint and burn
            delta0 = delta0.MintAsset(_addr[0], Value(1, 1));
            Assert.Contains(_addr[0], delta0.TotalUpdatedFungibleAssets.Keys);
            Assert.Contains(Value(0, 0).Currency, delta0.TotalUpdatedFungibleAssets[_addr[0]]);
            Assert.Contains(Value(1, 0).Currency, delta0.TotalUpdatedFungibleAssets[_addr[0]]);
            Assert.DoesNotContain(_addr[1], delta0.TotalUpdatedFungibleAssets.Keys);

            // Forcefully create null delta
            // Currently there is no way to swap signer without clearing
            delta0 = AccountStateDeltaImpl.ChooseSigner(delta0, _addr[1]);
            delta0 = delta0.BurnAsset(_addr[1], Value(1, 1));

            // _addr[0] burned currencies[0] & minted currencies[1]
            // _addr[1] burned currencies[1]
            Assert.Contains(_addr[0], delta0.TotalUpdatedFungibleAssets.Keys);
            Assert.Contains(Value(0, 0).Currency, delta0.TotalUpdatedFungibleAssets[_addr[0]]);
            Assert.Contains(Value(1, 0).Currency, delta0.TotalUpdatedFungibleAssets[_addr[0]]);
            Assert.Contains(_addr[1], delta0.TotalUpdatedFungibleAssets.Keys);
            Assert.DoesNotContain(
                Value(0, 0).Currency, delta0.TotalUpdatedFungibleAssets[_addr[1]]);
            Assert.Contains(Value(1, 0).Currency, delta0.TotalUpdatedFungibleAssets[_addr[1]]);
        }
    }
}
