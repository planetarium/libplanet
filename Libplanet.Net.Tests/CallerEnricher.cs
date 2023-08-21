using System.Diagnostics;
using System.Linq;
using Serilog;
using Serilog.Core;
using Serilog.Events;

namespace Libplanet.Net.Tests
{
    public class CallerEnricher : ILogEventEnricher
    {
        public void Enrich(LogEvent logEvent, ILogEventPropertyFactory propertyFactory)
        {
            var skip = 0;
            while (true)
            {
                var stack = new StackFrame(skip);
                if (!stack.HasMethod())
                {
                    logEvent.AddPropertyIfAbsent(
                        new LogEventProperty("Caller", new ScalarValue("<unknown method>")));
                    return;
                }

                var method = stack.GetMethod();
                if (method?.DeclaringType?.FullName != null
                    && method.DeclaringType.Assembly != typeof(Log).Assembly
                    && method.DeclaringType.FullName.Contains("Libplanet.Net.Tests.SwarmTest"))
                {
                    var methodName = string.Join(
                        ", ",
                        method.GetParameters().Select(pi => pi.ParameterType.FullName));
                    var caller = $"{method.DeclaringType.FullName}.{method.Name}({methodName})";
                    logEvent.AddPropertyIfAbsent(
                        new LogEventProperty("Caller", new ScalarValue(caller)));
                    return;
                }

                skip++;
            }
        }
    }
}
