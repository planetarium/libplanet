using Libplanet.Action;
using Libplanet.Action.Loader;
using Libplanet.Node.Options;
using Libplanet.Node.Services;
using Microsoft.Extensions.DependencyInjection;

namespace Libplanet.Node.Tests.Services;

public class ActionServiceTest(TempDirectoryFixture tempDirectoryFixture)
    : IClassFixture<TempDirectoryFixture>
{
    private readonly TempDirectoryFixture _tempDirectoryFixture = tempDirectoryFixture;

    [Fact]
    public void Base_Test()
    {
        var serviceProvider = TestUtility.CreateServiceProvider();
        var actionService = serviceProvider.GetRequiredService<IActionService>();

        Assert.IsType<AggregateTypedActionLoader>(actionService.ActionLoader);
        Assert.IsType<PolicyActionsRegistry>(actionService.PolicyActionsRegistry);
    }

    [Fact]
    public void Base_WithModulePath_Test()
    {
        var actionLoaderType = "Libplanet.Node.DumbActions.DumbActionLoader";
        var policyActionRegistryType = "Libplanet.Node.DumbActions.DumbActionPolicyActionsRegistry";
        var codePath = "Libplanet.Node.Tests.Services.ActionServiceTestSource.cs";
        var codeStream = typeof(ActionServiceTest).Assembly.GetManifestResourceStream(codePath)
            ?? throw new FileNotFoundException($"Resource '{codePath}' not found.");
        using var reader = new StreamReader(codeStream);
        var code = reader.ReadToEnd();
        var assemblyName = Path.GetRandomFileName();
        var assemblyPath = $"{_tempDirectoryFixture.GetRandomFileName()}.dll";

        var settings = new Dictionary<string, string?>
        {
            [$"{ActionOptions.Position}:{nameof(ActionOptions.ModulePath)}"]
                = assemblyPath,
            [$"{ActionOptions.Position}:{nameof(ActionOptions.ActionLoaderType)}"]
                = actionLoaderType,
            [$"{ActionOptions.Position}:{nameof(ActionOptions.PolicyActionRegistryType)}"]
                = policyActionRegistryType,
        };

        RuntimeCompiler.CompileCode(code, assemblyName, assemblyPath);

        var serviceProvider = TestUtility.CreateServiceProvider(settings);
        var actionService = serviceProvider.GetRequiredService<IActionService>();

        Assert.Equal(actionLoaderType, actionService.ActionLoader.GetType().FullName);
        Assert.Equal(
            expected: policyActionRegistryType,
            actual: actionService.PolicyActionsRegistry.GetType().FullName);
    }
}
