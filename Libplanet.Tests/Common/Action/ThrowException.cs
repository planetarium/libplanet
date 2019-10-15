using System;
using System.Collections.Generic;
using System.Collections.Immutable;
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

        public bool ThrowOnRehearsal { get; set; } = false;

        public bool ThrowOnExecution { get; set; } = false;

        public IValue PlainValue =>
            new Bencodex.Types.Dictionary(new Dictionary<IKey, IValue>
            {
                [(Text)"throw"] = new Bencodex.Types.Boolean(ThrowOnRehearsal),
            });

        public void LoadPlainValue(IValue plainValue)
        {
            LoadPlainValue((Dictionary)plainValue);
        }

        public void LoadPlainValue(Dictionary plainValue)
        {
            ThrowOnRehearsal = plainValue.GetValue<Boolean>("throw").Value;
        }

        public IAccountStateDelta Execute(IActionContext context)
        {
            if (context.Rehearsal ? ThrowOnRehearsal : ThrowOnExecution)
            {
                throw new SomeException("An expected exception.");
            }

            return context.PreviousStates;
        }

        public void Render(
            IActionContext context,
            IAccountStateDelta nextStates)
        {
        }

        public void Unrender(
            IActionContext context,
            IAccountStateDelta nextStates)
        {
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
