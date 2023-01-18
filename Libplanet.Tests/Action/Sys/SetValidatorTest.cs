using System;
using System.Numerics;
using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Action.Sys;
using Libplanet.Assets;
using Libplanet.Blocks;
using Libplanet.Consensus;
using Libplanet.Crypto;
using Xunit;
using static Libplanet.Tests.TestUtils;
using Random = System.Random;

namespace Libplanet.Tests.Action.Sys
{
    public class SetValidatorTest
    {
        [Fact]
        public void Constructor()
        {
            var publicKey = new PrivateKey().PublicKey;
            var power = new BigInteger(1);
            var validator = new Validator(publicKey, power);
            var action = new SetValidator(validator);
            Assert.Equal(validator, action.Validator);
        }

        [Fact]
        public void Serialize()
        {
            var publicKey = new PrivateKey().PublicKey;
            var power = new BigInteger(1);
            var validator = new Validator(publicKey, power);
            var action = new SetValidator(validator);
            AssertBencodexEqual(
                Bencodex.Types.Dictionary.Empty.Add("validator", validator.Encoded),
                action.PlainValue);
        }

        [Fact]
        public void Deserialize()
        {
            var validator = new Validator(new PrivateKey().PublicKey, new BigInteger(1));
            var action = new SetValidator();
            action.LoadPlainValue(Dictionary.Empty.Add("validator", validator.Encoded));
            Assert.Equal(validator, action.Validator);
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
                totalSupplyGetter: c => c * 0,
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
                nativeTokenPredicate: null
            );
            var publicKey = new PrivateKey().PublicKey;
            var power = new BigInteger(1);
            var validator = new Validator(publicKey, power);
            var action = new SetValidator(validator);
            var nextStates = action.Execute(context);
            Assert.True(nextStates.GetValidatorSet().Contains(validator));
        }

        [SkippableFact]
        public void JsonSerialization()
        {
            byte[] bytes =
            {
                0x04, 0xb5, 0xa2, 0x4a, 0xa2, 0x11, 0x27, 0x20, 0x42, 0x3b,
                0xad, 0x39, 0xa0, 0x20, 0x51, 0x82, 0x37, 0x9d, 0x6f, 0x2b,
                0x33, 0xe3, 0x48, 0x7c, 0x9a, 0xb6, 0xcc, 0x8f, 0xc4, 0x96,
                0xf8, 0xa5, 0x48, 0x34, 0x40, 0xef, 0xbb, 0xef, 0x06, 0x57,
                0xac, 0x2e, 0xf6, 0xc6, 0xee, 0x05, 0xdb, 0x06, 0xa9, 0x45,
                0x32, 0xfd, 0xa7, 0xdd, 0xc4, 0x4a, 0x16, 0x95, 0xe5, 0xce,
                0x1a, 0x3d, 0x3c, 0x76, 0xdb,
            };

            var publicKey = new PublicKey(bytes);
            var power = new BigInteger(1);
            var validator = new Validator(publicKey, power);
            var action = new SetValidator(validator);
#pragma warning disable MEN002
            AssertJsonSerializable(action, @"
                {
                    ""\ufefftype_id"": ""2"",
                    ""\uFEFFvalues"": {
                        ""\uFEFFvalidator"": {
                        ""\uFEFFpow"": ""0x01"",
                        ""\uFEFFpubKey"": ""0x03b5a24aa2112720423bad39a0205182379d6f2b33e3487c9ab6cc8fc496f8a548""
                        }
                    }
                }
            ");
#pragma warning restore MEN002
        }
    }
}
