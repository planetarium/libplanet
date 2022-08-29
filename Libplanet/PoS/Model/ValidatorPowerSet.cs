using System.Collections.Generic;
using System.Linq;
using Bencodex.Types;

namespace Libplanet.PoS
{
    public class ValidatorPowerSet
    {
        public ValidatorPowerSet()
        {
            PreviousBondedSet = new SortedSet<ValidatorPower>(new ValidatorPowerComparer());
            BondedSet = new SortedSet<ValidatorPower>(new ValidatorPowerComparer());
            UnbondedSet = new SortedSet<ValidatorPower>(new ValidatorPowerComparer());
        }

        public ValidatorPowerSet(IValue serialized)
        {
            List serializedList = (List)serialized;
            IEnumerable<ValidatorPower> previousBondedEnum
                = ((List)serializedList[0]).Select(x => new ValidatorPower(x));
            IEnumerable<ValidatorPower> bondedEnum
                = ((List)serializedList[1]).Select(x => new ValidatorPower(x)).ToList();
            IEnumerable<ValidatorPower> unbondedEnum
                = ((List)serializedList[2]).Select(x => new ValidatorPower(x)).ToList();

            PreviousBondedSet = new SortedSet<ValidatorPower>(
                previousBondedEnum, new ValidatorPowerComparer());
            BondedSet = new SortedSet<ValidatorPower>(
                bondedEnum, new ValidatorPowerComparer());
            UnbondedSet = new SortedSet<ValidatorPower>(
                unbondedEnum, new ValidatorPowerComparer());
        }

        public ValidatorPowerSet(ValidatorPowerSet validatorPowerSet)
        {
            PreviousBondedSet = validatorPowerSet.PreviousBondedSet;
            BondedSet = validatorPowerSet.BondedSet;
            UnbondedSet = validatorPowerSet.UnbondedSet;
        }

        public static int MaxBondedSetSize => 100;

        public SortedSet<ValidatorPower> PreviousBondedSet { get; set; }

        public SortedSet<ValidatorPower> BondedSet { get; set; }

        public SortedSet<ValidatorPower> UnbondedSet { get; set; }

        public Address Address => ReservedAddress.ValidatorPowerSet;

        public IValue Serialize()
        {
            return List.Empty
                .Add(new List(PreviousBondedSet.Select(x => x.Serialize())))
                .Add(new List(BondedSet.Select(x => x.Serialize())))
                .Add(new List(UnbondedSet.Select(x => x.Serialize())));
        }
    }
}
