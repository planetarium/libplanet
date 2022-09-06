namespace Libplanet.PoS.Model
{
    public enum BondingStatus : byte
    {
        /// <summary>
        /// For delegation : Current delegation is bonded.
        /// For validator : Current validator has enough consensus power to vote.
        /// </summary>
        Bonded = 0,

        /// <summary>
        /// .
        /// </summary>
        Unbonding = 1,

        /// <summary>
        /// .
        /// </summary>
        Unbonded = 2,
    }
}
