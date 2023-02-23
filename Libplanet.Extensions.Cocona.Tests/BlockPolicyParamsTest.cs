namespace Libplanet.Extensions.Cocona.Tests;

using System;
using System.Collections.Immutable;
using Libplanet.Action;
using Libplanet.Assets;
using Libplanet.Blockchain.Policies;
using Xunit;

public class BlockPolicyParamsTest
{
    private static readonly ImmutableHashSet<Currency> _nativeTokens =
        ImmutableHashSet.Create(Currency.Uncapped("FOO", 2, minters: null));

    [Fact]
    public void DefaultState()
    {
        var blockPolicyParams = new BlockPolicyParams();
        Assert.Null(blockPolicyParams.GetBlockPolicy());
        Assert.Null(blockPolicyParams.GetBlockAction());
        Assert.Null(blockPolicyParams.GetNativeTokens());
    }

    [Fact]
    public void GetBlockPolicy()
    {
        var blockPolicyParams = new BlockPolicyParams
        {
            PolicyFactory = $"{GetType().FullName}.{nameof(BlockPolicyFactory)}",
        };
        BlockPolicy<NullAction> blockPolicy = Assert.IsType<BlockPolicy<NullAction>>(
            blockPolicyParams.GetBlockPolicy(new[] { GetType().Assembly })
        );
        Assert.IsType<NullAction>(blockPolicy.BlockAction);
        Assert.Equal(_nativeTokens, blockPolicy.NativeTokens);
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
    public void GetBlockAction()
    {
        var blockPolicyParams = new BlockPolicyParams
        {
            PolicyFactory = $"{GetType().FullName}.{nameof(BlockPolicyFactory)}",
        };
        var blockAction = blockPolicyParams.GetBlockAction(new[] { GetType().Assembly });
        Assert.IsType<NullAction>(blockAction);
    }

    [Fact]
    public void GetNativeTokens()
    {
        var blockPolicyParams = new BlockPolicyParams
        {
            PolicyFactory = $"{GetType().FullName}.{nameof(BlockPolicyFactory)}",
        };
        var nativeTokens = blockPolicyParams.GetNativeTokens(new[] { GetType().Assembly });
        Assert.Equal(_nativeTokens, nativeTokens);
    }

    internal static BlockPolicy<NullAction> BlockPolicyFactory() =>
        new BlockPolicy<NullAction>(
            blockAction: new NullAction(),
            nativeTokens: _nativeTokens
        );

    internal static BlockPolicy<NullAction> BlockPolicyFactoryWithParams(bool param) =>
        new BlockPolicy<NullAction>();

    internal static int BlockPolicyFactoryWithWrongReturnType() => 0;

    internal static BlockPolicy<NullAction> BlockPolicyFactoryReturningNull() =>
        null!;

    internal BlockPolicy<NullAction> BlockPolicyFactoryInstanceMethod() =>
        new BlockPolicy<NullAction>();
}
