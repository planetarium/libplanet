window.BENCHMARK_DATA = {
  "lastUpdate": 1695608227976,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "ilgyu.yi@gmail.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "ilgyu.yi@gmail.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "distinct": true,
          "id": "dd29e8df43d1be525e1e6ada4a6420be0fc5c5f9",
          "message": "test: Update tests\n\nCo-authored-by: Chanhyuck Ko <limeelbee@gmail.com>\nCo-authored-by: Lee, Suho <iam@suho.io>",
          "timestamp": "2023-09-25T11:02:16+09:00",
          "tree_id": "2c97b4e23f376902560b604a8b270dc00b79067d",
          "url": "https://github.com/planetarium/libplanet/commit/dd29e8df43d1be525e1e6ada4a6420be0fc5c5f9"
        },
        "date": 1695608197979,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 279891.4117647059,
            "unit": "ns",
            "range": "± 11375.656923758681"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 273609.6101694915,
            "unit": "ns",
            "range": "± 12126.629598300493"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 238493.06,
            "unit": "ns",
            "range": "± 8831.73966594005"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4201254.5,
            "unit": "ns",
            "range": "± 35443.45069098966"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3859864.6666666665,
            "unit": "ns",
            "range": "± 41436.17117182707"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20729.968085106382,
            "unit": "ns",
            "range": "± 1423.893635420846"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 94522.58947368422,
            "unit": "ns",
            "range": "± 6094.3784429809575"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 71968.09677419355,
            "unit": "ns",
            "range": "± 2175.679654036698"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 83470.78571428571,
            "unit": "ns",
            "range": "± 13177.045018813402"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5700.556701030928,
            "unit": "ns",
            "range": "± 601.755019524006"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20931.64210526316,
            "unit": "ns",
            "range": "± 1256.996123115515"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3364645.153846154,
            "unit": "ns",
            "range": "± 38521.05851316081"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3621515.5714285714,
            "unit": "ns",
            "range": "± 61176.049991572916"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4245079,
            "unit": "ns",
            "range": "± 35647.6121327815"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4045022.3333333335,
            "unit": "ns",
            "range": "± 73502.3644154844"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6243121.47368421,
            "unit": "ns",
            "range": "± 129944.05057321505"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1378112.2127659575,
            "unit": "ns",
            "range": "± 97969.7548462913"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2557023.870967742,
            "unit": "ns",
            "range": "± 76887.03138880311"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1892503.14,
            "unit": "ns",
            "range": "± 129171.77864660555"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4787463.485714286,
            "unit": "ns",
            "range": "± 156480.9454903416"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47723.02173913043,
            "unit": "ns",
            "range": "± 3155.7974871246092"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7842980.533333333,
            "unit": "ns",
            "range": "± 84880.61150132045"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19818945.733333334,
            "unit": "ns",
            "range": "± 129483.77821370226"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50828540.71428572,
            "unit": "ns",
            "range": "± 224398.95623486466"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 109329679.66666667,
            "unit": "ns",
            "range": "± 525462.4143470025"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 205395778.4,
            "unit": "ns",
            "range": "± 412921.7202360342"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4922728.623697917,
            "unit": "ns",
            "range": "± 5181.899660893494"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1576156.8595252405,
            "unit": "ns",
            "range": "± 946.9549469341557"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1056773.5729166667,
            "unit": "ns",
            "range": "± 565.915662755237"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2787990.63515625,
            "unit": "ns",
            "range": "± 40523.729291220916"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 800186.7361979167,
            "unit": "ns",
            "range": "± 424.6814493002106"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 843780.6696213942,
            "unit": "ns",
            "range": "± 671.3028094331993"
          }
        ]
      }
    ]
  }
}