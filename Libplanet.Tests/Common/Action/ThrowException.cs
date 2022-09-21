using System;
using System.Collections.Generic;
using Bencodex.Types;
using Libplanet.Action;
using Boolean = Bencodex.Types.Boolean;

namespace Libplanet.Tests.Common.Action
{
    public class ThrowException : IAction
    {
        public ThrowException()
        {
        }

        public bool ThrowOnRehearsal { get; set; }

        public bool ThrowOnExecution { get; set; }

        public Type ExceptionTypeToThrow { get; set; } = typeof(SomeException);

        public IValue PlainValue =>
            new Bencodex.Types.Dictionary(new Dictionary<string, bool>
            {
                ["throw_on_rehearsal"] = ThrowOnRehearsal,
                ["throw_on_execution"] = ThrowOnExecution,
            });

        public void LoadPlainValue(IValue plainValue)
        {
            LoadPlainValue((Dictionary)plainValue);
        }

        public void LoadPlainValue(Dictionary plainValue)
        {
            ThrowOnRehearsal = plainValue.GetValue<Boolean>("throw_on_rehearsal");
            ThrowOnExecution = plainValue.GetValue<Boolean>("throw_on_execution");
        }

        public IAccountStateDelta Execute(IActionContext context)
        {
            if (context.Rehearsal ? ThrowOnRehearsal : ThrowOnExecution)
            {
                throw (Exception)Activator.CreateInstance(
                    ExceptionTypeToThrow, "An expected exception.");
            }

            return context.PreviousStates;
        }

        public class SomeException : Exception
        {
            public SomeException(string message)
                : base(message)
            {
            }
        }
    }
}
