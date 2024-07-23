window.BENCHMARK_DATA = {
  "lastUpdate": 1721724099910,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "han0210@netsgo.com",
            "name": "s2quake",
            "username": "s2quake"
          },
          "committer": {
            "email": "han0210@netsgo.com",
            "name": "s2quake",
            "username": "s2quake"
          },
          "distinct": true,
          "id": "73c93ef8e54624a73165cddb88c0fbcbf41a2a66",
          "message": "Prepare 5.2.1",
          "timestamp": "2024-07-23T17:28:54+09:00",
          "tree_id": "6169e6940dd919f784390a0d283f591f1994f863",
          "url": "https://github.com/planetarium/libplanet/commit/73c93ef8e54624a73165cddb88c0fbcbf41a2a66"
        },
        "date": 1721724072841,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 249736.72,
            "unit": "ns",
            "range": "± 9682.798733204934"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 246491.875,
            "unit": "ns",
            "range": "± 11054.790390925627"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 202653.92857142858,
            "unit": "ns",
            "range": "± 18355.42733707946"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3241311.5555555555,
            "unit": "ns",
            "range": "± 66607.48885225004"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3018172.777777778,
            "unit": "ns",
            "range": "± 60977.27559707657"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24167.88,
            "unit": "ns",
            "range": "± 1227.6137362401114"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 94366.21649484536,
            "unit": "ns",
            "range": "± 11102.793057217259"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 76030.28787878787,
            "unit": "ns",
            "range": "± 12246.018450219517"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 84250.1649484536,
            "unit": "ns",
            "range": "± 12208.278993918098"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5647.365979381443,
            "unit": "ns",
            "range": "± 1338.3815601693616"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23201.58064516129,
            "unit": "ns",
            "range": "± 1497.0606586602546"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1132921.5227272727,
            "unit": "ns",
            "range": "± 63567.06861839005"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2128359.4444444445,
            "unit": "ns",
            "range": "± 88170.3060259201"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1866771.869047619,
            "unit": "ns",
            "range": "± 97864.4576821247"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8822965,
            "unit": "ns",
            "range": "± 251087.21170799658"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3832832.8744791667,
            "unit": "ns",
            "range": "± 54204.24571061861"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1206201.208984375,
            "unit": "ns",
            "range": "± 3083.779024736778"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 775686.8286508414,
            "unit": "ns",
            "range": "± 940.5708062565741"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1969380.8717912945,
            "unit": "ns",
            "range": "± 19263.568847193445"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 615472.4707782452,
            "unit": "ns",
            "range": "± 899.106566774141"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 581808.3314732143,
            "unit": "ns",
            "range": "± 1065.939313616613"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2597342.590909091,
            "unit": "ns",
            "range": "± 109434.05644551977"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2727552.0555555555,
            "unit": "ns",
            "range": "± 56379.22285472384"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3240691.625,
            "unit": "ns",
            "range": "± 60246.66067633957"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2742018.0555555555,
            "unit": "ns",
            "range": "± 89243.58072375192"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3351850.6578947366,
            "unit": "ns",
            "range": "± 66668.23151768695"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46907.01,
            "unit": "ns",
            "range": "± 9377.410072432882"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 11334094.833333334,
            "unit": "ns",
            "range": "± 95369.6322733415"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 28006935.233333334,
            "unit": "ns",
            "range": "± 143258.75164763266"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 72292678.28571428,
            "unit": "ns",
            "range": "± 394807.45167665224"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 144327741.26666668,
            "unit": "ns",
            "range": "± 436918.3639861712"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 296587611.3,
            "unit": "ns",
            "range": "± 1677747.5643825564"
          }
        ]
      }
    ]
  }
}