using System;

namespace Libplanet.Tests
{
    public sealed class ActionProgress<T> : IProgress<T>
    {
        private Action<T> _action;

        public ActionProgress(Action<T> action) =>
            _action = action ?? throw new ArgumentNullException(nameof(action));

        public void Report(T value) =>
            _action(value);
    }
}
