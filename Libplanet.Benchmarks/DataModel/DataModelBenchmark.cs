using BenchmarkDotNet.Attributes;
using BTypes = Bencodex.Types;

namespace Libplanet.Benchmarks
{
    public partial class DataModelBenchmark
    {
        private RootModel _rootModel;
        private LeafModel _leafModel;
        private PlainValueLeaf _plainValueLeaf;

        private BTypes.Dictionary _encodedRootModel;
        private BTypes.Dictionary _encodedLeafModel;

        public DataModelBenchmark()
        {
            _rootModel = new RootModel();
            _leafModel = new LeafModel();
            _encodedRootModel = _rootModel.Encode();
            _encodedLeafModel = _leafModel.Encode();

            _plainValueLeaf = new PlainValueLeaf(_encodedLeafModel);
        }

        [Benchmark]
        public void EncodeRoot()
        {
            _rootModel.Encode();
        }

        [Benchmark]
        public void EncodeLeaf()
        {
            _leafModel.Encode();
        }

        [Benchmark]
        public void EncodePlainValueLeaf()
        {
            _plainValueLeaf.Encode();
        }

        [Benchmark]
        public void DecodeRoot()
        {
            _ = new RootModel(_encodedRootModel);
        }

        [Benchmark]
        public void DecodeLeaf()
        {
            _ = new LeafModel(_encodedLeafModel);
        }

        [Benchmark]
        public void DecodePlainValueLeaf()
        {
            _ = new PlainValueLeaf(_encodedLeafModel);
        }
    }
}
