using System;
using System.Collections.Generic;
using System.Numerics;

namespace Libplanet.PoS
{
    internal class ValidatorPowerComparer : IComparer<ValidatorPower>
    {
        public int Compare(ValidatorPower? x, ValidatorPower? y)
        {
            if (x == null || y == null)
            {
                throw new ArgumentException();
            }

            int result
                = x.ConsensusToken.Equals(y.ConsensusToken)
                ? (new BigInteger(x.ValidatorAddress.ToByteArray())
                - new BigInteger(y.ValidatorAddress.ToByteArray())).Sign
                : (x.ConsensusToken - y.ConsensusToken).Sign;

            return -result;
        }
    }
}
