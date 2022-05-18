using System;
using System.Collections.Immutable;
using System.Linq;
using System.Text;
using Libplanet.Consensus;
using Libplanet.Crypto;
using Libplanet.Tests.Store;
using Xunit;

namespace Libplanet.Tests.Consensus
{
    public class VoteSetTest
    {
         [Fact]
         public void AddVoteTest()
         {
             var validators = Enumerable.Range(0, 4)
                 .Select(x => new PrivateKey())
                 .ToArray();
             var voteSet = new VoteSet(
                 1,
                 2,
                 validators.Select(x => x.PublicKey).ToImmutableArray());

             var fx = new MemoryStoreFixture();
             var now = DateTimeOffset.UtcNow;

             Assert.False(voteSet.HasTwoThirdAny());
             Assert.False(voteSet.HasTwoThirdPrevote());
             Assert.False(voteSet.HasTwoThirdCommit());

             for (int i = 0; i < 3; i++)
             {
                 var vote = new Vote(
                     1,
                     2,
                     fx.Hash1,
                     now,
                     validators[i].PublicKey,
                     VoteFlag.Absent,
                     i,
                     Encoding.Default.GetBytes("sign").ToImmutableArray());
                 voteSet.Add(vote);
             }

             Assert.True(voteSet.HasTwoThirdAny());
             Assert.True(voteSet.HasTwoThirdPrevote());
             Assert.False(voteSet.HasTwoThirdCommit());

             voteSet = new VoteSet(
                 1,
                 2,
                 validators.Select(x => x.PublicKey));

             for (int i = 0; i < 3; i++)
             {
                 var vote = new Vote(
                     1,
                     2,
                     fx.Hash1,
                     now,
                     validators[i].PublicKey,
                     VoteFlag.Commit,
                     i,
                     Encoding.Default.GetBytes("sign").ToImmutableArray());
                 voteSet.Add(vote);
             }

             Assert.True(voteSet.HasTwoThirdAny());
             Assert.False(voteSet.HasTwoThirdPrevote());
             Assert.True(voteSet.HasTwoThirdCommit());
         }

         [Fact]
         public void AddWrongVoteTest()
         {
             var validators = Enumerable.Range(0, 4)
                 .Select(x => new PrivateKey())
                 .ToArray();
             var voteSet = new VoteSet(
                 1,
                 2,
                 validators.Select(x => x.PublicKey).ToImmutableArray());

             var fx = new MemoryStoreFixture();
             var now = DateTimeOffset.UtcNow;

             Assert.False(voteSet.HasTwoThirdAny());
             Assert.False(voteSet.HasTwoThirdPrevote());
             Assert.False(voteSet.HasTwoThirdCommit());

             for (int i = 0; i < 3; i++)
             {
                 var vote = new Vote(
                     1,
                     1,
                     fx.Hash1,
                     now,
                     validators[i].PublicKey,
                     VoteFlag.Absent,
                     i,
                     Encoding.Default.GetBytes("sign").ToImmutableArray());
                 voteSet.Add(vote);
             }

             Assert.False(voteSet.HasTwoThirdAny());
             Assert.False(voteSet.HasTwoThirdPrevote());
             Assert.False(voteSet.HasTwoThirdCommit());
         }
    }
}
