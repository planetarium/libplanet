using Libplanet.Action.State;

namespace Libplanet.Action.Tests.Common
{
    public struct ExecuteRecord
    {
        public IAction Action { get; set; }

        public IAccount NextState { get; set; }

        public bool Rehearsal { get; set; }

        public override string ToString() =>
            $"{nameof(ExecuteRecord)} {{ {nameof(Action)} = {Action}, {nameof(NextState)} = " +
            $"{NextState}, {nameof(Rehearsal)} = {Rehearsal} }}";
    }
}
