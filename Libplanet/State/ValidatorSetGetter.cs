using Libplanet.Consensus;

namespace Libplanet.State
{
    /// <summary>
    /// An delegate to provide a view of the <see cref="ValidatorSet"/>.
    /// </summary>
    /// <returns>The instance of <see cref="ValidatorSet"/>.
    /// </returns>
    public delegate ValidatorSet ValidatorSetGetter();
}
