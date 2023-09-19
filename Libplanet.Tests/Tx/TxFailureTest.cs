using System;
using System.Diagnostics.CodeAnalysis;
using Libplanet.Types.Blocks;
using Libplanet.Types.Tx;
using Xunit;

namespace Libplanet.Tests.Tx
{
    public class TxFailureTest
    {
        private readonly BlockHash _blockHash;
        private readonly TxId _txid;
        private readonly TxFailure _fx;

        [SuppressMessage(
            "Major Code Smell",
            "S3928",
            Justification = "The ArgumentNullException instance made here is a just example."
        )]
        public TxFailureTest()
        {
            var random = new Random();
            _blockHash = random.NextBlockHash();
            _txid = random.NextTxId();
            _fx = new TxFailure(
                _blockHash,
                _txid,
                new ArgumentNullException("foo"));
        }

        [Fact]
        public void ConstructorWithExceptionObject()
        {
            Assert.Equal(_blockHash, _fx.BlockHash);
            Assert.Equal(_txid, _fx.TxId);
            Assert.Equal(
                $"{nameof(System)}.{nameof(ArgumentNullException)}",
                _fx.ExceptionName);
        }

        [Fact]
        public void Constructor()
        {
            var f = new TxFailure(
                _blockHash,
                _txid,
                nameof(ArgumentNullException)
            );
            Assert.Equal(_blockHash, f.BlockHash);
            Assert.Equal(_txid, f.TxId);
            Assert.Equal(nameof(ArgumentNullException), f.ExceptionName);
        }
    }
}
