using System;
using System.Collections.Generic;
using System.Numerics;
using Libplanet.Blockchain;
using Libplanet.Blockchain.Renderers;
using Libplanet.Blockchain.Renderers.Debug;
using Libplanet.Tests.Fixtures;
using Libplanet.Types.Tx;
using Xunit;

namespace Libplanet.Tests.Blockchain.Renderers
{
    public class AtomicActionRendererTest
    {
        private readonly RecordingActionRenderer _record;
        private readonly AtomicActionRenderer _renderer;
        private readonly IntegerSet _fx;
        private Transaction _successTx;

        public AtomicActionRendererTest()
        {
            _record = new RecordingActionRenderer();
            _renderer = new AtomicActionRenderer(_record);
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
        public void Block()
        {
            _fx.Append(_fx.Propose());
            IReadOnlyList<RenderRecord> records = _record.Records;
            Assert.Equal(5, records.Count);
            AssertTypeAnd<RenderRecord.BlockEvent>(
                records[0], r => Assert.True(r.Begin));
            AssertTypeAnd<RenderRecord.ActionSuccess>(records[1], r =>
            {
                Assert.Equal(_successTx.Id, r.Context.TxId);
                Assert.Equal(_successTx.Actions[0], r.Action);
            });
            AssertTypeAnd<RenderRecord.ActionSuccess>(records[2], r =>
            {
                Assert.Equal(_successTx.Id, r.Context.TxId);
                Assert.Equal(_successTx.Actions[1], r.Action);
            });
            AssertTypeAnd<RenderRecord.ActionSuccess>(records[3], r =>
            {
                Assert.Equal(_successTx.Id, r.Context.TxId);
                Assert.Equal(_successTx.Actions[2], r.Action);
            });
            AssertTypeAnd<RenderRecord.BlockEvent>(records[4], r => Assert.True(r.End));
        }

        [Fact]
        public void Reorg()
        {
            BlockChain @base = _fx.Chain.Fork(_fx.Genesis.Hash);
            _fx.Append(_fx.Propose());
            _record.ResetRecords();
            _fx.Chain.Swap(@base, true)();
            IReadOnlyList<RenderRecord> records = _record.Records;
            Assert.Equal(2, records.Count);
            AssertTypeAnd<RenderRecord.BlockEvent>(
                records[0], r => Assert.True(r.Begin));
            AssertTypeAnd<RenderRecord.BlockEvent>(
                records[1], r => Assert.True(r.End));
        }

        private static void AssertTypeAnd<T>(object obj, Action<T> callback)
        {
            Assert.IsType<T>(obj);
            callback((T)obj);
        }
    }
}
