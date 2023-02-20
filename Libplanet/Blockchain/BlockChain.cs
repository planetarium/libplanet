#nullable disable
using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Diagnostics.CodeAnalysis;
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
#pragma warning disable MEN002
    /// <summary>
    /// A class have <see cref="Block{T}"/>s, <see cref="Transaction{T}"/>s, and the chain
    /// information.
    /// <para>In order to watch its state changes, implement <see cref="IRenderer{T}"/>
    /// interface and pass it to the <see cref="BlockChain{T}(IBlockPolicy{T}, IStagePolicy{T}, IStore, IStateStore, Block{T}, IEnumerable{IRenderer{T}})"/> constructor.</para>
    /// </summary>
    /// <remarks>This object is guaranteed that it has at least one block, since it takes a genesis
    /// block when it's instantiated.</remarks>
    /// <typeparam name="T">An <see cref="IAction"/> type.  It should match
    /// to <see cref="Block{T}"/>'s type parameter.</typeparam>
    ///
#pragma warning restore MEN002
    public partial class BlockChain<T> : IBlockChainStates<T>
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
        private readonly IBlockChainStates<T> _blockChainStates;

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
        /// Initializes a new instance of the <see cref="BlockChain{T}"/> class.
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
                new BlockChainStates<T>(store, stateStore)
            )
        {
        }

#pragma warning disable MEN002
#pragma warning disable CS1573
        /// <inheritdoc cref="BlockChain{T}(IBlockPolicy{T}, IStagePolicy{T}, IStore, IStateStore, Block{T}, IEnumerable{IRenderer{T}})" />
        /// <param name="blockChainStates">The <see cref="IBlockChainStates{T}"/> implementation to state lookup.</param>
        public BlockChain(
            IBlockPolicy<T> policy,
            IStagePolicy<T> stagePolicy,
            IStore store,
            IStateStore stateStore,
            Block<T> genesisBlock,
            IEnumerable<IRenderer<T>> renderers,
            IBlockChainStates<T> blockChainStates
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
                new ActionEvaluator<T>(
                    _ => policy.BlockAction,
                    blockChainStates: blockChainStates,
                    trieGetter: hash => stateStore.GetStateRoot(
                        store.GetBlockDigest(hash)?.StateRootHash
                    ),
                    genesisHash: genesisBlock.Hash,
                    nativeTokenPredicate: policy.NativeTokens.Contains
                )
            )
        {
        }

#pragma warning disable MEN002
#pragma warning disable CS1573
        /// <inheritdoc cref="BlockChain{T}(IBlockPolicy{T}, IStagePolicy{T}, IStore, IStateStore, Block{T}, IEnumerable{IRenderer{T}}, IBlockChainStates{T})" />
        /// <param name="actionEvaluator">The <see cref="ActionEvaluator{T}" /> implementation to calculate next states when append new blocks.</param>
        public BlockChain(
            IBlockPolicy<T> policy,
            IStagePolicy<T> stagePolicy,
            IStore store,
            IStateStore stateStore,
            Block<T> genesisBlock,
            IEnumerable<IRenderer<T>> renderers,
            IBlockChainStates<T> blockChainStates,
            ActionEvaluator<T> actionEvaluator
        )
#pragma warning restore MEN002
#pragma warning restore CS1573
            : this(
                policy,
                stagePolicy,
                store,
                stateStore,
                store.GetCanonicalChainId() ?? Guid.NewGuid(),
                genesisBlock,
                false,
                renderers,
                blockChainStates,
                actionEvaluator
            )
        {
        }

        internal BlockChain(
            IBlockPolicy<T> policy,
            IStagePolicy<T> stagePolicy,
            IStore store,
            IStateStore stateStore,
            Guid id,
            Block<T> genesisBlock,
            IEnumerable<IRenderer<T>> renderers,
            IBlockChainStates<T> blockChainStates,
            ActionEvaluator<T> actionEvaluator
        )
            : this(
                policy,
                stagePolicy,
                store,
                stateStore,
                id,
                genesisBlock,
                false,
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
            bool inFork,
            IEnumerable<IRenderer<T>> renderers,
            IBlockChainStates<T> blockChainStates,
            ActionEvaluator<T> actionEvaluator)
        {
            if (store is null)
            {
                throw new ArgumentNullException(nameof(store));
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
            if (_blockChainStates is BlockChainStates<T> bindableImpl)
            {
                bindableImpl.Bind(this);
            }

            _blocks = new BlockSet<T>(store);
            Renderers = renderers is IEnumerable<IRenderer<T>> r
                ? r.ToImmutableArray()
                : ImmutableArray<IRenderer<T>>.Empty;
            ActionRenderers = Renderers.OfType<IActionRenderer<T>>().ToImmutableArray();
            _rwlock = new ReaderWriterLockSlim(LockRecursionPolicy.SupportsRecursion);
            _txLock = new object();

            if (Store.GetCanonicalChainId() is null)
            {
                Store.SetCanonicalChainId(Id);
            }

            _logger = Log
                .ForContext<BlockChain<T>>()
                .ForContext("Source", nameof(BlockChain<T>))
                .ForContext("ChainId", Id);
            ActionEvaluator = actionEvaluator;

            if (Count == 0)
            {
                if (inFork)
                {
                    Store.AppendIndex(Id, genesisBlock.Hash);
                }
                else
                {
                    Append(
                        genesisBlock,
                        renderBlocks: !inFork,
                        renderActions: !inFork,
                        evaluateActions: !inFork
                    );
                }
            }
            else if (!Genesis.Equals(genesisBlock))
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

        internal ActionEvaluator<T> ActionEvaluator { get; }

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

        /// <summary>
        /// Mine the genesis block of the blockchain.
        /// </summary>
        /// <param name="actions">List of actions will be included in the genesis block.
        /// If it's null, it will be replaced with <see cref="ImmutableArray{T}.Empty"/>
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
        public static Block<T> MakeGenesisBlock(
            IEnumerable<T> actions = null,
            PrivateKey privateKey = null,
            DateTimeOffset? timestamp = null,
            IAction blockAction = null,
            Predicate<Currency> nativeTokenPredicate = null)
        {
            privateKey ??= new PrivateKey();
            actions ??= ImmutableArray<T>.Empty;
            Transaction<T>[] transactions =
            {
                Transaction<T>.Create(
                    0, privateKey, null, actions, timestamp: timestamp),
            };

            BlockContent<T> content = new BlockContent<T>(
                new BlockMetadata(
                    index: 0L,
                    timestamp: timestamp ?? DateTimeOffset.UtcNow,
                    publicKey: privateKey.PublicKey,
                    difficulty: 0L,
                    totalDifficulty: 0L,
                    previousHash: null,
                    txHash: BlockContent<T>.DeriveTxHash(transactions)),
                transactions: transactions);

            PreEvaluationBlock<T> preEval = content.Mine();
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
                    transaction.Validate();
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
        /// <param name="stateCompleter">When the <see cref="BlockChain{T}"/> instance does not
        /// contain states dirty of the block which lastly updated states of a requested address,
        /// this delegate is called and its return value is used instead.
        /// <para><see cref="StateCompleters{T}.Recalculate"/> makes the incomplete states
        /// recalculated and filled on the fly.</para>
        /// <para><see cref="StateCompleters{T}.Reject"/> (which is default) makes the incomplete
        /// states (if needed) to cause <see cref="IncompleteBlockStatesException"/> instead.</para>
        /// </param>
        /// <returns>The current state of given <paramref name="address"/>.  This can be
        /// <see langword="null"/> if <paramref name="address"/> has no value.</returns>
        public IValue GetState(
            Address address,
            BlockHash? offset = null,
            StateCompleter<T> stateCompleter = null
        ) =>
            Count > 0
            ? GetStates(
                    new[] { address },
                    offset ?? Tip.Hash,
                    stateCompleter ?? StateCompleters<T>.Reject
                )[0]
            : null;

        /// <summary>
        /// Gets multiple states associated to the specified <paramref name="addresses"/>.
        /// </summary>
        /// <param name="addresses">Addresses of states to query.</param>
        /// <param name="offset">The <see cref="HashDigest{T}"/> of the block to start finding
        /// the states.  <see cref="Tip"/> by default.</param>
        /// <param name="stateCompleter">When the <see cref="BlockChain{T}"/> instance does not
        /// contain states of the block, this delegate is called and its return values are used
        /// instead.
        /// <para><see cref="StateCompleters{T}.Recalculate"/> makes the incomplete states
        /// recalculated and filled on the fly.</para>
        /// <para><see cref="StateCompleters{T}.Reject"/> (which is default) makes the incomplete
        /// states (if needed) to cause <see cref="IncompleteBlockStatesException"/> instead.</para>
        /// </param>
        /// <returns>The states associated to the specified <paramref name="addresses"/>.
        /// Associated values are ordered in the same way to the corresponding
        /// <paramref name="addresses"/>.  Absent states are represented as <see langword="null"/>.
        /// </returns>
        public IReadOnlyList<IValue> GetStates(
            IReadOnlyList<Address> addresses,
            BlockHash? offset = null,
            StateCompleter<T> stateCompleter = null
        ) =>
            Count > 0
                ? GetStates(
                    addresses,
                    offset ?? Tip.Hash,
                    stateCompleter ?? StateCompleters<T>.Reject
                )
                : new IValue[addresses.Count];

        public IReadOnlyList<IValue> GetStates(
            IReadOnlyList<Address> addresses,
            BlockHash offset,
            StateCompleter<T> stateCompleter
        ) => _blockChainStates.GetStates(addresses, offset, stateCompleter);

        /// <summary>
        /// Queries <paramref name="address"/>'s balance of the <paramref name="currency"/> in the
        /// <see cref="BlockChain{T}"/> from <paramref name="offset"/>.
        /// </summary>
        /// <param name="address">The owner <see cref="Address"/> to query.</param>
        /// <param name="currency">The currency type to query.</param>
        /// <param name="offset">The <see cref="HashDigest{T}"/> of the block to
        /// start finding the state. It will be the tip of the
        /// <see cref="BlockChain{T}"/> if it is <see langword="null"/>.</param>
        /// <param name="stateCompleter">When the <see cref="BlockChain{T}"/> instance does not
        /// contain states dirty of the block which lastly updated states of a requested address,
        /// this delegate is called and its return value is used instead.
        /// <para><see cref="FungibleAssetStateCompleters{T}.Recalculate"/> makes the incomplete
        /// states recalculated and filled on the fly.</para>
        /// <para><see cref="FungibleAssetStateCompleters{T}.Reject"/> (which is default) makes
        /// the incomplete states (if needed) to cause <see cref="IncompleteBlockStatesException"/>
        /// instead.</para></param>
        /// <returns>The <paramref name="address"/>'s current balance (or balance as of the given
        /// <paramref name="offset"/>) of the <paramref name="currency"/>.
        /// </returns>
        public FungibleAssetValue GetBalance(
            Address address,
            Currency currency,
            BlockHash? offset = null,
            FungibleAssetStateCompleter<T> stateCompleter = null
        ) =>
            GetBalance(
                address,
                currency,
                offset ?? Tip.Hash,
                stateCompleter ?? FungibleAssetStateCompleters<T>.Reject
            );

        /// <inheritdoc cref="IBlockChainStates{T}.GetBalance"/>
        public FungibleAssetValue GetBalance(
            Address address,
            Currency currency,
            BlockHash offset,
            FungibleAssetStateCompleter<T> stateCompleter
        ) => _blockChainStates.GetBalance(address, currency, offset, stateCompleter);

        /// <summary>
        /// Gets the total supply of a <paramref name="currency"/> in the
        /// <see cref="BlockChain{T}"/> from <paramref name="offset"/>, and if not found, derive
        /// from the sum of all balances.
        /// </summary>
        /// <param name="currency">The currency type to query.</param>
        /// <param name="offset">The <see cref="HashDigest{T}"/> of the block to
        /// start finding the state.</param>
        /// <param name="stateCompleter">When the <see cref="BlockChain{T}"/> instance does not
        /// contain states of the block, this delegate is called and its return values are used
        /// instead.
        /// <para><see cref="FungibleAssetStateCompleters{T}.Recalculate"/> makes the incomplete
        /// states recalculated and filled on the fly.</para>
        /// <para><see cref="FungibleAssetStateCompleters{T}.Reject"/> makes the incomplete states
        /// (if needed) to cause <see cref="IncompleteBlockStatesException"/> instead.</para>
        /// </param>
        /// <returns>The total supply value of <paramref name="currency"/> at
        /// <paramref name="offset"/> in <see cref="FungibleAssetValue"/>.</returns>
        public FungibleAssetValue GetTotalSupply(
            Currency currency,
            BlockHash? offset = null,
            TotalSupplyStateCompleter<T> stateCompleter = null
        ) =>
            GetTotalSupply(
                currency,
                offset ?? Tip.Hash,
                stateCompleter ?? TotalSupplyStateCompleters<T>.Reject
            );

        /// <inheritdoc cref="IBlockChainStates{T}.GetTotalSupply"/>
        public FungibleAssetValue GetTotalSupply(
            Currency currency,
            BlockHash offset,
            TotalSupplyStateCompleter<T> stateCompleter
        ) => _blockChainStates.GetTotalSupply(currency, offset, stateCompleter);

        public ValidatorSet GetValidatorSet(
            BlockHash? offset = null,
            ValidatorSetStateCompleter<T> stateCompleter = null
        ) =>
            GetValidatorSet(
                offset ?? Tip.Hash,
                stateCompleter ?? ValidatorSetStateCompleters<T>.Reject
            );

        /// <inheritdoc cref="IBlockChainStates{T}.GetValidatorSet"/>
        public ValidatorSet GetValidatorSet(
            BlockHash offset,
            ValidatorSetStateCompleter<T> stateCompleter
        ) => _blockChainStates.GetValidatorSet(offset, stateCompleter);

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
        /// <param name="stateCompleters">The strategy to complement incomplete block states which
        /// are required for action execution and rendering.
        /// <see cref="StateCompleterSet{T}.Recalculate"/> by default.
        /// </param>
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
        public void Append(
            Block<T> block,
            StateCompleterSet<T>? stateCompleters = null
        ) =>
            Append(
                block,
                evaluateActions: true,
                renderBlocks: true,
                renderActions: true,
                stateCompleters: stateCompleters
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
        /// Evaluates actions in the given <paramref name="block"/> and fills states with the
        /// results.
        /// </summary>
        /// <param name="block">A block to execute.</param>
        /// <param name="stateCompleters">The strategy to complement incomplete previous block
        /// states.  <see cref="StateCompleterSet{T}.Recalculate"/> by default.
        /// </param>
        /// <returns>The result of action evaluations of the given <paramref name="block"/>.
        /// </returns>
        /// <remarks>This method is idempotent (except for rendering).  If the given
        /// <paramref name="block"/> has executed before, it does not execute it nor mutate states.
        /// Exposed as public for benchmarking.
        /// </remarks>
        public IReadOnlyList<ActionEvaluation> ExecuteActions(
            Block<T> block,
            StateCompleterSet<T>? stateCompleters = null
        )
        {
            IReadOnlyList<ActionEvaluation> evaluations = ActionEvaluator.Evaluate(
                block,
                stateCompleters ?? StateCompleterSet<T>.Recalculate
            );
            _rwlock.EnterWriteLock();
            try
            {
                // Update states
                DateTimeOffset setStatesStarted = DateTimeOffset.Now;
                var totalDelta =
                    evaluations.GetTotalDelta(
                        ToStateKey,
                        ToFungibleAssetKey,
                        ToTotalSupplyKey,
                        ValidatorSetKey);
                const string deltaMsg =
                    "Summarized the states delta with {KeyCount} key changes " +
                    "made by block #{BlockIndex} {BlockHash}";
                _logger.Debug(deltaMsg, totalDelta.Count, block.Index, block.Hash);

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

                TimeSpan setStatesDuration = DateTimeOffset.Now - setStatesStarted;
                _logger
                    .ForContext("Tag", "Metric")
                    .ForContext("Subtag", "StateUpdateDuration")
                    .Information(
                        "Finished updating the states with {KeyCount} key changes affected by " +
                        "block #{BlockIndex} {BlockHash} in {DurationMs:F0}ms",
                        totalDelta.Count,
                        block.Index,
                        block.Hash,
                        setStatesDuration.TotalMilliseconds);

                IEnumerable<TxExecution> txExecutions = MakeTxExecutions(block, evaluations);
                UpdateTxExecutions(txExecutions);
            }
            finally
            {
                _rwlock.ExitWriteLock();
            }

            return evaluations;
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
            DateTimeOffset startTime = DateTimeOffset.Now;

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

            TimeSpan duration = DateTimeOffset.Now - startTime;
            _logger
                .ForContext("Tag", "Metric")
                .ForContext("Subtag", "FindHashesDuration")
                .Information(
                    "Found {HashCount} hashes from storage with {ChainIdCount} chain ids " +
                    "in {DurationMs:F0}ms",
                    result.Count,
                    Store.ListChainIds().Count(),
                    duration.TotalMilliseconds);

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

            IEnumerable<IRenderer<T>> renderers = inheritRenderers
                ? Renderers
                : Enumerable.Empty<IRenderer<T>>();
            var forked = new BlockChain<T>(
                Policy,
                StagePolicy,
                Store,
                StateStore,
                Guid.NewGuid(),
                Genesis,
                true,
                renderers,
                _blockChainStates,
                ActionEvaluator);
            Guid forkedId = forked.Id;
            _logger.Information(
                "Forked chain at {branchPoint} from id {previousChainId} to id {forkedChainId}",
                point,
                Id,
                forkedId);
            try
            {
                _rwlock.EnterReadLock();

                Store.ForkBlockIndexes(Id, forkedId, point);
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
            }
            finally
            {
                _rwlock.ExitReadLock();
            }

            return forked;
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

#pragma warning disable MEN003
        internal void Append(
            Block<T> block,
            bool evaluateActions,
            bool renderBlocks,
            bool renderActions,
            IReadOnlyList<ActionEvaluation> actionEvaluations = null,
            StateCompleterSet<T>? stateCompleters = null
        )
        {
            if (!evaluateActions && renderActions)
            {
                throw new ArgumentException(
                    $"{nameof(renderActions)} option requires {nameof(evaluateActions)} " +
                    "to be turned on.",
                    nameof(renderActions)
                );
            }

            renderActions = renderActions && renderBlocks && ActionRenderers.Any();

            // Since rendering process requires every step's states, if required block states
            // are incomplete they are complemented anyway:
            stateCompleters ??= StateCompleterSet<T>.Recalculate;

            _logger.Information(
                "Trying to append block #{BlockIndex} {BlockHash}...", block?.Index, block?.Hash);

            block.ValidateTimestamp();

            _rwlock.EnterUpgradeableReadLock();
            Block<T> prevTip = Count > 0 ? Tip : null;
            try
            {
                InvalidBlockException ibe = ValidateNextBlock(block);

                if (!(ibe is null))
                {
                    _logger.Error(ibe, "Failed to append invalid block {BlockHash}", block.Hash);
                    throw ibe;
                }

                var nonceDeltas = new Dictionary<Address, long>();

                foreach (Transaction<T> tx1 in block.Transactions.OrderBy(tx => tx.Nonce))
                {
                    if (Policy.ValidateNextBlockTx(this, tx1) is { } tpve)
                    {
                        throw new TxPolicyViolationException(
                            "According to BlockPolicy, this transaction is not valid.",
                            tx1.Id,
                            tpve);
                    }

                    Address txSigner = tx1.Signer;
                    nonceDeltas.TryGetValue(txSigner, out var nonceDelta);

                    long expectedNonce = nonceDelta + Store.GetTxNonce(Id, txSigner);

                    if (!expectedNonce.Equals(tx1.Nonce))
                    {
                        _logger.Error("Failed to append invalid tx {TxId}", tx1.Id);
                        throw new InvalidTxNonceException(
                            "Transaction nonce is invalid.",
                            tx1.Id,
                            expectedNonce,
                            tx1.Nonce
                        );
                    }

                    nonceDeltas[txSigner] = nonceDelta + 1;
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
                                block: block,
                                stateCompleters: (StateCompleterSet<T>)stateCompleters);
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

        private InvalidBlockException ValidateNextBlock(Block<T> block)
        {
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
            else if (Count > 0 && actualProtocolVersion < Tip.ProtocolVersion)
            {
                string message =
                    "The protocol version is disallowed to be downgraded from the topmost block " +
                    $"in the chain ({actualProtocolVersion} < {Tip.ProtocolVersion}).";
                return new InvalidBlockProtocolVersionException(message, actualProtocolVersion);
            }

            BlockPolicyViolationException bpve = Policy.ValidateNextBlock(this, block);
            if (bpve is { })
            {
                return bpve;
            }

            long index = this.Count;
            long difficulty = Policy.GetNextBlockDifficulty(this);
            BigInteger totalDifficulty = index >= 1
                    ? this[index - 1].TotalDifficulty + block.Difficulty
                    : block.Difficulty;

            Block<T> lastBlock = index >= 1 ? this[index - 1] : null;
            BlockHash? prevHash = lastBlock?.Hash;
            DateTimeOffset? prevTimestamp = lastBlock?.Timestamp;

            if (block.Index != index)
            {
                return new InvalidBlockIndexException(
                    $"The expected index of block {block.Hash} is #{index}, " +
                    $"but its index is #{block.Index}.");
            }

            if (block.Difficulty < difficulty)
            {
                return new InvalidBlockDifficultyException(
                    $"The expected difficulty of the block #{index} {block.Hash} " +
                    $"is {difficulty}, but its difficulty is {block.Difficulty}.");
            }

            if (block.TotalDifficulty != totalDifficulty)
            {
                var msg = $"The expected total difficulty of the block #{index} " +
                          $"{block.Hash} is {totalDifficulty}, but its difficulty is " +
                          $"{block.TotalDifficulty}.";
                return new InvalidBlockTotalDifficultyException(
                    msg,
                    block.Difficulty,
                    block.TotalDifficulty);
            }

            if (!block.PreviousHash.Equals(prevHash))
            {
                if (prevHash is null)
                {
                    return new InvalidBlockPreviousHashException(
                        $"The genesis block {block.Hash} should not have previous hash, " +
                        $"but its value is {block.PreviousHash}.");
                }

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

            return null;
        }
    }
}
