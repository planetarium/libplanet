window.BENCHMARK_DATA = {
  "lastUpdate": 1711011812981,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1cd705f8031f944afb22d53c6d7c52ad070ce6bb",
          "message": "Merge pull request #3690 from riemannulus/ci/benchmark/use-large-runner\n\n🔀 ci: use large runner",
          "timestamp": "2024-03-08T16:33:12+09:00",
          "tree_id": "338c9f6bc38dfb9bc884984ee4efbfe67e0e2cbf",
          "url": "https://github.com/planetarium/libplanet/commit/1cd705f8031f944afb22d53c6d7c52ad070ce6bb"
        },
        "date": 1709883738278,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 946314,
            "unit": "ns",
            "range": "± 109138.80701180307"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1654367.0588235294,
            "unit": "ns",
            "range": "± 87814.19560401286"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1515415.9574468085,
            "unit": "ns",
            "range": "± 149848.43690775387"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6677651.785714285,
            "unit": "ns",
            "range": "± 286507.49061511713"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36860.215053763444,
            "unit": "ns",
            "range": "± 4410.711758222106"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5133871.428571428,
            "unit": "ns",
            "range": "± 81139.12485612342"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 12778860,
            "unit": "ns",
            "range": "± 215682.45441587764"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 31179800,
            "unit": "ns",
            "range": "± 751065.0347098021"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 63794831.578947365,
            "unit": "ns",
            "range": "± 1375324.21997814"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 122632144.44444445,
            "unit": "ns",
            "range": "± 2524725.5345813967"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3300584.6819196427,
            "unit": "ns",
            "range": "± 9546.339536832653"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1077527.8776041667,
            "unit": "ns",
            "range": "± 1549.241648618532"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 713775.732421875,
            "unit": "ns",
            "range": "± 4380.271456538178"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1891011.5885416667,
            "unit": "ns",
            "range": "± 13312.882495743494"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 597558.7760416666,
            "unit": "ns",
            "range": "± 6094.020495534064"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 543200.3776041666,
            "unit": "ns",
            "range": "± 6494.439094123303"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2031990,
            "unit": "ns",
            "range": "± 60668.030267610666"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2182313.888888889,
            "unit": "ns",
            "range": "± 71299.75016096391"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2630155.263157895,
            "unit": "ns",
            "range": "± 90300.51838278199"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2915900,
            "unit": "ns",
            "range": "± 60536.985939726685"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7609932.558139535,
            "unit": "ns",
            "range": "± 281016.17452257103"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 163096.55172413794,
            "unit": "ns",
            "range": "± 6988.109337389676"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 154183.33333333334,
            "unit": "ns",
            "range": "± 7512.412264257667"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 138742.1875,
            "unit": "ns",
            "range": "± 6367.222730329059"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2781403.3333333335,
            "unit": "ns",
            "range": "± 45855.454055833616"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2430200,
            "unit": "ns",
            "range": "± 34699.73239913283"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9215.053763440861,
            "unit": "ns",
            "range": "± 883.2925356866847"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 48069.230769230766,
            "unit": "ns",
            "range": "± 3406.1282127526265"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 42368.333333333336,
            "unit": "ns",
            "range": "± 1758.7063491665886"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 43618.47826086957,
            "unit": "ns",
            "range": "± 5709.2931636143585"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2135.0515463917527,
            "unit": "ns",
            "range": "± 348.22204276193105"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 8693.181818181818,
            "unit": "ns",
            "range": "± 783.5661851829581"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b5716038dda700b49d47668e22fa8a6637d2e63a",
          "message": "Merge pull request #3688 from riemannulus/introduce/libplanet.store.remote",
          "timestamp": "2024-03-08T18:20:31+09:00",
          "tree_id": "56c5ac4603fa37d1f9bb8d744b3c1951d8b80316",
          "url": "https://github.com/planetarium/libplanet/commit/b5716038dda700b49d47668e22fa8a6637d2e63a"
        },
        "date": 1709890191866,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 959076.2886597938,
            "unit": "ns",
            "range": "± 108112.9258896262"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1727426.1904761905,
            "unit": "ns",
            "range": "± 78594.88351213274"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1517984.693877551,
            "unit": "ns",
            "range": "± 151203.19867344268"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6835310.869565218,
            "unit": "ns",
            "range": "± 262424.7051617417"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 35123.59550561798,
            "unit": "ns",
            "range": "± 3226.876567205441"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5205950,
            "unit": "ns",
            "range": "± 58385.48291642894"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 12741946.666666666,
            "unit": "ns",
            "range": "± 184144.78335835433"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 31479014.285714287,
            "unit": "ns",
            "range": "± 368491.24998930615"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 64239561.11111111,
            "unit": "ns",
            "range": "± 1163210.269868739"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 126678526.66666667,
            "unit": "ns",
            "range": "± 1168641.2296012023"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3335391.0714285714,
            "unit": "ns",
            "range": "± 10272.878302473931"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1024328.5757211539,
            "unit": "ns",
            "range": "± 4607.218760415342"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 750878.88671875,
            "unit": "ns",
            "range": "± 4786.184486914573"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1936202.5651041667,
            "unit": "ns",
            "range": "± 7385.867544465429"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 619455.234375,
            "unit": "ns",
            "range": "± 3459.1966061556172"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 562137.109375,
            "unit": "ns",
            "range": "± 2008.694430218544"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2159750,
            "unit": "ns",
            "range": "± 85201.64893000697"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2264805.5555555555,
            "unit": "ns",
            "range": "± 47657.916720559566"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2823317.3913043477,
            "unit": "ns",
            "range": "± 71103.82710690763"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2826298.5714285714,
            "unit": "ns",
            "range": "± 136034.19379695525"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7852515,
            "unit": "ns",
            "range": "± 262802.21435862157"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 173323.80952380953,
            "unit": "ns",
            "range": "± 7618.477417219403"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 160167.08860759492,
            "unit": "ns",
            "range": "± 7515.909988390395"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 144550,
            "unit": "ns",
            "range": "± 3256.006595105179"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2801968.75,
            "unit": "ns",
            "range": "± 35394.24093926393"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2519833.3333333335,
            "unit": "ns",
            "range": "± 36903.438993186115"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10423.595505617977,
            "unit": "ns",
            "range": "± 1308.1929305786416"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 54544.444444444445,
            "unit": "ns",
            "range": "± 6841.2050230789355"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43057.89473684211,
            "unit": "ns",
            "range": "± 939.4536174900837"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 54966.666666666664,
            "unit": "ns",
            "range": "± 12477.653494735852"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2346.875,
            "unit": "ns",
            "range": "± 402.87209018822784"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10144.736842105263,
            "unit": "ns",
            "range": "± 1871.4181913811983"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7d95f209e8358f2f90568cfc4de9ff819c8eea40",
          "message": "Merge pull request #3691 from riemannulus/release/4.1.0\n\n🚀  release: 4.1.0",
          "timestamp": "2024-03-08T18:41:55+09:00",
          "tree_id": "47ecf2c1422b8b0c0364b1cf8110a0853147d579",
          "url": "https://github.com/planetarium/libplanet/commit/7d95f209e8358f2f90568cfc4de9ff819c8eea40"
        },
        "date": 1709891472470,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 937540.404040404,
            "unit": "ns",
            "range": "± 95474.5354651389"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1702291.0714285714,
            "unit": "ns",
            "range": "± 72116.0359844043"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1520528.8659793814,
            "unit": "ns",
            "range": "± 161721.52438603304"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6895711.111111111,
            "unit": "ns",
            "range": "± 314141.67756639584"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 37845.91836734694,
            "unit": "ns",
            "range": "± 4842.534234024619"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5100813.333333333,
            "unit": "ns",
            "range": "± 34912.29555546843"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13218514.285714285,
            "unit": "ns",
            "range": "± 106993.78743389987"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 31727600,
            "unit": "ns",
            "range": "± 230574.85685864495"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 63817566.666666664,
            "unit": "ns",
            "range": "± 317608.3542142219"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 126995563.33333333,
            "unit": "ns",
            "range": "± 777173.5142412505"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3242688.359375,
            "unit": "ns",
            "range": "± 7126.932928024077"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1067394.0848214286,
            "unit": "ns",
            "range": "± 4306.152896263585"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 729489.5368303572,
            "unit": "ns",
            "range": "± 2011.6604259309922"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1905795.6119791667,
            "unit": "ns",
            "range": "± 9472.510628559756"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 642730.8268229166,
            "unit": "ns",
            "range": "± 1602.833955060509"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 559550.4231770834,
            "unit": "ns",
            "range": "± 2071.3707511173347"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2141632.2580645164,
            "unit": "ns",
            "range": "± 64189.51309519219"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2232433.3333333335,
            "unit": "ns",
            "range": "± 56549.74948367735"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2757528.5714285714,
            "unit": "ns",
            "range": "± 46192.41410533899"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2798078.787878788,
            "unit": "ns",
            "range": "± 185499.6249914947"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7884658.823529412,
            "unit": "ns",
            "range": "± 318454.9325581066"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 171115.73033707865,
            "unit": "ns",
            "range": "± 11282.346416137394"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 157830.1204819277,
            "unit": "ns",
            "range": "± 8410.964605505316"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 141947.8260869565,
            "unit": "ns",
            "range": "± 3577.5651401499053"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2782885,
            "unit": "ns",
            "range": "± 63465.64155426727"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2458000,
            "unit": "ns",
            "range": "± 46802.62100922697"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10037.755102040815,
            "unit": "ns",
            "range": "± 1343.293022982051"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 50932.989690721646,
            "unit": "ns",
            "range": "± 5306.63345982893"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43647.457627118645,
            "unit": "ns",
            "range": "± 1771.9418465785893"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 48109.278350515466,
            "unit": "ns",
            "range": "± 8059.441699985423"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2148.8888888888887,
            "unit": "ns",
            "range": "± 277.72933410286987"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9291.666666666666,
            "unit": "ns",
            "range": "± 1152.449717288001"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b96bef3ed28520b43e8779dbec5087131d48cf98",
          "message": "Merge pull request #3692 from riemannulus/prepare/4.2.0\n\n🚀 prepare: 4.2.0",
          "timestamp": "2024-03-08T19:32:11+09:00",
          "tree_id": "a1e22e4e11ca2f7252c1d598507a159fff85889d",
          "url": "https://github.com/planetarium/libplanet/commit/b96bef3ed28520b43e8779dbec5087131d48cf98"
        },
        "date": 1709894481640,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 980604.081632653,
            "unit": "ns",
            "range": "± 108487.50312217527"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1739203.488372093,
            "unit": "ns",
            "range": "± 90488.26176416398"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1524150,
            "unit": "ns",
            "range": "± 132901.9525006861"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6777136.363636363,
            "unit": "ns",
            "range": "± 213091.86372633665"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34467.441860465115,
            "unit": "ns",
            "range": "± 2857.8248355519754"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4953926.666666667,
            "unit": "ns",
            "range": "± 37468.03335924537"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13453680,
            "unit": "ns",
            "range": "± 73319.69332022216"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 31877864.285714287,
            "unit": "ns",
            "range": "± 266839.48965952964"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 67352280,
            "unit": "ns",
            "range": "± 928557.3812563843"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 127842626.66666667,
            "unit": "ns",
            "range": "± 1627031.5913460606"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3418061.796875,
            "unit": "ns",
            "range": "± 8178.905422727603"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1058465.1302083333,
            "unit": "ns",
            "range": "± 3155.265326771789"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 747800.3981370192,
            "unit": "ns",
            "range": "± 1610.6900110875063"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1963687.3197115385,
            "unit": "ns",
            "range": "± 1703.3863344703282"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 644086.07421875,
            "unit": "ns",
            "range": "± 1746.9733315295455"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 569949.51171875,
            "unit": "ns",
            "range": "± 1205.9244282652003"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2185576.3157894737,
            "unit": "ns",
            "range": "± 74285.91017766834"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2317660,
            "unit": "ns",
            "range": "± 43945.81472198402"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2823362.5,
            "unit": "ns",
            "range": "± 52556.24130395932"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2889621.4285714286,
            "unit": "ns",
            "range": "± 67893.03873737506"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7857970,
            "unit": "ns",
            "range": "± 239828.58964322082"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 170907.01754385966,
            "unit": "ns",
            "range": "± 7423.030273824516"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 164874.1935483871,
            "unit": "ns",
            "range": "± 6909.15134367411"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 144148.71794871794,
            "unit": "ns",
            "range": "± 5039.677923860642"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2818321.4285714286,
            "unit": "ns",
            "range": "± 28598.202702306273"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2555628.5714285714,
            "unit": "ns",
            "range": "± 60513.28897735722"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10669.791666666666,
            "unit": "ns",
            "range": "± 1551.3403231546629"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 54207.291666666664,
            "unit": "ns",
            "range": "± 5707.432730851321"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43443.333333333336,
            "unit": "ns",
            "range": "± 1219.859611293188"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 54971.27659574468,
            "unit": "ns",
            "range": "± 9572.334939931952"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2662.5,
            "unit": "ns",
            "range": "± 393.43293416313094"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9623.91304347826,
            "unit": "ns",
            "range": "± 1247.711713429027"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9671f7952a37890619ef9b0fd41709719331afbe",
          "message": "Merge pull request #3695 from riemannulus/ci/use/self-hosted-macos\n\nci: use self-hosted macos",
          "timestamp": "2024-03-14T14:54:36+09:00",
          "tree_id": "703011aae57abc4e5aa6fa7b1e4ced12b79af3d1",
          "url": "https://github.com/planetarium/libplanet/commit/9671f7952a37890619ef9b0fd41709719331afbe"
        },
        "date": 1710396221665,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 979798.9898989899,
            "unit": "ns",
            "range": "± 112546.19685951505"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1694221.0526315789,
            "unit": "ns",
            "range": "± 71514.87541774115"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1539418.5567010308,
            "unit": "ns",
            "range": "± 152898.1055923471"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6717447.05882353,
            "unit": "ns",
            "range": "± 212353.00832011426"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 35160.86956521739,
            "unit": "ns",
            "range": "± 3742.904100251425"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4891040,
            "unit": "ns",
            "range": "± 34737.25459996597"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13163433.333333334,
            "unit": "ns",
            "range": "± 67130.20042815164"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33277240,
            "unit": "ns",
            "range": "± 513713.1951362967"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 65233005.55555555,
            "unit": "ns",
            "range": "± 1338187.8464252548"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 130594933.33333333,
            "unit": "ns",
            "range": "± 976124.461960715"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3344743.777901786,
            "unit": "ns",
            "range": "± 10515.324956367016"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1077450.6277901786,
            "unit": "ns",
            "range": "± 1306.3505529055992"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 745204.4401041666,
            "unit": "ns",
            "range": "± 1189.9702287012776"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1952760.5747767857,
            "unit": "ns",
            "range": "± 4107.16354189939"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 624998.73046875,
            "unit": "ns",
            "range": "± 2617.751915809916"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 554157.1419270834,
            "unit": "ns",
            "range": "± 1655.956072724026"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2110655.172413793,
            "unit": "ns",
            "range": "± 58165.56778595107"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2313970.8333333335,
            "unit": "ns",
            "range": "± 58838.01994101866"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2710196.296296296,
            "unit": "ns",
            "range": "± 66272.92335766071"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2898160,
            "unit": "ns",
            "range": "± 42134.78033982988"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7757802.94117647,
            "unit": "ns",
            "range": "± 217915.2246691417"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 174273.5294117647,
            "unit": "ns",
            "range": "± 8196.861751988476"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 166734.4262295082,
            "unit": "ns",
            "range": "± 7476.783739146614"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 144640,
            "unit": "ns",
            "range": "± 4178.648519351186"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2844128.5714285714,
            "unit": "ns",
            "range": "± 33746.73610591397"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2493676.1904761903,
            "unit": "ns",
            "range": "± 57921.8430711757"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10735.78947368421,
            "unit": "ns",
            "range": "± 1565.8534339087305"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 51852.63157894737,
            "unit": "ns",
            "range": "± 4046.5599286849774"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43870.833333333336,
            "unit": "ns",
            "range": "± 964.8064309877719"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 55118.36734693877,
            "unit": "ns",
            "range": "± 12630.876478136151"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2371.4285714285716,
            "unit": "ns",
            "range": "± 498.4512094953955"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9930.851063829787,
            "unit": "ns",
            "range": "± 1011.0440250504694"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "han0210@netsgo.com",
            "name": "Jeesu Choi",
            "username": "s2quake"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5fc05429fba439add17e3c91f90d4fff3e17bd9f",
          "message": "Merge pull request #3685 from s2quake/chore/split-changeslog\n\nSplit changes.md by major version",
          "timestamp": "2024-03-14T16:36:50+09:00",
          "tree_id": "5ec541d47c2fa91af9db7266b8c10e833a4378cf",
          "url": "https://github.com/planetarium/libplanet/commit/5fc05429fba439add17e3c91f90d4fff3e17bd9f"
        },
        "date": 1710402364795,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 967330,
            "unit": "ns",
            "range": "± 104920.90190503348"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1687258.4905660378,
            "unit": "ns",
            "range": "± 69789.2030275189"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1551969.0721649486,
            "unit": "ns",
            "range": "± 166987.1654005336"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6749916.216216216,
            "unit": "ns",
            "range": "± 203649.30437930342"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 35116.666666666664,
            "unit": "ns",
            "range": "± 3724.388193479613"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4906392.307692308,
            "unit": "ns",
            "range": "± 22486.27216542208"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13348220,
            "unit": "ns",
            "range": "± 211775.22517990627"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32655253.333333332,
            "unit": "ns",
            "range": "± 310818.58251735085"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 63920292.85714286,
            "unit": "ns",
            "range": "± 397988.5260508547"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 128613333.33333333,
            "unit": "ns",
            "range": "± 1387936.1876370185"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3307505.3125,
            "unit": "ns",
            "range": "± 11062.004880796729"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1052178.9192708333,
            "unit": "ns",
            "range": "± 2516.880786247702"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 753745.0130208334,
            "unit": "ns",
            "range": "± 1758.3653642392424"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1917561.2630208333,
            "unit": "ns",
            "range": "± 4337.203889395001"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 618486.5559895834,
            "unit": "ns",
            "range": "± 2050.1432274639806"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 562571.2239583334,
            "unit": "ns",
            "range": "± 1637.7826478628608"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2182355.8139534886,
            "unit": "ns",
            "range": "± 44235.5131105658"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2283716.6666666665,
            "unit": "ns",
            "range": "± 63419.79186342384"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2858570.8333333335,
            "unit": "ns",
            "range": "± 74028.89259205353"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2823665.3333333335,
            "unit": "ns",
            "range": "± 140061.0537657845"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7743540,
            "unit": "ns",
            "range": "± 197066.30229443085"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 176546.66666666666,
            "unit": "ns",
            "range": "± 7245.664201266446"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 168580.39215686274,
            "unit": "ns",
            "range": "± 5887.648753376619"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 144683.33333333334,
            "unit": "ns",
            "range": "± 3074.8027196400553"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2824600,
            "unit": "ns",
            "range": "± 35284.797336486474"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2537240,
            "unit": "ns",
            "range": "± 32007.204546119658"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11443.75,
            "unit": "ns",
            "range": "± 1523.487170242906"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 51343.181818181816,
            "unit": "ns",
            "range": "± 3841.7786665663098"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44120.75471698113,
            "unit": "ns",
            "range": "± 1833.3825915887778"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 53247.87234042553,
            "unit": "ns",
            "range": "± 9822.694029900003"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2237.7551020408164,
            "unit": "ns",
            "range": "± 482.1590844375533"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9494.505494505494,
            "unit": "ns",
            "range": "± 1140.6004887643505"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "han0210@netsgo.com",
            "name": "Jeesu Choi",
            "username": "s2quake"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bad0ed71b73360b295dab729bb5ff4e9d30e5bc3",
          "message": "Merge pull request #3684 from s2quake/chore/remove-unused-field\n\nRemoved unused field in NullBlockPolicy",
          "timestamp": "2024-03-14T16:56:42+09:00",
          "tree_id": "5156e3d39cee3ea16e56a57e59dc0997b9442757",
          "url": "https://github.com/planetarium/libplanet/commit/bad0ed71b73360b295dab729bb5ff4e9d30e5bc3"
        },
        "date": 1710403608527,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 963653,
            "unit": "ns",
            "range": "± 96115.91954982842"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1750267.6056338027,
            "unit": "ns",
            "range": "± 71263.12766210246"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1536580.412371134,
            "unit": "ns",
            "range": "± 118681.26751160654"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6917653.333333333,
            "unit": "ns",
            "range": "± 259114.4504934942"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36438.88888888889,
            "unit": "ns",
            "range": "± 3663.3837874337523"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5049866.666666667,
            "unit": "ns",
            "range": "± 48763.09592109102"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13435914.285714285,
            "unit": "ns",
            "range": "± 88129.24824145724"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33033123.333333332,
            "unit": "ns",
            "range": "± 500191.5425495469"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 65486560,
            "unit": "ns",
            "range": "± 1014016.2803708542"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 132949500,
            "unit": "ns",
            "range": "± 815455.6771698701"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3336202.421875,
            "unit": "ns",
            "range": "± 18531.862727670592"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1055166.796875,
            "unit": "ns",
            "range": "± 2329.862193061625"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 742510.625,
            "unit": "ns",
            "range": "± 2471.514483564331"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1929920.6640625,
            "unit": "ns",
            "range": "± 6693.3042796157"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 642575.7291666666,
            "unit": "ns",
            "range": "± 598.0072396950866"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 559444.3229166666,
            "unit": "ns",
            "range": "± 715.6625176151961"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2250443.243243243,
            "unit": "ns",
            "range": "± 75648.45059932212"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2364902.3255813955,
            "unit": "ns",
            "range": "± 64443.65751928503"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2830657.1428571427,
            "unit": "ns",
            "range": "± 64229.13335417637"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2797005.797101449,
            "unit": "ns",
            "range": "± 123808.33727041208"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7780645.945945946,
            "unit": "ns",
            "range": "± 224422.55604921636"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 178053.94736842104,
            "unit": "ns",
            "range": "± 9063.383338679858"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 172148.14814814815,
            "unit": "ns",
            "range": "± 7063.799307517399"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 145887.5,
            "unit": "ns",
            "range": "± 4685.339245578046"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2854414.285714286,
            "unit": "ns",
            "range": "± 21829.826354813697"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2456108.8235294116,
            "unit": "ns",
            "range": "± 47930.60163955186"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11207.865168539325,
            "unit": "ns",
            "range": "± 1033.2236314191534"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 57665.9793814433,
            "unit": "ns",
            "range": "± 5980.191026037863"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 46189.0243902439,
            "unit": "ns",
            "range": "± 2295.621495103339"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 57828.260869565216,
            "unit": "ns",
            "range": "± 10912.220451583009"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2691.4893617021276,
            "unit": "ns",
            "range": "± 376.36049250116196"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11562.36559139785,
            "unit": "ns",
            "range": "± 1747.0418462979706"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d23ccf45a60ff011dcc112274755f6dcc1cd8e9e",
          "message": "Merge pull request #3697 from greymistcube/refactor/iworld-currency-handling\n\nMove FAV related operations from `IAccount` to `IWorld`",
          "timestamp": "2024-03-19T16:55:40+09:00",
          "tree_id": "243ee74689121f2566388a90479c76b16fd15d7d",
          "url": "https://github.com/planetarium/libplanet/commit/d23ccf45a60ff011dcc112274755f6dcc1cd8e9e"
        },
        "date": 1710835562675,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 972526.0416666666,
            "unit": "ns",
            "range": "± 100893.6044551692"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1720061.1940298507,
            "unit": "ns",
            "range": "± 81703.22117314496"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1499475.2577319588,
            "unit": "ns",
            "range": "± 107632.64493843538"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6909624.561403509,
            "unit": "ns",
            "range": "± 297319.0129429894"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 37224.489795918365,
            "unit": "ns",
            "range": "± 5548.605494435921"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5002736.666666667,
            "unit": "ns",
            "range": "± 40380.01391542014"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13215020,
            "unit": "ns",
            "range": "± 88249.81748261175"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32029613.333333332,
            "unit": "ns",
            "range": "± 199666.47142052618"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 64860386.666666664,
            "unit": "ns",
            "range": "± 398224.7765605082"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 129598033.33333333,
            "unit": "ns",
            "range": "± 1544138.5428528779"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3266352.734375,
            "unit": "ns",
            "range": "± 5801.007842472848"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1079788.8020833333,
            "unit": "ns",
            "range": "± 2547.7827959866368"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 742310.6901041666,
            "unit": "ns",
            "range": "± 1502.6373773833513"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1928654.7526041667,
            "unit": "ns",
            "range": "± 4449.59461984369"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 621705.80078125,
            "unit": "ns",
            "range": "± 1514.9532917561612"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 568723.2356770834,
            "unit": "ns",
            "range": "± 1505.3335215612549"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2159638.888888889,
            "unit": "ns",
            "range": "± 72168.70226976225"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2256192.3076923075,
            "unit": "ns",
            "range": "± 25591.029077213156"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2743446.3414634145,
            "unit": "ns",
            "range": "± 79612.69715805694"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2925515.909090909,
            "unit": "ns",
            "range": "± 108754.74636673964"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7772600,
            "unit": "ns",
            "range": "± 253750.47725252135"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 175745,
            "unit": "ns",
            "range": "± 9002.501761992804"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 169168.8524590164,
            "unit": "ns",
            "range": "± 7281.884851776737"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 140984.2105263158,
            "unit": "ns",
            "range": "± 2882.9504867014157"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2765578.5714285714,
            "unit": "ns",
            "range": "± 26359.064374997735"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2506923.3333333335,
            "unit": "ns",
            "range": "± 35279.60695170322"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10780.645161290322,
            "unit": "ns",
            "range": "± 1258.2128513262915"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 54306.25,
            "unit": "ns",
            "range": "± 5475.818852488015"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45295.38461538462,
            "unit": "ns",
            "range": "± 2116.2637159353785"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 53350.574712643676,
            "unit": "ns",
            "range": "± 8386.019284100568"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2737.1134020618556,
            "unit": "ns",
            "range": "± 541.8562977604676"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10354.347826086956,
            "unit": "ns",
            "range": "± 1382.65654825585"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "19ab254e527b7686280b57b8472bc789f64238a4",
          "message": "Merge pull request #3699 from greymistcube/refactor/simplify-iworld-delta\n\n🧹 Removed unnecessary methods and properties from `IWorldDelta`",
          "timestamp": "2024-03-19T18:20:26+09:00",
          "tree_id": "15ab5a662974ada3e2d9b22783e6225f894d7a9b",
          "url": "https://github.com/planetarium/libplanet/commit/19ab254e527b7686280b57b8472bc789f64238a4"
        },
        "date": 1710840575606,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 970577,
            "unit": "ns",
            "range": "± 96728.57145830097"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1701329.1666666667,
            "unit": "ns",
            "range": "± 66675.4315603496"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1495010.4166666667,
            "unit": "ns",
            "range": "± 113088.0574263089"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6514800,
            "unit": "ns",
            "range": "± 180413.01587273658"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 35792.391304347824,
            "unit": "ns",
            "range": "± 4168.411658807968"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4930400,
            "unit": "ns",
            "range": "± 18423.814020905746"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13189837.5,
            "unit": "ns",
            "range": "± 249776.47574047747"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32484386.666666668,
            "unit": "ns",
            "range": "± 288159.66027451487"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 66125100,
            "unit": "ns",
            "range": "± 346457.3988685611"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 128706696.66666667,
            "unit": "ns",
            "range": "± 1106183.324296828"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3332087.6802884615,
            "unit": "ns",
            "range": "± 7740.5286566923505"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1064080.4947916667,
            "unit": "ns",
            "range": "± 2442.8796266919603"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 729929.51171875,
            "unit": "ns",
            "range": "± 2056.0574951036747"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1925783.7760416667,
            "unit": "ns",
            "range": "± 5871.394270561477"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 627120.6575520834,
            "unit": "ns",
            "range": "± 1524.8054947049634"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 549098.6537388393,
            "unit": "ns",
            "range": "± 524.4521922053608"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2209385.714285714,
            "unit": "ns",
            "range": "± 28005.07803246396"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2222378.5714285714,
            "unit": "ns",
            "range": "± 27444.802746643993"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2833348.275862069,
            "unit": "ns",
            "range": "± 81003.99293813351"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2775082.9545454546,
            "unit": "ns",
            "range": "± 152335.5893252735"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7674654.545454546,
            "unit": "ns",
            "range": "± 283351.12038020743"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 176502.7027027027,
            "unit": "ns",
            "range": "± 8654.50983826008"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 166370.11494252874,
            "unit": "ns",
            "range": "± 8084.037026003616"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 143354.83870967742,
            "unit": "ns",
            "range": "± 3835.1739386610543"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2815270.588235294,
            "unit": "ns",
            "range": "± 56110.1680257897"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2462356.25,
            "unit": "ns",
            "range": "± 45512.0638768814"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11253.125,
            "unit": "ns",
            "range": "± 1497.3276633986789"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52177.17391304348,
            "unit": "ns",
            "range": "± 4266.328767949684"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44044.897959183676,
            "unit": "ns",
            "range": "± 1644.0627046651073"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 55717.34693877551,
            "unit": "ns",
            "range": "± 11650.326534162868"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2589.6907216494847,
            "unit": "ns",
            "range": "± 451.2677826788092"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9996.875,
            "unit": "ns",
            "range": "± 1083.702534928532"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0e48fff7c859bf78f0242a2ef52bb2eb7bb70a50",
          "message": "Merge pull request #3702 from greymistcube/refactor/move-validator-mutation\n\n🚚 Move `Validator` related methods from `IAccount` to `IWorld`",
          "timestamp": "2024-03-21T15:56:52+09:00",
          "tree_id": "a761e93f03edfdcd597e405bad0050b411e979c3",
          "url": "https://github.com/planetarium/libplanet/commit/0e48fff7c859bf78f0242a2ef52bb2eb7bb70a50"
        },
        "date": 1711004764032,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 948617,
            "unit": "ns",
            "range": "± 101304.47660793713"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1704900,
            "unit": "ns",
            "range": "± 99809.38577294268"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1473886,
            "unit": "ns",
            "range": "± 137168.9513562075"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6658685.106382979,
            "unit": "ns",
            "range": "± 259665.02751138518"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 35570.21276595745,
            "unit": "ns",
            "range": "± 4024.383470773538"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4841584.615384615,
            "unit": "ns",
            "range": "± 14637.443205346472"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13027246.153846154,
            "unit": "ns",
            "range": "± 63593.71844483561"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 31827692.85714286,
            "unit": "ns",
            "range": "± 149984.27848014203"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 64244773.333333336,
            "unit": "ns",
            "range": "± 480187.9133164829"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 129543940,
            "unit": "ns",
            "range": "± 889934.3224562778"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3371079.0457589286,
            "unit": "ns",
            "range": "± 5511.982075615854"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1086106.4453125,
            "unit": "ns",
            "range": "± 2147.398217543304"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 733055.9375,
            "unit": "ns",
            "range": "± 1449.517853539468"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1932397.0442708333,
            "unit": "ns",
            "range": "± 5072.232207675746"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 611982.6869419643,
            "unit": "ns",
            "range": "± 1417.95042325968"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 566665.9114583334,
            "unit": "ns",
            "range": "± 1676.6565324050368"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2106696,
            "unit": "ns",
            "range": "± 62350.39551124085"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2212765.5172413792,
            "unit": "ns",
            "range": "± 46141.43068453517"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2826069.4444444445,
            "unit": "ns",
            "range": "± 94430.4757690453"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2827115.789473684,
            "unit": "ns",
            "range": "± 95667.24290777958"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7642585.714285715,
            "unit": "ns",
            "range": "± 247873.89956192163"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 168730.23255813954,
            "unit": "ns",
            "range": "± 8907.103176909088"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 163787.5,
            "unit": "ns",
            "range": "± 6619.641915610624"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 144006.25,
            "unit": "ns",
            "range": "± 2589.3290636765346"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2818520,
            "unit": "ns",
            "range": "± 42831.98404396949"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2427633.3333333335,
            "unit": "ns",
            "range": "± 40453.56538527788"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9928.421052631578,
            "unit": "ns",
            "range": "± 1355.498115077112"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52027.83505154639,
            "unit": "ns",
            "range": "± 4733.782452314631"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43471.42857142857,
            "unit": "ns",
            "range": "± 1418.692734749231"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 47392.47311827957,
            "unit": "ns",
            "range": "± 7251.1054113679465"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2260.4166666666665,
            "unit": "ns",
            "range": "± 273.179781430574"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9159.550561797752,
            "unit": "ns",
            "range": "± 764.2166371109573"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6815582f07d67a2c4468c2d7723eb8844bd39651",
          "message": "Merge pull request #3704 from greymistcube/refactor/cleanup\n\n♻️ Docs cleanup",
          "timestamp": "2024-03-21T17:53:16+09:00",
          "tree_id": "5a79dee718ab7a05427020dd64f4fa753ef2e2af",
          "url": "https://github.com/planetarium/libplanet/commit/6815582f07d67a2c4468c2d7723eb8844bd39651"
        },
        "date": 1711011752138,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 958631,
            "unit": "ns",
            "range": "± 96705.3743766774"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1688845.8333333333,
            "unit": "ns",
            "range": "± 66427.16362585328"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1456113.5416666667,
            "unit": "ns",
            "range": "± 136120.99464488952"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6665941.935483871,
            "unit": "ns",
            "range": "± 192834.35339550464"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 37365.625,
            "unit": "ns",
            "range": "± 5046.454265907374"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4973653.333333333,
            "unit": "ns",
            "range": "± 23445.982496754004"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13180478.57142857,
            "unit": "ns",
            "range": "± 68950.50821000221"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32420385.714285713,
            "unit": "ns",
            "range": "± 310452.210758492"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 64367766.666666664,
            "unit": "ns",
            "range": "± 326427.6307165772"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 129120992.85714285,
            "unit": "ns",
            "range": "± 739872.2576481447"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3294528.152901786,
            "unit": "ns",
            "range": "± 4666.588571594675"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1061253.5546875,
            "unit": "ns",
            "range": "± 1836.5063147503618"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 731374.6469350961,
            "unit": "ns",
            "range": "± 1465.8009088242316"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1943256.3411458333,
            "unit": "ns",
            "range": "± 2752.7270777118933"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 599220.3255208334,
            "unit": "ns",
            "range": "± 1623.4652172883327"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 563028.9973958334,
            "unit": "ns",
            "range": "± 1166.9728548268522"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2104526.6666666665,
            "unit": "ns",
            "range": "± 47695.83899535959"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2237962.5,
            "unit": "ns",
            "range": "± 41687.54552156918"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2834352,
            "unit": "ns",
            "range": "± 72257.44552178227"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2820087,
            "unit": "ns",
            "range": "± 297310.85546745156"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7632654.054054054,
            "unit": "ns",
            "range": "± 210448.04135013497"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 172355.55555555556,
            "unit": "ns",
            "range": "± 7135.616657977483"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 160461.33333333334,
            "unit": "ns",
            "range": "± 8060.059910804991"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 145682.60869565216,
            "unit": "ns",
            "range": "± 3674.562704213071"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2823140,
            "unit": "ns",
            "range": "± 31556.814975985322"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2439386.6666666665,
            "unit": "ns",
            "range": "± 42761.47910489177"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9760.526315789473,
            "unit": "ns",
            "range": "± 1182.0891787118987"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 51361.458333333336,
            "unit": "ns",
            "range": "± 5451.284151785593"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43269.767441860466,
            "unit": "ns",
            "range": "± 1591.575272926455"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 50502.12765957447,
            "unit": "ns",
            "range": "± 8998.769076198902"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2203.125,
            "unit": "ns",
            "range": "± 281.89327020961974"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9589.583333333334,
            "unit": "ns",
            "range": "± 1076.6887999463097"
          }
        ]
      }
    ]
  }
}