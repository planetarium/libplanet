window.BENCHMARK_DATA = {
  "lastUpdate": 1721208727224,
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
          "id": "adefec1ee02fbc004c7e937b6c3f1b0eb35b6ba8",
          "message": "Prepare 5.1.3",
          "timestamp": "2024-07-17T18:23:14+09:00",
          "tree_id": "46788e99e92a5fb3224654f1c5f3217525742742",
          "url": "https://github.com/planetarium/libplanet/commit/adefec1ee02fbc004c7e937b6c3f1b0eb35b6ba8"
        },
        "date": 1721208701408,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 203970.23529411765,
            "unit": "ns",
            "range": "± 9358.777566585568"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 193705.52777777778,
            "unit": "ns",
            "range": "± 9357.989821119452"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 169890.825,
            "unit": "ns",
            "range": "± 5943.805907068084"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3082263.9285714286,
            "unit": "ns",
            "range": "± 34256.16931627463"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2789738.5,
            "unit": "ns",
            "range": "± 35939.77985838576"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15767.326530612245,
            "unit": "ns",
            "range": "± 2345.0153573695798"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61425.6129032258,
            "unit": "ns",
            "range": "± 5028.170799372052"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50441.96153846154,
            "unit": "ns",
            "range": "± 686.0140444850741"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 66539.13541666667,
            "unit": "ns",
            "range": "± 7970.688377615088"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2824.127659574468,
            "unit": "ns",
            "range": "± 364.7114114410512"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12581.765957446809,
            "unit": "ns",
            "range": "± 1056.4387674476347"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1035654.7934782609,
            "unit": "ns",
            "range": "± 80260.14149147511"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1971412.9375,
            "unit": "ns",
            "range": "± 90292.21096394715"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1726748.8615384616,
            "unit": "ns",
            "range": "± 79608.17059587009"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8427660.202702703,
            "unit": "ns",
            "range": "± 262243.81733702036"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3834253.864483173,
            "unit": "ns",
            "range": "± 4188.431194987682"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1236064.5977864584,
            "unit": "ns",
            "range": "± 3002.8102991084147"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 775417.8186848959,
            "unit": "ns",
            "range": "± 1625.6957194892639"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1966738.9815848214,
            "unit": "ns",
            "range": "± 2190.8279932654473"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 618274.7338541667,
            "unit": "ns",
            "range": "± 690.9864838604836"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 595963.243359375,
            "unit": "ns",
            "range": "± 1212.6008458563592"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2516387.8333333335,
            "unit": "ns",
            "range": "± 64813.68366973583"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2521235.9714285713,
            "unit": "ns",
            "range": "± 82615.75264350076"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3084633.3076923075,
            "unit": "ns",
            "range": "± 37030.52955419491"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2640013.214285714,
            "unit": "ns",
            "range": "± 37365.17190858677"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3276556.611111111,
            "unit": "ns",
            "range": "± 69257.63206203247"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 32317.153846153848,
            "unit": "ns",
            "range": "± 329.98152628943893"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10363891.642857144,
            "unit": "ns",
            "range": "± 98606.48574616575"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27423649.75,
            "unit": "ns",
            "range": "± 337565.976841565"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 70285738.71428572,
            "unit": "ns",
            "range": "± 405859.0518726304"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 141302100.06666666,
            "unit": "ns",
            "range": "± 613699.4326840957"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 296606423.9230769,
            "unit": "ns",
            "range": "± 754036.1718595315"
          }
        ]
      }
    ]
  }
}