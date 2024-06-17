using Bencodex.Types;
using Libplanet.Action.State;
using Boolean = Bencodex.Types.Boolean;

namespace Libplanet.Action.Tests.Common
{
    public class ThrowException : IAction
    {
        public ThrowException()
        {
        }

        public bool ThrowOnExecution { get; set; }

        public bool Deterministic { get; set; } = true;

        public IValue PlainValue =>
            new Bencodex.Types.Dictionary(new Dictionary<string, bool>
            {
                ["throw_on_execution"] = ThrowOnExecution,
                ["deterministic"] = Deterministic,
            });

        public void LoadPlainValue(IValue plainValue)
        {
            LoadPlainValue((Dictionary)plainValue);
        }

        public void LoadPlainValue(Dictionary plainValue)
        {
            ThrowOnExecution = (Boolean)plainValue["throw_on_execution"];
            Deterministic = (Boolean)plainValue["deterministic"];
        }

        public IWorld Execute(IActionContext context)
        {
            if (ThrowOnExecution)
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

            return context.PreviousState;
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
