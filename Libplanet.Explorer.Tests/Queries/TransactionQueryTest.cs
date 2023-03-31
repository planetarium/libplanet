using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Numerics;
using System.Threading.Tasks;
using Bencodex.Types;
using GraphQL;
using GraphQL.Execution;
using Libplanet.Action;
using Libplanet.Action.Sys;
using Libplanet.Assets;
using Libplanet.Blockchain;
using Libplanet.Blockchain.Policies;
using Libplanet.Blocks;
using Libplanet.Consensus;
using Libplanet.Crypto;
using Libplanet.Explorer.Interfaces;
using Libplanet.Explorer.Queries;
using Libplanet.Net;
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
        tx.MarshalUnsignedTx();
        ExecutionResult result = await ExecuteQueryAsync(@$"
        {{
            bindSignature(
                unsignedTransaction: ""{Hex(tx.SerializeUnsignedTx())}"",
                signature: ""{Hex(tx.Signature)}""
            )
         }}
         ", _queryGraph, source: _source);
        Assert.Null(result.Errors);
        ExecutionNode resultData = Assert.IsAssignableFrom<ExecutionNode>(result.Data);
        IDictionary<string, object> resultDict =
            Assert.IsAssignableFrom<IDictionary<string, object>>(resultData!.ToValue());
        Assert.Equal(tx.Serialize(), ParseHex((string)resultDict["bindSignature"]));
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
                unsignedTransaction: ""{Hex(tx.SerializeUnsignedTx())}"",
                signature: ""{Hex(tx.Signature)}""
            )
         }}
         ", _queryGraph, source: _source);
        Assert.Null(result.Errors);
        ExecutionNode resultData = Assert.IsAssignableFrom<ExecutionNode>(result.Data);
        IDictionary<string, object> resultDict =
            Assert.IsAssignableFrom<IDictionary<string, object>>(resultData!.ToValue());
        Assert.Equal(tx.Serialize(), ParseHex((string)resultDict["bindSignature"]));
    }

    [Fact]
    public async Task NextNonce()
    {
        async Task AssertNextNonce(long expected, Address address) {
            var result = await ExecuteQueryAsync(@$"
            {{
                nextNonce(
                    address: ""{address}""
                )
            }}
            ", _queryGraph, source: _source);

            Assert.Null(result.Errors);
            ExecutionNode resultData = Assert.IsAssignableFrom<ExecutionNode>(result.Data);
            IDictionary<string, object> resultDict =
                Assert.IsAssignableFrom<IDictionary<string, object>>(resultData!.ToValue());
            Assert.Equal(_source.BlockChain.GetNextTxNonce(address), (long)resultDict["nextNonce"]);
            Assert.Equal(expected, (long)resultDict["nextNonce"]);
        }

        var key1 = new PrivateKey();
        // account nonce is 0 in the beginning
        await AssertNextNonce(0, key1.ToAddress());

        // staged txs increase next nonce
        _source.BlockChain.MakeTransaction(key1, ImmutableList<NullAction>.Empty.Add(new NullAction()));
        await AssertNextNonce(1, key1.ToAddress());
        _source.BlockChain.MakeTransaction(key1, ImmutableList<NullAction>.Empty.Add(new NullAction()));
        await AssertNextNonce(2, key1.ToAddress());
        var block = _source.BlockChain.ProposeBlock(new PrivateKey());
        _source.BlockChain.Append(block, Libplanet.Tests.TestUtils.CreateBlockCommit(block));
        await AssertNextNonce(2, key1.ToAddress());

        var key2 = new PrivateKey();
        await AssertNextNonce(0, key2.ToAddress());

        // staging txs of key2 does not increase nonce of key1
        _source.BlockChain.MakeTransaction(key2, ImmutableList<NullAction>.Empty.Add(new NullAction()));
        block = _source.BlockChain.ProposeBlock(
            new PrivateKey(),
            lastCommit: Libplanet.Tests.TestUtils.CreateBlockCommit(block));
        _source.BlockChain.Append(block, Libplanet.Tests.TestUtils.CreateBlockCommit(block));
        await AssertNextNonce(1, key2.ToAddress());
        await AssertNextNonce(2, key1.ToAddress());

        // unstaging txs decrease nonce
        _source.BlockChain.MakeTransaction(key1, ImmutableList<NullAction>.Empty.Add(new NullAction()));
        await AssertNextNonce(3, key1.ToAddress());
        _source.BlockChain.MakeTransaction(key1, ImmutableList<NullAction>.Empty.Add(new NullAction()));
        await AssertNextNonce(4, key1.ToAddress());
        _source.BlockChain.GetStagedTransactionIds()
            .Select(_source.BlockChain.GetTransaction)
            .Select(_source.BlockChain.UnstageTransaction)
            .ToImmutableList();
        await AssertNextNonce(2, key1.ToAddress());
    }

    private class MockBlockChainContext<T> : IBlockChainContext<T>
        where T : IAction, new()
    {
        public bool Preloaded => true;

        public BlockChain<T> BlockChain { get; }

        public IStore Store { get; }

        public Swarm<T> Swarm { get; }

        public PrivateKey Validator { get; }

        public MockBlockChainContext()
        {
            Validator = Libplanet.Tests.TestUtils.ValidatorPrivateKeys[1];
            Store = new MemoryStore();
            var stateStore = new TrieStateStore(new MemoryKeyValueStore());
            var minerKey = new PrivateKey();
            BlockChain = Libplanet.Tests.TestUtils.MakeBlockChain(
                new BlockPolicy<T>(),
                Store,
                stateStore,
                privateKey: minerKey,
                timestamp: DateTimeOffset.UtcNow
            );
        }
    }
}
