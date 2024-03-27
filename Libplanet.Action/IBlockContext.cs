using System;
using System.Diagnostics.Contracts;
using Libplanet.Action.State;
using Libplanet.Crypto;
using Libplanet.Types.Blocks;
using Libplanet.Types.Tx;

namespace Libplanet.Action
{
    public interface IBlockContext
    {
        public Address Miner { get; }

        public long Height { get; }

        public int ProtocolVersion { get; }

        BlockCommit? LastCommit { get; }
    }

    internal sealed class BlockContext : IBlockContext
    {
        public BlockContext(
            Address miner,
            long blockIndex,
            int blockProtocolVersion,
            BlockCommit? lastCommit
        )
        {
            Miner = miner;
            Height = blockIndex;
            ProtocolVersion = blockProtocolVersion;
            LastCommit = lastCommit;
        }

        public Address Miner { get; }

        public long Height { get; }

        public int ProtocolVersion { get; }

        public BlockCommit? LastCommit { get; }
    }
}
