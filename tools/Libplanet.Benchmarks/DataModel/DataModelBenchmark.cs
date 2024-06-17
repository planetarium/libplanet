using BenchmarkDotNet.Attributes;
using BTypes = Bencodex.Types;

namespace Libplanet.Benchmarks.DataModel
{
    public partial class DataModelBenchmark
    {
        private RootModel _rootModel;
        private LeafModel _leafModel;
        private RawLeafModel _rawLeafModel;

        private BTypes.Dictionary _encodedRootModel;
        private BTypes.Dictionary _encodedLeafModel;

        [GlobalSetup]
        public void Setup()
        {
            _rootModel = new RootModel();
            _leafModel = new LeafModel();
            _encodedRootModel = _rootModel.Encode();
            _encodedLeafModel = _leafModel.Encode();

            _rawLeafModel = new RawLeafModel(_encodedLeafModel);
        }

        [Benchmark]
        public Bencodex.Types.IValue EncodeRootModel()
        {
            return _rootModel.Encode();
        }

        [Benchmark]
        public Bencodex.Types.IValue EncodeLeafModel()
        {
            return _leafModel.Encode();
        }

        [Benchmark]
        public Bencodex.Types.IValue EncodeRawLeafModel()
        {
            return _rawLeafModel.Encode();
        }

        [Benchmark]
        public Libplanet.Store.DataModel DecodeRootModel()
        {
            return new RootModel(_encodedRootModel);
        }

        [Benchmark]
        public Libplanet.Store.DataModel DecodeLeafModel()
        {
            return new LeafModel(_encodedLeafModel);
        }

        [Benchmark]
        public RawLeafModel DecodeRawLeafModel()
        {
            return new RawLeafModel(_encodedLeafModel);
        }
    }
}
