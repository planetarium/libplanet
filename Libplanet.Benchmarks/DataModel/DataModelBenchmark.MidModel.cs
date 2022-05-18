using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using Libplanet.Crypto;
using Libplanet.Store;

namespace Libplanet.Benchmarks
{
    public partial class DataModelBenchmark
    {
        private class MidModel : DataModel
        {
            public MidModel()
                : base()
            {
                System.Random random = new System.Random();
                LeafModel = new LeafModel();
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

            public MidModel(Bencodex.Types.Dictionary encoded)
                : base(encoded)
            {
            }

            public LeafModel LeafModel { get; private set; }

            public ImmutableList<int> BigList { get; private set; }

            public ImmutableDictionary<Address, string> BigDict { get; private set; }
        }
    }
}
