using System.Collections.Immutable;
using System.Numerics;
using Bencodex.Types;
using Libplanet.Action.State;
using Libplanet.Action.Sys;
using Libplanet.Action.Tests.Mocks;
using Libplanet.Crypto;
using Libplanet.Types.Blocks;
using Libplanet.Types.Consensus;
using Xunit;

namespace Libplanet.Action.Tests.Sys
{
    public class InitializeTest
    {
        private static readonly ValidatorSet _validatorSet = new ValidatorSet(
            new List<Validator>()
            {
                new Validator(new PrivateKey().PublicKey, BigInteger.One),
            }
        );

        private static readonly IImmutableDictionary<Address, IValue>
            _states =
            new Dictionary<Address, IValue>
            {
                [default] = (Text)"initial value",
            }.ToImmutableDictionary();

        [Fact]
        public void Constructor()
        {
            var action = new Initialize(
                validatorSet: _validatorSet,
                states: _states
            );
            Assert.Equal(_validatorSet, action.ValidatorSet);
            Assert.Equal(_states, action.States);
        }

        [Fact]
        public void Execute()
        {
            var random = new System.Random();
            Address signer = random.NextAddress();
            var prevState = new World(new MockWorldState());
            BlockHash genesisHash = random.NextBlockHash();
            var context = new ActionContext(
                signer: signer,
                txid: random.NextTxId(),
                miner: random.NextAddress(),
                blockIndex: 0,
                blockProtocolVersion: Block.CurrentProtocolVersion,
                lastCommit: null,
                previousState: prevState,
                randomSeed: 123,
                isBlockAction: false,
                gasLimit: 0,
                maxGasPrice: null);
            var initialize = new Initialize(
                states: _states,
                validatorSet: _validatorSet
            );

            var nextState = initialize.Execute(context);

            Assert.Equal(
                _validatorSet,
                nextState.GetAccount(ReservedAddresses.LegacyAccount).GetValidatorSet());
            Assert.Equal(
                _states[default],
                nextState.GetAccount(ReservedAddresses.LegacyAccount).GetState(default));
        }

        [Fact]
        public void ExecuteInNonGenesis()
        {
            var random = new System.Random();
            Address signer = random.NextAddress();
            var prevState = new World(new MockWorldState());
            BlockHash genesisHash = random.NextBlockHash();
            var key = new PrivateKey();
            var hash = random.NextBlockHash();
            var lastCommit = new BlockCommit(
                0,
                0,
                hash,
                new[]
                {
                    new VoteMetadata(
                        0,
                        0,
                        hash,
                        DateTimeOffset.UtcNow,
                        key.PublicKey,
                        BigInteger.One,
                        VoteFlag.PreCommit).Sign(key),
                }.ToImmutableArray());
            var context = new ActionContext(
                signer: signer,
                txid: random.NextTxId(),
                miner: random.NextAddress(),
                blockIndex: 10,
                blockProtocolVersion: Block.CurrentProtocolVersion,
                lastCommit: lastCommit,
                previousState: prevState,
                randomSeed: 123,
                isBlockAction: false,
                gasLimit: long.MaxValue,
                maxGasPrice: null);
            var initialize = new Initialize(
                states: _states,
                validatorSet: _validatorSet
            );

            Assert.Throws<InvalidOperationException>(
                () =>
                {
                    _ = initialize.Execute(context);
                }
            );
        }

        [Fact]
        public void Serialize()
        {
            var action = new Initialize(_validatorSet, _states);
            TestUtils.AssertBencodexEqual(
                Dictionary.Empty
                    .Add("type_id", 2)
                    .Add(
                        "values",
                        new List(
                            _validatorSet.Bencoded,
                            Dictionary.Empty.Add(
                                default(Address).ToByteArray(),
                                "initial value"))),
                action.PlainValue);
        }

        [Fact]
        public void Deserialize()
        {
            var encoded = Dictionary.Empty
                .Add("type_id", 2)
                .Add(
                    "values",
                    new List(
                        _validatorSet.Bencoded,
                        Dictionary.Empty.Add(
                            default(Address).ToByteArray(),
                            "initial value")));
            var action = new Initialize();
            action.LoadPlainValue(encoded);

            Assert.Equal(_validatorSet, action.ValidatorSet);
            Assert.Equal(_states, action.States);
        }
    }
}
