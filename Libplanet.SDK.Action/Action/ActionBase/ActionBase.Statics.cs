using System.Reflection;
using Bencodex.Types;
using Libplanet.Action.State;
using Libplanet.Crypto;

namespace Libplanet.SDK.Action.ActionBase
{
    public partial class ActionBase
    {
        private static bool IsCallableMethod(MethodInfo method) =>
            method.IsPublic;

        private static bool ValidateStorage(Address storageAddress, IWorld world) =>
            world
                .GetAccount(storageAddress)
                .GetState(MetadataAddress) is Dictionary;
    }
}
