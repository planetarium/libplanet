using System;
using System.Linq;
using System.Numerics;
using Libplanet.Action;
using Libplanet.Action.Loader;
using Libplanet.Action.State;
using Libplanet.Action.Tests;
using Libplanet.Action.Tests.Common;
using Libplanet.Blockchain;
using Libplanet.Blockchain.Policies;
using Libplanet.Crypto;
using Libplanet.Mocks;
using Libplanet.Store;
using Libplanet.Store.Trie;
using Libplanet.Types.Assets;
using Libplanet.Types.Blocks;
using Libplanet.Types.Consensus;
using Libplanet.Types.Tx;
using Xunit;
using Xunit.Abstractions;

namespace Libplanet.Tests.Action
{
    public abstract class WorldTest
    {
        protected readonly PrivateKey[] _keys;

        /// <summary>
        /// A list of <see cref="Address"/>es used for testing derived from <c>_keys</c>.
        /// </summary>
        protected readonly Address[] _addr;

        /// <summary>
        /// A list of <see cref="Currency"><c>Currencies</c></see> used for testing:
        /// <list type="bullet">
        ///     <item><description>
        ///         <c>_currencies[0]</c>: Legacy AAA with no minters.
        ///     </description></item>
        ///     <item><description>
        ///         <c>_currencies[1]</c>: Legacy BBB with two decimal places and no minters.
        ///     </description></item>
        ///     <item><description>
        ///         <c>_currencies[2]</c>: Legacy CCC with <c>_addresses[0]</c> as its minter.
        ///     </description></item>
        ///     <item><description>
        ///         <c>_currencies[3]</c>: Legacy DDD with <c>_addresses[0]</c>
        ///         and <c>_addresses[1]</c> as its minters.
        ///     </description></item>
        ///     <item><description>
        ///         <c>_currencies[3]</c>: Uncapped EEE with <c>_addresses[0]</c> as its minter.
        ///     </description></item>
        ///     <item><description>
        ///         <c>_currencies[4]</c>: Capped FFF with <c>_addresses[0]</c> as its minter.
        ///     </description></item>
        /// </list>
        /// Unless explicitly specified, each <see cref="Currency"/> has zero decimal places.
        /// </summary>
        protected readonly Currency[] _currencies;

        /// <summary>
        /// An initial <see cref="IWorld"/> state set up for testing:
        /// <list type="bullet">
        ///     <item><description>
        ///         <c>_addresses[0]</c>: Has 5 AAA, 10 CCC, 5 EEE.
        ///     </description></item>
        ///     <item><description>
        ///         <c>_addresses[1]</c>: Has 15 CCC, 20 DDD.
        ///     </description></item>
        ///     <item><description>
        ///         Validators: Each address is a validator of power 1.
        ///     </description></item>
        /// </list>
        /// </summary>
        protected readonly IWorld _initWorld;
        protected readonly IActionContext _initContext;

        protected WorldTest(ITestOutputHelper output)
        {
            _keys = new[]
            {
                Currencies.MinterAKey,
                Currencies.MinterBKey,
                new PrivateKey(),
                new PrivateKey(),
            };

            _addr = _keys.Select(key => key.Address).ToArray();

            _currencies = new[]
            {
                Currencies.CurrencyA,
                Currencies.CurrencyB,
                Currencies.CurrencyC,
                Currencies.CurrencyD,
                Currencies.CurrencyE,
                Currencies.CurrencyF,
            };

            MockWorldState initMockWorldState =
                ProtocolVersion >= BlockMetadata.WorldStateProtocolVersion
                    ? MockWorldState.CreateModern(version: ProtocolVersion)
                    : MockWorldState.CreateLegacy();
            _initWorld = new World(initMockWorldState
                .SetBalance(_addr[0], _currencies[0], 5)
                .SetBalance(_addr[0], _currencies[2], 10)
                .SetBalance(_addr[0], _currencies[4], 5)
                .SetBalance(_addr[1], _currencies[2], 15)
                .SetBalance(_addr[1], _currencies[3], 20)
                .SetValidatorSet(new ValidatorSet(_keys
                    .Select(key => new Validator(key.PublicKey, 1))
                    .ToList())));

            output.WriteLine("Fixtures  Address");
            int i = 0;
            foreach (Address address in _addr)
            {
                output.WriteLine(
                    "_addr[{0}]  {1}  {2,6}  {3,6}  {4,6}  {5,6}  {6,6}  {7,6}",
                    i++,
                    address,
                    _initWorld.GetBalance(address, _currencies[0]),
                    _initWorld.GetBalance(address, _currencies[1]),
                    _initWorld.GetBalance(address, _currencies[2]),
                    _initWorld.GetBalance(address, _currencies[3]),
                    _initWorld.GetBalance(address, _currencies[4]),
                    _initWorld.GetBalance(address, _currencies[5]));
            }

            output.WriteLine("Validators: {0}", _initWorld.GetValidatorSet());

            _initContext = CreateContext(_initWorld, _addr[0]);
        }

        public abstract int ProtocolVersion { get; }

        public IActionContext CreateContext(IWorld world, Address signer)
        {
            return new ActionContext(
                signer,
                null,
                signer,
                0,
                ProtocolVersion,
                null,
                world,
                0,
                false,
                null);
        }

        [Fact]
        public void InitialSetup()
        {
            // All non-zero balances.
            Assert.Equal(Value(0, 5), _initWorld.GetBalance(_addr[0], _currencies[0]));
            Assert.Equal(Value(2, 10), _initWorld.GetBalance(_addr[0], _currencies[2]));
            Assert.Equal(Value(4, 5), _initWorld.GetBalance(_addr[0], _currencies[4]));
            Assert.Equal(Value(2, 15), _initWorld.GetBalance(_addr[1], _currencies[2]));
            Assert.Equal(Value(3, 20), _initWorld.GetBalance(_addr[1], _currencies[3]));

            // Exhaustive check for the rest.
            Assert.Equal(Value(1, 0), _initWorld.GetBalance(_addr[0], _currencies[1]));
            Assert.Equal(Value(3, 0), _initWorld.GetBalance(_addr[0], _currencies[3]));
            Assert.Equal(Value(5, 0), _initWorld.GetBalance(_addr[0], _currencies[5]));

            Assert.Equal(Value(0, 0), _initWorld.GetBalance(_addr[1], _currencies[0]));
            Assert.Equal(Value(1, 0), _initWorld.GetBalance(_addr[1], _currencies[1]));
            Assert.Equal(Value(4, 0), _initWorld.GetBalance(_addr[1], _currencies[4]));
            Assert.Equal(Value(5, 0), _initWorld.GetBalance(_addr[1], _currencies[5]));

            Assert.Equal(Value(0, 0), _initWorld.GetBalance(_addr[2], _currencies[0]));
            Assert.Equal(Value(1, 0), _initWorld.GetBalance(_addr[2], _currencies[1]));
            Assert.Equal(Value(2, 0), _initWorld.GetBalance(_addr[2], _currencies[2]));
            Assert.Equal(Value(3, 0), _initWorld.GetBalance(_addr[2], _currencies[3]));
            Assert.Equal(Value(4, 0), _initWorld.GetBalance(_addr[2], _currencies[4]));
            Assert.Equal(Value(5, 0), _initWorld.GetBalance(_addr[2], _currencies[5]));

            Assert.Equal(Value(0, 0), _initWorld.GetBalance(_addr[3], _currencies[0]));
            Assert.Equal(Value(1, 0), _initWorld.GetBalance(_addr[3], _currencies[1]));
            Assert.Equal(Value(2, 0), _initWorld.GetBalance(_addr[3], _currencies[2]));
            Assert.Equal(Value(3, 0), _initWorld.GetBalance(_addr[3], _currencies[3]));
            Assert.Equal(Value(4, 0), _initWorld.GetBalance(_addr[3], _currencies[4]));
            Assert.Equal(Value(5, 0), _initWorld.GetBalance(_addr[3], _currencies[5]));
        }

        [Fact]
        public virtual void FungibleAssets()
        {
            IWorld world = _initWorld.TransferAsset(
                _initContext, _addr[1], _addr[2], Value(3, 5));
            Assert.Equal(Value(0, 5), world.GetBalance(_addr[0], _currencies[0]));
            Assert.Equal(Value(2, 10), world.GetBalance(_addr[0], _currencies[2]));
            Assert.Equal(Value(4, 5), world.GetBalance(_addr[0], _currencies[4]));
            Assert.Equal(Value(2, 15), world.GetBalance(_addr[1], _currencies[2]));
            Assert.Equal(Value(3, 15), world.GetBalance(_addr[1], _currencies[3]));
            Assert.Equal(Value(3, 5), world.GetBalance(_addr[2], _currencies[3]));

            var accountDiff = AccountDiff.Create(
                _initContext.PreviousState.GetAccount(ReservedAddresses.LegacyAccount).Trie,
                world.GetAccount(ReservedAddresses.LegacyAccount).Trie);
            Assert.Empty(accountDiff.StateDiffs);
        }

        [Fact]
        public void TransferAsset()
        {
            Assert.Throws<ArgumentOutOfRangeException>(() =>
                _initWorld.TransferAsset(_initContext, _addr[0], _addr[1], Value(0, 0)));
            Assert.Throws<ArgumentOutOfRangeException>(() =>
                _initWorld.TransferAsset(_initContext, _addr[0], _addr[1], Value(0, -1)));
            Assert.Throws<InsufficientBalanceException>(() =>
                _initWorld.TransferAsset(_initContext, _addr[0], _addr[1], Value(0, 6)));

            IWorld world = _initWorld.TransferAsset(_initContext, _addr[0], _addr[1], Value(0, 4));
            Assert.Equal(Value(0, 1), world.GetBalance(_addr[0], _currencies[0]));
            Assert.Equal(Value(0, 4), world.GetBalance(_addr[1], _currencies[0]));

            world = _initWorld.TransferAsset(_initContext, _addr[0], _addr[0], Value(0, 2));
            if (ProtocolVersion >= BlockMetadata.TransferFixProtocolVersion)
            {
                Assert.Equal(Value(0, 5), world.GetBalance(_addr[0], _currencies[0]));
            }
            else
            {
                Assert.Equal(Value(0, 7), world.GetBalance(_addr[0], _currencies[0]));
            }
        }

        [Fact]
        public virtual void TransferAssetInBlock()
        {
            var store = new MemoryStore();
            var stateStore = new TrieStateStore(new MemoryKeyValueStore());
            var privateKey = new PrivateKey();
            BlockChain chain = TestUtils.MakeBlockChain(
                new NullBlockPolicy(),
                store,
                stateStore,
                new SingleActionLoader(typeof(DumbAction)),
                protocolVersion: ProtocolVersion,
                privateKey: privateKey
            );

            // Mint
            DumbAction action = DumbAction.Create(null, (null, _addr[1], 20));
            Transaction tx = Transaction.Create(
                0,
                _keys[0],
                chain.Genesis.Hash,
                new[] { action }.ToPlainValues());
            var block1PreEval = TestUtils.ProposeNext(
                chain.Tip,
                new[] { tx },
                miner: privateKey.PublicKey,
                protocolVersion: ProtocolVersion);
            var stateRootHash =
                chain.DetermineBlockPrecededStateRootHash(block1PreEval, out _);
            var hash = block1PreEval.Header.DeriveBlockHash(stateRootHash, null);
            Block block1 = ProtocolVersion >= BlockMetadata.SignatureProtocolVersion
                ? chain.EvaluateAndSign(block1PreEval, privateKey)
                : new Block(block1PreEval, (stateRootHash, null, hash));
            chain.Append(block1, TestUtils.CreateBlockCommit(block1));
            Assert.Equal(
                DumbAction.DumbCurrency * 0,
                chain
                    .GetNextWorldState()
                    .GetBalance(_addr[0], DumbAction.DumbCurrency));
            Assert.Equal(
                DumbAction.DumbCurrency * 20,
                chain
                    .GetNextWorldState()
                    .GetBalance(_addr[1], DumbAction.DumbCurrency));

            // Transfer
            action = DumbAction.Create(null, (_addr[1], _addr[0], 5));
            tx = Transaction.Create(
                1,
                _keys[0],
                chain.Genesis.Hash,
                new[] { action }.ToPlainValues());
            var block2PreEval = TestUtils.ProposeNext(
                chain.Tip,
                new[] { tx },
                miner: privateKey.PublicKey,
                protocolVersion: ProtocolVersion,
                lastCommit: chain.GetBlockCommit(chain.Tip.Index));
            stateRootHash = chain.DetermineBlockPrecededStateRootHash(block2PreEval, out _);
            hash = block2PreEval.Header.DeriveBlockHash(stateRootHash, null);
            Block block2 = ProtocolVersion >= BlockMetadata.SignatureProtocolVersion
                ? chain.EvaluateAndSign(block2PreEval, privateKey)
                : new Block(block2PreEval, (stateRootHash, null, hash));
            chain.Append(block2, TestUtils.CreateBlockCommit(block2));
            Assert.Equal(
                DumbAction.DumbCurrency * 5,
                chain
                    .GetNextWorldState()
                    .GetBalance(_addr[0], DumbAction.DumbCurrency));
            Assert.Equal(
                DumbAction.DumbCurrency * 15,
                chain
                    .GetNextWorldState()
                    .GetBalance(_addr[1], DumbAction.DumbCurrency));

            // Transfer bugged
            action = DumbAction.Create((_addr[0], "a"), (_addr[0], _addr[0], 1));
            tx = Transaction.Create(
                chain.GetNextTxNonce(_addr[0]),
                _keys[0],
                chain.Genesis.Hash,
                new[] { action }.ToPlainValues());
            var block3PreEval = TestUtils.ProposeNext(
                chain.Tip,
                new[] { tx },
                miner: _keys[1].PublicKey,
                protocolVersion: ProtocolVersion,
                lastCommit: chain.GetBlockCommit(chain.Tip.Index));
            stateRootHash = chain.DetermineBlockPrecededStateRootHash(block3PreEval, out _);
            hash = block3PreEval.Header.DeriveBlockHash(stateRootHash, null);
            Block block3 = ProtocolVersion >= BlockMetadata.SignatureProtocolVersion
                ? chain.EvaluateAndSign(block3PreEval, _keys[1])
                : new Block(block3PreEval, (stateRootHash, null, hash));
            chain.Append(block3, TestUtils.CreateBlockCommit(block3));
            Assert.Equal(
                DumbAction.DumbCurrency * 5,
                chain.GetWorldState().GetBalance(_addr[0], DumbAction.DumbCurrency));
        }

        [Fact]
        public void MintAsset()
        {
            Assert.Throws<ArgumentOutOfRangeException>(() =>
                _initWorld.MintAsset(_initContext, _addr[0], Value(0, 0)));
            Assert.Throws<ArgumentOutOfRangeException>(() =>
                _initWorld.MintAsset(_initContext, _addr[0], Value(0, -1)));

            IWorld delta0 = _initWorld;
            IActionContext context0 = _initContext;
            // currencies[0] (AAA) allows everyone to mint
            delta0 = delta0.MintAsset(context0, _addr[2], Value(0, 10));
            Assert.Equal(Value(0, 10), delta0.GetBalance(_addr[2], _currencies[0]));

            // currencies[2] (CCC) allows only _addr[0] to mint
            delta0 = delta0.MintAsset(context0, _addr[0], Value(2, 10));
            Assert.Equal(Value(2, 20), delta0.GetBalance(_addr[0], _currencies[2]));

            // currencies[3] (DDD) allows _addr[0] & _addr[1] to mint
            delta0 = delta0.MintAsset(context0, _addr[1], Value(3, 10));
            Assert.Equal(Value(3, 30), delta0.GetBalance(_addr[1], _currencies[3]));

            // currencies[5] (FFF) has a cap of 100
            Assert.Throws<SupplyOverflowException>(
                () => _initWorld.MintAsset(_initContext, _addr[0], Value(5, 200)));

            IWorld delta1 = _initWorld;
            IActionContext context1 = CreateContext(delta1, _addr[1]);
            // currencies[0] (DDD) allows everyone to mint
            delta1 = delta1.MintAsset(context1, _addr[2], Value(0, 10));
            Assert.Equal(Value(0, 10), delta1.GetBalance(_addr[2], _currencies[0]));

            // currencies[2] (CCC) disallows _addr[1] to mint
            Assert.Throws<CurrencyPermissionException>(() =>
                delta1.MintAsset(context1, _addr[1], Value(2, 10)));

            // currencies[3] (DDD) allows _addr[0] & _addr[1] to mint
            delta1 = delta1.MintAsset(context1, _addr[0], Value(3, 20));
            Assert.Equal(Value(3, 20), delta1.GetBalance(_addr[0], _currencies[3]));
        }

        [Fact]
        public virtual void BurnAsset()
        {
            Assert.Throws<ArgumentOutOfRangeException>(() =>
                _initWorld.BurnAsset(_initContext, _addr[0], Value(0, 0)));
            Assert.Throws<ArgumentOutOfRangeException>(() =>
                _initWorld.BurnAsset(_initContext, _addr[0], Value(0, -1)));
            Assert.Throws<InsufficientBalanceException>(() =>
                _initWorld.BurnAsset(_initContext, _addr[0], Value(0, 6)));

            IWorld delta0 = _initWorld;
            IActionContext context0 = _initContext;
            // currencies[0] (AAA) allows everyone to burn
            delta0 = delta0.BurnAsset(context0, _addr[0], Value(0, 2));
            Assert.Equal(Value(0, 3), delta0.GetBalance(_addr[0], _currencies[0]));

            // currencies[2] (CCC) allows only _addr[0] to burn
            delta0 = delta0.BurnAsset(context0, _addr[0], Value(2, 4));
            Assert.Equal(Value(2, 6), delta0.GetBalance(_addr[0], _currencies[2]));

            // currencies[3] (DDD) allows _addr[0] & _addr[1] to burn
            delta0 = delta0.BurnAsset(context0, _addr[1], Value(3, 8));
            Assert.Equal(Value(3, 12), delta0.GetBalance(_addr[1], _currencies[3]));

            IWorld delta1 = _initWorld;
            IActionContext context1 = CreateContext(delta1, _addr[1]);
            // currencies[0] (AAA) allows everyone to burn
            delta1 = delta1.BurnAsset(context1, _addr[0], Value(0, 2));
            Assert.Equal(Value(0, 3), delta1.GetBalance(_addr[0], _currencies[0]));

            // currencies[2] (CCC) disallows _addr[1] to burn
            Assert.Throws<CurrencyPermissionException>(() =>
                delta1.BurnAsset(context1, _addr[0], Value(2, 4)));

            // currencies[3] (DDD) allows _addr[0] & _addr[1] to burn
            delta1 = delta1.BurnAsset(context1, _addr[1], Value(3, 8));
            Assert.Equal(Value(3, 12), delta1.GetBalance(_addr[1], _currencies[3]));
        }

        [Fact]
        public virtual void SetValidatorSet()
        {
            const int newValidatorCount = 6;
            var world = _initWorld;
            var keys = Enumerable
                .Range(0, newValidatorCount)
                .Select(i => new PrivateKey())
                .ToList();

            var validatorSet = new ValidatorSet(
                keys.Select(key => new Validator(key.PublicKey, 1)).ToList());
            world = world.SetValidatorSet(validatorSet);
            Assert.Equal(newValidatorCount, world.GetValidatorSet().TotalCount);
            Assert.NotEqual(_initWorld.GetValidatorSet(), world.GetValidatorSet());
            var oldValidatorSetRawValue = world
                .GetAccountState(ReservedAddresses.LegacyAccount)
                .Trie[KeyConverters.ValidatorSetKey];
            var newValidatorSetRawValue = world
                .GetAccountState(ReservedAddresses.ValidatorSetAccount)
                .Trie[KeyConverters.ToStateKey(ValidatorSetAccount.ValidatorSetAddress)];
            if (ProtocolVersion >= BlockMetadata.ValidatorSetAccountProtocolVersion)
            {
                Assert.Null(oldValidatorSetRawValue);
                Assert.NotNull(newValidatorSetRawValue);
            }
            else
            {
                Assert.NotNull(oldValidatorSetRawValue);
                Assert.Null(newValidatorSetRawValue);
            }

            world = world.SetValidatorSet(new ValidatorSet());
            Assert.Equal(0, world.GetValidatorSet().TotalCount);
            oldValidatorSetRawValue =
                world.GetAccountState(ReservedAddresses.LegacyAccount).Trie[
                    KeyConverters.ValidatorSetKey];
            newValidatorSetRawValue =
                world.GetAccountState(ReservedAddresses.ValidatorSetAccount).Trie[
                    KeyConverters.ToStateKey(ValidatorSetAccount.ValidatorSetAddress)];
            if (ProtocolVersion >= BlockMetadata.ValidatorSetAccountProtocolVersion)
            {
                Assert.Null(oldValidatorSetRawValue);
                Assert.NotNull(newValidatorSetRawValue);
            }
            else
            {
                Assert.NotNull(oldValidatorSetRawValue);
                Assert.Null(newValidatorSetRawValue);
            }
        }

        [Fact]
        public virtual void TotalSupplyTracking()
        {
            IWorld world = _initWorld;
            IActionContext context = _initContext;

            if (ProtocolVersion >= BlockMetadata.CurrencyAccountProtocolVersion)
            {
                Assert.Equal(
                    Value(0, 5),
                    world.GetTotalSupply(_currencies[0]));
            }
            else
            {
                Assert.Equal(
                    Value(0, 0),
                    world.GetTotalSupply(_currencies[0]));
            }

            Assert.Equal(
                Value(4, 5),
                _initWorld.GetTotalSupply(_currencies[4]));

            world = world.MintAsset(context, _addr[0], Value(0, 10));
            if (ProtocolVersion >= BlockMetadata.CurrencyAccountProtocolVersion)
            {
                Assert.Equal(
                    Value(0, 15),
                    world.GetTotalSupply(_currencies[0]));
            }
            else
            {
                Assert.Equal(
                    Value(0, 0),
                    world.GetTotalSupply(_currencies[0]));
            }

            world = world.MintAsset(context, _addr[0], Value(4, 10));
            Assert.Equal(
                Value(4, 15),
                world.GetTotalSupply(_currencies[4]));

            Assert.Throws<InsufficientBalanceException>(() =>
                world.BurnAsset(context, _addr[0], Value(4, 100)));

            world = world.BurnAsset(context, _addr[0], Value(4, 5));
            Assert.Equal(
                Value(4, 10),
                world.GetTotalSupply(_currencies[4]));
        }

        protected FungibleAssetValue Value(int currencyIndex, BigInteger quantity) =>
            new FungibleAssetValue(_currencies[currencyIndex], quantity, 0);
    }
}
