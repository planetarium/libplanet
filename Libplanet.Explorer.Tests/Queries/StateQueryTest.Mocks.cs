using System.Collections.Generic;
using System.Numerics;
using Bencodex.Types;
using Libplanet.Action.State;
using Libplanet.Common;
using Libplanet.Crypto;
using Libplanet.Types.Assets;
using Libplanet.Types.Blocks;
using Libplanet.Types.Consensus;
using Libplanet.Mocks;
using System.Security.Cryptography;

namespace Libplanet.Explorer.Tests.Queries;

public partial class StateQueryTest
{
    private static readonly Address _address =
        new Address("0x5003712B63baAB98094aD678EA2B24BcE445D076");

    private static readonly Currency _currency =
        Currency.Uncapped("ABC", 2, null);

    private static readonly IValue _value = Null.Value;

    private static readonly Validator _validator =
        new Validator(
            PublicKey.FromHex(
                "032038e153d344773986c039ba5dbff12ae70cfdf6ea8beb7c5ea9b361a72a9233"),
            new BigInteger(1));

    private static readonly ValidatorSet _validatorSet =
        new ValidatorSet(new List<Validator>() { _validator });

    public static (IBlockChainStates, BlockHash, HashDigest<SHA256>)
        CreateMockBlockChainStates(int version)
    {
        MockBlockChainStates mockBlockChainStates = new MockBlockChainStates();
        MockWorldState mock = version >= BlockMetadata.WorldStateProtocolVersion
            ? MockWorldState.CreateModern(mockBlockChainStates.StateStore, version)
            : MockWorldState.CreateLegacy(mockBlockChainStates.StateStore);
        mock = mock
            .SetBalance(_address, FungibleAssetValue.FromRawValue(_currency, 123))
            .SetBalance(
                new PrivateKey().Address,
                FungibleAssetValue.FromRawValue(_currency, 10_000))
            .SetValidatorSet(_validatorSet);
        IAccount account = new Account(mock.GetAccountState(ReservedAddresses.LegacyAccount));
        account = account.SetState(_address, Null.Value);
        mock = mock.SetAccount(ReservedAddresses.LegacyAccount, account);

        var blockHash = new BlockHash(TestUtils.GetRandomBytes(BlockHash.Size));
        var stateRootHash = mock.Trie.Hash;
        mockBlockChainStates.AttachBlockHashToStateRootHash(blockHash, stateRootHash);
        return (mockBlockChainStates, blockHash, stateRootHash);
    }
}
