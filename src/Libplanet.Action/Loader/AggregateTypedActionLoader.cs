using System;
using System.Collections;
using System.Collections.Generic;
using Bencodex.Types;
using Libplanet.Action.Sys;

namespace Libplanet.Action.Loader
{
    public sealed class AggregateTypedActionLoader
         : IActionLoader, IEnumerable<IActionLoader>
    {
        private readonly List<IActionLoader> _actionLoaderList = new List<IActionLoader>();

        public AggregateTypedActionLoader()
        {
        }

        public AggregateTypedActionLoader(IActionLoader[] actionLoaders)
        {
            _actionLoaderList = new List<IActionLoader>(actionLoaders);
        }

        public IAction LoadAction(long index, IValue value)
        {
            if (Registry.IsSystemAction(value))
            {
                return Registry.Deserialize(value);
            }

            foreach (var item in _actionLoaderList)
            {
                try
                {
                    return item.LoadAction(index, value);
                }
                catch
                {
                    // ignored
                }
            }

            throw new ArgumentException(
                message: $"No action loader found for the given value: {value}",
                paramName: nameof(value));
        }

        public void Add(IActionLoader actionLoader)
        {
            _actionLoaderList.Add(actionLoader);
        }

        IEnumerator<IActionLoader> IEnumerable<IActionLoader>.GetEnumerator()
            => _actionLoaderList.GetEnumerator();

        IEnumerator IEnumerable.GetEnumerator()
            => _actionLoaderList.GetEnumerator();
    }
}
