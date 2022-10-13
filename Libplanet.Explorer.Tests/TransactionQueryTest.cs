using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Threading.Tasks;
using GraphQL;
using GraphQL.Execution;
using Libplanet.Action;
using Libplanet.Action.Sys;
using Libplanet.Assets;
using Libplanet.Blockchain;
using Libplanet.Blockchain.Policies;
using Libplanet.Blocks;
using Libplanet.Crypto;
using Libplanet.Explorer.Interfaces;
using Libplanet.Explorer.Queries;
using Libplanet.Store;
using Libplanet.Store.Trie;
using Libplanet.Tx;
using Xunit;
using static Libplanet.ByteUtil;
using static Libplanet.Explorer.Tests.GraphQLTestUtils;

namespace Libplanet.Explorer.Tests.Queries;

public class TransactionQueryTest
{
    private MockBlockChainContext<NullAction> _source;
    private TransactionQuery<NullAction> _queryGraph;

    public TransactionQueryTest()
    {
        _source = new MockBlockChainContext<NullAction>();
        _queryGraph = new TransactionQuery<NullAction>(_source);
    }

    [Fact]
    public async Task BindSignatureWithCustomActions()
    {
        var tx = Transaction<NullAction>.Create(
            0L,
            new PrivateKey(),
            _source.BlockChain.Genesis.Hash,
            Enumerable.Empty<NullAction>()
        );
        ExecutionResult result = await ExecuteQueryAsync(@$"
        {{
            bindSignature(
                unsignedTransaction: ""{Hex(tx.Serialize(false))}"",
                signature: ""{Hex(tx.Signature)}""
            )
         }}
         ", _queryGraph, source: _source);
        Assert.Null(result.Errors);
        ExecutionNode resultData = Assert.IsAssignableFrom<ExecutionNode>(result.Data);
        IDictionary<string, object> resultDict =
            Assert.IsAssignableFrom<IDictionary<string, object>>(resultData!.ToValue());
        Assert.Equal(tx.Serialize(true), ParseHex((string)resultDict["bindSignature"]));
    }

    [Fact]
    public async Task BindSignatureWithSystemAction()
    {
        var foo = Currency.Uncapped("FOO", 2, ImmutableHashSet<Address>.Empty);
        var tx = Transaction<NullAction>.Create(
            0L,
            new PrivateKey(),
            _source.BlockChain.Genesis.Hash,
            new Transfer(default, foo * 10)
        );
        ExecutionResult result = await ExecuteQueryAsync(@$"
        {{
            bindSignature(
                unsignedTransaction: ""{Hex(tx.Serialize(false))}"",
                signature: ""{Hex(tx.Signature)}""
            )
         }}
         ", _queryGraph, source: _source);
        Assert.Null(result.Errors);
        ExecutionNode resultData = Assert.IsAssignableFrom<ExecutionNode>(result.Data);
        IDictionary<string, object> resultDict =
            Assert.IsAssignableFrom<IDictionary<string, object>>(resultData!.ToValue());
        Assert.Equal(tx.Serialize(true), ParseHex((string)resultDict["bindSignature"]));
    }

    private class MockBlockChainContext<T> : IBlockChainContext<T>
        where T : IAction, new()
    {
        public bool Preloaded => true;
        public BlockChain<T> BlockChain { get; }
        public IStore Store { get; }

        public MockBlockChainContext()
        {
            Store = new MemoryStore();
            var stateStore = new TrieStateStore(new MemoryKeyValueStore());
            var minerKey = new PrivateKey();
            var genesisContent = new BlockContent<T> { PublicKey = minerKey.PublicKey };
            Block<T> genesis = genesisContent.Propose().Evaluate(
                minerKey,
                null,
                _ => true,
                stateStore
            );
            BlockChain = new BlockChain<T>(
                new BlockPolicy<T>(),
                new VolatileStagePolicy<T>(),
                Store,
                stateStore,
                genesis
            );
        }
    }
}
