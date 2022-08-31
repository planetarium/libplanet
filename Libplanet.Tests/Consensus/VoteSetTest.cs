using System;
using System.Collections.Immutable;
using System.Linq;
using Libplanet.Blocks;
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
             var fx = new MemoryStoreFixture();
             BlockHash targetBlockHash = fx.Hash1;
             var validators = Enumerable.Range(0, 4)
                 .Select(x => new BlsPrivateKey())
                 .ToArray();
             var voteSet = new VoteSet(
                 1,
                 2,
                 targetBlockHash,
                 validators.Select(x => x.PublicKey).ToImmutableArray());

             var now = DateTimeOffset.UtcNow;

             Assert.False(voteSet.HasTwoThirdAny());
             Assert.False(voteSet.HasTwoThirdPrevote());
             Assert.False(voteSet.HasTwoThirdCommit());

             for (int i = 0; i < 3; i++)
             {
                 var voteWithoutSign = new Vote(
                     1,
                     2,
                     targetBlockHash,
                     now,
                     validators[i].PublicKey,
                     VoteFlag.Absent,
                     null);
                 var vote = new Vote(
                     1,
                     2,
                     targetBlockHash,
                     now,
                     validators[i].PublicKey,
                     VoteFlag.Absent,
                     validators[i].Sign(voteWithoutSign.ByteArray).ToImmutableArray());
                 voteSet.Add(vote);
             }

             Assert.True(voteSet.HasTwoThirdAny());
             Assert.True(voteSet.HasTwoThirdPrevote());
             Assert.False(voteSet.HasTwoThirdCommit());

             voteSet = new VoteSet(
                 1,
                 2,
                 targetBlockHash,
                 validators.Select(x => x.PublicKey));

             for (int i = 0; i < 3; i++)
             {
                 var voteWithoutSign = new Vote(
                     1,
                     2,
                     targetBlockHash,
                     now,
                     validators[i].PublicKey,
                     VoteFlag.Commit,
                     null);
                 var vote = new Vote(
                     1,
                     2,
                     targetBlockHash,
                     now,
                     validators[i].PublicKey,
                     VoteFlag.Commit,
                     validators[i].Sign(voteWithoutSign.ByteArray).ToImmutableArray());
                 voteSet.Add(vote);
             }

             Assert.True(voteSet.HasTwoThirdAny());
             Assert.False(voteSet.HasTwoThirdPrevote());
             Assert.True(voteSet.HasTwoThirdCommit());
         }

         [Fact]
         public void AddWrongRoundVoteTest()
         {
             var fx = new MemoryStoreFixture();
             BlockHash targetBlockHash = fx.Hash1;
             var validators = Enumerable.Range(0, 4)
                 .Select(x => new BlsPrivateKey())
                 .ToArray();
             var voteSet = new VoteSet(
                 1,
                 2,
                 targetBlockHash,
                 validators.Select(x => x.PublicKey).ToImmutableArray());

             var now = DateTimeOffset.UtcNow;

             Assert.False(voteSet.HasTwoThirdAny());
             Assert.False(voteSet.HasTwoThirdPrevote());
             Assert.False(voteSet.HasTwoThirdCommit());

             for (int i = 0; i < 3; i++)
             {
                 var voteWithoutSign = new Vote(
                     1,
                     1,
                     targetBlockHash,
                     now,
                     validators[i].PublicKey,
                     VoteFlag.Absent,
                     null);
                 var vote = new Vote(
                     1,
                     1,
                     targetBlockHash,
                     now,
                     validators[i].PublicKey,
                     VoteFlag.Absent,
                     validators[i].Sign(voteWithoutSign.ByteArray).ToImmutableArray());
                 voteSet.Add(vote);
             }

             Assert.False(voteSet.HasTwoThirdAny());
             Assert.False(voteSet.HasTwoThirdPrevote());
             Assert.False(voteSet.HasTwoThirdCommit());
         }
    }
}
