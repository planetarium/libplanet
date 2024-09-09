using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Crypto;
using Libplanet.SDK.Action.Attributes;
using Libplanet.SDK.Action.Tests.SimpleRPG.Models;

namespace Libplanet.SDK.Action.Tests.SimpleRPG.Actions
{
    [ActionType("Farm")]
    public class FarmAction : ActionBase
    {
        public const int ExpPerFarm = 10;
        public const int GoldPerFarm = 20;

        // This has no IAccount associated with its domain.
        public override Address StorageAddress => default;

        [Executable]
        public void Farm()
        {
            Avatar avatar = Call<AvatarAction, Avatar>(
                nameof(AvatarAction.GetAvatar),
                new object?[] { Signer });
            avatar.Info.AddExp(ExpPerFarm);
            avatar.Inventory.AddGold(GoldPerFarm);
            Call<AvatarAction>(
                nameof(AvatarAction.SetAvatar),
                new object?[] { Signer, avatar });
        }
    }
}
