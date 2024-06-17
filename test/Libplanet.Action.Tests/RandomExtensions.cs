using Libplanet.Crypto;
using Libplanet.Types.Blocks;
using Libplanet.Types.Tx;

namespace Libplanet.Action.Tests
{
    internal static class RandomExtensions
    {
        public static byte[] NextBytes(this System.Random random, int size)
        {
            var buffer = new byte[size];
            random.NextBytes(buffer);
            return buffer;
        }

        public static TxId NextTxId(this System.Random random) =>
            new TxId(random.NextBytes(TxId.Size));

        public static Address NextAddress(this System.Random random) =>
            new Address(random.NextBytes(Address.Size));

        public static BlockHash NextBlockHash(this System.Random random) =>
            new BlockHash(random.NextBytes(BlockHash.Size));
    }
}
