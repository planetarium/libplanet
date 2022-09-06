using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using Libplanet.Action;
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
    public class LoggedActionRendererTest : IDisposable
    {
        private static IAction _action = new DumbAction();

        private static IAccountStateDelta _stateDelta =
            new AccountStateDeltaImpl(_ => null, (_, __) => default, _ => default, default);

        private static Exception _exception = new Exception();

        private static DumbBlock _genesis =
            TestUtils.ProposeGenesisBlock<DumbAction>(TestUtils.GenesisMiner);

        private static DumbBlock _blockA =
            TestUtils.ProposeNextBlock(_genesis, TestUtils.GenesisMiner);

        private static DumbBlock _blockB =
            TestUtils.ProposeNextBlock(_genesis, TestUtils.GenesisMiner);

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
        [InlineData(false, false, false, false)]
        [InlineData(true, false, false, false)]
        [InlineData(false, true, false, false)]
        [InlineData(true, true, false, false)]
        [InlineData(false, false, true, false)]
        [InlineData(true, false, true, false)]
        [InlineData(false, true, true, false)]
        [InlineData(true, true, true, false)]
        [InlineData(false, false, false, true)]
        [InlineData(true, false, false, true)]
        [InlineData(false, true, false, true)]
        [InlineData(true, true, false, true)]
        [InlineData(false, false, true, true)]
        [InlineData(true, false, true, true)]
        [InlineData(false, true, true, true)]
        [InlineData(true, true, true, true)]
        public void ActionRenderings(bool unrender, bool error, bool rehearsal, bool exception)
        {
            bool called = false;
            LogEvent firstLog = null;
            IActionContext actionContext =
                new ActionContext(
                    default, default, default, default, 123, _stateDelta, default, null, rehearsal
                );
            Exception actionError = new Exception();
            IActionRenderer<DumbAction> actionRenderer;
            if (error)
            {
                Action<IAction, IActionContext, Exception> render = (action, cxt, e) =>
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
                actionRenderer = new AnonymousActionRenderer<DumbAction>
                {
                    ActionErrorRenderer = unrender ? null : render,
                    ActionErrorUnrenderer = unrender ? render : null,
                };
            }
            else
            {
                Action<IAction, IActionContext, IAccountStateDelta> render = (action, cxt, next) =>
                {
                    LogEvent[] logs = LogEvents.ToArray();
                    Assert.Single(logs);
                    firstLog = logs[0];
                    Assert.Same(_action, action);
                    Assert.Same(actionContext, cxt);
                    Assert.Same(_stateDelta, next);
                    called = true;
                    if (exception)
                    {
                        throw new ThrowException.SomeException(string.Empty);
                    }
                };
                actionRenderer = new AnonymousActionRenderer<DumbAction>
                {
                    ActionRenderer = unrender ? null : render,
                    ActionUnrenderer = unrender ? render : null,
                };
            }

            actionRenderer = new LoggedActionRenderer<DumbAction>(
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
                    if (unrender)
                    {
                        actionRenderer.UnrenderActionError(_action, actionContext, actionError);
                    }
                    else
                    {
                        actionRenderer.RenderActionError(_action, actionContext, actionError);
                    }
                }
                else
                {
                    if (unrender)
                    {
                        actionRenderer.UnrenderAction(_action, actionContext, _stateDelta);
                    }
                    else
                    {
                        actionRenderer.RenderAction(_action, actionContext, _stateDelta);
                    }
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
                (unrender ? "Unrender" : "Render") +
                "Action" + (error ? "Error" : string.Empty);
            Assert.Equal($"\"{methodName}\"", firstLog.Properties["MethodName"].ToString());
            Assert.Equal(
                $"\"{typeof(DumbAction).FullName}\"",
                firstLog.Properties["ActionType"].ToString()
            );
            Assert.Equal(
                actionContext.BlockIndex.ToString(CultureInfo.InvariantCulture),
                firstLog.Properties["BlockIndex"].ToString()
            );
            Assert.Equal(
                $"\"{typeof(AnonymousActionRenderer<DumbAction>).FullName}\"",
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
                    (rehearsal ? " (rehearsal: {Rehearsal})" : string.Empty) +
                    ": {Exception}";
            }
            else
            {
                expected2ndLog =
                    "Invoked {MethodName}() for an action {ActionType} at block #{BlockIndex}" +
                    (rehearsal ? " (rehearsal: {Rehearsal})." : ".");
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
                Assert.StartsWith(
                    $"\"{typeof(ThrowException.SomeException).FullName}",
                    secondLog.Properties["Exception"].ToString()
                );
                Assert.NotNull(secondLog.Exception);
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

            void Callback(DumbBlock oldTip, DumbBlock newTip)
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

            IActionRenderer<DumbAction> actionRenderer = new AnonymousActionRenderer<DumbAction>
            {
                BlockRenderer = end ? (Action<DumbBlock, DumbBlock>)null : Callback,
                BlockEndRenderer = end ? Callback : (Action<DumbBlock, DumbBlock>)null,
            };
            actionRenderer = new LoggedActionRenderer<DumbAction>(actionRenderer, _logger);
            var invoke = end
                ? (Action<DumbBlock, DumbBlock>)actionRenderer.RenderBlockEnd
                : actionRenderer.RenderBlock;
            var invokeOpposite = end
                ? (Action<DumbBlock, DumbBlock>)actionRenderer.RenderBlock
                : actionRenderer.RenderBlockEnd;
            var methodName = end ? "RenderBlockEnd" : "RenderBlock";

            Assert.False(called);
            Assert.Empty(LogEvents);

            actionRenderer.RenderReorg(_blockA, _blockB, _genesis);
            Assert.False(called);
            Assert.Equal(2, LogEvents.Count());
            ResetContext();

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
                $"\"{typeof(AnonymousActionRenderer<DumbAction>).FullName}\"",
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
                        "(was #{OldIndex} {OldHash}): {Exception}"
                    : "Invoked {MethodName}() for #{NewIndex} {NewHash} " +
                        "(was #{OldIndex} {OldHash}).",
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
                Assert.StartsWith(
                    $"\"{typeof(ThrowException.SomeException).FullName}",
                    secondLog.Properties["Exception"].ToString()
                );
                Assert.IsType<ThrowException.SomeException>(secondLog.Exception);
            }
            else
            {
                Assert.False(secondLog.Properties.ContainsKey("Exception"));
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

            void Callback(DumbBlock oldTip, DumbBlock newTip, DumbBlock branchpoint)
            {
                LogEvent[] logs = LogEvents.ToArray();
                Assert.Single(logs);
                firstLog = logs[0];
                Assert.Equal(_blockA, oldTip);
                Assert.Equal(_blockB, newTip);
                Assert.Equal(_genesis, branchpoint);
                called = true;
                if (exception)
                {
                    throw new ThrowException.SomeException(string.Empty);
                }
            }

            IActionRenderer<DumbAction> actionRenderer = new AnonymousActionRenderer<DumbAction>
            {
                ReorgRenderer = end ? (Action<DumbBlock, DumbBlock, DumbBlock>)null : Callback,
                ReorgEndRenderer = end ? Callback : (Action<DumbBlock, DumbBlock, DumbBlock>)null,
            };
            actionRenderer = new LoggedActionRenderer<DumbAction>(
                actionRenderer,
                _logger,
                LogEventLevel.Verbose
            );
            var invoke = end
                ? (Action<DumbBlock, DumbBlock, DumbBlock>)actionRenderer.RenderReorgEnd
                : actionRenderer.RenderReorg;
            var invokeOpposite = end
                ? (Action<DumbBlock, DumbBlock, DumbBlock>)actionRenderer.RenderReorg
                : actionRenderer.RenderReorgEnd;
            var methodName = end ? "RenderReorgEnd" : "RenderReorg";

            Assert.False(called);
            Assert.Empty(LogEvents);

            actionRenderer.RenderBlock(_genesis, _blockA);
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
                $"\"{typeof(AnonymousActionRenderer<DumbAction>).FullName}\"",
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
                        "{BranchpointHash}): {Exception}"
                    : "Invoked {MethodName}() for #{NewIndex} {NewHash} (was #{OldIndex} " +
                        "{OldHash} through #{BranchpointIndex} {BranchpointHash}).",
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
                Assert.StartsWith(
                    $"\"{typeof(ThrowException.SomeException).FullName}",
                    secondLog.Properties["Exception"].ToString()
                );
                Assert.IsType<ThrowException.SomeException>(secondLog.Exception);
            }
            else
            {
                Assert.False(secondLog.Properties.ContainsKey("Exception"));
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
