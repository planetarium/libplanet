using System.Collections.Generic;
using Libplanet.PoS;
using Xunit;

namespace Libplanet.Tests.PoS
{
    public class BondedValidatorSetTest : PoSTest
    {
        private readonly BondedValidatorSet _bondedValidatorSet;

        public BondedValidatorSetTest()
        {
            SortedSet<ValidatorPower> bondedSet = new SortedSet<ValidatorPower>();
            _bondedValidatorSet = new BondedValidatorSet(bondedSet);
        }

        [Fact]
        public void MarshallingTest()
        {
            BondedValidatorSet newBondedValidatorSet
                = new BondedValidatorSet(_bondedValidatorSet.Serialize());
            Assert.Equal(_bondedValidatorSet, newBondedValidatorSet);
        }
    }
}
