using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using Libplanet.Blockchain.Renderers;
using Libplanet.Tests.Common.Action;
using Serilog;
using Serilog.Events;
using Serilog.Sinks.TestCorrelator;
using Xunit;
using Constants = Serilog.Core.Constants;
using DumbBlock = Libplanet.Blocks.Block<Libplanet.Tests.Common.Action.DumbAction>;

namespace Libplanet.Tests.Blockchain.Renderers
{
    public class LoggedRendererTest : IDisposable
    {
        private static DumbBlock _genesis =
            TestUtils.MineGenesisBlock<DumbAction>(TestUtils.GenesisMiner);

        private static DumbBlock _blockA =
            TestUtils.MineNextBlock(_genesis, TestUtils.GenesisMiner);

        private static DumbBlock _blockB =
            TestUtils.MineNextBlock(_genesis, TestUtils.GenesisMiner);

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

            IRenderer<DumbAction> renderer = new AnonymousRenderer<DumbAction>
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
            renderer = new LoggedRenderer<DumbAction>(renderer, _logger);

            Assert.False(called);
            Assert.Empty(LogEvents);

            renderer.RenderReorg(_blockA, _blockB, _genesis);
            Assert.False(called);
            Assert.Equal(2, LogEvents.Count());
            ResetContext();

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
                $"\"{typeof(AnonymousRenderer<DumbAction>).FullName}\"",
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

        [Theory]
        [InlineData(false, false)]
        [InlineData(false, true)]
        [InlineData(true, false)]
        [InlineData(true, true)]
        public void RenderReorg(bool end, bool exception)
        {
            bool called = false;
            LogEvent firstLog = null;

            void Callback(DumbBlock old, DumbBlock @new, DumbBlock bp)
            {
                LogEvent[] logs = LogEvents.ToArray();
                Assert.Single(logs);
                firstLog = logs[0];
                Assert.Equal(_blockA, old);
                Assert.Equal(_blockB, @new);
                Assert.Equal(_genesis, bp);
                called = true;
                if (exception)
                {
                    throw new ThrowException.SomeException(string.Empty);
                }
            }

            IRenderer<DumbAction> renderer = new AnonymousRenderer<DumbAction>
            {
                ReorgRenderer = end ? (Action<DumbBlock, DumbBlock, DumbBlock>)null : Callback,
                ReorgEndRenderer = end ? Callback : (Action<DumbBlock, DumbBlock, DumbBlock>)null,
            };
            renderer = new LoggedRenderer<DumbAction>(renderer, _logger, LogEventLevel.Verbose);
            var invoke = end
                ? (Action<DumbBlock, DumbBlock, DumbBlock>)renderer.RenderReorgEnd
                : renderer.RenderReorg;
            var invokeOpposite = end
                ? (Action<DumbBlock, DumbBlock, DumbBlock>)renderer.RenderReorg
                : renderer.RenderReorgEnd;
            var methodName = end ? "RenderReorgEnd" : "RenderReorg";

            Assert.False(called);
            Assert.Empty(LogEvents);

            renderer.RenderBlock(_genesis, _blockA);
            Assert.False(called);
            Assert.Equal(2, LogEvents.Count());
            ResetContext();

            invokeOpposite(_blockA, _blockB, _genesis);
            Assert.False(called);
            Assert.Equal(2, LogEvents.Count());
            ResetContext();

            if (exception)
            {
                Assert.Throws<ThrowException.SomeException>(
                    () => invoke(_blockA, _blockB, _genesis)
                );
            }
            else
            {
                invoke(_blockA, _blockB, _genesis);
            }

            Assert.True(called);
            LogEvent[] logEvents = LogEvents.ToArray();
            Assert.Equal(2, logEvents.Length);
            Assert.Equal(firstLog, logEvents[0]);
            Assert.Equal(LogEventLevel.Verbose, firstLog.Level);
            Assert.Equal(
                "Invoking {MethodName}() for #{NewIndex} {NewHash} (was #{OldIndex} {OldHash} " +
                "through #{BranchpointIndex} {BranchpointHash})...",
                firstLog.MessageTemplate.Text
            );
            Assert.Equal($"\"{methodName}\"", firstLog.Properties["MethodName"].ToString());
            Assert.Equal(
                _blockB.Index.ToString(CultureInfo.InvariantCulture),
                firstLog.Properties["NewIndex"].ToString()
            );
            Assert.Equal($"\"{_blockB.Hash}\"", firstLog.Properties["NewHash"].ToString());
            Assert.Equal(
                _blockA.Index.ToString(CultureInfo.InvariantCulture),
                firstLog.Properties["OldIndex"].ToString()
            );
            Assert.Equal($"\"{_blockA.Hash}\"", firstLog.Properties["OldHash"].ToString());
            Assert.Equal(
                _genesis.Index.ToString(CultureInfo.InvariantCulture),
                firstLog.Properties["BranchpointIndex"].ToString()
            );
            Assert.Equal($"\"{_genesis.Hash}\"", firstLog.Properties["BranchpointHash"].ToString());
            Assert.Equal(
                $"\"{typeof(AnonymousRenderer<DumbAction>).FullName}\"",
                firstLog.Properties[Constants.SourceContextPropertyName].ToString()
            );
            Assert.Null(firstLog.Exception);

            LogEvent secondLog = logEvents[1];
            Assert.Equal(
                exception ? LogEventLevel.Error : LogEventLevel.Verbose,
                secondLog.Level
            );
            Assert.Equal(
                exception
                    ? "An exception was thrown during {MethodName}() for #{NewIndex} {NewHash} " +
                        "(was #{OldIndex} {OldHash} through #{BranchpointIndex} " +
                        "{BranchpointHash})"
                    : "Invoked {MethodName}() for #{NewIndex} {NewHash} (was #{OldIndex} " +
                        "{OldHash} through #{BranchpointIndex} {BranchpointHash})",
                secondLog.MessageTemplate.Text
            );
            Assert.Equal(firstLog.Properties["MethodName"], secondLog.Properties["MethodName"]);
            Assert.Equal(firstLog.Properties["NewIndex"], secondLog.Properties["NewIndex"]);
            Assert.Equal(firstLog.Properties["NewHash"], secondLog.Properties["NewHash"]);
            Assert.Equal(firstLog.Properties["OldIndex"], secondLog.Properties["OldIndex"]);
            Assert.Equal(firstLog.Properties["OldHash"], secondLog.Properties["OldHash"]);
            Assert.Equal(
                firstLog.Properties["BranchpointIndex"],
                secondLog.Properties["BranchpointIndex"]
            );
            Assert.Equal(
                firstLog.Properties["BranchpointHash"],
                secondLog.Properties["BranchpointHash"]
            );
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

        private void ResetContext()
        {
            _context.Dispose();
            _context = TestCorrelator.CreateContext();
        }
    }
}
