window.BENCHMARK_DATA = {
  "lastUpdate": 1684412800525,
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
          "id": "bed16271f2349f89970f9949eccbcd7e6099e246",
          "message": "fix format",
          "timestamp": "2023-05-18T21:05:18+09:00",
          "tree_id": "0bb49fbbffb32b6a9953b9f954c9f0207f91338b",
          "url": "https://github.com/planetarium/libplanet/commit/bed16271f2349f89970f9949eccbcd7e6099e246"
        },
        "date": 1684412732314,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9138703.808510639,
            "unit": "ns",
            "range": "± 776894.3382178784"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21909401.466666665,
            "unit": "ns",
            "range": "± 1102479.071169317"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54361668.0625,
            "unit": "ns",
            "range": "± 2491697.18527665"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 109704263.28723404,
            "unit": "ns",
            "range": "± 4064052.8628554856"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 234659949.14444444,
            "unit": "ns",
            "range": "± 20450341.66604644"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 78484.93258426966,
            "unit": "ns",
            "range": "± 4582.965876228645"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 329109.88764044945,
            "unit": "ns",
            "range": "± 16983.906919786128"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 313892.6666666667,
            "unit": "ns",
            "range": "± 16959.10495902528"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 354028.22631578945,
            "unit": "ns",
            "range": "± 44133.5692505902"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4553524.84375,
            "unit": "ns",
            "range": "± 279868.9622254194"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4155934.6428571427,
            "unit": "ns",
            "range": "± 337732.9714896319"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24320.797872340427,
            "unit": "ns",
            "range": "± 4769.8819840223305"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 120981.56382978724,
            "unit": "ns",
            "range": "± 14964.253629368022"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 120277.19565217392,
            "unit": "ns",
            "range": "± 10463.681762517132"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 130495.57692307692,
            "unit": "ns",
            "range": "± 21873.140580391577"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8326.098901098901,
            "unit": "ns",
            "range": "± 1124.5322687425305"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22570.134831460673,
            "unit": "ns",
            "range": "± 2958.6465970371232"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1576745.34375,
            "unit": "ns",
            "range": "± 147775.15480427677"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3042347.757142857,
            "unit": "ns",
            "range": "± 139527.7396212559"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2503580.4782608696,
            "unit": "ns",
            "range": "± 184724.4841089513"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6501270.7,
            "unit": "ns",
            "range": "± 283634.4090876225"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3489269.6288659796,
            "unit": "ns",
            "range": "± 277854.4535292308"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3839159.412087912,
            "unit": "ns",
            "range": "± 429442.53526304045"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4899835.394736842,
            "unit": "ns",
            "range": "± 414149.6863832318"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4819948.692307692,
            "unit": "ns",
            "range": "± 506428.6561117016"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8479257.347826088,
            "unit": "ns",
            "range": "± 641412.1496791353"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7583166.674342105,
            "unit": "ns",
            "range": "± 139835.15266473463"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2251666.8783232276,
            "unit": "ns",
            "range": "± 106828.51747505223"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1417372.381966146,
            "unit": "ns",
            "range": "± 38615.87875750851"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3225102.470579117,
            "unit": "ns",
            "range": "± 146557.94464453514"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 931959.6975260417,
            "unit": "ns",
            "range": "± 16296.162180756779"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 788252.5998347356,
            "unit": "ns",
            "range": "± 8496.708751778031"
          }
        ]
      }
    ]
  }
}