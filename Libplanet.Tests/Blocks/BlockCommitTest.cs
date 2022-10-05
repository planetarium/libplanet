using System;
using System.Collections.Immutable;
using System.Linq;
using Bencodex;
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
                .Select(x => new VoteMetadata(
                    1,
                    0,
                    fx.Hash1,
                    DateTimeOffset.Now,
                    new PrivateKey().PublicKey,
                    VoteFlag.Null).Sign(null))
                .ToImmutableArray();
             var blockCommit = new BlockCommit(1, 0, fx.Hash1, votes);

             byte[] marshaled = blockCommit.ByteArray;
             var unMarshaled = new BlockCommit(marshaled);

             Assert.Equal(blockCommit, unMarshaled);
         }

         [Fact]
         public void ConstructorInvalidValues()
         {
             var hash = new BlockHash(TestUtils.GetRandomBytes(32));
             Assert.Throws<ArgumentOutOfRangeException>(() =>
                 new BlockCommit(-1, 0, hash, ImmutableArray<Vote>.Empty));

             Assert.Throws<ArgumentOutOfRangeException>(() =>
                 new BlockCommit(1, -1, hash, ImmutableArray<Vote>.Empty));

             Assert.Throws<ArgumentOutOfRangeException>(() =>
                 new BlockCommit(1, -1, default, ImmutableArray<Vote>.Empty));
         }

         [Fact]
         public void DecodeFailsNegativeHeight()
         {
             var fx = new MemoryStoreFixture();
             var dict = Bencodex.Types.Dictionary.Empty
                 .Add(BlockCommit.HeightKey, -1)
                 .Add(BlockCommit.RoundKey, 0)
                 .Add(BlockCommit.BlockHashKey, fx.Hash1.ByteArray);

             Assert.Throws<ArgumentOutOfRangeException>(() => new BlockCommit(dict));
         }

         [Fact]
         public void DecodeFailsNegativeRound()
         {
             var fx = new MemoryStoreFixture();
             var dict = Bencodex.Types.Dictionary.Empty
                 .Add(BlockCommit.HeightKey, 1)
                 .Add(BlockCommit.RoundKey, -1)
                 .Add(BlockCommit.BlockHashKey, fx.Hash1.ByteArray);

             Assert.Throws<ArgumentOutOfRangeException>(() => new BlockCommit(dict));
         }

         [Fact]
         public void DecodeFailsNullHash()
         {
             var dict = Bencodex.Types.Dictionary.Empty
                 .Add(BlockCommit.HeightKey, 1)
                 .Add(BlockCommit.RoundKey, 0)
                 .Add(BlockCommit.BlockHashKey, default(BlockHash).ByteArray);

             Assert.Throws<ArgumentNullException>(() => new BlockCommit(dict));
         }
    }
}
