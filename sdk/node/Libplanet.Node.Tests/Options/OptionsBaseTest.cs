using Libplanet.Node.Options;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Logging.Abstractions;
using Microsoft.Extensions.Options;

namespace Libplanet.Node.Tests.Options;

public class OptionsBaseTest
{
    [Fact]
    public void Configured_Test()
    {
        var services = new ServiceCollection();
        services.AddLogging(configure => configure.AddProvider(NullLoggerProvider.Instance));
        services.AddSingleton<IConfigureOptions<TestOptions>, TestOptionsConfigurator>();
        var serviceProvider = services.BuildServiceProvider();
        var options = serviceProvider.GetRequiredService<IOptions<TestOptions>>().Value;

        Assert.True(options.IsConfigured);
    }

    [Fact]
    public void NotConfigured_Test()
    {
        var services = new ServiceCollection();
        services.AddLogging(configure => configure.AddProvider(NullLoggerProvider.Instance));
        var serviceProvider = services.BuildServiceProvider();
        var options = serviceProvider.GetRequiredService<IOptions<TestOptions>>().Value;

        Assert.False(options.IsConfigured);
    }

    [Fact]
    public void Validated_Test()
    {
        var services = new ServiceCollection();
        services.AddLogging(configure => configure.AddProvider(NullLoggerProvider.Instance));
        services.AddSingleton<IValidateOptions<TestOptions>, TestOptionsValidator>();
        var serviceProvider = services.BuildServiceProvider();
        var options = serviceProvider.GetRequiredService<IOptions<TestOptions>>().Value;

        Assert.True(options.IsValidated);
    }

    [Fact]
    public void NotValidated_Test()
    {
        var services = new ServiceCollection();
        services.AddLogging(configure => configure.AddProvider(NullLoggerProvider.Instance));
        var serviceProvider = services.BuildServiceProvider();
        var options = serviceProvider.GetRequiredService<IOptions<TestOptions>>().Value;

        Assert.False(options.IsValidated);
    }

    private sealed class TestOptions : OptionsBase<TestOptions>
    {
        public string Value { get; set; } = string.Empty;
    }

    private sealed class TestOptionsConfigurator : OptionsConfiguratorBase<TestOptions>
    {
        protected override void OnConfigure(TestOptions options)
        {
        }
    }

    private sealed class TestOptionsValidator : OptionsValidatorBase<TestOptions>
    {
        protected override void OnValidate(string? name, TestOptions options)
        {
        }
    }
}
