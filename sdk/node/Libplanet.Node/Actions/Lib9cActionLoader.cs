using System.Reflection;
using System.Security.Cryptography;
using Bencodex;
using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Action.Loader;
using Libplanet.Common;
using Libplanet.Crypto;
using Libplanet.Types.Tx;
using NetMQ.Sockets;
using Boolean = Bencodex.Types.Boolean;

namespace Libplanet.Node.Actions;

internal sealed class Lib9cActionLoader : IActionLoader
{
    private static readonly Codec codec = new Codec();
    private readonly object _actionLoader;
    private readonly Type _interfaceType;
    private readonly Type _ivalueType;
    private readonly Type _codecType;
    private readonly MethodInfo _loadActionMethod;
    private readonly MethodInfo _decodeMethod;

    public Lib9cActionLoader(Type actionLoaderType)
    {
        if (actionLoaderType.Name != "NCActionLoader")
        {
            throw new ArgumentException(
                $"The {nameof(Lib9cActionLoader)} class can only be used with the NCActionLoader type."
            );
        }

        _actionLoader = Activator.CreateInstance(actionLoaderType)
            ?? throw new InvalidOperationException(
                $"Failed to instantiate an NCActionLoader instance.");
        _interfaceType = _actionLoader.GetType().GetInterface("IActionLoader")
            ?? throw new InvalidOperationException(
                $"The NCActionLoader instance does not implement the IActionLoader interface.");
        _loadActionMethod = _interfaceType.GetMethod("LoadAction")
            ?? throw new InvalidOperationException(
                $"The NCActionLoader instance does not have a LoadAction method.");
        _ivalueType = _loadActionMethod.GetParameters()[1].ParameterType;
        _codecType = _ivalueType.Assembly.GetTypes().First(item => item.Name == "Codec")
            ?? throw new InvalidOperationException(
                $"The Codec type is not found in the {nameof(_ivalueType)} assembly.");
        _decodeMethod = _codecType.GetMethod("Decode")
            ?? throw new InvalidOperationException(
                $"The Codec type does not have a Decode method.");
    }

    public IAction LoadAction(long index, IValue value)
    {
        throw new NotImplementedException();

    }
}
