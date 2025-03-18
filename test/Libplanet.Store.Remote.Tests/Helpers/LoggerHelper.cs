using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Logging.Abstractions;

namespace Libplanet.Store.Remote.Tests.Helpers;

public static class LoggerHelper
{
    public static ILogger<T> CreateLogger<T>(LoggerOutputType outputType = LoggerOutputType.Null) => 
        outputType switch
        {
            LoggerOutputType.Console => new LoggerFactory().CreateLogger<T>(),
            LoggerOutputType.Null => new NullLogger<T>(),
            _ => new NullLogger<T>()
        };
}
