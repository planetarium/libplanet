using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Reflection;
using Libplanet.Blocks;

namespace Libplanet.Action
{
    public class StaticActionTypeLoader : IActionTypeLoader
    {
        private readonly Dictionary<string, Type> _types;

        public StaticActionTypeLoader(IEnumerable<Assembly> assemblies)
        {
            var assembliesSet = assemblies.ToImmutableHashSet();
            var actionType = typeof(IAction);
            _types = new Dictionary<string, Type>();
            foreach (Assembly asm in assembliesSet)
            {
                foreach (Type t in asm.GetTypes())
                {
                    if (actionType.IsAssignableFrom(t) &&
                        ActionTypeAttribute.ValueOf(t) is string actionId)
                    {
                        _types[actionId] = t;
                    }
                }
            }
        }

        public IDictionary<string, Type> Load(IPreEvaluationBlockHeader blockHeader) => _types;
    }
}
