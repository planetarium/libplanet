window.BENCHMARK_DATA = {
  "lastUpdate": 1758100559725,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "qooraven@gmail.com",
            "name": "Yang Chun Ung",
            "username": "ipdae"
          },
          "committer": {
            "email": "qooraven@gmail.com",
            "name": "Yang Chun Ung",
            "username": "ipdae"
          },
          "distinct": true,
          "id": "1b09bf3129a8e18f75e15d10485fcb9300e79edf",
          "message": "Add pr number",
          "timestamp": "2025-09-17T17:40:07+09:00",
          "tree_id": "23455712f56f25fcb66ee06c9d26ee977d75ea55",
          "url": "https://github.com/planetarium/libplanet/commit/1b09bf3129a8e18f75e15d10485fcb9300e79edf"
        },
        "date": 1758098890995,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1033240.2872340425,
            "unit": "ns",
            "range": "± 76963.55202034695"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1953369.530612245,
            "unit": "ns",
            "range": "± 77839.29452486869"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1661056.7972972973,
            "unit": "ns",
            "range": "± 83132.2488601589"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8295549.475,
            "unit": "ns",
            "range": "± 291704.354225432"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 111150.875,
            "unit": "ns",
            "range": "± 11769.41309116671"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 199888.05102040817,
            "unit": "ns",
            "range": "± 18269.273898849526"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 179062.98305084746,
            "unit": "ns",
            "range": "± 7750.599350554202"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3004396.214285714,
            "unit": "ns",
            "range": "± 44108.795669481704"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2772358.3571428573,
            "unit": "ns",
            "range": "± 39671.41859141093"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12806.031914893618,
            "unit": "ns",
            "range": "± 1583.464567524293"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 58991.775862068964,
            "unit": "ns",
            "range": "± 4251.722263046471"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 49753.5,
            "unit": "ns",
            "range": "± 1028.610370411288"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 60790.9175257732,
            "unit": "ns",
            "range": "± 12181.702303617523"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2606.139175257732,
            "unit": "ns",
            "range": "± 440.43948661079344"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11271.252808988764,
            "unit": "ns",
            "range": "± 916.8811423032638"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3846228.24921875,
            "unit": "ns",
            "range": "± 7493.68339222387"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1217118.618033854,
            "unit": "ns",
            "range": "± 2580.564642620705"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 773804.6988932291,
            "unit": "ns",
            "range": "± 1745.2469323235955"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2000564.989955357,
            "unit": "ns",
            "range": "± 2357.7375371433895"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 635817.3122395833,
            "unit": "ns",
            "range": "± 1405.0076643834354"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 586456.634375,
            "unit": "ns",
            "range": "± 1770.5527769139399"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 11711370.8125,
            "unit": "ns",
            "range": "± 216219.31825092743"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 28845450.533333335,
            "unit": "ns",
            "range": "± 308308.577806361"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 70728959.76666667,
            "unit": "ns",
            "range": "± 375884.7091475308"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 145286934.26666668,
            "unit": "ns",
            "range": "± 2512397.7038448034"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 284623826.53333336,
            "unit": "ns",
            "range": "± 2064238.030192527"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 31260.5,
            "unit": "ns",
            "range": "± 449.6658018276833"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2451425.3333333335,
            "unit": "ns",
            "range": "± 50746.97889267235"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2584994.875,
            "unit": "ns",
            "range": "± 50481.52091590875"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2994716.3666666667,
            "unit": "ns",
            "range": "± 38823.36725086115"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2546893.052631579,
            "unit": "ns",
            "range": "± 51848.10331950832"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3297872.466666667,
            "unit": "ns",
            "range": "± 59540.570182819356"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "qooraven@gmail.com",
            "name": "Yang Chun Ung",
            "username": "ipdae"
          },
          "committer": {
            "email": "qooraven@gmail.com",
            "name": "Yang Chun Ung",
            "username": "ipdae"
          },
          "distinct": true,
          "id": "940d7ddab05247542253df50d2e6f3b030809fc4",
          "message": "Update version prefix",
          "timestamp": "2025-09-17T18:07:11+09:00",
          "tree_id": "248e2a24de4ab50dc0c0c632e588f022b99f72a4",
          "url": "https://github.com/planetarium/libplanet/commit/940d7ddab05247542253df50d2e6f3b030809fc4"
        },
        "date": 1758100531802,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 982126.1460674157,
            "unit": "ns",
            "range": "± 72662.9316735767"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1907993.6862745099,
            "unit": "ns",
            "range": "± 77730.33321490143"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1535190.7571428572,
            "unit": "ns",
            "range": "± 71694.39052065769"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8166886.796296297,
            "unit": "ns",
            "range": "± 344190.99604191515"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 107566.0890410959,
            "unit": "ns",
            "range": "± 5175.438703454188"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 184934.56097560975,
            "unit": "ns",
            "range": "± 9503.890176987321"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 165978.07692307694,
            "unit": "ns",
            "range": "± 2129.2574394820704"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3019184.3571428573,
            "unit": "ns",
            "range": "± 31373.361777291117"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2770156.533333333,
            "unit": "ns",
            "range": "± 43764.33315884175"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10373.782608695652,
            "unit": "ns",
            "range": "± 690.4794213751561"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 55606.78,
            "unit": "ns",
            "range": "± 2801.7586396038105"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50875.9375,
            "unit": "ns",
            "range": "± 845.7983186512806"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 51562.262886597935,
            "unit": "ns",
            "range": "± 8358.758254536071"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2277.5106382978724,
            "unit": "ns",
            "range": "± 284.38886540673514"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10774.113402061856,
            "unit": "ns",
            "range": "± 1289.415847036691"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3892324.0239583333,
            "unit": "ns",
            "range": "± 33421.390416868184"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1236791.6940569195,
            "unit": "ns",
            "range": "± 7573.499814323873"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 793517.5682942708,
            "unit": "ns",
            "range": "± 4690.368793896695"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1958091.0496651786,
            "unit": "ns",
            "range": "± 3898.8220798808184"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 640919.6868024553,
            "unit": "ns",
            "range": "± 2915.2618104675516"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 588345.3175330529,
            "unit": "ns",
            "range": "± 809.4532252257218"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 11308171,
            "unit": "ns",
            "range": "± 113400.54405639206"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 28014887,
            "unit": "ns",
            "range": "± 307309.8846261263"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 70199632.71428572,
            "unit": "ns",
            "range": "± 244046.7790339286"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 138121024.13333333,
            "unit": "ns",
            "range": "± 789441.0719023995"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 275802812.85714287,
            "unit": "ns",
            "range": "± 666617.0539709445"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 31220.03846153846,
            "unit": "ns",
            "range": "± 234.8249757388878"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2453039.5588235296,
            "unit": "ns",
            "range": "± 47102.27097559972"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2577225.8571428573,
            "unit": "ns",
            "range": "± 40833.68811666161"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2985657.0714285714,
            "unit": "ns",
            "range": "± 28125.086797033346"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2542602.0625,
            "unit": "ns",
            "range": "± 47855.8508000415"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3248054.3076923075,
            "unit": "ns",
            "range": "± 40102.567497573466"
          }
        ]
      }
    ]
  }
}