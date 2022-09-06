using System;
using System.Numerics;
using Bencodex.Types;
using Libplanet.Assets;
using Libplanet.Crypto;

namespace Libplanet.PoS.Model
{
    public class Validator : IEquatable<Validator>
    {
        private FungibleAssetValue _delegatorShares;

        public Validator(
            Address operatorAddress,
            PublicKey operatorPublicKey)
        {
            Address = DeriveAddress(operatorAddress);
            OperatorAddress = operatorAddress;
            OperatorPublicKey = operatorPublicKey;
            Jailed = false;
            Status = BondingStatus.Unbonded;
            UnbondingCompletionBlockHeight = -1;
            DelegatorShares = Asset.Share * 0;
        }

        public Validator(IValue serialized)
        {
            var dict = (Bencodex.Types.Dictionary)serialized;
            Address = dict["addr"].ToAddress();
            OperatorAddress = dict["op_addr"].ToAddress();
            OperatorPublicKey = dict["op_pub"].ToPublicKey();
            Jailed = dict["jailed"].ToBoolean();
            Status = dict["status"].ToEnum<BondingStatus>();
            UnbondingCompletionBlockHeight = dict["unbonding"].ToLong();
            DelegatorShares = dict["shares"].ToFungibleAssetValue();
        }

        // TODO: Better structure
        // This hard coding will cause some problems when it's modified
        // May be it would be better to be serialized
        public static FungibleAssetValue MinSelfDelegation => Asset.ConsensusToken * 1;

        public static BigInteger CommissionNumer => 1;

        public static BigInteger CommissionDenom => 10;

        public static double CommissionMaxRate => 0.2;

        public static double CommissionMaxChangeRate => 0.01;

        public Address Address { get; set; }

        public Address OperatorAddress { get; set; }

        public PublicKey OperatorPublicKey { get; set; }

        public bool Jailed { get; set; }

        public BondingStatus Status { get; set; }

        public long UnbondingCompletionBlockHeight { get; set; }

        public FungibleAssetValue DelegatorShares
        {
            get => _delegatorShares;
            set
            {
                if (!value.Currency.Equals(Asset.Share))
                {
                    throw new InvalidCurrencyException(Asset.Share, value.Currency);
                }

                _delegatorShares = value;
            }
        }

        public static bool operator ==(Validator obj, Validator other)
        {
            return obj.Equals(other);
        }

        public static bool operator !=(Validator obj, Validator other)
        {
            return !(obj == other);
        }

        public static Address DeriveAddress(Address operatorAddress)
        {
            return operatorAddress.Derive("ValidatorAddress");
        }

        public bool IsMatured(long blockHeight)
            => UnbondingCompletionBlockHeight > 0
            && Status != BondingStatus.Bonded
            && blockHeight >= UnbondingCompletionBlockHeight;

        public IValue Serialize()
        {
            return Dictionary.Empty
                .Add("addr", Address.Serialize())
                .Add("op_addr", OperatorAddress.Serialize())
                .Add("op_pub", OperatorPublicKey.Serialize())
                .Add("jailed", Jailed.Serialize())
                .Add("status", Status.Serialize())
                .Add("unbonding", UnbondingCompletionBlockHeight.Serialize())
                .Add("shares", DelegatorShares.Serialize());
        }

        public override bool Equals(object? obj)
        {
            return Equals(obj as Validator);
        }

        public bool Equals(Validator? other)
        {
            return !(other is null) &&
                   Address.Equals(other.Address) &&
                   OperatorAddress.Equals(other.OperatorAddress) &&
                   OperatorPublicKey.Equals(other.OperatorPublicKey) &&
                   Jailed == other.Jailed &&
                   Status == other.Status &&
                   UnbondingCompletionBlockHeight == other.UnbondingCompletionBlockHeight &&
                   DelegatorShares.Equals(other.DelegatorShares);
        }

        public override int GetHashCode()
        {
            return ByteUtil.CalculateHashCode(Address.ToByteArray());
        }
    }
}
