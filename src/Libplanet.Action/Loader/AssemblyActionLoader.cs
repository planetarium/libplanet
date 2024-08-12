using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using Bencodex.Types;
using Libplanet.Action.Sys;

namespace Libplanet.Action.Loader
{
    public class AssemblyActionLoader : IActionLoader
    {
        private readonly Dictionary<IValue, Type> _types;

        public AssemblyActionLoader(Assembly assembly)
        {
            var query = from type in assembly.GetTypes()
                        where typeof(IAction).IsAssignableFrom(type) == true
                        let attribute = type.GetCustomAttribute<ActionTypeAttribute>()
                        where attribute is not null
                        select (attribute.TypeIdentifier, type);

            _types = query.ToDictionary((item) => item.TypeIdentifier, item => item.type);
        }

        public IReadOnlyDictionary<IValue, Type> Types => _types;

        public IAction LoadAction(long index, IValue value)
        {
            try
            {
                if (Registry.IsSystemAction(value))
                {
                    return Registry.Deserialize(value);
                }

                IAction action;
                if (value is Dictionary pv &&
                    pv.TryGetValue((Text)"type_id", out var rawTypeId) &&
                    rawTypeId is IValue typeId &&
                    Types.TryGetValue(typeId, out var actionType))
                {
                    action = (IAction)Activator.CreateInstance(actionType)!;
                    action.LoadPlainValue(pv);
                }
                else
                {
                    throw new InvalidOperationException(
                        $"Failed to instantiate an action from {value} for index {index}");
                }

                return action;
            }
            catch (Exception e)
            {
                throw new InvalidActionException(
                    $"Failed to instantiate an action from {value} for index {index}",
                    value,
                    e);
            }
        }
    }
}
