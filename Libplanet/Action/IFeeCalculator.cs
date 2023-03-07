using Libplanet.Assets;

namespace Libplanet.Action
{
    public interface IFeeCalculator
    {
        FungibleAssetValue CalculateFee(IAction action);
    }
}
