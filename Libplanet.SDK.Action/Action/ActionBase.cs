using System.Reflection;
using System.Security;
using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Action.State;

[assembly: SecurityTransparent]

namespace Libplanet.SDK.Action
{
    public abstract partial class ActionBase : IAction
    {
        public IValue PlainValue => Dictionary.Empty
            .Add("type_id", _name ?? throw new NullReferenceException())
            .Add("exec", _exec ?? throw new NullReferenceException())
            .Add("args", _args ?? throw new NullReferenceException());

        public void LoadPlainValue(IValue plainValue)
        {
            Dictionary dict = (Dictionary)plainValue;
            _name = (Text)dict["type_id"];
            _exec = (Text)dict["exec"];
            _args = dict["args"];
        }

        public IWorld Execute(IActionContext context)
        {
            if (!Loaded)
            {
                throw new InvalidOperationException("Action is not loaded.");
            }

            _actionContext = context;
            _world = context.PreviousState;

            MethodInfo method = ExecutableMethods.FirstOrDefault(m => m.Name == _exec) ??
                throw new InvalidOperationException($"Method {_exec} is not found.");
            ParameterInfo[] paramInfos = method.GetParameters();
            object[] args = GetArgs(paramInfos, _args);
            method.Invoke(this, args);

            return World;
        }

        private static object[] GetArgs(ParameterInfo[] paramInfos, IValue? args)
        {
            if (args is List list)
            {
                if (paramInfos.Length != list.Count)
                {
                    throw new ArgumentException(
                        $"Given {nameof(args)} must be of " +
                        $"length {paramInfos.Length}: {list.Count}");
                }

                return list.ToArray();
            }
            else
            {
                throw new ArgumentException(
                    $"Given {nameof(args)} must be of type {nameof(List)}: {args.GetType()}",
                    nameof(args));
            }
        }
    }
}