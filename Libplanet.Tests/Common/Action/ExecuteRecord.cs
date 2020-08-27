using Libplanet.Action;

namespace Libplanet.Tests.Common.Action
{
    public struct ExecuteRecord
    {
        public IAction Action { get; set; }

        public IAccountStateDelta NextState { get; set; }

        public bool Rehearsal { get; set; }

        public override string ToString() =>
            $"{nameof(ExecuteRecord)} {{ {nameof(Action)} = {Action}, {nameof(NextState)} = " +
            $"{NextState}, {nameof(Rehearsal)} = {Rehearsal} }}";
    }
}
