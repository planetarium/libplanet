using System.Collections.Generic;
using System.Security.Cryptography;
using Libplanet.Action;
using Libplanet.Blocks;
using Libplanet.Crypto;
using Libplanet.Tests.Common.Action;
using Libplanet.Tests.Tx;
using Libplanet.Tx;

namespace Libplanet.Tests.Blocks
{
    public class BlockFixture
    {
        public const int ProtocolVersion =
            Block<PolymorphicAction<BaseAction>>.CurrentProtocolVersion;

        public BlockFixture()
        {
            Miner = TestUtils.GenesisMiner;
            Genesis = TestUtils.MineGenesisBlock<PolymorphicAction<BaseAction>>(
                hashAlgorithmGetter: GetHashAlgorithm,
                protocolVersion: ProtocolVersion,
                miner: Miner
            );
            TxFixture = new TxFixture(Genesis.Hash);
            Next = TestUtils.MineNextBlock(
                Genesis,
                miner: Miner,
                hashAlgorithmGetter: GetHashAlgorithm,
                nonce: new byte[] { 0x02, 0x00, 0x00, 0x00 },
                protocolVersion: ProtocolVersion
            );
            byte[] hasTxNonce =
            {
                0x5c, 0x77, 0x74, 0xc2, 0x39, 0x69, 0x37, 0x51, 0x87, 0xa5,
            };
            HasTx = TestUtils.MineNextBlock(
                Next,
                miner: Miner,
                hashAlgorithmGetter: GetHashAlgorithm,
                txs: new List<Transaction<PolymorphicAction<BaseAction>>>
                {
                    TxFixture.TxWithActions,
                },
                nonce: hasTxNonce,
                protocolVersion: ProtocolVersion
            );
        }

        internal TxFixture TxFixture { get; }

        internal PrivateKey Miner { get; }

        internal Block<PolymorphicAction<BaseAction>> Genesis { get; }

        internal Block<PolymorphicAction<BaseAction>> Next { get; }

        internal Block<PolymorphicAction<BaseAction>> HasTx { get; }

        internal HashAlgorithmType GetHashAlgorithm(long index) => HashAlgorithmType.Of<SHA256>();
    }
}
