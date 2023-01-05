using System;
using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Action.Sys;
using Libplanet.Assets;
using Libplanet.Blocks;
using Libplanet.Consensus;
using Xunit;
using static Libplanet.Tests.TestUtils;
using Random = System.Random;

namespace Libplanet.Tests.Action.Sys
{
    public class TransferTest
    {
        // ReSharper disable once InconsistentNaming
        private static readonly Currency FOO = Currency.Uncapped("FOO", 2, null);

        // ReSharper disable once InconsistentNaming
        private static readonly Currency BAR = Currency.Uncapped("BAR", 0, null);

        [Fact]
        public void Constructor()
        {
            var random = new Random();
            Address recipient = random.NextAddress();
            FungibleAssetValue amount = FOO * 125;
            var action = new Transfer(recipient, amount);
            AssertBytesEqual(recipient, action.Recipient);
            Assert.Equal(FOO * 125, action.Amount);
        }

        [Fact]
        public void Serialize()
        {
            var random = new Random();
            Address recipient = random.NextAddress();
            FungibleAssetValue amount = FOO * 125;
            var action = new Transfer(recipient, amount);
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
            var action = new Transfer();
            action.LoadPlainValue(serialized);
            AssertBytesEqual(recipient, action.Recipient);
            Assert.Equal(FOO * 125, action.Amount);
        }

        [Fact]
        public void Execute()
        {
            var random = new Random();
            Address signer = random.NextAddress();
            var prevStates = new AccountStateDeltaImpl(
                accountStateGetter: addr => new IValue[addr.Count],
                accountBalanceGetter: (addr, c) => c * (addr == signer ? 500 : 0),
                totalSupplyGetter: c => c * 500,
                validatorSetGetter: () => new ValidatorSet(),
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
                nativeTokenPredicate: FOO.Equals
            );
            Address recipient = random.NextAddress();
            var transferFoo = new Transfer(recipient, FOO * 125);
            var nextStates = transferFoo.Execute(context);
            Assert.Equal(FOO * 375, nextStates.GetBalance(signer, FOO));
            Assert.Equal(BAR * 500, nextStates.GetBalance(signer, BAR));
            Assert.Equal(FOO * 125, nextStates.GetBalance(recipient, FOO));
            Assert.Equal(BAR * 0, nextStates.GetBalance(recipient, BAR));

            var transferBar = new Transfer(recipient, BAR * 10);
            NonNativeTokenException exc = Assert.Throws<NonNativeTokenException>(
                () => transferBar.Execute(context)
            );
            Assert.Equal(BAR, exc.NonNativeToken);

            var transferFromUnsufficientBalance = new Transfer(signer, FOO * 1000);
            InsufficientBalanceException exc2 = Assert.Throws<InsufficientBalanceException>(
                () => transferFromUnsufficientBalance.Execute(context)
            );
            Assert.Equal(signer, exc2.Address);
            Assert.Equal(FOO * 500, exc2.Balance);
        }

        [SkippableFact]
        public void JsonSerialization()
        {
            FungibleAssetValue amount = FOO * 125;
            var action = new Transfer(
                new Address("474CB59Dea21159CeFcC828b30a8D864e0b94a6B"),
                amount
            );
            AssertJsonSerializable(action, @"
                {
                    ""\ufefftype_id"": ""1"",
                    ""\ufeffvalues"": {
                        ""\ufeffamount"": ""12500"",
                        ""\ufeffcurrency"": {
                            ""\ufeffdecimals"": ""2"",
                            ""\ufeffminters"": null,
                            ""\ufeffticker"": ""\ufeffFOO"",
                            ""\ufefftotalSupplyTrackable"": true
                        },
                        ""\ufeffrecipient"": ""0x474cb59dea21159cefcc828b30a8d864e0b94a6b""
                    }
                }
            ");
        }
    }
}
