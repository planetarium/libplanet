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

        public bool ThrowOnRendering { get; set; }

        public IValue PlainValue =>
            new Dictionary(new Dictionary<IKey, IValue>
            {
                [(Text)"throw_on_rehearsal"] = new Boolean(ThrowOnRehearsal),
                [(Text)"throw_on_execution"] = new Boolean(ThrowOnExecution),
                [(Text)"throw_on_rendering"] = new Boolean(ThrowOnRendering),
            });

        public void LoadPlainValue(IValue plainValue)
        {
            LoadPlainValue((Dictionary)plainValue);
        }

        public void LoadPlainValue(Dictionary plainValue)
        {
            ThrowOnRehearsal = plainValue.GetValue<Boolean>("throw_on_rehearsal").Value;
            ThrowOnExecution = plainValue.GetValue<Boolean>("throw_on_execution").Value;
            ThrowOnRendering = plainValue.GetValue<Boolean>("throw_on_rendering").Value;
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
            if (ThrowOnRendering)
            {
                throw new SomeException("An expected exception.");
            }
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
