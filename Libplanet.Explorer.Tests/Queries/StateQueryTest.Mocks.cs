using System.Collections.Generic;
using System.Numerics;
using System.Security.Cryptography;
using Bencodex.Types;
using Libplanet.Action.State;
using Libplanet.Common;
using Libplanet.Crypto;
using Libplanet.Store;
using Libplanet.Store.Trie;
using Libplanet.Types.Assets;
using Libplanet.Types.Blocks;
using Libplanet.Types.Consensus;
using Libplanet.Mocks;
using Xunit;

namespace Libplanet.Explorer.Tests.Queries;

public partial class StateQueryTest
{
    public class MockChainStates : IBlockChainStates
    {
        private static readonly Address _address;

        private static readonly Currency _currency;

        private static readonly IWorldState _empty;

        private static readonly IWorldState _nonEmpty;

        static MockChainStates()
        {
            IStateStore stateStore = new TrieStateStore(new MemoryKeyValueStore());
            _address = new Address("0x5003712B63baAB98094aD678EA2B24BcE445D076");
            _currency = Currency.Uncapped("ABC", 2, null);

            // Setup empty
            _empty = MockWorldState.CreateLegacy(stateStore);

            // Setup non-empty
            ValidatorSet validatorSet = new ValidatorSet(new List<Validator>()
            {
                new Validator(
                    PublicKey.FromHex(
                        "032038e153d344773986c039ba5dbff12ae70cfdf6ea8beb7c5ea9b361a72a9233"),
                    new BigInteger(1))
            });
            MockWorldState mock = MockWorldState.CreateLegacy(stateStore);
            mock = mock
                .SetBalance(_address, FungibleAssetValue.FromRawValue(_currency, 123))
                .SetTotalSupply(FungibleAssetValue.FromRawValue(_currency, 10_000))
                .SetValidatorSet(validatorSet);
            IAccount account = new Account(mock.GetAccountState(ReservedAddresses.LegacyAccount));
            account = account.SetState(_address, Null.Value);
            mock = mock.SetAccount(ReservedAddresses.LegacyAccount, account);
            _nonEmpty = mock;
        }

        public static readonly BlockHash BlockHash = new BlockHash(
            ByteUtil.ParseHex("01ba4719c80b6fe911b091a7c05124b64eeece964e09c058ef8f9805daca546b"));

        public static readonly HashDigest<SHA256> StateRootHash = new HashDigest<SHA256>(
            ByteUtil.ParseHex("c33b27773104f75ac9df5b0533854108bd498fab31e5236b6f1e1f6404d5ef64"));

        public static HashDigest<SHA256>? ToStateRootHash(BlockHash? blockHash) =>
            BlockHash.Equals(blockHash)
                ? StateRootHash
                : null;

        public IWorldState GetWorldState(BlockHash? blockHash) =>
            blockHash is { } bh && bh.Equals(BlockHash) ? _nonEmpty : _empty;

        public IWorldState GetWorldState(HashDigest<SHA256>? stateRootHash) =>
            stateRootHash is { } srh && srh.Equals(StateRootHash) ? _nonEmpty : _empty;
    }
}
