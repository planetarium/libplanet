#nullable enable
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Globalization;
using System.Linq;
using System.Threading.Tasks;
using GraphQL;
using GraphQL.Execution;
using Libplanet.Action;
using Libplanet.Crypto;
using Libplanet.Types.Blocks;
using Libplanet.Types.Tx;
using Libplanet.Explorer.Queries;
using Xunit;
using static Libplanet.Explorer.Tests.GraphQLTestUtils;

namespace Libplanet.Explorer.Tests.Queries;

public class TransactionQueryGeneratedTest
{
    protected readonly GeneratedBlockChainFixture Fx;
    protected MockBlockChainContext Source;
    protected TransactionQuery QueryGraph;

    public TransactionQueryGeneratedTest()
    {
        Fx = new GeneratedBlockChainFixture(
            new System.Random().Next(),
            txActionsForSuffixBlocks:
            ImmutableArray<ImmutableArray<ImmutableArray<SimpleAction>>>.Empty
                .Add(ImmutableArray<ImmutableArray<SimpleAction>>.Empty
                    .Add(ImmutableArray<SimpleAction>.Empty
                        .Add(new SimpleAction0())
                        .Add(new SimpleAction0())))     // Successful action transaction
                .Add(ImmutableArray<ImmutableArray<SimpleAction>>.Empty
                    .Add(ImmutableArray<SimpleAction>.Empty
                        .Add(new SimpleAction0())
                        .Add(new SimpleAction0Fail())
                        .Add(new SimpleAction0()))) // Failed action transaction
                .Add(ImmutableArray<ImmutableArray<SimpleAction>>.Empty
                    .Add(ImmutableArray<SimpleAction>.Empty))); // Empty action transaction
        Source = new MockBlockChainContext(Fx.Chain);
        var _ = new ExplorerQuery(Source);
        QueryGraph = new TransactionQuery(Source);
    }

    [Fact]
    public async Task TransactionResult()
    {
        var emptyBlock = Fx.Chain.Tip;
        var emptyTx = emptyBlock.Transactions[0];
        var failBlock = Fx.Chain.Store.GetBlock(emptyBlock.PreviousHash!.Value);
        var failTx = failBlock.Transactions[0];
        var successBlock = Fx.Chain.Store.GetBlock(failBlock.PreviousHash!.Value);
        var successTx = successBlock.Transactions[0];
        var pk = Fx.PrivateKeys[0];
        var stagingTx = Transaction.Create(
            Fx.Chain.GetNextTxNonce(pk.Address),
            pk,
            Fx.Chain.Genesis.Hash,
            ImmutableArray<SimpleAction>.Empty.Add(new SimpleAction1()).ToPlainValues());
        Fx.Chain.StageTransaction(stagingTx);

        var queryResult = await ExecuteTransactionResultQueryAsync(successTx.Id);
        Assert.Equal("SUCCESS", queryResult.TxStatus);
        Assert.Equal(successBlock.Index, queryResult.BlockIndex);
        Assert.Equal(successBlock.Hash.ToString(), queryResult.BlockHash);
        Assert.Equal(new string?[] { null , null }, queryResult.ExceptionNames);
        queryResult = await ExecuteTransactionResultQueryAsync(failTx.Id);
        Assert.Equal("FAILURE", queryResult.TxStatus);
        Assert.Equal(failBlock.Index, queryResult.BlockIndex);
        Assert.Equal(failBlock.Hash.ToString(), queryResult.BlockHash);
        Assert.Equal(
            new string?[] { null, "Libplanet.Action.State.CurrencyPermissionException", null },
            queryResult.ExceptionNames);
        queryResult = await ExecuteTransactionResultQueryAsync(emptyTx.Id);
        Assert.Equal("INCLUDED", queryResult.TxStatus);
        Assert.Equal(emptyBlock.Index, queryResult.BlockIndex);
        Assert.Equal(emptyBlock.Hash.ToString(), queryResult.BlockHash);
        Assert.Null(queryResult.ExceptionNames);
        queryResult = await ExecuteTransactionResultQueryAsync(new TxId());
        Assert.Equal("INVALID", queryResult.TxStatus);
        Assert.Null(queryResult.BlockIndex);
        Assert.Null(queryResult.BlockHash);
        Assert.Null(queryResult.ExceptionNames);
        queryResult = await ExecuteTransactionResultQueryAsync(stagingTx.Id);
        Assert.Equal("STAGING", queryResult.TxStatus);
        Assert.Null(queryResult.BlockIndex);
        Assert.Null(queryResult.BlockHash);
        Assert.Null(queryResult.ExceptionNames);
    }

    [Fact]
    public virtual async Task Transactions()
    {
        var allBlocks = Fx.Chain.IterateBlocks().ToImmutableArray();
        await AssertTransactionsQueryPermutation(allBlocks, null, null);
        foreach (var signer in Fx.PrivateKeys.Select(pk => pk.Address))
        {
            await AssertTransactionsQueryPermutation(allBlocks, signer, null);
            await AssertTransactionsQueryPermutation(allBlocks, null, signer);
            foreach (var involved in Fx.PrivateKeys.Select(pk => pk.Address))
            {
                await AssertTransactionsQueryPermutation(allBlocks, signer, involved);
            }
        }
    }

    private async Task AssertTransactionsQueryPermutation(
        ImmutableArray<Block> blocksToTest,
        Address? signer,
        Address? involvedAddress)
    {
        await AssertAgainstTransactionsQuery(
            blocksToTest, signer, involvedAddress, false, null, null);
        await AssertAgainstTransactionsQuery(
            blocksToTest, signer, involvedAddress, true, null, null);
        await AssertAgainstTransactionsQuery(
            blocksToTest, signer, involvedAddress, false, blocksToTest.Length / 4, null);
        await AssertAgainstTransactionsQuery(
            blocksToTest,
            signer,
            involvedAddress,
            false,
            blocksToTest.Length / 4 - blocksToTest.Length,
            null);
        Assert.Equal<IEnumerable<(string Id, string? BlockHash)>>(
            await ExecuteTransactionsQueryAsync(
                signer, involvedAddress, false, blocksToTest.Length / 4, null),
            await ExecuteTransactionsQueryAsync(
                signer,
                involvedAddress,
                false,
                blocksToTest.Length / 4 - blocksToTest.Length,
                null));
        await AssertAgainstTransactionsQuery(
            blocksToTest, signer, involvedAddress, true, blocksToTest.Length / 4, null);
        await AssertAgainstTransactionsQuery(
            blocksToTest,
            signer,
            involvedAddress,
            true,
            blocksToTest.Length / 4 - blocksToTest.Length,
            null);
        Assert.Equal<IEnumerable<(string Id, string? BlockHash)>>(
            await ExecuteTransactionsQueryAsync(
                signer, involvedAddress, true, blocksToTest.Length / 4, null),
            await ExecuteTransactionsQueryAsync(
                signer,
                involvedAddress,
                true,
                blocksToTest.Length / 4 - blocksToTest.Length,
                null));
        await AssertAgainstTransactionsQuery(
            blocksToTest, signer, involvedAddress, false, null, blocksToTest.Length / 4);
        await AssertAgainstTransactionsQuery(
            blocksToTest, signer, involvedAddress, true, null, blocksToTest.Length / 4);
        await AssertAgainstTransactionsQuery(
            blocksToTest,
            signer,
            involvedAddress,
            false,
            blocksToTest.Length / 3,
            blocksToTest.Length / 4);
        await AssertAgainstTransactionsQuery(
            blocksToTest,
            signer,
            involvedAddress,
            false,
            blocksToTest.Length / 3 - blocksToTest.Length,
            blocksToTest.Length / 4);
        Assert.Equal<IEnumerable<(string Id, string? BlockHash)>>(
            await ExecuteTransactionsQueryAsync(
                signer,
                involvedAddress,
                false,
                blocksToTest.Length / 3,
                blocksToTest.Length / 4),
            await ExecuteTransactionsQueryAsync(
                signer,
                involvedAddress,
                false,
                blocksToTest.Length / 3 - blocksToTest.Length,
                blocksToTest.Length / 4));
        await AssertAgainstTransactionsQuery(
            blocksToTest,
            signer,
            involvedAddress,
            true,
            blocksToTest.Length / 3,
            blocksToTest.Length / 4);
        await AssertAgainstTransactionsQuery(
            blocksToTest,
            signer,
            involvedAddress,
            true,
            blocksToTest.Length / 3 - blocksToTest.Length,
            blocksToTest.Length / 4);
        Assert.Equal<IEnumerable<(string Id, string? BlockHash)>>(
            await ExecuteTransactionsQueryAsync(
                signer,
                involvedAddress,
                true,
                blocksToTest.Length / 3,
                blocksToTest.Length / 4),
            await ExecuteTransactionsQueryAsync(
                signer,
                involvedAddress,
                true,
                blocksToTest.Length / 3 - blocksToTest.Length,
                blocksToTest.Length / 4));
    }

    private async Task AssertAgainstTransactionsQuery(
        IReadOnlyList<Block> blocksToTest,
        Address? signer,
        Address? involvedAddress,
        bool desc,
        int? offset,
        int? limit)
    {
        IEnumerable<Block> blocks = blocksToTest;
        if (offset is { } offsetVal)
        {
            offsetVal = offsetVal >= 0 ? offsetVal : blocksToTest.Count + offsetVal;
            blocks = desc ? blocks.SkipLast(offsetVal) : blocks.Skip(offsetVal);
        }
        IEnumerable<Transaction> txs =
            blocks.SelectMany(block => block.Transactions);

        if (desc)
        {
            txs = txs.Reverse();
        }

        if (signer is { } signerVal)
        {
            txs = txs.Where(tx => tx.Signer.Equals(signerVal));
        }
        else if (involvedAddress is { } involvedAddressVal)
        {
            txs = txs.Where(tx => tx.UpdatedAddresses.Contains(involvedAddressVal));
        }

        if (limit is { } limitVal)
        {
            txs = txs.Take(limitVal);
        }

        var expected = txs.ToImmutableArray();
        var actual =
            await ExecuteTransactionsQueryAsync(signer, involvedAddress, desc, offset, limit);

        foreach (var i in Enumerable.Range(0, actual.Length))
        {
            Assert.Equal(expected[i].Id.ToHex(), actual[i].Id);
            if (Source.Index is not null)
            {
                Assert.Equal(
                    (
                        await Source.Index.GetContainedBlockHashByTxIdAsync(expected[i].Id)
                            .ConfigureAwait(false))
                    .ToString(),
                    actual[i].BlockHash);
            }
        }
    }

    private async Task<ImmutableArray<(string Id, string? BlockHash)>>
        ExecuteTransactionsQueryAsync(
            Address? signer,
            Address? involvedAddress,
            bool desc,
            int? offset,
            int? limit)
    {
        ExecutionResult result = await ExecuteQueryAsync(@$"
        {{
            transactions(
                {(signer is { } signerVal ? @$"signer: ""{signerVal}""" : "")}
                {(involvedAddress is { } invVal ? @$"involvedAddress: ""{invVal}""" : "")}
                desc: {(desc ? "true" : "false")}
                offset: {offset?.ToString(CultureInfo.InvariantCulture) ?? "0"}
                {(limit is { } limitVal ? $"limit: {limitVal}" : "")}
            )
            {{
                id
                {(Source.Index is not null ? "blockRef { hash }" : "")}
            }}
         }}
        ", QueryGraph, source: Source);
        Assert.Null(result.Errors);
        ExecutionNode resultData = Assert.IsAssignableFrom<ExecutionNode>(result.Data);
        IDictionary<string, object> resultDict =
            Assert.IsAssignableFrom<IDictionary<string, object>>(resultData.ToValue());
        return ((IReadOnlyList<object>)resultDict["transactions"])
            .Select(txData =>
            (
                (string)((IDictionary<string, object>)txData)["id"],
                (string?)(Source.Index is not null
                    ? ((IDictionary<string, object>)
                        ((IDictionary<string, object>)txData)["blockRef"]
                    )["hash"]
                    : null)))
            .ToImmutableArray();
    }

    private async Task<
            (string TxStatus, long? BlockIndex, string? BlockHash, string?[]? ExceptionNames)>
        ExecuteTransactionResultQueryAsync(TxId txId)
    {
        ExecutionResult result = await ExecuteQueryAsync(@$"
        {{
            transactionResult(txId: ""{txId.ToHex()}"")
            {{
                txStatus
                blockIndex
                blockHash
                exceptionNames
            }}
         }}
        ", QueryGraph, source: Source);
        Assert.Null(result.Errors);
        ExecutionNode resultData = Assert.IsAssignableFrom<ExecutionNode>(result.Data);
        IDictionary<string, object> resultDict =
            (IDictionary<string, object>)Assert.IsAssignableFrom<IDictionary<string, object>>(
                resultData.ToValue())["transactionResult"];
        var exceptionNames = ((object[]?)resultDict["exceptionNames"])?.Select(
            name => name is { } n ? Assert.IsType<string>(n) : null).ToArray();
        return (
            (string)resultDict["txStatus"],
            (long?)resultDict["blockIndex"],
            (string?)resultDict["blockHash"],
            (string?[]?)exceptionNames);
    }
}
