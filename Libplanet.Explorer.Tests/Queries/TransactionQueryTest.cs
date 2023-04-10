using System;
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
using Libplanet.Crypto;
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
    protected readonly BlockChain<NullAction> Chain;
    protected MockBlockChainContext<NullAction> Source;
    protected TransactionQuery<NullAction> QueryGraph;

    public TransactionQueryTest()
    {
        Chain = Libplanet.Tests.TestUtils.MakeBlockChain(
            new BlockPolicy<NullAction>(),
            new MemoryStore(),
            new TrieStateStore(new MemoryKeyValueStore()),
            privateKey: new PrivateKey(),
            timestamp: DateTimeOffset.UtcNow
        );
        Source = new MockBlockChainContext<NullAction>(Chain);
        QueryGraph = new TransactionQuery<NullAction>(Source);
    }

    [Fact]
    public async Task BindSignatureWithCustomActions()
    {
        var tx = Transaction<NullAction>.Create(
            0L,
            new PrivateKey(),
            Source.BlockChain.Genesis.Hash,
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
         ", QueryGraph, source: Source);
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
            Source.BlockChain.Genesis.Hash,
            new Transfer(default, foo * 10)
        );
        ExecutionResult result = await ExecuteQueryAsync(@$"
        {{
            bindSignature(
                unsignedTransaction: ""{Hex(tx.SerializeUnsignedTx())}"",
                signature: ""{Hex(tx.Signature)}""
            )
         }}
         ", QueryGraph, source: Source);
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
            ", QueryGraph, source: Source);

            Assert.Null(result.Errors);
            ExecutionNode resultData = Assert.IsAssignableFrom<ExecutionNode>(result.Data);
            IDictionary<string, object> resultDict =
                Assert.IsAssignableFrom<IDictionary<string, object>>(resultData!.ToValue());
            Assert.Equal(Source.BlockChain.GetNextTxNonce(address), (long)resultDict["nextNonce"]);
            Assert.Equal(expected, (long)resultDict["nextNonce"]);
        }

        var key1 = new PrivateKey();
        // account nonce is 0 in the beginning
        await AssertNextNonce(0, key1.ToAddress());

        // staged txs increase next nonce
        Source.BlockChain.MakeTransaction(key1, ImmutableList<NullAction>.Empty.Add(new NullAction()));
        await AssertNextNonce(1, key1.ToAddress());
        Source.BlockChain.MakeTransaction(key1, ImmutableList<NullAction>.Empty.Add(new NullAction()));
        await AssertNextNonce(2, key1.ToAddress());
        var block = Source.BlockChain.ProposeBlock(new PrivateKey());
        Source.BlockChain.Append(block, Libplanet.Tests.TestUtils.CreateBlockCommit(block));
        await AssertNextNonce(2, key1.ToAddress());

        var key2 = new PrivateKey();
        await AssertNextNonce(0, key2.ToAddress());

        // staging txs of key2 does not increase nonce of key1
        Source.BlockChain.MakeTransaction(key2, ImmutableList<NullAction>.Empty.Add(new NullAction()));
        block = Source.BlockChain.ProposeBlock(
            new PrivateKey(),
            lastCommit: Libplanet.Tests.TestUtils.CreateBlockCommit(block));
        Source.BlockChain.Append(block, Libplanet.Tests.TestUtils.CreateBlockCommit(block));
        await AssertNextNonce(1, key2.ToAddress());
        await AssertNextNonce(2, key1.ToAddress());

        // unstaging txs decrease nonce
        Source.BlockChain.MakeTransaction(key1, ImmutableList<NullAction>.Empty.Add(new NullAction()));
        await AssertNextNonce(3, key1.ToAddress());
        Source.BlockChain.MakeTransaction(key1, ImmutableList<NullAction>.Empty.Add(new NullAction()));
        await AssertNextNonce(4, key1.ToAddress());
        Source.BlockChain.GetStagedTransactionIds()
            .Select(Source.BlockChain.GetTransaction)
            .Select(Source.BlockChain.UnstageTransaction)
            .ToImmutableList();
        await AssertNextNonce(2, key1.ToAddress());
    }
}
