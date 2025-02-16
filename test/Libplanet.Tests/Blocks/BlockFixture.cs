using System.Collections.Generic;
using System.Collections.Immutable;
using System.Security.Cryptography;
using Libplanet.Common;
using Libplanet.Crypto;
using Libplanet.Tests.Tx;
using Libplanet.Types.Blocks;
using Libplanet.Types.Consensus;
using Libplanet.Types.Evidence;
using Libplanet.Types.Tx;

namespace Libplanet.Tests.Blocks
{
    public class BlockFixture
    {
        public const int ProtocolVersion = BlockMetadata.CurrentProtocolVersion;

        public BlockFixture()
        {
            Miner = TestUtils.GenesisProposer;
            Genesis = TestUtils.ProposeGenesisBlock(
                protocolVersion: ProtocolVersion,
                miner: Miner,
                stateRootHash: HashDigest<SHA256>.Parse(
                    "e2e938f9d8af0a20d16d1c233fc4e8f39157145d003565807e4055ce6b5a0121")
            );
            TxFixture = new TxFixture(Genesis.Hash);
            Next = TestUtils.ProposeNextBlock(
                Genesis,
                miner: Miner,
                protocolVersion: ProtocolVersion,
                stateRootHash: HashDigest<SHA256>.Parse(
                    "6a648da9e91c21aa22bdae4e35c338406392aad0db4a0f998c01a7d7973cb8aa"),
                lastCommit: null,
                evidence: ImmutableArray<EvidenceBase>.Empty
            );
            HasTx = TestUtils.ProposeNextBlock(
                Next,
                miner: Miner,
                txs: new List<Transaction>
                {
                    TxFixture.TxWithActions,
                },
                protocolVersion: ProtocolVersion,
                stateRootHash: HashDigest<SHA256>.Parse(
                    "aaeda4f1a6a4aee7fc9a29014cff005109176e83a8e5d28876f2d889680e6421"),
                lastCommit: new BlockCommit(
                    height: Next.Index,
                    round: 0,
                    blockHash: Next.Hash,
                    votes: new[]
                    {
                        new VoteMetadata(
                            Next.Index,
                            0,
                            Next.Hash,
                            Next.Timestamp,
                            Miner.PublicKey,
                            TestUtils.ValidatorSet.GetValidator(Miner.PublicKey).Power,
                            VoteFlag.PreCommit).Sign(Miner),
                    }.ToImmutableArray()),
                evidence: ImmutableArray<EvidenceBase>.Empty
            );
        }

        internal TxFixture TxFixture { get; }

        internal PrivateKey Miner { get; }

        internal Block Genesis { get; }

        internal Block Next { get; }

        internal Block HasTx { get; }
    }
}
