using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Reflection;
using Libplanet.Blocks;

namespace Libplanet.Action
{
    public class StaticActionTypeLoader : IActionTypeLoader
    {
        private readonly Type? _baseType;
        private readonly ImmutableHashSet<Assembly> _assembliesSet;

        private IDictionary<string, Type>? _types;

        public StaticActionTypeLoader(IEnumerable<Assembly> assemblies, Type? baseType = null)
        {
            _baseType = baseType;
            _assembliesSet = assemblies.ToImmutableHashSet();
            _types = null;
        }

        public IDictionary<string, Type> Load(IPreEvaluationBlockHeader blockHeader) => Load();

        internal IDictionary<string, Type> Load() =>
            _types ??= LoadImpl(_assembliesSet, _baseType);

        private static IDictionary<string, Type> LoadImpl(
            IEnumerable<Assembly> assembliesSet, Type? baseType = null)
        {
            var types = new Dictionary<string, Type>();
            var actionType = typeof(IAction);
            foreach (Assembly asm in assembliesSet)
            {
                foreach (Type t in asm.GetTypes())
                {
                    if (baseType is { } bt && !bt.IsAssignableFrom(t))
                    {
                        continue;
                    }

                    if (actionType.IsAssignableFrom(t) &&
                        ActionTypeAttribute.ValueOf(t) is string actionId)
                    {
                        if (types.TryGetValue(actionId, out Type? existing))
                        {
                            if (existing != t)
                            {
                                throw new DuplicateActionTypeIdentifierException(
                                    "Multiple action types are associated with the same type ID.",
                                    actionId,
                                    ImmutableHashSet.Create(existing, t)
                                );
                            }

                            continue;
                        }

                        types[actionId] = t;
                    }
                }
            }

            return types;
        }
    }
}
