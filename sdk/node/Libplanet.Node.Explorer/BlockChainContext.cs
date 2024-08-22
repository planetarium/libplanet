using System.Reflection;
using Libplanet.Blockchain;
using Libplanet.Explorer.Indexing;
using Libplanet.Explorer.Interfaces;
using Libplanet.Net;
using Libplanet.Node.Services;
using Libplanet.Store;

namespace Libplanet.Node.Explorer;

internal sealed class BlockChainContext(
    IBlockChainService blockChainService, ISwarmService swarmService) : IBlockChainContext
{
    public bool Preloaded => false;

    public BlockChain BlockChain => blockChainService.BlockChain;

#pragma warning disable S3011 // Reflection should not be used to increase accessibility ...
    public IStore Store
    {
        get
        {
            var bindingFlags = BindingFlags.NonPublic | BindingFlags.Instance;
            var propertyInfo = typeof(BlockChain).GetProperty("Store", bindingFlags) ??
                throw new InvalidOperationException("Store property not found.");
            if (propertyInfo.GetValue(BlockChain) is IStore store)
            {
                return store;
            }

            throw new InvalidOperationException("Store property is not IStore.");
        }
    }
#pragma warning restore S3011

    public Swarm Swarm => swarmService.Swarm;

    public IBlockChainIndex Index => throw new NotSupportedException();
}
