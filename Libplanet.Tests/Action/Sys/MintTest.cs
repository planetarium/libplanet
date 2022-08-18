using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Action.Sys;
using Libplanet.Assets;
using Libplanet.Blocks;
using Xunit;
using static Libplanet.Tests.TestUtils;
using Random = System.Random;

namespace Libplanet.Tests.Action.Sys
{
    public class MintTest
    {
        // ReSharper disable once InconsistentNaming
        private static readonly Currency FOO = Currency.Capped("FOO", 2, (1000000, 0), null);

        // ReSharper disable once InconsistentNaming
        private static readonly Currency BAR = Currency.Uncapped("BAR", 0, null);

        [Fact]
        public void Constructor()
        {
            var random = new Random();
            Address recipient = random.NextAddress();
            FungibleAssetValue amount = FOO * 125;
            var action = new Mint(recipient, amount);
            AssertBytesEqual(recipient, action.Recipient);
            Assert.Equal(FOO * 125, action.Amount);
        }

        [Fact]
        public void Serialize()
        {
            var random = new Random();
            Address recipient = random.NextAddress();
            FungibleAssetValue amount = FOO * 125;
            var action = new Mint(recipient, amount);
            AssertBencodexEqual(
                Bencodex.Types.Dictionary.Empty
                    .Add("recipient", recipient.ByteArray)
                    .Add("amount", 12500)
                    .Add("currency", FOO.Serialize()),
                action.PlainValue
            );
        }

        [Fact]
        public void Deserialize()
        {
            var random = new Random();
            Address recipient = random.NextAddress();
            IValue serialized = Bencodex.Types.Dictionary.Empty
                .Add("recipient", recipient.ByteArray)
                .Add("amount", 12500)
                .Add("currency", FOO.Serialize());
            var action = new Mint();
            action.LoadPlainValue(serialized);
            AssertBytesEqual(recipient, action.Recipient);
            Assert.Equal(FOO * 125, action.Amount);
        }

        [Fact]
        public void Execute()
        {
            var random = new Random();
            Address signer = random.NextAddress();
            Currency bazCurrency = Currency.Uncapped("BAZ", 0, random.NextAddress());
            var prevStates = new AccountStateDeltaImpl(
                accountStateGetter: addr => new IValue[addr.Count],
                accountBalanceGetter: (addr, c) => c * 0,
                totalSupplyGetter: c => null,
                signer: signer
            );
            BlockHash genesisHash = random.NextBlockHash();
            var context = new ActionContext(
                signer: signer,
                txid: random.NextTxId(),
                miner: random.NextAddress(),
                blockIndex: 123L,
                previousStates: prevStates,
                randomSeed: 123,
                rehearsal: false,
                previousBlockStatesTrie: null,
                blockAction: false,
                genesisHash: genesisHash,
                nativeTokenPredicate: c => c.Equals(FOO) || c.Equals(bazCurrency)
            );
            Address recipient = random.NextAddress();
            var mintFoo = new Mint(recipient, FOO * 123456);
            var nextStates = mintFoo.Execute(context);
            Assert.Equal(FOO * 0, nextStates.GetBalance(signer, FOO));
            Assert.Equal(BAR * 0, nextStates.GetBalance(signer, BAR));
            Assert.Equal(FOO * 123456, nextStates.GetBalance(recipient, FOO));
            Assert.Equal(BAR * 0, nextStates.GetBalance(recipient, BAR));

            var mintSupplyOverflowFoo = new Mint(recipient, FOO.MaximumSupply.Value * 2);
            Assert.Throws<SupplyOverflowException>(() => mintSupplyOverflowFoo.Execute(context));

            var mintBar = new Mint(recipient, BAR * 10);
            NonNativeTokenException exc = Assert.Throws<NonNativeTokenException>(
                () => mintBar.Execute(context)
            );
            Assert.Equal(BAR, exc.NonNativeToken);

            var mintDisallowedCurrency = new Mint(signer, bazCurrency * 1000);
            CurrencyPermissionException exc2 = Assert.Throws<CurrencyPermissionException>(
                () => mintDisallowedCurrency.Execute(context)
            );
            Assert.Equal(signer, exc2.TransactionSigner);
            Assert.Equal(bazCurrency, exc2.Currency);
        }
    }
}
