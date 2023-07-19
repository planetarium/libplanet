using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using Libplanet.Action.Tests.Common;
using Libplanet.Blockchain.Renderers;
using Serilog;
using Serilog.Events;
using Serilog.Sinks.TestCorrelator;
using Xunit;
using Constants = Serilog.Core.Constants;
using DumbBlock = Libplanet.Types.Blocks.Block;

namespace Libplanet.Tests.Blockchain.Renderers
{
    public class LoggedRendererTest : IDisposable
    {
        private static DumbBlock _genesis =
            TestUtils.ProposeGenesisBlock(TestUtils.GenesisProposer);

        private static DumbBlock _blockA =
            TestUtils.ProposeNextBlock(_genesis, TestUtils.GenesisProposer);

        private static DumbBlock _blockB =
            TestUtils.ProposeNextBlock(_genesis, TestUtils.GenesisProposer);

        private ILogger _logger;

        private ITestCorrelatorContext _context;

        public LoggedRendererTest()
        {
            _logger = new LoggerConfiguration()
                .MinimumLevel.Verbose()
                .WriteTo.TestCorrelator()
                .CreateLogger();
            _context = TestCorrelator.CreateContext();
        }

        public IEnumerable<LogEvent> LogEvents =>
            TestCorrelator.GetLogEventsFromContextGuid(_context.Guid);

        public void Dispose()
        {
            _context.Dispose();
        }

        [Theory]
        [InlineData(false)]
        [InlineData(true)]
        public void RenderBlock(bool exception)
        {
            bool called = false;
            LogEvent firstLog = null;

            IRenderer renderer = new AnonymousRenderer
            {
                BlockRenderer = (oldTip, newTip) =>
                {
                    LogEvent[] logs = LogEvents.ToArray();
                    Assert.Single(logs);
                    firstLog = logs[0];
                    Assert.Equal(_genesis, oldTip);
                    Assert.Equal(_blockA, newTip);
                    called = true;
                    if (exception)
                    {
                        throw new ThrowException.SomeException(string.Empty);
                    }
                },
            };
            renderer = new LoggedRenderer(renderer, _logger);

            Assert.False(called);
            Assert.Empty(LogEvents);

            if (exception)
            {
                Assert.Throws<ThrowException.SomeException>(
                    () => renderer.RenderBlock(_genesis, _blockA)
                );
            }
            else
            {
                renderer.RenderBlock(_genesis, _blockA);
            }

            Assert.True(called);
            LogEvent[] logEvents = LogEvents.ToArray();
            Assert.Equal(2, logEvents.Length);
            Assert.Equal(firstLog, logEvents[0]);
            Assert.Equal(LogEventLevel.Debug, firstLog.Level);
            Assert.Equal(
                "Invoking {MethodName}() for #{NewIndex} {NewHash} (was #{OldIndex} {OldHash})...",
                firstLog.MessageTemplate.Text
            );
            Assert.Equal("\"RenderBlock\"", firstLog.Properties["MethodName"].ToString());
            Assert.Equal(
                _blockA.Index.ToString(CultureInfo.InvariantCulture),
                firstLog.Properties["NewIndex"].ToString()
            );
            Assert.Equal($"\"{_blockA.Hash}\"", firstLog.Properties["NewHash"].ToString());
            Assert.Equal(
                _genesis.Index.ToString(CultureInfo.InvariantCulture),
                firstLog.Properties["OldIndex"].ToString()
            );
            Assert.Equal($"\"{_genesis.Hash}\"", firstLog.Properties["OldHash"].ToString());
            Assert.Equal(
                $"\"{typeof(AnonymousRenderer).FullName}\"",
                firstLog.Properties[Constants.SourceContextPropertyName].ToString()
            );
            Assert.Null(firstLog.Exception);

            LogEvent secondLog = logEvents[1];
            Assert.Equal(
                exception ? LogEventLevel.Error : LogEventLevel.Debug,
                secondLog.Level
            );
            Assert.Equal(
                exception
                    ? "An exception was thrown during {MethodName}() for #{NewIndex} {NewHash} " +
                        "(was #{OldIndex} {OldHash})"
                    : "Invoked {MethodName}() for #{NewIndex} {NewHash} " +
                        "(was #{OldIndex} {OldHash})",
                secondLog.MessageTemplate.Text
            );
            Assert.Equal(firstLog.Properties["MethodName"], secondLog.Properties["MethodName"]);
            Assert.Equal(firstLog.Properties["NewIndex"], secondLog.Properties["NewIndex"]);
            Assert.Equal(firstLog.Properties["NewHash"], secondLog.Properties["NewHash"]);
            Assert.Equal(firstLog.Properties["OldIndex"], secondLog.Properties["OldIndex"]);
            Assert.Equal(firstLog.Properties["OldHash"], secondLog.Properties["OldHash"]);
            Assert.Equal(
                firstLog.Properties[Constants.SourceContextPropertyName],
                secondLog.Properties[Constants.SourceContextPropertyName]
            );
            if (exception)
            {
                Assert.IsType<ThrowException.SomeException>(secondLog.Exception);
            }
            else
            {
                Assert.Null(secondLog.Exception);
            }
        }
    }
}
