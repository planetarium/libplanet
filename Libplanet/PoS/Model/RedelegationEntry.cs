using System;
using Bencodex.Types;
using Libplanet.Assets;

namespace Libplanet.PoS
{
    public class RedelegationEntry : IEquatable<RedelegationEntry>
    {
        private FungibleAssetValue _redelegatingShare;
        private FungibleAssetValue _unbondingConsensusToken;
        private FungibleAssetValue _issuedShare;

        public RedelegationEntry(
            Address redelegationAddress,
            FungibleAssetValue redelegatingShare,
            FungibleAssetValue unbondingConsensusToken,
            FungibleAssetValue issuedShare,
            long index,
            long blockHeight)
        {
            Address = DeriveAddress(redelegationAddress, index);
            RedelegationAddress = redelegationAddress;
            RedelegatingShare = redelegatingShare;
            UnbondingConsensusToken = unbondingConsensusToken;
            IssuedShare = issuedShare;
            Index = index;
            CompletionBlockHeight = blockHeight + UnbondingSet.Period;
        }

        public RedelegationEntry(IValue serialized)
        {
            List serializedList = (List)serialized;
            Address = serializedList[0].ToAddress();
            RedelegationAddress = serializedList[1].ToAddress();
            RedelegatingShare = serializedList[2].ToFungibleAssetValue();
            UnbondingConsensusToken = serializedList[3].ToFungibleAssetValue();
            IssuedShare = serializedList[4].ToFungibleAssetValue();
            Index = serializedList[5].ToLong();
            CompletionBlockHeight = serializedList[6].ToLong();
        }

        public Address Address { get; set; }

        public Address RedelegationAddress { get; set; }

        public FungibleAssetValue RedelegatingShare
        {
            get => _redelegatingShare;
            set
            {
                if (!value.Currency.Equals(Asset.Share))
                {
                    throw new InvalidCurrencyException(Asset.Share, value.Currency);
                }

                _redelegatingShare = value;
            }
        }

        public FungibleAssetValue UnbondingConsensusToken
        {
            get => _unbondingConsensusToken;
            set
            {
                if (!value.Currency.Equals(Asset.ConsensusToken))
                {
                    throw new InvalidCurrencyException(Asset.ConsensusToken, value.Currency);
                }

                _unbondingConsensusToken = value;
            }
        }

        public FungibleAssetValue IssuedShare
        {
            get => _issuedShare;
            set
            {
                if (!value.Currency.Equals(Asset.Share))
                {
                    throw new InvalidCurrencyException(Asset.Share, value.Currency);
                }

                _issuedShare = value;
            }
        }

        public long Index { get; set; }

        public long CompletionBlockHeight { get; set; }

        public static bool operator ==(RedelegationEntry obj, RedelegationEntry other)
        {
            return obj.Equals(other);
        }

        public static bool operator !=(RedelegationEntry obj, RedelegationEntry other)
        {
            return !(obj == other);
        }

        public static Address DeriveAddress(Address redelegationAddress, long index)
        {
            return redelegationAddress.Derive($"RedelegationEntry{index}");
        }

        public bool IsMatured(long blockHeight) => blockHeight >= CompletionBlockHeight;

        public IValue Serialize()
        {
            return List.Empty
                .Add(Address.Serialize())
                .Add(RedelegationAddress.Serialize())
                .Add(RedelegatingShare.Serialize())
                .Add(UnbondingConsensusToken.Serialize())
                .Add(IssuedShare.Serialize())
                .Add(Index.Serialize())
                .Add(CompletionBlockHeight.Serialize());
        }

        public override bool Equals(object? obj)
        {
            return Equals(obj as RedelegationEntry);
        }

        public bool Equals(RedelegationEntry? other)
        {
            return !(other is null) &&
                   Address.Equals(other.Address) &&
                   RedelegationAddress.Equals(other.RedelegationAddress) &&
                   RedelegatingShare.Equals(other.RedelegatingShare) &&
                   UnbondingConsensusToken.Equals(other.UnbondingConsensusToken) &&
                   IssuedShare.Equals(other.IssuedShare) &&
                   Index == other.Index &&
                   CompletionBlockHeight == other.CompletionBlockHeight;
        }

        public override int GetHashCode()
        {
            return ByteUtil.CalculateHashCode(Address.ToByteArray());
        }
    }
}
