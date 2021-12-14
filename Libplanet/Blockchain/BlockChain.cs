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
using Libplanet.Crypto;
using Libplanet.Store;
using Libplanet.Store.Trie;
using Libplanet.Tx;
using Serilog;
using static Libplanet.Blockchain.KeyConverters;

namespace Libplanet.Blockchain
{
    /// <summary>
    /// A class have <see cref="Block{T}"/>s, <see cref="Transaction{T}"/>s, and the chain
    /// information.
    /// <para>In order to watch its state changes, implement <see cref="IRenderer{T}"/>
    /// interface and pass it to the <see cref="BlockChain{T}(IBlockPolicy{T}, IStagePolicy{T},
    /// IStore, IStateStore, Block{T}, IEnumerable{IRenderer{T}})"/> constructor.</para>
    /// </summary>
    /// <remarks>This object is guaranteed that it has at least one block, since it takes a genesis
    /// block when it's instantiated.</remarks>
    /// <typeparam name="T">An <see cref="IAction"/> type.  It should match
    /// to <see cref="Block{T}"/>'s type parameter.</typeparam>
    public partial class BlockChain<T>
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
        /// by default or if it is <c>null</c>.  Note that action renderers receive events made
        /// by unsuccessful transactions too; see also <see cref="AtomicActionRenderer{T}"/> for
        /// workaround.</param>
        /// <param name="stateStore"><see cref="IStateStore"/> to store states.</param>
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
                store.GetCanonicalChainId() ?? Guid.NewGuid(),
                genesisBlock,
                renderers
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
            IEnumerable<IRenderer<T>> renderers
        )
            : this(
                policy,
                stagePolicy,
                store,
                stateStore,
                id,
                genesisBlock,
                false,
                renderers
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
            IEnumerable<IRenderer<T>> renderers
        )
        {
            Id = id;
            Policy = policy;
            StagePolicy = stagePolicy;
            Store = store;

            // It expects store is DefaultStore or RocksDBStore.
            StateStore = stateStore ?? store as IStateStore;
            if (StateStore is null)
            {
                throw new ArgumentNullException(nameof(stateStore));
            }

            _blocks = new BlockSet<T>(Policy.GetHashAlgorithm, store);
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
                .ForContext("CanonicalChainId", Id);
            ActionEvaluator = new ActionEvaluator<T>(
                Policy.BlockAction,
                GetState,
                GetBalance,
                hash => StateStore.GetStateRoot(_blocks[hash].StateRootHash)
            );

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
                    networkExpected: genesisBlock.Hash,
                    stored: Genesis.Hash,
                    message: msg
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
        /// <param name="hashAlgorithm">The hash algorithm for proof-of-work on the genesis block.
        /// </param>
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
        /// <returns>The genesis block mined with parameters.</returns>
        public static Block<T> MakeGenesisBlock(
            HashAlgorithmType hashAlgorithm,
            IEnumerable<T> actions = null,
            PrivateKey privateKey = null,
            DateTimeOffset? timestamp = null,
            IAction blockAction = null)
        {
            privateKey ??= new PrivateKey();
            actions ??= ImmutableArray<T>.Empty;
            Transaction<T>[] transactions =
            {
                Transaction<T>.Create(0, privateKey, null, actions, timestamp: timestamp),
            };

            BlockContent<T> content = new BlockContent<T>
            {
                PublicKey = privateKey.PublicKey,
                Timestamp = timestamp ?? DateTimeOffset.UtcNow,
                Transactions = transactions,
            };

            PreEvaluationBlock<T> preEval = content.Mine(hashAlgorithm);
            return preEval.Evaluate(
                privateKey,
                blockAction,
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
        /// <c>true</c> if the <see cref="BlockChain{T}"/> contains <see cref="Block{T}"/> with
        /// the specified <paramref name="blockHash"/>; otherwise, <c>false</c>.
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
        /// the state.  It will be The tip of the <see cref="BlockChain{T}"/> if it is <c>null</c>.
        /// </param>
        /// <param name="stateCompleter">When the <see cref="BlockChain{T}"/> instance does not
        /// contain states dirty of the block which lastly updated states of a requested address,
        /// this delegate is called and its return value is used instead.
        /// <para><see cref="StateCompleters{T}.Recalculate"/> makes the incomplete states
        /// recalculated and filled on the fly.</para>
        /// <para><see cref="StateCompleters{T}.Reject"/> (which is default) makes the incomplete
        /// states (if needed) to cause <see cref="IncompleteBlockStatesException"/> instead.</para>
        /// </param>
        /// <returns>The current state of given <paramref name="address"/>.  This can be <c>null</c>
        /// if <paramref name="address"/> has no value.</returns>
        public IValue GetState(
            Address address,
            BlockHash? offset = null,
            StateCompleter<T> stateCompleter = null
        ) =>
            GetRawState(
                ToStateKey(address),
                offset,
                StateCompleters<T>.ToRawStateCompleter(
                    stateCompleter ?? StateCompleters<T>.Reject,
                    address
                )
            );

        /// <summary>
        /// Queries <paramref name="address"/>'s balance of the <paramref name="currency"/> in the
        /// <see cref="BlockChain{T}"/> from <paramref name="offset"/>.
        /// </summary>
        /// <param name="address">The owner <see cref="Address"/> to query.</param>
        /// <param name="currency">The currency type to query.</param>
        /// <param name="offset">The <see cref="HashDigest{T}"/> of the block to
        /// start finding the state. It will be the tip of the
        /// <see cref="BlockChain{T}"/> if it is <c>null</c>.</param>
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
        )
        {
            stateCompleter ??= FungibleAssetStateCompleters<T>.Reject;
            IValue v = GetRawState(
                ToFungibleAssetKey(address, currency),
                offset,
                FungibleAssetStateCompleters<T>.ToRawStateCompleter(
                    stateCompleter,
                    address,
                    currency
                )
            );
            return FungibleAssetValue.FromRawValue(
                currency,
                v is Bencodex.Types.Integer i ? i.Value : 0
            );
        }

        /// <summary>
        /// Queries the recorded <see cref="TxExecution"/> for a successful or failed
        /// <see cref="Transaction{T}"/> within a <see cref="Block{T}"/>.
        /// </summary>
        /// <param name="blockHash">The <see cref="Block{T}.Hash"/> of the <see cref="Block{T}"/>
        /// that the <see cref="Transaction{T}"/> is executed within.</param>
        /// <param name="txid">The executed <see cref="Transaction{T}"/>'s
        /// <see cref="Transaction{T}.Id"/>.</param>
        /// <returns>The recorded <see cref="TxExecution"/>.  If the transaction has never been
        /// executed within the block, it returns <c>null</c> instead.</returns>
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
        /// <exception cref="InvalidTxException">Thrown when the given
        /// <paramref name="transaction"/> is invalid.</exception>
        public void StageTransaction(Transaction<T> transaction)
        {
            if (!transaction.GenesisHash.Equals(Genesis.Hash))
            {
                var msg = "GenesisHash of the transaction is not compatible " +
                          "with the BlockChain<T>.Genesis.Hash.";
                throw new InvalidTxGenesisHashException(
                    transaction.Id,
                    Genesis.Hash,
                    transaction.GenesisHash,
                    msg);
            }

            StagePolicy.Stage(this, transaction);
        }

        /// <summary>
        /// Removes a <paramref name="transaction"/> from the pending list.
        /// </summary>
        /// <param name="transaction">A <see cref="Transaction{T}"/>
        /// to remove from the pending list.</param>
        /// <seealso cref="StageTransaction"/>
        public void UnstageTransaction(Transaction<T> transaction) =>
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
        /// Records and queries the <paramref name="perceivedTime"/> of the given
        /// <paramref name="blockExcerpt"/>.
        /// <para>Although blocks have their own <see cref="Block{T}.Timestamp"/>, but these values
        /// are untrustworthy as they are arbitrarily determined by their miners.</para>
        /// <para>On the other hand, this method returns the subjective time according to the local
        /// node's perception.</para>
        /// <para>If the local node has never perceived the <paramref name="blockExcerpt"/> yet,
        /// it is perceived at that moment and the current time is returned instead. (However, you
        /// can replace the current time with the <paramref name="perceivedTime"/> option.)
        /// In other words, this method is idempotent.</para>
        /// </summary>
        /// <param name="blockExcerpt">The perceived block.</param>
        /// <param name="perceivedTime">The time the local node perceived the given <paramref
        /// name="blockExcerpt"/>.  The current time by default.</param>
        /// <returns>A pair of a block and the time it was perceived.</returns>
        public BlockPerception PerceiveBlock(
            IBlockExcerpt blockExcerpt,
            DateTimeOffset? perceivedTime = null
        )
        {
            if (!(Store.GetBlockPerceivedTime(blockExcerpt.Hash) is { } time))
            {
                time = perceivedTime ?? DateTimeOffset.UtcNow;
                Store.SetBlockPerceivedTime(blockExcerpt.Hash, time);
            }

            return new BlockPerception(blockExcerpt, time);
        }

        /// <summary>
        /// Creates a new <see cref="Transaction{T}"/> and stage the transaction.
        /// Cannot create new transaction if the genesis block does not exist.
        /// </summary>
        /// <param name="privateKey">A <see cref="PrivateKey"/> of the account who creates and
        /// signs a new transaction.</param>
        /// <param name="actions">A list of <see cref="IAction"/>s to include to a new transaction.
        /// </param>
        /// <param name="updatedAddresses"><see cref="Address"/>es whose states affected by
        /// <paramref name="actions"/>.</param>
        /// <param name="timestamp">The time this <see cref="Transaction{T}"/> is created and
        /// signed.</param>
        /// <returns>A created new <see cref="Transaction{T}"/> signed by the given
        /// <paramref name="privateKey"/>.</returns>
        /// <seealso cref="Transaction{T}.Create" />
        public Transaction<T> MakeTransaction(
            PrivateKey privateKey,
            IEnumerable<T> actions,
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
                    actions,
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
            _logger.Debug(
                "Evaluating actions in the block #{BlockIndex} {BlockHash}...",
                block.Index,
                block.Hash
            );
            IReadOnlyList<ActionEvaluation> evaluations = null;
            DateTimeOffset evaluateActionStarted = DateTimeOffset.Now;
            evaluations = ActionEvaluator.Evaluate(
                block,
                stateCompleters ?? StateCompleterSet<T>.Recalculate
            );
            TimeSpan evalDuration = DateTimeOffset.Now - evaluateActionStarted;
            _logger
                .ForContext("Tag", "Metric")
                .Debug(
                    "Actions in {TxCount} transactions for block #{BlockIndex} {BlockHash} " +
                    "evaluated in {DurationMs:F0}ms.",
                    block.Transactions.Count,
                    block.Index,
                    block.Hash,
                    evalDuration.TotalMilliseconds);

            _rwlock.EnterWriteLock();
            try
            {
                // Update states
                DateTimeOffset setStatesStarted = DateTimeOffset.Now;
                var totalDelta =
                    evaluations.GetTotalDelta(ToStateKey, ToFungibleAssetKey);
                const string deltaMsg =
                    "Summarized the states delta with {KeyCount} key changes " +
                    "made by block #{BlockIndex} {BlockHash}.";
                _logger.Debug(deltaMsg, totalDelta.Count, block.Index, block.Hash);

                HashDigest<SHA256>? prevStateRootHash = Store.GetStateRootHash(block.PreviousHash);
                ITrie stateRoot = StateStore.Commit(prevStateRootHash, totalDelta);
                HashDigest<SHA256> rootHash = stateRoot.Hash;
                const string rootHashMsg =
                    "Calculated the root hash of the states made by block #{BlockIndex} " +
                    "{BlockHash} for " + nameof(TrieStateStore) + ": {StateRootHash}.";
                _logger.Debug(rootHashMsg, block.Index, block.Hash, rootHash);

                if (!rootHash.Equals(block.StateRootHash))
                {
                    var message = $"Block #{block.Index} {block.Hash}'s state root hash " +
                        $"is {block.StateRootHash}, but the execution result is {rootHash}.";
                    throw new InvalidBlockStateRootHashException(
                        block.StateRootHash,
                        rootHash,
                        message);
                }

                TimeSpan setStatesDuration = DateTimeOffset.Now - setStatesStarted;
                _logger
                    .ForContext("Tag", "Metric")
                    .Debug(
                    "Finished updating the states with {KeyCount} key changes affected by " +
                    "block #{BlockIndex} {BlockHash} in {DurationMs:F0}ms.",
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

            _logger.Debug("Trying to append block {blockIndex}: {block}", block?.Index, block);

            block.ValidateTimestamp();

            _rwlock.EnterUpgradeableReadLock();
            Block<T> prevTip = Count > 0 ? Tip : null;
            try
            {
                InvalidBlockException ibe = ValidateNextBlock(block);

                if (!(ibe is null))
                {
                    _logger.Error(ibe, "Append failed. The block is invalid.");
                    throw ibe;
                }

                var nonceDeltas = new Dictionary<Address, long>();

                foreach (Transaction<T> tx1 in block.Transactions.OrderBy(tx => tx.Nonce))
                {
                    if (Policy.ValidateNextBlockTx(this, tx1) is { } tpve)
                    {
                        throw new TxPolicyViolationException(
                            tx1.Id,
                            "According to BlockPolicy, this transaction is not valid.");
                    }

                    Address txSigner = tx1.Signer;
                    nonceDeltas.TryGetValue(txSigner, out var nonceDelta);

                    long expectedNonce = nonceDelta + Store.GetTxNonce(Id, txSigner);

                    if (!expectedNonce.Equals(tx1.Nonce))
                    {
                        _logger.Debug("Append failed. The tx `{TxId}` is invalid.", tx1.Id);
                        throw new InvalidTxNonceException(
                            tx1.Id,
                            expectedNonce,
                            tx1.Nonce,
                            "Transaction nonce is invalid."
                        );
                    }

                    nonceDeltas[txSigner] = nonceDelta + 1;
                }

                _rwlock.EnterWriteLock();
                try
                {
                    if (evaluateActions && actionEvaluations is null)
                    {
                        _logger.Debug(
                            "Executing actions in the block #{BlockIndex} {BlockHash}...",
                            block.Index,
                            block.Hash
                        );
                        actionEvaluations = ExecuteActions(block);
                        _logger.Debug(
                            "Executed actions in the block #{BlockIndex} {BlockHash}.",
                            block.Index,
                            block.Hash
                        );

                        // FIXME: Using evaluateActions as a proxy flag for preloading status.
                        const string TimestampFormat = "yyyy-MM-ddTHH:mm:ss.ffffffZ";
                        _logger
                            .ForContext("Tag", "Metric")
                            .Debug(
                                "Block #{BlockIndex} {BlockHash} with " +
                                "timestamp {BlockTimestamp} appended at {AppendTimestamp}.",
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

                _logger.Debug(
                    "Unstaging {TxCount} transactions from block #{BlockIndex} {BlockHash}...",
                    block.Transactions.Count(),
                    block.Index,
                    block.Hash);
                foreach (Transaction<T> tx in block.Transactions)
                {
                    UnstageTransaction(tx);
                }

                _logger.Debug(
                    "Unstaged {TxCount} transactions, from block #{BlockIndex} {BlockHash}...",
                    block.Transactions.Count(),
                    block.Index,
                    block.Hash);

                TipChanged?.Invoke(this, (prevTip, block));
                _logger.Debug(
                    "Appended the block #{BlockIndex} {BlockHash}.",
                    block.Index,
                    block.Hash);

                if (renderBlocks)
                {
                    const string startMsg =
                        "Invoking renderers for #{BlockIndex} {BlockHash}... " +
                        "({Renderers} renderer(s), {ActionRenderers} action renderer(s))";
                    _logger.Debug(
                        startMsg,
                        block.Index,
                        block.Hash,
                        Renderers.Count,
                        ActionRenderers.Count
                    );
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

                    const string endMsg =
                        "Invoked renderers for #{BlockIndex} {BlockHash}... " +
                        "({Renderers} renderer(s), {ActionRenderers} action renderer(s))";
                    _logger.Debug(
                        endMsg,
                        block.Index,
                        block.Hash,
                        Renderers.Count,
                        ActionRenderers.Count
                    );
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
        /// returns <c>null</c>.</returns>
        internal BlockHash? FindBranchpoint(BlockLocator locator)
        {
            try
            {
                _rwlock.EnterReadLock();

                _logger.Debug(
                    "Finding a branchpoint with locator [{LocatorHead}, ...].",
                    locator.FirstOrDefault());
                foreach (BlockHash hash in locator)
                {
                    if (_blocks.ContainsKey(hash)
                        && _blocks[hash] is Block<T> block
                        && hash.Equals(Store.IndexBlockHash(Id, block.Index)))
                    {
                        _logger.Debug(
                            "Found a branchpoint with locator [{LocatorHead}, ...]: {Hash}.",
                            locator.FirstOrDefault(),
                            hash
                        );
                        return hash;
                    }
                }

                _logger.Debug(
                    "Failed to find a branchpoint locator [{LocatorHead}, ...].",
                    locator.FirstOrDefault());
                return null;
            }
            finally
            {
                _rwlock.ExitReadLock();
            }
        }

        internal Tuple<long?, IReadOnlyList<BlockHash>> FindNextHashes(
            BlockLocator locator,
            BlockHash? stop = null,
            int count = 500)
        {
            try
            {
                _rwlock.EnterReadLock();

                BlockHash? tip = Store.IndexBlockHash(Id, -1);
                if (tip is null)
                {
                    return new Tuple<long?, IReadOnlyList<BlockHash>>(null, new BlockHash[0]);
                }

                BlockHash? branchpoint = FindBranchpoint(locator);
                var branchpointIndex = branchpoint is { } h ? (int)Store.GetBlockIndex(h)! : 0;

                // FIXME: Currently, increasing count by one to satisfy
                // the number defined by FindNextHashesChunkSize variable
                // when branchPointIndex didn't indicate genesis block.
                // Since branchPointIndex is same as the latest block of
                // requesting peer.
                if (branchpointIndex > 0)
                {
                    count++;
                }

                IEnumerable<BlockHash> hashes = Store.IterateIndexes(Id, branchpointIndex, count);

                var result = new List<BlockHash>();
                foreach (BlockHash hash in hashes)
                {
                    if (count == 0)
                    {
                        break;
                    }

                    result.Add(hash);

                    if (hash.Equals(stop))
                    {
                        break;
                    }

                    count--;
                }

                return new Tuple<long?, IReadOnlyList<BlockHash>>(branchpointIndex, result);
            }
            finally
            {
                _rwlock.ExitReadLock();
            }
        }

        internal BlockChain<T> Fork(BlockHash point, bool inheritRenderers = true)
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
                Policy, StagePolicy, Store, StateStore, Guid.NewGuid(), Genesis, true, renderers);
            Guid forkedId = forked.Id;
            _logger.Debug(
                "Trying to fork chain at {branchPoint}" +
                "(prevId: {prevChainId}) (forkedId: {forkedChainId})",
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

        internal BlockLocator GetBlockLocator(int threshold = 10)
        {
            try
            {
                _rwlock.EnterReadLock();

                return new BlockLocator(
                    indexBlockHash: idx => Store.IndexBlockHash(Id, idx),
                    indexByBlockHash: hash => _blocks[hash].Index,
                    sampleAfter: threshold
                );
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
                var totalDelta = actionEvaluations.GetTotalDelta(ToStateKey, ToFungibleAssetKey);
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
                    actualProtocolVersion,
                    message
                );
            }
            else if (Count > 0 && actualProtocolVersion < Tip.ProtocolVersion)
            {
                string message =
                    "The protocol version is disallowed to be downgraded from the topmost block " +
                    $"in the chain ({actualProtocolVersion} < {Tip.ProtocolVersion}).";
                return new InvalidBlockProtocolVersionException(actualProtocolVersion, message);
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
                    block.Difficulty,
                    block.TotalDifficulty,
                    msg);
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

        private IValue GetRawState(
            string key,
            BlockHash? offset,
            Func<BlockChain<T>, BlockHash, IValue> rawStateCompleter
        )
        {
            if (offset is null && Count == 0)
            {
                return null;
            }

            BlockHash offsetHash = offset ?? Tip.Hash;

            HashDigest<SHA256>? stateRootHash = Store.GetStateRootHash(offsetHash);
            return stateRootHash is { } h && StateStore.ContainsStateRoot(h)
                ? StateStore.GetState(key, stateRootHash)
                : rawStateCompleter(this, offsetHash);
        }
    }
}
