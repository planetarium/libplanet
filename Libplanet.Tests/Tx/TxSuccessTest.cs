using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Security.Cryptography;
using Libplanet.Assets;
using Libplanet.Blocks;
using Libplanet.Tx;
using Xunit;

namespace Libplanet.Tests.Tx
{
    public class TxSuccessTest
    {
        private static readonly Currency[] Currencies = new[] { "FOO", "BAR", "BAZ", "QUX" }
            .Select(ticker => new Currency(ticker, 0, minters: null))
            .ToArray();

        private readonly BlockHash _blockHash;
        private readonly TxId _txid;
        private readonly HashDigest<SHA256> _stateRootHash;
        private readonly ImmutableHashSet<Address> _stateUpdatedAddresses;
        private readonly ImmutableDictionary<Address, IImmutableSet<Currency>>
            _updatedFungibleAssets;

        private readonly TxSuccess _fx;

        public TxSuccessTest()
        {
            var random = new Random();
            _blockHash = random.NextBlockHash(HashDigest<SHA256>.Size);
            _txid = random.NextTxId();
            _stateRootHash = random.NextHashDigest<SHA256>();
            _stateUpdatedAddresses = Enumerable.Repeat(random, 5)
                .Select(RandomExtensions.NextAddress)
                .ToImmutableHashSet();
            _updatedFungibleAssets = Enumerable.Repeat(0, 5)
                .Select(_ =>
                    new KeyValuePair<Address, IImmutableSet<Currency>>(
                        random.NextAddress(),
                        Enumerable.Repeat(0, random.Next(Currencies.Length) + 1)
                            .Select(__ => Currencies[random.Next(Currencies.Length)])
                            .ToImmutableHashSet()
                    )
                )
                .ToImmutableDictionary();
            _fx = new TxSuccess(
                _blockHash,
                _txid,
                _stateRootHash,
                _stateUpdatedAddresses,
                _updatedFungibleAssets
            );
        }

        [Fact]
        public void ConstructorBuilder()
        {
            Assert.Equal(_blockHash, _fx.BlockHash);
            Assert.Equal(_txid, _fx.TxId);
            Assert.Equal(_stateRootHash, _fx.StateRootHash);
            Assert.Equal(_stateUpdatedAddresses, _fx.StateUpdatedAddresses);
            Assert.Equal(_updatedFungibleAssets, _fx.UpdatedFungibleAssets);
        }
    }
}
