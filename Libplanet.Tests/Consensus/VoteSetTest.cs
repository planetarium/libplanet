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
                 .Select(x => new PrivateKey())
                 .ToArray();
             var voteSet = new VoteSet(
                 1,
                 2,
                 targetBlockHash,
                 validators.Select(x => x.PublicKey).ToImmutableArray());

             var now = DateTimeOffset.UtcNow;

             Assert.False(voteSet.HasTwoThirdCommit());

             for (int i = 0; i < 3; i++)
             {
                var vote = new VoteMetadata(
                    1,
                    2,
                    targetBlockHash,
                    now,
                    validators[i].PublicKey,
                    VoteFlag.PreVote).Sign(validators[i]);
                voteSet.Add(vote);
             }

             Assert.False(voteSet.HasTwoThirdCommit());

             voteSet = new VoteSet(
                 1,
                 2,
                 targetBlockHash,
                 validators.Select(x => x.PublicKey));

             for (int i = 0; i < 3; i++)
             {
                 var vote = new VoteMetadata(
                     1,
                     2,
                     targetBlockHash,
                     now,
                     validators[i].PublicKey,
                     VoteFlag.PreCommit).Sign(validators[i]);
                 voteSet.Add(vote);
             }

             Assert.True(voteSet.HasTwoThirdCommit());
         }

         [Fact]
         public void AddWrongRoundVoteTest()
         {
             var fx = new MemoryStoreFixture();
             BlockHash targetBlockHash = fx.Hash1;
             var validators = Enumerable.Range(0, 4)
                 .Select(x => new PrivateKey())
                 .ToArray();
             var voteSet = new VoteSet(
                 1,
                 2,
                 targetBlockHash,
                 validators.Select(x => x.PublicKey).ToImmutableArray());

             var now = DateTimeOffset.UtcNow;

             Assert.False(voteSet.HasTwoThirdCommit());

             for (int i = 0; i < 3; i++)
             {
                 var vote = new VoteMetadata(
                     1,
                     1,
                     targetBlockHash,
                     now,
                     validators[i].PublicKey,
                     VoteFlag.PreVote).Sign(validators[i]);
                 voteSet.Add(vote);
             }

             Assert.False(voteSet.HasTwoThirdCommit());
         }
    }
}
