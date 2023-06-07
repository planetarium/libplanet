using Bencodex.Types;

namespace Libplanet.State
{
    public static class AccountExtension
    {
        public static IValue Serialize(this IAccount account)
        {
             var list = Bencodex.Types.List.Empty
                .Add(account.Id.Bencoded)
                .Add(account.StateRootHash.ByteArray);
             return list;
        }
    }
}
