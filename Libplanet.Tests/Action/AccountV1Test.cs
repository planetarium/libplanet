using System.Collections.Generic;
using System.Linq;
using Libplanet.Action;
using Libplanet.Action.State;
using Libplanet.Action.Tests.Common;
using Libplanet.Action.Tests.Mocks;
using Libplanet.Blockchain;
using Libplanet.Crypto;
using Libplanet.Types.Assets;
using Libplanet.Types.Blocks;
using Libplanet.Types.Tx;
using Xunit;
using Xunit.Abstractions;

namespace Libplanet.Tests.Action
{
    public class AccountV1Test : AccountTest
    {
        public AccountV1Test(ITestOutputHelper output)
            : base(output)
        {
        }

        public override int ProtocolVersion { get; } = Block.CurrentProtocolVersion;

        public override IActionContext CreateContext(IAccount delta, Address signer)
        {
            IWorld world = World.Create(new MockWorldState());
            world = world.SetAccount(delta);
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

            IAccount a = _initAccount.TransferAsset(
                _initContext,
                _addr[0],
                _addr[1],
                Value(0, 6),
                allowNegativeBalance: true
            );
            Assert.Equal(Value(0, 6), a.GetBalance(_addr[1], _currencies[0]));
            IActionContext c = CreateContext(a, _addr[0]);
            a = a.TransferAsset(c, _addr[1], _addr[1], Value(0, 5));
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
                new[] { action }.ToPlainValues()
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
            IAccount account = _initAccount;
            IActionContext context = _initContext;

            Assert.Empty(account.GetUpdatedTotalSupplies());
            Assert.Empty(account.Delta.UpdatedTotalSupplyCurrencies);

            Assert.Equal(
                _initState.GetTotalSupply(_currencies[3]),
                _initAccount.GetTotalSupply(_currencies[3]));

            Assert.Throws<TotalSupplyNotTrackableException>(() =>
                _initAccount.GetTotalSupply(_currencies[0]));
            Assert.DoesNotContain(
                new KeyValuePair<Currency, FungibleAssetValue>(
                    _currencies[0], Value(0, 5)),
                account.GetUpdatedTotalSupplies());
            Assert.DoesNotContain(_currencies[0], account.Delta.UpdatedTotalSupplyCurrencies);

            Assert.Equal(Value(4, 0), _initAccount.GetTotalSupply(_currencies[4]));
            Assert.DoesNotContain(_currencies[4], account.Delta.UpdatedTotalSupplyCurrencies);

            account = account.MintAsset(context, _addr[0], Value(0, 10));
            Assert.Throws<TotalSupplyNotTrackableException>(() =>
                _initAccount.GetTotalSupply(_currencies[0]));
            Assert.DoesNotContain(_currencies[0], account.Delta.UpdatedTotalSupplyCurrencies);

            account = account.MintAsset(context, _addr[0], Value(4, 10));
            Assert.Equal(Value(4, 10), account.GetTotalSupply(_currencies[4]));
            Assert.Contains(
                new KeyValuePair<Currency, FungibleAssetValue>(
                    _currencies[4], Value(4, 10)),
                account.GetUpdatedTotalSupplies());
            Assert.Contains(_currencies[4], account.Delta.UpdatedTotalSupplyCurrencies);

            account = account.BurnAsset(context, _addr[0], Value(4, 5));
            Assert.Equal(Value(4, 5), account.GetTotalSupply(_currencies[4]));
            Assert.Contains(
                new KeyValuePair<Currency, FungibleAssetValue>(
                    _currencies[4], Value(4, 5)),
                account.GetUpdatedTotalSupplies());
            Assert.Contains(_currencies[4], account.Delta.UpdatedTotalSupplyCurrencies);
        }

        [Fact]
        public override void MintAsset()
        {
            base.MintAsset();

            Assert.Throws<SupplyOverflowException>(
                () => _initAccount.MintAsset(_initContext, _addr[0], Value(4, 200)));
        }

        [Fact]
        public virtual void TotalUpdatedFungibleAssets()
        {
            IAccount delta0 = _initAccount;
            IActionContext context0 = _initContext;

            // currencies[0] (FOO) allows only _addr[0] to burn
            delta0 = delta0.BurnAsset(context0, _addr[0], Value(0, 1));
            Assert.Contains(
                (_addr[0], Value(0, 0).Currency), delta0.TotalUpdatedFungibleAssets);
            Assert.DoesNotContain(
                (_addr[0], Value(1, 0).Currency), delta0.TotalUpdatedFungibleAssets);

            // Forcefully create null delta
            delta0 = Account.Flush(delta0);

            // currencies[1] (BAR) allows _addr[0] & _addr[1] to mint and burn
            delta0 = delta0.MintAsset(context0, _addr[0], Value(1, 1));
            Assert.Contains(
                (_addr[0], Value(0, 0).Currency), delta0.TotalUpdatedFungibleAssets);
            Assert.Contains(
                (_addr[0], Value(1, 0).Currency), delta0.TotalUpdatedFungibleAssets);
            Assert.DoesNotContain(
                _addr[1], delta0.TotalUpdatedFungibleAssets.Select(pair => pair.Item1));

            // Forcefully create null delta
            delta0 = Account.Flush(delta0);
            context0 = CreateContext(delta0, _addr[1]);
            delta0 = delta0.BurnAsset(context0, _addr[1], Value(1, 1));

            // _addr[0] burned currencies[0] & minted currencies[1]
            // _addr[1] burned currencies[1]
            Assert.Contains(
                (_addr[0], Value(0, 0).Currency), delta0.TotalUpdatedFungibleAssets);
            Assert.Contains(
                (_addr[0], Value(1, 0).Currency), delta0.TotalUpdatedFungibleAssets);
            Assert.DoesNotContain(
                (_addr[1], Value(0, 0).Currency), delta0.TotalUpdatedFungibleAssets);
            Assert.Contains(
                (_addr[1], Value(1, 0).Currency), delta0.TotalUpdatedFungibleAssets);
        }
    }
}
