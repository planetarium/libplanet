using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using Libplanet.Crypto;
using Libplanet.Store;

namespace Libplanet.Benchmarks
{
    public partial class DataModelBenchmark
    {
        private class RootModel : DataModel
        {
            public RootModel()
                : base()
            {
                System.Random random = new System.Random();
                MidModel = new MidModel();
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

            public RootModel(Bencodex.Types.Dictionary encoded)
                : base(encoded)
            {
            }

            public MidModel MidModel { get; private set; }

            public ImmutableList<int> BigList { get; private set; }

            public ImmutableDictionary<Address, string> BigDict { get; private set; }
        }
    }
}
