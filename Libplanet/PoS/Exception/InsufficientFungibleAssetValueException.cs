using System;
using Libplanet.Assets;

namespace Libplanet.PoS
{
    public class InsufficientFungibleAssetValueException : Exception
    {
        public InsufficientFungibleAssetValueException(
            FungibleAssetValue required, FungibleAssetValue actual, string message)
            : base($"{message}, required : {required} > actual : {actual}")
        {
        }
    }
}
