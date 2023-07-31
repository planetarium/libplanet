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

        private static readonly ImmutableDictionary<Address, IValue> _states =
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
            var prevState = Account.Create(MockAccountState.Empty);
            BlockHash genesisHash = random.NextBlockHash();
            var context = new ActionContext(
                signer: signer,
                txid: random.NextTxId(),
                miner: random.NextAddress(),
                blockIndex: 0,
                blockProtocolVersion: Block.CurrentProtocolVersion,
                previousState: prevState,
                randomSeed: 123,
                gasLimit: 0,
                rehearsal: false);
            var initialize = new Initialize(
                states: _states,
                validatorSet: _validatorSet
            );

            var nextStates = initialize.Execute(context);

            Assert.Equal(_validatorSet, nextStates.GetValidatorSet());
            Assert.Equal(_states[default], nextStates.GetState(default));
        }

        [Fact]
        public void ExecuteInNonGenesis()
        {
            var random = new System.Random();
            Address signer = random.NextAddress();
            var prevState = Account.Create(MockAccountState.Empty);
            BlockHash genesisHash = random.NextBlockHash();
            var context = new ActionContext(
                signer: signer,
                txid: random.NextTxId(),
                miner: random.NextAddress(),
                blockIndex: 10,
                blockProtocolVersion: Block.CurrentProtocolVersion,
                previousState: prevState,
                randomSeed: 123,
                gasLimit: long.MaxValue,
                rehearsal: false);
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
                            Dictionary.Empty.Add(default(Address).ToByteArray(), "initial value"))),
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
                        Dictionary.Empty.Add(default(Address).ToByteArray(), "initial value")));
            var action = new Initialize();
            action.LoadPlainValue(encoded);

            Assert.Equal(_validatorSet, action.ValidatorSet);
            Assert.Equal(_states, action.States);
        }
    }
}
