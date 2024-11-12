#nullable disable
using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Diagnostics;
using System.Diagnostics.CodeAnalysis;
using System.Globalization;
using System.Linq;
using System.Security.Cryptography;
using System.Threading;
using Libplanet.Action;
using Libplanet.Action.Loader;
using Libplanet.Action.State;
using Libplanet.Blockchain.Policies;
using Libplanet.Blockchain.Renderers;
using Libplanet.Common;
using Libplanet.Crypto;
using Libplanet.Store;
using Libplanet.Types.Assets;
using Libplanet.Types.Blocks;
using Libplanet.Types.Consensus;
using Libplanet.Types.Tx;
using Serilog;

namespace Libplanet.Blockchain
{
#pragma warning disable MEN002
    /// <summary>
    /// <para>
    /// A class have <see cref="Block"/>s, <see cref="Transaction"/>s, and the chain
    /// information.
    /// </para>
    /// <para>
    /// In order to watch its state changes, implement <see cref="IRenderer"/> interface
    /// and pass it to the
    /// <see cref="BlockChain(IBlockPolicy, IStagePolicy, IStore, IStateStore, Block, IBlockChainStates, IActionEvaluator, IEnumerable{IRenderer}, bool)"/>
    /// constructor.
    /// </para>
    /// </summary>
    /// <remarks>This object is guaranteed that it has at least one block, since it takes a genesis
    /// block when it's instantiated.</remarks>
#pragma warning restore MEN002
    public partial class BlockChain : IBlockChainStates
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
        /// All <see cref="Block"/>s in the <see cref="BlockChain"/>
        /// storage, including orphan <see cref="Block"/>s.
        /// Keys are <see cref="Block.Hash"/>es and values are
        /// their corresponding <see cref="Block"/>s.
        /// </summary>
        private BlockSet _blocks;

        /// <summary>
        /// Cached genesis block.
        /// </summary>
        private Block _genesis;

        private HashDigest<SHA256>? _nextStateRootHash;

        /// <summary>
        /// Initializes a new instance of the <see cref="BlockChain"/> class by loading
        /// the canonical chain from given <paramref name="store"/>.
        /// </summary>
        /// <param name="policy"><see cref="IBlockPolicy"/> to use in the
        /// <see cref="BlockChain"/>.</param>
        /// <param name="stagePolicy">The staging policy to follow.</param>
        /// <param name="store"><see cref="IStore"/> to store <see cref="Block"/>s,
        /// <see cref="Transaction"/>s, and <see cref="BlockChain"/> information.</param>
        /// <param name="genesisBlock">The genesis <see cref="Block"/> of
        /// the <see cref="BlockChain"/>, which is a part of the consensus.
        /// If the given <paramref name="store"/> already contains the genesis block
        /// it checks if the existing genesis block and this argument is the same.
        /// If the <paramref name="store"/> has no genesis block yet this argument will
        /// be used for that.</param>
        /// <param name="blockChainStates">The <see cref="IBlockChainStates"/> implementation for
        /// state lookup.</param>
        /// <param name="actionEvaluator">The <see cref="ActionEvaluator" /> implementation to
        /// calculate next states when append new blocks.</param>
        /// <param name="renderers">Listens state changes on the created chain.  Listens nothing
        /// by default or if it is <see langword="null"/>.  Note that action renderers receive
        /// events made by unsuccessful transactions as well.</param>
        /// <param name="stateStore"><see cref="IStateStore"/> to store states.</param>
        /// <param name="determineNextBlockStateRootHash">
        /// Whether to determine the next block's state root hash when the chain is instantiated.
        /// </param>
        /// <exception cref="ArgumentException">Thrown when <paramref name="store"/> does not
        /// have canonical chain id set, i.e. <see cref="IStore.GetCanonicalChainId()"/> is
        /// <see langword="null"/>.</exception>
        /// <exception cref="ArgumentNullException">Thrown when either of <paramref name="store"/>
        /// or <paramref name="stateStore"/> is <see langword="null"/>.</exception>
        /// <exception cref="InvalidGenesisBlockException">Thrown when the <paramref name="store"/>
        /// has a genesis block and it does not match to what the network expects
        /// (i.e., <paramref name="genesisBlock"/>).</exception>
        public BlockChain(
            IBlockPolicy policy,
            IStagePolicy stagePolicy,
            IStore store,
            IStateStore stateStore,
            Block genesisBlock,
            IBlockChainStates blockChainStates,
            IActionEvaluator actionEvaluator,
            IEnumerable<IRenderer> renderers = null,
            bool determineNextBlockStateRootHash = true)
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
                blockChainStates,
                actionEvaluator,
                renderers,
                determineNextBlockStateRootHash)
        {
        }

        private BlockChain(
            IBlockPolicy policy,
            IStagePolicy stagePolicy,
            IStore store,
            IStateStore stateStore,
            Guid id,
            Block genesisBlock,
            IBlockChainStates blockChainStates,
            IActionEvaluator actionEvaluator,
            IEnumerable<IRenderer> renderers,
            bool determineNextBlockStateRootHash)
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

            _blocks = new BlockSet(store);
            Renderers = renderers is IEnumerable<IRenderer> r
                ? r.ToImmutableArray()
                : ImmutableArray<IRenderer>.Empty;
            ActionRenderers = Renderers.OfType<IActionRenderer>().ToImmutableArray();
            _rwlock = new ReaderWriterLockSlim(LockRecursionPolicy.SupportsRecursion);
            _txLock = new object();

            _logger = Log
                .ForContext<BlockChain>()
                .ForContext("Source", nameof(BlockChain))
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

            if (Tip.ProtocolVersion < BlockMetadata.SlothProtocolVersion)
            {
                _nextStateRootHash = Tip.StateRootHash;
            }
            else if (determineNextBlockStateRootHash)
            {
                _nextStateRootHash =
                    DetermineNextBlockStateRootHash(Tip, out var actionEvaluations);
                IEnumerable<TxExecution> txExecutions = MakeTxExecutions(Tip, actionEvaluations);
                UpdateTxExecutions(txExecutions);
            }
        }

        ~BlockChain()
        {
            _rwlock?.Dispose();
        }

        /// <summary>
        /// An event that is invoked when <see cref="Tip"/> is changed.
        /// </summary>
        /// <remarks>
        /// This is only invoked when <see cref="Tip"/> is changed, <em>not</em> when
        /// a <see cref="BlockChain"/> is instantiated.  Furthermore, it is guaranteed
        /// that the new tip event argument's <see cref="Block.Index"/> will always
        /// be <em>increasing</em> for each invocation.
        /// </remarks>
        // FIXME: This should be completely replaced by IRenderer.RenderBlock() or any other
        // alternatives.
        internal event EventHandler<(Block OldTip, Block NewTip)> TipChanged;

#pragma warning disable MEN002
        /// <summary>
        /// The list of registered renderers listening the state changes.
        /// </summary>
        /// <remarks>
        /// Since this value is immutable, renderers cannot be registered after once a <see
        /// cref="BlockChain"/> object is instantiated; use <c>renderers</c> option of
        /// <see cref="BlockChain(IBlockPolicy, IStagePolicy, IStore, IStateStore, Block, IBlockChainStates, IActionEvaluator, IEnumerable{IRenderer}, bool)"/>
        /// constructor instead.
        /// </remarks>
#pragma warning restore MEN002
        public IImmutableList<IRenderer> Renderers { get; }

        /// <summary>
        /// A filtered list, from <see cref="Renderers"/>, which contains only <see
        /// cref="IActionRenderer"/> instances.
        /// </summary>
        public IImmutableList<IActionRenderer> ActionRenderers { get; }

        /// <summary>
        /// The block and blockchain policy.
        /// </summary>
        public IBlockPolicy Policy { get; }

        /// <summary>
        /// The staging policy.
        /// </summary>
        public IStagePolicy StagePolicy { get; set; }

        /// <summary>
        /// The topmost <see cref="Block"/> of the current blockchain.
        /// </summary>
        public Block Tip => this[-1];

        /// <summary>
        /// The first <see cref="Block"/> in the <see cref="BlockChain"/>.
        /// </summary>
        public Block Genesis => _genesis ??= this[0];

        public Guid Id { get; private set; }

        /// <summary>
        /// All <see cref="Block.Hash"/>es in the current index.  The genesis block's hash goes
        /// first, and the tip goes last.
        /// Returns a <see cref="long"/> integer that represents the number of elements in the
        /// <see cref="BlockChain"/>.
        /// </summary>
        public IEnumerable<BlockHash> BlockHashes => IterateBlockHashes();

        /// <summary>
        /// Returns a <see cref="long"/> that represents the number of <see cref="Block"/>s in a
        /// <see cref="BlockChain"/>.  This is guaranteed to be greater than or equal to 1,
        /// as <see cref="BlockChain"/> always contains at least
        /// its genesis <see cref="Block"/>.
        /// </summary>
        /// <returns>The number of <see cref="Block"/>s in the <see cref="BlockChain"/>.
        /// </returns>
        public long Count => Store.CountIndex(Id);

        internal IStore Store { get; }

        internal IStateStore StateStore { get; }

        internal IActionEvaluator ActionEvaluator { get; }

        /// <summary>
        /// Whether the instance is canonical or not.
        /// </summary>
        internal bool IsCanonical => Store.GetCanonicalChainId() is Guid guid && Id == guid;

        /// <summary>
        /// Gets the block corresponding to the <paramref name="index"/>.
        /// </summary>
        /// <param name="index">A number of index of <see cref="Block"/>.</param>
        /// <exception cref="ArgumentOutOfRangeException">Thrown when the given index of
        /// <see cref="Block"/> does not exist.</exception>
        public Block this[int index] => this[(long)index];

        /// <summary>
        /// Gets the block corresponding to the <paramref name="index"/>.
        /// </summary>
        /// <param name="index">A number of index of <see cref="Block"/>.</param>
        /// <exception cref="ArgumentOutOfRangeException">Thrown when the given index of
        /// <see cref="Block"/> does not exist.</exception>
        public Block this[long index]
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
        /// <param name="blockHash">A <see cref="Block.Hash"/> of the <see cref="Block"/> to
        /// get. </param>
        /// <exception cref="KeyNotFoundException">Thrown when there is no <see cref="Block"/>
        /// with a given <paramref name="blockHash"/>.</exception>
        public Block this[in BlockHash blockHash]
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
        /// Creates a new instance of <see cref="BlockChain"/> from an empty
        /// <see cref="IStore"/>.
        /// </summary>
        /// <returns>A newly created <see cref="BlockChain"/>.</returns>
        /// <exception cref="ArgumentNullException">Thrown when either <paramref name="store"/>
        /// or <paramref name="stateStore"/> is <see langword="null"/>.</exception>
        /// <exception cref="ArgumentException">Thrown when <paramref name="store"/> already has a
        /// canonical chain id.</exception>
        /// <exception cref="InvalidBlockException">Thrown when <paramref name="genesisBlock"/>
        /// is invalid.</exception>
        /// <exception cref="InvalidTxException">Thrown when <paramref name="genesisBlock"/>
        /// contains an invalid <see cref="Transaction"/>.</exception>
        public static BlockChain Create(
            IBlockPolicy policy,
            IStagePolicy stagePolicy,
            IStore store,
            IStateStore stateStore,
            Block genesisBlock,
            IActionEvaluator actionEvaluator,
            IEnumerable<IRenderer> renderers = null,
            IBlockChainStates blockChainStates = null)
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
            else if (actionEvaluator is null)
            {
                throw new ArgumentNullException(nameof(actionEvaluator));
            }
            else if (store.GetCanonicalChainId() is { } canonId)
            {
                throw new ArgumentException(
                    $"Given {nameof(store)} already has its canonical chain id set: {canonId}",
                    nameof(store));
            }

            var id = Guid.NewGuid();

            if (genesisBlock.ProtocolVersion < BlockMetadata.SlothProtocolVersion)
            {
                var preEval = new PreEvaluationBlock(
                    genesisBlock.Header, genesisBlock.Transactions, genesisBlock.Evidence);
                var computedStateRootHash =
                    actionEvaluator.Evaluate(preEval, null).Last().OutputState;
                if (!genesisBlock.StateRootHash.Equals(computedStateRootHash))
                {
                    throw new InvalidBlockStateRootHashException(
                        $"Given block #{genesisBlock.Index} {genesisBlock.Hash} has " +
                        $"a state root hash {genesisBlock.StateRootHash} that is different " +
                        $"from the calculated state root hash {computedStateRootHash}",
                        genesisBlock.StateRootHash,
                        computedStateRootHash);
                }
            }

            ValidateGenesis(genesisBlock);
            var nonceDeltas = ValidateGenesisNonces(genesisBlock);

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

            blockChainStates ??= new BlockChainStates(store, stateStore);
            return new BlockChain(
                policy,
                stagePolicy,
                store,
                stateStore,
                id,
                genesisBlock,
                blockChainStates,
                actionEvaluator,
                renderers,
                true);
        }

        /// <summary>
        /// Determines whether the <see cref="BlockChain"/> contains <see cref="Block"/>
        /// the specified <paramref name="blockHash"/>.
        /// </summary>
        /// <param name="blockHash">The <see cref="HashDigest{T}"/> of the <see cref="Block"/> to
        /// check if it is in the <see cref="BlockChain"/>.</param>
        /// <returns>
        /// <see langword="true"/> if the <see cref="BlockChain"/> contains
        /// <see cref="Block"/> with the specified <paramref name="blockHash"/>; otherwise,
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
        /// <param name="txId">A <see cref="TxId"/> of the <see cref="Transaction"/> to get.
        /// </param>
        /// <returns><see cref="Transaction"/> with <paramref name="txId"/>.</returns>
        /// <exception cref="KeyNotFoundException">Thrown when there is no
        /// <see cref="Transaction"/> with a given <paramref name="txId"/>.</exception>
        public Transaction GetTransaction(TxId txId)
        {
            if (StagePolicy.Get(this, txId) is { } tx)
            {
                return tx;
            }

            _rwlock.EnterReadLock();
            try
            {
                if (Store.GetTransaction(txId) is { } transaction)
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
        /// Queries the recorded <see cref="TxExecution"/> for a successful or failed
        /// <see cref="Transaction"/> within a <see cref="Block"/>.
        /// </summary>
        /// <param name="blockHash">The <see cref="Block.Hash"/> of the <see cref="Block"/>
        /// that the <see cref="Transaction"/> is executed within.</param>
        /// <param name="txid">The executed <see cref="Transaction"/>'s
        /// <see cref="Transaction.Id"/>.</param>
        /// <returns>The recorded <see cref="TxExecution"/>.  If the transaction has never been
        /// executed within the block, it returns <see langword="null"/> instead.</returns>
        public TxExecution GetTxExecution(BlockHash blockHash, TxId txid) =>
            Store.GetTxExecution(blockHash, txid);

        /// <summary>
        /// Adds a <paramref name="block"/> to the end of this chain.
        /// <para><see cref="Block.Transactions"/> in the <paramref name="block"/> updates
        /// states and balances in the blockchain, and <see cref="TxExecution"/>s for
        /// transactions are recorded.</para>
        /// <para>Note that <see cref="Renderers"/> receive events right after the <paramref
        /// name="block"/> is confirmed (and thus all states reflect changes in the <paramref
        /// name="block"/>).</para>
        /// </summary>
        /// <param name="block">A next <see cref="Block"/>, which is mined,
        /// to add.</param>
        /// <param name="blockCommit">A <see cref="BlockCommit"/> that has +2/3 commits for the
        /// given block.</param>
        /// <exception cref="BlockPolicyViolationException">Thrown when given
        /// <paramref name="block"/> does not satisfy any of the constraints
        /// validated by <see cref="IBlockPolicy.ValidateNextBlock"/> of <see cref="Policy"/>.
        /// </exception>
        /// <exception cref="InvalidBlockException">Thrown when the given <paramref name="block"/>
        /// is invalid, in itself or according to the <see cref="Policy"/>.</exception>
        /// <exception cref="InvalidActionException">Thrown when given <paramref name="block"/>
        /// contains an action that cannot be loaded with <see cref="IActionLoader"/>.</exception>
        /// <exception cref="InvalidTxNonceException">Thrown when the
        /// <see cref="Transaction.Nonce"/> is different from
        /// <see cref="GetNextTxNonce"/> result of the
        /// <see cref="Transaction.Signer"/>.</exception>
        /// <exception cref="InvalidBlockCommitException">Thrown when the given
        /// <paramref name="block"/> and <paramref name="blockCommit"/> is invalid.</exception>
        public void Append(
            Block block,
            BlockCommit blockCommit)
        {
            if (block.ProtocolVersion < BlockMetadata.SlothProtocolVersion)
            {
                AppendStateRootHashPreceded(block, blockCommit, render: true);
            }
            else
            {
                Append(block, blockCommit, render: true);
            }
        }

        /// <summary>
        /// Adds <paramref name="transaction"/> to the pending list so that a next
        /// <see cref="Block"/> to be mined may contain given <paramref name="transaction"/>.
        /// </summary>
        /// <param name="transaction"><see cref="Transaction"/> to add to the pending list.
        /// </param>
        /// <returns><see langword="true"/> if staging was successful,
        /// <see langword="false"/> otherwise.</returns>
        /// <exception cref="InvalidTxGenesisHashException">Thrown when given
        /// <paramref name="transaction"/> has invalid <see cref="Transaction.GenesisHash"/>.
        /// </exception>
        public bool StageTransaction(Transaction transaction)
        {
            if (!transaction.GenesisHash.Equals(Genesis.Hash))
            {
                var msg = "GenesisHash of the transaction is not compatible " +
                          "with the BlockChain.Genesis.Hash.";
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
        /// <param name="transaction">A <see cref="Transaction"/>
        /// to remove from the pending list.</param>
        /// <returns><see langword="true"/> if unstaging was successful,
        /// <see langword="false"/> otherwise.</returns>
        /// <seealso cref="StageTransaction"/>
        public bool UnstageTransaction(Transaction transaction) =>
            StagePolicy.Unstage(this, transaction.Id);

        /// <summary>
        /// Gets next <see cref="Transaction.Nonce"/> of the address.
        /// </summary>
        /// <param name="address">The <see cref="Address"/> from which to obtain the
        /// <see cref="Transaction.Nonce"/> value.</param>
        /// <returns>The next <see cref="Transaction.Nonce"/> value of the
        /// <paramref name="address"/>.</returns>
        public long GetNextTxNonce(Address address)
            => StagePolicy.GetNextTxNonce(this, address);

        /// <summary>
        /// Creates a new <see cref="Transaction"/> with custom actions and stage it.
        /// It's available only if the genesis block exists.
        /// </summary>
        /// <param name="privateKey">A <see cref="PrivateKey"/> of the account who creates and
        /// signs a new transaction.</param>
        /// <param name="actions">A list of custom actions to include to a new transaction.
        /// </param>
        /// <param name="maxGasPrice"> The maximum gas price this transaction can pay fee. </param>
        /// <param name="gasLimit"> The maximum amount of gas this transaction can consume.
        /// </param>
        /// <param name="timestamp">The time this <see cref="Transaction"/> is created and
        /// signed.</param>
        /// <returns>A created new <see cref="Transaction"/> signed by the given
        /// <paramref name="privateKey"/>.</returns>
        public Transaction MakeTransaction(
            PrivateKey privateKey,
            IEnumerable<IAction> actions,
            FungibleAssetValue? maxGasPrice = null,
            long? gasLimit = null,
            DateTimeOffset? timestamp = null)
        {
            timestamp = timestamp ?? DateTimeOffset.UtcNow;
            lock (_txLock)
            {
                // FIXME: Exception should be documented when the genesis block does not exist.
                Transaction tx = Transaction.Create(
                    GetNextTxNonce(privateKey.Address),
                    privateKey,
                    Genesis.Hash,
                    actions.Select(x => x.PlainValue),
                    maxGasPrice,
                    gasLimit,
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
        /// Finds the branch point <see cref="BlockHash"/> between this <see cref="BlockChain"/>
        /// and <paramref name="locator"/> and returns the list of <see cref="BlockHash"/>es of
        /// successive <see cref="Block"/>s starting from the branch point
        /// <see cref="BlockHash"/>.</summary>
        /// <param name="locator">The <see cref="BlockLocator"/> to find the branching point
        /// from.</param>
        /// <param name="count">The Maximum number of <see cref="BlockHash"/>es to return.</param>
        /// <returns>A list of <see cref="BlockHash"/>es including
        /// the branch point <see cref="BlockHash"/>.  If no branch point is found,
        /// returns an empty list of <see cref="BlockHash"/>es.</returns>
        public IReadOnlyList<BlockHash> FindNextHashes(
            BlockLocator locator,
            int count = 500)
        {
            Stopwatch stopwatch = new Stopwatch();
            stopwatch.Start();

            if (!(FindBranchpoint(locator) is { } branchpoint))
            {
                return Array.Empty<BlockHash>();
            }

            if (!(Store.GetBlockIndex(branchpoint) is { } branchpointIndex))
            {
                return Array.Empty<BlockHash>();
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

            return result;
        }

        /// <summary>
        /// Returns a new <see cref="BlockLocator"/> from the tip of current chain.
        /// </summary>
        /// <returns>A instance of block locator.</returns>
        public BlockLocator GetBlockLocator()
        {
            _rwlock.EnterReadLock();
            try
            {
                return new BlockLocator(Tip.Hash);
            }
            finally
            {
                _rwlock.ExitReadLock();
            }
        }

        /// <summary>
        /// Returns a <see cref="BlockCommit"/> of given <see cref="Block"/> index.
        /// </summary>
        /// <param name="index">A index value (height) of <see cref="Block"/> to retrieve.
        /// </param>
        /// <returns>Returns a <see cref="BlockCommit"/> of given <see cref="Block"/> index.
        /// Following conditions will return <see langword="null"/>:
        /// <list type="bullet">
        ///     <item>
        ///         Given <see cref="Block"/> <see cref="Block.ProtocolVersion"/> is
        ///         Proof-of-Work.
        ///     </item>
        ///     <item>
        ///         Given <see cref="Block"/> is <see cref="BlockChain.Genesis"/> block.
        ///     </item>
        /// </list>
        /// </returns>
        /// <exception cref="KeyNotFoundException">Thrown if given index does not exist in the
        /// blockchain.</exception>
        /// <remarks>The <see cref="BlockChain.Genesis"/> block does not have
        /// <see cref="BlockCommit"/> because the genesis block is not committed by a consensus.
        /// </remarks>
        public BlockCommit GetBlockCommit(long index)
        {
            Block block = this[index];

            if (block.ProtocolVersion < BlockMetadata.PBFTProtocolVersion)
            {
                return null;
            }

            return index == Tip.Index
                ? Store.GetChainBlockCommit(Id)
                : this[index + 1].LastCommit;
        }

        /// <summary>
        /// Returns a <see cref="BlockCommit"/> of given <see cref="Block"/> index.
        /// </summary>
        /// <param name="blockHash">A hash value of <see cref="Block"/> to retrieve.
        /// </param>
        /// <returns>Returns a <see cref="BlockCommit"/> of given <see cref="Block"/> hash, if
        /// the <see cref="BlockCommit"/> of <see cref="BlockChain.Genesis"/> block is requested,
        /// then returns <see langword="null"/>.</returns>
        /// <exception cref="KeyNotFoundException">Thrown if given hash does not exist in the
        /// blockchain.</exception>
        /// <remarks>The <see cref="BlockChain.Genesis"/> block does not have
        /// <see cref="BlockCommit"/> because the genesis block is not committed by a consensus.
        /// </remarks>
        public BlockCommit GetBlockCommit(BlockHash blockHash) =>
            GetBlockCommit(this[blockHash].Index);

#pragma warning disable MEN003
        internal void Append(
            Block block,
            BlockCommit blockCommit,
            bool render)
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

            _logger.Information(
                "Trying to append block #{BlockIndex} {BlockHash}...", block.Index, block.Hash);

            block.ValidateTimestamp();

            _rwlock.EnterUpgradeableReadLock();
            Block prevTip = Tip;
            try
            {
                ValidateBlock(block);
                ValidateBlockCommit(block, blockCommit);

                var nonceDeltas = ValidateBlockNonces(
                    block.Transactions
                        .Select(tx => tx.Signer)
                        .Distinct()
                        .ToDictionary(signer => signer, signer => Store.GetTxNonce(Id, signer)),
                    block);

                ValidateBlockLoadActions(block);

                if (Policy.ValidateNextBlock(this, block) is { } bpve)
                {
                    throw bpve;
                }

                foreach (Transaction tx in block.Transactions)
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
                    ValidateBlockStateRootHash(block);

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

                    _blocks[block.Hash] = block;

                    foreach (KeyValuePair<Address, long> pair in nonceDeltas)
                    {
                        Store.IncreaseTxNonce(Id, pair.Key, pair.Value);
                    }

                    foreach (var tx in block.Transactions)
                    {
                        Store.PutTxIdBlockHashIndex(tx.Id, block.Hash);
                    }

                    if (block.Index != 0 && blockCommit is { })
                    {
                        Store.PutChainBlockCommit(Id, blockCommit);
                    }

                    foreach (var ev in block.Evidence)
                    {
                        if (Store.GetPendingEvidence(ev.Id) != null)
                        {
                            Store.DeletePendingEvidence(ev.Id);
                        }

                        Store.PutCommittedEvidence(ev);
                    }

                    Store.AppendIndex(Id, block.Hash);
                    _nextStateRootHash = null;

                    foreach (var ev in GetPendingEvidence().ToArray())
                    {
                        if (IsEvidenceExpired(ev))
                        {
                            Store.DeletePendingEvidence(ev.Id);
                        }
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
                    foreach (Transaction tx in block.Transactions)
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

                HashDigest<SHA256> nextStateRootHash =
                    DetermineNextBlockStateRootHash(block, out var actionEvaluations);
                _nextStateRootHash = nextStateRootHash;

                IEnumerable<TxExecution> txExecutions =
                    MakeTxExecutions(block, actionEvaluations);
                UpdateTxExecutions(txExecutions);

                if (render)
                {
                    _logger.Information(
                        "Invoking {RendererCount} renderers and " +
                        "{ActionRendererCount} action renderers for #{BlockIndex} {BlockHash}",
                        Renderers.Count,
                        ActionRenderers.Count,
                        block.Index,
                        block.Hash);
                    foreach (IRenderer renderer in Renderers)
                    {
                        renderer.RenderBlock(oldTip: prevTip ?? Genesis, newTip: block);
                    }

                    if (ActionRenderers.Any())
                    {
                        RenderActions(evaluations: actionEvaluations, block: block);
                        foreach (IActionRenderer renderer in ActionRenderers)
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

#pragma warning disable MEN003
        internal void AppendStateRootHashPreceded(
            Block block,
            BlockCommit blockCommit,
            bool render,
            IReadOnlyList<ICommittedActionEvaluation> actionEvaluations = null
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

            _logger.Information(
                "Trying to append block #{BlockIndex} {BlockHash}...", block.Index, block.Hash);

            block.ValidateTimestamp();

            _rwlock.EnterUpgradeableReadLock();
            Block prevTip = Tip;
            try
            {
                ValidateBlock(block);
                ValidateBlockCommit(block, blockCommit);

                var nonceDeltas = ValidateBlockNonces(
                    block.Transactions
                        .Select(tx => tx.Signer)
                        .Distinct()
                        .ToDictionary(signer => signer, signer => Store.GetTxNonce(Id, signer)),
                    block);

                if (Policy.ValidateNextBlock(this, block) is { } bpve)
                {
                    throw bpve;
                }

                foreach (Transaction tx in block.Transactions)
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
                    if (actionEvaluations is null)
                    {
                        _logger.Information(
                            "Executing actions in block #{BlockIndex} {BlockHash}...",
                            block.Index,
                            block.Hash);
                        ValidateBlockPrecededStateRootHash(block, out actionEvaluations);
                        _logger.Information(
                            "Executed actions in block #{BlockIndex} {BlockHash}",
                            block.Index,
                            block.Hash);
                    }

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

                    _blocks[block.Hash] = block;

                    foreach (KeyValuePair<Address, long> pair in nonceDeltas)
                    {
                        Store.IncreaseTxNonce(Id, pair.Key, pair.Value);
                    }

                    foreach (var tx in block.Transactions)
                    {
                        Store.PutTxIdBlockHashIndex(tx.Id, block.Hash);
                    }

                    if (block.Index != 0 && blockCommit is { })
                    {
                        Store.PutChainBlockCommit(Id, blockCommit);
                    }

                    foreach (var evidence in block.Evidence)
                    {
                        if (Store.GetPendingEvidence(evidence.Id) != null)
                        {
                            Store.DeletePendingEvidence(evidence.Id);
                        }

                        Store.PutCommittedEvidence(evidence);
                    }

                    Store.AppendIndex(Id, block.Hash);
                    _nextStateRootHash = block.StateRootHash;
                    IEnumerable<TxExecution> txExecutions =
                        MakeTxExecutions(block, actionEvaluations);
                    UpdateTxExecutions(txExecutions);

                    foreach (var evidence in GetPendingEvidence().ToArray())
                    {
                        if (IsEvidenceExpired(evidence))
                        {
                            Store.DeletePendingEvidence(evidence.Id);
                        }
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
                    foreach (Transaction tx in block.Transactions)
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

                if (render)
                {
                    _logger.Information(
                        "Invoking {RendererCount} renderers and " +
                        "{ActionRendererCount} action renderers for #{BlockIndex} {BlockHash}",
                        Renderers.Count,
                        ActionRenderers.Count,
                        block.Index,
                        block.Hash);
                    foreach (IRenderer renderer in Renderers)
                    {
                        renderer.RenderBlock(oldTip: prevTip ?? Genesis, newTip: block);
                    }

                    if (ActionRenderers.Any())
                    {
                        RenderActions(evaluations: actionEvaluations, block: block);
                        foreach (IActionRenderer renderer in ActionRenderers)
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
        /// Finds an approximate topmost common ancestor between this
        /// <see cref="BlockChain"/> and a given <see cref="BlockLocator"/>.
        /// </summary>
        /// <param name="locator">A block locator that contains common ancestor candidates.</param>
        /// <returns>An approximate to the topmost common ancestor if found, otherwise
        /// <see langword="null"/>.</returns>
        internal BlockHash? FindBranchpoint(BlockLocator locator)
        {
            if (ContainsBlock(locator.Hash))
            {
                _logger.Debug(
                    "Found a branchpoint with locator [{LocatorHead}]: {Hash}",
                    locator.Hash,
                    locator.Hash);
                return locator.Hash;
            }

            _logger.Debug(
                "Failed to find a branchpoint locator [{LocatorHead}]",
                locator.Hash);
            return null;
        }

        /// <summary>
        /// Lists the all staged transactions, with properly ordered nonces.
        /// </summary>
        /// <param name="txPriority">An optional comparer for give certain transactions to
        /// priority to belong to the block.  No certain priority by default.</param>
        /// <returns>A list of staged transactions.  This guarantees that for transactions signed
        /// by the same address, those with greater nonce never comes before those with
        /// lesser nonce.</returns>
        internal ImmutableList<Transaction> ListStagedTransactions(
            IComparer<Transaction> txPriority = null
        )
        {
            IEnumerable<Transaction> unorderedTxs = StagePolicy.Iterate(this);
            if (txPriority is { } comparer)
            {
                unorderedTxs = unorderedTxs.OrderBy(tx => tx, comparer);
            }

            Transaction[] txs = unorderedTxs.ToArray();

            Dictionary<Address, LinkedList<Transaction>> seats = txs
                .GroupBy(tx => tx.Signer)
                .Select(g => (g.Key, new LinkedList<Transaction>(g.OrderBy(tx => tx.Nonce))))
                .ToDictionary(pair => pair.Item1, pair => pair.Item2);

            return txs.Select(tx =>
            {
                LinkedList<Transaction> seat = seats[tx.Signer];
                Transaction first = seat.First.Value;
                seat.RemoveFirst();
                return first;
            }).ToImmutableList();
        }

        internal IEnumerable<Block> IterateBlocks(int offset = 0, int? limit = null)
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

        internal HashDigest<SHA256>? GetNextStateRootHash() => _nextStateRootHash;

        internal HashDigest<SHA256>? GetNextStateRootHash(long index) =>
            GetNextStateRootHash(this[index]);

        internal HashDigest<SHA256>? GetNextStateRootHash(BlockHash blockHash) =>
            GetNextStateRootHash(this[blockHash]);

        internal ValidatorSet GetValidatorSet(long index)
        {
            if (index == 0)
            {
                return GetNextWorldState().GetValidatorSet();
            }

            if (GetBlockCommit(index) is { } commit)
            {
                var validatorList = commit.Votes.Select(CreateValidator).ToList();
                return new ValidatorSet(validatorList);
            }

            throw new ArgumentException("Cannot find a validator set for the given index.");

            static Validator CreateValidator(Vote vote)
                => new Validator(vote.ValidatorPublicKey, vote.ValidatorPower ?? 0);
        }

        private HashDigest<SHA256>? GetNextStateRootHash(Block block)
        {
            if (block.ProtocolVersion < BlockMetadata.SlothProtocolVersion)
            {
                return block.StateRootHash;
            }
            else if (block.Index < Tip.Index)
            {
                return this[block.Index + 1].StateRootHash;
            }
            else
            {
                return GetNextStateRootHash();
            }
        }
    }
}
