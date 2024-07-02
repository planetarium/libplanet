window.BENCHMARK_DATA = {
  "lastUpdate": 1719880461605,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "kidonseo@gmail.com",
            "name": "area363",
            "username": "area363"
          },
          "committer": {
            "email": "kidonseo@gmail.com",
            "name": "area363",
            "username": "area363"
          },
          "distinct": true,
          "id": "ac1fe9171c1790ba109a40f078941f6a89768dd8",
          "message": "test cache size",
          "timestamp": "2024-07-02T09:25:39+09:00",
          "tree_id": "53f19cdc036f4a41a23afadbf5b0d9bef47f1155",
          "url": "https://github.com/planetarium/libplanet/commit/ac1fe9171c1790ba109a40f078941f6a89768dd8"
        },
        "date": 1719880435950,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3746647.44140625,
            "unit": "ns",
            "range": "± 8237.797866425359"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1220706.6076822917,
            "unit": "ns",
            "range": "± 2125.471322148531"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 759415.9719401042,
            "unit": "ns",
            "range": "± 1906.7533418071139"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1964806.4838169643,
            "unit": "ns",
            "range": "± 4101.622407543509"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 628009.5362630208,
            "unit": "ns",
            "range": "± 1066.800704758024"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 569966.9705729167,
            "unit": "ns",
            "range": "± 683.5895246815033"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2543378.595238095,
            "unit": "ns",
            "range": "± 91879.84500476948"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2477282.0161290322,
            "unit": "ns",
            "range": "± 54559.68839651424"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3040231.4285714286,
            "unit": "ns",
            "range": "± 35982.07046403974"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2730477.3333333335,
            "unit": "ns",
            "range": "± 46571.07999708873"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3359996.722222222,
            "unit": "ns",
            "range": "± 71533.77745681987"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1036446.5,
            "unit": "ns",
            "range": "± 91833.43700698827"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1968837.4390243902,
            "unit": "ns",
            "range": "± 70920.45346091944"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1732400.2741935484,
            "unit": "ns",
            "range": "± 147010.53633329418"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8273059.458333333,
            "unit": "ns",
            "range": "± 163486.12675232248"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 202773.26315789475,
            "unit": "ns",
            "range": "± 7933.095913248307"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 203965.32183908045,
            "unit": "ns",
            "range": "± 11153.79640186627"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 170450.92857142858,
            "unit": "ns",
            "range": "± 4245.054738804876"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3222175.5,
            "unit": "ns",
            "range": "± 43782.615976141555"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2840609.6666666665,
            "unit": "ns",
            "range": "± 22871.954184942206"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12707.857142857143,
            "unit": "ns",
            "range": "± 820.6602162138668"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 66273.2947368421,
            "unit": "ns",
            "range": "± 6558.4850593645615"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52764.879310344826,
            "unit": "ns",
            "range": "± 2323.11591329016"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 60174.04081632653,
            "unit": "ns",
            "range": "± 9246.982541457954"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3531.1555555555556,
            "unit": "ns",
            "range": "± 268.910908395666"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11673.347368421053,
            "unit": "ns",
            "range": "± 784.9182335572673"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5732392,
            "unit": "ns",
            "range": "± 32529.165114969106"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14849607.333333334,
            "unit": "ns",
            "range": "± 76098.62148710772"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37836452.86666667,
            "unit": "ns",
            "range": "± 176865.22332065925"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75938236,
            "unit": "ns",
            "range": "± 340813.0532495575"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 153115343.7857143,
            "unit": "ns",
            "range": "± 426534.99234577705"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 39028.63333333333,
            "unit": "ns",
            "range": "± 595.140063546469"
          }
        ]
      }
    ]
  }
}