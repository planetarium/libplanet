using System.Reflection;
using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Action.State;
using Libplanet.Crypto;

namespace Libplanet.SDK.Action.ActionBase
{
    public partial class ActionBase
    {
        private void LoadContext(IActionContext context, IWorld world)
        {
            _actionContext = context;
            _world = world;
        }

        private IWorld RegisterStorage(Address storageAddress, IWorld world)
        {
            string name = GetType().GetCustomAttribute<ActionAttribute>()?.Name
                ?? throw new Exception("Name is not set.");

            Dictionary metadata = Dictionary.Empty
                .Add("name", name)
                .Add("version", 1);

            return world.SetAccount(
                storageAddress,
                world
                    .GetAccount(storageAddress)
                    .SetState(MetadataAddress, metadata)
            );
        }
    }
}

