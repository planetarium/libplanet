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

        public bool Deterministic { get; set; } = true;

        public IValue PlainValue =>
            new Bencodex.Types.Dictionary(new Dictionary<string, bool>
            {
                ["throw_on_rehearsal"] = ThrowOnRehearsal,
                ["throw_on_execution"] = ThrowOnExecution,
                ["deterministic"] = Deterministic,
            });

        public void LoadPlainValue(IValue plainValue)
        {
            LoadPlainValue((Dictionary)plainValue);
        }

        public void LoadPlainValue(Dictionary plainValue)
        {
            ThrowOnRehearsal = plainValue.GetValue<Boolean>("throw_on_rehearsal");
            ThrowOnExecution = plainValue.GetValue<Boolean>("throw_on_execution");
            Deterministic = plainValue.GetValue<Boolean>("deterministic");
        }

        public IAccountStateDelta Execute(IActionContext context)
        {
            if (context.Rehearsal ? ThrowOnRehearsal : ThrowOnExecution)
            {
                if (Deterministic)
                {
                    throw new SomeException("An expected exception");
                }
                else
                {
                    throw new OutOfMemoryException();
                }
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
