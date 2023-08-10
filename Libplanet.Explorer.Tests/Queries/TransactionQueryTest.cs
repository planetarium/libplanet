using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Threading.Tasks;
using Bencodex.Types;
using GraphQL;
using GraphQL.Execution;
using Libplanet.Action;
using Libplanet.Action.Sys;
using Libplanet.Blockchain;
using Libplanet.Blockchain.Policies;
using Libplanet.Common;
using Libplanet.Crypto;
using Libplanet.Types.Assets;
using Libplanet.Types.Consensus;
using Libplanet.Types.Tx;
using Libplanet.Consensus;
using Libplanet.Explorer.Queries;
using Libplanet.Store;
using Libplanet.Store.Trie;
using Xunit;
using static Libplanet.Explorer.Tests.GraphQLTestUtils;

namespace Libplanet.Explorer.Tests.Queries;

public class TransactionQueryTest
{
    protected readonly BlockChain Chain;
    protected MockBlockChainContext Source;
    protected TransactionQuery QueryGraph;

    public TransactionQueryTest()
    {
        Chain = Libplanet.Tests.TestUtils.MakeBlockChain<NullAction>(
            new BlockPolicy(),
            new MemoryStore(),
            new TrieStateStore(new MemoryKeyValueStore()),
            privateKey: new PrivateKey(),
            timestamp: DateTimeOffset.UtcNow
        );
        Source = new MockBlockChainContext(Chain);
        QueryGraph = new TransactionQuery(Source);
    }

    [Fact]
    public async Task BindSignatureWithCustomActions()
    {
        var tx = Transaction.Create(
            0L,
            new PrivateKey(),
            Source.BlockChain.Genesis.Hash,
            Enumerable.Empty<NullAction>().ToPlainValues()
        );
        tx.MarshalUnsignedTx();
        ExecutionResult result = await ExecuteQueryAsync(@$"
        {{
            bindSignature(
                unsignedTransaction: ""{ByteUtil.Hex(tx.SerializeUnsignedTx())}"",
                signature: ""{ByteUtil.Hex(tx.Signature)}""
            )
         }}
         ", QueryGraph, source: Source);
        Assert.Null(result.Errors);
        ExecutionNode resultData = Assert.IsAssignableFrom<ExecutionNode>(result.Data);
        IDictionary<string, object> resultDict =
            Assert.IsAssignableFrom<IDictionary<string, object>>(resultData!.ToValue());
        Assert.Equal(tx.Serialize(), ByteUtil.ParseHex((string)resultDict["bindSignature"]));
    }

    [Fact]
    public async Task BindSignatureWithSystemAction()
    {
        var foo = Currency.Uncapped("FOO", 2, ImmutableHashSet<Address>.Empty);
        var action = new Initialize(
            new ValidatorSet(new List<Validator>()
                { new Validator(new PrivateKey().PublicKey, 1 )}),
            new Dictionary<Address, IImmutableDictionary<Address, IValue>>
            {
                [default] =
                new Dictionary<Address, IValue>
                {
                    [default] = (Text)"initial value",
                }.ToImmutableDictionary(),
            }.ToImmutableDictionary());
            
        var tx = Transaction.Create(
            0L,
            new PrivateKey(),
            Source.BlockChain.Genesis.Hash,
            new IAction[] { action }.ToPlainValues()
        );
        ExecutionResult result = await ExecuteQueryAsync(@$"
        {{
            bindSignature(
                unsignedTransaction: ""{ByteUtil.Hex(tx.SerializeUnsignedTx())}"",
                signature: ""{ByteUtil.Hex(tx.Signature)}""
            )
         }}
         ", QueryGraph, source: Source);
        Assert.Null(result.Errors);
        ExecutionNode resultData = Assert.IsAssignableFrom<ExecutionNode>(result.Data);
        IDictionary<string, object> resultDict =
            Assert.IsAssignableFrom<IDictionary<string, object>>(resultData!.ToValue());
        Assert.Equal(tx.Serialize(), ByteUtil.ParseHex((string)resultDict["bindSignature"]));
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
            Libplanet.Tests.TestUtils.CreateBlockCommit(block));
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
