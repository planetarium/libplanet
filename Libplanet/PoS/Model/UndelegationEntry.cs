using Bencodex.Types;
using Libplanet.Assets;

namespace Libplanet.PoS
{
    public class UndelegationEntry
    {
        private FungibleAssetValue _unbondingConsensusToken;

        public UndelegationEntry(
            Address undelegationAddress,
            FungibleAssetValue unbondingConsensusToken,
            long index,
            long blockHeight)
        {
            Address = DeriveAddress(undelegationAddress, index);
            UndelegationAddress = undelegationAddress;
            UnbondingConsensusToken = unbondingConsensusToken;
            Index = index;
            CompletionBlockHeight = blockHeight + UnbondingSet.Period;
        }

        public UndelegationEntry(IValue serialized)
        {
            List serializedList = (List)serialized;
            Address = serializedList[0].ToAddress();
            UndelegationAddress = serializedList[1].ToAddress();
            UnbondingConsensusToken = serializedList[2].ToFungibleAssetValue();
            Index = serializedList[3].ToLong();
            CompletionBlockHeight = serializedList[4].ToLong();
        }

        public Address Address { get; set; }

        public Address UndelegationAddress { get; set; }

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

        public long Index { get; set; }

        public long CompletionBlockHeight { get; set; }

        public static Address DeriveAddress(Address undelegationAddress, long index)
        {
            return undelegationAddress.Derive($"UndelegationEntry{index}");
        }

        public bool IsMatured(long blockHeight) => blockHeight >= CompletionBlockHeight;

        public IValue Serialize()
        {
            return List.Empty
                .Add(Address.Serialize())
                .Add(UndelegationAddress.Serialize())
                .Add(UnbondingConsensusToken.Serialize())
                .Add(Index.Serialize())
                .Add(CompletionBlockHeight.Serialize());
        }
    }
}
