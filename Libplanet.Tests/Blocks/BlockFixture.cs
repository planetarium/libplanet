using System.Collections.Generic;
using System.Collections.Immutable;
using System.Security.Cryptography;
using Libplanet.Action;
using Libplanet.Blocks;
using Libplanet.Consensus;
using Libplanet.Crypto;
using Libplanet.Tests.Common.Action;
using Libplanet.Tests.Tx;
using Libplanet.Tx;

namespace Libplanet.Tests.Blocks
{
    public class BlockFixture
    {
        public const int ProtocolVersion = BlockMetadata.CurrentProtocolVersion;

        public BlockFixture()
        {
            Miner = TestUtils.GenesisMiner;
            Genesis = TestUtils.ProposeGenesisBlock<PolymorphicAction<BaseAction>>(
                protocolVersion: ProtocolVersion,
                miner: Miner,
                stateRootHash: HashDigest<SHA256>.FromString(
                    "e2e938f9d8af0a20d16d1c233fc4e8f39157145d003565807e4055ce6b5a0121")
            );
            TxFixture = new TxFixture(Genesis.Hash);
            Next = TestUtils.ProposeNextBlock(
                Genesis,
                miner: Miner,
                protocolVersion: ProtocolVersion,
                stateRootHash: HashDigest<SHA256>.FromString(
                    "6a648da9e91c21aa22bdae4e35c338406392aad0db4a0f998c01a7d7973cb8aa"),
                lastCommit: new BlockCommit(
                    height: Genesis.Index,
                    round: 0,
                    hash: Genesis.Hash,
                    votes: new[]
                    {
                        new Vote(
                            Genesis.Index,
                            0,
                            Genesis.Hash,
                            Genesis.Timestamp,
                            Miner.PublicKey,
                            VoteFlag.Commit,
                            ImmutableArray<byte>.Empty).Sign(Miner),
                    }.ToImmutableArray())
            );
            HasTx = TestUtils.ProposeNextBlock(
                Next,
                miner: Miner,
                txs: new List<Transaction<PolymorphicAction<BaseAction>>>
                {
                    TxFixture.TxWithActions,
                },
                protocolVersion: ProtocolVersion,
                stateRootHash: HashDigest<SHA256>.FromString(
                    "aaeda4f1a6a4aee7fc9a29014cff005109176e83a8e5d28876f2d889680e6421"),
                lastCommit: new BlockCommit(
                    height: Next.Index,
                    round: 0,
                    hash: Next.Hash,
                    votes: new[]
                    {
                        new Vote(
                            Next.Index,
                            0,
                            Next.Hash,
                            Next.Timestamp,
                            Miner.PublicKey,
                            VoteFlag.Commit,
                            ImmutableArray<byte>.Empty).Sign(Miner),
                    }.ToImmutableArray())
            );
        }

        internal TxFixture TxFixture { get; }

        internal PrivateKey Miner { get; }

        internal Block<PolymorphicAction<BaseAction>> Genesis { get; }

        internal Block<PolymorphicAction<BaseAction>> Next { get; }

        internal Block<PolymorphicAction<BaseAction>> HasTx { get; }
    }
}
