using Libplanet.Crypto;

namespace Libplanet.Explorer.GraphTypes
{
    public class VoteCount
    {
        public VoteCount(
            PublicKey validatorPublicKey,
            int countNull,
            int countPreCommit,
            int countTotal
        )
        {
            ValidatorPublicKey = validatorPublicKey;
            CountNull = countNull;
            CountPreCommit = countPreCommit;
            CountTotal = countTotal;
        }

        public PublicKey ValidatorPublicKey { get; }

        public int CountNull { get; }

        public int CountPreCommit { get; }

        public int CountTotal { get; }
    }
}
