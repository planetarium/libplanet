#nullable enable
using System;
using System.Collections.Concurrent;
using System.Security.Cryptography;
using Libplanet.Action;
using Libplanet.Blocks;
using Libplanet.Store;
using Serilog;

namespace Libplanet.Blockchain.Renderers
{
    /// <summary>
    /// Decorates an <see cref="IRenderer{T}"/> instance and delays the events until blocks
    /// are <em>confirmed</em> the certain number of blocks.  When blocks are recognized
    /// the delayed events relevant to these blocks are relayed to the decorated
    /// <see cref="IRenderer{T}"/>.
    /// </summary>
    /// <typeparam name="T">An <see cref="IAction"/> type.  It should match to
    /// <see cref="BlockChain{T}"/>'s type parameter.</typeparam>
    /// <example>
    /// <code><![CDATA[
    /// IStore store = GetStore();
    /// IRenderer<ExampleAction> renderer = new SomeRenderer();
    /// // Wraps the renderer with DelayedRenderer; the SomeRenderer instance becomes to receive
    /// // event messages only after the relevent blocks are confirmed by 3+ blocks.
    /// renderer = new DelayedRenderer<ExampleAction>(renderer, store, confirmations: 3);
    /// // You must pass the same store to the BlockChain<T>() constructor:
    /// var chain = new BlockChain<ExampleAction>(..., store: store, renderers: new[] { renderer });
    /// ]]></code>
    /// </example>
    /// <remarks>Since <see cref="IActionRenderer{T}"/> is a subtype of <see cref="IRenderer{T}"/>,
    /// <see cref="DelayedRenderer{T}(IRenderer{T}, IStore, uint)"/> constructor can take
    /// an <see cref="IActionRenderer{T}"/> instance as well.  However, even it takes an action
    /// renderer, action-level fine-grained events won't hear.  For action renderers,
    /// please use <see cref="DelayedActionRenderer{T}"/> instead.</remarks>
    public class DelayedRenderer<T> : IRenderer<T>
        where T : IAction, new()
    {
        private ConcurrentDictionary<HashDigest<SHA256>, uint> _confirmed;
        private Block<T>? _tip;

        /// <summary>
        /// Creates a new <see cref="DelayedRenderer{T}"/> instance decorating the given
        /// <paramref name="renderer"/>.
        /// </summary>
        /// <param name="renderer">The renderer to decorate which has the <em>actual</em>
        /// implementations and receives delayed events.</param>
        /// <param name="store">The same store to what <see cref="BlockChain{T}"/> uses.</param>
        /// <param name="confirmations">The required number of confirmations to recognize a block.
        /// See also the <see cref="Confirmations"/> property.</param>
        public DelayedRenderer(IRenderer<T> renderer, IStore store, uint confirmations)
        {
            Logger = Log.ForContext(GetType());
            Renderer = renderer;
            Store = store;
            Confirmations = confirmations;
            _confirmed = new ConcurrentDictionary<HashDigest<SHA256>, uint>();
        }

        /// <summary>
        /// The inner renderer which has the <em>actual</em> implementations and receives delayed
        /// events.
        /// </summary>
        public IRenderer<T> Renderer { get; }

        /// <summary>
        /// The same store to what <see cref="BlockChain{T}"/> uses.
        /// </summary>
        public IStore Store { get; }

        /// <summary>
        /// The required number of confirmations to recognize a block.
        /// <para>For example, the required confirmations are 2, the block #N is recognized after
        /// the block #N+1 and the block #N+2 are discovered.</para>
        /// </summary>
        public uint Confirmations { get; }

        /// <summary>
        /// The <em>recognized</em> topmost block.  If not enough blocks are discovered yet,
        /// this property can be <c>null</c>.
        /// </summary>
        public Block<T>? Tip
        {
            get => _tip;
            private set
            {
                Block<T>? newTip = value;
                if (newTip is null || newTip.Equals(_tip))
                {
                    return;
                }

                if (_tip is null)
                {
                    Logger.Verbose(
                        $"{nameof(DelayedRenderer<T>)}.{nameof(Tip)} is tried to be updated to " +
                        "#{NewTipIndex} {NewTipHash} (from null).",
                        newTip.Index,
                        newTip.Hash
                    );
                }
                else
                {
                    Logger.Verbose(
                        $"{nameof(DelayedRenderer<T>)}.{nameof(Tip)} is tried to be updated to " +
                        "#{NewTipIndex} {NewTipHash} (from #{OldTipIndex} {OldTipHash}).",
                        newTip.Index,
                        newTip.Hash,
                        _tip.Index,
                        _tip.Hash
                    );
                }

                Block<T>? oldTip = _tip;
                _tip = newTip;
                if (oldTip is null)
                {
                    Logger.Debug(
                        $"{nameof(DelayedRenderer<T>)}.{nameof(Tip)} was updated to " +
                        "#{NewTipIndex} {NewTipHash} (from null).",
                        newTip.Index,
                        newTip.Hash
                    );
                }
                else
                {
                    Logger.Debug(
                        $"{nameof(DelayedRenderer<T>)}.{nameof(Tip)} was updated to " +
                        "#{NewTipIndex} {NewTipHash} (from #{OldTipIndex} {OldTipHash}).",
                        newTip.Index,
                        newTip.Hash,
                        oldTip.Index,
                        oldTip.Hash
                    );
                }

                OnTipChanged(oldTip, newTip);
            }
        }

        /// <summary>
        /// The logger to record internal state changes.
        /// </summary>
        protected ILogger Logger { get; }

        /// <inheritdoc cref="IRenderer{T}.RenderBlock(Block{T}, Block{T})"/>
        public virtual void RenderBlock(Block<T> oldTip, Block<T> newTip)
        {
            _confirmed.TryAdd(oldTip.Hash, 0);
            DiscoverBlock(newTip);
        }

        /// <inheritdoc cref="IRenderer{T}.RenderReorg(Block{T}, Block{T}, Block{T})"/>
        public virtual void RenderReorg(Block<T> oldTip, Block<T> newTip, Block<T> branchpoint)
        {
            _confirmed.TryAdd(branchpoint.Hash, 0);
        }

        /// <summary>
        /// The callback method which is invoked when the new <see cref="Tip"/> is recognized and
        /// changed.
        /// </summary>
        /// <param name="oldTip">The previously recognized topmost block.</param>
        /// <param name="newTip">The topmost block recognized this time.</param>
        /// <returns>A branchpoint between <paramref name="oldTip"/> and <paramref name="newTip"/>
        /// if the tip change is a reorg.  Otherwise returns <c>null</c>.</returns>
        protected virtual Block<T>? OnTipChanged(Block<T>? oldTip, Block<T> newTip)
        {
            if (oldTip is null)
            {
                return null;
            }

            Block<T>? branchpoint = null;
            if (!newTip.PreviousHash.Equals(oldTip.Hash))
            {
                branchpoint = FindBranchpoint(oldTip, newTip);
                Renderer.RenderReorg(oldTip, newTip, branchpoint);
            }

            Renderer.RenderBlock(oldTip, newTip);
            return branchpoint;
        }

        private void DiscoverBlock(Block<T> block)
        {
            if (_confirmed.ContainsKey(block.Hash))
            {
                return;
            }

            _confirmed.TryAdd(block.Hash, 0);

            HashDigest<SHA256>? prev = block.PreviousHash;
            Block<T>? newTip = null;
            do
            {
                if (!(prev is HashDigest<SHA256> prevHash &&
                      Store.GetBlock<T>(prevHash) is Block<T> prevBlock))
                {
                    break;
                }

                uint c = _confirmed.AddOrUpdate(prevHash, k => 1U, (k, v) => v + 1U);
                Logger.Verbose(
                    "The block #{BlockIndex} {BlockHash} has {Confirmations} confirmations.",
                    prevBlock.Index,
                    prevBlock.Hash,
                    c
                );

                if (c >= Confirmations)
                {
                    if (newTip is null)
                    {
                        newTip = prevBlock;
                    }
                    else
                    {
#pragma warning disable S1116, SA1106, SA1503
                        // The below while statement is not "empty"; its condition has an effect.
                        while (!_confirmed.TryRemove(prevHash, out _));
#pragma warning restore S1116, SA1106, SA1503
                    }
                }

                prev = prevBlock.PreviousHash;
            }
            while (true);

            if (newTip is Block<T>)
            {
                Tip = newTip;
            }
        }

        private Block<T> FindBranchpoint(Block<T> a, Block<T> b)
        {
            while (a is Block<T> && a.Index > b.Index && a.PreviousHash is HashDigest<SHA256> aPrev)
            {
                a = Store.GetBlock<T>(aPrev);
            }

            while (b is Block<T> && b.Index > a.Index && b.PreviousHash is HashDigest<SHA256> bPrev)
            {
                b = Store.GetBlock<T>(bPrev);
            }

            if (a is null || b is null || a.Index != b.Index)
            {
                throw new ArgumentException(
                    "Some previous blocks of two blocks are orphan.",
                    nameof(a)
                );
            }

            while (a.Index >= 0)
            {
                if (a.Equals(b))
                {
                    return a;
                }

                if (a.PreviousHash is HashDigest<SHA256> aPrev &&
                    b.PreviousHash is HashDigest<SHA256> bPrev)
                {
                    a = Store.GetBlock<T>(aPrev);
                    b = Store.GetBlock<T>(bPrev);
                    continue;
                }

                break;
            }

            throw new ArgumentException(
                "Two blocks do not have any ancestors in common.",
                nameof(a)
            );
        }
    }
}
