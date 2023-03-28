using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Numerics;
using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Action.Sys;
using Libplanet.Blocks;
using Libplanet.Consensus;
using Libplanet.Crypto;
using Xunit;
using static Libplanet.Tests.TestUtils;
using Random = System.Random;

namespace Libplanet.Tests.Action.Sys
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
            var random = new Random();
            Address signer = random.NextAddress();
            var prevStates = new AccountStateDeltaImpl(
                accountStateGetter: _ => new List(),
                accountBalanceGetter: (_, c) => c * 0,
                totalSupplyGetter: c => c * 0,
                validatorSetGetter: () => new ValidatorSet(),
                signer: signer
            );
            BlockHash genesisHash = random.NextBlockHash();
            var context = new ActionContext(
                signer: signer,
                txid: random.NextTxId(),
                miner: random.NextAddress(),
                blockIndex: 0,
                previousStates: prevStates,
                randomSeed: 123,
                rehearsal: false,
                previousBlockStatesTrie: null,
                blockAction: false,
                genesisHash: genesisHash
            );
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
            var random = new Random();
            Address signer = random.NextAddress();
            var prevStates = new AccountStateDeltaImpl(
                accountStateGetter: _ => new List(),
                accountBalanceGetter: (_, c) => c * 0,
                totalSupplyGetter: c => c * 0,
                validatorSetGetter: () => new ValidatorSet(),
                signer: signer
            );
            BlockHash genesisHash = random.NextBlockHash();
            var context = new ActionContext(
                signer: signer,
                txid: random.NextTxId(),
                miner: random.NextAddress(),
                blockIndex: 10,
                previousStates: prevStates,
                randomSeed: 123,
                rehearsal: false,
                previousBlockStatesTrie: null,
                blockAction: false,
                genesisHash: genesisHash
            );
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
            AssertBencodexEqual(
                new List(
                    _validatorSet.Encoded,
                    Dictionary.Empty.Add(default(Address).ToByteArray(), "initial value")
                ),
                action.PlainValue
            );
        }

        [Fact]
        public void Deserialize()
        {
            var encoded = new List(
                _validatorSet.Encoded,
                Dictionary.Empty.Add(default(Address).ToByteArray(), "initial value")
            );
            var action = new Initialize();
            action.LoadPlainValue(encoded);

            Assert.Equal(_validatorSet, action.ValidatorSet);
            Assert.Equal(_states, action.States);
        }
    }
}
