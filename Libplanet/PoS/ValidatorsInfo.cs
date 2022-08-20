using System.Collections.Generic;
using System.Linq;
using Bencodex.Types;

namespace Libplanet.PoS
{
    public class ValidatorsInfo
    {
        public ValidatorsInfo()
        {
            PreviousValidatorAddressSet = new List<Address>();
            ValidatorAddressSet = new List<Address>();
            LatentAddressSet = new List<Address>();
        }

        public ValidatorsInfo(IValue serialized)
        {
            List serializedList = (List)serialized;
            PreviousValidatorAddressSet
                = ((List)serializedList[0]).Select(x => x.ToAddress()).ToList();
            ValidatorAddressSet
                = ((List)serializedList[1]).Select(x => x.ToAddress()).ToList();
            LatentAddressSet
                = ((List)serializedList[2]).Select(x => x.ToAddress()).ToList();
        }

        public ValidatorsInfo(ValidatorsInfo validatorsInfo)
        {
            PreviousValidatorAddressSet = validatorsInfo.PreviousValidatorAddressSet;
            ValidatorAddressSet = validatorsInfo.ValidatorAddressSet;
            LatentAddressSet = validatorsInfo.LatentAddressSet;
        }

        public List<Address> PreviousValidatorAddressSet { get; set; }

        public List<Address> ValidatorAddressSet { get; set; }

        public List<Address> LatentAddressSet { get; set; }

        public int MaxValidatorSetSize => 100;

        public IValue Serialize()
        {
            return List.Empty
                .Add(new List(PreviousValidatorAddressSet.Select(x => x.Serialize())))
                .Add(new List(ValidatorAddressSet.Select(x => x.Serialize())))
                .Add(new List(LatentAddressSet.Select(x => x.Serialize())));
        }
    }
}
