#nullable enable
using System.Collections.Generic;
using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Assets;
using Libplanet.Blocks;

namespace Libplanet.Blockchain
{
    internal class NullChainStates<T> : IBlockChainStates<T>
        where T : IAction, new()
    {
        public static readonly NullChainStates<T> Instance = new NullChainStates<T>();

        private NullChainStates()
        {
        }

        public IReadOnlyList<IValue?> GetStates(
            IReadOnlyList<Address> addresses,
            BlockHash offset,
            StateCompleter<T> stateCompleter
        ) =>
            new IValue?[addresses.Count];

        public FungibleAssetValue GetBalance(
            Address address,
            Currency currency,
            BlockHash offset,
            FungibleAssetStateCompleter<T> stateCompleter
        ) =>
            currency * 0;
    }
}
