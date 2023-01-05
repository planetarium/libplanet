using System.Collections.Generic;
using Libplanet.Action;
using Libplanet.Assets;
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
                    new[] { tx },
                    miner: _keys[1].PublicKey,
                    protocolVersion: ProtocolVersion
                ).Evaluate(_keys[1], chain)
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
            IAccountStateDelta delta = _init;

            Assert.Empty(delta.GetUpdatedTotalSupplies());
            Assert.Empty(delta.TotalSupplyUpdatedCurrencies);

            Assert.Equal(
                new FungibleAssetValue(
                    _currencies[3],
                    _totalSupplies[_currencies[3]].Item1,
                    _totalSupplies[_currencies[3]].Item2),
                _init.GetTotalSupply(_currencies[3])
            );
            Assert.Equal(
                new FungibleAssetValue(
                    _currencies[3],
                    _totalSupplies[_currencies[3]].Item1,
                    _totalSupplies[_currencies[3]].Item2),
                _init.GetTotalSupply(_currencies[3])
            );

            Assert.Throws<TotalSupplyNotTrackableException>(() =>
                _init.GetTotalSupply(_currencies[0]));
            Assert.DoesNotContain(
                new KeyValuePair<Currency, FungibleAssetValue>(
                    _currencies[0], Value(0, 5)),
                delta.GetUpdatedTotalSupplies());
            Assert.DoesNotContain(_currencies[0], delta.TotalSupplyUpdatedCurrencies);

            Assert.Equal(Value(4, 0), _init.GetTotalSupply(_currencies[4]));
            Assert.DoesNotContain(_currencies[4], delta.TotalSupplyUpdatedCurrencies);

            delta = delta.MintAsset(_addr[0], Value(0, 10));
            Assert.Throws<TotalSupplyNotTrackableException>(() =>
                _init.GetTotalSupply(_currencies[0]));
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

            var delta = _init;
            Assert.Throws<SupplyOverflowException>(() => delta.MintAsset(_addr[0], Value(4, 200)));
        }
    }
}
