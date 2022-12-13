using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.IO;
using System.Linq;
using System.Runtime.Serialization.Formatters.Binary;
using Bencodex.Types;
using Libplanet.Assets;
using Libplanet.Blocks;
using Libplanet.Tx;
using Xunit;
using FAV = Libplanet.Assets.FungibleAssetValue;

namespace Libplanet.Tests.Tx
{
    public class TxSuccessTest
    {
        private static readonly Currency[] Currencies = new[] { "FOO", "BAR", "BAZ", "QUX" }
            .Select(ticker => Currency.Uncapped(ticker, 0, null))
            .ToArray();

        private readonly BlockHash _blockHash;
        private readonly TxId _txid;
        private readonly ImmutableDictionary<Address, IValue> _updatedStates;

        private readonly ImmutableDictionary<Address, IImmutableDictionary<Currency, FAV>>
            _fungibleAssetsDelta;

        private readonly ImmutableDictionary<Address, IImmutableDictionary<Currency, FAV>>
            _updatedFungibleAssets;

        private readonly List<List<string>> _actionsLogsList;

        private readonly TxSuccess _fx;

        private readonly TxSuccess _fxWithLogs;

        public TxSuccessTest()
        {
            var random = new Random();
            _blockHash = random.NextBlockHash();
            _txid = random.NextTxId();
            _updatedStates = Enumerable.Repeat(random, 5).ToImmutableDictionary(
                RandomExtensions.NextAddress,
                _ => (IValue)new Bencodex.Types.Integer(random.Next())
            );
            var currencies = Currencies.ToList();
            _updatedFungibleAssets = Enumerable.Repeat(random, 5).ToImmutableDictionary(
                RandomExtensions.NextAddress,
                _ => (IImmutableDictionary<Currency, FAV>)Enumerable.Repeat(
                        0,
                        random.Next(currencies.Count))
                    .Select(__ =>
                    {
                        int i = random.Next(currencies.Count);
                        Currency c = currencies[i];
                        currencies.RemoveAt(i);
                        return c;
                    })
                    .ToImmutableDictionary(
                        c => c,
                        c => c * random.Next()
                    )
            );
            _fungibleAssetsDelta = _updatedFungibleAssets.SelectWithinValues(favs =>
                (IImmutableDictionary<Currency, FAV>)favs.SelectWithinValues(
                    fav => fav.Currency * random.Next(1, int.MaxValue)
                ).ToImmutableDictionary()
            ).ToImmutableDictionary();
            _actionsLogsList = new List<List<string>>
            {
                new List<string>
                {
                    "LOG",
                },
            };
            _fx = new TxSuccess(
                _blockHash,
                _txid,
                null,
                _updatedStates,
                _fungibleAssetsDelta,
                _updatedFungibleAssets
            );
            _fxWithLogs = new TxSuccess(
                _blockHash,
                _txid,
                _actionsLogsList,
                _updatedStates,
                _fungibleAssetsDelta,
                _updatedFungibleAssets
            );
        }

        [Fact]
        public void ConstructorBuilder()
        {
            Assert.Equal(_blockHash, _fx.BlockHash);
            Assert.Equal(_txid, _fx.TxId);
            Assert.Equal(_updatedStates, _fx.UpdatedStates);
            Assert.Equal(_fungibleAssetsDelta, _fx.FungibleAssetsDelta);
            Assert.Equal(_updatedFungibleAssets, _fx.UpdatedFungibleAssets);
            Assert.Null(_fx.ActionsLogsList);

            Assert.Equal(_blockHash, _fxWithLogs.BlockHash);
            Assert.Equal(_txid, _fxWithLogs.TxId);
            Assert.Equal(_updatedStates, _fxWithLogs.UpdatedStates);
            Assert.Equal(_fungibleAssetsDelta, _fxWithLogs.FungibleAssetsDelta);
            Assert.Equal(_updatedFungibleAssets, _fxWithLogs.UpdatedFungibleAssets);
            Assert.Equal(_actionsLogsList, _fxWithLogs.ActionsLogsList);
        }

        [Fact]
        public void Serialization()
        {
            var fxs = new[]
            {
                _fx,
                _fxWithLogs,
            };

            foreach (var fx in fxs)
            {
                var formatter = new BinaryFormatter();
                var stream = new MemoryStream();
                formatter.Serialize(stream, fx);
                stream.Seek(0, SeekOrigin.Begin);
                object deserialized = formatter.Deserialize(stream);
                Assert.IsType<TxSuccess>(deserialized);
                var s = (TxSuccess)deserialized;
                Assert.Equal(_blockHash, s.BlockHash);
                Assert.Equal(_txid, s.TxId);
                Assert.Equal(fx.UpdatedStates, s.UpdatedStates);
                Assert.Equal(fx.FungibleAssetsDelta, s.FungibleAssetsDelta);
                Assert.Equal(fx.UpdatedFungibleAssets, s.UpdatedFungibleAssets);
                Assert.Equal(fx.ActionsLogsList, s.ActionsLogsList);
            }
        }
    }
}
