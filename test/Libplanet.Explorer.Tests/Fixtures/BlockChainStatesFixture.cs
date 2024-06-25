using System.Collections.Generic;
using System.Numerics;
using System.Security.Cryptography;
using Bencodex.Types;
using Libplanet.Action.State;
using Libplanet.Common;
using Libplanet.Crypto;
using Libplanet.Mocks;
using Libplanet.Types.Assets;
using Libplanet.Types.Blocks;
using Libplanet.Types.Consensus;

namespace Libplanet.Explorer.Tests.Fixtures
{
    public static class BlockChainStatesFixture
    {
        /// <summary>
        /// The <see cref="Crypto.Address"/> to have its state and balance set.
        /// </summary>
        public static readonly Address Address =
            new Address("0x5003712B63baAB98094aD678EA2B24BcE445D076");

        /// <summary>
        /// The <see cref="Types.Assets.Currency"/> of the balance
        /// that <see cref="Address"/> is to have.
        /// </summary>
#pragma warning disable CS0618  // Obsolete.
        public static readonly Currency Currency =
            Currency.Legacy("ABC", 2, null);
#pragma warning restore CS0618

        /// <summary>
        /// The amount of <see cref="Currency"/> for <see cref="Address"/> to have.
        /// </summary>
        public static readonly FungibleAssetValue Amount =
            new FungibleAssetValue(Currency, 123);

        /// <summary>
        /// The amount of <see cref="Currency"/> for a random <see cref="Crypto.Address"/> to have.
        /// </summary>
        public static readonly FungibleAssetValue AdditionalSupply =
            new FungibleAssetValue(Currency, 10000);

        /// <summary>
        /// The <see cref="IValue"> to be set at <see cref="Address"/> under
        /// an <see cref="IAccount"/> at <see cref="ReservedAddresses.LegacyAccount"/>
        /// </summary>
        public static readonly IValue Value = new Text("Foo");

        public static readonly Validator Validator =
            new Validator(
                PublicKey.FromHex(
                    "032038e153d344773986c039ba5dbff12ae70cfdf6ea8beb7c5ea9b361a72a9233"),
                new BigInteger(1));

        public static readonly ValidatorSet ValidatorSet =
            new ValidatorSet(new List<Validator>() { Validator });

        public static (IBlockChainStates, BlockHash, HashDigest<SHA256>)
            CreateMockBlockChainStates(int version)
        {
            MockBlockChainStates mockBlockChainStates = new MockBlockChainStates();
            MockWorldState mock = version >= BlockMetadata.WorldStateProtocolVersion
                ? MockWorldState.CreateModern(mockBlockChainStates.StateStore, version)
                : MockWorldState.CreateLegacy(mockBlockChainStates.StateStore);
            mock = mock
                .SetBalance(Address, Amount)
                .SetBalance(new PrivateKey().Address, AdditionalSupply)
                .SetValidatorSet(ValidatorSet);
            IAccount account = new Account(mock.GetAccountState(ReservedAddresses.LegacyAccount));
            account = account.SetState(Address, Value);
            mock = mock.SetAccount(ReservedAddresses.LegacyAccount, account);

            var blockHash = new BlockHash(TestUtils.GetRandomBytes(BlockHash.Size));
            var stateRootHash = mock.Trie.Hash;
            mockBlockChainStates.AttachBlockHashToStateRootHash(blockHash, stateRootHash);
            return (mockBlockChainStates, blockHash, stateRootHash);
        }
    }
}
