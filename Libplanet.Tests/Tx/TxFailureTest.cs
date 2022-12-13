using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.IO;
using System.Runtime.Serialization.Formatters.Binary;
using Bencodex.Types;
using Libplanet.Blocks;
using Libplanet.Tx;
using Xunit;

namespace Libplanet.Tests.Tx
{
    public class TxFailureTest
    {
        private readonly BlockHash _blockHash;
        private readonly TxId _txid;
        private readonly TxFailure _fx;
        private readonly TxFailure _fxWithLogs;

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
                null,
                new ArgumentNullException("foo"));
            _fxWithLogs = new TxFailure(
                _blockHash,
                _txid,
                new List<List<string>>
                {
                    new List<string>
                    {
                        "LOG",
                    },
                },
                new ArgumentNullException("foo"));
        }

        [Fact]
        public void ConstructorWithExceptionObject()
        {
            var fxs = new[]
            {
                _fx,
                _fxWithLogs,
            };

            foreach (var fx in fxs)
            {
                Assert.Equal(_blockHash, fx.BlockHash);
                Assert.Equal(_txid, fx.TxId);
                Assert.Equal(
                    $"{nameof(System)}.{nameof(ArgumentNullException)}",
                    fx.ExceptionName);
                Assert.Equal(Dictionary.Empty.Add("parameterName", "foo"), fx.ExceptionMetadata);
            }
        }

        [Fact]
        public void Constructor()
        {
            var f = new TxFailure(
                _blockHash,
                _txid,
                null,
                nameof(ArgumentNullException),
                (Text)"foo"
            );
            Assert.Equal(_blockHash, f.BlockHash);
            Assert.Equal(_txid, f.TxId);
            Assert.Equal(nameof(ArgumentNullException), f.ExceptionName);
            Assert.Equal((Text)"foo", f.ExceptionMetadata);
            Assert.Null(f.ActionsLogsList);
        }

        [Fact]
        public void Serialization()
        {
            var fxs = new[]
            {
                _fx,
                _fxWithLogs,
            };

            foreach (var fx in fxs)
            {
                var formatter = new BinaryFormatter();
                var stream = new MemoryStream();
                formatter.Serialize(stream, fx);
                stream.Seek(0, SeekOrigin.Begin);
                object deserialized = formatter.Deserialize(stream);
                Assert.IsType<TxFailure>(deserialized);
                var f = (TxFailure)deserialized;
                Assert.Equal(_blockHash, f.BlockHash);
                Assert.Equal(_txid, f.TxId);
                Assert.Equal(fx.ExceptionName, f.ExceptionName);
                Assert.Equal(fx.ExceptionMetadata, f.ExceptionMetadata);
                Assert.Equal(fx.ActionsLogsList, f.ActionsLogsList);
            }
        }
    }
}
