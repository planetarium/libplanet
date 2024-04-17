namespace Libplanet.Extensions.Cocona.Tests;

using System;
using System.Collections.Immutable;
using Libplanet.Action;
using Libplanet.Blockchain.Policies;
using Xunit;

public class BlockPolicyParamsTest
{
    [Fact]
    public void DefaultState()
    {
        var blockPolicyParams = new BlockPolicyParams();
        Assert.Null(blockPolicyParams.GetBlockPolicy());
        Assert.Empty(blockPolicyParams.GetBeginBlockActions());
        Assert.Empty(blockPolicyParams.GetEndBlockActions());
        Assert.Empty(blockPolicyParams.GetBeginTxActions());
        Assert.Empty(blockPolicyParams.GetEndTxActions());
    }

    [Fact]
    public void GetBlockPolicy()
    {
        var blockPolicyParams = new BlockPolicyParams
        {
            PolicyFactory = $"{GetType().FullName}.{nameof(BlockPolicyFactory)}",
        };
        BlockPolicy blockPolicy = Assert.IsType<BlockPolicy>(
            blockPolicyParams.GetBlockPolicy(new[] { GetType().Assembly })
        );
        Assert.Single(blockPolicy.BeginBlockActions);
        Assert.IsType<NullAction>(blockPolicy.BeginBlockActions[0]);
        Assert.Single(blockPolicy.EndBlockActions);
        Assert.IsType<NullAction>(blockPolicy.EndBlockActions[0]);
        Assert.Single(blockPolicy.BeginTxActions);
        Assert.IsType<NullAction>(blockPolicy.BeginTxActions[0]);
        Assert.Single(blockPolicy.EndTxActions);
        Assert.IsType<NullAction>(blockPolicy.EndTxActions[0]);
    }

    [Fact]
    public void GetBlockPolicy_NonQualifiedName()
    {
        var blockPolicyParams = new BlockPolicyParams
        {
            PolicyFactory = nameof(BlockPolicyFactory),
        };
        var e = Assert.Throws<TypeLoadException>(() =>
            blockPolicyParams.GetBlockPolicy(new[] { GetType().Assembly }));
        Assert.Contains("qualified name", e.Message, StringComparison.InvariantCultureIgnoreCase);
    }

    [Fact]
    public void GetBlockPolicy_ReferringNonExistentType()
    {
        var blockPolicyParams = new BlockPolicyParams
        {
            PolicyFactory = $"{GetType().FullName}__NonExistent__.{nameof(BlockPolicyFactory)}",
        };
        var e = Assert.Throws<TypeLoadException>(() =>
            blockPolicyParams.GetBlockPolicy(new[] { GetType().Assembly }));
        Assert.Contains(
            "failed to load policy type",
            e.Message,
            StringComparison.InvariantCultureIgnoreCase);
    }

    [Fact]
    public void GetBlockPolicy_ReferringNonExistentMethod()
    {
        var blockPolicyParams = new BlockPolicyParams
        {
            PolicyFactory = $"{GetType().FullName}.{nameof(BlockPolicyFactory)}__NonExistent__",
        };
        var e = Assert.Throws<TypeLoadException>(() =>
            blockPolicyParams.GetBlockPolicy(new[] { GetType().Assembly }));
        Assert.Contains(
            "failed to find a static method",
            e.Message,
            StringComparison.InvariantCultureIgnoreCase);
    }

    [Fact]
    public void GetBlockPolicy_ReferringInstanceMethod()
    {
        var blockPolicyParams = new BlockPolicyParams
        {
            PolicyFactory = $"{GetType().FullName}.{nameof(BlockPolicyFactoryInstanceMethod)}",
        };
        var e = Assert.Throws<TypeLoadException>(() =>
            blockPolicyParams.GetBlockPolicy(new[] { GetType().Assembly }));
        Assert.Contains(
            "failed to find a static method",
            e.Message,
            StringComparison.InvariantCultureIgnoreCase);
    }

    [Fact]
    public void GetBlockPolicy_NotAcceptingMethodWithParams()
    {
        var blockPolicyParams = new BlockPolicyParams
        {
            PolicyFactory = $"{GetType().FullName}.{nameof(BlockPolicyFactoryWithParams)}",
        };
        var e = Assert.Throws<TypeLoadException>(() =>
            blockPolicyParams.GetBlockPolicy(new[] { GetType().Assembly }));
        Assert.Contains("parameters", e.Message, StringComparison.InvariantCultureIgnoreCase);
    }

    [Fact]
    public void GetBlockPolicy_NotAcceptingMethodWithWrongReturnType()
    {
        var blockPolicyParams = new BlockPolicyParams
        {
            PolicyFactory = $"{GetType().FullName}.{nameof(BlockPolicyFactoryWithWrongReturnType)}",
        };
        var e = Assert.Throws<TypeLoadException>(() =>
            blockPolicyParams.GetBlockPolicy(new[] { GetType().Assembly }));
        Assert.Contains("return type", e.Message, StringComparison.InvariantCultureIgnoreCase);
    }

    [Fact]
    public void GetBlockPolicy_FactoryReturningNull()
    {
        var blockPolicyParams = new BlockPolicyParams
        {
            PolicyFactory = $"{GetType().FullName}.{nameof(BlockPolicyFactoryReturningNull)}",
        };
        var e = Assert.Throws<InvalidOperationException>(() =>
            blockPolicyParams.GetBlockPolicy(new[] { GetType().Assembly }));
        Assert.Contains("returned null", e.Message, StringComparison.InvariantCultureIgnoreCase);
    }

    [Fact]
    public void GetBeginBlockActions()
    {
        var blockPolicyParams = new BlockPolicyParams
        {
            PolicyFactory = $"{GetType().FullName}.{nameof(BlockPolicyFactory)}",
        };
        var blockActions = blockPolicyParams.GetBeginBlockActions(new[] { GetType().Assembly });
        Assert.Single(blockActions);
        Assert.IsType<NullAction>(blockActions[0]);
    }

    [Fact]
    public void GetEndBlockActions()
    {
        var blockPolicyParams = new BlockPolicyParams
        {
            PolicyFactory = $"{GetType().FullName}.{nameof(BlockPolicyFactory)}",
        };
        var blockActions = blockPolicyParams.GetEndBlockActions(new[] { GetType().Assembly });
        Assert.Single(blockActions);
        Assert.IsType<NullAction>(blockActions[0]);
    }

    [Fact]
    public void GetBeginTxActions()
    {
        var blockPolicyParams = new BlockPolicyParams
        {
            PolicyFactory = $"{GetType().FullName}.{nameof(BlockPolicyFactory)}",
        };
        var blockActions = blockPolicyParams.GetBeginTxActions(new[] { GetType().Assembly });
        Assert.Single(blockActions);
        Assert.IsType<NullAction>(blockActions[0]);
    }

    [Fact]
    public void GetEndTxActions()
    {
        var blockPolicyParams = new BlockPolicyParams
        {
            PolicyFactory = $"{GetType().FullName}.{nameof(BlockPolicyFactory)}",
        };
        var blockActions = blockPolicyParams.GetEndTxActions(new[] { GetType().Assembly });
        Assert.Single(blockActions);
        Assert.IsType<NullAction>(blockActions[0]);
    }

    internal static BlockPolicy BlockPolicyFactory() =>
        new BlockPolicy(
            beginBlockActions: new IAction[] { new NullAction() }.ToImmutableArray(),
            endBlockActions: new IAction[] { new NullAction() }.ToImmutableArray(),
            beginTxActions: new IAction[] { new NullAction() }.ToImmutableArray(),
            endTxActions: new IAction[] { new NullAction() }.ToImmutableArray()
        );

    internal static BlockPolicy BlockPolicyFactoryWithParams(bool param) =>
        new BlockPolicy();

    internal static int BlockPolicyFactoryWithWrongReturnType() => 0;

    internal static BlockPolicy BlockPolicyFactoryReturningNull() =>
        null!;

    internal BlockPolicy BlockPolicyFactoryInstanceMethod() =>
        new BlockPolicy();
}
