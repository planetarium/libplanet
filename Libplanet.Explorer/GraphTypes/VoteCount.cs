using Libplanet.Crypto;

namespace Libplanet.Explorer.GraphTypes
{
    public class VoteCount
    {
        public VoteCount(
            PublicKey validator,
            int countNull,
            int countPreCommit,
            int countTotal
        )
        {
            Validator = validator;
            CountNull = countNull;
            CountPreCommit = countPreCommit;
            CountTotal = countTotal;
        }

        public PublicKey Validator { get; }

        public int CountNull { get; }

        public int CountPreCommit { get; }

        public int CountTotal { get; }
    }
}
