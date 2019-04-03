using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using Libplanet.Action;

namespace Libplanet.Tests.Common.Action
{
    public class ThrowException : IAction
    {
        public ThrowException()
        {
        }

        public bool Throw { get; set; } = false;

        public IImmutableDictionary<string, object> PlainValue =>
            new Dictionary<string, object>()
            {
                { "throw", Throw },
            }.ToImmutableDictionary();

        public void LoadPlainValue(IImmutableDictionary<string, object> plainValue)
        {
            Throw = (bool)plainValue["throw"];
        }

        public IAccountStateDelta Execute(IActionContext context)
        {
            if (Throw)
            {
                throw new SomeException("An expected exception.");
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
