using System.Collections.Generic;

namespace Libplanet.Action
{
    public interface IAction
    {
        IDictionary<string, object> PlainValue { get; }

        void LoadPlainValue(IDictionary<string, object> plainValue);
    }
}
