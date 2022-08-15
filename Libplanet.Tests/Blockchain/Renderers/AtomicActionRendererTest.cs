using System;
using System.Collections.Generic;
using System.Numerics;
using System.Threading.Tasks;
using Libplanet.Blockchain;
using Libplanet.Blockchain.Renderers;
using Libplanet.Blockchain.Renderers.Debug;
using Libplanet.Tests.Fixtures;
using Libplanet.Tx;
using Xunit;

namespace Libplanet.Tests.Blockchain.Renderers
{
    public class AtomicActionRendererTest
    {
        private readonly RecordingActionRenderer<Arithmetic> _record;
        private readonly AtomicActionRenderer<Arithmetic> _renderer;
        private readonly IntegerSet _fx;
        private Transaction<Arithmetic> _successTx;

        public AtomicActionRendererTest()
        {
            _record = new RecordingActionRenderer<Arithmetic>();
            _renderer = new AtomicActionRenderer<Arithmetic>(_record);
            _fx = new IntegerSet(new BigInteger?[] { 0 }, null, new[] { _renderer });
            (_successTx, _) = _fx.Sign(
                0,
                Arithmetic.Add(1),
                Arithmetic.Mul(2),
                Arithmetic.Add(3)
            );

            // failing transaction; should not be rendered:
            _fx.Sign(
                0,
                Arithmetic.Add(1),
                new Arithmetic(),
                Arithmetic.Add(3)
            );
            _record.ResetRecords();
        }

        [Fact]
        public async Task Block()
        {
            await _fx.Mine();
            IReadOnlyList<RenderRecord<Arithmetic>> records = _record.Records;
            Assert.Equal(5, records.Count);
            AssertTypeAnd<RenderRecord<Arithmetic>.Block>(records[0], r => Assert.True(r.Begin));
            AssertTypeAnd<RenderRecord<Arithmetic>.ActionSuccess>(records[1], r =>
            {
                Assert.Equal(_successTx.Id, r.Context.TxId);
                Assert.Equal(_successTx.CustomActions[0], r.Action);
            });
            AssertTypeAnd<RenderRecord<Arithmetic>.ActionSuccess>(records[2], r =>
            {
                Assert.Equal(_successTx.Id, r.Context.TxId);
                Assert.Equal(_successTx.CustomActions[1], r.Action);
            });
            AssertTypeAnd<RenderRecord<Arithmetic>.ActionSuccess>(records[3], r =>
            {
                Assert.Equal(_successTx.Id, r.Context.TxId);
                Assert.Equal(_successTx.CustomActions[2], r.Action);
            });
            AssertTypeAnd<RenderRecord<Arithmetic>.Block>(records[4], r => Assert.True(r.End));
        }

        [Fact]
        public async Task Reorg()
        {
            BlockChain<Arithmetic> @base = _fx.Chain.Fork(_fx.Genesis.Hash);
            await _fx.Mine();
            _record.ResetRecords();
            _fx.Chain.Swap(@base, true)();
            IReadOnlyList<RenderRecord<Arithmetic>> records = _record.Records;
            Assert.Equal(7, records.Count);
            AssertTypeAnd<RenderRecord<Arithmetic>.Reorg>(records[0], r => Assert.True(r.Begin));
            AssertTypeAnd<RenderRecord<Arithmetic>.ActionSuccess>(records[1], r =>
            {
                Assert.Equal(_successTx.Id, r.Context.TxId);
                Assert.Equal(_successTx.CustomActions[2], r.Action);
            });
            AssertTypeAnd<RenderRecord<Arithmetic>.ActionSuccess>(records[2], r =>
            {
                Assert.Equal(_successTx.Id, r.Context.TxId);
                Assert.Equal(_successTx.CustomActions[1], r.Action);
            });
            AssertTypeAnd<RenderRecord<Arithmetic>.ActionSuccess>(records[3], r =>
            {
                Assert.Equal(_successTx.Id, r.Context.TxId);
                Assert.Equal(_successTx.CustomActions[0], r.Action);
            });
            AssertTypeAnd<RenderRecord<Arithmetic>.Block>(records[4], r => Assert.True(r.Begin));
            AssertTypeAnd<RenderRecord<Arithmetic>.Block>(records[5], r => Assert.True(r.End));
            AssertTypeAnd<RenderRecord<Arithmetic>.Reorg>(records[6], r => Assert.True(r.End));
        }

        private static void AssertTypeAnd<T>(object obj, Action<T> callback)
        {
            Assert.IsType<T>(obj);
            callback((T)obj);
        }
    }
}
