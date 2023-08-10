using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Action.State;
using Libplanet.Action.Tests.Common;
using Libplanet.Action.Tests.Mocks;
using Libplanet.Blockchain.Renderers;
using Libplanet.Types.Blocks;
using Serilog;
using Serilog.Events;
using Serilog.Sinks.TestCorrelator;
using Xunit;
using Constants = Serilog.Core.Constants;

namespace Libplanet.Tests.Blockchain.Renderers
{
    public class LoggedActionRendererTest : IDisposable
    {
        private static IValue _action = new DumbAction().PlainValue;

        private static IWorld _world =
            World.Create(new MockWorldState());

        private static Exception _exception = new Exception();

        private static Block _genesis =
            TestUtils.ProposeGenesisBlock(TestUtils.GenesisProposer);

        private static Block _blockA =
            TestUtils.ProposeNextBlock(_genesis, TestUtils.GenesisProposer);

        private static Block _blockB =
            TestUtils.ProposeNextBlock(_genesis, TestUtils.GenesisProposer);

        private ILogger _logger;

        private ITestCorrelatorContext _context;

        public LoggedActionRendererTest()
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
        [InlineData(false, false, false)]
        [InlineData(true, false, false)]
        [InlineData(false, true, false)]
        [InlineData(true, true, false)]
        [InlineData(false, false, true)]
        [InlineData(true, false, true)]
        [InlineData(false, true, true)]
        [InlineData(true, true, true)]
        public void ActionRenderings(bool error, bool rehearsal, bool exception)
        {
            bool called = false;
            LogEvent firstLog = null;
            IActionContext actionContext =
                new ActionContext(
                    default,
                    default,
                    default,
                    Block.CurrentProtocolVersion,
                    123,
                    _world,
                    default,
                    0,
                    rehearsal
                );
            Exception actionError = new Exception();
            IActionRenderer actionRenderer;
            if (error)
            {
                Action<IValue, IActionContext, Exception> render = (action, cxt, e) =>
                {
                    LogEvent[] logs = LogEvents.ToArray();
                    Assert.Single(logs);
                    firstLog = logs[0];
                    Assert.Same(_action, action);
                    Assert.Same(actionContext, cxt);
                    Assert.Same(actionError, e);
                    called = true;
                    if (exception)
                    {
                        throw new ThrowException.SomeException(string.Empty);
                    }
                };
                actionRenderer = new AnonymousActionRenderer
                {
                    ActionErrorRenderer = render,
                };
            }
            else
            {
                Action<IValue, IActionContext, IWorld> render = (action, cxt, next) =>
                {
                    LogEvent[] logs = LogEvents.ToArray();
                    Assert.Single(logs);
                    firstLog = logs[0];
                    Assert.Same(_action, action);
                    Assert.Same(actionContext, cxt);
                    Assert.Same(_world, next);
                    called = true;
                    if (exception)
                    {
                        throw new ThrowException.SomeException(string.Empty);
                    }
                };
                actionRenderer = new AnonymousActionRenderer
                {
                    ActionRenderer = render,
                };
            }

            actionRenderer = new LoggedActionRenderer(
                actionRenderer,
                _logger,
                LogEventLevel.Information
            );
            Assert.False(called);
            Assert.Empty(LogEvents);

            actionRenderer.RenderBlock(_genesis, _blockA);
            Assert.False(called);
            Assert.Equal(2, LogEvents.Count());
            ResetContext();

            ThrowException.SomeException thrownException = null;
            try
            {
                if (error)
                {
                    actionRenderer.RenderActionError(_action, actionContext, actionError);
                }
                else
                {
                    actionRenderer.RenderAction(_action, actionContext, _world);
                }
            }
            catch (ThrowException.SomeException e)
            {
                thrownException = e;
            }

            if (exception)
            {
                Assert.NotNull(thrownException);
                Assert.IsType<ThrowException.SomeException>(thrownException);
            }
            else
            {
                Assert.Null(thrownException);
            }

            Assert.True(called);
            LogEvent[] logEvents = LogEvents.ToArray();
            Assert.Equal(2, logEvents.Length);
            Assert.Equal(firstLog, logEvents[0]);
            Assert.Equal(LogEventLevel.Information, firstLog.Level);
            const string expected1stLog =
                "Invoking {MethodName}() for an action {ActionType} at block #{BlockIndex}...";
            Assert.Equal(
                expected1stLog + (rehearsal ? " (rehearsal: {Rehearsal})" : string.Empty),
                firstLog.MessageTemplate.Text
            );
            string methodName =
                "Render" + "Action" + (error ? "Error" : string.Empty);
            Assert.Equal($"\"{methodName}\"", firstLog.Properties["MethodName"].ToString());
            Assert.Equal(
                actionContext.BlockIndex.ToString(CultureInfo.InvariantCulture),
                firstLog.Properties["BlockIndex"].ToString()
            );
            Assert.Equal(
                $"\"{typeof(AnonymousActionRenderer).FullName}\"",
                firstLog.Properties[Constants.SourceContextPropertyName].ToString()
            );
            Assert.Null(firstLog.Exception);
            if (rehearsal)
            {
                Assert.Equal("True", firstLog.Properties["Rehearsal"].ToString());
            }
            else
            {
                Assert.False(firstLog.Properties.ContainsKey("Rehearsal"));
            }

            LogEvent secondLog = logEvents[1];
            Assert.Equal(
                exception ? LogEventLevel.Error : LogEventLevel.Information,
                secondLog.Level
            );
            string expected2ndLog;
            if (exception)
            {
                expected2ndLog =
                    "An exception was thrown during {MethodName}() for an action {ActionType} at " +
                    "block #{BlockIndex}" +
                    (rehearsal ? " (rehearsal: {Rehearsal})" : string.Empty);
            }
            else
            {
                expected2ndLog =
                    "Invoked {MethodName}() for an action {ActionType} at block #{BlockIndex}" +
                    (rehearsal ? " (rehearsal: {Rehearsal})" : string.Empty);
            }

            Assert.Equal(
                expected2ndLog,
                secondLog.MessageTemplate.Text
            );
            Assert.Equal(firstLog.Properties["MethodName"], secondLog.Properties["MethodName"]);
            Assert.Equal(firstLog.Properties["ActionType"], secondLog.Properties["ActionType"]);
            Assert.Equal(firstLog.Properties["BlockIndex"], secondLog.Properties["BlockIndex"]);
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

            if (rehearsal)
            {
                Assert.Equal("True", firstLog.Properties["Rehearsal"].ToString());
            }
            else
            {
                Assert.False(firstLog.Properties.ContainsKey("Rehearsal"));
            }
        }

        [Theory]
        [InlineData(false, false)]
        [InlineData(false, true)]
        [InlineData(true, false)]
        [InlineData(true, true)]
        public void RenderBlock(bool end, bool exception)
        {
            bool called = false;
            LogEvent firstLog = null;

            void Callback(Block oldTip, Block newTip)
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
            }

            IActionRenderer actionRenderer = new AnonymousActionRenderer
            {
                BlockRenderer = end ? (Action<Block, Block>)null : Callback,
                BlockEndRenderer = end ? Callback : (Action<Block, Block>)null,
            };
            actionRenderer = new LoggedActionRenderer(actionRenderer, _logger);
            var invoke = end
                ? (Action<Block, Block>)actionRenderer.RenderBlockEnd
                : actionRenderer.RenderBlock;
            var invokeOpposite = end
                ? (Action<Block, Block>)actionRenderer.RenderBlock
                : actionRenderer.RenderBlockEnd;
            var methodName = end ? "RenderBlockEnd" : "RenderBlock";

            Assert.False(called);
            Assert.Empty(LogEvents);

            invokeOpposite(_genesis, _blockA);
            Assert.False(called);
            Assert.Equal(2, LogEvents.Count());
            ResetContext();

            if (exception)
            {
                Assert.Throws<ThrowException.SomeException>(
                    () => invoke(_genesis, _blockA)
                );
            }
            else
            {
                invoke(_genesis, _blockA);
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
            Assert.Equal($"\"{methodName}\"", firstLog.Properties["MethodName"].ToString());
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
                $"\"{typeof(AnonymousActionRenderer).FullName}\"",
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

        private void ResetContext()
        {
            _context.Dispose();
            _context = TestCorrelator.CreateContext();
        }
    }
}
