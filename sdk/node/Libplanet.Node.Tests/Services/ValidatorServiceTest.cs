using Libplanet.Node.Options;
using Libplanet.Node.Services;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Options;

namespace Libplanet.Node.Tests.Services;

public class ValidatorServiceTest
{
    [Fact]
    public void Enable_Test()
    {
        var settings = new Dictionary<string, string?>
        {
            [$"{SwarmOptions.Position}:{nameof(SwarmOptions.IsEnabled)}"] = "true",
            [$"{ValidatorOptions.Position}:{nameof(ValidatorOptions.IsEnabled)}"] = "true",
        };
        var serviceProvider = TestUtility.CreateServiceProvider(settings);
        var validatorService = serviceProvider.GetRequiredService<IValidatorService>();
        Assert.NotNull(validatorService);
    }

    [Fact]
    public void Enable_WithoutSwarm_ThrowTest()
    {
        var settings = new Dictionary<string, string?>
        {
            [$"{ValidatorOptions.Position}:{nameof(ValidatorOptions.IsEnabled)}"] = "true",
        };
        var serviceProvider = TestUtility.CreateServiceProvider(settings);
        Assert.Throws<OptionsValidationException>(
            serviceProvider.GetRequiredService<IValidatorService>);
    }

    [Fact]
    public void Disable_ThrowTest()
    {
        var serviceProvider = TestUtility.CreateServiceProvider();
        Assert.ThrowsAny<InvalidOperationException>(
            serviceProvider.GetRequiredService<ISwarmService>);
    }
}
