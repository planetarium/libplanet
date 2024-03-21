window.BENCHMARK_DATA = {
  "lastUpdate": 1711016238978,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "committer": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "distinct": true,
          "id": "3f15fa48f9f57536b050c7443c2247627f30ee76",
          "message": "feat: add dpos related features",
          "timestamp": "2024-03-21T19:07:13+09:00",
          "tree_id": "9951d77e8b5a62bf4d33a34cdbb2c476c8268a10",
          "url": "https://github.com/planetarium/libplanet/commit/3f15fa48f9f57536b050c7443c2247627f30ee76"
        },
        "date": 1711016216572,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5543702.833333333,
            "unit": "ns",
            "range": "± 30971.80112772323"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14418771.6,
            "unit": "ns",
            "range": "± 59124.5353213996"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37586423.4,
            "unit": "ns",
            "range": "± 224712.2209137087"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 76692307.07142857,
            "unit": "ns",
            "range": "± 301667.9006509449"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 149651573.73333332,
            "unit": "ns",
            "range": "± 551560.7923649119"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36172.829545454544,
            "unit": "ns",
            "range": "± 2127.9823897464603"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 966327.4375,
            "unit": "ns",
            "range": "± 78918.94094586612"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1857089.2,
            "unit": "ns",
            "range": "± 60218.30992793198"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1579154.7659574468,
            "unit": "ns",
            "range": "± 127619.35953067584"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7441779.5,
            "unit": "ns",
            "range": "± 182416.1094291017"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2431925.409090909,
            "unit": "ns",
            "range": "± 58360.21709701215"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2533033.8,
            "unit": "ns",
            "range": "± 39289.03048871093"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3148147.466666667,
            "unit": "ns",
            "range": "± 58269.49053182201"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3135905.0384615385,
            "unit": "ns",
            "range": "± 128974.14230607128"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8674208.932432432,
            "unit": "ns",
            "range": "± 206075.19638640818"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 200228.82142857142,
            "unit": "ns",
            "range": "± 5668.438971563391"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 194651.41463414635,
            "unit": "ns",
            "range": "± 6960.007255655735"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 165785.1,
            "unit": "ns",
            "range": "± 2388.3894693166894"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3199347.1428571427,
            "unit": "ns",
            "range": "± 41983.44450972429"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2847147.9,
            "unit": "ns",
            "range": "± 44376.36804619581"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12345.577777777778,
            "unit": "ns",
            "range": "± 686.506630290785"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60196.89772727273,
            "unit": "ns",
            "range": "± 3070.3618119183816"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52188.42105263158,
            "unit": "ns",
            "range": "± 1148.7520434410299"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 64134.45744680851,
            "unit": "ns",
            "range": "± 6697.813982437184"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2902.516129032258,
            "unit": "ns",
            "range": "± 288.6137637541408"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12045.521739130434,
            "unit": "ns",
            "range": "± 742.6313104485165"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3636946.10546875,
            "unit": "ns",
            "range": "± 2609.888351529654"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1216460.9889322917,
            "unit": "ns",
            "range": "± 1111.0162639993835"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 762019.2191685268,
            "unit": "ns",
            "range": "± 2426.9290170437125"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1945224.0114182692,
            "unit": "ns",
            "range": "± 3844.7103812030045"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 623986.5447591146,
            "unit": "ns",
            "range": "± 711.0546677162647"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 568408.6684244792,
            "unit": "ns",
            "range": "± 1012.7585927111193"
          }
        ]
      }
    ]
  }
}