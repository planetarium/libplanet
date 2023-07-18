using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using Libplanet.Crypto;
using StoreDataModel = Libplanet.Store.DataModel;

namespace Libplanet.Benchmarks.DataModel
{
    public partial class DataModelBenchmark
    {
        public class RootModel : StoreDataModel
        {
            public RootModel()
                : base()
            {
                System.Random random = new System.Random(0);
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
