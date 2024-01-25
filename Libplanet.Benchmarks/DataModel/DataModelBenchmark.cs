using System;
using BenchmarkDotNet.Attributes;
using BTypes = Bencodex.Types;

namespace Libplanet.Benchmarks.DataModel
{
    public partial class DataModelBenchmark
    {
        private RootModel? _rootModel;
        private LeafModel? _leafModel;
        private RawLeafModel? _rawLeafModel;

        private BTypes.Dictionary? _encodedRootModel;
        private BTypes.Dictionary? _encodedLeafModel;

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
            if (_rootModel is null)
            {
                throw new InvalidOperationException(
                    $"'{nameof(DataModelBenchmark)}' is not setup.");
            }

            return _rootModel.Encode();
        }

        [Benchmark]
        public Bencodex.Types.IValue EncodeLeafModel()
        {
            if (_leafModel is null)
            {
                throw new InvalidOperationException(
                    $"'{nameof(DataModelBenchmark)}' is not setup.");
            }

            return _leafModel.Encode();
        }

        [Benchmark]
        public Bencodex.Types.IValue EncodeRawLeafModel()
        {
            if (_rawLeafModel is null)
            {
                throw new InvalidOperationException(
                    $"'{nameof(DataModelBenchmark)}' is not setup.");
            }

            return _rawLeafModel.Encode();
        }

        [Benchmark]
        public Libplanet.Store.DataModel DecodeRootModel()
        {
            if (_encodedRootModel is null)
            {
                throw new InvalidOperationException(
                    $"'{nameof(DataModelBenchmark)}' is not setup.");
            }

            return new RootModel(_encodedRootModel);
        }

        [Benchmark]
        public Libplanet.Store.DataModel DecodeLeafModel()
        {
            if (_encodedLeafModel is null)
            {
                throw new InvalidOperationException(
                    $"'{nameof(DataModelBenchmark)}' is not setup.");
            }

            return new LeafModel(_encodedLeafModel);
        }

        [Benchmark]
        public RawLeafModel DecodeRawLeafModel()
        {
            if (_encodedLeafModel is null)
            {
                throw new InvalidOperationException(
                    $"'{nameof(DataModelBenchmark)}' is not setup.");
            }

            return new RawLeafModel(_encodedLeafModel);
        }
    }
}
