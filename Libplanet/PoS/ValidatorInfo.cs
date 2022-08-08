using System;
using System.Numerics;
using Bencodex.Types;
using Libplanet.Assets;

namespace Libplanet.PoS
{
    [Serializable]
    public class ValidatorInfo
    {
        private FungibleAssetValue _delegatorShares;

        public ValidatorInfo(Address operatorAddress)
        {
            Address = DeriveAddress(operatorAddress);
            OperatorAddress = operatorAddress;
            Jailed = false;
            Status = BondingStatus.Unbonded;
            DelegatorShares = Asset.Share * 0;
        }

        public ValidatorInfo(IValue serialized)
        {
            List serializedList = (List)serialized;
            Address = serializedList[0].ToAddress();
            OperatorAddress = serializedList[1].ToAddress();
            Jailed = serializedList[2].ToBoolean();
            Status = serializedList[3].ToEnum<BondingStatus>();
            DelegatorShares = serializedList[4].ToFungibleAssetValue();
        }

        public ValidatorInfo(ValidatorInfo validatorInfo)
        {
            Address = validatorInfo.Address;
            OperatorAddress = validatorInfo.OperatorAddress;
            Jailed = validatorInfo.Jailed;
            Status = validatorInfo.Status;
            DelegatorShares = validatorInfo.DelegatorShares;
        }

        public Address Address { get; set; }

        public Address OperatorAddress { get; set; }

        public bool Jailed { get; set; }

        public BondingStatus Status { get; set; }

        public FungibleAssetValue DelegatorShares
        {
            get => _delegatorShares;
            set
            {
                if (!value.Currency.Equals(Asset.Share))
                {
                    throw new ArgumentException();
                }

                _delegatorShares = value;
            }
        }

        // TODO: Better structure
        // This hard coding will cause some problems when it's modified
        // May be it would be better to be serialized
        public BigInteger CommissionRateNumerator => 1;

        public BigInteger CommissionRateDenominator => 10;

        public BigInteger CommissionMaxRateNumerator => 2;

        public BigInteger CommissionMaxRateDenominator => 10;

        public BigInteger CommissionMaxChangeRateNumerator => 1;

        public BigInteger CommissionMaxRateChangeDenominator => 100;

        public FungibleAssetValue MinSelfDelegation => Asset.ConsensusToken * 1;

        public static Address DeriveAddress(Address operatorAddress)
        {
            return operatorAddress.Derive("ValidatorAddress");
        }

        public IValue Serialize()
        {
            return List.Empty
                .Add(Address.Serialize())
                .Add(OperatorAddress.Serialize())
                .Add(Jailed.Serialize())
                .Add(Status.Serialize())
                .Add(DelegatorShares.Serialize());
        }
    }
}
