#nullable disable
using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Diagnostics;
using System.Diagnostics.CodeAnalysis;
using System.Diagnostics.Contracts;
using System.Globalization;
using System.Linq;
using System.Numerics;
using System.Security.Cryptography;
using System.Threading;
using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Assets;
using Libplanet.Blockchain.Policies;
using Libplanet.Blockchain.Renderers;
using Libplanet.Blocks;
using Libplanet.Consensus;
using Libplanet.Crypto;
using Libplanet.Store;
using Libplanet.Store.Trie;
using Libplanet.Tx;
using Serilog;
using static Libplanet.Blockchain.KeyConverters;

namespace Libplanet.Blockchain
{
    /// <summary>
    /// <para>
    /// A class have <see cref="Block{T}"/>s, <see cref="Transaction{T}"/>s, and the chain
    /// information.
    /// </para>
    /// <para>
    /// In order to watch its state changes, implement <see cref="IRenderer{T}"/> interface
    /// and pass it to the <see cref="BlockChain{T}(IBlockPolicy{T}, IStagePolicy{T},
    /// IStore, IStateStore, Block{T}, IEnumerable{IRenderer{T}})"/> constructor.
    /// </para>
    /// </summary>
    /// <remarks>This object is guaranteed that it has at least one block, since it takes a genesis
    /// block when it's instantiated.</remarks>
    /// <typeparam name="T">An <see cref="IAction"/> type.  It should match
    /// to <see cref="Block{T}"/>'s type parameter.</typeparam>
    public partial class BlockChain<T> : IBlockChainStates
        where T : IAction, new()
    {
        // FIXME: The _rwlock field should be private.
        [SuppressMessage(
            "StyleCop.CSharp.OrderingRules",
            "SA1401:FieldsMustBePrivate",
            Justification = "Temporary visibility.")]
        internal readonly ReaderWriterLockSlim _rwlock;
        private readonly object _txLock;
        private readonly ILogger _logger;
        private readonly IBlockChainStates _blockChainStates;

        /// <summary>
        /// All <see cref="Block{T}"/>s in the <see cref="BlockChain{T}"/>
        /// storage, including orphan <see cref="Block{T}"/>s.
        /// Keys are <see cref="Block{T}.Hash"/>es and values are
        /// their corresponding <see cref="Block{T}"/>s.
        /// </summary>
        private IDictionary<BlockHash, Block<T>> _blocks;

        /// <summary>
        /// Cached genesis block.
        /// </summary>
        private Block<T> _genesis;

        /// <summary>
        /// Initializes a new instance of the <see cref="BlockChain{T}"/> class by loading
        /// the canonical chain from given <paramref name="store"/>.
        /// </summary>
        /// <param name="policy"><see cref="IBlockPolicy{T}"/> to use in the
        /// <see cref="BlockChain{T}"/>.</param>
        /// <param name="stagePolicy">The staging policy to follow.</param>
        /// <param name="store"><see cref="IStore"/> to store <see cref="Block{T}"/>s,
        /// <see cref="Transaction{T}"/>s, and <see cref="BlockChain{T}"/> information.</param>
        /// <param name="genesisBlock">The genesis <see cref="Block{T}"/> of
        /// the <see cref="BlockChain{T}"/>, which is a part of the consensus.
        /// If the given <paramref name="store"/> already contains the genesis block
        /// it checks if the existing genesis block and this argument is the same.
        /// If the <paramref name="store"/> has no genesis block yet this argument will
        /// be used for that.</param>
        /// <param name="renderers">Listens state changes on the created chain.  Listens nothing
        /// by default or if it is <see langword="null"/>.  Note that action renderers receive
        /// events made by unsuccessful transactions too; see also
        /// <see cref="AtomicActionRenderer{T}"/> for workaround.</param>
        /// <param name="stateStore"><see cref="IStateStore"/> to store states.</param>
        /// <exception cref="ArgumentException">Thrown when <paramref name="store"/> does not
        /// have canonical chain id set, i.e. <see cref="IStore.GetCanonicalChainId()"/> is
        /// <see langword="null"/>.</exception>
        /// <exception cref="ArgumentNullException">Thrown when either of <paramref name="store"/>
        /// or <paramref name="stateStore"/> is <see langword="null"/>.</exception>
        /// <exception cref="InvalidGenesisBlockException">Thrown when the <paramref name="store"/>
        /// has a genesis block and it does not match to what the network expects
        /// (i.e., <paramref name="genesisBlock"/>).</exception>
        public BlockChain(
            IBlockPolicy<T> policy,
            IStagePolicy<T> stagePolicy,
            IStore store,
            IStateStore stateStore,
            Block<T> genesisBlock,
            IEnumerable<IRenderer<T>> renderers = null
        )
            : this(
                policy,
                stagePolicy,
                store,
                stateStore,
                genesisBlock,
                renderers,
                new BlockChainStates(store, stateStore)
            )
        {
        }

#pragma warning disable MEN002
#pragma warning disable CS1573
        /// <inheritdoc cref="BlockChain{T}(IBlockPolicy{T}, IStagePolicy{T}, IStore, IStateStore, Block{T}, IEnumerable{IRenderer{T}})" />
        /// <param name="blockChainStates">The <see cref="IBlockChainStates"/> implementation to state lookup.</param>
        public BlockChain(
            IBlockPolicy<T> policy,
            IStagePolicy<T> stagePolicy,
            IStore store,
            IStateStore stateStore,
            Block<T> genesisBlock,
            IEnumerable<IRenderer<T>> renderers,
            IBlockChainStates blockChainStates
        )
#pragma warning restore MEN002
#pragma warning restore CS1573
            : this(
                policy,
                stagePolicy,
                store,
                stateStore,
                genesisBlock,
                renderers,
                blockChainStates,
                new ActionEvaluator(
                    _ => policy.BlockAction,
                    blockChainStates: blockChainStates,
                    trieGetter: hash =>
                        stateStore.GetStateRoot(store.GetBlockDigest(hash)?.StateRootHash),
                    genesisHash: genesisBlock.Hash,
                    nativeTokenPredicate: policy.NativeTokens.Contains,
                    actionTypeLoader: StaticActionTypeLoader.Create<T>(),
                    feeCalculator: null
                )
            )
        {
        }

#pragma warning disable MEN002
#pragma warning disable CS1573
        /// <inheritdoc cref="BlockChain{T}(IBlockPolicy{T}, IStagePolicy{T}, IStore, IStateStore, Block{T}, IEnumerable{IRenderer{T}}, IBlockChainStates)" />
        /// <param name="actionEvaluator">The <see cref="ActionEvaluator" /> implementation to calculate next states when append new blocks.</param>
        public BlockChain(
            IBlockPolicy<T> policy,
            IStagePolicy<T> stagePolicy,
            IStore store,
            IStateStore stateStore,
            Block<T> genesisBlock,
            IEnumerable<IRenderer<T>> renderers,
            IBlockChainStates blockChainStates,
            ActionEvaluator actionEvaluator
        )
#pragma warning restore MEN002
#pragma warning restore CS1573
#pragma warning disable SA1118  // The parameter spans multiple lines
            : this(
                policy,
                stagePolicy,
                store,
                stateStore,
                store.GetCanonicalChainId() ??
                    throw new ArgumentException(
                        $"Given {nameof(store)} does not have canonical chain id set.",
                        nameof(store)),
                genesisBlock,
                renderers,
                blockChainStates,
                actionEvaluator
            )
        {
        }

        private BlockChain(
            IBlockPolicy<T> policy,
            IStagePolicy<T> stagePolicy,
            IStore store,
            IStateStore stateStore,
            Guid id,
            Block<T> genesisBlock,
            IEnumerable<IRenderer<T>> renderers,
            IBlockChainStates blockChainStates,
            ActionEvaluator actionEvaluator)
        {
            if (store is null)
            {
                throw new ArgumentNullException(nameof(store));
            }
            else if (store.CountIndex(id) == 0)
            {
                throw new ArgumentException(
                    $"Given store does not contain chain id {id}.", nameof(store));
            }
            else if (stateStore is null)
            {
                throw new ArgumentNullException(nameof(stateStore));
            }

            Id = id;
            Policy = policy;
            StagePolicy = stagePolicy;
            Store = store;
            StateStore = stateStore;

            _blockChainStates = blockChainStates;

            _blocks = new BlockSet<T>(store);
            Renderers = renderers is IEnumerable<IRenderer<T>> r
                ? r.ToImmutableArray()
                : ImmutableArray<IRenderer<T>>.Empty;
            ActionRenderers = Renderers.OfType<IActionRenderer<T>>().ToImmutableArray();
            _rwlock = new ReaderWriterLockSlim(LockRecursionPolicy.SupportsRecursion);
            _txLock = new object();

            _logger = Log
                .ForContext<BlockChain<T>>()
                .ForContext("Source", nameof(BlockChain<T>))
                .ForContext("ChainId", Id);
            ActionEvaluator = actionEvaluator;

            if (!Genesis.Equals(genesisBlock))
            {
                string msg =
                    $"The genesis block that the given {nameof(IStore)} contains does not match " +
                    "to the genesis block that the network expects.  You might pass the wrong " +
                    "store which is incompatible with this chain.  Or your network might " +
                    "restarted the chain with a new genesis block so that it is incompatible " +
                    "with your existing chain in the local store.";
                throw new InvalidGenesisBlockException(
                    message: msg,
                    networkExpected: genesisBlock.Hash,
                    stored: Genesis.Hash
                );
            }
        }

        ~BlockChain()
        {
            _rwlock?.Dispose();
        }

        /// <summary>
        /// An event which is invoked when <see cref="Tip"/> is changed.
        /// </summary>
        // FIXME: This should be completely replaced by IRenderer<T>.RenderBlock() or any other
        // alternatives.
        internal event EventHandler<(Block<T> OldTip, Block<T> NewTip)> TipChanged;

        /// <summary>
        /// The list of registered renderers listening the state changes.
        /// </summary>
        /// <remarks>
        /// Since this value is immutable, renderers cannot be registered after once a <see
        /// cref="BlockChain{T}"/> object is instantiated; use <c>renderers</c> option of <see cref=
        /// "BlockChain{T}(IBlockPolicy{T}, IStagePolicy{T}, IStore, IStateStore, Block{T},
        /// IEnumerable{IRenderer{T}})"/>
        /// constructor instead.
        /// </remarks>
        public IImmutableList<IRenderer<T>> Renderers { get; }

        /// <summary>
        /// A filtered list, from <see cref="Renderers"/>, which contains only <see
        /// cref="IActionRenderer{T}"/> instances.
        /// </summary>
        public IImmutableList<IActionRenderer<T>> ActionRenderers { get; }

        /// <summary>
        /// The block and blockchain policy.
        /// </summary>
        public IBlockPolicy<T> Policy { get; }

        /// <summary>
        /// The staging policy.
        /// </summary>
        public IStagePolicy<T> StagePolicy { get; set; }

        /// <summary>
        /// The topmost <see cref="Block{T}"/> of the current blockchain.
        /// </summary>
        public Block<T> Tip => this[-1];

        /// <summary>
        /// The first <see cref="Block{T}"/> in the <see cref="BlockChain{T}"/>.
        /// </summary>
        public Block<T> Genesis => _genesis ??= this[0];

        public Guid Id { get; private set; }

        /// <summary>
        /// All <see cref="Block{T}.Hash"/>es in the current index.  The genesis block's hash goes
        /// first, and the tip goes last.
        /// Returns a <see cref="long"/> integer that represents the number of elements in the
        /// <see cref="BlockChain{T}"/>.
        /// </summary>
        public IEnumerable<BlockHash> BlockHashes => IterateBlockHashes();

        /// <summary>
        /// Returns a <see cref="long"/> integer that represents the number of elements in the
        /// <see cref="BlockChain{T}"/>.
        /// </summary>
        /// <returns>A number that represents how many elements in the <see cref="BlockChain{T}"/>.
        /// </returns>
        public long Count => Store.CountIndex(Id);

        internal IStore Store { get; }

        internal IStateStore StateStore { get; }

        internal ActionEvaluator ActionEvaluator { get; }

        /// <summary>
        /// Whether the instance is canonical or not.
        /// </summary>
        internal bool IsCanonical => Store.GetCanonicalChainId() is Guid guid && Id == guid;

        /// <summary>
        /// Gets the block corresponding to the <paramref name="index"/>.
        /// </summary>
        /// <param name="index">A number of index of <see cref="Block{T}"/>.</param>
        /// <exception cref="ArgumentOutOfRangeException">Thrown when the given index of
        /// <see cref="Block{T}"/> does not exist.</exception>
        public Block<T> this[int index] => this[(long)index];

        /// <summary>
        /// Gets the block corresponding to the <paramref name="index"/>.
        /// </summary>
        /// <param name="index">A number of index of <see cref="Block{T}"/>.</param>
        /// <exception cref="ArgumentOutOfRangeException">Thrown when the given index of
        /// <see cref="Block{T}"/> does not exist.</exception>
        public Block<T> this[long index]
        {
            get
            {
                _rwlock.EnterReadLock();
                try
                {
                    BlockHash? blockHash = Store.IndexBlockHash(Id, index);
                    return blockHash is { } bh
                        ? _blocks[bh]
                        : throw new ArgumentOutOfRangeException();
                }
                finally
                {
                    _rwlock.ExitReadLock();
                }
            }
        }

        /// <summary>
        /// Gets the block corresponding to the <paramref name="blockHash"/>.
        /// </summary>
        /// <param name="blockHash">A <see cref="Block{T}.Hash"/> of the <see cref="Block{T}"/> to
        /// get. </param>
        /// <exception cref="KeyNotFoundException">Thrown when there is no <see cref="Block{T}"/>
        /// with a given <paramref name="blockHash"/>.</exception>
        public Block<T> this[in BlockHash blockHash]
        {
            get
            {
                if (!ContainsBlock(blockHash))
                {
                    throw new KeyNotFoundException(
                        $"The given hash[{blockHash}] was not found in this chain."
                    );
                }

                _rwlock.EnterReadLock();
                try
                {
                    return _blocks[blockHash];
                }
                finally
                {
                    _rwlock.ExitReadLock();
                }
            }
        }

#pragma warning disable SA1611
        /// <summary>
        /// Creates a new instance of <see cref="BlockChain{T}"/> from an empty
        /// <see cref="IStore"/>.
        /// </summary>
        /// <returns>A newly created <see cref="BlockChain{T}"/>.</returns>
        /// <exception cref="ArgumentNullException">Thrown when either <paramref name="store"/>
        /// or <paramref name="stateStore"/> is <see langword="null"/>.</exception>
        /// <exception cref="ArgumentException">Thrown when <paramref name="store"/> already has a
        /// canonical chain id.</exception>
        public static BlockChain<T> Create(
            IBlockPolicy<T> policy,
            IStagePolicy<T> stagePolicy,
            IStore store,
            IStateStore stateStore,
            Block<T> genesisBlock,
            IEnumerable<IRenderer<T>> renderers = null,
            IBlockChainStates blockChainStates = null,
            ActionEvaluator actionEvaluator = null)
#pragma warning restore SA1611  // The documentation for parameters are missing.
        {
            if (store is null)
            {
                throw new ArgumentNullException(nameof(store));
            }
            else if (stateStore is null)
            {
                throw new ArgumentNullException(nameof(stateStore));
            }
            else if (store.GetCanonicalChainId() is { } canonId)
            {
                throw new ArgumentException(
                    $"Given {nameof(store)} already has its canonical chain id set: {canonId}",
                    nameof(store));
            }

            // Extract pre-evaluation block and re-evaluate through
            // determine-state-root-hash method with an ephemeral state store
            // to check the state root hash validity
            var preEval = new PreEvaluationBlock<T>(
                genesisBlock.Header, genesisBlock.Transactions);
            var computedStateRootHash = preEval.DetermineStateRootHash(
                policy.BlockAction,
                policy.NativeTokens.Contains,
                new TrieStateStore(new DefaultKeyValueStore(null)));
            if (!genesisBlock.StateRootHash.Equals(computedStateRootHash))
            {
                throw new InvalidBlockStateRootHashException(
                    "Given block #{Index} {Hash} has a state root hash {ExpectedStateRootHash} " +
                    "that is different from the calculated state root hash {ActualStateRootHash}",
                    genesisBlock.StateRootHash,
                    computedStateRootHash);
            }

            var id = Guid.NewGuid();

            if (ValidateGenesisBlock(genesisBlock) is { } ibe)
            {
                throw ibe;
            }

            var nonceDeltas = ValidateNonces(new Dictionary<Address, long>(), genesisBlock);

            store.PutBlock(genesisBlock);
            store.AppendIndex(id, genesisBlock.Hash);

            foreach (var tx in genesisBlock.Transactions)
            {
                store.PutTxIdBlockHashIndex(tx.Id, genesisBlock.Hash);
            }

            foreach (KeyValuePair<Address, long> pair in nonceDeltas)
            {
                store.IncreaseTxNonce(id, pair.Key, pair.Value);
            }

            store.SetCanonicalChainId(id);

            // Evaluate once more to write to state store
            _ = preEval.DetermineStateRootHash(
            policy.BlockAction,
            policy.NativeTokens.Contains,
            stateStore);

            blockChainStates ??= new BlockChainStates(store, stateStore);
            actionEvaluator ??= new ActionEvaluator(
                _ => policy.BlockAction,
                blockChainStates: blockChainStates,
                trieGetter: hash => stateStore.GetStateRoot(
                    store.GetBlockDigest(hash)?.StateRootHash),
                genesisHash: genesisBlock.Hash,
                nativeTokenPredicate: policy.NativeTokens.Contains,
                actionTypeLoader: StaticActionTypeLoader.Create<T>(),
                feeCalculator: null
            );

            return new BlockChain<T>(
                policy,
                stagePolicy,
                store,
                stateStore,
                id,
                genesisBlock,
                renderers,
                blockChainStates,
                actionEvaluator);
        }

        /// <summary>
        /// Mine the genesis block of the blockchain.
        /// </summary>
        /// <param name="customActions">List of custom actions
        /// will be included in the genesis block.
        /// If it's null, it will be replaced with <see cref="ImmutableArray{T}.Empty"/>
        /// as default.</param>
        /// <param name="systemActions">System action that will be included in the genesis block.
        /// If it's null, no system action will be added.
        /// as default.</param>
        /// <param name="privateKey">A private key to sign the transaction and the genesis block.
        /// If it's null, it will use new private key as default.</param>
        /// <param name="timestamp">The timestamp of the genesis block. If it's null, it will
        /// use <see cref="DateTimeOffset.UtcNow"/> as default.</param>
        /// <param name="blockAction">A block action to execute and be rendered for every block.
        /// It must match to <see cref="BlockPolicy{T}.BlockAction"/> of <see cref="Policy"/>.
        /// </param>
        /// <param name="nativeTokenPredicate">A predicate function to determine whether
        /// the specified <see cref="Currency"/> is a native token defined by chain's
        /// <see cref="Libplanet.Blockchain.Policies.IBlockPolicy{T}.NativeTokens"/> or not.
        /// Treat no <see cref="Currency"/> as native token if the argument omitted.</param>
        /// <returns>The genesis block mined with parameters.</returns>
        // FIXME: This method should take a IBlockPolicy<T> instead of params blockAction and
        // nativeTokenPredicate.  (Or at least there should be such an overload.)
        public static Block<T> ProposeGenesisBlock(
            IEnumerable<T> customActions = null,
            IEnumerable<IAction> systemActions = null,
            PrivateKey privateKey = null,
            DateTimeOffset? timestamp = null,
            IAction blockAction = null,
            Predicate<Currency> nativeTokenPredicate = null)
        {
            privateKey ??= new PrivateKey();
            customActions ??= ImmutableArray<T>.Empty;
            systemActions ??= ImmutableArray<IAction>.Empty;
            int nonce = 0;
            Transaction<T>[] transactions =
            {
                Transaction<T>.Create(
                    nonce, privateKey, null, customActions, timestamp: timestamp),
            };
            foreach (var systemAction in systemActions)
            {
                nonce += 1;
                transactions = transactions.Concat(
                    new Transaction<T>[]
                    {
                        Transaction<T>.Create(
                            nonce, privateKey, null, systemAction, timestamp: timestamp),
                    }).ToArray();
            }

            transactions = transactions.OrderBy(tx => tx.Id).ToArray();

            BlockContent<T> content = new BlockContent<T>(
                new BlockMetadata(
                    index: 0L,
                    timestamp: timestamp ?? DateTimeOffset.UtcNow,
                    publicKey: privateKey.PublicKey,
                    previousHash: null,
                    txHash: BlockContent<T>.DeriveTxHash(transactions),
                    lastCommit: null),
                transactions: transactions);

            PreEvaluationBlock<T> preEval = content.Propose();
            return preEval.Evaluate(
                privateKey,
                blockAction,
                nativeTokenPredicate,
                new TrieStateStore(new DefaultKeyValueStore(null))
            );
        }

        /// <summary>
        /// Determines whether the <see cref="BlockChain{T}"/> contains <see cref="Block{T}"/>
        /// the specified <paramref name="blockHash"/>.
        /// </summary>
        /// <param name="blockHash">The <see cref="HashDigest{T}"/> of the <see cref="Block{T}"/> to
        /// check if it is in the <see cref="BlockChain{T}"/>.</param>
        /// <returns>
        /// <see langword="true"/> if the <see cref="BlockChain{T}"/> contains
        /// <see cref="Block{T}"/> with the specified <paramref name="blockHash"/>; otherwise,
        /// <see langword="false"/>.
        /// </returns>
        public bool ContainsBlock(BlockHash blockHash)
        {
            _rwlock.EnterReadLock();
            try
            {
                return
                    _blocks.ContainsKey(blockHash) &&
                    Store.GetBlockIndex(blockHash) is { } branchPointIndex &&
                    branchPointIndex <= Tip.Index &&
                    Store.IndexBlockHash(Id, branchPointIndex).Equals(blockHash);
            }
            finally
            {
                _rwlock.ExitReadLock();
            }
        }

        /// <summary>
        /// Gets the transaction corresponding to the <paramref name="txId"/>.
        /// </summary>
        /// <param name="txId">A <see cref="TxId"/> of the <see cref="Transaction{T}"/> to get.
        /// </param>
        /// <returns><see cref="Transaction{T}"/> with <paramref name="txId"/>.</returns>
        /// <exception cref="KeyNotFoundException">Thrown when there is no
        /// <see cref="Transaction{T}"/> with a given <paramref name="txId"/>.</exception>
        public Transaction<T> GetTransaction(TxId txId)
        {
            if (StagePolicy.Get(this, txId) is { } tx)
            {
                return tx;
            }

            _rwlock.EnterReadLock();
            try
            {
                if (Store.GetTransaction<T>(txId) is { } transaction)
                {
                    return transaction;
                }

                throw new KeyNotFoundException($"No such transaction: {txId}");
            }
            finally
            {
                _rwlock.ExitReadLock();
            }
        }

        /// <summary>
        /// Gets the state of the given <paramref name="address"/> in the
        /// <see cref="BlockChain{T}"/> from <paramref name="offset"/>.
        /// </summary>
        /// <param name="address">An <see cref="Address"/> to get the states of.</param>
        /// <param name="offset">The <see cref="HashDigest{T}"/> of the block to start finding
        /// the state.  It will be The tip of the <see cref="BlockChain{T}"/> if it is
        /// <see langword="null"/>.</param>
        /// <returns>The current state of given <paramref name="address"/>.  This can be
        /// <see langword="null"/> if <paramref name="address"/> has no value.</returns>
        public IValue GetState(
            Address address,
            BlockHash? offset = null
        ) =>
            Count > 0
            ? GetStates(
                    new[] { address },
                    offset ?? Tip.Hash
                )[0]
            : null;

        /// <summary>
        /// Gets multiple states associated to the specified <paramref name="addresses"/>.
        /// </summary>
        /// <param name="addresses">Addresses of states to query.</param>
        /// <param name="offset">The <see cref="HashDigest{T}"/> of the block to start finding
        /// the states.  <see cref="Tip"/> by default.</param>
        /// <returns>The states associated to the specified <paramref name="addresses"/>.
        /// Associated values are ordered in the same way to the corresponding
        /// <paramref name="addresses"/>.  Absent states are represented as <see langword="null"/>.
        /// </returns>
        public IReadOnlyList<IValue> GetStates(
            IReadOnlyList<Address> addresses,
            BlockHash? offset = null
        ) =>
            Count > 0
                ? GetStates(
                    addresses,
                    offset ?? Tip.Hash
                )
                : new IValue[addresses.Count];

        public IReadOnlyList<IValue> GetStates(
            IReadOnlyList<Address> addresses,
            BlockHash offset
        ) => _blockChainStates.GetStates(addresses, offset);

        /// <summary>
        /// Queries <paramref name="address"/>'s balance of the <paramref name="currency"/> in the
        /// <see cref="BlockChain{T}"/> from <paramref name="offset"/>.
        /// </summary>
        /// <param name="address">The owner <see cref="Address"/> to query.</param>
        /// <param name="currency">The currency type to query.</param>
        /// <param name="offset">The <see cref="HashDigest{T}"/> of the block to
        /// start finding the state. It will be the tip of the
        /// <see cref="BlockChain{T}"/> if it is <see langword="null"/>.</param>
        /// <returns>The <paramref name="address"/>'s current balance (or balance as of the given
        /// <paramref name="offset"/>) of the <paramref name="currency"/>.
        /// </returns>
        public FungibleAssetValue GetBalance(
            Address address,
            Currency currency,
            BlockHash? offset = null
        ) =>
            GetBalance(
                address,
                currency,
                offset ?? Tip.Hash
            );

        /// <inheritdoc cref="IBlockChainStates.GetBalance"/>
        public FungibleAssetValue GetBalance(
            Address address,
            Currency currency,
            BlockHash offset
        ) => _blockChainStates.GetBalance(address, currency, offset);

        /// <summary>
        /// Gets the total supply of a <paramref name="currency"/> in the
        /// <see cref="BlockChain{T}"/> from <paramref name="offset"/>, and if not found, derive
        /// from the sum of all balances.
        /// </summary>
        /// <param name="currency">The currency type to query.</param>
        /// <param name="offset">The <see cref="HashDigest{T}"/> of the block to
        /// start finding the state.</param>
        /// <returns>The total supply value of <paramref name="currency"/> at
        /// <paramref name="offset"/> in <see cref="FungibleAssetValue"/>.</returns>
        public FungibleAssetValue GetTotalSupply(
            Currency currency,
            BlockHash? offset = null
        ) =>
            GetTotalSupply(
                currency,
                offset ?? Tip.Hash
            );

        /// <inheritdoc cref="IBlockChainStates.GetTotalSupply"/>
        public FungibleAssetValue GetTotalSupply(
            Currency currency,
            BlockHash offset
        ) => _blockChainStates.GetTotalSupply(currency, offset);

        public ValidatorSet GetValidatorSet(BlockHash? offset = null) =>
            GetValidatorSet(offset ?? Tip.Hash);

        /// <inheritdoc cref="IBlockChainStates.GetValidatorSet" />
        public ValidatorSet GetValidatorSet(BlockHash offset) =>
            _blockChainStates.GetValidatorSet(offset);

        /// <summary>
        /// Queries the recorded <see cref="TxExecution"/> for a successful or failed
        /// <see cref="Transaction{T}"/> within a <see cref="Block{T}"/>.
        /// </summary>
        /// <param name="blockHash">The <see cref="Block{T}.Hash"/> of the <see cref="Block{T}"/>
        /// that the <see cref="Transaction{T}"/> is executed within.</param>
        /// <param name="txid">The executed <see cref="Transaction{T}"/>'s
        /// <see cref="Transaction{T}.Id"/>.</param>
        /// <returns>The recorded <see cref="TxExecution"/>.  If the transaction has never been
        /// executed within the block, it returns <see langword="null"/> instead.</returns>
        public TxExecution GetTxExecution(BlockHash blockHash, TxId txid) =>
            Store.GetTxExecution(blockHash, txid);

        /// <summary>
        /// Adds a <paramref name="block"/> to the end of this chain.
        /// <para><see cref="Block{T}.Transactions"/> in the <paramref name="block"/> updates
        /// states and balances in the blockchain, and <see cref="TxExecution"/>s for
        /// transactions are recorded.</para>
        /// <para>Note that <see cref="Renderers"/> receive events right after the <paramref
        /// name="block"/> is confirmed (and thus all states reflect changes in the <paramref
        /// name="block"/>).</para>
        /// </summary>
        /// <param name="block">A next <see cref="Block{T}"/>, which is mined,
        /// to add.</param>
        /// <param name="blockCommit">A <see cref="BlockCommit"/> that has +2/3 commits for the
        /// given block.</param>
        /// <exception cref="BlockPolicyViolationException">Thrown when given
        /// <paramref name="block"/> does not satisfy any of the constraints
        /// validated by <see cref="IBlockPolicy{T}.ValidateNextBlock"/> of <see cref="Policy"/>.
        /// </exception>
        /// <exception cref="InvalidBlockException">Thrown when the given <paramref name="block"/>
        /// is invalid, in itself or according to the <see cref="Policy"/>.</exception>
        /// <exception cref="InvalidTxNonceException">Thrown when the
        /// <see cref="Transaction{T}.Nonce"/> is different from
        /// <see cref="GetNextTxNonce"/> result of the
        /// <see cref="Transaction{T}.Signer"/>.</exception>
        /// <exception cref="InvalidBlockCommitException">Thrown when the given
        /// <paramref name="block"/> and <paramref name="blockCommit"/> is invalid.</exception>
        public void Append(
            Block<T> block,
            BlockCommit blockCommit
        ) =>
            Append(
                block,
                blockCommit,
                evaluateActions: true,
                renderBlocks: true,
                renderActions: true
            );

        /// <summary>
        /// Adds <paramref name="transaction"/> to the pending list so that a next
        /// <see cref="Block{T}"/> to be mined may contain given <paramref name="transaction"/>.
        /// </summary>
        /// <param name="transaction"><see cref="Transaction{T}"/> to add to the pending list.
        /// </param>
        /// <returns><see langword="true"/> if staging was successful,
        /// <see langword="false"/> otherwise.</returns>
        /// <exception cref="InvalidTxGenesisHashException">Thrown when given
        /// <paramref name="transaction"/> has invalid <see cref="Transaction{T}.GenesisHash"/>.
        /// </exception>
        public bool StageTransaction(Transaction<T> transaction)
        {
            if (!transaction.GenesisHash.Equals(Genesis.Hash))
            {
                var msg = "GenesisHash of the transaction is not compatible " +
                          "with the BlockChain<T>.Genesis.Hash.";
                throw new InvalidTxGenesisHashException(
                    msg,
                    transaction.Id,
                    Genesis.Hash,
                    transaction.GenesisHash);
            }

            return StagePolicy.Stage(this, transaction);
        }

        /// <summary>
        /// Removes a <paramref name="transaction"/> from the pending list.
        /// </summary>
        /// <param name="transaction">A <see cref="Transaction{T}"/>
        /// to remove from the pending list.</param>
        /// <returns><see langword="true"/> if unstaging was successful,
        /// <see langword="false"/> otherwise.</returns>
        /// <seealso cref="StageTransaction"/>
        public bool UnstageTransaction(Transaction<T> transaction) =>
            StagePolicy.Unstage(this, transaction.Id);

        /// <summary>
        /// Gets next <see cref="Transaction{T}.Nonce"/> of the address.
        /// </summary>
        /// <param name="address">The <see cref="Address"/> from which to obtain the
        /// <see cref="Transaction{T}.Nonce"/> value.</param>
        /// <returns>The next <see cref="Transaction{T}.Nonce"/> value of the
        /// <paramref name="address"/>.</returns>
        public long GetNextTxNonce(Address address)
            => StagePolicy.GetNextTxNonce(this, address);

        /// <summary>
        /// Creates a new <see cref="Transaction{T}"/> with a system action and stage it.
        /// It's available only if the genesis block exists.
        /// </summary>
        /// <param name="privateKey">A <see cref="PrivateKey"/> of the account who creates and
        /// signs a new transaction.</param>
        /// <param name="systemAction">A system action to include to a new transaction.</param>
        /// <param name="updatedAddresses"><see cref="Address"/>es whose states affected by
        /// the <paramref name="systemAction"/>.</param>
        /// <param name="timestamp">The time this <see cref="Transaction{T}"/> is created and
        /// signed.</param>
        /// <returns>A created new <see cref="Transaction{T}"/> signed by the given
        /// <paramref name="privateKey"/>.</returns>
        public Transaction<T> MakeTransaction(
            PrivateKey privateKey,
            IAction systemAction,
            IImmutableSet<Address> updatedAddresses = null,
            DateTimeOffset? timestamp = null)
        {
            timestamp = timestamp ?? DateTimeOffset.UtcNow;
            lock (_txLock)
            {
                // FIXME: Exception should be documented when the genesis block does not exist.
                Transaction<T> tx = Transaction<T>.Create(
                    GetNextTxNonce(privateKey.ToAddress()),
                    privateKey,
                    Genesis.Hash,
                    systemAction,
                    updatedAddresses,
                    timestamp);
                StageTransaction(tx);
                return tx;
            }
        }

        /// <summary>
        /// Creates a new <see cref="Transaction{T}"/> with custom actions and stage it.
        /// It's available only if the genesis block exists.
        /// </summary>
        /// <param name="privateKey">A <see cref="PrivateKey"/> of the account who creates and
        /// signs a new transaction.</param>
        /// <param name="customActions">A list of custom actions to include to a new transaction.
        /// </param>
        /// <param name="updatedAddresses"><see cref="Address"/>es whose states affected by
        /// <paramref name="customActions"/>.</param>
        /// <param name="timestamp">The time this <see cref="Transaction{T}"/> is created and
        /// signed.</param>
        /// <returns>A created new <see cref="Transaction{T}"/> signed by the given
        /// <paramref name="privateKey"/>.</returns>
        public Transaction<T> MakeTransaction(
            PrivateKey privateKey,
            IEnumerable<T> customActions,
            IImmutableSet<Address> updatedAddresses = null,
            DateTimeOffset? timestamp = null)
        {
            timestamp = timestamp ?? DateTimeOffset.UtcNow;
            lock (_txLock)
            {
                // FIXME: Exception should be documented when the genesis block does not exist.
                Transaction<T> tx = Transaction<T>.Create(
                    GetNextTxNonce(privateKey.ToAddress()),
                    privateKey,
                    Genesis.Hash,
                    customActions,
                    updatedAddresses,
                    timestamp);
                StageTransaction(tx);
                return tx;
            }
        }

        /// <summary>
        /// Lists all staged <see cref="TxId"/>s.
        /// </summary>
        /// <returns><see cref="IImmutableSet{TxId}"/> of staged transactions.</returns>
        public IImmutableSet<TxId> GetStagedTransactionIds()
        {
            // FIXME: How about turning this method to the StagedTransactions property?
            return StagePolicy.Iterate(this).Select(tx => tx.Id).ToImmutableHashSet();
        }

        /// <summary>
        /// Evaluates the <see cref="IAction"/>s in given <paramref name="block"/>.
        /// </summary>
        /// <param name="block">The <see cref="Block{T}"/> to execute.</param>
        /// <returns>An <see cref="IReadOnlyList{T}"/> of <ses cref="ActionEvaluation"/>s for
        /// given <paramref name="block"/>.</returns>
        /// <seealso cref="CommitEvaluations"/>
        [Pure]
        public IReadOnlyList<ActionEvaluation> ExecuteActions(Block<T> block) =>
            ActionEvaluator.Evaluate(block);

        /// <summary>
        /// Attempts to commit a result obtained from <see cref="ExecuteActions"/>
        /// to the <see cref="IStateStore"/>.
        /// </summary>
        /// <param name="block">The <see cref="Block{T}"/> to validate against.</param>
        /// <param name="evaluations">The list of <see cref="ActionEvaluation"/>s
        /// from which to extract the states to commit.</param>
        /// <exception cref="InvalidBlockStateRootHashException">If the state root hash
        /// calculated by commiting to the <see cref="IStateStore"/> does not match
        /// the <paramref name="block"/>'s <see cref="Block{T}.StateRootHash"/>.</exception>
        /// <remarks>
        /// Since the state root hash for can only be calculated from making a commit
        /// to an <see cref="IStateStore"/>, this always has a side-effect to the
        /// <see cref="IStateStore"/> regardless of whether the state root hash
        /// obdatined through commiting to the <see cref="IStateStore"/>
        /// matches the <paramref name="block"/>'s <see cref="Block{T}.StateRootHash"/> or not.
        /// </remarks>
        /// <seealso cref="ExecuteActions"/>
        public void CommitEvaluations(Block<T> block, IReadOnlyList<ActionEvaluation> evaluations)
        {
            _rwlock.EnterWriteLock();
            try
            {
                // Update states
                Stopwatch stopwatch = new Stopwatch();
                stopwatch.Start();
                var totalDelta =
                    evaluations.GetTotalDelta(
                        ToStateKey,
                        ToFungibleAssetKey,
                        ToTotalSupplyKey,
                        ValidatorSetKey);
                _logger.Debug(
                    "Summarized the states delta with {Count} key changes " +
                    "made by block #{BlockIndex} {BlockHash} in {DurationMs} ms",
                    totalDelta.Count,
                    block.Index,
                    block.Hash,
                    stopwatch.ElapsedMilliseconds);

                HashDigest<SHA256>? prevStateRootHash = Store.GetStateRootHash(block.PreviousHash);
                ITrie stateRoot = StateStore.Commit(prevStateRootHash, totalDelta);
                HashDigest<SHA256> rootHash = stateRoot.Hash;
                const string rootHashMsg =
                    "Calculated the root hash of the states made by block #{BlockIndex} " +
                    "{BlockHash} for " + nameof(TrieStateStore) + ": {StateRootHash}";
                _logger.Debug(rootHashMsg, block.Index, block.Hash, rootHash);

                if (!rootHash.Equals(block.StateRootHash))
                {
                    var message = $"Block #{block.Index} {block.Hash}'s state root hash " +
                        $"is {block.StateRootHash}, but the execution result is {rootHash}.";
                    throw new InvalidBlockStateRootHashException(
                        message,
                        block.StateRootHash,
                        rootHash);
                }

                _logger
                    .ForContext("Tag", "Metric")
                    .ForContext("Subtag", "StateUpdateDuration")
                    .Information(
                        "Finished updating the states with {KeyCount} key changes affected by " +
                        "block #{BlockIndex} {BlockHash} in {DurationMs} ms",
                        totalDelta.Count,
                        block.Index,
                        block.Hash,
                        stopwatch.ElapsedMilliseconds);

                IEnumerable<TxExecution> txExecutions = MakeTxExecutions(block, evaluations);
                UpdateTxExecutions(txExecutions);
            }
            finally
            {
                _rwlock.ExitWriteLock();
            }
        }

        /// <summary>
        /// Finds the branch point <see cref="BlockHash"/> between this <see cref="BlockChain{T}"/>
        /// and <paramref name="locator"/> and returns the list of <see cref="BlockHash"/>es of
        /// successive <see cref="Block{T}"/>s starting from the branch point
        /// <see cref="BlockHash"/>.</summary>
        /// <param name="locator">The <see cref="BlockLocator"/> to find the branching point
        /// from.</param>
        /// <param name="stop">The <see cref="BlockHash"/> to stop looking for subsequent blocks
        /// once encountered.
        /// </param>
        /// <param name="count">The Maximum number of <see cref="BlockHash"/>es to return.</param>
        /// <returns>A tuple of the index of the branch point and <see cref="BlockHash"/>es
        /// including the branch point <see cref="BlockHash"/>.  If no branch point is found,
        /// returns a tuple of <see langword="null"/> and an empty array of
        /// <see cref="BlockHash"/>es.</returns>
        public Tuple<long?, IReadOnlyList<BlockHash>> FindNextHashes(
            BlockLocator locator,
            BlockHash? stop = null,
            int count = 500)
        {
            Stopwatch stopwatch = new Stopwatch();
            stopwatch.Start();

            // FIXME Theoretically, we don't accept empty chain. so `tip` can't be null on this
            // assumption. but during some test case(e.g. GetDemandBlockHashesDuringReorg),
            // it had been occurred.
            // We should find a reason for that and fix it before remote this early return.
            BlockHash? tip = Store.IndexBlockHash(Id, -1);
            if (tip is null)
            {
                return new Tuple<long?, IReadOnlyList<BlockHash>>(null, new BlockHash[0]);
            }

            if (!(FindBranchpoint(locator) is BlockHash branchpoint))
            {
                return new Tuple<long?, IReadOnlyList<BlockHash>>(null, new BlockHash[0]);
            }

            if (!(Store.GetBlockIndex(branchpoint) is long branchpointIndex))
            {
                return new Tuple<long?, IReadOnlyList<BlockHash>>(null, new BlockHash[0]);
            }

            var result = new List<BlockHash>();
            foreach (BlockHash hash in Store.IterateIndexes(Id, (int)branchpointIndex, count))
            {
                if (count == 0)
                {
                    break;
                }

                result.Add(hash);
                count--;

                if (hash.Equals(stop))
                {
                    break;
                }
            }

            _logger
                .ForContext("Tag", "Metric")
                .ForContext("Subtag", "FindHashesDuration")
                .Information(
                    "Found {HashCount} hashes from storage with {ChainIdCount} chain ids " +
                    "in {DurationMs} ms",
                    result.Count,
                    Store.ListChainIds().Count(),
                    stopwatch.ElapsedMilliseconds);

            return new Tuple<long?, IReadOnlyList<BlockHash>>(branchpointIndex, result);
        }

        /// <summary>
        /// Forks the chain at <paramref name="point"/> and returns the newly forked chain.
        /// </summary>
        /// <param name="point">The hash in which to fork from.</param>
        /// <param name="inheritRenderers">Whether to inherit the renderers from the existing chain.
        /// </param>
        /// <returns>An instance of the newly forked chain.</returns>
        /// <exception cref="ArgumentException">Throws when the provided <paramref name="point"/>
        /// does not exist in the current chain.</exception>
        public BlockChain<T> Fork(BlockHash point, bool inheritRenderers = true)
        {
            if (!ContainsBlock(point))
            {
                throw new ArgumentException(
                    $"The block [{point}] doesn't exist.",
                    nameof(point));
            }

            Block<T> pointBlock = this[point];

            if (!point.Equals(this[pointBlock.Index].Hash))
            {
                throw new ArgumentException(
                    $"The block [{point}] doesn't exist in the chain index.",
                    nameof(point));
            }

            var forkedId = Guid.NewGuid();
            IEnumerable<IRenderer<T>> renderers = inheritRenderers
                ? Renderers
                : Enumerable.Empty<IRenderer<T>>();
            try
            {
                _rwlock.EnterReadLock();

                Store.AppendIndex(forkedId, Genesis.Hash);
                var forked = new BlockChain<T>(
                    Policy,
                    StagePolicy,
                    Store,
                    StateStore,
                    forkedId,
                    Genesis,
                    renderers,
                    _blockChainStates,
                    ActionEvaluator);
                Store.ForkBlockIndexes(Id, forkedId, point);
                if (GetBlockCommit(point) is { } p)
                {
                    Store.PutChainBlockCommit(forkedId, GetBlockCommit(point));
                }

                Store.ForkTxNonces(Id, forked.Id);
                for (Block<T> block = Tip;
                     block.PreviousHash is { } hash && !block.Hash.Equals(point);
                     block = _blocks[hash])
                {
                    IEnumerable<(Address, int)> signers = block
                        .Transactions
                        .GroupBy(tx => tx.Signer)
                        .Select(g => (g.Key, g.Count()));

                    foreach ((Address address, int txCount) in signers)
                    {
                        Store.IncreaseTxNonce(forked.Id, address, -txCount);
                    }
                }

                _logger.Information(
                    "Forked chain at #{Index} {Hash} from id {PreviousId} to id {ForkedId}",
                    pointBlock.Index,
                    pointBlock.Hash,
                    Id,
                    forkedId);

                return forked;
            }
            catch (Exception e)
            {
                _logger.Error(
                    e,
                    "An unexpected exception occurred while forking a chain");
                Store.DeleteChainId(forkedId);
                throw;
            }
            finally
            {
                _rwlock.ExitReadLock();
            }
        }

        /// <summary>
        /// Returns a new <see cref="BlockLocator"/> from the tip of current chain.
        /// </summary>
        /// <param name="threshold">The amount of consequent blocks to include before sampling.
        /// </param>
        /// <returns>A instance of block locator.</returns>
        public BlockLocator GetBlockLocator(int threshold = 10)
        {
            long startIndex;
            Guid id;
            _rwlock.EnterReadLock();
            try
            {
                startIndex = Tip.Index;
                id = Id;
            }
            finally
            {
                _rwlock.ExitReadLock();
            }

            return BlockLocator.Create(
                startIndex: startIndex,
                indexToBlockHash: idx => Store.IndexBlockHash(Id, idx),
                sampleAfter: threshold);
        }

        /// <summary>
        /// Returns a <see cref="BlockCommit"/> of given <see cref="Block{T}"/> index.
        /// </summary>
        /// <param name="index">A index value (height) of <see cref="Block{T}"/> to retrieve.
        /// </param>
        /// <returns>Returns a <see cref="BlockCommit"/> of given <see cref="Block{T}"/> index.
        /// Following conditions will return <see langword="null"/>:
        /// <list type="bullet">
        ///     <item>
        ///         Given <see cref="Block{T}"/> <see cref="Block{T}.ProtocolVersion"/> is
        ///         Proof-of-Work.
        ///     </item>
        ///     <item>
        ///         Given <see cref="Block{T}"/> is <see cref="BlockChain{T}.Genesis"/> block.
        ///     </item>
        /// </list>
        /// </returns>
        /// <exception cref="KeyNotFoundException">Thrown if given index does not exist in the
        /// blockchain.</exception>
        /// <remarks>The <see cref="BlockChain{T}.Genesis"/> block does not have
        /// <see cref="BlockCommit"/> because the genesis block is not committed by a consensus.
        /// </remarks>
        public BlockCommit GetBlockCommit(long index)
        {
            Block<T> block = this[index];

            if (block.ProtocolVersion <= BlockMetadata.PoWProtocolVersion)
            {
                return null;
            }

            return index == Tip.Index
                ? Store.GetChainBlockCommit(Id)
                : this[index + 1].LastCommit;
        }

        /// <summary>
        /// Returns a <see cref="BlockCommit"/> of given <see cref="Block{T}"/> index.
        /// </summary>
        /// <param name="blockHash">A hash value of <see cref="Block{T}"/> to retrieve.
        /// </param>
        /// <returns>Returns a <see cref="BlockCommit"/> of given <see cref="Block{T}"/> hash, if
        /// the <see cref="BlockCommit"/> of <see cref="BlockChain{T}.Genesis"/> block is requested,
        /// then returns <see langword="null"/>.</returns>
        /// <exception cref="KeyNotFoundException">Thrown if given hash does not exist in the
        /// blockchain.</exception>
        /// <remarks>The <see cref="BlockChain{T}.Genesis"/> block does not have
        /// <see cref="BlockCommit"/> because the genesis block is not committed by a consensus.
        /// </remarks>
        public BlockCommit GetBlockCommit(BlockHash blockHash) =>
            GetBlockCommit(this[blockHash].Index);

#pragma warning disable MEN003
        internal void Append(
            Block<T> block,
            BlockCommit blockCommit,
            bool evaluateActions,
            bool renderBlocks,
            bool renderActions,
            IReadOnlyList<ActionEvaluation> actionEvaluations = null
        )
        {
            if (Count == 0)
            {
                throw new ArgumentException(
                    "Cannot append a block to an empty chain.");
            }
            else if (block.Index == 0)
            {
                throw new ArgumentException(
                    $"Cannot append genesis block #{block.Index} {block.Hash} to a chain.",
                    nameof(block));
            }

            if (!evaluateActions && renderActions)
            {
                throw new ArgumentException(
                    $"{nameof(renderActions)} option requires {nameof(evaluateActions)} " +
                    "to be turned on.",
                    nameof(renderActions)
                );
            }

            renderActions = renderActions && renderBlocks && ActionRenderers.Any();

            _logger.Information(
                "Trying to append block #{BlockIndex} {BlockHash}...", block.Index, block.Hash);

            block.ValidateTimestamp();

            _rwlock.EnterUpgradeableReadLock();
            Block<T> prevTip = Tip;
            try
            {
                if (ValidateNextBlock(block) is { } ibe)
                {
                    throw ibe;
                }

                if (ValidateBlockCommit(block, blockCommit) is { } ibce)
                {
                    throw ibce;
                }

                var nonceDeltas = ValidateNonces(
                    block.Transactions
                        .Select(tx => tx.Signer)
                        .Distinct()
                        .ToDictionary(signer => signer, signer => Store.GetTxNonce(Id, signer)),
                    block);

                foreach (Transaction<T> tx in block.Transactions)
                {
                    if (Policy.ValidateNextBlockTx(this, tx) is { } tpve)
                    {
                        throw new TxPolicyViolationException(
                            "According to BlockPolicy, this transaction is not valid.",
                            tx.Id,
                            tpve);
                    }
                }

                _rwlock.EnterWriteLock();
                try
                {
                    if (evaluateActions && actionEvaluations is null)
                    {
                        _logger.Information(
                            "Executing actions in block #{BlockIndex} {BlockHash}...",
                            block.Index,
                            block.Hash);
                        actionEvaluations = ExecuteActions(block);
                        CommitEvaluations(block, actionEvaluations);

                        _logger.Information(
                            "Executed actions in block #{BlockIndex} {BlockHash}",
                            block.Index,
                            block.Hash);

                        // FIXME: Using evaluateActions as a proxy flag for preloading status.
                        const string TimestampFormat = "yyyy-MM-ddTHH:mm:ss.ffffffZ";
                        _logger
                            .ForContext("Tag", "Metric")
                            .ForContext("Subtag", "BlockAppendTimestamp")
                            .Information(
                                "Block #{BlockIndex} {BlockHash} with " +
                                "timestamp {BlockTimestamp} appended at {AppendTimestamp}",
                                block.Index,
                                block.Hash,
                                block.Timestamp.ToString(
                                    TimestampFormat, CultureInfo.InvariantCulture),
                                DateTimeOffset.UtcNow.ToString(
                                    TimestampFormat, CultureInfo.InvariantCulture));
                    }

                    _blocks[block.Hash] = block;
                    foreach (KeyValuePair<Address, long> pair in nonceDeltas)
                    {
                        Store.IncreaseTxNonce(Id, pair.Key, pair.Value);
                    }

                    Store.AppendIndex(Id, block.Hash);

                    foreach (var tx in block.Transactions)
                    {
                        Store.PutTxIdBlockHashIndex(tx.Id, block.Hash);
                    }

                    if (block.Index != 0 && blockCommit is { })
                    {
                        Store.PutChainBlockCommit(Id, blockCommit);
                    }
                }
                finally
                {
                    _rwlock.ExitWriteLock();
                }

                if (IsCanonical)
                {
                    _logger.Information(
                        "Unstaging {TxCount} transactions from block #{BlockIndex} {BlockHash}...",
                        block.Transactions.Count(),
                        block.Index,
                        block.Hash);
                    foreach (Transaction<T> tx in block.Transactions)
                    {
                        UnstageTransaction(tx);
                    }

                    _logger.Information(
                        "Unstaged {TxCount} transactions from block #{BlockIndex} {BlockHash}...",
                        block.Transactions.Count(),
                        block.Index,
                        block.Hash);
                }
                else
                {
                    _logger.Information(
                        "Skipping unstaging transactions from block #{BlockIndex} {BlockHash} " +
                        "for non-canonical chain {ChainID}",
                        block.Index,
                        block.Hash,
                        Id);
                }

                TipChanged?.Invoke(this, (prevTip, block));
                _logger.Information(
                    "Appended the block #{BlockIndex} {BlockHash}",
                    block.Index,
                    block.Hash);

                if (renderBlocks)
                {
                    _logger.Information(
                        "Invoking {RendererCount} renderers and " +
                        "{ActionRendererCount} action renderers for #{BlockIndex} {BlockHash}",
                        Renderers.Count,
                        ActionRenderers.Count,
                        block.Index,
                        block.Hash);
                    foreach (IRenderer<T> renderer in Renderers)
                    {
                        renderer.RenderBlock(oldTip: prevTip ?? Genesis, newTip: block);
                    }

                    if (ActionRenderers.Any())
                    {
                        if (renderActions)
                        {
                            RenderActions(
                                evaluations: actionEvaluations,
                                block: block
                            );
                        }

                        foreach (IActionRenderer<T> renderer in ActionRenderers)
                        {
                            renderer.RenderBlockEnd(oldTip: prevTip ?? Genesis, newTip: block);
                        }
                    }

                    _logger.Information(
                        "Invoked {RendererCount} renderers and " +
                        "{ActionRendererCount} action renderers for #{BlockIndex} {BlockHash}",
                        Renderers.Count,
                        ActionRenderers.Count,
                        block.Index,
                        block.Hash);
                }
            }
            finally
            {
                _rwlock.ExitUpgradeableReadLock();
            }
        }
#pragma warning restore MEN003

        /// <summary>
        /// Find an approximate to the topmost common ancestor between this
        /// <see cref="BlockChain{T}"/> and a given <see cref="BlockLocator"/>.
        /// </summary>
        /// <param name="locator">A block locator that contains candidate common ancestors.</param>
        /// <returns>An approximate to the topmost common ancestor.  If it failed to find anything
        /// returns <see langword="null"/>.</returns>
        internal BlockHash? FindBranchpoint(BlockLocator locator)
        {
            try
            {
                _rwlock.EnterReadLock();

                _logger.Debug(
                    "Finding a branchpoint with locator [{LocatorHead}, ...]",
                    locator.FirstOrDefault());
                foreach (BlockHash hash in locator)
                {
                    if (_blocks.ContainsKey(hash)
                        && _blocks[hash] is Block<T> block
                        && hash.Equals(Store.IndexBlockHash(Id, block.Index)))
                    {
                        _logger.Debug(
                            "Found a branchpoint with locator [{LocatorHead}, ...]: {Hash}",
                            locator.FirstOrDefault(),
                            hash
                        );
                        return hash;
                    }
                }

                _logger.Debug(
                    "Failed to find a branchpoint locator [{LocatorHead}, ...]",
                    locator.FirstOrDefault());
                return null;
            }
            finally
            {
                _rwlock.ExitReadLock();
            }
        }

        /// <summary>
        /// Lists the all staged transactions, with properly ordered nonces.
        /// </summary>
        /// <param name="txPriority">An optional comparer for give certain transactions to
        /// priority to belong to the block.  No certain priority by default.</param>
        /// <returns>A list of staged transactions.  This guarantees that for transactions signed
        /// by the same address, those with greater nonce never comes before those with
        /// lesser nonce.</returns>
        internal ImmutableList<Transaction<T>> ListStagedTransactions(
            IComparer<Transaction<T>> txPriority = null
        )
        {
            IEnumerable<Transaction<T>> unorderedTxs = StagePolicy.Iterate(this);
            if (txPriority is { } comparer)
            {
                unorderedTxs = unorderedTxs.OrderBy(tx => tx, comparer);
            }

            Transaction<T>[] txs = unorderedTxs.ToArray();

            Dictionary<Address, LinkedList<Transaction<T>>> seats = txs
                .GroupBy(tx => tx.Signer)
                .Select(g => (g.Key, new LinkedList<Transaction<T>>(g.OrderBy(tx => tx.Nonce))))
                .ToDictionary(pair => pair.Item1, pair => pair.Item2);

            return txs.Select(tx =>
            {
                LinkedList<Transaction<T>> seat = seats[tx.Signer];
                Transaction<T> first = seat.First.Value;
                seat.RemoveFirst();
                return first;
            }).ToImmutableList();
        }

        internal void SetStates(
            Block<T> block,
            IReadOnlyList<ActionEvaluation> actionEvaluations
        )
        {
            if (!StateStore.ContainsStateRoot(block.StateRootHash))
            {
                var totalDelta = actionEvaluations.GetTotalDelta(
                    ToStateKey, ToFungibleAssetKey, ToTotalSupplyKey, ValidatorSetKey);
                HashDigest<SHA256>? prevStateRootHash = Store.GetStateRootHash(block.PreviousHash);
                StateStore.Commit(prevStateRootHash, totalDelta);
            }
        }

        internal IEnumerable<Block<T>> IterateBlocks(int offset = 0, int? limit = null)
        {
            _rwlock.EnterUpgradeableReadLock();

            try
            {
                foreach (BlockHash hash in IterateBlockHashes(offset, limit))
                {
                    yield return _blocks[hash];
                }
            }
            finally
            {
                _rwlock.ExitUpgradeableReadLock();
            }
        }

        internal IEnumerable<BlockHash> IterateBlockHashes(int offset = 0, int? limit = null)
        {
            _rwlock.EnterUpgradeableReadLock();

            try
            {
                IEnumerable<BlockHash> indices = Store.IterateIndexes(Id, offset, limit);

                // NOTE: The reason why this does not simply return indices, but iterates over
                // indices and yields hashes step by step instead, is that we need to ensure
                // the read lock held until the whole iteration completes.
                foreach (BlockHash hash in indices)
                {
                    yield return hash;
                }
            }
            finally
            {
                _rwlock.ExitUpgradeableReadLock();
            }
        }

        /// <summary>
        /// Cleans up every <see cref="BlockCommit"/> in the store with
        /// <see cref="BlockCommit.Height"/> less than <paramref name="limit"/>.
        /// </summary>
        /// <param name="limit">A exceptional index that is not to be removed.</param>
        /// <exception cref="InvalidOperationException">Thrown when <see cref="IsCanonical"/> is
        /// <see langword="false"/>.</exception>
        internal void CleanupBlockCommitStore(long limit)
        {
            // FIXME: This still isn't enough to prevent the canonical chain
            // removing cached block commits that are needed by other non-canonical chains.
            if (!IsCanonical)
            {
                throw new InvalidOperationException(
                    $"Cannot perform {nameof(CleanupBlockCommitStore)}() from a " +
                    "non canonical chain.");
            }

            List<BlockHash> hashes = Store.GetBlockCommitHashes().ToList();

            _logger.Debug("Removing old BlockCommits with heights lower than {Limit}...", limit);
            foreach (var hash in hashes)
            {
                if (Store.GetBlockCommit(hash) is { } commit && commit.Height < limit)
                {
                    Store.DeleteBlockCommit(hash);
                }
            }
        }

#pragma warning disable SA1202
        internal InvalidBlockCommitException ValidateBlockCommit(
            Block<T> block,
            BlockCommit blockCommit)
#pragma warning restore SA1202
        {
            if (block.ProtocolVersion <= BlockMetadata.PoWProtocolVersion)
            {
                if (blockCommit != null)
                {
                    return new InvalidBlockCommitException(
                        "PoW Block doesn't have blockCommit.");
                }
                else
                {
                    // To allow the PoW block to be appended, we skips the validation.
                    return null;
                }
            }

            if (block.Index == 0)
            {
                if (blockCommit == null)
                {
                    return null;
                }

                return new InvalidBlockCommitException(
                    "Genesis block does not have blockCommit.");
            }

            if (block.Index != 0 && blockCommit == null)
            {
                return new InvalidBlockCommitException(
                    $"Block #{block.Hash} BlockCommit is required except for the genesis block.");
            }

            if (block.Index != blockCommit.Height)
            {
                return new InvalidBlockCommitException(
                    "BlockCommit has height value that is not same with block index. " +
                    $"Block index is {block.Index}, however, BlockCommit height is " +
                    $"{blockCommit.Height}.");
            }

            if (!block.Hash.Equals(blockCommit.BlockHash))
            {
                return new InvalidBlockCommitException(
                    $"BlockCommit has different block. Block hash is {block.Hash}, " +
                    $"however, BlockCommit block hash is {blockCommit.BlockHash}.");
            }

            // FIXME: When the dynamic validator set is possible, the functionality of this
            // condition should be checked once more.
            var validators = GetValidatorSet(block.PreviousHash ?? Genesis.Hash);
            if (!validators.ValidateBlockCommitValidators(blockCommit))
            {
                return new InvalidBlockCommitException(
                    $"BlockCommit of BlockHash {blockCommit.BlockHash} " +
                    $"has different validator set with chain state's validator set: \n" +
                    $"in states | \n " +
                    validators.Validators.Aggregate(
                        string.Empty, (s, key) => s + key + ", \n") +
                    $"in blockCommit | \n " +
                    blockCommit.Votes.Aggregate(
                        string.Empty, (s, key) => s + key.ValidatorPublicKey + ", \n"));
            }

            BigInteger commitPower = blockCommit.Votes.Aggregate(
                BigInteger.Zero,
                (power, vote) => power + (vote.Flag == VoteFlag.PreCommit
                    ? validators.GetValidator(vote.ValidatorPublicKey).Power
                    : BigInteger.Zero));
            if (validators.TwoThirdsPower >= commitPower)
            {
                return new InvalidBlockCommitException(
                    $"BlockCommit of BlockHash {blockCommit.BlockHash} " +
                    $"has insufficient vote power {commitPower} compared to 2/3 of " +
                    $"the total power {validators.TotalPower}");
            }

            return null;
        }

        internal InvalidBlockException ValidateNextBlock(Block<T> block)
        {
            if (block.Index == 0)
            {
                return ValidateGenesisBlock(block);
            }

            long index = Count;
            if (block.Index != index)
            {
                return new InvalidBlockIndexException(
                    $"The expected index of block {block.Hash} is #{index}, " +
                    $"but its index is #{block.Index}.");
            }

            int actualProtocolVersion = block.ProtocolVersion;
            const int currentProtocolVersion = Block<T>.CurrentProtocolVersion;

            // FIXME: Crude way of checking protocol version for non-genesis block.
            // Ideally, whether this is called during instantiation should be made more explicit.
            if (actualProtocolVersion > currentProtocolVersion)
            {
                string message =
                    $"The protocol version ({actualProtocolVersion}) of the block " +
                    $"#{block.Index} {block.Hash} is not supported by this node." +
                    $"The highest supported protocol version is {currentProtocolVersion}.";
                return new InvalidBlockProtocolVersionException(
                    message,
                    actualProtocolVersion
                );
            }
            else if (actualProtocolVersion < Tip.ProtocolVersion)
            {
                string message =
                    "The protocol version is disallowed to be downgraded from the topmost block " +
                    $"in the chain ({actualProtocolVersion} < {Tip.ProtocolVersion}).";
                return new InvalidBlockProtocolVersionException(message, actualProtocolVersion);
            }

            if (Policy.ValidateNextBlock(this, block) is { } bpve)
            {
                return bpve;
            }

            Block<T> lastBlock = this[index - 1];
            BlockHash? prevHash = lastBlock?.Hash;
            DateTimeOffset? prevTimestamp = lastBlock?.Timestamp;

            if (block.Index != index)
            {
                return new InvalidBlockIndexException(
                    $"The expected index of block {block.Hash} is #{index}, " +
                    $"but its index is #{block.Index}.");
            }

            if (!block.PreviousHash.Equals(prevHash))
            {
                return new InvalidBlockPreviousHashException(
                    $"The block #{index} {block.Hash} is not continuous from the " +
                    $"block #{index - 1}; while previous block's hash is " +
                    $"{prevHash}, the block #{index} {block.Hash}'s pointer to " +
                    "the previous hash refers to " +
                    (block.PreviousHash?.ToString() ?? "nothing") + ".");
            }

            if (block.Timestamp < prevTimestamp)
            {
                return new InvalidBlockTimestampException(
                    $"The block #{index} {block.Hash}'s timestamp " +
                    $"({block.Timestamp}) is earlier than " +
                    $"the block #{index - 1}'s ({prevTimestamp}).");
            }

            if (block.Index <= 1)
            {
                if (block.LastCommit is { })
                {
                    return new InvalidBlockLastCommitException(
                        "The genesis block and the next block should not have lastCommit.");
                }
            }
            else
            {
                // Any block after a PoW block should not have a last commit regardless of
                // the protocol version.  As we have the target block index > 2, if it is a PoW
                // block, the previous block would be a PoW block and is covered by this case.
                if (lastBlock?.ProtocolVersion <= BlockMetadata.PoWProtocolVersion)
                {
                    if (block.LastCommit is { })
                    {
                        return new InvalidBlockLastCommitException(
                            "A block after a PoW block should not have lastCommit.");
                    }
                }
                else
                {
                    if (block.LastCommit is null)
                    {
                        return new InvalidBlockLastCommitException(
                            "A PBFT block that does not have zero or one index or " +
                            "is not a block after a PoW block should have lastCommit.");
                    }
                }

                if (ValidateBlockCommit(
                    this[block.PreviousHash ?? Genesis.Hash], block.LastCommit) is { } e)
                {
                    return new InvalidBlockLastCommitException(e.Message);
                }
            }

            return null;
        }

        /// <summary>
        /// Checks if given <paramref name="block"/> is a valid genesis <see cref="Block{T}"/>.
        /// </summary>
        /// <param name="block">The target <see cref="Block{T}"/> to validate.</param>
        /// <returns><see langword="null"/> if given <paramref name="block"/> is valid,
        /// otherwise an <see cref="InvalidBlockException"/>.</returns>
        /// <exception cref="ArgumentException">If <paramref name="block"/> has
        /// <see cref="Block{T}.Index"/> value anything other than 0.</exception>
        private static InvalidBlockException ValidateGenesisBlock(Block<T> block)
        {
            if (block.Index != 0)
            {
                throw new ArgumentException(
                    $"Given {nameof(block)} must have index 0 but has index {block.Index}",
                    nameof(block));
            }

            int actualProtocolVersion = block.ProtocolVersion;
            const int currentProtocolVersion = Block<T>.CurrentProtocolVersion;
            if (block.ProtocolVersion > Block<T>.CurrentProtocolVersion)
            {
                return new InvalidBlockProtocolVersionException(
                    $"The protocol version ({actualProtocolVersion}) of the block " +
                    $"#{block.Index} {block.Hash} is not supported by this node." +
                    $"The highest supported protocol version is {currentProtocolVersion}.",
                    actualProtocolVersion);
            }

            if (block.PreviousHash is { } previousHash)
            {
                return new InvalidBlockPreviousHashException(
                    "A genesis block should not have previous hash, " +
                    $"but its value is {previousHash}.");
            }

            if (block.LastCommit is { } lastCommit)
            {
                return new InvalidBlockLastCommitException(
                    "A genesis block should not have lastCommit, " +
                    $"but its value is {lastCommit}.");
            }

            return null;
        }

        private static Dictionary<Address, long> ValidateNonces(
            Dictionary<Address, long> storedNonces,
            Block<T> block)
        {
            var nonceDeltas = new Dictionary<Address, long>();
            foreach (Transaction<T> tx in block.Transactions.OrderBy(tx => tx.Nonce))
            {
                nonceDeltas.TryGetValue(tx.Signer, out var nonceDelta);
                storedNonces.TryGetValue(tx.Signer, out var storedNonce);

                long expectedNonce = nonceDelta + storedNonce;

                if (!expectedNonce.Equals(tx.Nonce))
                {
                    throw new InvalidTxNonceException(
                        $"Transaction {tx.Id} has an invalid nonce {tx.Nonce} that is different " +
                        $"from expected nonce {expectedNonce}.",
                        tx.Id,
                        expectedNonce,
                        tx.Nonce);
                }

                nonceDeltas[tx.Signer] = nonceDelta + 1;
            }

            return nonceDeltas;
        }
    }
}
