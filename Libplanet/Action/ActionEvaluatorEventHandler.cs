using System;
using System.Collections.Generic;
using System.Linq;
using FluentResults;
using Libplanet.State;

namespace Libplanet.Action
{
    public class ActionEvaluatorEventHandler
    {
        private readonly List<IAction> _operations = new List<IAction>();

        public delegate IActionContext Next(IAccountStateDelta state);

        public ActionEvaluatorEventHandler Add(IAction operation)
        {
            _operations.Add(operation);
            return this;
        }

        public Result<IEnumerable<ActionEvaluation>> Execute(
            IActionContext context,
            Next next)
        {
            ActionEvaluation CreateActionEvaluation(
                IAction op,
                IActionContext input,
                IAccountStateDelta output,
                Exception? exc,
                List<string>? logs = null) => new ActionEvaluation(
                action: op,
                inputContext: input,
                outputStates: output,
                exception: exc,
                logs: logs);

            List<ActionEvaluation> result = new List<ActionEvaluation>();
            IActionContext nextContext = context;
            foreach (var operation in _operations)
            {
                Result<IAccountStateDelta> stateDelta = Result.Try(
                    () => operation.Execute(nextContext));

                switch (stateDelta)
                {
                    case { IsSuccess: true }:
                        result.Add(CreateActionEvaluation(
                            operation,
                            nextContext,
                            stateDelta.Value,
                            null));
                        break;
                    default:
                        var exc = stateDelta
                            .Errors
                            .First()
                            .Reasons
                            .OfType<ExceptionalError>()
                            .First()
                            .Exception;
                        result.Add(CreateActionEvaluation(
                            operation,
                            nextContext,
                            nextContext.PreviousStates,
                            exc));
                        break;
                }

                nextContext = stateDelta switch
                {
                    { IsSuccess: true } => next(stateDelta.Value),
                    _ => nextContext,
                };
            }

            return result;
        }
    }
}
