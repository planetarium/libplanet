using System;
using System.Collections.Immutable;
using System.Linq;
using Libplanet.Blocks;
using Libplanet.Consensus;
using Libplanet.Crypto;
using Libplanet.Tests.Store;
using Xunit;
using Xunit.Abstractions;

namespace Libplanet.Tests.Blocks
{
    public class BlockCommitTest
    {
         private readonly ITestOutputHelper _output;

         public BlockCommitTest(ITestOutputHelper output)
         {
             _output = output;
         }

         [Fact]
         public void Marshalling()
         {
             var fx = new MemoryStoreFixture();
             var votes = Enumerable.Range(0, 4)
                                          .Select(x => new Vote(
                                              1,
                                              0,
                                              fx.Hash1,
                                              DateTimeOffset.Now,
                                              new BlsPrivateKey().PublicKey,
                                              VoteFlag.Absent,
                                              ImmutableArray<byte>.Empty))
                                          .ToImmutableArray();
             var blockCommit = new BlockCommit(1, 0, fx.Hash1, votes);

             byte[] marshaled = blockCommit.ByteArray;
             var unMarshaled = new BlockCommit(marshaled);

             Assert.Equal(blockCommit, unMarshaled);
         }
    }
}
