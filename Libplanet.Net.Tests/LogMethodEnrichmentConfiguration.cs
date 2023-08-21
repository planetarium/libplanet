using Serilog;
using Serilog.Configuration;

namespace Libplanet.Net.Tests
{
    public static class LogMethodEnrichmentConfiguration
    {
        public static LoggerConfiguration WithCaller(
            this LoggerEnrichmentConfiguration enrichmentConfiguration)
        {
            return enrichmentConfiguration.With<CallerEnricher>();
        }
    }
}
