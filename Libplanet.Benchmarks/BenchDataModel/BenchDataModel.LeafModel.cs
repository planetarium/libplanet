using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using Libplanet.Crypto;
using Libplanet.Store;
using BTypes = Bencodex.Types;

namespace Libplanet.Benchmarks
{
    public partial class BenchDataModel
    {
        private class LeafModel : DataModel
        {
            public LeafModel()
                : base()
            {
                System.Random random = new System.Random();
                BigList = Enumerable
                    .Range(0, 1000)
                    .Select(_ => random.Next())
                    .ToImmutableList();
                BigDict = Enumerable
                    .Range(0, 1000)
                    .Select(_ => new KeyValuePair<Address, string>(
                        new PrivateKey().ToAddress(),
                        new PrivateKey().ToAddress().ToString()))
                    .ToImmutableDictionary();
            }

            public LeafModel(Bencodex.Types.Dictionary encoded)
                : base(encoded)
            {
            }

            public ImmutableList<int> BigList { get; private set; }

            public ImmutableDictionary<Address, string> BigDict { get; private set; }
        }

        private class PlainValueLeaf
        {
            public PlainValueLeaf()
            {
                System.Random random = new System.Random();
                BigList = Enumerable
                    .Range(0, 1000)
                    .Select(_ => random.Next())
                    .ToImmutableList();
                BigDict = Enumerable
                    .Range(0, 1000)
                    .Select(_ => new KeyValuePair<Address, string>(
                        new PrivateKey().ToAddress(),
                        new PrivateKey().ToAddress().ToString()))
                    .ToImmutableDictionary();
            }

            public PlainValueLeaf(Bencodex.Types.Dictionary encoded)
            {
                BigList = ((BTypes.List)encoded[nameof(BigList)])
                    .Select(x => (int)((BTypes.Integer)x).Value)
                    .ToImmutableList();
                BigDict = ((BTypes.Dictionary)encoded[nameof(BigDict)])
                    .Select(kv => new KeyValuePair<Address, string>(
                        new Address(((BTypes.Binary)kv.Key).ByteArray),
                        ((BTypes.Text)kv.Value).Value))
                    .ToImmutableDictionary();
            }

            public BTypes.Dictionary Encode()
            {
                return BTypes.Dictionary.Empty
                    .Add(
                        nameof(BigList),
                        (BTypes.IValue)new BTypes.List(
                            BigList.Select(x => (BTypes.IValue)new BTypes.Integer(x)).ToList()))
                    .Add(
                        nameof(BigDict),
                        new BTypes.Dictionary(
                            BigDict
                                .Select(kv => new KeyValuePair<BTypes.IKey, BTypes.IValue>(
                                    new BTypes.Binary(kv.Key.ByteArray),
                                    new BTypes.Text(kv.Value)))));
            }

            public ImmutableList<int> BigList { get; private set; }

            public ImmutableDictionary<Address, string> BigDict { get; private set; }
        }

    }
}
