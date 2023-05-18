window.BENCHMARK_DATA = {
  "lastUpdate": 1684412783694,
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
        "date": 1684412725107,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1550608.3333333333,
            "unit": "ns",
            "range": "± 150768.3407131733"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2990637.8947368423,
            "unit": "ns",
            "range": "± 219299.58386846608"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2513624.7252747254,
            "unit": "ns",
            "range": "± 212143.94515328846"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6206526.595744681,
            "unit": "ns",
            "range": "± 356704.4893548732"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 55917.20430107527,
            "unit": "ns",
            "range": "± 4210.794194838504"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7635104.615384615,
            "unit": "ns",
            "range": "± 353163.21936126845"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20491686.458333332,
            "unit": "ns",
            "range": "± 1199108.1191864663"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52071587,
            "unit": "ns",
            "range": "± 3558587.6876136344"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 110395184.21052632,
            "unit": "ns",
            "range": "± 4773659.046033971"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 217608592.30769232,
            "unit": "ns",
            "range": "± 10039071.458280947"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5336445.435855263,
            "unit": "ns",
            "range": "± 118407.82982258254"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1688952.783203125,
            "unit": "ns",
            "range": "± 38308.598871871676"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1387164.2822265625,
            "unit": "ns",
            "range": "± 26607.104832008285"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3144818.4895833335,
            "unit": "ns",
            "range": "± 91762.52837212062"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 922683.2291666666,
            "unit": "ns",
            "range": "± 13621.143125222306"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 847914.4264914773,
            "unit": "ns",
            "range": "± 20546.526971451545"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3310490.425531915,
            "unit": "ns",
            "range": "± 272822.6727520257"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3654227.0833333335,
            "unit": "ns",
            "range": "± 249784.33286133554"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4545489.247311828,
            "unit": "ns",
            "range": "± 257331.9968877819"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4581970.37037037,
            "unit": "ns",
            "range": "± 240112.8487005873"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7255372.916666667,
            "unit": "ns",
            "range": "± 510425.3977097857"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 287796.73913043475,
            "unit": "ns",
            "range": "± 21597.72806064908"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 280525.2747252747,
            "unit": "ns",
            "range": "± 16596.188273259173"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 265430.30303030304,
            "unit": "ns",
            "range": "± 22458.049120869757"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4418658.762886598,
            "unit": "ns",
            "range": "± 275868.6597793479"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4075567.5,
            "unit": "ns",
            "range": "± 211410.40701962268"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20730.526315789473,
            "unit": "ns",
            "range": "± 2351.5532976171635"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 93493.81443298969,
            "unit": "ns",
            "range": "± 9651.109763832319"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 82311.85567010309,
            "unit": "ns",
            "range": "± 8505.163178169203"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 99613.54166666667,
            "unit": "ns",
            "range": "± 15496.693160268376"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5380.208333333333,
            "unit": "ns",
            "range": "± 1045.4532929401003"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18926.315789473683,
            "unit": "ns",
            "range": "± 2080.875967671583"
          }
        ]
      }
    ]
  }
}