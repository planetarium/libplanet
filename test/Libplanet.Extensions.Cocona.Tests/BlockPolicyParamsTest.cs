using System;
using System.Collections.Immutable;
using Libplanet.Action;
using Libplanet.Blockchain.Policies;
using Xunit;

namespace Libplanet.Extensions.Cocona.Tests;

public class BlockPolicyParamsTest
{
    [Fact]
    public void DefaultState()
    {
        var blockPolicyParams = new BlockPolicyParams();
        var policyActionsRegistry = blockPolicyParams.GetPolicyActionsRegistry();
        Assert.Null(blockPolicyParams.GetBlockPolicy());
        Assert.Empty(policyActionsRegistry.BeginBlockActions);
        Assert.Empty(policyActionsRegistry.EndBlockActions);
        Assert.Empty(policyActionsRegistry.BeginBlockActions);
        Assert.Empty(policyActionsRegistry.EndTxActions);
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
        Assert.Single(blockPolicy.PolicyActionsRegistry.BeginBlockActions);
        Assert.IsType<NullAction>(blockPolicy.PolicyActionsRegistry.BeginBlockActions[0]);
        Assert.Single(blockPolicy.PolicyActionsRegistry.EndBlockActions);
        Assert.IsType<NullAction>(blockPolicy.PolicyActionsRegistry.EndBlockActions[0]);
        Assert.Single(blockPolicy.PolicyActionsRegistry.BeginTxActions);
        Assert.IsType<NullAction>(blockPolicy.PolicyActionsRegistry.BeginTxActions[0]);
        Assert.Single(blockPolicy.PolicyActionsRegistry.EndTxActions);
        Assert.IsType<NullAction>(blockPolicy.PolicyActionsRegistry.EndTxActions[0]);
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
    public void GetPolicyActionsRegistry()
    {
        var blockPolicyParams = new BlockPolicyParams
        {
            PolicyFactory = $"{GetType().FullName}.{nameof(BlockPolicyFactory)}",
        };
        var policyActionsRegistry =
            blockPolicyParams.GetPolicyActionsRegistry(new[] { GetType().Assembly });
        Assert.IsType<NullAction>(Assert.Single(policyActionsRegistry.BeginBlockActions));
        Assert.IsType<NullAction>(Assert.Single(policyActionsRegistry.EndBlockActions));
        Assert.IsType<NullAction>(Assert.Single(policyActionsRegistry.BeginTxActions));
        Assert.IsType<NullAction>(Assert.Single(policyActionsRegistry.EndTxActions));
    }

    internal static BlockPolicy BlockPolicyFactory() =>
        new BlockPolicy(
            new PolicyActionsRegistry(
                ImmutableArray.Create<IAction>(new NullAction()),
                ImmutableArray.Create<IAction>(new NullAction()),
                ImmutableArray.Create<IAction>(new NullAction()),
                ImmutableArray.Create<IAction>(new NullAction())));

    internal static BlockPolicy BlockPolicyFactoryWithParams(bool param) =>
        new BlockPolicy();

    internal static int BlockPolicyFactoryWithWrongReturnType() => 0;

    internal static BlockPolicy BlockPolicyFactoryReturningNull() => null!;

    internal BlockPolicy BlockPolicyFactoryInstanceMethod() => new BlockPolicy();
}
