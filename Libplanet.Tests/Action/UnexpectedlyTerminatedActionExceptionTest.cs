using System;
using System.Collections.Immutable;
using System.IO;
using System.Runtime.Serialization.Formatters.Binary;
using System.Security.Cryptography;
using Libplanet.Action;
using Libplanet.Tests.Common.Action;
using Libplanet.Tx;
using Xunit;

namespace Libplanet.Tests.Action
{
    public class UnexpectedlyTerminatedActionExceptionTest
    {
        [Fact]
        public void Serializable()
        {
            var innerExc = new Exception("inner");
            ImmutableArray<byte> preEvaluationHash =
                TestUtils.GetRandomBytes(32).ToImmutableArray();
            long blockIndex = 100;
            var txId = new TxId(TestUtils.GetRandomBytes(TxId.Size));
            var previousStateRootHash = new HashDigest<SHA256>(
                TestUtils.GetRandomBytes(HashDigest<SHA256>.Size)
            );
            var action = new Sleep()
            {
                ZoneId = 1,
            };

            var exc = new UnexpectedlyTerminatedActionException(
                "for testing",
                preEvaluationHash,
                blockIndex,
                txId,
                previousStateRootHash,
                action,
                innerExc
            );

            var formatter = new BinaryFormatter();
            using (var ms = new MemoryStream())
            {
                formatter.Serialize(ms, exc);

                ms.Seek(0, SeekOrigin.Begin);
                var deserialized = (UnexpectedlyTerminatedActionException)formatter.Deserialize(ms);
                Assert.Equal("for testing", deserialized.Message);
                Assert.IsType<Exception>(deserialized.InnerException);
                Assert.Equal(innerExc.Message, deserialized.InnerException.Message);

                Assert.Equal(preEvaluationHash, deserialized.PreEvaluationHash);
                Assert.Equal(blockIndex, deserialized.BlockIndex);
                Assert.Equal(txId, deserialized.TxId);
                Assert.Equal(previousStateRootHash, deserialized.PreviousStateRootHash);

                Assert.IsType<Sleep>(deserialized.Action);
                Assert.Equal(action.PlainValue, deserialized.Action.PlainValue);
            }
        }
    }
}
