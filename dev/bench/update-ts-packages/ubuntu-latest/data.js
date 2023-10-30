window.BENCHMARK_DATA = {
  "lastUpdate": 1698644739257,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "akamig@posteo.net",
            "name": "Akamig",
            "username": "Akamig"
          },
          "committer": {
            "email": "akamig@posteo.net",
            "name": "Akamig",
            "username": "Akamig"
          },
          "distinct": true,
          "id": "a381be89165f734ede0b4e80f1913b9bb346623f",
          "message": "WebCrypto Export",
          "timestamp": "2023-10-30T14:25:11+09:00",
          "tree_id": "f5448df3776d0350106e7cc9f5afdd6618627f63",
          "url": "https://github.com/planetarium/libplanet/commit/a381be89165f734ede0b4e80f1913b9bb346623f"
        },
        "date": 1698644708998,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 53121.989130434784,
            "unit": "ns",
            "range": "± 4073.894377065383"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5294965.776442308,
            "unit": "ns",
            "range": "± 17951.35759500713"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1633593.3705357143,
            "unit": "ns",
            "range": "± 4626.258755119366"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1161092.0955636161,
            "unit": "ns",
            "range": "± 863.788539818641"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2615596.014423077,
            "unit": "ns",
            "range": "± 3389.1181753257297"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 834752.328264509,
            "unit": "ns",
            "range": "± 487.65007241822883"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 761949.9181189904,
            "unit": "ns",
            "range": "± 711.2571751132454"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8786462.642857144,
            "unit": "ns",
            "range": "± 134862.33678636161"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23227559.933333334,
            "unit": "ns",
            "range": "± 226487.1926692755"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57906586.06666667,
            "unit": "ns",
            "range": "± 425514.47143973625"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 115971796.4,
            "unit": "ns",
            "range": "± 1277133.7412910096"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 232833996.93333334,
            "unit": "ns",
            "range": "± 763267.7803690493"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3640175.882352941,
            "unit": "ns",
            "range": "± 72341.80511889578"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3963501.9375,
            "unit": "ns",
            "range": "± 76893.17432513651"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4620183.7,
            "unit": "ns",
            "range": "± 90581.39351991957"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4679912.947368421,
            "unit": "ns",
            "range": "± 161047.80336401836"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10817971,
            "unit": "ns",
            "range": "± 260501.7284910956"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 299866.43137254904,
            "unit": "ns",
            "range": "± 11898.597475761422"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 271559.4736842105,
            "unit": "ns",
            "range": "± 11740.431718311334"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 251263.50561797753,
            "unit": "ns",
            "range": "± 13885.908536684683"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4535503.071428572,
            "unit": "ns",
            "range": "± 44665.02464666076"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4210346.714285715,
            "unit": "ns",
            "range": "± 39524.78314138645"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24787.172043010753,
            "unit": "ns",
            "range": "± 2080.1404458418915"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 98731.69387755102,
            "unit": "ns",
            "range": "± 8420.722625415761"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 83329.72164948453,
            "unit": "ns",
            "range": "± 7055.97757481536"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 101914.82474226804,
            "unit": "ns",
            "range": "± 13637.66509601435"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6475.714285714285,
            "unit": "ns",
            "range": "± 1015.5178456557821"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23912.26595744681,
            "unit": "ns",
            "range": "± 1789.93995919928"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1426295.5595238095,
            "unit": "ns",
            "range": "± 72359.39879091005"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2717346.1363636362,
            "unit": "ns",
            "range": "± 64325.19229686095"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2130376.222222222,
            "unit": "ns",
            "range": "± 105110.61346474882"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9548927.346153846,
            "unit": "ns",
            "range": "± 491841.4559953297"
          }
        ]
      }
    ]
  }
}