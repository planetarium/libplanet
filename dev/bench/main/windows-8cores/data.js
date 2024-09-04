window.BENCHMARK_DATA = {
  "lastUpdate": 1725455819439,
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
          "id": "e3df1917a9739c156d0e9eb0d58fef17b9b6206c",
          "message": "Merge pull request #3705 from greymistcube/refactor/cleanup\n\n🧹 Removed unnecessary test code",
          "timestamp": "2024-03-22T14:32:16+09:00",
          "tree_id": "244b5fe74be3f90bb2e7ed3f92e3709161f56e0d",
          "url": "https://github.com/planetarium/libplanet/commit/e3df1917a9739c156d0e9eb0d58fef17b9b6206c"
        },
        "date": 1711086224663,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 954657,
            "unit": "ns",
            "range": "± 104641.61566166124"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1664523.5294117648,
            "unit": "ns",
            "range": "± 44029.61165303744"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1483089.898989899,
            "unit": "ns",
            "range": "± 144412.67292384733"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6782555.882352941,
            "unit": "ns",
            "range": "± 323110.978754587"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 35913.82978723404,
            "unit": "ns",
            "range": "± 5144.8398005056115"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5184505.882352941,
            "unit": "ns",
            "range": "± 105999.76102914239"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 12926393.333333334,
            "unit": "ns",
            "range": "± 164712.03211608288"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32511993.333333332,
            "unit": "ns",
            "range": "± 570487.207151755"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 62528914.28571428,
            "unit": "ns",
            "range": "± 358147.08808434656"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 128207700,
            "unit": "ns",
            "range": "± 859249.4706760912"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3323990.5729166665,
            "unit": "ns",
            "range": "± 8245.274159233633"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1058582.310267857,
            "unit": "ns",
            "range": "± 1282.8939669413664"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 748269.08203125,
            "unit": "ns",
            "range": "± 1568.6030944056897"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1893786.2760416667,
            "unit": "ns",
            "range": "± 5992.970481570289"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 610565.8203125,
            "unit": "ns",
            "range": "± 809.9833482586649"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 561097.6497395834,
            "unit": "ns",
            "range": "± 1348.701620400503"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2179968,
            "unit": "ns",
            "range": "± 40392.189013884024"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2157967.3469387754,
            "unit": "ns",
            "range": "± 40192.80816553246"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2751785.714285714,
            "unit": "ns",
            "range": "± 63531.63216630189"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2742144.6428571427,
            "unit": "ns",
            "range": "± 97531.61523721024"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7655916.216216216,
            "unit": "ns",
            "range": "± 252053.38446174178"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 166173.77049180327,
            "unit": "ns",
            "range": "± 6900.867134868976"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 162523.5294117647,
            "unit": "ns",
            "range": "± 8788.285588522609"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 142960,
            "unit": "ns",
            "range": "± 3133.083230033283"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2788720,
            "unit": "ns",
            "range": "± 37232.19037338523"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2387923.529411765,
            "unit": "ns",
            "range": "± 47783.35915111773"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9123.595505617977,
            "unit": "ns",
            "range": "± 808.9025213648921"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 48564.36781609195,
            "unit": "ns",
            "range": "± 2665.105129541852"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43166.666666666664,
            "unit": "ns",
            "range": "± 609.5204274797946"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 44120.65217391304,
            "unit": "ns",
            "range": "± 5785.383971860759"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1898.936170212766,
            "unit": "ns",
            "range": "± 232.0987372626969"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 8850.54945054945,
            "unit": "ns",
            "range": "± 744.2182514967003"
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
          "id": "5210b9336f9bb6e4f3c79b3c9f9612cad6719342",
          "message": "Merge pull request #3706 from greymistcube/chore/changelog\n\n🧹 Changelog formatting",
          "timestamp": "2024-03-22T17:50:34+09:00",
          "tree_id": "594bbc5288a619fc2040847db66ae22c22e2db13",
          "url": "https://github.com/planetarium/libplanet/commit/5210b9336f9bb6e4f3c79b3c9f9612cad6719342"
        },
        "date": 1711097989541,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 937704.2105263158,
            "unit": "ns",
            "range": "± 81673.00384185064"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1741130.3278688525,
            "unit": "ns",
            "range": "± 77802.01758239121"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1499802,
            "unit": "ns",
            "range": "± 137322.4789620506"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6693771.052631579,
            "unit": "ns",
            "range": "± 230794.14240060252"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 35249.45054945055,
            "unit": "ns",
            "range": "± 3550.817546749657"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5090933.333333333,
            "unit": "ns",
            "range": "± 16307.958909977784"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13346478.57142857,
            "unit": "ns",
            "range": "± 98402.98759200845"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32539878.57142857,
            "unit": "ns",
            "range": "± 179238.23501170136"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 65728614.28571428,
            "unit": "ns",
            "range": "± 895119.5398098796"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 129798192.3076923,
            "unit": "ns",
            "range": "± 584641.4605857999"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3364077.3697916665,
            "unit": "ns",
            "range": "± 7727.074897564723"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1077345.982142857,
            "unit": "ns",
            "range": "± 2103.8827357062305"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 734062.5651041666,
            "unit": "ns",
            "range": "± 992.1835012394668"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1919192.9129464286,
            "unit": "ns",
            "range": "± 26520.963139130152"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 616435.9305245535,
            "unit": "ns",
            "range": "± 1765.9589717622148"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 565602.34375,
            "unit": "ns",
            "range": "± 1070.6498280562741"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2311686.3636363638,
            "unit": "ns",
            "range": "± 55600.80117146776"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2208100,
            "unit": "ns",
            "range": "± 40009.10081654108"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2785436.3636363638,
            "unit": "ns",
            "range": "± 65823.21594677487"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2870026,
            "unit": "ns",
            "range": "± 303698.89048998593"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7777529.545454546,
            "unit": "ns",
            "range": "± 289177.3315921657"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 174956.6037735849,
            "unit": "ns",
            "range": "± 7145.426440252702"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 167220.2380952381,
            "unit": "ns",
            "range": "± 8561.341801178338"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 143757.8947368421,
            "unit": "ns",
            "range": "± 3120.953520511477"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2875453.3333333335,
            "unit": "ns",
            "range": "± 50990.64153165289"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2497421.4285714286,
            "unit": "ns",
            "range": "± 21015.605138578794"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10631.578947368422,
            "unit": "ns",
            "range": "± 1588.5402879249184"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 54248.97959183674,
            "unit": "ns",
            "range": "± 6779.612325047041"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 47752.380952380954,
            "unit": "ns",
            "range": "± 1096.1838566677798"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 52335.10638297872,
            "unit": "ns",
            "range": "± 9792.631720332707"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2372.1649484536083,
            "unit": "ns",
            "range": "± 445.2860195147136"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9845.360824742267,
            "unit": "ns",
            "range": "± 1502.0833184389758"
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
          "id": "30938b465c34003a3ea9268ed23166a34acc301b",
          "message": "Merge pull request #3642 from greymistcube/feature/mocks\n\n✨ Mocks",
          "timestamp": "2024-03-22T19:00:38+09:00",
          "tree_id": "031a5cb565d418e6075c81a74d21d70109ec35ae",
          "url": "https://github.com/planetarium/libplanet/commit/30938b465c34003a3ea9268ed23166a34acc301b"
        },
        "date": 1711102217577,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1037163,
            "unit": "ns",
            "range": "± 144751.78312608734"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1756346.2962962964,
            "unit": "ns",
            "range": "± 73715.85864800356"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1578523,
            "unit": "ns",
            "range": "± 177115.14137430603"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6869069.811320755,
            "unit": "ns",
            "range": "± 285397.00997362746"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 38165.625,
            "unit": "ns",
            "range": "± 5552.122934423135"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4878664.285714285,
            "unit": "ns",
            "range": "± 41715.64191307357"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13382435.714285715,
            "unit": "ns",
            "range": "± 173510.32603784202"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33401584.210526317,
            "unit": "ns",
            "range": "± 659098.5563321045"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 67962053.33333333,
            "unit": "ns",
            "range": "± 883688.7508511989"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 133046100,
            "unit": "ns",
            "range": "± 1062839.613054069"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3344059.347098214,
            "unit": "ns",
            "range": "± 8226.69040659838"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1047893.8020833334,
            "unit": "ns",
            "range": "± 4478.188672076239"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 739337.28515625,
            "unit": "ns",
            "range": "± 2182.598669312122"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1946702.7473958333,
            "unit": "ns",
            "range": "± 2836.5795973488925"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 602942.4934895834,
            "unit": "ns",
            "range": "± 1417.1361031532488"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 576149.5884486607,
            "unit": "ns",
            "range": "± 1610.5935002143785"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2143307.5,
            "unit": "ns",
            "range": "± 76028.58904756882"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2305800,
            "unit": "ns",
            "range": "± 48095.27581328082"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2874595.8333333335,
            "unit": "ns",
            "range": "± 73808.85701044562"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2882564.8936170214,
            "unit": "ns",
            "range": "± 163826.3864074463"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7777116.326530612,
            "unit": "ns",
            "range": "± 257276.870435771"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 183565.38461538462,
            "unit": "ns",
            "range": "± 9412.506558843916"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 177687.5,
            "unit": "ns",
            "range": "± 7552.77342197132"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 147566.66666666666,
            "unit": "ns",
            "range": "± 1941.1024671250066"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2927642.8571428573,
            "unit": "ns",
            "range": "± 30754.87364219292"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2540365.789473684,
            "unit": "ns",
            "range": "± 54358.25873220794"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11578.021978021978,
            "unit": "ns",
            "range": "± 1399.1904165387286"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 58051.54639175258,
            "unit": "ns",
            "range": "± 7380.366880589082"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 46227.450980392154,
            "unit": "ns",
            "range": "± 1894.4211180592927"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 65883.50515463918,
            "unit": "ns",
            "range": "± 14884.329570141117"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3142.8571428571427,
            "unit": "ns",
            "range": "± 720.3950806085148"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11557.575757575758,
            "unit": "ns",
            "range": "± 1969.8798735306177"
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
          "id": "81ddb0a52b2ea66034848270f3d8a6630432585b",
          "message": "Merge pull request #3707 from greymistcube/release/4.2.0\n\n🚀 Release 4.2.0",
          "timestamp": "2024-03-22T20:09:24+09:00",
          "tree_id": "3c298f46a53aa9d2b54bc5e0fc9f400afb20a4cf",
          "url": "https://github.com/planetarium/libplanet/commit/81ddb0a52b2ea66034848270f3d8a6630432585b"
        },
        "date": 1711106359094,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1023062.2448979592,
            "unit": "ns",
            "range": "± 160030.2474729346"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1817380.2325581396,
            "unit": "ns",
            "range": "± 94271.13564827714"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1494551.5463917525,
            "unit": "ns",
            "range": "± 121657.38615866593"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7512451.685393258,
            "unit": "ns",
            "range": "± 432919.9955251966"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36326.666666666664,
            "unit": "ns",
            "range": "± 3291.316460771255"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5345368.75,
            "unit": "ns",
            "range": "± 104259.1304954471"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13655100,
            "unit": "ns",
            "range": "± 197211.3671504088"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33695814.28571428,
            "unit": "ns",
            "range": "± 367947.7886396862"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 68203197.36842105,
            "unit": "ns",
            "range": "± 1435176.4105148348"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 133954173.33333333,
            "unit": "ns",
            "range": "± 1994247.6277199546"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3376559.6354166665,
            "unit": "ns",
            "range": "± 25863.834927710403"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1062727.4135044643,
            "unit": "ns",
            "range": "± 4654.059433406883"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 765593.2198660715,
            "unit": "ns",
            "range": "± 2457.575645889804"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1942844.2578125,
            "unit": "ns",
            "range": "± 6627.871613873956"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 612013.57421875,
            "unit": "ns",
            "range": "± 2602.956976273216"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 581322.7678571428,
            "unit": "ns",
            "range": "± 1682.5171926455373"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2154322.727272727,
            "unit": "ns",
            "range": "± 47132.45703857912"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2297919.1919191917,
            "unit": "ns",
            "range": "± 169473.8651074035"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2882496.296296296,
            "unit": "ns",
            "range": "± 120563.35367836572"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2909119.1919191917,
            "unit": "ns",
            "range": "± 171882.44480456228"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8507831.034482758,
            "unit": "ns",
            "range": "± 579165.8173836414"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 180662.92134831462,
            "unit": "ns",
            "range": "± 10486.532293878745"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 172244.94382022473,
            "unit": "ns",
            "range": "± 11060.946976103429"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 149521.73913043478,
            "unit": "ns",
            "range": "± 5515.711419551255"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2897786.206896552,
            "unit": "ns",
            "range": "± 78919.14815691314"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2542030.434782609,
            "unit": "ns",
            "range": "± 62162.54670972494"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11004.301075268817,
            "unit": "ns",
            "range": "± 1548.7662676616696"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 56289,
            "unit": "ns",
            "range": "± 7232.919901604767"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44297.4358974359,
            "unit": "ns",
            "range": "± 1553.3473498235282"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 58800,
            "unit": "ns",
            "range": "± 13425.965855005923"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2457.8947368421054,
            "unit": "ns",
            "range": "± 420.88532510281"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9774.117647058823,
            "unit": "ns",
            "range": "± 1089.3590231106057"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0e9ea5bd1ebbf2d303391caeee97ac71c23507c1",
          "message": "Merge pull request #3708 from greymistcube/prepare/4.3.0\n\n🔧 Prepare 4.3.0",
          "timestamp": "2024-03-22T22:19:38+09:00",
          "tree_id": "3bd385ff7052df8da1bc5a68e3098fe6e3e329ce",
          "url": "https://github.com/planetarium/libplanet/commit/0e9ea5bd1ebbf2d303391caeee97ac71c23507c1"
        },
        "date": 1711114269623,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 981119.191919192,
            "unit": "ns",
            "range": "± 113537.10863006438"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1706379.5918367347,
            "unit": "ns",
            "range": "± 56295.11146476158"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1496324.7422680412,
            "unit": "ns",
            "range": "± 134767.24072678035"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6686271.428571428,
            "unit": "ns",
            "range": "± 218653.14672199116"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34951.19047619047,
            "unit": "ns",
            "range": "± 2022.3149116386192"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5001680,
            "unit": "ns",
            "range": "± 26473.98183662054"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13047464.285714285,
            "unit": "ns",
            "range": "± 126475.51059481746"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32572007.692307692,
            "unit": "ns",
            "range": "± 159853.77412674404"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 64920426.666666664,
            "unit": "ns",
            "range": "± 730166.9099465904"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 131851523.07692307,
            "unit": "ns",
            "range": "± 821780.9573865026"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3309725.0520833335,
            "unit": "ns",
            "range": "± 9504.866404661054"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1070422.642299107,
            "unit": "ns",
            "range": "± 1958.8768662385046"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 748087.6236979166,
            "unit": "ns",
            "range": "± 1866.301777234894"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1972577.7864583333,
            "unit": "ns",
            "range": "± 5520.836365852997"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 624051.5973772322,
            "unit": "ns",
            "range": "± 793.0131766200639"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 557984.3880208334,
            "unit": "ns",
            "range": "± 1036.8049794285935"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2171110.8695652173,
            "unit": "ns",
            "range": "± 80816.96254365546"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2276998.113207547,
            "unit": "ns",
            "range": "± 93664.31364301831"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2745404.1666666665,
            "unit": "ns",
            "range": "± 70563.66523536936"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2762193.6363636362,
            "unit": "ns",
            "range": "± 116793.2468298168"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7750254.054054054,
            "unit": "ns",
            "range": "± 237661.1810897964"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 175164.19753086418,
            "unit": "ns",
            "range": "± 9049.769453444314"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 168525.33333333334,
            "unit": "ns",
            "range": "± 8352.279076142378"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 149012.28070175438,
            "unit": "ns",
            "range": "± 5989.158961211219"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2898328.5714285714,
            "unit": "ns",
            "range": "± 46844.00345124934"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2486571.4285714286,
            "unit": "ns",
            "range": "± 33413.06581313614"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10611.458333333334,
            "unit": "ns",
            "range": "± 1706.5736551203631"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52862.10526315789,
            "unit": "ns",
            "range": "± 4127.880785104609"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43213.333333333336,
            "unit": "ns",
            "range": "± 768.920083778604"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 55135.051546391755,
            "unit": "ns",
            "range": "± 12452.058407792074"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2359.183673469388,
            "unit": "ns",
            "range": "± 483.7752598043204"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10333.333333333334,
            "unit": "ns",
            "range": "± 1247.0315630721805"
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
          "id": "757ba26ea62bc3ef51199853d452e4b119a10e5a",
          "message": "Merge pull request #3710 from xiaoxianBoy/fix-typos\n\nchore: fix typos",
          "timestamp": "2024-03-25T17:49:36+09:00",
          "tree_id": "3ac7612ac12e4b8910b4ff8d747654a7bd720f66",
          "url": "https://github.com/planetarium/libplanet/commit/757ba26ea62bc3ef51199853d452e4b119a10e5a"
        },
        "date": 1711357199617,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1014411.3402061856,
            "unit": "ns",
            "range": "± 98362.2798598467"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1776618.1818181819,
            "unit": "ns",
            "range": "± 84574.06708303976"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1562068.686868687,
            "unit": "ns",
            "range": "± 173418.31850515693"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6724270.9677419355,
            "unit": "ns",
            "range": "± 152433.92709312536"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36636.31578947369,
            "unit": "ns",
            "range": "± 4234.197417640862"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5145773.333333333,
            "unit": "ns",
            "range": "± 34377.57713283194"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13431464.285714285,
            "unit": "ns",
            "range": "± 126409.68565095645"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32892142.85714286,
            "unit": "ns",
            "range": "± 438913.64441396354"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 67109320,
            "unit": "ns",
            "range": "± 1247294.338157598"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 133767842.85714285,
            "unit": "ns",
            "range": "± 1186159.6946022492"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3301702.8385416665,
            "unit": "ns",
            "range": "± 12132.93668159483"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1070422.446986607,
            "unit": "ns",
            "range": "± 3194.7148946363536"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 731253.5026041666,
            "unit": "ns",
            "range": "± 1501.7127820779724"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2010831.1197916667,
            "unit": "ns",
            "range": "± 7346.126275799929"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 620994.6354166666,
            "unit": "ns",
            "range": "± 2234.4961446312536"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 556151.5364583334,
            "unit": "ns",
            "range": "± 1859.945860522589"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2185385,
            "unit": "ns",
            "range": "± 50144.38390131148"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2341044.4444444445,
            "unit": "ns",
            "range": "± 96300.85261219901"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2842709.090909091,
            "unit": "ns",
            "range": "± 68415.43204563823"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2855473.8636363638,
            "unit": "ns",
            "range": "± 156719.3057772128"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7777500,
            "unit": "ns",
            "range": "± 213572.20740952643"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 176733.33333333334,
            "unit": "ns",
            "range": "± 8153.938117701731"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 172593.47826086957,
            "unit": "ns",
            "range": "± 6596.1066689681265"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 144635,
            "unit": "ns",
            "range": "± 3233.2605345394804"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2863707.1428571427,
            "unit": "ns",
            "range": "± 40340.84519700586"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2592020,
            "unit": "ns",
            "range": "± 42402.092266436906"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11280.41237113402,
            "unit": "ns",
            "range": "± 1662.743664803857"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 55293.15789473684,
            "unit": "ns",
            "range": "± 5356.754587326789"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44907.40740740741,
            "unit": "ns",
            "range": "± 1883.1779494721304"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 62490.721649484534,
            "unit": "ns",
            "range": "± 13684.937602420061"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2590.625,
            "unit": "ns",
            "range": "± 527.5720205262077"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11247.916666666666,
            "unit": "ns",
            "range": "± 1555.8364930102568"
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
          "id": "200a0686c37ec092e96f7582fbc6c472d71babd2",
          "message": "Merge pull request #3713 from greymistcube/refactor/add-info-to-action-context\n\n✨ ♻️ Added `Txs` property to `IActionContext`",
          "timestamp": "2024-03-28T14:27:37+09:00",
          "tree_id": "e833efb9d625c8f530880a2800a40c432cc015d4",
          "url": "https://github.com/planetarium/libplanet/commit/200a0686c37ec092e96f7582fbc6c472d71babd2"
        },
        "date": 1711604209754,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 923001,
            "unit": "ns",
            "range": "± 83998.26897567051"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1637418.9189189188,
            "unit": "ns",
            "range": "± 55535.453330071745"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1411757.3684210526,
            "unit": "ns",
            "range": "± 106811.88200110577"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6667181.25,
            "unit": "ns",
            "range": "± 308743.0672057578"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33777.90697674418,
            "unit": "ns",
            "range": "± 2887.474009571472"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5016840,
            "unit": "ns",
            "range": "± 21973.549033846517"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 12907526.666666666,
            "unit": "ns",
            "range": "± 145941.02266065596"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 31295480,
            "unit": "ns",
            "range": "± 122851.39803844318"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 64120535.71428572,
            "unit": "ns",
            "range": "± 217538.35950733576"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 127778213.33333333,
            "unit": "ns",
            "range": "± 786016.7554254322"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3316725.5022321427,
            "unit": "ns",
            "range": "± 3147.567243446177"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1052113.4765625,
            "unit": "ns",
            "range": "± 1973.4118527792223"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 734023.5281808035,
            "unit": "ns",
            "range": "± 923.9452466823213"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1895680.5598958333,
            "unit": "ns",
            "range": "± 1262.6946821021886"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 643873.88671875,
            "unit": "ns",
            "range": "± 1081.6928733334082"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 559399.2563100961,
            "unit": "ns",
            "range": "± 445.7247632269005"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2138959.2592592593,
            "unit": "ns",
            "range": "± 59843.740494334714"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2167321.875,
            "unit": "ns",
            "range": "± 34796.92917833319"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2696613.3333333335,
            "unit": "ns",
            "range": "± 39320.675525854385"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2877025,
            "unit": "ns",
            "range": "± 34455.64012413115"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7645741.860465116,
            "unit": "ns",
            "range": "± 282207.9967755615"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 170073.4693877551,
            "unit": "ns",
            "range": "± 6429.968102247349"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 160655.35714285713,
            "unit": "ns",
            "range": "± 6037.125132886502"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 143130.55555555556,
            "unit": "ns",
            "range": "± 4251.844604366737"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2720760,
            "unit": "ns",
            "range": "± 29955.796004875487"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2533393.3333333335,
            "unit": "ns",
            "range": "± 43195.195940995014"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 8917.045454545454,
            "unit": "ns",
            "range": "± 667.5089376316857"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 47866.29213483146,
            "unit": "ns",
            "range": "± 3146.388399282896"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 42363.04347826087,
            "unit": "ns",
            "range": "± 1393.055585658483"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 44002.10526315789,
            "unit": "ns",
            "range": "± 6437.506107369439"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2123.157894736842,
            "unit": "ns",
            "range": "± 230.84149096938256"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 8614.772727272728,
            "unit": "ns",
            "range": "± 646.7495691723809"
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
          "id": "c8c03a16a0d34aa8b3274fef5cbfb64298084a41",
          "message": "Merge pull request #3714 from greymistcube/remove/total-updated-fungible-assets\n\n🧹 Removed `TotalUpdatedFungibleAssets` from `IWorld`",
          "timestamp": "2024-03-28T15:38:23+09:00",
          "tree_id": "33555845d43c83cb9f31a0f0daf13075fab4237b",
          "url": "https://github.com/planetarium/libplanet/commit/c8c03a16a0d34aa8b3274fef5cbfb64298084a41"
        },
        "date": 1711608487924,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 988347.8723404255,
            "unit": "ns",
            "range": "± 115336.36150731897"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1698927.2727272727,
            "unit": "ns",
            "range": "± 62441.71370961608"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1557771.7391304348,
            "unit": "ns",
            "range": "± 113508.6561312502"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6756740.625,
            "unit": "ns",
            "range": "± 205465.54512096386"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48051.02040816326,
            "unit": "ns",
            "range": "± 7780.152449914405"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5477007.142857143,
            "unit": "ns",
            "range": "± 25939.67748704421"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14523393.333333334,
            "unit": "ns",
            "range": "± 126102.72720890619"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 35093466.666666664,
            "unit": "ns",
            "range": "± 259546.40286102064"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 71602564.28571428,
            "unit": "ns",
            "range": "± 427503.3721992825"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 142463020,
            "unit": "ns",
            "range": "± 852779.4658811687"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3597661.4118303573,
            "unit": "ns",
            "range": "± 39367.11310796008"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1089483.775111607,
            "unit": "ns",
            "range": "± 3410.141370029296"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 751486.484375,
            "unit": "ns",
            "range": "± 1787.383981344612"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2023459.7935267857,
            "unit": "ns",
            "range": "± 19283.15706353131"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 628280.9640066965,
            "unit": "ns",
            "range": "± 493.140897364303"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 573396.6517857143,
            "unit": "ns",
            "range": "± 1038.0330392607761"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2439032,
            "unit": "ns",
            "range": "± 59937.58364610083"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2492675,
            "unit": "ns",
            "range": "± 93347.36282862426"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3083530,
            "unit": "ns",
            "range": "± 69178.46561801698"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3111394.6808510637,
            "unit": "ns",
            "range": "± 176210.119787396"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7963964.705882353,
            "unit": "ns",
            "range": "± 143664.79900850204"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 211616.04938271604,
            "unit": "ns",
            "range": "± 11029.975711556708"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 209134.52380952382,
            "unit": "ns",
            "range": "± 11133.932656389505"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 180147.91666666666,
            "unit": "ns",
            "range": "± 10807.239086217473"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3027307.1428571427,
            "unit": "ns",
            "range": "± 23516.89128741671"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2712570,
            "unit": "ns",
            "range": "± 40406.24421334618"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17417.391304347828,
            "unit": "ns",
            "range": "± 1563.7099233295023"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 89220.52631578948,
            "unit": "ns",
            "range": "± 5754.163593104996"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 76776.28865979382,
            "unit": "ns",
            "range": "± 5993.221399976886"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 81469.27710843373,
            "unit": "ns",
            "range": "± 8578.140935545378"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4953.6082474226805,
            "unit": "ns",
            "range": "± 825.7650311062695"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18447.872340425532,
            "unit": "ns",
            "range": "± 2336.9278943792415"
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
          "id": "b15c7261184cdbdbd9cb5850914a0999f9137ab8",
          "message": "Merge pull request #3715 from greymistcube/refactor/iworld-extensions\n\n♻️ 🚚 Moved `Currency` and `Validator` related methods from `IWorldState` and `IWorld` to an extension `class`",
          "timestamp": "2024-03-29T08:57:43+09:00",
          "tree_id": "e5b1e33019de8451e46cbbf3bb85c042d0273f24",
          "url": "https://github.com/planetarium/libplanet/commit/b15c7261184cdbdbd9cb5850914a0999f9137ab8"
        },
        "date": 1711670785244,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 931063.5416666666,
            "unit": "ns",
            "range": "± 92001.35825060487"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1676643.8596491227,
            "unit": "ns",
            "range": "± 71863.70288247016"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1464041.836734694,
            "unit": "ns",
            "range": "± 139044.72314966464"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6791112.6760563385,
            "unit": "ns",
            "range": "± 332793.8816958103"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33822.41379310345,
            "unit": "ns",
            "range": "± 1482.7715991497168"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4964333.333333333,
            "unit": "ns",
            "range": "± 21725.87879750344"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 12897907.142857144,
            "unit": "ns",
            "range": "± 83872.60911906556"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 31766935.714285713,
            "unit": "ns",
            "range": "± 145446.9589133539"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 63367760,
            "unit": "ns",
            "range": "± 304451.9826085646"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 130107671.05263157,
            "unit": "ns",
            "range": "± 2809240.568706336"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3339090.066964286,
            "unit": "ns",
            "range": "± 6337.204675407793"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1060529.3880208333,
            "unit": "ns",
            "range": "± 2067.181490544869"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 731956.4322916666,
            "unit": "ns",
            "range": "± 1609.535761986586"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1928969.3080357143,
            "unit": "ns",
            "range": "± 9872.00178319447"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 612559.9479166666,
            "unit": "ns",
            "range": "± 2255.6641687614524"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 582969.0690104166,
            "unit": "ns",
            "range": "± 1470.1405261310683"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2151929.0322580645,
            "unit": "ns",
            "range": "± 64702.1184277011"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2195853.06122449,
            "unit": "ns",
            "range": "± 38791.11851764963"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2774088.4615384615,
            "unit": "ns",
            "range": "± 75291.18581572788"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2847038.095238095,
            "unit": "ns",
            "range": "± 65895.67873685253"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7641426.8292682925,
            "unit": "ns",
            "range": "± 271623.5455776894"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 169706.81818181818,
            "unit": "ns",
            "range": "± 8893.76373858821"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 157485.7142857143,
            "unit": "ns",
            "range": "± 6149.070249644652"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 146053.84615384616,
            "unit": "ns",
            "range": "± 1774.173697159415"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2813623.076923077,
            "unit": "ns",
            "range": "± 26611.906916709104"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2468675,
            "unit": "ns",
            "range": "± 45127.751993645776"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9475.531914893618,
            "unit": "ns",
            "range": "± 1104.018677788547"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 50676.041666666664,
            "unit": "ns",
            "range": "± 4147.332555337395"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44250,
            "unit": "ns",
            "range": "± 1854.39305027431"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 49452.17391304348,
            "unit": "ns",
            "range": "± 12039.581956351623"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2432.2916666666665,
            "unit": "ns",
            "range": "± 266.9495484234967"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9443.617021276596,
            "unit": "ns",
            "range": "± 816.4384378003729"
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
          "id": "362de2c5404515ccb1b22a0d454c87d1db580b79",
          "message": "Merge pull request #3716 from greymistcube/refactor/dumb-action\n\n🧹 Cleanup `DumbAction`",
          "timestamp": "2024-03-29T20:27:00+09:00",
          "tree_id": "7145d7a7252499b8292eaabb2d5a56d421e6c0c3",
          "url": "https://github.com/planetarium/libplanet/commit/362de2c5404515ccb1b22a0d454c87d1db580b79"
        },
        "date": 1711712169949,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 941148.9583333334,
            "unit": "ns",
            "range": "± 91307.04359155335"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1695718.8679245282,
            "unit": "ns",
            "range": "± 70261.93864227404"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1566534.3434343433,
            "unit": "ns",
            "range": "± 165333.56089890975"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6625576.470588235,
            "unit": "ns",
            "range": "± 198213.90352546447"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 35312.5,
            "unit": "ns",
            "range": "± 2931.2353717498877"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5409807.692307692,
            "unit": "ns",
            "range": "± 19737.842736667953"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13191780,
            "unit": "ns",
            "range": "± 151952.0704508027"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32663133.333333332,
            "unit": "ns",
            "range": "± 282925.63047725527"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 63932411.538461536,
            "unit": "ns",
            "range": "± 252064.62973630903"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 132059220,
            "unit": "ns",
            "range": "± 981511.5967585042"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3300673.6886160714,
            "unit": "ns",
            "range": "± 19158.265534534872"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1038618.9174107143,
            "unit": "ns",
            "range": "± 2242.369225730712"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 747614.4010416666,
            "unit": "ns",
            "range": "± 2108.646564266759"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1928046.328125,
            "unit": "ns",
            "range": "± 4813.033921669018"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 590928.7955729166,
            "unit": "ns",
            "range": "± 1022.5729281664029"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 558738.57421875,
            "unit": "ns",
            "range": "± 1198.6732425831606"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2150320,
            "unit": "ns",
            "range": "± 45095.90482049282"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2274248,
            "unit": "ns",
            "range": "± 59203.421353837315"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2782916.129032258,
            "unit": "ns",
            "range": "± 82516.60074099916"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2723560,
            "unit": "ns",
            "range": "± 92864.55532851937"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7583870.212765957,
            "unit": "ns",
            "range": "± 292288.7478794048"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 172219.44444444444,
            "unit": "ns",
            "range": "± 7691.803555768444"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 161176.66666666666,
            "unit": "ns",
            "range": "± 6988.498218117592"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 144454.16666666666,
            "unit": "ns",
            "range": "± 3653.7032037987533"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2805326.6666666665,
            "unit": "ns",
            "range": "± 30787.53148984334"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2720021.4285714286,
            "unit": "ns",
            "range": "± 32081.654920181132"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9760.63829787234,
            "unit": "ns",
            "range": "± 1229.5832045909403"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52802.0618556701,
            "unit": "ns",
            "range": "± 5083.449029723883"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 42529.72972972973,
            "unit": "ns",
            "range": "± 959.1271682758887"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 49920,
            "unit": "ns",
            "range": "± 10106.397805140301"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2583.505154639175,
            "unit": "ns",
            "range": "± 510.24512335803155"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9491.836734693878,
            "unit": "ns",
            "range": "± 1224.7173853998188"
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
          "id": "ad08e71a984c56196853c85567a50b7e6ea7e374",
          "message": "Merge pull request #3717 from greymistcube/chore/cleanup\n\n🧹 Minor cleanup",
          "timestamp": "2024-03-29T20:58:16+09:00",
          "tree_id": "e2d7a8ace564d7f0e6b01893b169194ab2e4d640",
          "url": "https://github.com/planetarium/libplanet/commit/ad08e71a984c56196853c85567a50b7e6ea7e374"
        },
        "date": 1711714050991,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 960416.1616161616,
            "unit": "ns",
            "range": "± 107023.48751089182"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1669112.8205128205,
            "unit": "ns",
            "range": "± 58289.38776523463"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1459209,
            "unit": "ns",
            "range": "± 128845.44033041835"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6587947.05882353,
            "unit": "ns",
            "range": "± 182501.251527953"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36815.30612244898,
            "unit": "ns",
            "range": "± 5764.3295591202705"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5062078.571428572,
            "unit": "ns",
            "range": "± 16619.829609948963"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13378486.666666666,
            "unit": "ns",
            "range": "± 135733.36186733725"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32111380,
            "unit": "ns",
            "range": "± 209356.89691460915"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 66105626.666666664,
            "unit": "ns",
            "range": "± 627569.7223264937"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 133811813.33333333,
            "unit": "ns",
            "range": "± 929397.6550638027"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3360587.9947916665,
            "unit": "ns",
            "range": "± 11482.898902065486"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1087264.0755208333,
            "unit": "ns",
            "range": "± 3851.083747667956"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 762073.4895833334,
            "unit": "ns",
            "range": "± 3600.5375505948123"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1918442.4088541667,
            "unit": "ns",
            "range": "± 5212.87316877452"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 634643.41796875,
            "unit": "ns",
            "range": "± 1598.8433679735012"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 565183.6197916666,
            "unit": "ns",
            "range": "± 803.684384992067"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2144256.862745098,
            "unit": "ns",
            "range": "± 86095.57306831046"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2280982.5,
            "unit": "ns",
            "range": "± 80786.48937405694"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2779916.6666666665,
            "unit": "ns",
            "range": "± 46899.90354340777"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2985856.923076923,
            "unit": "ns",
            "range": "± 139561.2051767418"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7589691.891891892,
            "unit": "ns",
            "range": "± 222400.06791862773"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 177674.46808510637,
            "unit": "ns",
            "range": "± 12922.656075149755"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 167246.5909090909,
            "unit": "ns",
            "range": "± 10943.606214596095"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 142553.84615384616,
            "unit": "ns",
            "range": "± 2304.92783134143"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2806466.6666666665,
            "unit": "ns",
            "range": "± 27415.185225571266"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2517728.5714285714,
            "unit": "ns",
            "range": "± 38324.814788481744"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11518.556701030928,
            "unit": "ns",
            "range": "± 1145.4920610181766"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 56294.68085106383,
            "unit": "ns",
            "range": "± 5718.379479847708"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45450,
            "unit": "ns",
            "range": "± 1241.0479442793498"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 57193.75,
            "unit": "ns",
            "range": "± 12796.618077075142"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2790,
            "unit": "ns",
            "range": "± 445.4020416695508"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10922.340425531915,
            "unit": "ns",
            "range": "± 1586.2415343966309"
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
          "id": "ea7bae21f01aef2eafb78cb40df02c5cc09dd9fc",
          "message": "Merge pull request #3718 from greymistcube/refactor/dumb-action\n\n♻️ Overhaul `DumbAction`",
          "timestamp": "2024-04-01T10:34:00+09:00",
          "tree_id": "87a583c1d570c6bc2afb4f2b8f7a1ca01ed70eaa",
          "url": "https://github.com/planetarium/libplanet/commit/ea7bae21f01aef2eafb78cb40df02c5cc09dd9fc"
        },
        "date": 1711935907724,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1036593.9393939395,
            "unit": "ns",
            "range": "± 117669.70880841643"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1824025.3012048192,
            "unit": "ns",
            "range": "± 97374.9915850505"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1631298,
            "unit": "ns",
            "range": "± 192487.42316517117"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6737123.9130434785,
            "unit": "ns",
            "range": "± 257148.64372773675"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 38312.63157894737,
            "unit": "ns",
            "range": "± 4813.3290577459065"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5158278.571428572,
            "unit": "ns",
            "range": "± 69586.45069896238"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13979200,
            "unit": "ns",
            "range": "± 135492.25779754695"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 34521057.14285714,
            "unit": "ns",
            "range": "± 372283.06324062636"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 68420320,
            "unit": "ns",
            "range": "± 482187.5334644929"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 136727960,
            "unit": "ns",
            "range": "± 1036443.3089037859"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3339354.921875,
            "unit": "ns",
            "range": "± 4734.777290745025"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1082248.3677455357,
            "unit": "ns",
            "range": "± 1492.8644598112603"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 757608.1333705357,
            "unit": "ns",
            "range": "± 950.5610322358772"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1979083.1473214286,
            "unit": "ns",
            "range": "± 2640.175844650194"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 630289.0625,
            "unit": "ns",
            "range": "± 907.8079156849508"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 571728.5677083334,
            "unit": "ns",
            "range": "± 1642.0600711491554"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2200104.6511627906,
            "unit": "ns",
            "range": "± 47549.36759625712"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2380977.5,
            "unit": "ns",
            "range": "± 77653.94136149406"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2883260,
            "unit": "ns",
            "range": "± 53724.865219534455"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2930591.6666666665,
            "unit": "ns",
            "range": "± 75042.97271312743"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7806335.483870967,
            "unit": "ns",
            "range": "± 204435.40063369178"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 185449.20634920636,
            "unit": "ns",
            "range": "± 8491.910249321978"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 173500,
            "unit": "ns",
            "range": "± 7607.342943936908"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 149883.33333333334,
            "unit": "ns",
            "range": "± 4461.411817160443"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2882753.3333333335,
            "unit": "ns",
            "range": "± 37726.55121617488"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2558386.6666666665,
            "unit": "ns",
            "range": "± 35598.01091286395"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13291.208791208792,
            "unit": "ns",
            "range": "± 1740.7947324042261"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61108.79120879121,
            "unit": "ns",
            "range": "± 6216.45930577578"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50470.87912087912,
            "unit": "ns",
            "range": "± 3949.669929486837"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 64022.72727272727,
            "unit": "ns",
            "range": "± 9936.982211164253"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3003.2608695652175,
            "unit": "ns",
            "range": "± 606.8204084589712"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12029.787234042553,
            "unit": "ns",
            "range": "± 1281.7016400195587"
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
          "id": "421ca95ad9e5ae172247b8b16b9057487bf47028",
          "message": "Merge pull request #3719 from greymistcube/refactor/test-util-bytes-equality\n\n♻️ Changed `AssertBytesEqual()` overloads and use more hex representation",
          "timestamp": "2024-04-01T12:48:45+09:00",
          "tree_id": "407de50a21cfd9ecda31c72e8385cd67126ba4b7",
          "url": "https://github.com/planetarium/libplanet/commit/421ca95ad9e5ae172247b8b16b9057487bf47028"
        },
        "date": 1711943884163,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1045467.6767676767,
            "unit": "ns",
            "range": "± 122752.54253843201"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1817148.2142857143,
            "unit": "ns",
            "range": "± 77721.87709114743"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1521402.197802198,
            "unit": "ns",
            "range": "± 82068.65415684601"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6801323.529411765,
            "unit": "ns",
            "range": "± 179534.66966412976"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36694.444444444445,
            "unit": "ns",
            "range": "± 3567.561755443257"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5277250,
            "unit": "ns",
            "range": "± 114408.74552511962"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13798657.692307692,
            "unit": "ns",
            "range": "± 54369.29987806326"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 35813240,
            "unit": "ns",
            "range": "± 301765.98501866596"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 69509157.14285715,
            "unit": "ns",
            "range": "± 596224.1792045437"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 142790323.07692307,
            "unit": "ns",
            "range": "± 482104.25420553685"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3397990.2864583335,
            "unit": "ns",
            "range": "± 8566.50997437706"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1069808.9713541667,
            "unit": "ns",
            "range": "± 1328.1272228404018"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 755816.3295200893,
            "unit": "ns",
            "range": "± 1488.595189805571"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1952641.685267857,
            "unit": "ns",
            "range": "± 3636.996073908555"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 639861.9559151785,
            "unit": "ns",
            "range": "± 1061.920336346867"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 563890.9598214285,
            "unit": "ns",
            "range": "± 672.652622359229"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2215335.714285714,
            "unit": "ns",
            "range": "± 75689.77384106454"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2312841.6666666665,
            "unit": "ns",
            "range": "± 63521.30969772495"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2854955.3191489363,
            "unit": "ns",
            "range": "± 98989.6433065659"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2963909.090909091,
            "unit": "ns",
            "range": "± 110102.23751646049"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7713388,
            "unit": "ns",
            "range": "± 127769.57553867562"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 186294.54545454544,
            "unit": "ns",
            "range": "± 7545.67372202058"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 179122.41379310345,
            "unit": "ns",
            "range": "± 7801.305403662256"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 147527.90697674418,
            "unit": "ns",
            "range": "± 5446.201191630003"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2893252.6315789474,
            "unit": "ns",
            "range": "± 49473.083236364815"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2562350,
            "unit": "ns",
            "range": "± 31943.405482918595"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13329.670329670329,
            "unit": "ns",
            "range": "± 1410.555013342424"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60105.37634408602,
            "unit": "ns",
            "range": "± 5172.804419591694"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50640.425531914894,
            "unit": "ns",
            "range": "± 4039.3313390260378"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 66892.92929292929,
            "unit": "ns",
            "range": "± 15974.215528151843"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2975.257731958763,
            "unit": "ns",
            "range": "± 563.1072514470955"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11747.31182795699,
            "unit": "ns",
            "range": "± 1654.7422890017506"
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
          "id": "a763a2bd7072f072d207e8bd859df1389f5102eb",
          "message": "Merge pull request #3720 from greymistcube/refactor/dumb-action\n\n♻️ Refactor `DumbAction`",
          "timestamp": "2024-04-02T08:53:21+09:00",
          "tree_id": "4a1f60ea587825d5c1cadd8ec7f90693d651c6dd",
          "url": "https://github.com/planetarium/libplanet/commit/a763a2bd7072f072d207e8bd859df1389f5102eb"
        },
        "date": 1712016175562,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 986746.4646464647,
            "unit": "ns",
            "range": "± 86232.58216689127"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1778082.2222222222,
            "unit": "ns",
            "range": "± 62024.70654684488"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1555413.1313131314,
            "unit": "ns",
            "range": "± 137530.71912616518"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6743043.58974359,
            "unit": "ns",
            "range": "± 235978.99972898103"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 37354.255319148935,
            "unit": "ns",
            "range": "± 4597.279815015837"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5307780,
            "unit": "ns",
            "range": "± 96525.54214151965"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13722420,
            "unit": "ns",
            "range": "± 180743.53258534195"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 34551873.333333336,
            "unit": "ns",
            "range": "± 394557.7822370375"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 68566738.46153846,
            "unit": "ns",
            "range": "± 378785.67937216937"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 139467671.42857143,
            "unit": "ns",
            "range": "± 837877.3349074721"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3396333.125,
            "unit": "ns",
            "range": "± 6778.72439428789"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1064490.053013393,
            "unit": "ns",
            "range": "± 1723.7737483312221"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 744864.6028645834,
            "unit": "ns",
            "range": "± 1302.5153332494513"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1931838.8541666667,
            "unit": "ns",
            "range": "± 3454.06915341543"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 618941.953125,
            "unit": "ns",
            "range": "± 652.5772841546111"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 576682.734375,
            "unit": "ns",
            "range": "± 950.0490557402751"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2299207.1428571427,
            "unit": "ns",
            "range": "± 83892.289080984"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2334509.2592592593,
            "unit": "ns",
            "range": "± 97200.25092854969"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2901470.909090909,
            "unit": "ns",
            "range": "± 93201.23324714044"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3006038.383838384,
            "unit": "ns",
            "range": "± 295805.48204102746"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7890429.487179487,
            "unit": "ns",
            "range": "± 243333.94443751482"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 185334.61538461538,
            "unit": "ns",
            "range": "± 8630.726916974296"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 178326.66666666666,
            "unit": "ns",
            "range": "± 11364.136867425215"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 149096.22641509434,
            "unit": "ns",
            "range": "± 6084.499924592468"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2865076.923076923,
            "unit": "ns",
            "range": "± 43227.40554027722"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2542421.4285714286,
            "unit": "ns",
            "range": "± 27738.398228155434"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12907.368421052632,
            "unit": "ns",
            "range": "± 1975.3934219118444"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61888.04347826087,
            "unit": "ns",
            "range": "± 5750.8115507808425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 48556.666666666664,
            "unit": "ns",
            "range": "± 2169.0712428357847"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 59562.19512195122,
            "unit": "ns",
            "range": "± 6558.787155344478"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2936.842105263158,
            "unit": "ns",
            "range": "± 615.5870112510923"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11707.954545454546,
            "unit": "ns",
            "range": "± 1008.0391333980343"
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
          "id": "1ea676dfe55226895127f404097c0fb64399b925",
          "message": "Merge pull request #3721 from greymistcube/refactor/dumb-action\n\n♻️ Add mint and burn functionality to `DumbAction`",
          "timestamp": "2024-04-02T18:27:19+09:00",
          "tree_id": "581ef3be9c0e05074ee9c4ffb20168dd9eff71a3",
          "url": "https://github.com/planetarium/libplanet/commit/1ea676dfe55226895127f404097c0fb64399b925"
        },
        "date": 1712050596483,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 998258.1632653062,
            "unit": "ns",
            "range": "± 96074.82363656888"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1827740.3846153845,
            "unit": "ns",
            "range": "± 74416.9210665534"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1572390,
            "unit": "ns",
            "range": "± 131598.0408039358"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6948933.333333333,
            "unit": "ns",
            "range": "± 292513.93387227546"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36158.69565217391,
            "unit": "ns",
            "range": "± 3934.5511542583095"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5031400,
            "unit": "ns",
            "range": "± 33100.237375065975"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13380014.285714285,
            "unit": "ns",
            "range": "± 107932.45649402762"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33534926.666666668,
            "unit": "ns",
            "range": "± 352357.7858343636"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 66633760,
            "unit": "ns",
            "range": "± 946237.6127137864"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 134405926.66666666,
            "unit": "ns",
            "range": "± 1311887.6386264765"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3352573.270089286,
            "unit": "ns",
            "range": "± 4955.067960435281"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1069163.2114955357,
            "unit": "ns",
            "range": "± 1213.1525051709334"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 759768.4500558035,
            "unit": "ns",
            "range": "± 1399.705619811622"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1964798.1370192308,
            "unit": "ns",
            "range": "± 2057.3052858807564"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 615770.2473958334,
            "unit": "ns",
            "range": "± 934.5441667227187"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 570661.796875,
            "unit": "ns",
            "range": "± 2138.304577669395"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2266360.2040816327,
            "unit": "ns",
            "range": "± 90483.74449981324"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2396642.5,
            "unit": "ns",
            "range": "± 80729.64024509562"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2975864.285714286,
            "unit": "ns",
            "range": "± 52414.96567177762"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2958663.6363636362,
            "unit": "ns",
            "range": "± 73962.84885916466"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7904964.705882353,
            "unit": "ns",
            "range": "± 218280.29226044394"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 184952.05479452055,
            "unit": "ns",
            "range": "± 8727.751231131157"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 172184.41558441558,
            "unit": "ns",
            "range": "± 7012.640184077099"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 150654.54545454544,
            "unit": "ns",
            "range": "± 5651.19680863964"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2919000,
            "unit": "ns",
            "range": "± 29706.40956478533"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2585528.5714285714,
            "unit": "ns",
            "range": "± 27582.838270072338"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12168.131868131868,
            "unit": "ns",
            "range": "± 1499.9169696189574"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59487.234042553195,
            "unit": "ns",
            "range": "± 5476.9160548174195"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 46533.333333333336,
            "unit": "ns",
            "range": "± 2494.999014092247"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 67443.43434343435,
            "unit": "ns",
            "range": "± 15688.499372939621"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2898.913043478261,
            "unit": "ns",
            "range": "± 512.1586647221504"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12074.468085106382,
            "unit": "ns",
            "range": "± 1663.3905114536822"
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
          "id": "438df37e9ef7b1b76cc81331e1c1cde526e10e0b",
          "message": "Merge pull request #3722 from greymistcube/refactor/random-test\n\n♻️ Changed `RandomAction` to `ContextRecordingAction`",
          "timestamp": "2024-04-02T19:01:15+09:00",
          "tree_id": "8ac4897b6fdb0cba78832f4cd134cac834f7fdee",
          "url": "https://github.com/planetarium/libplanet/commit/438df37e9ef7b1b76cc81331e1c1cde526e10e0b"
        },
        "date": 1712052771970,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 965651.0204081633,
            "unit": "ns",
            "range": "± 107108.37391088816"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1681986.6666666667,
            "unit": "ns",
            "range": "± 62925.94348626299"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1447288.2978723405,
            "unit": "ns",
            "range": "± 111660.88335823081"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6482317.857142857,
            "unit": "ns",
            "range": "± 166353.1630432597"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 35288.29787234042,
            "unit": "ns",
            "range": "± 3698.6732984115424"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5248396.666666667,
            "unit": "ns",
            "range": "± 25029.236238180874"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 12814293.333333334,
            "unit": "ns",
            "range": "± 44242.71476213694"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32449913.333333332,
            "unit": "ns",
            "range": "± 373150.674022987"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 67482157.14285715,
            "unit": "ns",
            "range": "± 463558.04833464406"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 136022200,
            "unit": "ns",
            "range": "± 601759.2256993537"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3279333.112980769,
            "unit": "ns",
            "range": "± 3990.640973793574"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1076144.8521205357,
            "unit": "ns",
            "range": "± 1390.3220608797726"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 729224.1489955357,
            "unit": "ns",
            "range": "± 1659.1349797402088"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1949222.4051339286,
            "unit": "ns",
            "range": "± 2886.2337432855634"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 594815.3776041666,
            "unit": "ns",
            "range": "± 1037.6194803814774"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 573473.28125,
            "unit": "ns",
            "range": "± 2219.492234912263"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2090592,
            "unit": "ns",
            "range": "± 41261.03811911022"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2249319.0476190476,
            "unit": "ns",
            "range": "± 99332.15516987056"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2820844.4444444445,
            "unit": "ns",
            "range": "± 60242.54137110811"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2835251.4285714286,
            "unit": "ns",
            "range": "± 83310.26831503239"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7670313.513513514,
            "unit": "ns",
            "range": "± 243618.9740856293"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 172227.39726027398,
            "unit": "ns",
            "range": "± 8446.86431421567"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 161869.38775510204,
            "unit": "ns",
            "range": "± 5938.265883292888"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 143394.11764705883,
            "unit": "ns",
            "range": "± 2890.38721200017"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2790900,
            "unit": "ns",
            "range": "± 34547.23474565553"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2396361.5384615385,
            "unit": "ns",
            "range": "± 18702.162907960603"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9758.064516129032,
            "unit": "ns",
            "range": "± 1119.7168295605466"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 51130.208333333336,
            "unit": "ns",
            "range": "± 4878.354334073319"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44733.333333333336,
            "unit": "ns",
            "range": "± 1180.3954139750515"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 48434.04255319149,
            "unit": "ns",
            "range": "± 8821.47371677795"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2462.1052631578946,
            "unit": "ns",
            "range": "± 373.64761740613466"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9131.460674157302,
            "unit": "ns",
            "range": "± 866.6281977266807"
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
          "id": "03c1a63b7ab259350002a9031c78a30c64dcaf3e",
          "message": "Merge pull request #3723 from greymistcube/chore/cleanup\n\n🧹 Removed RecordRandom from DumbAction",
          "timestamp": "2024-04-03T00:56:21+09:00",
          "tree_id": "3421221604a67af3a457b2d9bdd5d6fdb44dfe0c",
          "url": "https://github.com/planetarium/libplanet/commit/03c1a63b7ab259350002a9031c78a30c64dcaf3e"
        },
        "date": 1712073943474,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1051235.0515463918,
            "unit": "ns",
            "range": "± 131984.97313554698"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1834889.189189189,
            "unit": "ns",
            "range": "± 91415.4037671383"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1584919.5652173914,
            "unit": "ns",
            "range": "± 136625.6586516848"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7061747.183098592,
            "unit": "ns",
            "range": "± 345663.19072259223"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 35477.011494252874,
            "unit": "ns",
            "range": "± 3146.932842279897"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5041420,
            "unit": "ns",
            "range": "± 80727.06396954405"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13743292.857142856,
            "unit": "ns",
            "range": "± 232376.75133377602"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33541414.285714287,
            "unit": "ns",
            "range": "± 269058.5291119984"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 68407826.66666667,
            "unit": "ns",
            "range": "± 1057848.7837295532"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 139419373.33333334,
            "unit": "ns",
            "range": "± 1663145.2017473513"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3458115.3255208335,
            "unit": "ns",
            "range": "± 15585.990467475862"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1081944.375,
            "unit": "ns",
            "range": "± 2063.689491392979"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 752526.6536458334,
            "unit": "ns",
            "range": "± 4897.678123114479"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1989341.3504464286,
            "unit": "ns",
            "range": "± 3131.751749216781"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 628754.43359375,
            "unit": "ns",
            "range": "± 1467.315319488069"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 577862.8580729166,
            "unit": "ns",
            "range": "± 2023.7835897873028"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2278965.714285714,
            "unit": "ns",
            "range": "± 72701.54518487834"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2447307.3170731706,
            "unit": "ns",
            "range": "± 88022.97538212368"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2992623.529411765,
            "unit": "ns",
            "range": "± 60043.8124352935"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3038648.3333333335,
            "unit": "ns",
            "range": "± 129703.13887667976"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7830408.108108108,
            "unit": "ns",
            "range": "± 217202.43038641574"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 186911.42857142858,
            "unit": "ns",
            "range": "± 5883.164985966383"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 177075,
            "unit": "ns",
            "range": "± 6126.273004872747"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 152255.10204081633,
            "unit": "ns",
            "range": "± 5704.642160282338"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2926250,
            "unit": "ns",
            "range": "± 29445.980527582527"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2552603.3333333335,
            "unit": "ns",
            "range": "± 41829.191219712084"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12440.963855421687,
            "unit": "ns",
            "range": "± 1037.0027335592442"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59735.22727272727,
            "unit": "ns",
            "range": "± 4632.668597963596"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51378.49462365591,
            "unit": "ns",
            "range": "± 3494.867337855603"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 70309.09090909091,
            "unit": "ns",
            "range": "± 16163.154691250216"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3103.092783505155,
            "unit": "ns",
            "range": "± 642.3351942079876"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12142.696629213484,
            "unit": "ns",
            "range": "± 1251.1710551291753"
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
          "id": "2b09e6c5623785e1b228b73e0e6c412d2a08355c",
          "message": "Merge pull request #3724 from greymistcube/chore/test-description-for-qol\n\n🧹 More descriptive currency ticker and documentation for easier testing",
          "timestamp": "2024-04-03T14:48:08+09:00",
          "tree_id": "23b3b99e5773f34063f3e1c09242ba5917cfc817",
          "url": "https://github.com/planetarium/libplanet/commit/2b09e6c5623785e1b228b73e0e6c412d2a08355c"
        },
        "date": 1712123835440,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 973407,
            "unit": "ns",
            "range": "± 114476.57627725252"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1660392.857142857,
            "unit": "ns",
            "range": "± 56567.75804289932"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1418193.5483870967,
            "unit": "ns",
            "range": "± 107533.92872712073"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6390415.384615385,
            "unit": "ns",
            "range": "± 221907.32482213518"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36781.818181818184,
            "unit": "ns",
            "range": "± 5587.474396350298"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5158607.142857143,
            "unit": "ns",
            "range": "± 57996.39861876988"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13008957.142857144,
            "unit": "ns",
            "range": "± 121497.41190206933"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 34933628.571428575,
            "unit": "ns",
            "range": "± 368693.8925837685"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 70816533.33333333,
            "unit": "ns",
            "range": "± 1085782.9102059205"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 143849428.57142857,
            "unit": "ns",
            "range": "± 1344844.1507810894"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3371943.6458333335,
            "unit": "ns",
            "range": "± 7720.586390424439"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1051634.84375,
            "unit": "ns",
            "range": "± 3905.4938238517075"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 723502.3177083334,
            "unit": "ns",
            "range": "± 964.2651181586449"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1904250.0901442308,
            "unit": "ns",
            "range": "± 1935.613163202298"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 617892.8580729166,
            "unit": "ns",
            "range": "± 1395.4054414410225"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 561751.7447916666,
            "unit": "ns",
            "range": "± 2413.7533502220826"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2252924.074074074,
            "unit": "ns",
            "range": "± 94277.44520114441"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2267560.8695652173,
            "unit": "ns",
            "range": "± 56836.33392254413"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2741045.1612903224,
            "unit": "ns",
            "range": "± 77788.17321722576"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2888600,
            "unit": "ns",
            "range": "± 40503.902945841575"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7754474.074074074,
            "unit": "ns",
            "range": "± 326378.4549025842"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 168804.2857142857,
            "unit": "ns",
            "range": "± 8197.002557744936"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 157328.125,
            "unit": "ns",
            "range": "± 7249.925423809106"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 141980.76923076922,
            "unit": "ns",
            "range": "± 3814.081197957823"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2730780.769230769,
            "unit": "ns",
            "range": "± 45193.68290324405"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2334494.4444444445,
            "unit": "ns",
            "range": "± 48824.33665369354"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 8827.586206896553,
            "unit": "ns",
            "range": "± 792.3602738202292"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 50721.64948453608,
            "unit": "ns",
            "range": "± 4989.890337892451"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 42066.666666666664,
            "unit": "ns",
            "range": "± 1347.38212712327"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 46488.88888888889,
            "unit": "ns",
            "range": "± 8695.740088779676"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2165.3061224489797,
            "unit": "ns",
            "range": "± 387.7245384214004"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 8941.489361702128,
            "unit": "ns",
            "range": "± 975.7720488328503"
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
          "id": "c000850274ad9a846d44f628b66e2561b4002830",
          "message": "Merge pull request #3726 from greymistcube/refactor/shared-currency-for-testing\n\n♻️ Shared `Currencies` for testing",
          "timestamp": "2024-04-04T10:02:44+09:00",
          "tree_id": "c95218d091f584782dc1bef9ce1fca86a42984f5",
          "url": "https://github.com/planetarium/libplanet/commit/c000850274ad9a846d44f628b66e2561b4002830"
        },
        "date": 1712193115922,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 979594.9494949495,
            "unit": "ns",
            "range": "± 97943.62953285349"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1798217.4603174604,
            "unit": "ns",
            "range": "± 82520.34263310286"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1556730.5263157894,
            "unit": "ns",
            "range": "± 126372.67166336664"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6639060.714285715,
            "unit": "ns",
            "range": "± 189601.64544387913"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 35459.09090909091,
            "unit": "ns",
            "range": "± 3378.418196269065"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5089220,
            "unit": "ns",
            "range": "± 26038.767800559006"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13203210,
            "unit": "ns",
            "range": "± 87552.64375546537"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33442350,
            "unit": "ns",
            "range": "± 264975.702079092"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 65734093.333333336,
            "unit": "ns",
            "range": "± 444406.9378182033"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 131364333.33333333,
            "unit": "ns",
            "range": "± 948182.7556411466"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3445421.875,
            "unit": "ns",
            "range": "± 22119.928111967416"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1066409.1238839286,
            "unit": "ns",
            "range": "± 2944.680369899453"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 751539.5703125,
            "unit": "ns",
            "range": "± 2779.490493560526"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1936667.759486607,
            "unit": "ns",
            "range": "± 3815.537247612283"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 622404.2252604166,
            "unit": "ns",
            "range": "± 2634.3207989273224"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 572386.2234933035,
            "unit": "ns",
            "range": "± 1526.2140646164723"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2222267.777777778,
            "unit": "ns",
            "range": "± 84455.03722769479"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2289686.6666666665,
            "unit": "ns",
            "range": "± 37384.24648240849"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2881740,
            "unit": "ns",
            "range": "± 53193.57909694418"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2903318.75,
            "unit": "ns",
            "range": "± 113382.96929461598"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7788089.189189189,
            "unit": "ns",
            "range": "± 204296.03355015075"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 177916.66666666666,
            "unit": "ns",
            "range": "± 9542.483742922266"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 173354.7619047619,
            "unit": "ns",
            "range": "± 5662.852955928186"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 144626.4705882353,
            "unit": "ns",
            "range": "± 4614.161916976736"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2840164.285714286,
            "unit": "ns",
            "range": "± 22856.43680228183"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2462846.6666666665,
            "unit": "ns",
            "range": "± 40190.223876436605"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11396.511627906977,
            "unit": "ns",
            "range": "± 1050.3162184250657"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 56113.26530612245,
            "unit": "ns",
            "range": "± 5363.19334315886"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44011.36363636364,
            "unit": "ns",
            "range": "± 1634.1153511831765"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 45734.117647058825,
            "unit": "ns",
            "range": "± 4625.126843593344"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2208.4210526315787,
            "unit": "ns",
            "range": "± 289.0421297035451"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12132.967032967033,
            "unit": "ns",
            "range": "± 1974.5072490823823"
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
          "id": "f63f65c6f3d180999373bb839c5cb8396c5c3bc5",
          "message": "Merge pull request #3727 from greymistcube/chore/fix-exception-message\n\n🩹 Added missing information in Exception",
          "timestamp": "2024-04-04T16:52:49+09:00",
          "tree_id": "446381872af4f2fe81380a140647caf2f459f254",
          "url": "https://github.com/planetarium/libplanet/commit/f63f65c6f3d180999373bb839c5cb8396c5c3bc5"
        },
        "date": 1712217706383,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 985746.3917525773,
            "unit": "ns",
            "range": "± 101171.00937465532"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1734161.4285714286,
            "unit": "ns",
            "range": "± 77388.13393080315"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1538940,
            "unit": "ns",
            "range": "± 153533.89123439736"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6569137.037037037,
            "unit": "ns",
            "range": "± 178588.493789382"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33719.767441860466,
            "unit": "ns",
            "range": "± 3006.769607850293"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4900993.333333333,
            "unit": "ns",
            "range": "± 18036.806284716287"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 12804400,
            "unit": "ns",
            "range": "± 37864.135105304165"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32142314.285714287,
            "unit": "ns",
            "range": "± 313655.83749645785"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 64374342.85714286,
            "unit": "ns",
            "range": "± 222512.79553280567"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 128850620,
            "unit": "ns",
            "range": "± 762157.2692973919"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3247408.28125,
            "unit": "ns",
            "range": "± 6165.736668355572"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1039548.1305803572,
            "unit": "ns",
            "range": "± 2660.3700633839517"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 727094.3209134615,
            "unit": "ns",
            "range": "± 2046.431952848041"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1935888.5807291667,
            "unit": "ns",
            "range": "± 13330.413675391968"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 601167.7036830357,
            "unit": "ns",
            "range": "± 580.2926008333393"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 571138.232421875,
            "unit": "ns",
            "range": "± 785.384634257638"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2173086.6666666665,
            "unit": "ns",
            "range": "± 64801.07881888969"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2312307.3170731706,
            "unit": "ns",
            "range": "± 82499.27390663479"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2814880,
            "unit": "ns",
            "range": "± 63757.30794026261"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2825526.7441860465,
            "unit": "ns",
            "range": "± 151586.66822057986"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7579391.891891892,
            "unit": "ns",
            "range": "± 251574.82803154035"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 168118.3673469388,
            "unit": "ns",
            "range": "± 5086.570286441696"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 164145.7627118644,
            "unit": "ns",
            "range": "± 7263.140814719737"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 142214.2857142857,
            "unit": "ns",
            "range": "± 2827.2399463585884"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2767464.285714286,
            "unit": "ns",
            "range": "± 41998.037630765146"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2388966.6666666665,
            "unit": "ns",
            "range": "± 33131.2469401549"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9250.561797752809,
            "unit": "ns",
            "range": "± 747.5906140738239"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 48660.86956521739,
            "unit": "ns",
            "range": "± 3288.3061714665964"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 42760.606060606064,
            "unit": "ns",
            "range": "± 1011.786598652167"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 45896.907216494845,
            "unit": "ns",
            "range": "± 8866.350874799145"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2041.2371134020618,
            "unit": "ns",
            "range": "± 305.0794218039747"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 8934.04255319149,
            "unit": "ns",
            "range": "± 849.6113205573579"
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
          "id": "74c0af4f0eb2c55103c10378c3e77f7d2e595d44",
          "message": "Merge pull request #3728 from greymistcube/refactor/remove-negative-balance\n\n♻️ Removed negative balance feature",
          "timestamp": "2024-04-05T13:01:33+09:00",
          "tree_id": "38305c1f46d1f603d4fb690302d54cb8f389db44",
          "url": "https://github.com/planetarium/libplanet/commit/74c0af4f0eb2c55103c10378c3e77f7d2e595d44"
        },
        "date": 1712290251520,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 957821.4285714285,
            "unit": "ns",
            "range": "± 97336.60376749176"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1694590,
            "unit": "ns",
            "range": "± 58886.395625335994"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1476589.7959183673,
            "unit": "ns",
            "range": "± 140397.38409889833"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6881411.392405063,
            "unit": "ns",
            "range": "± 356243.9530705306"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34436.04651162791,
            "unit": "ns",
            "range": "± 3032.991642536057"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4992592.857142857,
            "unit": "ns",
            "range": "± 25163.174077813186"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13260753.333333334,
            "unit": "ns",
            "range": "± 191488.07074618313"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33606493.333333336,
            "unit": "ns",
            "range": "± 483532.04276547424"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 67944393.33333333,
            "unit": "ns",
            "range": "± 648984.2772326908"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 135747133.33333334,
            "unit": "ns",
            "range": "± 1210165.5846953145"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3305555.9430803573,
            "unit": "ns",
            "range": "± 16181.872929369963"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1061918.1640625,
            "unit": "ns",
            "range": "± 2552.0776774025867"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 751475.3125,
            "unit": "ns",
            "range": "± 3772.400714196491"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1924863.3984375,
            "unit": "ns",
            "range": "± 5791.3773256788045"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 606408.6653645834,
            "unit": "ns",
            "range": "± 1051.2404843942927"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 552085.8924278846,
            "unit": "ns",
            "range": "± 722.598617994385"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2255948.1481481483,
            "unit": "ns",
            "range": "± 62227.28421106694"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2413629.411764706,
            "unit": "ns",
            "range": "± 77732.50374867281"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2838826.6666666665,
            "unit": "ns",
            "range": "± 51927.86846972947"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2777546.470588235,
            "unit": "ns",
            "range": "± 150182.22379675237"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7779980.769230769,
            "unit": "ns",
            "range": "± 319707.47109491593"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 173727.6595744681,
            "unit": "ns",
            "range": "± 6726.673127174532"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 161871.21212121213,
            "unit": "ns",
            "range": "± 7593.712280595453"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 142540,
            "unit": "ns",
            "range": "± 3796.150500268615"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2762453.3333333335,
            "unit": "ns",
            "range": "± 36413.436818740156"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2486546.6666666665,
            "unit": "ns",
            "range": "± 43307.73383038888"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9586.813186813188,
            "unit": "ns",
            "range": "± 987.0504649047181"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 54992.22222222222,
            "unit": "ns",
            "range": "± 4908.671020349344"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43143.181818181816,
            "unit": "ns",
            "range": "± 1620.7086775038115"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 51879.12087912088,
            "unit": "ns",
            "range": "± 9794.017635310925"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2229.591836734694,
            "unit": "ns",
            "range": "± 408.2169384024303"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9478.125,
            "unit": "ns",
            "range": "± 1327.0626943505126"
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
          "id": "c8f6d650474f812c3b47cbe82532c0c9f932d6a2",
          "message": "Merge pull request #3729 from greymistcube/bump/litedb-to-5.0.19\n\n⬆️ Bump Litedb to 5.0.15",
          "timestamp": "2024-04-08T16:23:12+09:00",
          "tree_id": "35c6f1dfd73b98176c26ec1f06a87cf0b097b299",
          "url": "https://github.com/planetarium/libplanet/commit/c8f6d650474f812c3b47cbe82532c0c9f932d6a2"
        },
        "date": 1712561557155,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1944734.375,
            "unit": "ns",
            "range": "± 60107.7667107306"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3012797.8021978023,
            "unit": "ns",
            "range": "± 271178.03908872284"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2412307.0707070706,
            "unit": "ns",
            "range": "± 296649.902311347"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8119548.837209302,
            "unit": "ns",
            "range": "± 172222.68167099552"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 196802.0202020202,
            "unit": "ns",
            "range": "± 19956.81040626043"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5067813.333333333,
            "unit": "ns",
            "range": "± 39244.54223504328"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13345843.75,
            "unit": "ns",
            "range": "± 246841.91693943177"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32478485.714285713,
            "unit": "ns",
            "range": "± 319519.84615656047"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 65174366.666666664,
            "unit": "ns",
            "range": "± 501927.63944426813"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 130809928.57142857,
            "unit": "ns",
            "range": "± 875061.6289756366"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3383297.3958333335,
            "unit": "ns",
            "range": "± 18112.00752490152"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1060805,
            "unit": "ns",
            "range": "± 2681.141330423549"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 749093.90625,
            "unit": "ns",
            "range": "± 2528.7066299817147"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1991664.0904017857,
            "unit": "ns",
            "range": "± 7462.965835192354"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 612917.0270647322,
            "unit": "ns",
            "range": "± 2271.8458612275726"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 554744.1127232143,
            "unit": "ns",
            "range": "± 1279.9187416572934"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3016738.4615384615,
            "unit": "ns",
            "range": "± 69312.9718129187"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2754221.875,
            "unit": "ns",
            "range": "± 80287.79176218752"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3579826.086956522,
            "unit": "ns",
            "range": "± 143890.30917392872"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3791576.923076923,
            "unit": "ns",
            "range": "± 60153.80500359272"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8644704.347826088,
            "unit": "ns",
            "range": "± 222482.49664638715"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 184282.29166666666,
            "unit": "ns",
            "range": "± 13095.720432276752"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 168337.07865168538,
            "unit": "ns",
            "range": "± 10106.83142081353"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 144431.57894736843,
            "unit": "ns",
            "range": "± 3801.571884220547"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2810133.3333333335,
            "unit": "ns",
            "range": "± 47196.953089711"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2468335.714285714,
            "unit": "ns",
            "range": "± 35180.121291233976"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10373.033707865168,
            "unit": "ns",
            "range": "± 1365.3807365233517"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 56290.721649484534,
            "unit": "ns",
            "range": "± 5140.506672381356"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44908.69565217391,
            "unit": "ns",
            "range": "± 2539.258876644572"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 56028.42105263158,
            "unit": "ns",
            "range": "± 11452.925512704256"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2321.0526315789475,
            "unit": "ns",
            "range": "± 347.604182099718"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9717.708333333334,
            "unit": "ns",
            "range": "± 1463.1613064771532"
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
          "id": "8874c899afca340a0876b8418eea63d339bc9f90",
          "message": "Merge pull request #3732 from greymistcube/release/4.3.0\n\n🚀 Release 4.3.0",
          "timestamp": "2024-04-08T17:29:00+09:00",
          "tree_id": "2ae2825d3031445259bfbbfc1e75f3248632af1e",
          "url": "https://github.com/planetarium/libplanet/commit/8874c899afca340a0876b8418eea63d339bc9f90"
        },
        "date": 1712565511532,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1931534.0425531915,
            "unit": "ns",
            "range": "± 75297.5843385134"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2937954.5454545454,
            "unit": "ns",
            "range": "± 170534.1701756342"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2320348,
            "unit": "ns",
            "range": "± 301890.8734806488"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7943966.666666667,
            "unit": "ns",
            "range": "± 201970.39799600997"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 197471.42857142858,
            "unit": "ns",
            "range": "± 22160.25977740473"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4927192.857142857,
            "unit": "ns",
            "range": "± 31303.636168385252"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13123666.666666666,
            "unit": "ns",
            "range": "± 220071.05887049518"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32775393.333333332,
            "unit": "ns",
            "range": "± 477497.72544958134"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 63194513.333333336,
            "unit": "ns",
            "range": "± 515242.18697433465"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 128013723.07692307,
            "unit": "ns",
            "range": "± 470412.12454939645"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3356887.2209821427,
            "unit": "ns",
            "range": "± 5334.36294297233"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1066243.9778645833,
            "unit": "ns",
            "range": "± 2665.9679532780665"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 737939.3484933035,
            "unit": "ns",
            "range": "± 1388.5577089908877"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1941582.9947916667,
            "unit": "ns",
            "range": "± 3920.2752257134607"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 606083.4751674107,
            "unit": "ns",
            "range": "± 1009.9245332432065"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 559667.1595982143,
            "unit": "ns",
            "range": "± 1132.4915368131497"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2628579.3103448274,
            "unit": "ns",
            "range": "± 64188.68602637931"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2802642.4242424243,
            "unit": "ns",
            "range": "± 313252.9505670474"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3570705.128205128,
            "unit": "ns",
            "range": "± 183694.25253643192"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3214011.8279569894,
            "unit": "ns",
            "range": "± 201006.88169566126"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8575776.923076924,
            "unit": "ns",
            "range": "± 248574.10148107848"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 169233.33333333334,
            "unit": "ns",
            "range": "± 7306.151414037931"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 166506.32911392406,
            "unit": "ns",
            "range": "± 7173.425705465544"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 143464.51612903227,
            "unit": "ns",
            "range": "± 3577.5735153962264"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2811461.5384615385,
            "unit": "ns",
            "range": "± 38185.26195758294"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2506016.6666666665,
            "unit": "ns",
            "range": "± 50002.70875015613"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9721.505376344086,
            "unit": "ns",
            "range": "± 1003.5642418254951"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 55227,
            "unit": "ns",
            "range": "± 7022.415121695252"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43013.432835820895,
            "unit": "ns",
            "range": "± 1786.3875451115628"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 50915.38461538462,
            "unit": "ns",
            "range": "± 9639.893073138233"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2226.530612244898,
            "unit": "ns",
            "range": "± 427.0616509268946"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10248.979591836734,
            "unit": "ns",
            "range": "± 1707.9254249852868"
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
          "id": "4e55367a86451f70ecf9de2b90d59c152a5eb5b6",
          "message": "Merge pull request #3733 from greymistcube/prepare/4.4.0\n\n🔧 Prepare 4.4.0",
          "timestamp": "2024-04-08T18:52:52+09:00",
          "tree_id": "e63646c38e8c49ca210258e2d63ecb6a4042cfd0",
          "url": "https://github.com/planetarium/libplanet/commit/4e55367a86451f70ecf9de2b90d59c152a5eb5b6"
        },
        "date": 1712570501260,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1763635.3535353534,
            "unit": "ns",
            "range": "± 207961.4820660019"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2919702.2471910114,
            "unit": "ns",
            "range": "± 258984.91618832664"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2352219.1919191917,
            "unit": "ns",
            "range": "± 292267.0356679245"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7876851.612903226,
            "unit": "ns",
            "range": "± 223743.26339351202"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 178566.66666666666,
            "unit": "ns",
            "range": "± 6828.512642271402"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5054150,
            "unit": "ns",
            "range": "± 8661.146260481608"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13294314.285714285,
            "unit": "ns",
            "range": "± 106170.56565258099"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32367707.14285714,
            "unit": "ns",
            "range": "± 286448.96300491894"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 65053186.666666664,
            "unit": "ns",
            "range": "± 663964.805292168"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 132323364.28571428,
            "unit": "ns",
            "range": "± 758164.5484144768"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3296915.8854166665,
            "unit": "ns",
            "range": "± 3850.3395020522526"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1050932.603236607,
            "unit": "ns",
            "range": "± 2570.7060488349844"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 747897.75390625,
            "unit": "ns",
            "range": "± 1966.4703991953425"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2028906.5104166667,
            "unit": "ns",
            "range": "± 5538.711126403271"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 635689.6549479166,
            "unit": "ns",
            "range": "± 5052.23076978488"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 558162.1875,
            "unit": "ns",
            "range": "± 1801.4302623408512"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2519333.3333333335,
            "unit": "ns",
            "range": "± 87397.18269978528"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2749086,
            "unit": "ns",
            "range": "± 45178.58895538904"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3581041.8604651163,
            "unit": "ns",
            "range": "± 130655.68570092948"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3208226.595744681,
            "unit": "ns",
            "range": "± 194459.6292378966"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8503686.666666666,
            "unit": "ns",
            "range": "± 207958.53322292375"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 178592.55319148937,
            "unit": "ns",
            "range": "± 12657.924878443662"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 165061.66666666666,
            "unit": "ns",
            "range": "± 6890.009757850626"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 140893.9393939394,
            "unit": "ns",
            "range": "± 2919.4326711215863"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2886557.1428571427,
            "unit": "ns",
            "range": "± 68560.40089897792"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2454653.846153846,
            "unit": "ns",
            "range": "± 34909.731579809646"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10857.291666666666,
            "unit": "ns",
            "range": "± 1734.7679833742466"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 53494.791666666664,
            "unit": "ns",
            "range": "± 4394.167660641155"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43266.666666666664,
            "unit": "ns",
            "range": "± 956.7573440452993"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 54195.87628865979,
            "unit": "ns",
            "range": "± 10152.06175207132"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2206.521739130435,
            "unit": "ns",
            "range": "± 268.82092892836533"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9730.434782608696,
            "unit": "ns",
            "range": "± 1489.1725802343833"
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
          "id": "4f78091a0c08ef13d674c824be4b836ce7d6e4dc",
          "message": "Merge pull request #3735 from greymistcube/refactor/iworld\n\n♻️ Changed `SetValidator()` to `SetValidatorSet()`",
          "timestamp": "2024-04-09T16:02:50+09:00",
          "tree_id": "13c4d7d33bd113ebaa1a03877172a4f9fde2a8c1",
          "url": "https://github.com/planetarium/libplanet/commit/4f78091a0c08ef13d674c824be4b836ce7d6e4dc"
        },
        "date": 1712646660531,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1987460,
            "unit": "ns",
            "range": "± 45341.202361416785"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2882129.885057471,
            "unit": "ns",
            "range": "± 158875.29928974246"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2575335.714285714,
            "unit": "ns",
            "range": "± 72556.65584133759"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8299125.641025641,
            "unit": "ns",
            "range": "± 409536.1761721907"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 183315.38461538462,
            "unit": "ns",
            "range": "± 2571.2662748945813"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5062407.142857143,
            "unit": "ns",
            "range": "± 22767.26612031859"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13054993.333333334,
            "unit": "ns",
            "range": "± 64934.29059624887"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32775450,
            "unit": "ns",
            "range": "± 116851.40958960197"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 65419916.666666664,
            "unit": "ns",
            "range": "± 413103.3192567598"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 128735506.66666667,
            "unit": "ns",
            "range": "± 611313.1912608495"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3342439.7042410714,
            "unit": "ns",
            "range": "± 6477.774664461019"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1058664.6744791667,
            "unit": "ns",
            "range": "± 1983.046112664691"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 738621.3932291666,
            "unit": "ns",
            "range": "± 1952.190479366812"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1917455.3861177885,
            "unit": "ns",
            "range": "± 3554.954491695146"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 611031.09375,
            "unit": "ns",
            "range": "± 3210.798761737691"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 562633.154296875,
            "unit": "ns",
            "range": "± 959.9506489206627"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2587392.8571428573,
            "unit": "ns",
            "range": "± 83442.35431425994"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2754553.5714285714,
            "unit": "ns",
            "range": "± 63900.1447986701"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3540500,
            "unit": "ns",
            "range": "± 140858.13922033538"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3343032,
            "unit": "ns",
            "range": "± 257050.7016292327"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8668552.173913043,
            "unit": "ns",
            "range": "± 217591.34147308796"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 172741.66666666666,
            "unit": "ns",
            "range": "± 8548.399899692948"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 164938.09523809524,
            "unit": "ns",
            "range": "± 7837.8892038318145"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 143688,
            "unit": "ns",
            "range": "± 3207.974438800908"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2800720,
            "unit": "ns",
            "range": "± 41672.89629620535"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2444686.6666666665,
            "unit": "ns",
            "range": "± 32194.339934366162"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10221.27659574468,
            "unit": "ns",
            "range": "± 1072.7937941760733"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 53528.72340425532,
            "unit": "ns",
            "range": "± 4033.745353711131"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43930.61224489796,
            "unit": "ns",
            "range": "± 1461.7632163521807"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 49993.87755102041,
            "unit": "ns",
            "range": "± 10736.428175339932"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2187.7551020408164,
            "unit": "ns",
            "range": "± 440.30572933244827"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9771.739130434782,
            "unit": "ns",
            "range": "± 1139.4355733014174"
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
          "id": "70aeb4796562ecf0585adab341a1d516a0515bbe",
          "message": "Merge pull request #3736 from greymistcube/refactor/block-protocol-version\n\n♻️ Changed constant reference block protocol versions",
          "timestamp": "2024-04-09T18:37:02+09:00",
          "tree_id": "84d13b2792e0acf7939c6c360d75621c214ce7d5",
          "url": "https://github.com/planetarium/libplanet/commit/70aeb4796562ecf0585adab341a1d516a0515bbe"
        },
        "date": 1712655972936,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1855159.0909090908,
            "unit": "ns",
            "range": "± 231171.29486502704"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3033782.4175824174,
            "unit": "ns",
            "range": "± 343882.58415834856"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2294333.3333333335,
            "unit": "ns",
            "range": "± 236425.71944762382"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7813966.666666667,
            "unit": "ns",
            "range": "± 179520.94745380728"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 204155.55555555556,
            "unit": "ns",
            "range": "± 20656.793230701704"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5004646.153846154,
            "unit": "ns",
            "range": "± 19447.091272844867"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 12894113.333333334,
            "unit": "ns",
            "range": "± 68780.66450336033"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 31935000,
            "unit": "ns",
            "range": "± 181293.71591031895"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 63672913.333333336,
            "unit": "ns",
            "range": "± 305193.4090906633"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 127561526.66666667,
            "unit": "ns",
            "range": "± 714600.9440506605"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3302450.4427083335,
            "unit": "ns",
            "range": "± 20484.42462769615"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1066423.4244791667,
            "unit": "ns",
            "range": "± 1859.3686729466997"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 732923.4505208334,
            "unit": "ns",
            "range": "± 916.1591442509186"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1919559.7395833333,
            "unit": "ns",
            "range": "± 9992.71260611754"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 616661.5364583334,
            "unit": "ns",
            "range": "± 2810.269471428666"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 560064.70703125,
            "unit": "ns",
            "range": "± 2113.1583279704505"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3022561.904761905,
            "unit": "ns",
            "range": "± 61727.469381066294"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2706819.0476190476,
            "unit": "ns",
            "range": "± 97810.40205566256"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3597584.6153846155,
            "unit": "ns",
            "range": "± 132827.57412192464"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3338682.5,
            "unit": "ns",
            "range": "± 100374.17787126993"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8545459.523809524,
            "unit": "ns",
            "range": "± 302187.9297839091"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 168129.23076923078,
            "unit": "ns",
            "range": "± 7684.394150584577"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 169172.8260869565,
            "unit": "ns",
            "range": "± 11362.373835524559"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 142077.14285714287,
            "unit": "ns",
            "range": "± 4629.959072000893"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2778533.3333333335,
            "unit": "ns",
            "range": "± 45395.856744022465"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2456971.4285714286,
            "unit": "ns",
            "range": "± 32122.540099089023"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10100,
            "unit": "ns",
            "range": "± 1464.0010140270276"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 51397.82608695652,
            "unit": "ns",
            "range": "± 3447.9322760766195"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43716.666666666664,
            "unit": "ns",
            "range": "± 1521.0180587222985"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 48934.52380952381,
            "unit": "ns",
            "range": "± 10424.501884001305"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2120.408163265306,
            "unit": "ns",
            "range": "± 368.32280319762253"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9420.833333333334,
            "unit": "ns",
            "range": "± 1220.0877161449168"
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
          "id": "9ab2062035cf17953592afb7a1f1b29d28655e06",
          "message": "Merge pull request #3738 from greymistcube/refactor/trie-metadata\n\n♻️ Refactor `TrieMetadata`",
          "timestamp": "2024-04-11T18:40:39+09:00",
          "tree_id": "f5e5bb85ed32af2e83a2800131f11d15bc40ab1e",
          "url": "https://github.com/planetarium/libplanet/commit/9ab2062035cf17953592afb7a1f1b29d28655e06"
        },
        "date": 1712828991209,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1938907.4074074074,
            "unit": "ns",
            "range": "± 53015.57772467901"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2862711.4942528736,
            "unit": "ns",
            "range": "± 168513.9994358949"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2564495.652173913,
            "unit": "ns",
            "range": "± 60377.28710714793"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7802095.454545454,
            "unit": "ns",
            "range": "± 243722.49600071425"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 179496.38554216866,
            "unit": "ns",
            "range": "± 9595.812676512358"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5069306.666666667,
            "unit": "ns",
            "range": "± 30458.554197622772"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13423100,
            "unit": "ns",
            "range": "± 78823.65489768013"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32582560,
            "unit": "ns",
            "range": "± 276317.28088247706"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 65235578.571428575,
            "unit": "ns",
            "range": "± 229066.11131210212"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 128715035.71428572,
            "unit": "ns",
            "range": "± 1232815.2894319338"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3251590.0260416665,
            "unit": "ns",
            "range": "± 5583.940490982268"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1045356.2220982143,
            "unit": "ns",
            "range": "± 1961.8931668709922"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 713537.7650669643,
            "unit": "ns",
            "range": "± 1470.0202852606008"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1951452.3958333333,
            "unit": "ns",
            "range": "± 5467.132628870812"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 618793.9732142857,
            "unit": "ns",
            "range": "± 845.0336149129907"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 553499.4401041666,
            "unit": "ns",
            "range": "± 1328.1909781173417"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2678968.75,
            "unit": "ns",
            "range": "± 50384.4118585633"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2789780.769230769,
            "unit": "ns",
            "range": "± 76159.61144454859"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3546168.4210526315,
            "unit": "ns",
            "range": "± 121195.82123128681"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3848477.777777778,
            "unit": "ns",
            "range": "± 107262.27501328525"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8505454.285714285,
            "unit": "ns",
            "range": "± 240567.26507405384"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 172674.54545454544,
            "unit": "ns",
            "range": "± 7322.775687609431"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 160869.5652173913,
            "unit": "ns",
            "range": "± 7094.287352756318"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 142864.2857142857,
            "unit": "ns",
            "range": "± 3980.481478946084"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2792160,
            "unit": "ns",
            "range": "± 43867.03611076154"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2411461.5384615385,
            "unit": "ns",
            "range": "± 18861.890081216607"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9507.446808510638,
            "unit": "ns",
            "range": "± 887.5772705059187"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 50505.494505494506,
            "unit": "ns",
            "range": "± 3748.343712372251"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43031.48148148148,
            "unit": "ns",
            "range": "± 1516.5532014598568"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 48277.551020408166,
            "unit": "ns",
            "range": "± 9865.816550529931"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2042.1052631578948,
            "unit": "ns",
            "range": "± 203.4693491311019"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9551.020408163266,
            "unit": "ns",
            "range": "± 1288.7494856226385"
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
          "id": "24fe16c9bb067e1c1199b90e950c5747ac897da0",
          "message": "Merge pull request #3740 from greymistcube/chore/changelog-fix\n\n🧹 Fixed changelog typo",
          "timestamp": "2024-04-12T11:03:44+09:00",
          "tree_id": "5d245d6edd2e752ae75652a1840759df64989b08",
          "url": "https://github.com/planetarium/libplanet/commit/24fe16c9bb067e1c1199b90e950c5747ac897da0"
        },
        "date": 1712888074210,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1786034.693877551,
            "unit": "ns",
            "range": "± 206085.57230874474"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3150277.551020408,
            "unit": "ns",
            "range": "± 333546.68865312764"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2359188.5416666665,
            "unit": "ns",
            "range": "± 270743.62076162396"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7923589.285714285,
            "unit": "ns",
            "range": "± 132467.305090688"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 184933.33333333334,
            "unit": "ns",
            "range": "± 18504.95618770204"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5305886.666666667,
            "unit": "ns",
            "range": "± 44832.43192579399"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13283850,
            "unit": "ns",
            "range": "± 154253.10743659642"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32985620,
            "unit": "ns",
            "range": "± 262511.63293951645"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 65998278.571428575,
            "unit": "ns",
            "range": "± 301584.8143967552"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 133508900,
            "unit": "ns",
            "range": "± 915256.7095005172"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3271534.1346153845,
            "unit": "ns",
            "range": "± 5314.7433283826285"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1058922.5651041667,
            "unit": "ns",
            "range": "± 2095.15281141612"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 741023.6588541666,
            "unit": "ns",
            "range": "± 1469.5322069758072"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1933224.0755208333,
            "unit": "ns",
            "range": "± 3725.060978674107"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 623733.6588541666,
            "unit": "ns",
            "range": "± 2174.2454938508554"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 572438.4915865385,
            "unit": "ns",
            "range": "± 955.5697602948052"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2565110.3448275863,
            "unit": "ns",
            "range": "± 75203.62047148864"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2723495.081967213,
            "unit": "ns",
            "range": "± 121939.59081751574"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3523138.4615384615,
            "unit": "ns",
            "range": "± 57870.915021536195"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3454773.737373737,
            "unit": "ns",
            "range": "± 390273.7115352267"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8613460,
            "unit": "ns",
            "range": "± 262665.21097934444"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 179293.47826086957,
            "unit": "ns",
            "range": "± 11325.821944292076"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 168976.8115942029,
            "unit": "ns",
            "range": "± 8063.062929322611"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 145067.64705882352,
            "unit": "ns",
            "range": "± 4579.117328483885"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2846762.5,
            "unit": "ns",
            "range": "± 53319.41328759473"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2569626.6666666665,
            "unit": "ns",
            "range": "± 32304.631836553064"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11242.857142857143,
            "unit": "ns",
            "range": "± 1627.2803191562916"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 57763.26530612245,
            "unit": "ns",
            "range": "± 5208.149596310269"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45901.086956521736,
            "unit": "ns",
            "range": "± 3194.4489822264773"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 55322.10526315789,
            "unit": "ns",
            "range": "± 10711.727307194456"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2542.7083333333335,
            "unit": "ns",
            "range": "± 408.7837651701284"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10643.75,
            "unit": "ns",
            "range": "± 1546.0518477041685"
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
          "id": "24e8a381e18b93d71181216254775a2882548c47",
          "message": "Merge pull request #3739 from greymistcube/refactor/iworld-state\n\n♻️ Added `Version` property to `IWorldState`",
          "timestamp": "2024-04-12T18:14:04+09:00",
          "tree_id": "93408a025d34e352529096c6d27af63e2bef7b90",
          "url": "https://github.com/planetarium/libplanet/commit/24e8a381e18b93d71181216254775a2882548c47"
        },
        "date": 1712913819273,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1770867.6767676768,
            "unit": "ns",
            "range": "± 228233.98252951333"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3060602.688172043,
            "unit": "ns",
            "range": "± 338946.5010342301"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2253792.9292929294,
            "unit": "ns",
            "range": "± 278419.5282752364"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7969186.363636363,
            "unit": "ns",
            "range": "± 298888.56723481184"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 189772,
            "unit": "ns",
            "range": "± 22538.900513637225"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5069153.333333333,
            "unit": "ns",
            "range": "± 31096.02332560655"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13475113.333333334,
            "unit": "ns",
            "range": "± 72234.14177586135"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 34293506.666666664,
            "unit": "ns",
            "range": "± 344680.355995992"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 65339173.07692308,
            "unit": "ns",
            "range": "± 593002.6576020356"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 132541353.33333333,
            "unit": "ns",
            "range": "± 1789830.143523867"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3249583.828125,
            "unit": "ns",
            "range": "± 8326.538329761619"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1083120.7682291667,
            "unit": "ns",
            "range": "± 2202.956865124575"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 723500.9974888393,
            "unit": "ns",
            "range": "± 1613.0257711790744"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1910506.5504807692,
            "unit": "ns",
            "range": "± 1287.4416217479259"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 623627.4088541666,
            "unit": "ns",
            "range": "± 1489.7882749035973"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 558010.25390625,
            "unit": "ns",
            "range": "± 1094.6452833978651"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2491244,
            "unit": "ns",
            "range": "± 85647.19555316711"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3288727.5862068967,
            "unit": "ns",
            "range": "± 96270.11439750332"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3478292,
            "unit": "ns",
            "range": "± 106859.67880871645"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3426986.206896552,
            "unit": "ns",
            "range": "± 88439.16280269381"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8398255,
            "unit": "ns",
            "range": "± 177305.81513009485"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 174329.4871794872,
            "unit": "ns",
            "range": "± 8993.870336496053"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 170318.18181818182,
            "unit": "ns",
            "range": "± 14479.932374097663"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 145373.17073170733,
            "unit": "ns",
            "range": "± 5236.937291501776"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2845893.3333333335,
            "unit": "ns",
            "range": "± 31424.114186098428"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2530729.411764706,
            "unit": "ns",
            "range": "± 49886.78137425136"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10151.546391752578,
            "unit": "ns",
            "range": "± 1556.04422348131"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52850.52631578947,
            "unit": "ns",
            "range": "± 4899.041888183081"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43185.416666666664,
            "unit": "ns",
            "range": "± 1695.0478036732734"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 49587.5,
            "unit": "ns",
            "range": "± 9325.497023582288"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2047.9166666666667,
            "unit": "ns",
            "range": "± 349.4293593746559"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9404.255319148937,
            "unit": "ns",
            "range": "± 1189.55263061073"
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
          "id": "a5d2dbd6405f4fa534b05df34bdc56a422426415",
          "message": "Merge pull request #3741 from greymistcube/bump/block-protocol-version-to-6\n\n♻️ ⬆️ Bump block protocol version to 6",
          "timestamp": "2024-04-15T10:37:40+09:00",
          "tree_id": "fda4bd5af61c41b4577502f139ca173cf7b36593",
          "url": "https://github.com/planetarium/libplanet/commit/a5d2dbd6405f4fa534b05df34bdc56a422426415"
        },
        "date": 1713145723839,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1926738.2352941176,
            "unit": "ns",
            "range": "± 52395.678544368304"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2789039.772727273,
            "unit": "ns",
            "range": "± 169065.39273499296"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2543429.1666666665,
            "unit": "ns",
            "range": "± 63490.235327048984"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7619100,
            "unit": "ns",
            "range": "± 161383.88498649216"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 181314,
            "unit": "ns",
            "range": "± 7180.131600181042"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5138766.666666667,
            "unit": "ns",
            "range": "± 14449.501556735278"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 12992493.333333334,
            "unit": "ns",
            "range": "± 144313.38650246387"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33355846.666666668,
            "unit": "ns",
            "range": "± 313146.2822631591"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 64541178.571428575,
            "unit": "ns",
            "range": "± 218927.7512667713"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 129315933.33333333,
            "unit": "ns",
            "range": "± 752470.0427512681"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3336549.5256696427,
            "unit": "ns",
            "range": "± 8020.136963246952"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1067863.28125,
            "unit": "ns",
            "range": "± 2177.892466612086"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 729197.9622395834,
            "unit": "ns",
            "range": "± 1920.2617410610455"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1881622.2135416667,
            "unit": "ns",
            "range": "± 3269.142740776379"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 601170.9333147322,
            "unit": "ns",
            "range": "± 1845.854577233629"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 569010.3125,
            "unit": "ns",
            "range": "± 2367.2448135912405"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2507337.2093023257,
            "unit": "ns",
            "range": "± 72457.47200371702"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3278692.8571428573,
            "unit": "ns",
            "range": "± 38763.895062797295"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4345216.666666667,
            "unit": "ns",
            "range": "± 47016.12553801153"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3369338.888888889,
            "unit": "ns",
            "range": "± 91745.88905629591"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8425678.57142857,
            "unit": "ns",
            "range": "± 304473.98746331653"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 169515.25423728814,
            "unit": "ns",
            "range": "± 6218.21056306899"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 159754.79452054793,
            "unit": "ns",
            "range": "± 6690.603715823542"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 145068.9655172414,
            "unit": "ns",
            "range": "± 3456.681258114066"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2712121.4285714286,
            "unit": "ns",
            "range": "± 38619.568148233404"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2553084.6153846155,
            "unit": "ns",
            "range": "± 33949.17392597956"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9704.255319148937,
            "unit": "ns",
            "range": "± 1237.4892108678816"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 51490.721649484534,
            "unit": "ns",
            "range": "± 4118.835860871036"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43653.125,
            "unit": "ns",
            "range": "± 1059.8187230873266"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 45339.24731182796,
            "unit": "ns",
            "range": "± 7031.226350539418"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2156.25,
            "unit": "ns",
            "range": "± 343.60702768378326"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9998.958333333334,
            "unit": "ns",
            "range": "± 1284.113029265658"
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
          "id": "8c6eba765a1a401ec979b2068a9b6bc2ca6cb5ea",
          "message": "Merge pull request #3742 from greymistcube/chore/add-missing-protocol-version\n\n🔧 Add missing protocol versions",
          "timestamp": "2024-04-15T12:30:17+09:00",
          "tree_id": "2c7689bd15fba4748ed896f13ae10b49a60c27da",
          "url": "https://github.com/planetarium/libplanet/commit/8c6eba765a1a401ec979b2068a9b6bc2ca6cb5ea"
        },
        "date": 1713152413867,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1849056.5656565656,
            "unit": "ns",
            "range": "± 235464.15913481297"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3094477.5280898875,
            "unit": "ns",
            "range": "± 256868.1222272384"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2490589.5833333335,
            "unit": "ns",
            "range": "± 312511.1812666335"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8055089.189189189,
            "unit": "ns",
            "range": "± 178800.47350139855"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 191395.45454545456,
            "unit": "ns",
            "range": "± 10480.45700823005"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5221066.666666667,
            "unit": "ns",
            "range": "± 53428.13152352642"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13763940,
            "unit": "ns",
            "range": "± 215544.23410785745"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 34405820,
            "unit": "ns",
            "range": "± 633269.9911682897"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 66888840,
            "unit": "ns",
            "range": "± 733347.0507591497"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 137903164.2857143,
            "unit": "ns",
            "range": "± 1346666.6040533297"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3348251.015625,
            "unit": "ns",
            "range": "± 6865.115308038302"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1067281.4778645833,
            "unit": "ns",
            "range": "± 2415.0301375977183"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 749351.0091145834,
            "unit": "ns",
            "range": "± 2928.128854747402"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1990553.1510416667,
            "unit": "ns",
            "range": "± 3668.564089739592"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 618851.7252604166,
            "unit": "ns",
            "range": "± 1140.1771563040277"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 563728.076171875,
            "unit": "ns",
            "range": "± 618.4022576875954"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2638705.0505050505,
            "unit": "ns",
            "range": "± 191970.6330505371"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2830338.6363636362,
            "unit": "ns",
            "range": "± 87628.44981341335"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3760530.769230769,
            "unit": "ns",
            "range": "± 121490.14071725316"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3399627.0833333335,
            "unit": "ns",
            "range": "± 217437.97348072278"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8541986.363636363,
            "unit": "ns",
            "range": "± 208965.4683148676"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 185501.17647058822,
            "unit": "ns",
            "range": "± 8833.236667723288"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 177502.66666666666,
            "unit": "ns",
            "range": "± 8474.380681083894"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 149958.82352941178,
            "unit": "ns",
            "range": "± 2942.800287041539"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2856528.5714285714,
            "unit": "ns",
            "range": "± 32893.89535534446"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2584976.923076923,
            "unit": "ns",
            "range": "± 29811.74695334469"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12338.297872340425,
            "unit": "ns",
            "range": "± 1573.5793307990562"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61401.030927835054,
            "unit": "ns",
            "range": "± 6740.927465325785"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 47202.5,
            "unit": "ns",
            "range": "± 1362.2168019021844"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 65618.75,
            "unit": "ns",
            "range": "± 12186.077582311105"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2956.122448979592,
            "unit": "ns",
            "range": "± 593.9673229462724"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11476.881720430107,
            "unit": "ns",
            "range": "± 1104.4514460706014"
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
          "id": "ad6b7614bd7eb8becbdbf1d1073a6fb24992f762",
          "message": "Merge pull request #3743 from greymistcube/refactor/world-tests\n\n♻️ Refactor `IWorld` tests",
          "timestamp": "2024-04-15T15:49:49+09:00",
          "tree_id": "2508af505ebc141a466d106fc7738ea6715048aa",
          "url": "https://github.com/planetarium/libplanet/commit/ad6b7614bd7eb8becbdbf1d1073a6fb24992f762"
        },
        "date": 1713164386905,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1886974.4897959183,
            "unit": "ns",
            "range": "± 207435.37774559736"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3108907.9545454546,
            "unit": "ns",
            "range": "± 207400.56264213406"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2472263,
            "unit": "ns",
            "range": "± 312810.08459001465"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8258865.957446809,
            "unit": "ns",
            "range": "± 320903.7755523255"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 185317.14285714287,
            "unit": "ns",
            "range": "± 8718.64521167837"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5214286.666666667,
            "unit": "ns",
            "range": "± 61206.26563008849"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14034464.285714285,
            "unit": "ns",
            "range": "± 87515.6215254683"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 34301117.39130435,
            "unit": "ns",
            "range": "± 844549.4202947262"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 69275380,
            "unit": "ns",
            "range": "± 422641.6367832885"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 135463576.66666666,
            "unit": "ns",
            "range": "± 898126.08681049"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3369087.918526786,
            "unit": "ns",
            "range": "± 6477.201694109662"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1136967.8936298077,
            "unit": "ns",
            "range": "± 1409.2392399475339"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 750424.2643229166,
            "unit": "ns",
            "range": "± 972.6312234197244"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1972574.3229166667,
            "unit": "ns",
            "range": "± 4453.155010145851"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 623936.5234375,
            "unit": "ns",
            "range": "± 486.6570180155791"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 583993.3919270834,
            "unit": "ns",
            "range": "± 1491.3171558639942"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2562075,
            "unit": "ns",
            "range": "± 82768.62376145371"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2922205.263157895,
            "unit": "ns",
            "range": "± 94501.3826507414"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3738974.6835443038,
            "unit": "ns",
            "range": "± 192349.36461763742"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3410439.0804597703,
            "unit": "ns",
            "range": "± 183977.14744103397"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8571100,
            "unit": "ns",
            "range": "± 124602.55815993507"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 187334.93975903615,
            "unit": "ns",
            "range": "± 9605.783747241336"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 175561.53846153847,
            "unit": "ns",
            "range": "± 7701.454657800294"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 148381.4814814815,
            "unit": "ns",
            "range": "± 4162.19589205922"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2865121.052631579,
            "unit": "ns",
            "range": "± 62367.642776499706"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2578242.8571428573,
            "unit": "ns",
            "range": "± 30160.639512851445"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12804.301075268817,
            "unit": "ns",
            "range": "± 1528.2779438262492"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59359.574468085106,
            "unit": "ns",
            "range": "± 5287.5247608446625"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 47767.10526315789,
            "unit": "ns",
            "range": "± 2310.1739131009017"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 67187.5,
            "unit": "ns",
            "range": "± 13548.223810561023"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3177.5510204081634,
            "unit": "ns",
            "range": "± 791.7787116978565"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11863.917525773197,
            "unit": "ns",
            "range": "± 1781.5714953734387"
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
          "id": "51705f6444c3d3a4a04ebd2145561cf41eb273c0",
          "message": "Merge pull request #3745 from greymistcube/feature/validator-set-account\n\n✨ Introduce `ValidatorSetAccount`",
          "timestamp": "2024-04-17T11:26:36+09:00",
          "tree_id": "778d877278bab8bb4835ca013d973df5af790da4",
          "url": "https://github.com/planetarium/libplanet/commit/51705f6444c3d3a4a04ebd2145561cf41eb273c0"
        },
        "date": 1713321373493,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1990075,
            "unit": "ns",
            "range": "± 65362.555357460915"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3007795.5555555555,
            "unit": "ns",
            "range": "± 272256.38741018175"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2743985.714285714,
            "unit": "ns",
            "range": "± 71635.88338507307"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8269480,
            "unit": "ns",
            "range": "± 240857.00395243062"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 193423,
            "unit": "ns",
            "range": "± 22327.117429871523"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5162293.333333333,
            "unit": "ns",
            "range": "± 82392.58346188576"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13332520,
            "unit": "ns",
            "range": "± 173396.42935852433"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33144726.666666668,
            "unit": "ns",
            "range": "± 315465.83801163157"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 67471193.33333333,
            "unit": "ns",
            "range": "± 658015.7905906717"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 135803593.33333334,
            "unit": "ns",
            "range": "± 1254139.5299832737"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3382106.5885416665,
            "unit": "ns",
            "range": "± 15514.42643563844"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1046893.9313616072,
            "unit": "ns",
            "range": "± 5885.264501890567"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 744665.52734375,
            "unit": "ns",
            "range": "± 3567.7023214053593"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1923006.1848958333,
            "unit": "ns",
            "range": "± 2634.362914645882"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 590353.6342075893,
            "unit": "ns",
            "range": "± 1511.3878535847903"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 558330.78125,
            "unit": "ns",
            "range": "± 952.4848158104882"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2503206.8181818184,
            "unit": "ns",
            "range": "± 93570.50916282025"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2776285.5555555555,
            "unit": "ns",
            "range": "± 85015.11939209711"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3615414.8936170214,
            "unit": "ns",
            "range": "± 139403.63194495672"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3373123,
            "unit": "ns",
            "range": "± 293771.6923793617"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8969200,
            "unit": "ns",
            "range": "± 210492.95291245845"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 177035.08771929826,
            "unit": "ns",
            "range": "± 7691.007997006964"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 174154.05405405405,
            "unit": "ns",
            "range": "± 8182.761519146816"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 145303.57142857142,
            "unit": "ns",
            "range": "± 4103.158868288273"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2756346.6666666665,
            "unit": "ns",
            "range": "± 47773.88507582459"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2481385.714285714,
            "unit": "ns",
            "range": "± 27635.09076804782"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11454.347826086956,
            "unit": "ns",
            "range": "± 1718.9578393642194"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 57328.42105263158,
            "unit": "ns",
            "range": "± 6332.164820200937"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45240.217391304344,
            "unit": "ns",
            "range": "± 3353.235596138557"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 60893,
            "unit": "ns",
            "range": "± 17459.93540779703"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2665.656565656566,
            "unit": "ns",
            "range": "± 686.184603019288"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10931.25,
            "unit": "ns",
            "range": "± 1641.5212777369527"
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
          "id": "2f233fa27e5dd57f49840b71a5b469de49ca01c9",
          "message": "Merge pull request #3746 from greymistcube/feature/world-gql-version-property\n\n✨ Added version field to world state query",
          "timestamp": "2024-04-17T11:45:17+09:00",
          "tree_id": "c88b9e958fe6203b44a686601a09d7fe019cfcf8",
          "url": "https://github.com/planetarium/libplanet/commit/2f233fa27e5dd57f49840b71a5b469de49ca01c9"
        },
        "date": 1713322495976,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1775430.303030303,
            "unit": "ns",
            "range": "± 221205.76322646096"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2962993.956043956,
            "unit": "ns",
            "range": "± 277212.7527164295"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2496535.714285714,
            "unit": "ns",
            "range": "± 278128.98114838585"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8368838.235294118,
            "unit": "ns",
            "range": "± 163217.79094706537"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 185848.95833333334,
            "unit": "ns",
            "range": "± 17360.669370988322"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5029507.142857143,
            "unit": "ns",
            "range": "± 33226.78401266328"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13539228.57142857,
            "unit": "ns",
            "range": "± 127984.80786388689"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33221566.666666668,
            "unit": "ns",
            "range": "± 289531.0633881392"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 66940060,
            "unit": "ns",
            "range": "± 1158268.4273147937"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 129575826.66666667,
            "unit": "ns",
            "range": "± 1162397.4120428045"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3280770.703125,
            "unit": "ns",
            "range": "± 19907.616894184554"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1064680,
            "unit": "ns",
            "range": "± 5072.878221725179"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 733143.8671875,
            "unit": "ns",
            "range": "± 3199.708007407854"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1958307.4739583333,
            "unit": "ns",
            "range": "± 9079.020140800672"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 632019.9674479166,
            "unit": "ns",
            "range": "± 2165.667070210697"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 576726.3932291666,
            "unit": "ns",
            "range": "± 1538.7342434473674"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2451324.074074074,
            "unit": "ns",
            "range": "± 100226.99695659752"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2725072.891566265,
            "unit": "ns",
            "range": "± 144821.03533141763"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3688772.0430107526,
            "unit": "ns",
            "range": "± 227259.15649300287"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3400612,
            "unit": "ns",
            "range": "± 280993.98903668293"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9027665.789473685,
            "unit": "ns",
            "range": "± 309453.9744639291"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 187383.92857142858,
            "unit": "ns",
            "range": "± 8000.7221670799945"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 167459.34065934067,
            "unit": "ns",
            "range": "± 9942.936946194273"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 145200,
            "unit": "ns",
            "range": "± 3233.4192428449487"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2743514.285714286,
            "unit": "ns",
            "range": "± 34932.745430279356"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2459193.3333333335,
            "unit": "ns",
            "range": "± 31012.86522596404"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10808.333333333334,
            "unit": "ns",
            "range": "± 1388.7265402190499"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 55435.10638297872,
            "unit": "ns",
            "range": "± 4891.834483321863"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44967.03296703297,
            "unit": "ns",
            "range": "± 3479.1140297832194"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 56334.375,
            "unit": "ns",
            "range": "± 12836.697625209245"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2550.5263157894738,
            "unit": "ns",
            "range": "± 502.9431853642791"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10056.521739130434,
            "unit": "ns",
            "range": "± 1898.5422023299113"
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
          "id": "5ddfb2fa0bbee25b6acc5ba86c92771399e8109c",
          "message": "Merge pull request #3747 from greymistcube/release/4.4.0\n\n🚀 Release 4.4.0",
          "timestamp": "2024-04-17T18:28:59+09:00",
          "tree_id": "4792fe9d6a901fb7e19cbe0a570d73b8e4a6bad0",
          "url": "https://github.com/planetarium/libplanet/commit/5ddfb2fa0bbee25b6acc5ba86c92771399e8109c"
        },
        "date": 1713346628750,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1983612.9032258065,
            "unit": "ns",
            "range": "± 54477.85324903741"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3082510.2040816327,
            "unit": "ns",
            "range": "± 389981.2997075724"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2369375,
            "unit": "ns",
            "range": "± 300411.80637433496"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8176004,
            "unit": "ns",
            "range": "± 161890.49663275483"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 184260.86956521738,
            "unit": "ns",
            "range": "± 4442.33140371081"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5110142.857142857,
            "unit": "ns",
            "range": "± 13416.434484829204"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 12667061.538461538,
            "unit": "ns",
            "range": "± 86862.81845973703"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32715193.333333332,
            "unit": "ns",
            "range": "± 200881.24233937202"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 67401303.33333333,
            "unit": "ns",
            "range": "± 402318.4060039061"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 129903664.28571428,
            "unit": "ns",
            "range": "± 1047943.4788099116"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3262879.53125,
            "unit": "ns",
            "range": "± 4952.245709399599"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1082111.5104166667,
            "unit": "ns",
            "range": "± 2972.6952567582684"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 735503.3072916666,
            "unit": "ns",
            "range": "± 1128.9403566823485"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1963650.9114583333,
            "unit": "ns",
            "range": "± 3543.397472272568"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 629073.1640625,
            "unit": "ns",
            "range": "± 716.1117556488956"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 569667.2330729166,
            "unit": "ns",
            "range": "± 1893.2925817516098"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2633451.515151515,
            "unit": "ns",
            "range": "± 63945.78817840606"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2697846.0784313725,
            "unit": "ns",
            "range": "± 86083.90084280408"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3529652.6315789474,
            "unit": "ns",
            "range": "± 133112.49955430176"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3381884,
            "unit": "ns",
            "range": "± 252180.80002853172"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8860612.5,
            "unit": "ns",
            "range": "± 212274.10725970144"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 170743.47826086957,
            "unit": "ns",
            "range": "± 7963.362396937718"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 162756.25,
            "unit": "ns",
            "range": "± 7552.41735714519"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 142637.5,
            "unit": "ns",
            "range": "± 1757.6025337563287"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2713713.3333333335,
            "unit": "ns",
            "range": "± 23481.082557992042"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2381087.5,
            "unit": "ns",
            "range": "± 44140.45574451325"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9528.888888888889,
            "unit": "ns",
            "range": "± 734.1194288603266"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52119.38775510204,
            "unit": "ns",
            "range": "± 5152.992487870974"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43555.769230769234,
            "unit": "ns",
            "range": "± 1780.329718475112"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 49431.31313131313,
            "unit": "ns",
            "range": "± 9272.129034343714"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2061.2903225806454,
            "unit": "ns",
            "range": "± 214.6950608292143"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9384.69387755102,
            "unit": "ns",
            "range": "± 1331.9509016071224"
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
          "id": "1fa87bec789e297ac0d12b9241a31e172eed014f",
          "message": "Merge pull request #3750 from greymistcube/prepare/4.5.0\n\n🔧 Prepare 4.5.0",
          "timestamp": "2024-04-18T12:46:03+09:00",
          "tree_id": "d051d198797ab21591fcdea2e718cde61ab745b7",
          "url": "https://github.com/planetarium/libplanet/commit/1fa87bec789e297ac0d12b9241a31e172eed014f"
        },
        "date": 1713412684882,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1797848,
            "unit": "ns",
            "range": "± 229051.9871650155"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2886219.3181818184,
            "unit": "ns",
            "range": "± 230447.99765352329"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2419394.9494949495,
            "unit": "ns",
            "range": "± 292083.4771555785"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8194611.764705882,
            "unit": "ns",
            "range": "± 171403.05284347816"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 181328.84615384616,
            "unit": "ns",
            "range": "± 6903.8874112801095"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5147253.333333333,
            "unit": "ns",
            "range": "± 22514.05486949578"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13210180,
            "unit": "ns",
            "range": "± 121431.3750936835"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33562880,
            "unit": "ns",
            "range": "± 373535.6498572602"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 65239000,
            "unit": "ns",
            "range": "± 317902.81819792325"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 129774478.57142857,
            "unit": "ns",
            "range": "± 940257.2194544766"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3295980.546875,
            "unit": "ns",
            "range": "± 5437.5186236082955"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1032013.75,
            "unit": "ns",
            "range": "± 2816.0107606645065"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 747476.4713541666,
            "unit": "ns",
            "range": "± 1191.1707450674219"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1935639.9088541667,
            "unit": "ns",
            "range": "± 2993.2255902361003"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 638009.62890625,
            "unit": "ns",
            "range": "± 1096.3669328329254"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 557645.1102120535,
            "unit": "ns",
            "range": "± 1000.8402356921513"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2478169.387755102,
            "unit": "ns",
            "range": "± 62281.09398820277"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2688087.1794871795,
            "unit": "ns",
            "range": "± 55984.115131870356"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3523650,
            "unit": "ns",
            "range": "± 124376.51700564758"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3380685,
            "unit": "ns",
            "range": "± 102278.11393325352"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8833385.294117646,
            "unit": "ns",
            "range": "± 267104.794021569"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 173842.5,
            "unit": "ns",
            "range": "± 9093.909145373282"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 163686.76470588235,
            "unit": "ns",
            "range": "± 7819.090766925672"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 146483.33333333334,
            "unit": "ns",
            "range": "± 4242.24105814395"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2753053.3333333335,
            "unit": "ns",
            "range": "± 48409.44221159851"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2420507.6923076925,
            "unit": "ns",
            "range": "± 31620.785925781518"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9643.157894736842,
            "unit": "ns",
            "range": "± 1111.6072924717485"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 51879.5918367347,
            "unit": "ns",
            "range": "± 5498.527622668842"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 42896.2962962963,
            "unit": "ns",
            "range": "± 1069.3209496906404"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 47064.04494382023,
            "unit": "ns",
            "range": "± 6184.644606365671"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2130.851063829787,
            "unit": "ns",
            "range": "± 286.2537395143562"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9467.34693877551,
            "unit": "ns",
            "range": "± 1438.1958565131395"
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
          "id": "690a98c0664abf024c89dc52a04b14e9f6943eaa",
          "message": "Merge pull request #3769 from greymistcube/bump/block-protocol-version-to-7\n\n♻️ Bumped block protocol version to 7",
          "timestamp": "2024-04-29T17:39:22+09:00",
          "tree_id": "727d6be8788aca036bb53f5b487cee8199711832",
          "url": "https://github.com/planetarium/libplanet/commit/690a98c0664abf024c89dc52a04b14e9f6943eaa"
        },
        "date": 1714380743963,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1819990.9090909092,
            "unit": "ns",
            "range": "± 226265.7986775861"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2944834.090909091,
            "unit": "ns",
            "range": "± 231180.67765495268"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2342151,
            "unit": "ns",
            "range": "± 294962.99528050714"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8299716.666666667,
            "unit": "ns",
            "range": "± 216272.631398321"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 183868.115942029,
            "unit": "ns",
            "range": "± 7984.958152191039"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5017207.142857143,
            "unit": "ns",
            "range": "± 15925.522055720898"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13301385.714285715,
            "unit": "ns",
            "range": "± 62792.10946439856"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 31843053.333333332,
            "unit": "ns",
            "range": "± 158032.29266137196"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 66741190,
            "unit": "ns",
            "range": "± 1032300.8315685611"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 129323000,
            "unit": "ns",
            "range": "± 959898.7823243096"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3294325.2864583335,
            "unit": "ns",
            "range": "± 20583.736596155915"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1068561.0630580357,
            "unit": "ns",
            "range": "± 2415.2572931800596"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 737652.67578125,
            "unit": "ns",
            "range": "± 1091.092496306878"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1943649.595424107,
            "unit": "ns",
            "range": "± 3203.9653230004114"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 626488.8997395834,
            "unit": "ns",
            "range": "± 1900.3609671729064"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 573337.939453125,
            "unit": "ns",
            "range": "± 1208.2905506111942"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2450557.37704918,
            "unit": "ns",
            "range": "± 49964.53895519766"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2811282.926829268,
            "unit": "ns",
            "range": "± 80397.72665454859"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3566758.3333333335,
            "unit": "ns",
            "range": "± 112018.22906499256"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3255669.8412698414,
            "unit": "ns",
            "range": "± 121859.5220244972"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9137431.42857143,
            "unit": "ns",
            "range": "± 297149.4363323024"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 175330.86419753087,
            "unit": "ns",
            "range": "± 9166.12843537702"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 169649.38271604938,
            "unit": "ns",
            "range": "± 8687.622279093257"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 146152,
            "unit": "ns",
            "range": "± 3850.012986991083"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2718033.3333333335,
            "unit": "ns",
            "range": "± 39857.902365182"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2493720,
            "unit": "ns",
            "range": "± 45581.45299508186"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10181.91489361702,
            "unit": "ns",
            "range": "± 1124.2165985347112"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 54624.22680412371,
            "unit": "ns",
            "range": "± 4608.919756626715"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44889.393939393936,
            "unit": "ns",
            "range": "± 2127.5394808144556"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 51073.333333333336,
            "unit": "ns",
            "range": "± 8242.719634094812"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2295.7894736842104,
            "unit": "ns",
            "range": "± 324.1735119430098"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9842.105263157895,
            "unit": "ns",
            "range": "± 1341.1315441033464"
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
          "id": "18d0d04302179b3878a62bcdb7ecc88ea730d423",
          "message": "Merge pull request #3761 from greymistcube/port/4.4.1-to-main\n\n🔀 Port 4.4.1 to main",
          "timestamp": "2024-04-30T12:57:11+09:00",
          "tree_id": "0ec950bdc14dbdfc86d3ef2f4ef41ea64ccdb1d2",
          "url": "https://github.com/planetarium/libplanet/commit/18d0d04302179b3878a62bcdb7ecc88ea730d423"
        },
        "date": 1714449962399,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 954003.0927835051,
            "unit": "ns",
            "range": "± 96928.01501372922"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1671880,
            "unit": "ns",
            "range": "± 53973.83243976005"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1512767,
            "unit": "ns",
            "range": "± 146020.08375424237"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6941997.777777778,
            "unit": "ns",
            "range": "± 263635.47534158954"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34470.32967032967,
            "unit": "ns",
            "range": "± 3246.2112789970506"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4996013.333333333,
            "unit": "ns",
            "range": "± 64898.57875030488"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 12773828.57142857,
            "unit": "ns",
            "range": "± 48179.65463636203"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32466443.333333332,
            "unit": "ns",
            "range": "± 340633.2432117458"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 62789220,
            "unit": "ns",
            "range": "± 602608.5974447143"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 128116140,
            "unit": "ns",
            "range": "± 908953.3751990331"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3301884.5833333335,
            "unit": "ns",
            "range": "± 6754.850843951018"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1051903.9192708333,
            "unit": "ns",
            "range": "± 2619.0013042731007"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 726089.0299479166,
            "unit": "ns",
            "range": "± 1631.3451147998244"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1930868.5546875,
            "unit": "ns",
            "range": "± 4847.135036561382"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 613222.9947916666,
            "unit": "ns",
            "range": "± 955.7975417155013"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 553819.4893973215,
            "unit": "ns",
            "range": "± 1463.3585984488093"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2117808,
            "unit": "ns",
            "range": "± 41731.542027583884"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2325350.9433962265,
            "unit": "ns",
            "range": "± 96094.97429955092"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2757100,
            "unit": "ns",
            "range": "± 49843.01068641133"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2978726.3157894737,
            "unit": "ns",
            "range": "± 65412.425273161665"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7692045.161290322,
            "unit": "ns",
            "range": "± 227590.15772320452"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 169349.39759036145,
            "unit": "ns",
            "range": "± 8468.296305373582"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 161691.83673469388,
            "unit": "ns",
            "range": "± 5978.636854622949"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 142261.11111111112,
            "unit": "ns",
            "range": "± 2443.9935710151526"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2704053.3333333335,
            "unit": "ns",
            "range": "± 34182.5533332569"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2380750,
            "unit": "ns",
            "range": "± 16578.75146083082"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9331.034482758621,
            "unit": "ns",
            "range": "± 651.3510725617526"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 50237.234042553195,
            "unit": "ns",
            "range": "± 4022.9177888732634"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44338.46153846154,
            "unit": "ns",
            "range": "± 1019.9626888468403"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 45822.34042553192,
            "unit": "ns",
            "range": "± 7562.259920729436"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1982.1052631578948,
            "unit": "ns",
            "range": "± 268.55759213091227"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9386.59793814433,
            "unit": "ns",
            "range": "± 1189.7679103137598"
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
          "id": "5fc36e9405e81b64f94c3928e70e3bf779698589",
          "message": "Merge pull request #3773 from greymistcube/port/4.4.2-to-main\n\n🔀 Port 4.4.2 to main",
          "timestamp": "2024-04-30T13:16:22+09:00",
          "tree_id": "97e3d273ab980dad005b511a0d3ee51b81025638",
          "url": "https://github.com/planetarium/libplanet/commit/5fc36e9405e81b64f94c3928e70e3bf779698589"
        },
        "date": 1714451127530,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 971226.5306122449,
            "unit": "ns",
            "range": "± 104560.2480603274"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1699687.878787879,
            "unit": "ns",
            "range": "± 79692.34596033677"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1481242.105263158,
            "unit": "ns",
            "range": "± 116902.36113130441"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6570236.842105263,
            "unit": "ns",
            "range": "± 126231.35378487618"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 38562.5,
            "unit": "ns",
            "range": "± 6340.367746266358"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5022800,
            "unit": "ns",
            "range": "± 20445.013363374732"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13297466.666666666,
            "unit": "ns",
            "range": "± 90990.41289111308"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32640538.46153846,
            "unit": "ns",
            "range": "± 214213.31867425024"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 65409964.28571428,
            "unit": "ns",
            "range": "± 332613.33026883856"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 131328476.92307693,
            "unit": "ns",
            "range": "± 859426.2651655524"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3368699.8697916665,
            "unit": "ns",
            "range": "± 4243.330588691083"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1051107.65625,
            "unit": "ns",
            "range": "± 2335.7001083630366"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 732739.9762834822,
            "unit": "ns",
            "range": "± 1383.023436163713"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1894472.5390625,
            "unit": "ns",
            "range": "± 4050.6301509403916"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 615268.3138020834,
            "unit": "ns",
            "range": "± 1407.5251999039538"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 569863.4974888393,
            "unit": "ns",
            "range": "± 1574.1172492722478"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2156204.0816326533,
            "unit": "ns",
            "range": "± 80630.62114560777"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2220996,
            "unit": "ns",
            "range": "± 37867.84563892344"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2796268.1818181816,
            "unit": "ns",
            "range": "± 66193.54296206034"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2873318.918918919,
            "unit": "ns",
            "range": "± 96224.1879901013"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7937061.764705882,
            "unit": "ns",
            "range": "± 233686.58110967954"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 169532.8125,
            "unit": "ns",
            "range": "± 6527.938848907775"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 160253.84615384616,
            "unit": "ns",
            "range": "± 7919.623700684241"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 139962.5,
            "unit": "ns",
            "range": "± 2587.1155108859493"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2667288.888888889,
            "unit": "ns",
            "range": "± 54121.86563552"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2349933.3333333335,
            "unit": "ns",
            "range": "± 33731.771091248396"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9019.78021978022,
            "unit": "ns",
            "range": "± 762.4842118904322"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 50774.22680412371,
            "unit": "ns",
            "range": "± 4486.165733640558"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43613.63636363636,
            "unit": "ns",
            "range": "± 700.5409165477602"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 51785.71428571428,
            "unit": "ns",
            "range": "± 11449.251539936671"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2100,
            "unit": "ns",
            "range": "± 283.6186884525779"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9151.648351648351,
            "unit": "ns",
            "range": "± 844.9013929793014"
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
          "id": "dec2f8ef5a78fdc7224274978f7b15a933fd3377",
          "message": "Merge pull request #3775 from greymistcube/update/blockmetadata\n\n♻️ Updated `BlockMetadata`",
          "timestamp": "2024-04-30T21:02:20+09:00",
          "tree_id": "3be6c2a083f4b7dbf0546649cfb9bc78968ed19a",
          "url": "https://github.com/planetarium/libplanet/commit/dec2f8ef5a78fdc7224274978f7b15a933fd3377"
        },
        "date": 1714479067148,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 949788.2978723404,
            "unit": "ns",
            "range": "± 87370.60583979914"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1702096.49122807,
            "unit": "ns",
            "range": "± 72921.24902178545"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1473704.081632653,
            "unit": "ns",
            "range": "± 108320.61152004146"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6778150,
            "unit": "ns",
            "range": "± 169775.52443050256"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34559.34065934066,
            "unit": "ns",
            "range": "± 4047.8795003468726"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5056306.666666667,
            "unit": "ns",
            "range": "± 21022.86057287796"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13107140,
            "unit": "ns",
            "range": "± 127280.49901132313"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32704292.85714286,
            "unit": "ns",
            "range": "± 301594.0763147245"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 64489533.333333336,
            "unit": "ns",
            "range": "± 968883.9969386477"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 135333580,
            "unit": "ns",
            "range": "± 2964366.71120938"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3283990.8203125,
            "unit": "ns",
            "range": "± 9243.978546169488"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1053840.931919643,
            "unit": "ns",
            "range": "± 2795.6464160943633"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 756149.0652901785,
            "unit": "ns",
            "range": "± 1721.7735087916496"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1948921.875,
            "unit": "ns",
            "range": "± 7473.35527153258"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 627683.9583333334,
            "unit": "ns",
            "range": "± 2262.621636035215"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 562243.7239583334,
            "unit": "ns",
            "range": "± 1284.0200684737204"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2219738.4615384615,
            "unit": "ns",
            "range": "± 55420.235127058615"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2312091.0714285714,
            "unit": "ns",
            "range": "± 95587.20583232451"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2889285.294117647,
            "unit": "ns",
            "range": "± 54234.086850158994"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2853723.076923077,
            "unit": "ns",
            "range": "± 99589.75972120477"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7686258.823529412,
            "unit": "ns",
            "range": "± 247679.03486917398"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 173693.33333333334,
            "unit": "ns",
            "range": "± 7395.552182926943"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 165735.33333333334,
            "unit": "ns",
            "range": "± 8235.366929801517"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 146538.88888888888,
            "unit": "ns",
            "range": "± 5050.167513973365"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2631985.714285714,
            "unit": "ns",
            "range": "± 36236.42148113196"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2407600,
            "unit": "ns",
            "range": "± 34097.151116856"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9378.350515463917,
            "unit": "ns",
            "range": "± 1049.228566229704"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52189.583333333336,
            "unit": "ns",
            "range": "± 4281.3298270186215"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43978.873239436616,
            "unit": "ns",
            "range": "± 2075.1533845517292"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 69467.01030927835,
            "unit": "ns",
            "range": "± 14563.401056883746"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2654.1666666666665,
            "unit": "ns",
            "range": "± 652.1085906772643"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10845.161290322581,
            "unit": "ns",
            "range": "± 1817.518382720998"
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
          "id": "0e5d1cf8b2213420f1911978199af05f7e931ebe",
          "message": "Merge pull request #3774 from greymistcube/feature/trie-sub-traversal\n\n✨ Added methods to traverse subtries of a `MerkleTrie`",
          "timestamp": "2024-05-02T14:19:58+09:00",
          "tree_id": "59de99951eb361cc190f2c2056f3042b68569ca5",
          "url": "https://github.com/planetarium/libplanet/commit/0e5d1cf8b2213420f1911978199af05f7e931ebe"
        },
        "date": 1714627806945,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 979698.9898989899,
            "unit": "ns",
            "range": "± 112248.16301842139"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1736632.558139535,
            "unit": "ns",
            "range": "± 98778.30250183304"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1498993.298969072,
            "unit": "ns",
            "range": "± 128329.42383700151"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6746662.5,
            "unit": "ns",
            "range": "± 130142.04483307204"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33306.02409638554,
            "unit": "ns",
            "range": "± 1830.7235273406586"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5110673.333333333,
            "unit": "ns",
            "range": "± 18638.572395770578"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13387115.384615384,
            "unit": "ns",
            "range": "± 68968.94042675836"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33579457.14285714,
            "unit": "ns",
            "range": "± 207967.13761955357"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 65250193.333333336,
            "unit": "ns",
            "range": "± 653116.5072904206"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 134474500,
            "unit": "ns",
            "range": "± 1134121.1392358132"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3288025.9895833335,
            "unit": "ns",
            "range": "± 5386.335674334202"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1040621.4425223215,
            "unit": "ns",
            "range": "± 1927.0831672918393"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 745077.7669270834,
            "unit": "ns",
            "range": "± 1589.3332436267526"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2011449.6875,
            "unit": "ns",
            "range": "± 3800.6252439857603"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 613604.8958333334,
            "unit": "ns",
            "range": "± 1076.527399382941"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 558282.4609375,
            "unit": "ns",
            "range": "± 1033.3328481605668"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2096110.4166666667,
            "unit": "ns",
            "range": "± 56101.720835227134"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2234343.5483870967,
            "unit": "ns",
            "range": "± 101199.22830809215"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2819655.5555555555,
            "unit": "ns",
            "range": "± 59906.006987635345"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2816166.153846154,
            "unit": "ns",
            "range": "± 130639.70883325813"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7943212.903225807,
            "unit": "ns",
            "range": "± 201275.7109736716"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 170093.10344827586,
            "unit": "ns",
            "range": "± 9475.068792821978"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 160811.11111111112,
            "unit": "ns",
            "range": "± 7892.4380915997035"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 143009.0909090909,
            "unit": "ns",
            "range": "± 3286.6119609436983"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2733040,
            "unit": "ns",
            "range": "± 45895.43705922347"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2424414.285714286,
            "unit": "ns",
            "range": "± 31694.839597998554"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10630.434782608696,
            "unit": "ns",
            "range": "± 1355.7966013644455"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 51747.87234042553,
            "unit": "ns",
            "range": "± 4068.756612360166"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44754.38596491228,
            "unit": "ns",
            "range": "± 1920.0139671588881"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 52298.97959183674,
            "unit": "ns",
            "range": "± 11767.932093284553"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2304.081632653061,
            "unit": "ns",
            "range": "± 427.15031935990123"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9314.893617021276,
            "unit": "ns",
            "range": "± 937.734337371572"
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
          "id": "5bcd7973f6ab61bf6a5d6dc7278130169e01e811",
          "message": "Merge pull request #3776 from greymistcube/refactor/world-migration\n\n♻️ Refactor world migration",
          "timestamp": "2024-05-03T10:01:49+09:00",
          "tree_id": "4cde64ce28ad2cc71c409cde339c3e98fcc30fd8",
          "url": "https://github.com/planetarium/libplanet/commit/5bcd7973f6ab61bf6a5d6dc7278130169e01e811"
        },
        "date": 1714698654933,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 964960.5263157894,
            "unit": "ns",
            "range": "± 90351.51975512347"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1757753.448275862,
            "unit": "ns",
            "range": "± 75834.56883246618"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1568979.292929293,
            "unit": "ns",
            "range": "± 164188.62985598226"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6873000,
            "unit": "ns",
            "range": "± 136001.14429665657"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36860.82474226804,
            "unit": "ns",
            "range": "± 5165.582346587986"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5122306.666666667,
            "unit": "ns",
            "range": "± 12027.199333574039"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13408323.076923076,
            "unit": "ns",
            "range": "± 73417.27945842806"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32679806.666666668,
            "unit": "ns",
            "range": "± 382880.70963359304"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 65202720,
            "unit": "ns",
            "range": "± 388341.6595878281"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 132194857.14285715,
            "unit": "ns",
            "range": "± 868480.6525140378"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3257738.203125,
            "unit": "ns",
            "range": "± 7398.25105980437"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1061917.5130208333,
            "unit": "ns",
            "range": "± 1304.9232606225785"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 749892.8152901785,
            "unit": "ns",
            "range": "± 1694.053192987536"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1905696.171875,
            "unit": "ns",
            "range": "± 3479.398684955638"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 616147.9266826923,
            "unit": "ns",
            "range": "± 918.3335510057312"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 554836.1328125,
            "unit": "ns",
            "range": "± 1694.042121065598"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2148997.8260869565,
            "unit": "ns",
            "range": "± 40179.11834180335"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2330743.9024390243,
            "unit": "ns",
            "range": "± 83689.67095400867"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2889503.703703704,
            "unit": "ns",
            "range": "± 79608.49143672996"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2803400,
            "unit": "ns",
            "range": "± 144045.23925621752"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8094882.53968254,
            "unit": "ns",
            "range": "± 369023.86999448156"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 173203.33333333334,
            "unit": "ns",
            "range": "± 10435.087741834051"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 161822.38805970148,
            "unit": "ns",
            "range": "± 7229.355579133748"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 144047.22222222222,
            "unit": "ns",
            "range": "± 4329.004247835497"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2692853.3333333335,
            "unit": "ns",
            "range": "± 41178.02580896527"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2393546.6666666665,
            "unit": "ns",
            "range": "± 42923.45124365778"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10495.78947368421,
            "unit": "ns",
            "range": "± 1325.5200335953002"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 50433.70786516854,
            "unit": "ns",
            "range": "± 2790.7698441072394"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44504.34782608696,
            "unit": "ns",
            "range": "± 2106.8121152591084"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 55010.204081632655,
            "unit": "ns",
            "range": "± 10262.166425844776"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2306.25,
            "unit": "ns",
            "range": "± 449.2830546079996"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9564.21052631579,
            "unit": "ns",
            "range": "± 980.6549905681998"
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
          "id": "1b7e5fdaa3eab1684afe9b2781de9cc8ff9704d6",
          "message": "Merge pull request #3777 from greymistcube/chore/trie-remove-test\n\n✅ Added tests for `ITrie`",
          "timestamp": "2024-05-03T15:29:40+09:00",
          "tree_id": "9fd4dd7ceaed61592c79916f65e2bb908955bb1c",
          "url": "https://github.com/planetarium/libplanet/commit/1b7e5fdaa3eab1684afe9b2781de9cc8ff9704d6"
        },
        "date": 1714718315043,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 953057,
            "unit": "ns",
            "range": "± 94671.10238754342"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1708214.5833333333,
            "unit": "ns",
            "range": "± 66949.56656807034"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1506616.1616161617,
            "unit": "ns",
            "range": "± 142054.6845746604"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6847727.2727272725,
            "unit": "ns",
            "range": "± 167157.90989309133"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34103.40909090909,
            "unit": "ns",
            "range": "± 2847.6022930224563"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5050450,
            "unit": "ns",
            "range": "± 20421.858575857088"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13588063.333333334,
            "unit": "ns",
            "range": "± 84215.29269562342"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32898371.42857143,
            "unit": "ns",
            "range": "± 174010.97413921662"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 66677892.85714286,
            "unit": "ns",
            "range": "± 422805.8992097833"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 129817453.33333333,
            "unit": "ns",
            "range": "± 779560.724168853"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3235924.3229166665,
            "unit": "ns",
            "range": "± 4718.310506698442"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1056821.010044643,
            "unit": "ns",
            "range": "± 2077.59519632659"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 728818.6174665178,
            "unit": "ns",
            "range": "± 1668.8364346064398"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1944334.7935267857,
            "unit": "ns",
            "range": "± 3265.6577407894088"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 634586.1783854166,
            "unit": "ns",
            "range": "± 2662.461916938779"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 563697.0703125,
            "unit": "ns",
            "range": "± 1360.2653861783938"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2096393.0232558139,
            "unit": "ns",
            "range": "± 76474.48187949717"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2303746.7741935486,
            "unit": "ns",
            "range": "± 68979.98494187025"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2845066.6666666665,
            "unit": "ns",
            "range": "± 59870.890501242466"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2957363.6363636362,
            "unit": "ns",
            "range": "± 72600.11508225527"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8021708.823529412,
            "unit": "ns",
            "range": "± 183416.66816898168"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 173953.73134328358,
            "unit": "ns",
            "range": "± 8023.1922982066635"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 163138.46153846153,
            "unit": "ns",
            "range": "± 8349.760565339673"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 143313.63636363635,
            "unit": "ns",
            "range": "± 2711.403687522379"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2673193.3333333335,
            "unit": "ns",
            "range": "± 43719.14367653516"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2368580,
            "unit": "ns",
            "range": "± 35040.450094956585"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9669.318181818182,
            "unit": "ns",
            "range": "± 707.3274867122902"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52180.208333333336,
            "unit": "ns",
            "range": "± 4958.833050153861"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45336.84210526316,
            "unit": "ns",
            "range": "± 1560.2184622901766"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 51628.42105263158,
            "unit": "ns",
            "range": "± 10747.98014827145"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2344.7916666666665,
            "unit": "ns",
            "range": "± 333.0464774477444"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9468.965517241379,
            "unit": "ns",
            "range": "± 960.6575200820196"
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
          "id": "7ad0c0a782885c06638f4d169381e983fd14b958",
          "message": "Merge pull request #3778 from greymistcube/refactor/mocks\n\n♻️ Updated `MockWorldState`",
          "timestamp": "2024-05-07T12:08:14+09:00",
          "tree_id": "116a17b61dfe84a8bbc9ebd01c9be48e276b30a2",
          "url": "https://github.com/planetarium/libplanet/commit/7ad0c0a782885c06638f4d169381e983fd14b958"
        },
        "date": 1715051966058,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1007908.1632653062,
            "unit": "ns",
            "range": "± 109053.84905875527"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1846941.0714285714,
            "unit": "ns",
            "range": "± 79238.72050911775"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1682276.530612245,
            "unit": "ns",
            "range": "± 158855.40127951052"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8161545.918367347,
            "unit": "ns",
            "range": "± 321268.58763293346"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 38026.086956521736,
            "unit": "ns",
            "range": "± 4574.96459039242"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5121340,
            "unit": "ns",
            "range": "± 51177.51738521795"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13838180,
            "unit": "ns",
            "range": "± 447122.0762373778"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 34769957.14285714,
            "unit": "ns",
            "range": "± 393986.9066826493"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 68086527.77777778,
            "unit": "ns",
            "range": "± 1260007.7916685117"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 139590570,
            "unit": "ns",
            "range": "± 3199714.076222897"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3432560.7291666665,
            "unit": "ns",
            "range": "± 32527.645510372247"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1114551.3020833333,
            "unit": "ns",
            "range": "± 8262.284099879176"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 774714.3484933035,
            "unit": "ns",
            "range": "± 6075.878115284356"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1955502.7083333333,
            "unit": "ns",
            "range": "± 12427.50619125676"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 643236.1263020834,
            "unit": "ns",
            "range": "± 5202.383554682643"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 576956.6615513393,
            "unit": "ns",
            "range": "± 3437.8322860447183"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2192106.6666666665,
            "unit": "ns",
            "range": "± 96931.22298155824"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2324765.4320987654,
            "unit": "ns",
            "range": "± 120625.77477522563"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2977579.1666666665,
            "unit": "ns",
            "range": "± 75794.6193981482"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3060901,
            "unit": "ns",
            "range": "± 251208.11827219793"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9747375.555555556,
            "unit": "ns",
            "range": "± 556568.6265187509"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 187484.78260869565,
            "unit": "ns",
            "range": "± 12912.630623639452"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 185976.59574468085,
            "unit": "ns",
            "range": "± 16096.466088694682"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 149548.83720930232,
            "unit": "ns",
            "range": "± 5513.333279770106"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2893145.098039216,
            "unit": "ns",
            "range": "± 117256.78200210935"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2682829.347826087,
            "unit": "ns",
            "range": "± 151097.31565970983"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11543.877551020409,
            "unit": "ns",
            "range": "± 1992.657466466855"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59427.27272727273,
            "unit": "ns",
            "range": "± 7350.549308667112"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 46459.49367088608,
            "unit": "ns",
            "range": "± 2405.043791239557"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 68418.94736842105,
            "unit": "ns",
            "range": "± 13250.116777781997"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2569.0721649484535,
            "unit": "ns",
            "range": "± 671.9624283802176"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10816.842105263158,
            "unit": "ns",
            "range": "± 2210.3072199852504"
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
          "id": "e3f0ce5513a2e8e8d88afa49b9b93af2337d0272",
          "message": "Merge pull request #3779 from greymistcube/feature/currency-account\n\n✨ Add `CurrencyAccount` to handle all `Currency` related logic",
          "timestamp": "2024-05-09T16:55:24+09:00",
          "tree_id": "eab19cdfc8dd9063e6307bdc4d787cf97ef6b4e6",
          "url": "https://github.com/planetarium/libplanet/commit/e3f0ce5513a2e8e8d88afa49b9b93af2337d0272"
        },
        "date": 1715241948493,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 962912.6315789474,
            "unit": "ns",
            "range": "± 90692.33029819014"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1726617.0212765958,
            "unit": "ns",
            "range": "± 66186.48659904546"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1565614,
            "unit": "ns",
            "range": "± 137282.83936398744"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6837463.333333333,
            "unit": "ns",
            "range": "± 203428.06486498524"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36741.05263157895,
            "unit": "ns",
            "range": "± 4837.915296085088"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5111866.666666667,
            "unit": "ns",
            "range": "± 40432.86616932649"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14006940,
            "unit": "ns",
            "range": "± 186678.73396368884"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33165900,
            "unit": "ns",
            "range": "± 299725.7127060387"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 66330386.666666664,
            "unit": "ns",
            "range": "± 833798.8999295991"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 134888146.66666666,
            "unit": "ns",
            "range": "± 1397135.3855384989"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3323161.7447916665,
            "unit": "ns",
            "range": "± 10547.923033521958"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1061400.225360577,
            "unit": "ns",
            "range": "± 1161.0445156444284"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 731010.52734375,
            "unit": "ns",
            "range": "± 2836.624109037427"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1954921.9791666667,
            "unit": "ns",
            "range": "± 8773.729662257723"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 626023.8151041666,
            "unit": "ns",
            "range": "± 1045.4272939223695"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 560548.0598958334,
            "unit": "ns",
            "range": "± 1100.0274028502452"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2164976.8292682925,
            "unit": "ns",
            "range": "± 73473.2673303367"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2294918.1818181816,
            "unit": "ns",
            "range": "± 108000.79794447518"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2802583.3333333335,
            "unit": "ns",
            "range": "± 82937.60048803342"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2874747.8260869565,
            "unit": "ns",
            "range": "± 107376.7049827236"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8349919.101123596,
            "unit": "ns",
            "range": "± 527570.6400086939"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 177172.72727272726,
            "unit": "ns",
            "range": "± 9647.294031574938"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 172268.88888888888,
            "unit": "ns",
            "range": "± 10555.57677243416"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 151882.60869565216,
            "unit": "ns",
            "range": "± 3749.139558729448"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2801280,
            "unit": "ns",
            "range": "± 49568.714211399805"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2513707.6923076925,
            "unit": "ns",
            "range": "± 20396.382912110566"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11365.263157894737,
            "unit": "ns",
            "range": "± 1752.248914908619"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 55616.84210526316,
            "unit": "ns",
            "range": "± 5722.81088187419"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 46883.87096774193,
            "unit": "ns",
            "range": "± 4001.909607288605"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 66598.9898989899,
            "unit": "ns",
            "range": "± 15262.368653930109"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2919.387755102041,
            "unit": "ns",
            "range": "± 566.1696520479203"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12045.833333333334,
            "unit": "ns",
            "range": "± 2651.947314975075"
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
          "id": "f3d6674a59cb00a961e67b68c8090d43de6dbc92",
          "message": "Merge pull request #3780 from greymistcube/refactor/currency-total-supply-trackable\n\n💥 Change `GetTotalSupply()`'s behavior",
          "timestamp": "2024-05-09T17:58:30+09:00",
          "tree_id": "4e72f339c0f3bbbf0d4c09579b070b72c837f9f9",
          "url": "https://github.com/planetarium/libplanet/commit/f3d6674a59cb00a961e67b68c8090d43de6dbc92"
        },
        "date": 1715245757233,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 932859.793814433,
            "unit": "ns",
            "range": "± 73209.99427985938"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1692268.888888889,
            "unit": "ns",
            "range": "± 56795.6137159705"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1496585.5670103093,
            "unit": "ns",
            "range": "± 123304.01705886243"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6867681.818181818,
            "unit": "ns",
            "range": "± 139906.96444887476"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36925.77319587629,
            "unit": "ns",
            "range": "± 6038.854719483162"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4927414.285714285,
            "unit": "ns",
            "range": "± 22627.03818759444"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13134482.608695652,
            "unit": "ns",
            "range": "± 328541.1191259349"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 31709706.666666668,
            "unit": "ns",
            "range": "± 161710.41784033345"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 64989746.666666664,
            "unit": "ns",
            "range": "± 476563.1525631754"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 126096264.28571428,
            "unit": "ns",
            "range": "± 617768.7264629089"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3303485.8072916665,
            "unit": "ns",
            "range": "± 5091.858577039378"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1073451.015625,
            "unit": "ns",
            "range": "± 2795.0186689276366"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 764210.1171875,
            "unit": "ns",
            "range": "± 1517.3884630589928"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1918412.109375,
            "unit": "ns",
            "range": "± 4093.2975134592166"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 614240.0165264423,
            "unit": "ns",
            "range": "± 1160.785176729343"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 570525.2994791666,
            "unit": "ns",
            "range": "± 1469.7664876827293"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2161091.891891892,
            "unit": "ns",
            "range": "± 71269.15874337222"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2248912,
            "unit": "ns",
            "range": "± 30283.73215661064"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2807755.263157895,
            "unit": "ns",
            "range": "± 85236.08453399084"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2838654,
            "unit": "ns",
            "range": "± 269781.5268065266"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7922567.647058823,
            "unit": "ns",
            "range": "± 223351.98029878046"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 171740.24390243902,
            "unit": "ns",
            "range": "± 8077.248335944482"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 164262.5,
            "unit": "ns",
            "range": "± 6438.677518079173"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 143747.61904761905,
            "unit": "ns",
            "range": "± 2188.748283293227"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2751928.5714285714,
            "unit": "ns",
            "range": "± 18659.228633220966"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2432600,
            "unit": "ns",
            "range": "± 45981.48902910097"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9633.333333333334,
            "unit": "ns",
            "range": "± 1264.4240253736202"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 50234.444444444445,
            "unit": "ns",
            "range": "± 3475.1496972399937"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44079.41176470588,
            "unit": "ns",
            "range": "± 2003.6205157670972"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 50238.14432989691,
            "unit": "ns",
            "range": "± 8858.181755903326"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2246.4646464646466,
            "unit": "ns",
            "range": "± 416.08307925150564"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9838.775510204081,
            "unit": "ns",
            "range": "± 1375.457386199128"
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
          "id": "85c21f75e245ece09b1a57a84826ce3e75f56c49",
          "message": "Merge pull request #3782 from greymistcube/chore/vscode-settings\n\n🔧 Updated `./vscode/settings.json` to comply with the newest version of vscode json schema",
          "timestamp": "2024-05-10T16:11:48+09:00",
          "tree_id": "2960f62a8ef4c1c66b0d521c9664c46ea0d145e9",
          "url": "https://github.com/planetarium/libplanet/commit/85c21f75e245ece09b1a57a84826ce3e75f56c49"
        },
        "date": 1715325745304,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 959099,
            "unit": "ns",
            "range": "± 105644.0990096255"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1699239.534883721,
            "unit": "ns",
            "range": "± 62593.21863290091"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1520215,
            "unit": "ns",
            "range": "± 147488.2925502697"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6671552,
            "unit": "ns",
            "range": "± 149656.43465395443"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36890.217391304344,
            "unit": "ns",
            "range": "± 5186.479883176577"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5098526.666666667,
            "unit": "ns",
            "range": "± 36548.15740258063"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13252278.57142857,
            "unit": "ns",
            "range": "± 78867.09783476961"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33312986.666666668,
            "unit": "ns",
            "range": "± 408922.2452577833"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 65613828.571428575,
            "unit": "ns",
            "range": "± 335206.38517089834"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 132930553.33333333,
            "unit": "ns",
            "range": "± 1404645.5347812674"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3315601.484375,
            "unit": "ns",
            "range": "± 8549.411968511298"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1064307.3567708333,
            "unit": "ns",
            "range": "± 2083.791889115391"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 722906.7661830357,
            "unit": "ns",
            "range": "± 2536.553392397401"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1947122.4088541667,
            "unit": "ns",
            "range": "± 2620.506822063018"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 608261.2174479166,
            "unit": "ns",
            "range": "± 1305.7632477374693"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 573127.0442708334,
            "unit": "ns",
            "range": "± 1997.554775227949"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2124863.0434782607,
            "unit": "ns",
            "range": "± 35968.130082651114"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2275222.5,
            "unit": "ns",
            "range": "± 74387.9797551411"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2791625,
            "unit": "ns",
            "range": "± 59629.06280983248"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2842954.761904762,
            "unit": "ns",
            "range": "± 93586.07672757204"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7949761.764705882,
            "unit": "ns",
            "range": "± 205021.94969660568"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 167212.3076923077,
            "unit": "ns",
            "range": "± 7545.6632348552475"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 162136.76470588235,
            "unit": "ns",
            "range": "± 7318.5698058781845"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 141092.3076923077,
            "unit": "ns",
            "range": "± 3736.969154480468"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2673800,
            "unit": "ns",
            "range": "± 30155.833361296547"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2380573.076923077,
            "unit": "ns",
            "range": "± 28189.452928537943"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9680,
            "unit": "ns",
            "range": "± 1052.312549638965"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 51109.183673469386,
            "unit": "ns",
            "range": "± 5231.705222289055"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44237.77777777778,
            "unit": "ns",
            "range": "± 1647.3517161698278"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 50403.092783505155,
            "unit": "ns",
            "range": "± 9144.778264218234"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2378.3505154639174,
            "unit": "ns",
            "range": "± 274.70696664950674"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9467.032967032967,
            "unit": "ns",
            "range": "± 1022.6387376732744"
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
          "id": "c6e6b63a930b02314c73be2ce5052aa38a3d63b0",
          "message": "Merge pull request #3783 from greymistcube/refactor/currency-account\n\n♻️ Refactor `CurrencyAccount`",
          "timestamp": "2024-05-14T09:59:47+09:00",
          "tree_id": "61ac3578bccca0fada5a93cdeec310cd8ed91952",
          "url": "https://github.com/planetarium/libplanet/commit/c6e6b63a930b02314c73be2ce5052aa38a3d63b0"
        },
        "date": 1715649200090,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 970739.3617021276,
            "unit": "ns",
            "range": "± 95511.07824962192"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1733760.1449275361,
            "unit": "ns",
            "range": "± 83613.94505303304"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1529147.8723404256,
            "unit": "ns",
            "range": "± 120149.50071600844"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6838050,
            "unit": "ns",
            "range": "± 106314.86927317095"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 37682.10526315789,
            "unit": "ns",
            "range": "± 5677.0718206560405"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5349860,
            "unit": "ns",
            "range": "± 72272.72554112552"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13510952.173913043,
            "unit": "ns",
            "range": "± 339626.9074220406"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 34406372.222222224,
            "unit": "ns",
            "range": "± 699556.54928933"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 68549780,
            "unit": "ns",
            "range": "± 970574.3389501761"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 136200786.66666666,
            "unit": "ns",
            "range": "± 1185213.4056583992"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3412062.1875,
            "unit": "ns",
            "range": "± 20945.627553230122"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1062848.8541666667,
            "unit": "ns",
            "range": "± 1663.4664967073375"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 742291.38671875,
            "unit": "ns",
            "range": "± 1627.9527737625442"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1920592.0703125,
            "unit": "ns",
            "range": "± 3951.6477075106536"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 622161.7112379808,
            "unit": "ns",
            "range": "± 669.025793826995"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 571214.4661458334,
            "unit": "ns",
            "range": "± 617.5916476291752"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2166129.1666666665,
            "unit": "ns",
            "range": "± 81846.3140966389"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2308384.090909091,
            "unit": "ns",
            "range": "± 128901.49574795713"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2969404,
            "unit": "ns",
            "range": "± 70120.81526432314"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2951677.777777778,
            "unit": "ns",
            "range": "± 145560.0386484223"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7946033.333333333,
            "unit": "ns",
            "range": "± 199287.60660143304"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 177976.5306122449,
            "unit": "ns",
            "range": "± 12865.856685492443"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 167589.6551724138,
            "unit": "ns",
            "range": "± 11162.708207727823"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 147289.41176470587,
            "unit": "ns",
            "range": "± 7876.230418305504"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2776926.6666666665,
            "unit": "ns",
            "range": "± 35859.875441315555"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2473386.6666666665,
            "unit": "ns",
            "range": "± 40153.96914497044"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12065.934065934065,
            "unit": "ns",
            "range": "± 1401.6038257986045"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 58349.43820224719,
            "unit": "ns",
            "range": "± 3949.744629130114"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45773.58490566038,
            "unit": "ns",
            "range": "± 1907.0870803598543"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 59218.681318681316,
            "unit": "ns",
            "range": "± 10665.446931177248"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4793,
            "unit": "ns",
            "range": "± 1540.8416301790814"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14904.081632653062,
            "unit": "ns",
            "range": "± 3506.427628643845"
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
          "id": "51b31e7a885df1342681b51dac515f443bc7bf7a",
          "message": "Merge pull request #3784 from greymistcube/release/4.5.0\n\n🚀 Release 4.5.0",
          "timestamp": "2024-05-14T17:05:00+09:00",
          "tree_id": "d0af614dc8458ab70ce6395965f553458859c58a",
          "url": "https://github.com/planetarium/libplanet/commit/51b31e7a885df1342681b51dac515f443bc7bf7a"
        },
        "date": 1715674601729,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1045015.2173913043,
            "unit": "ns",
            "range": "± 90807.82985893059"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1716798.8372093022,
            "unit": "ns",
            "range": "± 92350.60876793659"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1473802.105263158,
            "unit": "ns",
            "range": "± 105263.44052145709"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6852272.7272727275,
            "unit": "ns",
            "range": "± 213741.62742773"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 41040.65934065934,
            "unit": "ns",
            "range": "± 3374.116444739537"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5103357.142857143,
            "unit": "ns",
            "range": "± 33679.95784497897"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13147846.666666666,
            "unit": "ns",
            "range": "± 65776.35122863216"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33005720,
            "unit": "ns",
            "range": "± 289752.98642612324"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 64494784.615384616,
            "unit": "ns",
            "range": "± 310784.8555033794"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 132528286.66666667,
            "unit": "ns",
            "range": "± 538003.9536055828"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3277886.3411458335,
            "unit": "ns",
            "range": "± 17342.82235259166"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1071299.2708333333,
            "unit": "ns",
            "range": "± 4778.642391617682"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 735665.5192057291,
            "unit": "ns",
            "range": "± 1689.6357684719883"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1951379.609375,
            "unit": "ns",
            "range": "± 11466.199505494831"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 627456.3755580357,
            "unit": "ns",
            "range": "± 1451.3926460712273"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 560121.015625,
            "unit": "ns",
            "range": "± 1576.6895890324213"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2156495.945945946,
            "unit": "ns",
            "range": "± 66207.8360358693"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2284471.6981132077,
            "unit": "ns",
            "range": "± 75907.82207934956"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2843970.588235294,
            "unit": "ns",
            "range": "± 57940.45180944271"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2743547.6923076925,
            "unit": "ns",
            "range": "± 128192.12035516786"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7938641.176470588,
            "unit": "ns",
            "range": "± 189282.46347824237"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 182270.37037037036,
            "unit": "ns",
            "range": "± 4907.815470290858"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 176532.39436619717,
            "unit": "ns",
            "range": "± 7617.71946841024"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 143768.42105263157,
            "unit": "ns",
            "range": "± 2788.6780284211427"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2693477.777777778,
            "unit": "ns",
            "range": "± 56674.33858100835"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2411233.3333333335,
            "unit": "ns",
            "range": "± 30200.7726170485"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9663.829787234043,
            "unit": "ns",
            "range": "± 1362.5443517555782"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 55123.07692307692,
            "unit": "ns",
            "range": "± 3558.8099422599403"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45072.72727272727,
            "unit": "ns",
            "range": "± 1893.3073692913135"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 57140.86021505376,
            "unit": "ns",
            "range": "± 10861.732151868937"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2232.6530612244896,
            "unit": "ns",
            "range": "± 341.9246647007765"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9262.765957446809,
            "unit": "ns",
            "range": "± 1004.9323566336633"
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
          "id": "18ed59ae529733aa8b45ff4b4702d611642ea9ab",
          "message": "Merge pull request #3785 from greymistcube/prepare/4.6.0\n\n🔧 Prepare 4.6.0",
          "timestamp": "2024-05-16T10:53:21+09:00",
          "tree_id": "2f11cde1442f5b105e67bcf46dcfaa5e8560b9e2",
          "url": "https://github.com/planetarium/libplanet/commit/18ed59ae529733aa8b45ff4b4702d611642ea9ab"
        },
        "date": 1715825083721,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1038438.0952380953,
            "unit": "ns",
            "range": "± 24700.333523871217"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1708046.4285714286,
            "unit": "ns",
            "range": "± 65338.54483808498"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1502975,
            "unit": "ns",
            "range": "± 158383.17772051579"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6658016,
            "unit": "ns",
            "range": "± 172822.43700785303"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 32925,
            "unit": "ns",
            "range": "± 1656.7086479836453"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5112200,
            "unit": "ns",
            "range": "± 25150.631914810525"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13209775,
            "unit": "ns",
            "range": "± 82296.9581344403"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33046692.85714286,
            "unit": "ns",
            "range": "± 147496.81855388096"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 66216973.333333336,
            "unit": "ns",
            "range": "± 384048.2084074243"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 130853960,
            "unit": "ns",
            "range": "± 753424.3670449894"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3298412.7704326925,
            "unit": "ns",
            "range": "± 2067.1390488954653"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1039993.8755580357,
            "unit": "ns",
            "range": "± 2669.918470802554"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 728709.6940104166,
            "unit": "ns",
            "range": "± 1647.0810305932785"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1920007.5420673077,
            "unit": "ns",
            "range": "± 2080.1506392914325"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 618809.5284598215,
            "unit": "ns",
            "range": "± 955.5590601918907"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 565511.2434895834,
            "unit": "ns",
            "range": "± 1780.9129836380512"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2140343.243243243,
            "unit": "ns",
            "range": "± 67914.16371887115"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2308773.913043478,
            "unit": "ns",
            "range": "± 43885.524817843405"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2792291.6666666665,
            "unit": "ns",
            "range": "± 71582.80651389548"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2785288.2352941176,
            "unit": "ns",
            "range": "± 87299.78917918897"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8004958.333333333,
            "unit": "ns",
            "range": "± 267058.37925174984"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 166210,
            "unit": "ns",
            "range": "± 5780.482643502767"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 160500,
            "unit": "ns",
            "range": "± 6814.715315226763"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 140740,
            "unit": "ns",
            "range": "± 3462.417267362981"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2640333.3333333335,
            "unit": "ns",
            "range": "± 36840.63491516373"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2380746.6666666665,
            "unit": "ns",
            "range": "± 30041.230397730447"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9144.827586206897,
            "unit": "ns",
            "range": "± 624.0823254968806"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 48959.21052631579,
            "unit": "ns",
            "range": "± 2478.0733178058013"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 42784.61538461538,
            "unit": "ns",
            "range": "± 545.9642140991689"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 43756.1797752809,
            "unit": "ns",
            "range": "± 4794.005609664574"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2069.148936170213,
            "unit": "ns",
            "range": "± 248.014305754872"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 8794.505494505494,
            "unit": "ns",
            "range": "± 745.1118689107677"
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
          "id": "38b56e321a8add3e747d538d2bfc34808d43ac41",
          "message": "Merge pull request #3791 from greymistcube/chore/legacy-block-bencodex\n\n🔧 Added tests for unmarsahling PoW blocks",
          "timestamp": "2024-05-20T17:29:51+09:00",
          "tree_id": "26f1a50154b48c41457c3566dcc68ecaa41acc77",
          "url": "https://github.com/planetarium/libplanet/commit/38b56e321a8add3e747d538d2bfc34808d43ac41"
        },
        "date": 1716194452335,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1029917,
            "unit": "ns",
            "range": "± 142379.13680371045"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1765361.2676056337,
            "unit": "ns",
            "range": "± 86290.52513671604"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1559789.6907216494,
            "unit": "ns",
            "range": "± 113500.65756466647"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6693076,
            "unit": "ns",
            "range": "± 178355.33418805656"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36407.608695652176,
            "unit": "ns",
            "range": "± 4146.287461492528"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5038873.333333333,
            "unit": "ns",
            "range": "± 28376.03281107558"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13857506.666666666,
            "unit": "ns",
            "range": "± 202955.0916781721"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33439464.285714287,
            "unit": "ns",
            "range": "± 294426.9005716356"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 64283550,
            "unit": "ns",
            "range": "± 449639.72030607244"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 136767785.7142857,
            "unit": "ns",
            "range": "± 863341.5643320417"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3339370.9542410714,
            "unit": "ns",
            "range": "± 7247.812569259604"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1041418.4114583334,
            "unit": "ns",
            "range": "± 2505.132444861691"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 731038.5044642857,
            "unit": "ns",
            "range": "± 1509.4245546148568"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1910104.0755208333,
            "unit": "ns",
            "range": "± 7507.504251113931"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 619951.2765066965,
            "unit": "ns",
            "range": "± 1327.8904758514097"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 563250.9765625,
            "unit": "ns",
            "range": "± 820.2087444680567"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2161285.714285714,
            "unit": "ns",
            "range": "± 34732.24742208617"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2240433.3333333335,
            "unit": "ns",
            "range": "± 55008.866418200116"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2802670,
            "unit": "ns",
            "range": "± 73975.3337268579"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2921413.888888889,
            "unit": "ns",
            "range": "± 96681.64296960198"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7920228.571428572,
            "unit": "ns",
            "range": "± 187057.87747060944"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 172636.66666666666,
            "unit": "ns",
            "range": "± 10451.476429220984"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 162244.87179487178,
            "unit": "ns",
            "range": "± 7639.348708145785"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 142945.83333333334,
            "unit": "ns",
            "range": "± 3064.2367893896967"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2655114.285714286,
            "unit": "ns",
            "range": "± 28241.94526811977"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2394014.285714286,
            "unit": "ns",
            "range": "± 38508.63753543048"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10318.947368421053,
            "unit": "ns",
            "range": "± 1384.0500803294738"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52411.57894736842,
            "unit": "ns",
            "range": "± 5491.247642557426"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44898.80952380953,
            "unit": "ns",
            "range": "± 2273.7100962602763"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 50370.52631578947,
            "unit": "ns",
            "range": "± 10038.011518819834"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2295.6989247311826,
            "unit": "ns",
            "range": "± 339.7294251039198"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10311.458333333334,
            "unit": "ns",
            "range": "± 1310.3530895519136"
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
          "id": "1c4fac3cc821687eff4b53e0f264f889f93f0811",
          "message": "Merge pull request #3794 from greymistcube/refactor/remove-nonce\n\n🧹 Removed `Nonce` struct",
          "timestamp": "2024-05-21T13:38:02+09:00",
          "tree_id": "ae17204c2cad6f268f3fbce0f839b0751d3c882b",
          "url": "https://github.com/planetarium/libplanet/commit/1c4fac3cc821687eff4b53e0f264f889f93f0811"
        },
        "date": 1716266929715,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 956626.2626262626,
            "unit": "ns",
            "range": "± 106521.61760657861"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1689616.9491525423,
            "unit": "ns",
            "range": "± 74479.5717249029"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1435530.303030303,
            "unit": "ns",
            "range": "± 89410.35808887414"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6821758.064516129,
            "unit": "ns",
            "range": "± 191290.2258771447"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 35205.26315789474,
            "unit": "ns",
            "range": "± 4781.4216799059905"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5107769.230769231,
            "unit": "ns",
            "range": "± 13941.268749973022"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13221038.461538462,
            "unit": "ns",
            "range": "± 86364.40758458253"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32538973.333333332,
            "unit": "ns",
            "range": "± 213923.94999380593"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 65318485.71428572,
            "unit": "ns",
            "range": "± 339824.6897743302"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 129146273.33333333,
            "unit": "ns",
            "range": "± 947792.1264456573"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3329646.935096154,
            "unit": "ns",
            "range": "± 2206.612975702357"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1026559.8567708334,
            "unit": "ns",
            "range": "± 1385.4169133422063"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 727024.4698660715,
            "unit": "ns",
            "range": "± 1273.2744843448465"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1933465.234375,
            "unit": "ns",
            "range": "± 10108.9351564601"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 591749.8763020834,
            "unit": "ns",
            "range": "± 943.3983713202415"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 571103.84765625,
            "unit": "ns",
            "range": "± 1256.1477157499555"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2133692.1052631577,
            "unit": "ns",
            "range": "± 61295.206732835584"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2227251.515151515,
            "unit": "ns",
            "range": "± 60367.84699455146"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2782145,
            "unit": "ns",
            "range": "± 62881.53000515711"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2903765.6565656564,
            "unit": "ns",
            "range": "± 283940.68192020216"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8090558.139534884,
            "unit": "ns",
            "range": "± 299921.0358240809"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 168530,
            "unit": "ns",
            "range": "± 7643.607730020869"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 159495.5223880597,
            "unit": "ns",
            "range": "± 7199.272539761493"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 143550,
            "unit": "ns",
            "range": "± 2412.7948415413234"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2844092.8571428573,
            "unit": "ns",
            "range": "± 28704.47470572956"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2461200,
            "unit": "ns",
            "range": "± 32765.70506751577"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 8969.662921348314,
            "unit": "ns",
            "range": "± 813.5785840098979"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 48878.651685393255,
            "unit": "ns",
            "range": "± 3350.6604474515834"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44614.28571428572,
            "unit": "ns",
            "range": "± 1541.5090009467995"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 46667.34693877551,
            "unit": "ns",
            "range": "± 8074.508385790868"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2007.7777777777778,
            "unit": "ns",
            "range": "± 155.2292815086859"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 8904.444444444445,
            "unit": "ns",
            "range": "± 815.8418979783272"
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
          "id": "beba3cf988e99e6a8ae42d011124eccc2665ce84",
          "message": "Merge pull request #3795 from greymistcube/refactor/remove-atomic-action-renderer\n\n🧹 Removed `AtomicActionRenderer`",
          "timestamp": "2024-05-21T17:19:48+09:00",
          "tree_id": "ab02f6afd32a8f5c2f9934839fa2ea1ff5468cb9",
          "url": "https://github.com/planetarium/libplanet/commit/beba3cf988e99e6a8ae42d011124eccc2665ce84"
        },
        "date": 1716280282067,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 973187.8787878788,
            "unit": "ns",
            "range": "± 106689.9994096259"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1698977.5,
            "unit": "ns",
            "range": "± 59532.705889391764"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1501592.7835051545,
            "unit": "ns",
            "range": "± 135005.21151007366"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6715311.904761905,
            "unit": "ns",
            "range": "± 154984.1523388455"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 35032.22222222222,
            "unit": "ns",
            "range": "± 3938.397203727943"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5083485.714285715,
            "unit": "ns",
            "range": "± 11379.121038305007"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13485638.461538462,
            "unit": "ns",
            "range": "± 201719.29150208356"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32287793.333333332,
            "unit": "ns",
            "range": "± 214267.90462498332"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 65144807.14285714,
            "unit": "ns",
            "range": "± 356378.9954621251"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 132563726.66666667,
            "unit": "ns",
            "range": "± 706768.3510848786"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3343008.653846154,
            "unit": "ns",
            "range": "± 6220.7427389628465"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1060353.138950893,
            "unit": "ns",
            "range": "± 2015.5508647088182"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 731580.1548549107,
            "unit": "ns",
            "range": "± 2170.8219710894145"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1917356.7801339286,
            "unit": "ns",
            "range": "± 2648.119439323175"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 612236.2760416666,
            "unit": "ns",
            "range": "± 1198.7108770280963"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 565550.0651041666,
            "unit": "ns",
            "range": "± 1466.6821135805671"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2156902.5,
            "unit": "ns",
            "range": "± 76194.67471633569"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2248278.2608695654,
            "unit": "ns",
            "range": "± 80010.57683704763"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2816042.3076923075,
            "unit": "ns",
            "range": "± 75668.46726650103"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3281123.076923077,
            "unit": "ns",
            "range": "± 45358.280277625054"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7838411.764705882,
            "unit": "ns",
            "range": "± 216206.96981547898"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 172955.55555555556,
            "unit": "ns",
            "range": "± 6537.1411057493615"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 168266.66666666666,
            "unit": "ns",
            "range": "± 8060.354441678741"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 144988.23529411765,
            "unit": "ns",
            "range": "± 2902.5597222411243"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2921850,
            "unit": "ns",
            "range": "± 27341.73338717545"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2491507.1428571427,
            "unit": "ns",
            "range": "± 20321.09416669949"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10152.222222222223,
            "unit": "ns",
            "range": "± 968.7508205465493"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 51296.77419354839,
            "unit": "ns",
            "range": "± 3788.324500956086"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44663.63636363636,
            "unit": "ns",
            "range": "± 1138.7543034545965"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 48411.76470588235,
            "unit": "ns",
            "range": "± 6020.568153950136"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2291.4893617021276,
            "unit": "ns",
            "range": "± 346.9249165670753"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9908.791208791208,
            "unit": "ns",
            "range": "± 798.5609768199506"
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
          "id": "aa65bea2d37b00091a370c0397867fff1c0d3ce4",
          "message": "Merge pull request #3796 from greymistcube/chore/remove-unused-argument\n\n🧹 Removed unused parameter for the executable",
          "timestamp": "2024-05-21T17:42:38+09:00",
          "tree_id": "dd8f4de8666f22a17f6883e8dc97fba081f2699f",
          "url": "https://github.com/planetarium/libplanet/commit/aa65bea2d37b00091a370c0397867fff1c0d3ce4"
        },
        "date": 1716281502848,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 943697.8947368421,
            "unit": "ns",
            "range": "± 90732.80738490487"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1686758.3333333333,
            "unit": "ns",
            "range": "± 81046.59023507648"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1448879.5918367347,
            "unit": "ns",
            "range": "± 119290.43130902637"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6720890.909090909,
            "unit": "ns",
            "range": "± 159285.53773794888"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 37506.18556701031,
            "unit": "ns",
            "range": "± 4911.292566477741"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4960940,
            "unit": "ns",
            "range": "± 18406.551628622427"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13143076.923076924,
            "unit": "ns",
            "range": "± 49474.406748104855"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32700760,
            "unit": "ns",
            "range": "± 307343.78563984105"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 64648473.333333336,
            "unit": "ns",
            "range": "± 361966.7456443768"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 129793007.6923077,
            "unit": "ns",
            "range": "± 658472.1500837355"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3234586.640625,
            "unit": "ns",
            "range": "± 5016.578670599589"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1056336.2583705357,
            "unit": "ns",
            "range": "± 1495.431729138286"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 731886.4408052885,
            "unit": "ns",
            "range": "± 1331.062607476023"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1942464.9693080357,
            "unit": "ns",
            "range": "± 1557.5361594006486"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 605721.3151041666,
            "unit": "ns",
            "range": "± 1051.7464998237883"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 563901.7787388393,
            "unit": "ns",
            "range": "± 1422.5101676447434"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2146297.8260869565,
            "unit": "ns",
            "range": "± 77857.80054869385"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2156557.1428571427,
            "unit": "ns",
            "range": "± 46320.01007484058"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2752856,
            "unit": "ns",
            "range": "± 72352.81081847016"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2788250.793650794,
            "unit": "ns",
            "range": "± 127942.54112688679"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7860902.94117647,
            "unit": "ns",
            "range": "± 249067.31533231115"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 167216.66666666666,
            "unit": "ns",
            "range": "± 8229.09643697375"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 157572.131147541,
            "unit": "ns",
            "range": "± 6706.641761406896"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 145664.70588235295,
            "unit": "ns",
            "range": "± 2979.2912698472833"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2691935.714285714,
            "unit": "ns",
            "range": "± 33569.91801605115"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2434007.1428571427,
            "unit": "ns",
            "range": "± 23424.525749594304"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9673.684210526315,
            "unit": "ns",
            "range": "± 1076.0655803707684"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 49620.21276595745,
            "unit": "ns",
            "range": "± 3734.396347909008"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43862.121212121216,
            "unit": "ns",
            "range": "± 2071.474031216578"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 45547.42268041237,
            "unit": "ns",
            "range": "± 6996.309931901977"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2052.222222222222,
            "unit": "ns",
            "range": "± 254.50007296870012"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9127.472527472528,
            "unit": "ns",
            "range": "± 880.6646396729051"
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
          "id": "801606c529f89f010697b330cf8a3d3a5219627e",
          "message": "Merge pull request #3789 from greymistcube/refactor/deprecate-pow-evaluation\n\n💥 Deprecate PoW evaluation",
          "timestamp": "2024-05-23T18:11:10+09:00",
          "tree_id": "1a7ac15befca39545830338d6eaf9a61b458d006",
          "url": "https://github.com/planetarium/libplanet/commit/801606c529f89f010697b330cf8a3d3a5219627e"
        },
        "date": 1716456120650,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 969570.7070707071,
            "unit": "ns",
            "range": "± 91417.85233205356"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1728089.2307692308,
            "unit": "ns",
            "range": "± 78930.88575432014"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1528037.1134020619,
            "unit": "ns",
            "range": "± 148995.42381086998"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6990700,
            "unit": "ns",
            "range": "± 262048.9453660172"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 37816.666666666664,
            "unit": "ns",
            "range": "± 5078.699930342031"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5033000,
            "unit": "ns",
            "range": "± 25754.472565806063"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13061420,
            "unit": "ns",
            "range": "± 75486.24472615619"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 31933613.333333332,
            "unit": "ns",
            "range": "± 177104.65778607802"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 66736873.333333336,
            "unit": "ns",
            "range": "± 448491.1234456305"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 133925950,
            "unit": "ns",
            "range": "± 736508.0058575791"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3307640.4854910714,
            "unit": "ns",
            "range": "± 5196.568338869727"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1084225.15625,
            "unit": "ns",
            "range": "± 3728.9147023666965"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 757078.1315104166,
            "unit": "ns",
            "range": "± 1799.8422646160486"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1900715.0540865385,
            "unit": "ns",
            "range": "± 2741.940036731946"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 609077.5651041666,
            "unit": "ns",
            "range": "± 2118.350441659108"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 569917.5706129808,
            "unit": "ns",
            "range": "± 1037.3380170413977"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2151343.5897435895,
            "unit": "ns",
            "range": "± 49796.791245556946"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2334335.714285714,
            "unit": "ns",
            "range": "± 25329.235378020494"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2808895.652173913,
            "unit": "ns",
            "range": "± 67604.42749258949"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2800774.1379310344,
            "unit": "ns",
            "range": "± 116044.7487195528"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7948452.94117647,
            "unit": "ns",
            "range": "± 237057.71607071368"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 170733.76623376625,
            "unit": "ns",
            "range": "± 7492.796723127352"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 162929.50819672132,
            "unit": "ns",
            "range": "± 6296.542550275643"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 145608.33333333334,
            "unit": "ns",
            "range": "± 3634.7258334099934"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2766792.8571428573,
            "unit": "ns",
            "range": "± 45934.844563304505"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2549335.714285714,
            "unit": "ns",
            "range": "± 32355.729658875593"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9304.444444444445,
            "unit": "ns",
            "range": "± 870.2203144924312"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 50148.83720930233,
            "unit": "ns",
            "range": "± 2862.69080272581"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44279.48717948718,
            "unit": "ns",
            "range": "± 1363.2738241337106"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 49896.84210526316,
            "unit": "ns",
            "range": "± 8989.63294912036"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2341.8367346938776,
            "unit": "ns",
            "range": "± 388.2085392889455"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9372.631578947368,
            "unit": "ns",
            "range": "± 1164.496248065282"
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
          "id": "93e6bb9549e5e20c463f96540c4519638a3231a1",
          "message": "Merge pull request #3798 from greymistcube/fix/gql-queries\n\n♻️ Moved balance and validator query from account to world",
          "timestamp": "2024-05-23T20:39:44+09:00",
          "tree_id": "7b2229bdd720624df89696e1dd8ba479a70122ba",
          "url": "https://github.com/planetarium/libplanet/commit/93e6bb9549e5e20c463f96540c4519638a3231a1"
        },
        "date": 1716464936569,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 954045.4545454546,
            "unit": "ns",
            "range": "± 92804.5964210993"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1727195.4545454546,
            "unit": "ns",
            "range": "± 80449.70226424455"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1599802.0408163266,
            "unit": "ns",
            "range": "± 149514.8394383881"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6935567.741935484,
            "unit": "ns",
            "range": "± 209503.41029379735"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 37137.234042553195,
            "unit": "ns",
            "range": "± 4454.693888872705"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4956073.333333333,
            "unit": "ns",
            "range": "± 44378.20357316137"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13170992.857142856,
            "unit": "ns",
            "range": "± 112867.49524781917"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32645010,
            "unit": "ns",
            "range": "± 527414.3814063907"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 64847014.28571428,
            "unit": "ns",
            "range": "± 684946.5435145487"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 129885960,
            "unit": "ns",
            "range": "± 1548971.2548287378"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3353198.888221154,
            "unit": "ns",
            "range": "± 4044.3838790166615"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1080410.5208333333,
            "unit": "ns",
            "range": "± 1399.5804350018836"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 732452.6302083334,
            "unit": "ns",
            "range": "± 2117.7378360695675"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1950905.2083333333,
            "unit": "ns",
            "range": "± 6422.806067481025"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 610738.2421875,
            "unit": "ns",
            "range": "± 1154.9666244082027"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 556335.4817708334,
            "unit": "ns",
            "range": "± 1462.2438887344424"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2240279.3103448274,
            "unit": "ns",
            "range": "± 60834.9428448483"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2257229.347826087,
            "unit": "ns",
            "range": "± 127143.20085967917"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2843933.3333333335,
            "unit": "ns",
            "range": "± 53197.9143880481"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2841954.6875,
            "unit": "ns",
            "range": "± 131600.80321278438"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7945161.764705882,
            "unit": "ns",
            "range": "± 207615.1159538944"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 172123.2876712329,
            "unit": "ns",
            "range": "± 8457.71377941044"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 166268.49315068492,
            "unit": "ns",
            "range": "± 7893.155908625466"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 150252.5,
            "unit": "ns",
            "range": "± 5341.707568146139"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2760033.3333333335,
            "unit": "ns",
            "range": "± 28442.43978551033"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2425805.5555555555,
            "unit": "ns",
            "range": "± 50678.693425543854"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10662.5,
            "unit": "ns",
            "range": "± 1339.4617929365668"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 53030.61224489796,
            "unit": "ns",
            "range": "± 6289.729939677484"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43537.333333333336,
            "unit": "ns",
            "range": "± 2013.3187160139978"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 53811.95652173913,
            "unit": "ns",
            "range": "± 9370.140116363613"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2311.2244897959185,
            "unit": "ns",
            "range": "± 567.846838116596"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9909.278350515464,
            "unit": "ns",
            "range": "± 1658.5060090727993"
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
          "id": "a71dd8b1993bb417dfe70937592acf4802b046b8",
          "message": "Merge pull request #3799 from greymistcube/feature/mock-block-chain-states\n\n✨ Added `MockBlockChainStates`",
          "timestamp": "2024-05-24T18:44:31+09:00",
          "tree_id": "9c075b6c74914c6e00eca34d2a552a350b872be4",
          "url": "https://github.com/planetarium/libplanet/commit/a71dd8b1993bb417dfe70937592acf4802b046b8"
        },
        "date": 1716544408800,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 958508.1632653062,
            "unit": "ns",
            "range": "± 98852.59845514377"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1707710,
            "unit": "ns",
            "range": "± 82635.05791794091"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1521584,
            "unit": "ns",
            "range": "± 131560.83105038013"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6709612,
            "unit": "ns",
            "range": "± 164990.39951867907"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34524.444444444445,
            "unit": "ns",
            "range": "± 3662.329065263273"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5088840,
            "unit": "ns",
            "range": "± 24673.635437735677"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13077766.666666666,
            "unit": "ns",
            "range": "± 110342.74308889077"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32663053.846153848,
            "unit": "ns",
            "range": "± 317660.5200928202"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 65680793.333333336,
            "unit": "ns",
            "range": "± 910218.3203312636"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 128521242.85714285,
            "unit": "ns",
            "range": "± 761701.8856727104"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3316987.7704326925,
            "unit": "ns",
            "range": "± 2352.4352712755704"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1071650.68359375,
            "unit": "ns",
            "range": "± 1720.1533240527153"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 735074.27734375,
            "unit": "ns",
            "range": "± 1203.0463519886227"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1941041.962139423,
            "unit": "ns",
            "range": "± 1585.5274668266036"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 625258.7965745192,
            "unit": "ns",
            "range": "± 892.218340803569"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 569068.5872395834,
            "unit": "ns",
            "range": "± 1346.327839608293"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2178633.3333333335,
            "unit": "ns",
            "range": "± 50440.24517519055"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2252561.111111111,
            "unit": "ns",
            "range": "± 66359.92025215985"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2803031.0344827585,
            "unit": "ns",
            "range": "± 80396.05579987951"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3219166.6666666665,
            "unit": "ns",
            "range": "± 57172.95397884097"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7941832.352941177,
            "unit": "ns",
            "range": "± 205344.49652937372"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 167332.8947368421,
            "unit": "ns",
            "range": "± 8181.9865258243935"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 161020.6896551724,
            "unit": "ns",
            "range": "± 6648.565565400929"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 142932,
            "unit": "ns",
            "range": "± 3463.225856529333"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2752973.3333333335,
            "unit": "ns",
            "range": "± 49579.538790378705"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2477080,
            "unit": "ns",
            "range": "± 29659.621421338856"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9515.90909090909,
            "unit": "ns",
            "range": "± 749.2350679478652"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52932.65306122449,
            "unit": "ns",
            "range": "± 4076.302537010465"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43758.333333333336,
            "unit": "ns",
            "range": "± 678.8470618138767"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 52144.32989690721,
            "unit": "ns",
            "range": "± 8540.332852024429"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2112.3711340206187,
            "unit": "ns",
            "range": "± 212.25855497028988"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9365.934065934065,
            "unit": "ns",
            "range": "± 770.3130359679587"
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
          "id": "3709ea24fe6f60356b83efcbeb2daa1a3a5d1f31",
          "message": "Merge pull request #3804 from greymistcube/port/4.5.1-to-main\n\n🔀 Port 4.5.1 to main",
          "timestamp": "2024-05-27T11:00:08+09:00",
          "tree_id": "9e385bb38acd6c3c091b5265e076667a5848f8ce",
          "url": "https://github.com/planetarium/libplanet/commit/3709ea24fe6f60356b83efcbeb2daa1a3a5d1f31"
        },
        "date": 1716775764613,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 967710.3092783506,
            "unit": "ns",
            "range": "± 105078.82109450831"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1704441.1764705882,
            "unit": "ns",
            "range": "± 54926.89007325492"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1508536.8686868686,
            "unit": "ns",
            "range": "± 115488.53255773806"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6799200,
            "unit": "ns",
            "range": "± 139232.03654331857"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36759.183673469386,
            "unit": "ns",
            "range": "± 5351.805490407267"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5283775,
            "unit": "ns",
            "range": "± 27518.559852645565"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13284060,
            "unit": "ns",
            "range": "± 186344.9060210662"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32903314.285714287,
            "unit": "ns",
            "range": "± 255632.8462618059"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 66570466.666666664,
            "unit": "ns",
            "range": "± 705786.2522106278"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 132453040,
            "unit": "ns",
            "range": "± 1921466.9023579727"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3292521.6045673075,
            "unit": "ns",
            "range": "± 4537.208466171937"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1056313.4114583333,
            "unit": "ns",
            "range": "± 2622.1603580353044"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 741130.8528645834,
            "unit": "ns",
            "range": "± 2723.0065145904114"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1941288.57421875,
            "unit": "ns",
            "range": "± 2541.4987580942"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 616891.259765625,
            "unit": "ns",
            "range": "± 1452.1688242546807"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 566501.3392857143,
            "unit": "ns",
            "range": "± 2819.9992531029284"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2152234.210526316,
            "unit": "ns",
            "range": "± 71883.07802338908"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2327760.5263157897,
            "unit": "ns",
            "range": "± 79556.3977737965"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2840734.782608696,
            "unit": "ns",
            "range": "± 70419.29364170054"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2796976.3440860217,
            "unit": "ns",
            "range": "± 157947.6876785816"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8082794.117647059,
            "unit": "ns",
            "range": "± 213218.58600716502"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 171088.57142857142,
            "unit": "ns",
            "range": "± 8117.623391351038"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 163681.35593220338,
            "unit": "ns",
            "range": "± 6618.533918716211"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 144127.77777777778,
            "unit": "ns",
            "range": "± 2683.89654301256"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2776453.3333333335,
            "unit": "ns",
            "range": "± 48816.00830328784"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2484885.714285714,
            "unit": "ns",
            "range": "± 37031.18970528777"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10584.536082474227,
            "unit": "ns",
            "range": "± 1791.550783433725"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52451.041666666664,
            "unit": "ns",
            "range": "± 4777.292666280583"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44407.792207792205,
            "unit": "ns",
            "range": "± 2103.178436367595"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 53434.0206185567,
            "unit": "ns",
            "range": "± 13019.311670536596"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2286.734693877551,
            "unit": "ns",
            "range": "± 411.09302509136694"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11642.045454545454,
            "unit": "ns",
            "range": "± 1055.8780832301463"
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
          "id": "acefa767a052bbf8b7b8bace776de53727691e83",
          "message": "Merge pull request #3805 from greymistcube/release/4.6.0\n\n🚀 Release 4.6.0",
          "timestamp": "2024-05-27T13:54:48+09:00",
          "tree_id": "26b04820a6d9dd8d731598d5a003c296450a4cdc",
          "url": "https://github.com/planetarium/libplanet/commit/acefa767a052bbf8b7b8bace776de53727691e83"
        },
        "date": 1716786230195,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 962982.1052631579,
            "unit": "ns",
            "range": "± 109817.86175972543"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1699411.3636363635,
            "unit": "ns",
            "range": "± 49155.83296391509"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1487677,
            "unit": "ns",
            "range": "± 117954.69756553903"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6936932.432432433,
            "unit": "ns",
            "range": "± 234381.19953762655"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 35777.41935483871,
            "unit": "ns",
            "range": "± 4382.775798813441"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5066853.333333333,
            "unit": "ns",
            "range": "± 13399.513139698487"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13202828.57142857,
            "unit": "ns",
            "range": "± 80124.4745915468"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32572835.714285713,
            "unit": "ns",
            "range": "± 141938.53820007315"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 65609308.333333336,
            "unit": "ns",
            "range": "± 153469.34818827285"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 130233861.53846154,
            "unit": "ns",
            "range": "± 566011.4891920799"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3359370.2604166665,
            "unit": "ns",
            "range": "± 8468.275873699267"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1040513.6588541666,
            "unit": "ns",
            "range": "± 1370.3319656257959"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 733739.1392299107,
            "unit": "ns",
            "range": "± 1250.8147417195898"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1944656.40625,
            "unit": "ns",
            "range": "± 4363.688909392825"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 615335.5887276785,
            "unit": "ns",
            "range": "± 1704.4513162344313"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 566501.0114397322,
            "unit": "ns",
            "range": "± 1218.5167418850474"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2163671.052631579,
            "unit": "ns",
            "range": "± 74631.26621034456"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2208532,
            "unit": "ns",
            "range": "± 35628.60180622679"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2817069.230769231,
            "unit": "ns",
            "range": "± 35011.17404047325"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2840879.1666666665,
            "unit": "ns",
            "range": "± 110437.23539184105"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8072135.294117647,
            "unit": "ns",
            "range": "± 241525.5618975161"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 167092.46575342465,
            "unit": "ns",
            "range": "± 7482.756433000905"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 162297.87234042553,
            "unit": "ns",
            "range": "± 6305.363119623267"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 144110.7142857143,
            "unit": "ns",
            "range": "± 4021.8237327817014"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2782700,
            "unit": "ns",
            "range": "± 61782.04358137491"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2504192.8571428573,
            "unit": "ns",
            "range": "± 30097.21337179329"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9451.111111111111,
            "unit": "ns",
            "range": "± 1109.9392072070348"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 51301.041666666664,
            "unit": "ns",
            "range": "± 4938.282138806585"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43630.30303030303,
            "unit": "ns",
            "range": "± 1175.660678215883"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 49779.166666666664,
            "unit": "ns",
            "range": "± 9568.709055168109"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2341.237113402062,
            "unit": "ns",
            "range": "± 332.21246255207546"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9642.553191489362,
            "unit": "ns",
            "range": "± 989.1333625796876"
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
          "id": "5d37f60fcf76933623a10eb5366eef0bf299798a",
          "message": "Merge pull request #3809 from todaymoon/main\n\nchore: fix some comments",
          "timestamp": "2024-06-10T15:24:06+09:00",
          "tree_id": "b7597b4ee138859e7995a8b7a1eb2fd96f4ed1a3",
          "url": "https://github.com/planetarium/libplanet/commit/5d37f60fcf76933623a10eb5366eef0bf299798a"
        },
        "date": 1718001279394,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 981258.7628865979,
            "unit": "ns",
            "range": "± 102155.74277438808"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1692453.0612244897,
            "unit": "ns",
            "range": "± 57784.8671872692"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1511235,
            "unit": "ns",
            "range": "± 132928.3010012191"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6646050,
            "unit": "ns",
            "range": "± 170594.5638565054"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 37011.70212765958,
            "unit": "ns",
            "range": "± 5262.565227199854"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5015784.615384615,
            "unit": "ns",
            "range": "± 11497.017450469937"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13074392.857142856,
            "unit": "ns",
            "range": "± 71479.42645680229"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32491920,
            "unit": "ns",
            "range": "± 172320.34619941347"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 65221136.666666664,
            "unit": "ns",
            "range": "± 316444.67100825673"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 131457457.14285715,
            "unit": "ns",
            "range": "± 517698.68235710793"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3284023.359375,
            "unit": "ns",
            "range": "± 5319.72301897101"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1081411.9661458333,
            "unit": "ns",
            "range": "± 8541.453408770632"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 738962.71484375,
            "unit": "ns",
            "range": "± 3079.1830149030448"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1926907.196514423,
            "unit": "ns",
            "range": "± 5591.174550871712"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 608952.421875,
            "unit": "ns",
            "range": "± 1208.1789453529032"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 558333.4505208334,
            "unit": "ns",
            "range": "± 968.3942810542804"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2183239.7959183673,
            "unit": "ns",
            "range": "± 86582.05463821096"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2298348.484848485,
            "unit": "ns",
            "range": "± 66917.29560253893"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2815833.3333333335,
            "unit": "ns",
            "range": "± 63091.886592858784"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2871576.470588235,
            "unit": "ns",
            "range": "± 91231.42088591379"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7825492.307692308,
            "unit": "ns",
            "range": "± 272087.10329851456"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 170416.32653061225,
            "unit": "ns",
            "range": "± 6743.927729779569"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 162560.67415730338,
            "unit": "ns",
            "range": "± 8412.742202072348"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 144970,
            "unit": "ns",
            "range": "± 3337.0488064818746"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2756040,
            "unit": "ns",
            "range": "± 35778.98026176023"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2523020,
            "unit": "ns",
            "range": "± 29856.47094254204"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9827.173913043478,
            "unit": "ns",
            "range": "± 952.2793085590984"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 49814.4578313253,
            "unit": "ns",
            "range": "± 2665.915507879298"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44285.365853658535,
            "unit": "ns",
            "range": "± 1221.5893286227079"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 59088.17204301075,
            "unit": "ns",
            "range": "± 15300.83721396775"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2604.040404040404,
            "unit": "ns",
            "range": "± 429.74106867503076"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9579.38144329897,
            "unit": "ns",
            "range": "± 1094.9636737058427"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e69286704944c973203c23a106a8e0fc854c1b09",
          "message": "Merge pull request #3811 from greymistcube/sloth\n\n🔀 Rebase and merge Sloth update to main",
          "timestamp": "2024-06-10T21:37:35+09:00",
          "tree_id": "ddd64f0e67d756955f68f2982f3aca3814212032",
          "url": "https://github.com/planetarium/libplanet/commit/e69286704944c973203c23a106a8e0fc854c1b09"
        },
        "date": 1718023578815,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1028578.350515464,
            "unit": "ns",
            "range": "± 108143.16246955942"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1846133.3333333333,
            "unit": "ns",
            "range": "± 69409.72554332713"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1648006.1855670102,
            "unit": "ns",
            "range": "± 139188.07555967887"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6733026.666666667,
            "unit": "ns",
            "range": "± 200431.0164815219"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33865.95744680851,
            "unit": "ns",
            "range": "± 4147.140566690523"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5047113.333333333,
            "unit": "ns",
            "range": "± 31526.675024417622"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13493320,
            "unit": "ns",
            "range": "± 114801.65006280552"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33686423.333333336,
            "unit": "ns",
            "range": "± 335887.87556620874"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 65765166.666666664,
            "unit": "ns",
            "range": "± 369973.548604041"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 132803840,
            "unit": "ns",
            "range": "± 632760.7455767599"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3278010.7421875,
            "unit": "ns",
            "range": "± 3726.1542868006645"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1071597.6822916667,
            "unit": "ns",
            "range": "± 2384.0502560744503"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 733781.796875,
            "unit": "ns",
            "range": "± 1528.6965671394353"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1960822.6302083333,
            "unit": "ns",
            "range": "± 2988.971425705966"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 625315.8528645834,
            "unit": "ns",
            "range": "± 1109.6894091036615"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 564063.3719308035,
            "unit": "ns",
            "range": "± 818.8259342342092"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2149867.3913043477,
            "unit": "ns",
            "range": "± 78664.05378244833"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2382307.1428571427,
            "unit": "ns",
            "range": "± 37360.4987671721"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2769914.7540983604,
            "unit": "ns",
            "range": "± 118499.01945595101"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2393157.1428571427,
            "unit": "ns",
            "range": "± 67929.62823050331"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3047392.3076923075,
            "unit": "ns",
            "range": "± 33512.223181461755"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 180950,
            "unit": "ns",
            "range": "± 7079.368638336354"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 171736.61971830987,
            "unit": "ns",
            "range": "± 8411.543759052958"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 149510.8108108108,
            "unit": "ns",
            "range": "± 4780.445340934008"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2849935.714285714,
            "unit": "ns",
            "range": "± 32345.14842095529"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2555635.714285714,
            "unit": "ns",
            "range": "± 29274.0264803738"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11165.625,
            "unit": "ns",
            "range": "± 1595.2447840543568"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 55270.32967032967,
            "unit": "ns",
            "range": "± 3912.728360548841"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45369.354838709674,
            "unit": "ns",
            "range": "± 2043.8302766849886"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 52254.32098765432,
            "unit": "ns",
            "range": "± 3281.1221168495103"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2516.1290322580644,
            "unit": "ns",
            "range": "± 414.4903425162892"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10027.659574468085,
            "unit": "ns",
            "range": "± 1336.4536812041479"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a78b5bf2ff521d08ef5fc25f8d26dc56ccaffbc8",
          "message": "Merge pull request #3808 from OnedgeLee/sloth\n\nMinor fixes for Sloth",
          "timestamp": "2024-06-11T16:00:49+09:00",
          "tree_id": "21e2500216d4541a76cc9c12ac2570103c4633e0",
          "url": "https://github.com/planetarium/libplanet/commit/a78b5bf2ff521d08ef5fc25f8d26dc56ccaffbc8"
        },
        "date": 1718089776994,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1011171.2765957447,
            "unit": "ns",
            "range": "± 97480.23744829735"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1754364.8648648649,
            "unit": "ns",
            "range": "± 87412.34738089934"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1611427,
            "unit": "ns",
            "range": "± 157491.1264808339"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6923472.7272727275,
            "unit": "ns",
            "range": "± 238393.8936743687"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 38819.19191919192,
            "unit": "ns",
            "range": "± 4449.436487312514"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5119366.666666667,
            "unit": "ns",
            "range": "± 20804.1090263667"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13375821.42857143,
            "unit": "ns",
            "range": "± 76829.43324785634"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33117580,
            "unit": "ns",
            "range": "± 855199.4762432135"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 66888646.666666664,
            "unit": "ns",
            "range": "± 278119.34454389144"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 131278678.57142857,
            "unit": "ns",
            "range": "± 830902.1910212755"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3270805.4427083335,
            "unit": "ns",
            "range": "± 7307.73500377625"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1054840.3125,
            "unit": "ns",
            "range": "± 3270.0581452685974"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 755623.7583705357,
            "unit": "ns",
            "range": "± 1352.30031728346"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1949753.9322916667,
            "unit": "ns",
            "range": "± 4510.4055696252535"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 631989.6614583334,
            "unit": "ns",
            "range": "± 1211.0847392723908"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 556826.69921875,
            "unit": "ns",
            "range": "± 1077.5439592092787"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2120048,
            "unit": "ns",
            "range": "± 33302.02846674659"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2309375.757575758,
            "unit": "ns",
            "range": "± 59421.52403750172"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2751439.393939394,
            "unit": "ns",
            "range": "± 73465.59117791956"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2312634.6153846155,
            "unit": "ns",
            "range": "± 43294.202312159"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2967320,
            "unit": "ns",
            "range": "± 43414.9447606631"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 174645.55555555556,
            "unit": "ns",
            "range": "± 11044.894708691992"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 165600,
            "unit": "ns",
            "range": "± 8098.14793641114"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 147158.82352941178,
            "unit": "ns",
            "range": "± 4698.750165674866"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2795944.4444444445,
            "unit": "ns",
            "range": "± 54641.001866431034"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2619100,
            "unit": "ns",
            "range": "± 57948.07112724651"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9943.877551020409,
            "unit": "ns",
            "range": "± 1588.299117907095"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 51421.739130434784,
            "unit": "ns",
            "range": "± 4031.1105029809337"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44685.10638297872,
            "unit": "ns",
            "range": "± 1720.0832542293151"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 53454.08163265306,
            "unit": "ns",
            "range": "± 9837.390991469261"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2432.2916666666665,
            "unit": "ns",
            "range": "± 424.88259472264286"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9694.318181818182,
            "unit": "ns",
            "range": "± 922.3106857479924"
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
          "id": "bd50824d8d436cd73165cb7f6e92e55f261036c5",
          "message": "Merge pull request #3819 from greymistcube/port/4.6.1-to-main\n\n🔀 Port 4.6.1 to main",
          "timestamp": "2024-06-11T19:56:15+09:00",
          "tree_id": "babb4b2041239105e288ae9faee7c3f6d4dd8d32",
          "url": "https://github.com/planetarium/libplanet/commit/bd50824d8d436cd73165cb7f6e92e55f261036c5"
        },
        "date": 1718103932846,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1116297.9797979798,
            "unit": "ns",
            "range": "± 145613.14135287603"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1874645.9016393442,
            "unit": "ns",
            "range": "± 83919.38308831576"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1689987.6288659794,
            "unit": "ns",
            "range": "± 167978.42449362605"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7208867.1875,
            "unit": "ns",
            "range": "± 333133.14038640814"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 38981.44329896907,
            "unit": "ns",
            "range": "± 6633.72585569545"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5255453.333333333,
            "unit": "ns",
            "range": "± 63461.40409354184"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13757628.57142857,
            "unit": "ns",
            "range": "± 327284.4575332858"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 34813925,
            "unit": "ns",
            "range": "± 598252.5759799674"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 68899780,
            "unit": "ns",
            "range": "± 590068.5592127652"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 143327126.66666666,
            "unit": "ns",
            "range": "± 1713228.3258167757"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3455590.8072916665,
            "unit": "ns",
            "range": "± 15568.01773442694"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1080401.1868990385,
            "unit": "ns",
            "range": "± 2439.792429455995"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 754857.958984375,
            "unit": "ns",
            "range": "± 2268.2315602680583"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1997405.1339285714,
            "unit": "ns",
            "range": "± 24135.48589822248"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 622077.9017857143,
            "unit": "ns",
            "range": "± 1492.1957894649124"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 570342.16796875,
            "unit": "ns",
            "range": "± 1049.5444861558506"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2255772,
            "unit": "ns",
            "range": "± 90471.69822431674"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2351486.5384615385,
            "unit": "ns",
            "range": "± 96774.8043470523"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2819628.947368421,
            "unit": "ns",
            "range": "± 95991.8321634985"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2370270.588235294,
            "unit": "ns",
            "range": "± 72219.19298917103"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3108611.7647058824,
            "unit": "ns",
            "range": "± 62955.30043563589"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 190424.48979591837,
            "unit": "ns",
            "range": "± 15997.740247796788"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 176256.1797752809,
            "unit": "ns",
            "range": "± 9876.555746911927"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 151441.02564102566,
            "unit": "ns",
            "range": "± 7821.721933138124"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2897807.1428571427,
            "unit": "ns",
            "range": "± 28179.16481498927"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2632496.153846154,
            "unit": "ns",
            "range": "± 57828.68824913275"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13580.41237113402,
            "unit": "ns",
            "range": "± 2606.2680525057335"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62960.82474226804,
            "unit": "ns",
            "range": "± 9512.705940620406"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 58759.09090909091,
            "unit": "ns",
            "range": "± 13373.077515155032"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 72120,
            "unit": "ns",
            "range": "± 15022.398879177266"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3798.9473684210525,
            "unit": "ns",
            "range": "± 1013.3675413176569"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14403.092783505155,
            "unit": "ns",
            "range": "± 2599.377073143656"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ebb5e8493f2beeae562d2438403395991d43c51d",
          "message": "Merge pull request #3821 from greymistcube/chore/cleanup\n\n🧹 Removed `GetNextWorldState()` from `IBlockChainStates`",
          "timestamp": "2024-06-12T13:35:17+09:00",
          "tree_id": "b15d508329512c6fe8df4669e54d28e84f65d513",
          "url": "https://github.com/planetarium/libplanet/commit/ebb5e8493f2beeae562d2438403395991d43c51d"
        },
        "date": 1718167431343,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 982464.6464646464,
            "unit": "ns",
            "range": "± 81031.61553964955"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1735241.5254237289,
            "unit": "ns",
            "range": "± 74304.77380156626"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1581746.4646464647,
            "unit": "ns",
            "range": "± 136861.33181266725"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6897933.333333333,
            "unit": "ns",
            "range": "± 257007.939389216"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 32105.333333333332,
            "unit": "ns",
            "range": "± 1588.1225813309668"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5104561.538461538,
            "unit": "ns",
            "range": "± 13940.979070205129"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13265128.57142857,
            "unit": "ns",
            "range": "± 60722.23554934296"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33552380,
            "unit": "ns",
            "range": "± 508378.5080317336"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 64642356.666666664,
            "unit": "ns",
            "range": "± 450065.7832340682"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 129321586.66666667,
            "unit": "ns",
            "range": "± 891606.6251970305"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3335469.080528846,
            "unit": "ns",
            "range": "± 8418.25265654715"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1059313.4895833333,
            "unit": "ns",
            "range": "± 2419.495472099402"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 732965.1576450893,
            "unit": "ns",
            "range": "± 2414.6313259729895"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1989093.2942708333,
            "unit": "ns",
            "range": "± 5078.850471158489"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 611536.8303571428,
            "unit": "ns",
            "range": "± 1178.2017315927956"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 569906.6861979166,
            "unit": "ns",
            "range": "± 1791.5705753213592"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2209010,
            "unit": "ns",
            "range": "± 71663.59373256876"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2260800,
            "unit": "ns",
            "range": "± 48886.92735963947"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2745860,
            "unit": "ns",
            "range": "± 49082.95892815405"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2286842.5,
            "unit": "ns",
            "range": "± 55798.23950673786"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2936521.4285714286,
            "unit": "ns",
            "range": "± 40686.383633677906"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 173415.7142857143,
            "unit": "ns",
            "range": "± 8409.253628227118"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 163958.69565217392,
            "unit": "ns",
            "range": "± 10663.908033348618"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 148188.88888888888,
            "unit": "ns",
            "range": "± 3610.1708177499486"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2819435.714285714,
            "unit": "ns",
            "range": "± 34754.78068150884"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2557453.3333333335,
            "unit": "ns",
            "range": "± 35249.57682961126"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9271.739130434782,
            "unit": "ns",
            "range": "± 1181.6663673502383"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 51857.73195876289,
            "unit": "ns",
            "range": "± 4110.044480992734"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44229.166666666664,
            "unit": "ns",
            "range": "± 1746.9679914413337"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 50328.865979381444,
            "unit": "ns",
            "range": "± 9250.551320989904"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2269.148936170213,
            "unit": "ns",
            "range": "± 248.98788489967356"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9251.041666666666,
            "unit": "ns",
            "range": "± 967.9054751224058"
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
          "id": "7bbce0e6f6f5c3477c0d7ebb8a283040a3d20bf9",
          "message": "Merge pull request #3822 from greymistcube/chore/docs\n\n📝 Added some clarifications",
          "timestamp": "2024-06-13T14:22:48+09:00",
          "tree_id": "117b4ead4ab10c1b1a807a9b279bc7c3eb94b5aa",
          "url": "https://github.com/planetarium/libplanet/commit/7bbce0e6f6f5c3477c0d7ebb8a283040a3d20bf9"
        },
        "date": 1718256696775,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1011673,
            "unit": "ns",
            "range": "± 92365.48817090994"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1814083.5820895522,
            "unit": "ns",
            "range": "± 85982.84641649933"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1651274,
            "unit": "ns",
            "range": "± 168924.68085516753"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6854803.125,
            "unit": "ns",
            "range": "± 157000.05236155898"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33326.13636363636,
            "unit": "ns",
            "range": "± 2784.005809801286"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5056420,
            "unit": "ns",
            "range": "± 53159.89626991922"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13360813.333333334,
            "unit": "ns",
            "range": "± 100943.95804933878"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32770663.333333332,
            "unit": "ns",
            "range": "± 272111.7230284719"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 65008060,
            "unit": "ns",
            "range": "± 401162.66170078336"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 131636814.28571428,
            "unit": "ns",
            "range": "± 599935.8374117927"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3330466.0677083335,
            "unit": "ns",
            "range": "± 7238.360890664296"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1068361.2109375,
            "unit": "ns",
            "range": "± 2265.6026000470565"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 753370.8203125,
            "unit": "ns",
            "range": "± 1409.6145693068902"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1928114.3489583333,
            "unit": "ns",
            "range": "± 2868.550995186011"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 621413.0998883928,
            "unit": "ns",
            "range": "± 612.7960051032159"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 569143.33984375,
            "unit": "ns",
            "range": "± 970.0899855458393"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2145796.153846154,
            "unit": "ns",
            "range": "± 51873.38030835647"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2323300,
            "unit": "ns",
            "range": "± 21262.290563342416"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2768206.6666666665,
            "unit": "ns",
            "range": "± 47348.819063062874"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2231570.2702702703,
            "unit": "ns",
            "range": "± 36998.55000811117"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2971506.6666666665,
            "unit": "ns",
            "range": "± 39120.91999112982"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 179396.07843137256,
            "unit": "ns",
            "range": "± 7160.557542100021"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 171795.45454545456,
            "unit": "ns",
            "range": "± 6676.766417226963"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 145246.15384615384,
            "unit": "ns",
            "range": "± 2020.1548557042947"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2844907.1428571427,
            "unit": "ns",
            "range": "± 47798.68785269697"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2529892.8571428573,
            "unit": "ns",
            "range": "± 20203.178131012126"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11076.666666666666,
            "unit": "ns",
            "range": "± 1221.0743105602182"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 55530.681818181816,
            "unit": "ns",
            "range": "± 3784.3403274135653"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45200,
            "unit": "ns",
            "range": "± 1069.4093526972558"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 59003.15789473684,
            "unit": "ns",
            "range": "± 10723.055818740537"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2670.408163265306,
            "unit": "ns",
            "range": "± 508.12150176038705"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10514.130434782608,
            "unit": "ns",
            "range": "± 1265.916817722719"
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
          "id": "aa6c4a2f17b00e49bbbec0a52403a71f515b7ff9",
          "message": "Merge pull request #3825 from greymistcube/chore/fix-javascript-ci\n\n👷 Updated javascript ci version parsing",
          "timestamp": "2024-06-13T16:43:39+09:00",
          "tree_id": "6dbc8b89f1ed7f6ea5506c8543a0ecca4ea0cf98",
          "url": "https://github.com/planetarium/libplanet/commit/aa6c4a2f17b00e49bbbec0a52403a71f515b7ff9"
        },
        "date": 1718265148018,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1040058.5858585859,
            "unit": "ns",
            "range": "± 116185.47979996099"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1822230.612244898,
            "unit": "ns",
            "range": "± 72421.35448218303"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1648880.612244898,
            "unit": "ns",
            "range": "± 154472.07578575306"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6924980.23255814,
            "unit": "ns",
            "range": "± 251406.19810414923"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 39003.296703296706,
            "unit": "ns",
            "range": "± 3801.9717267477154"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5165943.333333333,
            "unit": "ns",
            "range": "± 49258.711581472235"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13489307.142857144,
            "unit": "ns",
            "range": "± 140669.73029752358"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33070730.769230768,
            "unit": "ns",
            "range": "± 174527.2824165102"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 65145293.333333336,
            "unit": "ns",
            "range": "± 708586.7861622947"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 138225906.66666666,
            "unit": "ns",
            "range": "± 895149.7939025678"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3335528.28125,
            "unit": "ns",
            "range": "± 6162.341981827809"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1042219.140625,
            "unit": "ns",
            "range": "± 1395.8994876717552"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 743498.9885602678,
            "unit": "ns",
            "range": "± 1143.5901086606204"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1960557.1354166667,
            "unit": "ns",
            "range": "± 4963.374578172888"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 607500.1277043269,
            "unit": "ns",
            "range": "± 647.8353517431742"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 569585.0065104166,
            "unit": "ns",
            "range": "± 805.8663528394226"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2181750,
            "unit": "ns",
            "range": "± 40610.13515026854"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2270968.1818181816,
            "unit": "ns",
            "range": "± 71606.38699928178"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2785238.888888889,
            "unit": "ns",
            "range": "± 58946.15827315125"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2285348.936170213,
            "unit": "ns",
            "range": "± 85310.4888610611"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2932686.6666666665,
            "unit": "ns",
            "range": "± 31672.40499386237"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 180306.55737704918,
            "unit": "ns",
            "range": "± 7570.950377428606"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 169453.33333333334,
            "unit": "ns",
            "range": "± 9794.382705626205"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 142617.07317073172,
            "unit": "ns",
            "range": "± 5097.102237498498"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2856213.3333333335,
            "unit": "ns",
            "range": "± 32318.412855890827"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2586946.153846154,
            "unit": "ns",
            "range": "± 13921.123959928389"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11082.291666666666,
            "unit": "ns",
            "range": "± 1613.4301342932745"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 55759.47368421053,
            "unit": "ns",
            "range": "± 5392.628413807733"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45010.52631578947,
            "unit": "ns",
            "range": "± 1926.3848646146857"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 57093.25842696629,
            "unit": "ns",
            "range": "± 9605.441139753799"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2543.298969072165,
            "unit": "ns",
            "range": "± 512.9382712404025"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10526.595744680852,
            "unit": "ns",
            "range": "± 1231.93837402731"
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
          "id": "9d6cea60074a476e0d15dd81462aa9069916a881",
          "message": "Merge pull request #3831 from s2quake/fix/ci-installation-test-error\n\nFix ci installation test error",
          "timestamp": "2024-06-18T16:28:32+09:00",
          "tree_id": "3316e761f9841cb41ac666074759b05c8030e0c7",
          "url": "https://github.com/planetarium/libplanet/commit/9d6cea60074a476e0d15dd81462aa9069916a881"
        },
        "date": 1718696348830,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 983244.6808510638,
            "unit": "ns",
            "range": "± 77712.23954888637"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1704985.1063829786,
            "unit": "ns",
            "range": "± 60658.25861805954"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1537094.9494949495,
            "unit": "ns",
            "range": "± 133008.0351828855"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6634436.111111111,
            "unit": "ns",
            "range": "± 220018.31242327832"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 35164.64646464647,
            "unit": "ns",
            "range": "± 4743.229613844953"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4970906.666666667,
            "unit": "ns",
            "range": "± 12335.45798945154"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13044214.285714285,
            "unit": "ns",
            "range": "± 95469.06754097296"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32323493.333333332,
            "unit": "ns",
            "range": "± 171827.25738645886"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 64498841.666666664,
            "unit": "ns",
            "range": "± 203877.835338774"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 129029941.66666667,
            "unit": "ns",
            "range": "± 432528.95322600997"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3289051.171875,
            "unit": "ns",
            "range": "± 41649.6347842153"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1053746.0026041667,
            "unit": "ns",
            "range": "± 13241.330521158718"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 715672.5260416666,
            "unit": "ns",
            "range": "± 11128.827884700831"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1806508.6848958333,
            "unit": "ns",
            "range": "± 11888.866368810459"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 582372.98828125,
            "unit": "ns",
            "range": "± 8594.494792641904"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 566837.6432291666,
            "unit": "ns",
            "range": "± 4951.322015268481"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2134338.4615384615,
            "unit": "ns",
            "range": "± 54475.125163127996"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2283888.888888889,
            "unit": "ns",
            "range": "± 30678.15641536746"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2657473.3333333335,
            "unit": "ns",
            "range": "± 37951.93325899536"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2229262.5,
            "unit": "ns",
            "range": "± 43591.96986781535"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2947714.5161290322,
            "unit": "ns",
            "range": "± 46129.12708464575"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 170381.0810810811,
            "unit": "ns",
            "range": "± 8065.259096563834"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 158323.63636363635,
            "unit": "ns",
            "range": "± 6703.397801678048"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 143664.2857142857,
            "unit": "ns",
            "range": "± 3491.8120400089297"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2761700,
            "unit": "ns",
            "range": "± 30250.9740102931"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2583650,
            "unit": "ns",
            "range": "± 23535.758391794454"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9178.494623655914,
            "unit": "ns",
            "range": "± 955.288422456525"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 50614.47368421053,
            "unit": "ns",
            "range": "± 2290.6595235066206"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43228.57142857143,
            "unit": "ns",
            "range": "± 531.2229307906448"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 47109.09090909091,
            "unit": "ns",
            "range": "± 9217.541959620552"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2147.9591836734694,
            "unit": "ns",
            "range": "± 344.9875514971323"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 8744.827586206897,
            "unit": "ns",
            "range": "± 610.9007114336605"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a0a35dc306cf7d7b4e8210dd5921b53d1e035b70",
          "message": "Merge pull request #3832 from OnedgeLee/chore/fix-duplicated-nsrh-gen\n\nRemove duplicated NSRH generation on BlockChain.Create()",
          "timestamp": "2024-06-19T14:29:27+09:00",
          "tree_id": "126d3de9bd4682bcf0bc2a6ac0cd37e71f4c3ba6",
          "url": "https://github.com/planetarium/libplanet/commit/a0a35dc306cf7d7b4e8210dd5921b53d1e035b70"
        },
        "date": 1718775561624,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1032996.9387755102,
            "unit": "ns",
            "range": "± 114755.79670382771"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1772895.918367347,
            "unit": "ns",
            "range": "± 70797.50748668013"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1589742.268041237,
            "unit": "ns",
            "range": "± 127822.6520703682"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6856346.666666667,
            "unit": "ns",
            "range": "± 205095.60719809195"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 31145.454545454544,
            "unit": "ns",
            "range": "± 1606.5282488503171"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5123928.571428572,
            "unit": "ns",
            "range": "± 15987.852531576233"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13287346.153846154,
            "unit": "ns",
            "range": "± 41647.80137023272"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32646763.333333332,
            "unit": "ns",
            "range": "± 252913.0112075993"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 64885413.333333336,
            "unit": "ns",
            "range": "± 666530.3496108643"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 130720620,
            "unit": "ns",
            "range": "± 972787.7034584678"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3287103.203125,
            "unit": "ns",
            "range": "± 9875.20196823335"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1073057.9296875,
            "unit": "ns",
            "range": "± 2252.376552021779"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 734438.3370535715,
            "unit": "ns",
            "range": "± 1453.504636896322"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1937493.0729166667,
            "unit": "ns",
            "range": "± 4113.169101354972"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 618163.8997395834,
            "unit": "ns",
            "range": "± 2201.120604768494"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 566523.02734375,
            "unit": "ns",
            "range": "± 959.4766272409647"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2098621.052631579,
            "unit": "ns",
            "range": "± 39410.088654040075"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2223488.2352941176,
            "unit": "ns",
            "range": "± 120127.20481279188"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2757990,
            "unit": "ns",
            "range": "± 63494.46639793026"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2282082.1428571427,
            "unit": "ns",
            "range": "± 63671.111267614215"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2904453.3333333335,
            "unit": "ns",
            "range": "± 52575.196034777066"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 168253.0612244898,
            "unit": "ns",
            "range": "± 6655.608601047701"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 163490.4109589041,
            "unit": "ns",
            "range": "± 7469.143271999542"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 140030.76923076922,
            "unit": "ns",
            "range": "± 2198.2510530664354"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2826260,
            "unit": "ns",
            "range": "± 36480.538843138194"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2398422.222222222,
            "unit": "ns",
            "range": "± 49703.84711770965"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10779.347826086956,
            "unit": "ns",
            "range": "± 1417.9026488597776"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52971.875,
            "unit": "ns",
            "range": "± 4429.392333872494"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44546.153846153844,
            "unit": "ns",
            "range": "± 1542.698618765208"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 50683.51648351648,
            "unit": "ns",
            "range": "± 7518.795171454058"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2575,
            "unit": "ns",
            "range": "± 406.0075187273727"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9564.948453608247,
            "unit": "ns",
            "range": "± 1564.051978377091"
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
          "id": "63237131495a8896f81cbf3e1e025b5adc7ccd3b",
          "message": "Merge pull request #3835 from greymistcube/chore/cleanup\n\n🧹 Minor cleanup for #3832",
          "timestamp": "2024-06-20T08:28:03+09:00",
          "tree_id": "852c0e9c90d2f2985d81b58d98ccb2bda333c59f",
          "url": "https://github.com/planetarium/libplanet/commit/63237131495a8896f81cbf3e1e025b5adc7ccd3b"
        },
        "date": 1718840222878,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1052133.3333333333,
            "unit": "ns",
            "range": "± 106381.6588841271"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1832851.5625,
            "unit": "ns",
            "range": "± 84964.56869794478"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1706979.1666666667,
            "unit": "ns",
            "range": "± 136574.2357737834"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6807033.333333333,
            "unit": "ns",
            "range": "± 155629.455224046"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33093.54838709677,
            "unit": "ns",
            "range": "± 3824.9127995633667"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4968384.615384615,
            "unit": "ns",
            "range": "± 9557.967544919977"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 12792414.285714285,
            "unit": "ns",
            "range": "± 54301.704990130514"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 31837830.769230768,
            "unit": "ns",
            "range": "± 183977.83555189188"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 63364933.333333336,
            "unit": "ns",
            "range": "± 276768.3059013715"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 127413886.66666667,
            "unit": "ns",
            "range": "± 653489.5363318668"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3303997.9427083335,
            "unit": "ns",
            "range": "± 2687.4603064426633"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1049006.0872395833,
            "unit": "ns",
            "range": "± 679.1190183697049"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 729155.7552083334,
            "unit": "ns",
            "range": "± 1521.85750106579"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1918786.1328125,
            "unit": "ns",
            "range": "± 1732.121703478"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 617153.2421875,
            "unit": "ns",
            "range": "± 1905.8941326077604"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 557721.5738932291,
            "unit": "ns",
            "range": "± 500.0960300445279"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2150684.210526316,
            "unit": "ns",
            "range": "± 46556.826246807665"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2297529.1666666665,
            "unit": "ns",
            "range": "± 59695.23671309031"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2627415,
            "unit": "ns",
            "range": "± 59179.986615320166"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2272704.5454545454,
            "unit": "ns",
            "range": "± 54935.27340488317"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2900271.4285714286,
            "unit": "ns",
            "range": "± 68747.74282008932"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 168528.0701754386,
            "unit": "ns",
            "range": "± 6411.589795773992"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 163159.0909090909,
            "unit": "ns",
            "range": "± 6696.175194673615"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 144493.5483870968,
            "unit": "ns",
            "range": "± 4309.983409393511"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2722296.6666666665,
            "unit": "ns",
            "range": "± 33240.97872606441"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2520907.1428571427,
            "unit": "ns",
            "range": "± 34312.10740082448"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9082.608695652174,
            "unit": "ns",
            "range": "± 883.749342372222"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 50069.135802469136,
            "unit": "ns",
            "range": "± 2635.60438871754"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43341.17647058824,
            "unit": "ns",
            "range": "± 853.711619583431"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 47083.333333333336,
            "unit": "ns",
            "range": "± 6913.644707827226"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2163.265306122449,
            "unit": "ns",
            "range": "± 285.1614681327709"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 8287.912087912087,
            "unit": "ns",
            "range": "± 635.9306679252185"
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
          "id": "dd7f7701b050789a1a718f8e68e3f06f7742cd90",
          "message": "Merge pull request #3836 from riemannulus/ci/ai-code-reviewer\n\n✨  ci: introduce ai-code-reviewer",
          "timestamp": "2024-06-20T15:48:02+09:00",
          "tree_id": "23ebb1f68e6571dff33a06d91ecc9581b051906e",
          "url": "https://github.com/planetarium/libplanet/commit/dd7f7701b050789a1a718f8e68e3f06f7742cd90"
        },
        "date": 1718866613792,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1037038.775510204,
            "unit": "ns",
            "range": "± 123656.93450038116"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1789860.5633802817,
            "unit": "ns",
            "range": "± 87750.22259454589"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1628982.2916666667,
            "unit": "ns",
            "range": "± 125513.16139399102"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6877729.0322580645,
            "unit": "ns",
            "range": "± 207507.3303019251"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 31705,
            "unit": "ns",
            "range": "± 1669.5258176189436"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5222858.333333333,
            "unit": "ns",
            "range": "± 17327.93112202657"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13578346.666666666,
            "unit": "ns",
            "range": "± 141015.98626025484"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32941893.333333332,
            "unit": "ns",
            "range": "± 552525.4557376477"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 67258793.33333333,
            "unit": "ns",
            "range": "± 683140.2193094001"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 133234073.33333333,
            "unit": "ns",
            "range": "± 1742521.1248839041"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3329805.234375,
            "unit": "ns",
            "range": "± 5523.259464005319"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1075951.6536458333,
            "unit": "ns",
            "range": "± 2454.2745173507774"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 727818.2682291666,
            "unit": "ns",
            "range": "± 1003.2078398297446"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1946334.2998798077,
            "unit": "ns",
            "range": "± 3291.98858034717"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 617589.3489583334,
            "unit": "ns",
            "range": "± 1596.0295785577562"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 557779.6875,
            "unit": "ns",
            "range": "± 2790.1100631935446"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2212657.1428571427,
            "unit": "ns",
            "range": "± 50306.15838472036"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2228310.2040816327,
            "unit": "ns",
            "range": "± 88975.55667358395"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2684173.3333333335,
            "unit": "ns",
            "range": "± 78485.42993857955"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2355839.393939394,
            "unit": "ns",
            "range": "± 73444.06859727483"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2968164.285714286,
            "unit": "ns",
            "range": "± 34519.48406653524"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 182543.6170212766,
            "unit": "ns",
            "range": "± 7025.401249729724"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 165407.04225352113,
            "unit": "ns",
            "range": "± 7681.784092321671"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 143356.25,
            "unit": "ns",
            "range": "± 2539.0204804215346"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2838373.3333333335,
            "unit": "ns",
            "range": "± 44492.59114354509"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2530785.714285714,
            "unit": "ns",
            "range": "± 37660.68868896947"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11384.946236559139,
            "unit": "ns",
            "range": "± 1751.8280040499772"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 53231.18279569892,
            "unit": "ns",
            "range": "± 4558.007251807185"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44274.41860465116,
            "unit": "ns",
            "range": "± 1631.4021172651007"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 52308.602150537634,
            "unit": "ns",
            "range": "± 9225.586536249142"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2315.3061224489797,
            "unit": "ns",
            "range": "± 428.219050028709"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9194.186046511628,
            "unit": "ns",
            "range": "± 774.4986463608404"
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
          "id": "73ac2c3ff242444d60953077f7a945db959d93c7",
          "message": "Merge pull request #3838 from riemannulus/fix/ci/ai-code-reviewer\n\nfix: use pull_request_target",
          "timestamp": "2024-06-20T16:02:26+09:00",
          "tree_id": "9054b518b79572df702a71529398fc55fe354619",
          "url": "https://github.com/planetarium/libplanet/commit/73ac2c3ff242444d60953077f7a945db959d93c7"
        },
        "date": 1718867744865,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1082696.907216495,
            "unit": "ns",
            "range": "± 120453.46824051344"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1890683.3333333333,
            "unit": "ns",
            "range": "± 77700.52997560934"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1958957.142857143,
            "unit": "ns",
            "range": "± 46524.48356971382"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7065427.027027027,
            "unit": "ns",
            "range": "± 117390.0257182787"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 35238.709677419356,
            "unit": "ns",
            "range": "± 4020.816277121084"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5324686.666666667,
            "unit": "ns",
            "range": "± 52983.998482920244"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13947540,
            "unit": "ns",
            "range": "± 138727.16182698842"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 34163580,
            "unit": "ns",
            "range": "± 343550.664177997"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 70843633.33333333,
            "unit": "ns",
            "range": "± 416004.9307171159"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 137140013.33333334,
            "unit": "ns",
            "range": "± 590524.9200822056"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3361651.0677083335,
            "unit": "ns",
            "range": "± 6494.572854954578"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1073119.8177083333,
            "unit": "ns",
            "range": "± 1494.2738489324038"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 750222.9947916666,
            "unit": "ns",
            "range": "± 1724.3398342465296"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1942584.2057291667,
            "unit": "ns",
            "range": "± 2525.0707515172703"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 620941.3434709822,
            "unit": "ns",
            "range": "± 1229.8698579308364"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 566621.3448660715,
            "unit": "ns",
            "range": "± 862.5070005698682"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2255265,
            "unit": "ns",
            "range": "± 66050.817848544"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2414455.3191489363,
            "unit": "ns",
            "range": "± 84471.18574455778"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2966338.4615384615,
            "unit": "ns",
            "range": "± 30236.719907576466"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2428816.6666666665,
            "unit": "ns",
            "range": "± 62910.67972282931"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3092660,
            "unit": "ns",
            "range": "± 52244.286085383814"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 183014.0350877193,
            "unit": "ns",
            "range": "± 7849.805243182134"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 177033.8028169014,
            "unit": "ns",
            "range": "± 7620.122677339666"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 149052.9411764706,
            "unit": "ns",
            "range": "± 4492.636082093886"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2863506.6666666665,
            "unit": "ns",
            "range": "± 43091.637681750246"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2622933.3333333335,
            "unit": "ns",
            "range": "± 37360.61078321978"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12637.234042553191,
            "unit": "ns",
            "range": "± 1524.8644602240718"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59829.78723404255,
            "unit": "ns",
            "range": "± 5586.847646115879"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52354.08163265306,
            "unit": "ns",
            "range": "± 5254.122944011986"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 70317.3469387755,
            "unit": "ns",
            "range": "± 15809.19102053465"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3103.6082474226805,
            "unit": "ns",
            "range": "± 697.7735209922616"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12107.865168539325,
            "unit": "ns",
            "range": "± 1095.779581259297"
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
          "id": "48364a0b1d7bbae24b43df4169be269aec4f48ec",
          "message": "Merge pull request #3839 from riemannulus/ci/remove-ai-code-reviewer\n\nremove: ai code reviewer",
          "timestamp": "2024-06-20T16:25:40+09:00",
          "tree_id": "852c0e9c90d2f2985d81b58d98ccb2bda333c59f",
          "url": "https://github.com/planetarium/libplanet/commit/48364a0b1d7bbae24b43df4169be269aec4f48ec"
        },
        "date": 1718868963604,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 990497.8947368421,
            "unit": "ns",
            "range": "± 97408.20444599654"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1734177.142857143,
            "unit": "ns",
            "range": "± 43532.61174928844"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1582226.530612245,
            "unit": "ns",
            "range": "± 161445.79413384965"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6903902.439024391,
            "unit": "ns",
            "range": "± 248899.59470417467"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34137.755102040814,
            "unit": "ns",
            "range": "± 4447.969890364846"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5003864.285714285,
            "unit": "ns",
            "range": "± 26162.55713045641"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13188107.692307692,
            "unit": "ns",
            "range": "± 82155.79165563498"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32416042.85714286,
            "unit": "ns",
            "range": "± 151000.21632325673"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 65385173.333333336,
            "unit": "ns",
            "range": "± 461265.183206033"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 131500246.66666667,
            "unit": "ns",
            "range": "± 1408717.128082278"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3234247.34375,
            "unit": "ns",
            "range": "± 4246.336199071886"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1075032.1223958333,
            "unit": "ns",
            "range": "± 2275.5823666944675"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 743183.1380208334,
            "unit": "ns",
            "range": "± 2054.5618093747034"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1931964.4381009615,
            "unit": "ns",
            "range": "± 3391.478860072955"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 625944.1276041666,
            "unit": "ns",
            "range": "± 1025.512450157482"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 561292.7804129465,
            "unit": "ns",
            "range": "± 2691.637973133664"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2100806.4516129033,
            "unit": "ns",
            "range": "± 38254.90761966688"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2283195.5555555555,
            "unit": "ns",
            "range": "± 86281.66600668353"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2688680.9523809524,
            "unit": "ns",
            "range": "± 62402.841434085516"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2262378.5714285714,
            "unit": "ns",
            "range": "± 64708.442159987804"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3008552.6315789474,
            "unit": "ns",
            "range": "± 56666.59184721583"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 171207.22891566265,
            "unit": "ns",
            "range": "± 8595.883631028173"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 161240.6779661017,
            "unit": "ns",
            "range": "± 6526.632934635719"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 146587.5,
            "unit": "ns",
            "range": "± 2021.8390967961159"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2786984.6153846155,
            "unit": "ns",
            "range": "± 27134.72087424296"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2552320,
            "unit": "ns",
            "range": "± 46477.0019933054"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9248.387096774193,
            "unit": "ns",
            "range": "± 1074.1642760795996"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 50425.27472527473,
            "unit": "ns",
            "range": "± 2821.0161056136967"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44273.68421052631,
            "unit": "ns",
            "range": "± 1045.8887880846853"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 47287.77777777778,
            "unit": "ns",
            "range": "± 7878.342205382972"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2197.938144329897,
            "unit": "ns",
            "range": "± 292.6101578335138"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 8496.913580246914,
            "unit": "ns",
            "range": "± 366.7718704293878"
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
          "id": "1a9ce89fd322af22e7351d2d32af855852356745",
          "message": "Merge pull request #3834 from greymistcube/refactor/stricter-swap-condition\n\n♻️ Stricter `Swap()` condition",
          "timestamp": "2024-06-20T16:49:28+09:00",
          "tree_id": "b95c422526855a76841da82a16f5ed3e4117e303",
          "url": "https://github.com/planetarium/libplanet/commit/1a9ce89fd322af22e7351d2d32af855852356745"
        },
        "date": 1718870299024,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1041998.9795918367,
            "unit": "ns",
            "range": "± 117951.87074981484"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1801022.4137931035,
            "unit": "ns",
            "range": "± 74449.39183733189"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1837995.8333333333,
            "unit": "ns",
            "range": "± 46826.78979765347"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6755779.411764706,
            "unit": "ns",
            "range": "± 205905.8545231685"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 35214.14141414141,
            "unit": "ns",
            "range": "± 5070.865363112926"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5214337.931034483,
            "unit": "ns",
            "range": "± 149462.75076752427"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13623138.461538462,
            "unit": "ns",
            "range": "± 71183.03330688592"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33740803.333333336,
            "unit": "ns",
            "range": "± 546553.8868566349"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 65877890,
            "unit": "ns",
            "range": "± 835794.4636264178"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 135583240,
            "unit": "ns",
            "range": "± 2380708.6918454706"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3319105.8333333335,
            "unit": "ns",
            "range": "± 6700.40741593407"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1064818.59375,
            "unit": "ns",
            "range": "± 3012.715983446682"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 749827.24609375,
            "unit": "ns",
            "range": "± 1248.941115247734"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1966446.8229166667,
            "unit": "ns",
            "range": "± 4368.195608599548"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 621416.1848958334,
            "unit": "ns",
            "range": "± 1492.760419499988"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 568052.8059895834,
            "unit": "ns",
            "range": "± 825.7702880714735"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2180364.285714286,
            "unit": "ns",
            "range": "± 38192.46516794112"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2407185.714285714,
            "unit": "ns",
            "range": "± 37440.308536344935"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2799885.3658536584,
            "unit": "ns",
            "range": "± 98612.20401394446"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2295940,
            "unit": "ns",
            "range": "± 84840.43150633911"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3064726.086956522,
            "unit": "ns",
            "range": "± 71798.57695089724"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 180082.45614035087,
            "unit": "ns",
            "range": "± 6637.693306494183"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 170653.75,
            "unit": "ns",
            "range": "± 7668.874189156706"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 139995.65217391305,
            "unit": "ns",
            "range": "± 3349.4203380272406"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2803093.3333333335,
            "unit": "ns",
            "range": "± 51286.443024402055"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2450286.6666666665,
            "unit": "ns",
            "range": "± 36279.940673023375"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11581.958762886597,
            "unit": "ns",
            "range": "± 1903.5354383221902"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 55077.551020408166,
            "unit": "ns",
            "range": "± 6994.910235192514"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45754.166666666664,
            "unit": "ns",
            "range": "± 2271.3734444039937"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 62675.757575757576,
            "unit": "ns",
            "range": "± 13323.855320202632"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2596.907216494845,
            "unit": "ns",
            "range": "± 608.0113774030436"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10788.421052631578,
            "unit": "ns",
            "range": "± 1053.9553825889604"
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
          "id": "cc268b022eb3569d2056d29174a51efaeb408d18",
          "message": "Merge pull request #3840 from greymistcube/chore/fix-evaluate-block\n\n🔧 Fixed `BlockChain.EvaluateBlock()`",
          "timestamp": "2024-06-20T17:27:18+09:00",
          "tree_id": "dc0f79a0fa4f9492af20b5b347ba2b6ac1d8daf1",
          "url": "https://github.com/planetarium/libplanet/commit/cc268b022eb3569d2056d29174a51efaeb408d18"
        },
        "date": 1718872575668,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1014606.0606060605,
            "unit": "ns",
            "range": "± 121203.67140847775"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1761530.7692307692,
            "unit": "ns",
            "range": "± 72345.97848753067"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1607232.3232323232,
            "unit": "ns",
            "range": "± 167142.56521847696"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6885653.571428572,
            "unit": "ns",
            "range": "± 190126.82800571105"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 35774,
            "unit": "ns",
            "range": "± 5068.034504359036"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5108085.714285715,
            "unit": "ns",
            "range": "± 46813.88448120686"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13138035.714285715,
            "unit": "ns",
            "range": "± 78126.20566102651"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32836864.285714287,
            "unit": "ns",
            "range": "± 186332.29872850963"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 65830650,
            "unit": "ns",
            "range": "± 233505.4627922999"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 131867133.33333333,
            "unit": "ns",
            "range": "± 886242.7333304079"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3332245.675223214,
            "unit": "ns",
            "range": "± 6607.539769286562"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1045912.1791294643,
            "unit": "ns",
            "range": "± 2551.7672709077337"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 729659.1276041666,
            "unit": "ns",
            "range": "± 2176.552429541052"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1910802.943638393,
            "unit": "ns",
            "range": "± 2543.3594066867213"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 622888.134765625,
            "unit": "ns",
            "range": "± 1231.4974182122335"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 559780.4231770834,
            "unit": "ns",
            "range": "± 1635.5256252675672"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2083551.111111111,
            "unit": "ns",
            "range": "± 78963.8657932228"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2321400,
            "unit": "ns",
            "range": "± 87125.25987961763"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2708154.1666666665,
            "unit": "ns",
            "range": "± 69632.50414898182"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2288564.1025641025,
            "unit": "ns",
            "range": "± 77219.82799357704"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2941037.5,
            "unit": "ns",
            "range": "± 56063.97387508904"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 174738.29787234042,
            "unit": "ns",
            "range": "± 6098.130618458248"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 167524.05063291139,
            "unit": "ns",
            "range": "± 8071.574294222101"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 146125.58139534883,
            "unit": "ns",
            "range": "± 5414.842609648473"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2783740,
            "unit": "ns",
            "range": "± 32106.55918744864"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2557180,
            "unit": "ns",
            "range": "± 32551.041238557726"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10265.591397849463,
            "unit": "ns",
            "range": "± 1206.188267053437"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 54329.292929292926,
            "unit": "ns",
            "range": "± 5611.381519391993"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45847.22222222222,
            "unit": "ns",
            "range": "± 2254.8209524009976"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 51741.379310344826,
            "unit": "ns",
            "range": "± 8424.528856112604"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2514.285714285714,
            "unit": "ns",
            "range": "± 481.6209743009517"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10378.125,
            "unit": "ns",
            "range": "± 1302.8877339849437"
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
          "id": "87c5fdffc0d7e81e9694b3ce45b27d66677b6767",
          "message": "Merge pull request #3842 from greymistcube/refactor/memory-next-state-root-hash\n\n♻️ In memory \"next state root hash\"",
          "timestamp": "2024-06-21T11:37:54+09:00",
          "tree_id": "0de704360b7bbd2e99d6a58d4c5b53a179e63aba",
          "url": "https://github.com/planetarium/libplanet/commit/87c5fdffc0d7e81e9694b3ce45b27d66677b6767"
        },
        "date": 1718938031042,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1015211.224489796,
            "unit": "ns",
            "range": "± 97988.7873689207"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1814369.8795180724,
            "unit": "ns",
            "range": "± 96515.70924193176"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1678273.7373737374,
            "unit": "ns",
            "range": "± 186812.71074280032"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7049342,
            "unit": "ns",
            "range": "± 281002.76495843544"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33586,
            "unit": "ns",
            "range": "± 5148.541423343002"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5107193.333333333,
            "unit": "ns",
            "range": "± 47145.556776959624"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13545342.857142856,
            "unit": "ns",
            "range": "± 45055.87495690067"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33041733.333333332,
            "unit": "ns",
            "range": "± 329143.2355735258"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 66097073.333333336,
            "unit": "ns",
            "range": "± 472713.3871395567"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 134083220,
            "unit": "ns",
            "range": "± 899820.4989250435"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3364978.292410714,
            "unit": "ns",
            "range": "± 13929.973747303491"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1074842.592075893,
            "unit": "ns",
            "range": "± 3372.7408696201846"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 762816.2806919643,
            "unit": "ns",
            "range": "± 1316.8624488987957"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1933318.5128348214,
            "unit": "ns",
            "range": "± 2991.8418017934123"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 615318.5221354166,
            "unit": "ns",
            "range": "± 886.4265028941869"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 566003.1319754465,
            "unit": "ns",
            "range": "± 781.2513939142892"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2120872.972972973,
            "unit": "ns",
            "range": "± 70170.45377210113"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2280875.6756756757,
            "unit": "ns",
            "range": "± 75206.96778226738"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2841576.6666666665,
            "unit": "ns",
            "range": "± 51343.94479066316"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2339340,
            "unit": "ns",
            "range": "± 42117.02743546842"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3020515.3846153845,
            "unit": "ns",
            "range": "± 38286.39545482281"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 169992.85714285713,
            "unit": "ns",
            "range": "± 7159.0688696746965"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 170025.27472527474,
            "unit": "ns",
            "range": "± 10266.759668481292"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 146628.88888888888,
            "unit": "ns",
            "range": "± 5590.235896072489"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2866414.285714286,
            "unit": "ns",
            "range": "± 24158.86068196407"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2532578.5714285714,
            "unit": "ns",
            "range": "± 32199.287583409685"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10528.421052631578,
            "unit": "ns",
            "range": "± 1748.4134545532156"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 55924.242424242424,
            "unit": "ns",
            "range": "± 7168.09955329423"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45377.77777777778,
            "unit": "ns",
            "range": "± 2397.185850116757"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 57120.43010752688,
            "unit": "ns",
            "range": "± 9531.339145154436"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2437.8947368421054,
            "unit": "ns",
            "range": "± 442.713813559827"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10640.860215053763,
            "unit": "ns",
            "range": "± 1529.8647680460676"
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
          "id": "2fbd71c5c052827918df99703928dc77ce985e75",
          "message": "Merge pull request #3827 from moreal/buffer\n\nUse `buffer` dependency for browser environment",
          "timestamp": "2024-06-24T16:41:25+09:00",
          "tree_id": "d6d039b18067bc4e4226835f5c0bbcd1cfed101f",
          "url": "https://github.com/planetarium/libplanet/commit/2fbd71c5c052827918df99703928dc77ce985e75"
        },
        "date": 1719215502194,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1084625,
            "unit": "ns",
            "range": "± 133874.40697696607"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1826363.492063492,
            "unit": "ns",
            "range": "± 76428.27821028976"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1653598.9473684211,
            "unit": "ns",
            "range": "± 155503.0166600299"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6803214.814814814,
            "unit": "ns",
            "range": "± 182993.82440967718"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 30548.333333333332,
            "unit": "ns",
            "range": "± 1196.6750074461852"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5149807.142857143,
            "unit": "ns",
            "range": "± 56252.47296151267"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13575853.333333334,
            "unit": "ns",
            "range": "± 221079.82031922534"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33162461.53846154,
            "unit": "ns",
            "range": "± 288205.7324738167"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 65249721.428571425,
            "unit": "ns",
            "range": "± 538380.2076293601"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 130753006.66666667,
            "unit": "ns",
            "range": "± 867297.9636834875"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3354327.7083333335,
            "unit": "ns",
            "range": "± 17210.066085075934"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1060767.919921875,
            "unit": "ns",
            "range": "± 2569.607861905437"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 766995.5143229166,
            "unit": "ns",
            "range": "± 2953.8274051563735"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1937126.2137276786,
            "unit": "ns",
            "range": "± 2005.261740575988"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 613049.5572916666,
            "unit": "ns",
            "range": "± 2343.426180274503"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 563976.7578125,
            "unit": "ns",
            "range": "± 1011.0977433300939"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2180161.3636363638,
            "unit": "ns",
            "range": "± 73887.21831721229"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2321984.6153846155,
            "unit": "ns",
            "range": "± 79927.20549436001"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2732553.3333333335,
            "unit": "ns",
            "range": "± 24465.19004237498"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2323261.5384615385,
            "unit": "ns",
            "range": "± 24690.502170589752"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2977200,
            "unit": "ns",
            "range": "± 46242.79094394838"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 183942.5287356322,
            "unit": "ns",
            "range": "± 12393.374375643718"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 170848.03921568627,
            "unit": "ns",
            "range": "± 6064.601889525096"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 148042.42424242425,
            "unit": "ns",
            "range": "± 3916.8729797370174"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2842750,
            "unit": "ns",
            "range": "± 43219.64919944489"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2529536.6666666665,
            "unit": "ns",
            "range": "± 38444.224286001416"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11384.375,
            "unit": "ns",
            "range": "± 1501.8114062691095"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 54768.131868131866,
            "unit": "ns",
            "range": "± 5076.697945206315"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44962.5,
            "unit": "ns",
            "range": "± 868.6195945291587"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 54226.37362637363,
            "unit": "ns",
            "range": "± 9537.46804468024"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2498.9795918367345,
            "unit": "ns",
            "range": "± 489.1597883598827"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10844.68085106383,
            "unit": "ns",
            "range": "± 1642.6844683749002"
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
          "id": "6440b8628f44e022e4a48797f73f0cf8aed763b6",
          "message": "Merge pull request #3872 from planetarium/release/5.1.0\n\n🚀 Release 5.1.0",
          "timestamp": "2024-07-11T11:48:31+09:00",
          "tree_id": "c283794015c8a338ecd8399ae7406c3a8089667a",
          "url": "https://github.com/planetarium/libplanet/commit/6440b8628f44e022e4a48797f73f0cf8aed763b6"
        },
        "date": 1720666761493,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1002648.717948718,
            "unit": "ns",
            "range": "± 51205.50838771244"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1824378.125,
            "unit": "ns",
            "range": "± 55781.81420831495"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1612181.5217391304,
            "unit": "ns",
            "range": "± 101855.23008937718"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6869174.193548387,
            "unit": "ns",
            "range": "± 208763.75478475177"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 30859.45945945946,
            "unit": "ns",
            "range": "± 1424.9411349455731"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9780858.333333334,
            "unit": "ns",
            "range": "± 58490.17723800582"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23999100,
            "unit": "ns",
            "range": "± 262476.37172569596"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 60168733.333333336,
            "unit": "ns",
            "range": "± 237785.14493448733"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 123133130,
            "unit": "ns",
            "range": "± 1275716.1172119312"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 247583560,
            "unit": "ns",
            "range": "± 1196352.7828959387"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3445470.1302083335,
            "unit": "ns",
            "range": "± 6212.023007234684"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1087181.2049278845,
            "unit": "ns",
            "range": "± 1175.2296930829496"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 743899.5052083334,
            "unit": "ns",
            "range": "± 1043.465240157214"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1960567.5,
            "unit": "ns",
            "range": "± 3152.6582403368934"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 622846.0797991072,
            "unit": "ns",
            "range": "± 1021.794885063323"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 584619.9544270834,
            "unit": "ns",
            "range": "± 2348.499646340638"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2160922.222222222,
            "unit": "ns",
            "range": "± 45985.22212183791"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2302045,
            "unit": "ns",
            "range": "± 37999.67416757814"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2774272.727272727,
            "unit": "ns",
            "range": "± 66083.70724797726"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2342050,
            "unit": "ns",
            "range": "± 62580.53531250751"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2981871.4285714286,
            "unit": "ns",
            "range": "± 31137.349044106268"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 185417.12328767125,
            "unit": "ns",
            "range": "± 8612.378926652944"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 175945.20547945207,
            "unit": "ns",
            "range": "± 8723.866387609249"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 144445.65217391305,
            "unit": "ns",
            "range": "± 3607.7540559277654"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2824473.3333333335,
            "unit": "ns",
            "range": "± 27313.405046571825"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2541500,
            "unit": "ns",
            "range": "± 40610.66010650054"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12917.525773195875,
            "unit": "ns",
            "range": "± 2090.1061730048527"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59741.237113402065,
            "unit": "ns",
            "range": "± 5801.306472419948"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 47185.13513513513,
            "unit": "ns",
            "range": "± 2271.363264072647"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 66185.86956521739,
            "unit": "ns",
            "range": "± 11320.152034875233"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3018.3673469387754,
            "unit": "ns",
            "range": "± 548.9158835105868"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11205.376344086022,
            "unit": "ns",
            "range": "± 1269.0603842999483"
          }
        ]
      },
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
          "id": "75b3ae438f440fc85a9245fdb02a3d32ae3252fc",
          "message": "fix: Fix the ci running error when github releasing",
          "timestamp": "2024-07-11T13:36:29+09:00",
          "tree_id": "a8735697867f1301214b2128eb787916f57d5be7",
          "url": "https://github.com/planetarium/libplanet/commit/75b3ae438f440fc85a9245fdb02a3d32ae3252fc"
        },
        "date": 1720673190705,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 988669.4736842106,
            "unit": "ns",
            "range": "± 89459.2871547202"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1769930.2325581396,
            "unit": "ns",
            "range": "± 65547.74535690149"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1552218.5567010308,
            "unit": "ns",
            "range": "± 121543.93524042457"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6752023.076923077,
            "unit": "ns",
            "range": "± 181178.6462201157"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 30390,
            "unit": "ns",
            "range": "± 1161.499734245799"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9723815.384615384,
            "unit": "ns",
            "range": "± 38819.107111357895"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23802646.666666668,
            "unit": "ns",
            "range": "± 269971.94263390376"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 60143535.71428572,
            "unit": "ns",
            "range": "± 473699.4513030759"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 117716540,
            "unit": "ns",
            "range": "± 988906.7772039991"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 235153535.7142857,
            "unit": "ns",
            "range": "± 947410.1797143483"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3314385.2678571427,
            "unit": "ns",
            "range": "± 7921.574617887056"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1077700.3305288462,
            "unit": "ns",
            "range": "± 1443.7346450949478"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 735508.5221354166,
            "unit": "ns",
            "range": "± 2595.1775000952975"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1921922.8515625,
            "unit": "ns",
            "range": "± 6490.548959380168"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 608986.2369791666,
            "unit": "ns",
            "range": "± 1403.0350850645566"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 560534.4447544643,
            "unit": "ns",
            "range": "± 696.0744779772924"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2240435.714285714,
            "unit": "ns",
            "range": "± 35173.692248236126"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2237676.923076923,
            "unit": "ns",
            "range": "± 22333.65001688983"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2722626.3157894737,
            "unit": "ns",
            "range": "± 59408.23775748859"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2257408.3333333335,
            "unit": "ns",
            "range": "± 57128.34457275292"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2966978.5714285714,
            "unit": "ns",
            "range": "± 48400.2253423144"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 176556.41025641025,
            "unit": "ns",
            "range": "± 6069.977667165839"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 165477.19298245615,
            "unit": "ns",
            "range": "± 6661.939269994342"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 141831.25,
            "unit": "ns",
            "range": "± 2738.057401394889"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2747000,
            "unit": "ns",
            "range": "± 46182.49513769105"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2522433.3333333335,
            "unit": "ns",
            "range": "± 38326.430020225445"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10659.34065934066,
            "unit": "ns",
            "range": "± 817.5815313713737"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 51609.89010989011,
            "unit": "ns",
            "range": "± 3639.079704939299"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44911.53846153846,
            "unit": "ns",
            "range": "± 1210.7276896402172"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 54397.95918367347,
            "unit": "ns",
            "range": "± 11957.682942741942"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2404.1666666666665,
            "unit": "ns",
            "range": "± 550.0079744238484"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9686.813186813188,
            "unit": "ns",
            "range": "± 1020.5890228696139"
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
          "id": "218465d785f99970cc04554c20be9ee61990f213",
          "message": "Merge pull request #3873 from planetarium/prepare/5.2.0\n\n🔧Prepare 5.2.0",
          "timestamp": "2024-07-15T12:22:31+09:00",
          "tree_id": "c9f25753ab85f923ab6000af2d4468c0f2a1c832",
          "url": "https://github.com/planetarium/libplanet/commit/218465d785f99970cc04554c20be9ee61990f213"
        },
        "date": 1721014441017,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1013421.978021978,
            "unit": "ns",
            "range": "± 58346.50289853197"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1876236.8421052631,
            "unit": "ns",
            "range": "± 63466.59121592233"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1596590.12345679,
            "unit": "ns",
            "range": "± 83355.34566681711"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6963765.384615385,
            "unit": "ns",
            "range": "± 190338.45421733928"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 32772.52747252747,
            "unit": "ns",
            "range": "± 3018.6481865624687"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9896616.666666666,
            "unit": "ns",
            "range": "± 79987.44246680819"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24862620,
            "unit": "ns",
            "range": "± 411686.98268743657"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 60848350,
            "unit": "ns",
            "range": "± 485987.45591598586"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 123342853.33333333,
            "unit": "ns",
            "range": "± 1567186.1658338336"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 239633173.33333334,
            "unit": "ns",
            "range": "± 2593703.395165923"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3379194.0885416665,
            "unit": "ns",
            "range": "± 8734.222131400213"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1062464.0494791667,
            "unit": "ns",
            "range": "± 1196.2862756588045"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 730446.9796316965,
            "unit": "ns",
            "range": "± 1208.3917616946067"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1947259.0104166667,
            "unit": "ns",
            "range": "± 4540.711980335468"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 614928.3463541666,
            "unit": "ns",
            "range": "± 803.0407087626642"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 567250.2511160715,
            "unit": "ns",
            "range": "± 1304.7890818879825"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2256972.8571428573,
            "unit": "ns",
            "range": "± 74161.20392811342"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2302258.8235294116,
            "unit": "ns",
            "range": "± 46888.13894290764"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2761676.923076923,
            "unit": "ns",
            "range": "± 74801.13532663688"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2317550,
            "unit": "ns",
            "range": "± 78713.25912552574"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3041580,
            "unit": "ns",
            "range": "± 52240.59997467761"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 181426.5625,
            "unit": "ns",
            "range": "± 8412.391506175554"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 176292.85714285713,
            "unit": "ns",
            "range": "± 7590.900225517803"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 146698.30508474575,
            "unit": "ns",
            "range": "± 5928.496102996911"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2811660,
            "unit": "ns",
            "range": "± 39232.08963518075"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2600706.6666666665,
            "unit": "ns",
            "range": "± 34767.93404985747"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13180.645161290322,
            "unit": "ns",
            "range": "± 1887.9053301912083"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 58602.083333333336,
            "unit": "ns",
            "range": "± 4805.347441662019"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 46476.98412698413,
            "unit": "ns",
            "range": "± 2051.923279488118"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 67628.57142857143,
            "unit": "ns",
            "range": "± 13769.277021351618"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3148.453608247423,
            "unit": "ns",
            "range": "± 598.6292331342387"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12386.59793814433,
            "unit": "ns",
            "range": "± 1855.0959580964281"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kidonseo@gmail.com",
            "name": "Kidon (Don) Seo",
            "username": "area363"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "31039424f78e5e34ec9b0021f95f9f05d9519f54",
          "message": "Merge pull request #3878 from area363/feat/add-pyroscope\n\nadd pyroscope",
          "timestamp": "2024-07-15T20:12:40-04:00",
          "tree_id": "01d1e771ec0b070893c2973ed66cd55a195ac2a6",
          "url": "https://github.com/planetarium/libplanet/commit/31039424f78e5e34ec9b0021f95f9f05d9519f54"
        },
        "date": 1721089394915,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1008577.4193548387,
            "unit": "ns",
            "range": "± 85857.53509388863"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1834025.7142857143,
            "unit": "ns",
            "range": "± 88660.56373087532"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1554203.9473684211,
            "unit": "ns",
            "range": "± 79034.87237211934"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6867965.217391305,
            "unit": "ns",
            "range": "± 165852.4689670027"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36865.30612244898,
            "unit": "ns",
            "range": "± 4656.490914549466"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10029766.666666666,
            "unit": "ns",
            "range": "± 175539.74587241598"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23542893.333333332,
            "unit": "ns",
            "range": "± 280862.98506736767"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59359714.28571428,
            "unit": "ns",
            "range": "± 573484.7605206703"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 118890864.28571428,
            "unit": "ns",
            "range": "± 1058810.6132733182"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 235186250,
            "unit": "ns",
            "range": "± 1756021.670073929"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3391491.4583333335,
            "unit": "ns",
            "range": "± 15023.734792447342"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1069953.2552083333,
            "unit": "ns",
            "range": "± 2363.701030441724"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 731582.0182291666,
            "unit": "ns",
            "range": "± 2111.9204389201523"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1947828.6979166667,
            "unit": "ns",
            "range": "± 5281.272783382368"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 622892.3763020834,
            "unit": "ns",
            "range": "± 1342.4857658909625"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 566105.5598958334,
            "unit": "ns",
            "range": "± 2558.562472244271"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2129852.9411764704,
            "unit": "ns",
            "range": "± 42992.7336541749"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2237646.3768115942,
            "unit": "ns",
            "range": "± 108089.38509633119"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2783300,
            "unit": "ns",
            "range": "± 59842.37992244801"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2332096.7741935486,
            "unit": "ns",
            "range": "± 70678.1648689842"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2952680,
            "unit": "ns",
            "range": "± 51382.462266530485"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 181151.72413793104,
            "unit": "ns",
            "range": "± 7848.974486133112"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 173637.07865168538,
            "unit": "ns",
            "range": "± 13421.796909424405"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 147661.53846153847,
            "unit": "ns",
            "range": "± 3912.8584868944004"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2779564.285714286,
            "unit": "ns",
            "range": "± 47289.84046271473"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2493281.25,
            "unit": "ns",
            "range": "± 48417.754577565174"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11681.91489361702,
            "unit": "ns",
            "range": "± 1246.4972657568233"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 55519.565217391304,
            "unit": "ns",
            "range": "± 4510.408941534656"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44705.479452054795,
            "unit": "ns",
            "range": "± 2141.7081974545786"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 60770.833333333336,
            "unit": "ns",
            "range": "± 11859.439204516124"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2665.05376344086,
            "unit": "ns",
            "range": "± 509.4639630894118"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12394.623655913978,
            "unit": "ns",
            "range": "± 1264.4267984208298"
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
          "id": "9554cca17656def896209057f14bfb3909d0332e",
          "message": "Merge pull request #3870 from greymistcube/feature/trie-proof\n\n✨ Introduce Merkle inclusion proof",
          "timestamp": "2024-07-16T16:57:23+09:00",
          "tree_id": "cbc50a5ee46e863883892b199e1d16d77ef4c8dd",
          "url": "https://github.com/planetarium/libplanet/commit/9554cca17656def896209057f14bfb3909d0332e"
        },
        "date": 1721117291979,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1066074.7368421052,
            "unit": "ns",
            "range": "± 99717.70470472607"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1832982.9787234042,
            "unit": "ns",
            "range": "± 71116.88883725752"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1608818.888888889,
            "unit": "ns",
            "range": "± 114018.60669605144"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6823186,
            "unit": "ns",
            "range": "± 150994.89472605797"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 31059.302325581397,
            "unit": "ns",
            "range": "± 1731.125299232146"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9720740,
            "unit": "ns",
            "range": "± 179854.88515546557"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23771846.666666668,
            "unit": "ns",
            "range": "± 309745.2452458003"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 60576045,
            "unit": "ns",
            "range": "± 1358611.3395960403"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 121478692.3076923,
            "unit": "ns",
            "range": "± 672340.0298727057"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 241409506.66666666,
            "unit": "ns",
            "range": "± 3181489.0072926246"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3350664.296875,
            "unit": "ns",
            "range": "± 9026.196855558434"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1074802.1223958333,
            "unit": "ns",
            "range": "± 2671.073859872636"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 740978.4895833334,
            "unit": "ns",
            "range": "± 2248.976471770013"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1930519.224330357,
            "unit": "ns",
            "range": "± 7505.403827761282"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 615966.5945870535,
            "unit": "ns",
            "range": "± 534.4684026215474"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 560081.4778645834,
            "unit": "ns",
            "range": "± 1149.0248986711174"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2097353.3333333335,
            "unit": "ns",
            "range": "± 38134.346473387755"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2215023.8095238097,
            "unit": "ns",
            "range": "± 51539.48879026551"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2697366.6666666665,
            "unit": "ns",
            "range": "± 68440.55285693066"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2403426.6666666665,
            "unit": "ns",
            "range": "± 39728.85721032125"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2913307.1428571427,
            "unit": "ns",
            "range": "± 41147.36115075096"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 180021.73913043478,
            "unit": "ns",
            "range": "± 8683.975600211226"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 171191.77215189874,
            "unit": "ns",
            "range": "± 8858.58424173595"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 151010.20408163266,
            "unit": "ns",
            "range": "± 5974.642419493934"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2788046.6666666665,
            "unit": "ns",
            "range": "± 45009.31437994119"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2470796.6666666665,
            "unit": "ns",
            "range": "± 44302.60983390525"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12153.684210526315,
            "unit": "ns",
            "range": "± 1563.126335831278"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 57458.163265306124,
            "unit": "ns",
            "range": "± 5889.111452929756"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45594.339622641506,
            "unit": "ns",
            "range": "± 1915.1636899652713"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 62845.36082474227,
            "unit": "ns",
            "range": "± 11289.49567646252"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3036.734693877551,
            "unit": "ns",
            "range": "± 582.6331545703046"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11652.68817204301,
            "unit": "ns",
            "range": "± 1206.3772030564198"
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
          "id": "77be73d70d6c67bce3eda73b9447059b55dca321",
          "message": "Merge pull request #3885 from planetarium/port/5.1.2-to-main\n\n🔀 Port 5.1.2 to main",
          "timestamp": "2024-07-18T14:01:35+09:00",
          "tree_id": "15551f907768d43d161cb699a8026392c40db99c",
          "url": "https://github.com/planetarium/libplanet/commit/77be73d70d6c67bce3eda73b9447059b55dca321"
        },
        "date": 1721279491126,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1011774.1935483871,
            "unit": "ns",
            "range": "± 78736.33339414172"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1798533.3333333333,
            "unit": "ns",
            "range": "± 62572.89363249761"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1569070.3296703296,
            "unit": "ns",
            "range": "± 86482.2775608525"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6805253.846153846,
            "unit": "ns",
            "range": "± 180559.29603489095"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 30142.85714285714,
            "unit": "ns",
            "range": "± 1199.8268273315177"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9820860,
            "unit": "ns",
            "range": "± 145838.7113021975"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23559696.666666668,
            "unit": "ns",
            "range": "± 267053.6459393951"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58728220,
            "unit": "ns",
            "range": "± 411516.8199999329"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 117929353.33333333,
            "unit": "ns",
            "range": "± 853909.4547739713"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 241225333.33333334,
            "unit": "ns",
            "range": "± 1381372.9276477427"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3305430.301339286,
            "unit": "ns",
            "range": "± 17248.96617736175"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1041370.1822916666,
            "unit": "ns",
            "range": "± 3891.7570529763643"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 746799.6419270834,
            "unit": "ns",
            "range": "± 3241.77621580909"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1906129.140625,
            "unit": "ns",
            "range": "± 5639.377713720903"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 609643.8216145834,
            "unit": "ns",
            "range": "± 1812.2279102819073"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 577081.4388020834,
            "unit": "ns",
            "range": "± 2076.7373336175415"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2202624.242424242,
            "unit": "ns",
            "range": "± 69554.81215515856"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2268523.076923077,
            "unit": "ns",
            "range": "± 33089.025215977425"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2737578.947368421,
            "unit": "ns",
            "range": "± 40945.323691036356"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2312479.1666666665,
            "unit": "ns",
            "range": "± 59273.95482852897"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2954664.285714286,
            "unit": "ns",
            "range": "± 50104.699720344935"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 177712.8205128205,
            "unit": "ns",
            "range": "± 5613.854079403143"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 166311.66666666666,
            "unit": "ns",
            "range": "± 7171.107085810265"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 145425.7142857143,
            "unit": "ns",
            "range": "± 4464.654841882277"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2788542.8571428573,
            "unit": "ns",
            "range": "± 36246.20328734105"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2554300,
            "unit": "ns",
            "range": "± 45170.201935093704"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12228.260869565218,
            "unit": "ns",
            "range": "± 1164.901173656396"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59602.17391304348,
            "unit": "ns",
            "range": "± 4947.4597380405"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 49077.90697674418,
            "unit": "ns",
            "range": "± 2683.8252403345177"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 66326.74418604652,
            "unit": "ns",
            "range": "± 8272.088781219503"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3292.8571428571427,
            "unit": "ns",
            "range": "± 660.7165744497237"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12278.260869565218,
            "unit": "ns",
            "range": "± 1333.657788202956"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "318e591ff920e0e9eb5b464ed659af7bf9333079",
          "message": "Merge pull request #3882 from planetarium/feature/policy-action\n\nPolicyActionsRegistry",
          "timestamp": "2024-07-22T17:57:49+09:00",
          "tree_id": "80d3cbc0f9dbb8d367527c8ea32c0d7457cd2a09",
          "url": "https://github.com/planetarium/libplanet/commit/318e591ff920e0e9eb5b464ed659af7bf9333079"
        },
        "date": 1721639228489,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1048158.695652174,
            "unit": "ns",
            "range": "± 101712.66807350807"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1850564.8148148148,
            "unit": "ns",
            "range": "± 77505.34773371158"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1594261.6279069767,
            "unit": "ns",
            "range": "± 85950.18963617946"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6915758.823529412,
            "unit": "ns",
            "range": "± 216489.11389475828"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 30360,
            "unit": "ns",
            "range": "± 565.432830417801"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10227650,
            "unit": "ns",
            "range": "± 146531.9662833238"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24360753.333333332,
            "unit": "ns",
            "range": "± 353235.7850070174"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 62250300,
            "unit": "ns",
            "range": "± 605345.0704232374"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 122341273.33333333,
            "unit": "ns",
            "range": "± 1902721.1774818965"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 251228113.33333334,
            "unit": "ns",
            "range": "± 2806858.4362660856"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3358735.78125,
            "unit": "ns",
            "range": "± 5941.547422553231"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1056690.5859375,
            "unit": "ns",
            "range": "± 2453.928013696085"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 741260.6315104166,
            "unit": "ns",
            "range": "± 1361.2893360947733"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1919581.3151041667,
            "unit": "ns",
            "range": "± 2284.1675851628224"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 632549.4075520834,
            "unit": "ns",
            "range": "± 1710.6591014833534"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 557852.3697916666,
            "unit": "ns",
            "range": "± 1000.6494167236802"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2168224,
            "unit": "ns",
            "range": "± 56849.173843308105"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2300844.736842105,
            "unit": "ns",
            "range": "± 69980.70659742456"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2689785.714285714,
            "unit": "ns",
            "range": "± 40490.75596579198"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2369986.6666666665,
            "unit": "ns",
            "range": "± 43679.11999811264"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2966371.4285714286,
            "unit": "ns",
            "range": "± 42273.421884231204"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 185904.7619047619,
            "unit": "ns",
            "range": "± 8452.322234278206"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 178675.51020408163,
            "unit": "ns",
            "range": "± 7012.9502414059225"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 146667.74193548388,
            "unit": "ns",
            "range": "± 4430.153277767726"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2759828.5714285714,
            "unit": "ns",
            "range": "± 40998.56336266184"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2561542.8571428573,
            "unit": "ns",
            "range": "± 31706.04684588425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12358.064516129032,
            "unit": "ns",
            "range": "± 1422.209134367862"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 58569.47368421053,
            "unit": "ns",
            "range": "± 4958.553188183504"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 47284.41558441558,
            "unit": "ns",
            "range": "± 2383.941061123749"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 63891.666666666664,
            "unit": "ns",
            "range": "± 12907.326900613398"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3265.979381443299,
            "unit": "ns",
            "range": "± 670.8027836633106"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11648.91304347826,
            "unit": "ns",
            "range": "± 1188.7286185749913"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8053f33d7bb292d213f39e885ef8297124d50d37",
          "message": "Merge pull request #3890 from moreal/typo\n\nfix: correct typo",
          "timestamp": "2024-07-22T19:18:38+09:00",
          "tree_id": "2ab0f141ccb89446592e1f1d7f70c2db6d7b9b69",
          "url": "https://github.com/planetarium/libplanet/commit/8053f33d7bb292d213f39e885ef8297124d50d37"
        },
        "date": 1721644080889,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1040963.5416666666,
            "unit": "ns",
            "range": "± 97695.26802072018"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1902728,
            "unit": "ns",
            "range": "± 76802.54311265629"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1590619.4444444445,
            "unit": "ns",
            "range": "± 76658.26791105856"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6888482.608695652,
            "unit": "ns",
            "range": "± 173312.39700760512"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 31801.0989010989,
            "unit": "ns",
            "range": "± 3487.071184484975"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9790850,
            "unit": "ns",
            "range": "± 73625.37971692599"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24048753.333333332,
            "unit": "ns",
            "range": "± 272832.3971825578"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59624030.76923077,
            "unit": "ns",
            "range": "± 626426.6429314441"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 124488307.14285715,
            "unit": "ns",
            "range": "± 1720834.6071978186"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 243221157.14285713,
            "unit": "ns",
            "range": "± 1169170.208516928"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3295881.1941964286,
            "unit": "ns",
            "range": "± 7331.479517824949"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1046634.3052455357,
            "unit": "ns",
            "range": "± 1788.6168498958973"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 744394.296875,
            "unit": "ns",
            "range": "± 1805.514288964247"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1933549.609375,
            "unit": "ns",
            "range": "± 3670.7137259091382"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 630852.421875,
            "unit": "ns",
            "range": "± 1104.5066046853744"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 564590.4752604166,
            "unit": "ns",
            "range": "± 1363.1480183924054"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2162280,
            "unit": "ns",
            "range": "± 30520.747041971303"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2214866.6666666665,
            "unit": "ns",
            "range": "± 28509.563975887777"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2790380.9523809524,
            "unit": "ns",
            "range": "± 63885.23788049645"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2395089.285714286,
            "unit": "ns",
            "range": "± 66616.83881936844"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2992535.294117647,
            "unit": "ns",
            "range": "± 58811.78603367346"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 184188.37209302327,
            "unit": "ns",
            "range": "± 5736.649482652892"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 174882.75862068965,
            "unit": "ns",
            "range": "± 7661.921977993133"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 148396.875,
            "unit": "ns",
            "range": "± 4090.5464872699013"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2891455.5555555555,
            "unit": "ns",
            "range": "± 60260.524804163484"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2530533.3333333335,
            "unit": "ns",
            "range": "± 53647.03818369056"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12977.659574468085,
            "unit": "ns",
            "range": "± 1349.4845097310745"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 58078.35051546392,
            "unit": "ns",
            "range": "± 5359.905681775172"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 48784.94623655914,
            "unit": "ns",
            "range": "± 3193.027261847941"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 59298.79518072289,
            "unit": "ns",
            "range": "± 7618.166573746096"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2764.2105263157896,
            "unit": "ns",
            "range": "± 541.4550509769425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11479.787234042553,
            "unit": "ns",
            "range": "± 1281.596768419976"
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
          "id": "741899c093b49355f93d1feecd169d99ee5a74e5",
          "message": "Merge pull request #3891 from planetarium/refactor/policy-actions-registry\n\nReopen: ♻️ Overhaul the handling of PolicyActionsRegistry",
          "timestamp": "2024-07-23T16:33:15+09:00",
          "tree_id": "56761a57c2aed7be3372f933d598112818fcc5cb",
          "url": "https://github.com/planetarium/libplanet/commit/741899c093b49355f93d1feecd169d99ee5a74e5"
        },
        "date": 1721720563473,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 971589.4736842106,
            "unit": "ns",
            "range": "± 77362.60638539346"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1744001.8867924528,
            "unit": "ns",
            "range": "± 71734.09899002017"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1515370.5882352942,
            "unit": "ns",
            "range": "± 80737.64659086127"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6736575,
            "unit": "ns",
            "range": "± 225013.3410330533"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 30152.941176470587,
            "unit": "ns",
            "range": "± 601.1630883741361"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9487733.333333334,
            "unit": "ns",
            "range": "± 86421.4975460113"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23402866.666666668,
            "unit": "ns",
            "range": "± 171663.6855959377"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58061313.333333336,
            "unit": "ns",
            "range": "± 240033.9704133166"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 116526492.85714285,
            "unit": "ns",
            "range": "± 851468.1569223522"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 235392714.2857143,
            "unit": "ns",
            "range": "± 665524.4312768492"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3260348.90625,
            "unit": "ns",
            "range": "± 7606.338879392535"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1086813.8113839286,
            "unit": "ns",
            "range": "± 2663.9880280041416"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 718934.4401041666,
            "unit": "ns",
            "range": "± 2052.113652474444"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1904108.8411458333,
            "unit": "ns",
            "range": "± 7498.6796313899"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 618730.5338541666,
            "unit": "ns",
            "range": "± 1266.1679837447955"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 543242.333984375,
            "unit": "ns",
            "range": "± 884.4347596359165"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2063900,
            "unit": "ns",
            "range": "± 18407.105651392845"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2167951.0204081633,
            "unit": "ns",
            "range": "± 82542.9133906746"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2623928.5714285714,
            "unit": "ns",
            "range": "± 25004.443561139244"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2257134.6153846155,
            "unit": "ns",
            "range": "± 58710.31215933155"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2842495.238095238,
            "unit": "ns",
            "range": "± 67153.32066391413"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 168387.93103448275,
            "unit": "ns",
            "range": "± 6767.856889174985"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 165554.79452054793,
            "unit": "ns",
            "range": "± 7366.12066407735"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 143470.58823529413,
            "unit": "ns",
            "range": "± 2805.745156344913"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2708326.6666666665,
            "unit": "ns",
            "range": "± 33997.65678199994"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2395071.4285714286,
            "unit": "ns",
            "range": "± 19415.98978524297"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9743.8202247191,
            "unit": "ns",
            "range": "± 705.4906506982755"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52000,
            "unit": "ns",
            "range": "± 4764.970748762173"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43288.88888888889,
            "unit": "ns",
            "range": "± 878.4269957874158"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 47209.782608695656,
            "unit": "ns",
            "range": "± 8291.224803575797"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2300,
            "unit": "ns",
            "range": "± 345.5161983163294"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9174.468085106382,
            "unit": "ns",
            "range": "± 744.4325500346774"
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
          "id": "29be97f6977e2f8c58397246c85b77a815d1c924",
          "message": "Merge pull request #3892 from planetarium/release/5.2.0\n\n🚀 Release 5.2.0",
          "timestamp": "2024-07-23T17:26:04+09:00",
          "tree_id": "4319024302f9589db25f93310ff36acc24e6623a",
          "url": "https://github.com/planetarium/libplanet/commit/29be97f6977e2f8c58397246c85b77a815d1c924"
        },
        "date": 1721723735390,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1027939.7959183673,
            "unit": "ns",
            "range": "± 85345.8177425437"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1858820,
            "unit": "ns",
            "range": "± 89900.56600553716"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1568207.5268817204,
            "unit": "ns",
            "range": "± 114714.6035551586"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6846468.421052632,
            "unit": "ns",
            "range": "± 235435.1452618461"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 30709.52380952381,
            "unit": "ns",
            "range": "± 723.8126566348242"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9769233.333333334,
            "unit": "ns",
            "range": "± 127773.20681955345"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23595428.57142857,
            "unit": "ns",
            "range": "± 142418.50802677096"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58315246.666666664,
            "unit": "ns",
            "range": "± 288320.723864109"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 116710366.66666667,
            "unit": "ns",
            "range": "± 982747.3840984675"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 235854253.33333334,
            "unit": "ns",
            "range": "± 2476942.5092430464"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3322456.8489583335,
            "unit": "ns",
            "range": "± 14922.529043598726"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1100729.1713169643,
            "unit": "ns",
            "range": "± 6585.966143457354"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 727649.6303013393,
            "unit": "ns",
            "range": "± 3010.6702345508993"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1912230.0130208333,
            "unit": "ns",
            "range": "± 4999.53379591994"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 606630.0716145834,
            "unit": "ns",
            "range": "± 1633.4207409546989"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 594959.35546875,
            "unit": "ns",
            "range": "± 959.6492612820668"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2153986.206896552,
            "unit": "ns",
            "range": "± 62622.10771272584"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2268945.714285714,
            "unit": "ns",
            "range": "± 74206.26001362746"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2799338.4615384615,
            "unit": "ns",
            "range": "± 34460.90873394418"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2229080,
            "unit": "ns",
            "range": "± 67351.34305835857"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3030326.6666666665,
            "unit": "ns",
            "range": "± 47662.34612453775"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 189994.23076923078,
            "unit": "ns",
            "range": "± 7771.148588019271"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 169321.05263157896,
            "unit": "ns",
            "range": "± 7329.776279038253"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 144665,
            "unit": "ns",
            "range": "± 3297.2516466070088"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2796600,
            "unit": "ns",
            "range": "± 30384.003888686104"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2549685.714285714,
            "unit": "ns",
            "range": "± 40483.72621081325"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11963.978494623656,
            "unit": "ns",
            "range": "± 1176.7301229003986"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 54257.64705882353,
            "unit": "ns",
            "range": "± 4139.829087528805"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44753.846153846156,
            "unit": "ns",
            "range": "± 653.9818863640703"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 48777.77777777778,
            "unit": "ns",
            "range": "± 7844.2962571722865"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2697.938144329897,
            "unit": "ns",
            "range": "± 748.7460881148921"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9757.446808510638,
            "unit": "ns",
            "range": "± 1218.2518200849292"
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
          "id": "4f1b3250ed5db44e0f045ab4abfe6a7a875b1033",
          "message": "Merge pull request #3896 from planetarium/ci/nuget-repo-url\n\nAdd SHA value to RepositoryUrl in nuget package",
          "timestamp": "2024-07-29T16:21:46+09:00",
          "tree_id": "306374b24f8c61b594e8fe8f023c4eff34b8585f",
          "url": "https://github.com/planetarium/libplanet/commit/4f1b3250ed5db44e0f045ab4abfe6a7a875b1033"
        },
        "date": 1722238413361,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1009714.2857142857,
            "unit": "ns",
            "range": "± 94884.05947401303"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1788907.2727272727,
            "unit": "ns",
            "range": "± 74945.31056548885"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1572832.608695652,
            "unit": "ns",
            "range": "± 108563.61138151608"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6932985,
            "unit": "ns",
            "range": "± 245563.6765818802"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 29859.183673469386,
            "unit": "ns",
            "range": "± 1065.3478241375244"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9766792.857142856,
            "unit": "ns",
            "range": "± 72554.62095537418"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23767278.57142857,
            "unit": "ns",
            "range": "± 201757.84963690978"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 60312650,
            "unit": "ns",
            "range": "± 1272332.6365149864"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 120041200,
            "unit": "ns",
            "range": "± 683126.4731609611"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 234722760,
            "unit": "ns",
            "range": "± 1172925.1113592645"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3323016.0026041665,
            "unit": "ns",
            "range": "± 7246.735543672255"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1049922.8776041667,
            "unit": "ns",
            "range": "± 2735.628757195129"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 746248.5281808035,
            "unit": "ns",
            "range": "± 1131.8024585888445"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1891033.6067708333,
            "unit": "ns",
            "range": "± 3149.4697197693713"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 628900.9765625,
            "unit": "ns",
            "range": "± 1541.6295630115328"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 585763.61328125,
            "unit": "ns",
            "range": "± 1681.599284561257"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2174436,
            "unit": "ns",
            "range": "± 23003.475824318375"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2247356.5217391304,
            "unit": "ns",
            "range": "± 53160.09975097485"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2694268.9655172415,
            "unit": "ns",
            "range": "± 78186.86911792193"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2262497.56097561,
            "unit": "ns",
            "range": "± 81455.26529268957"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2920780,
            "unit": "ns",
            "range": "± 39504.867692837186"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 175316.36363636365,
            "unit": "ns",
            "range": "± 6874.126574454107"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 168548.33333333334,
            "unit": "ns",
            "range": "± 7065.6843603593"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 147636.36363636365,
            "unit": "ns",
            "range": "± 4557.536216382308"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2753663.3333333335,
            "unit": "ns",
            "range": "± 37604.74640761393"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2509621.4285714286,
            "unit": "ns",
            "range": "± 39188.46334497768"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12070.408163265307,
            "unit": "ns",
            "range": "± 2018.2777788277785"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 54889.13043478261,
            "unit": "ns",
            "range": "± 5251.9479697827655"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45151.851851851854,
            "unit": "ns",
            "range": "± 1270.4845745348719"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 55653.60824742268,
            "unit": "ns",
            "range": "± 10810.518237034921"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2989.6907216494847,
            "unit": "ns",
            "range": "± 528.2606159373566"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10050,
            "unit": "ns",
            "range": "± 873.7314194914782"
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
          "id": "54aabc8841f90c42b078497c3e9a23967cb53a78",
          "message": "Merge pull request #3901 from greymistcube/chore/cleanup\n\n🧹 Fixed mistakes for arguments when throwing an `ArgumentOutOfRangeException`",
          "timestamp": "2024-07-30T16:08:25+09:00",
          "tree_id": "a14486d46d4a5601993f629246a6f39943670623",
          "url": "https://github.com/planetarium/libplanet/commit/54aabc8841f90c42b078497c3e9a23967cb53a78"
        },
        "date": 1722323802076,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1008300,
            "unit": "ns",
            "range": "± 63798.79718097459"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1824641.1764705882,
            "unit": "ns",
            "range": "± 57667.700731561024"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1580121.6494845361,
            "unit": "ns",
            "range": "± 121785.5092183967"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7122990.476190476,
            "unit": "ns",
            "range": "± 379680.3489490651"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 29886.956521739132,
            "unit": "ns",
            "range": "± 754.5645028311405"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9473146.153846154,
            "unit": "ns",
            "range": "± 59821.47907712044"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23164966.666666668,
            "unit": "ns",
            "range": "± 129420.05622151827"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59090226.92307692,
            "unit": "ns",
            "range": "± 286176.4495139498"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 116538628.57142857,
            "unit": "ns",
            "range": "± 588442.841389389"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 232556321.42857143,
            "unit": "ns",
            "range": "± 1996878.7949730917"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3303877.5948660714,
            "unit": "ns",
            "range": "± 7405.189673277989"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1071820.9114583333,
            "unit": "ns",
            "range": "± 2007.6641474920084"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 732151.0221354166,
            "unit": "ns",
            "range": "± 3752.9940806581485"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1898643.4114583333,
            "unit": "ns",
            "range": "± 7626.937135390379"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 610692.4944196428,
            "unit": "ns",
            "range": "± 773.6393599880271"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 558514.4155649039,
            "unit": "ns",
            "range": "± 1056.1837173961387"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2106100,
            "unit": "ns",
            "range": "± 28819.559330426968"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2201633.3333333335,
            "unit": "ns",
            "range": "± 33893.29193358529"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2683885.714285714,
            "unit": "ns",
            "range": "± 76275.32834597118"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2230485.714285714,
            "unit": "ns",
            "range": "± 81129.44360840309"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2943292.3076923075,
            "unit": "ns",
            "range": "± 80466.86236247527"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 169737.77777777778,
            "unit": "ns",
            "range": "± 9349.15219106179"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 159182.14285714287,
            "unit": "ns",
            "range": "± 6240.341107892832"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 145876.4705882353,
            "unit": "ns",
            "range": "± 4189.095427309902"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2713300,
            "unit": "ns",
            "range": "± 38944.99784494611"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2639703.3333333335,
            "unit": "ns",
            "range": "± 48106.32371063477"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9290.697674418605,
            "unit": "ns",
            "range": "± 704.3775570090642"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 49230.769230769234,
            "unit": "ns",
            "range": "± 2365.2960437597185"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43707.692307692305,
            "unit": "ns",
            "range": "± 1144.3506724507404"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 46989.47368421053,
            "unit": "ns",
            "range": "± 6985.8134920406155"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2155.7894736842104,
            "unit": "ns",
            "range": "± 314.7832045161634"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 8895.555555555555,
            "unit": "ns",
            "range": "± 792.0831744872931"
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
          "id": "e1e3373fe7a15d8137e5153c4ca2af19042aff7b",
          "message": "Merge pull request #3905 from greymistcube/chore/cleanup\n\n🧹 Cleaned up `BlockChain.FindNextHashes()`",
          "timestamp": "2024-07-30T22:57:57+09:00",
          "tree_id": "f8962e8c6fe463120e1505f37216e347bd225d8a",
          "url": "https://github.com/planetarium/libplanet/commit/e1e3373fe7a15d8137e5153c4ca2af19042aff7b"
        },
        "date": 1722348548252,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 980660,
            "unit": "ns",
            "range": "± 89634.27262092792"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1723311.5384615385,
            "unit": "ns",
            "range": "± 59298.3074906448"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1523255.7894736843,
            "unit": "ns",
            "range": "± 122061.76298121728"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7262024.691358024,
            "unit": "ns",
            "range": "± 378848.5985624284"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 37167.34693877551,
            "unit": "ns",
            "range": "± 3927.0086595796065"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9597686.666666666,
            "unit": "ns",
            "range": "± 94818.90157156483"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23133750,
            "unit": "ns",
            "range": "± 106076.29148581983"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57404914.28571428,
            "unit": "ns",
            "range": "± 253146.47890148457"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 118002393.33333333,
            "unit": "ns",
            "range": "± 242129.85437767147"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 229412720,
            "unit": "ns",
            "range": "± 827489.2094246823"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3345327.2135416665,
            "unit": "ns",
            "range": "± 4934.245180919695"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1072433.8932291667,
            "unit": "ns",
            "range": "± 2554.1959086356064"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 725587.9957932692,
            "unit": "ns",
            "range": "± 815.9602565911263"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1937379.3489583333,
            "unit": "ns",
            "range": "± 3107.2551862668433"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 603972.1419270834,
            "unit": "ns",
            "range": "± 596.2880040346598"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 551930.0706129808,
            "unit": "ns",
            "range": "± 580.2001159855926"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2085693.3333333333,
            "unit": "ns",
            "range": "± 27687.21898707227"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2327588.4615384615,
            "unit": "ns",
            "range": "± 95472.10998936823"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2681893.3333333335,
            "unit": "ns",
            "range": "± 30642.51170856469"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2288693.75,
            "unit": "ns",
            "range": "± 44448.25409019647"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2885150,
            "unit": "ns",
            "range": "± 16004.40280331975"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 169941.86046511628,
            "unit": "ns",
            "range": "± 6283.320041345276"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 160312.32876712328,
            "unit": "ns",
            "range": "± 7205.012630212529"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 142965,
            "unit": "ns",
            "range": "± 3140.4449902588813"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2703942.8571428573,
            "unit": "ns",
            "range": "± 18740.688530398413"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2504281.25,
            "unit": "ns",
            "range": "± 47536.417180234916"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9913.829787234043,
            "unit": "ns",
            "range": "± 1220.840629109232"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 49228.35820895522,
            "unit": "ns",
            "range": "± 2293.852520301537"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44953.846153846156,
            "unit": "ns",
            "range": "± 1042.7773565745542"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 45091.397849462366,
            "unit": "ns",
            "range": "± 6458.658763611678"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2112.6315789473683,
            "unit": "ns",
            "range": "± 287.7802446397723"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 8951.111111111111,
            "unit": "ns",
            "range": "± 623.4183482652783"
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
          "id": "8841c82c39cfd93ea277117b30f227723455c13e",
          "message": "Merge pull request #3906 from greymistcube/chore/cleanup\n\n🧹 Removed null check for Tip",
          "timestamp": "2024-07-31T00:34:59+09:00",
          "tree_id": "e014a433ec47e481a579116e0adae80ecccfcdcd",
          "url": "https://github.com/planetarium/libplanet/commit/8841c82c39cfd93ea277117b30f227723455c13e"
        },
        "date": 1722354160726,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1001515.7894736842,
            "unit": "ns",
            "range": "± 83064.45371784834"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1755098.3050847459,
            "unit": "ns",
            "range": "± 77410.83522912562"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1517919.7802197803,
            "unit": "ns",
            "range": "± 106051.16607853885"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7504006.451612903,
            "unit": "ns",
            "range": "± 490247.0658862714"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 29246.153846153848,
            "unit": "ns",
            "range": "± 325.6157874330436"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9556664.285714285,
            "unit": "ns",
            "range": "± 94179.36738881953"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22898465.384615384,
            "unit": "ns",
            "range": "± 75121.02286925462"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59817069.23076923,
            "unit": "ns",
            "range": "± 186896.21177102273"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 115113678.57142857,
            "unit": "ns",
            "range": "± 604312.3290517546"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 236444557.14285713,
            "unit": "ns",
            "range": "± 1454723.132904194"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3297482.0572916665,
            "unit": "ns",
            "range": "± 4833.452046056149"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1056510.1432291667,
            "unit": "ns",
            "range": "± 3101.887550601293"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 755367.8059895834,
            "unit": "ns",
            "range": "± 2433.1828754228304"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1954704.765625,
            "unit": "ns",
            "range": "± 2161.1598312957444"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 603960.0390625,
            "unit": "ns",
            "range": "± 1550.134501444651"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 548433.8932291666,
            "unit": "ns",
            "range": "± 1340.1357094964394"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2150191.6666666665,
            "unit": "ns",
            "range": "± 44129.630356058035"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2168214.285714286,
            "unit": "ns",
            "range": "± 67755.57783331297"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2682333.3333333335,
            "unit": "ns",
            "range": "± 57054.25694279189"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2227760.8695652173,
            "unit": "ns",
            "range": "± 55271.62463795122"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2927475,
            "unit": "ns",
            "range": "± 48487.59978936196"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 174226.4705882353,
            "unit": "ns",
            "range": "± 8096.177790786067"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 164603.17460317462,
            "unit": "ns",
            "range": "± 6743.430931438872"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 141251.85185185185,
            "unit": "ns",
            "range": "± 3553.802986874155"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2723506.6666666665,
            "unit": "ns",
            "range": "± 42366.638941956386"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2514380,
            "unit": "ns",
            "range": "± 37493.85092442302"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9664.516129032258,
            "unit": "ns",
            "range": "± 1104.8947580504946"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 50914.28571428572,
            "unit": "ns",
            "range": "± 5265.174437344892"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43550,
            "unit": "ns",
            "range": "± 772.3590237308434"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 48968.36734693877,
            "unit": "ns",
            "range": "± 9039.25684540899"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2211.340206185567,
            "unit": "ns",
            "range": "± 391.27896289491946"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9233.333333333334,
            "unit": "ns",
            "range": "± 847.6007115925132"
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
          "id": "e1b8327877dbee184fb8b5d2bff1c29f9d61d5af",
          "message": "Merge pull request #3910 from greymistcube/chore/optimization\n\n⚡ Removed unnecessary `ToBuilder()`",
          "timestamp": "2024-08-02T09:41:51+09:00",
          "tree_id": "2ac08bc05f73e4a46481cba42ae92936e530fe02",
          "url": "https://github.com/planetarium/libplanet/commit/e1b8327877dbee184fb8b5d2bff1c29f9d61d5af"
        },
        "date": 1722559791753,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 960225.2631578947,
            "unit": "ns",
            "range": "± 70578.13079469139"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1723820.8333333333,
            "unit": "ns",
            "range": "± 67923.30455313875"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1552292.5531914893,
            "unit": "ns",
            "range": "± 134558.19801716346"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6663346.875,
            "unit": "ns",
            "range": "± 207191.43086087663"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 29686.363636363636,
            "unit": "ns",
            "range": "± 452.81706023877905"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9481673.333333334,
            "unit": "ns",
            "range": "± 47010.49224324694"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23243440,
            "unit": "ns",
            "range": "± 166723.508497495"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58500050,
            "unit": "ns",
            "range": "± 351384.90182529076"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 118087207.14285715,
            "unit": "ns",
            "range": "± 619966.9078814868"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 231834335.7142857,
            "unit": "ns",
            "range": "± 1066063.447821104"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3339843.8020833335,
            "unit": "ns",
            "range": "± 5332.68210040891"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1043494.5442708334,
            "unit": "ns",
            "range": "± 1729.4439541820866"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 730668.5246394231,
            "unit": "ns",
            "range": "± 1028.9809171730308"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1892830.8854166667,
            "unit": "ns",
            "range": "± 2756.405959359678"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 600416.4341517857,
            "unit": "ns",
            "range": "± 1117.8974441936593"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 541727.63671875,
            "unit": "ns",
            "range": "± 470.65148248963266"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2146000,
            "unit": "ns",
            "range": "± 31163.143911703428"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2207947.619047619,
            "unit": "ns",
            "range": "± 42685.94170271541"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2642269.230769231,
            "unit": "ns",
            "range": "± 11757.648901557986"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2235781.25,
            "unit": "ns",
            "range": "± 33609.1895915388"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2848880,
            "unit": "ns",
            "range": "± 36218.862489040155"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 169059.42028985507,
            "unit": "ns",
            "range": "± 5057.938397753043"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 165273.5849056604,
            "unit": "ns",
            "range": "± 5348.513486632604"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 142778.57142857142,
            "unit": "ns",
            "range": "± 2398.133431659706"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2700513.3333333335,
            "unit": "ns",
            "range": "± 21513.446514967818"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2416613.3333333335,
            "unit": "ns",
            "range": "± 35331.65045408329"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9720.967741935483,
            "unit": "ns",
            "range": "± 797.3571352424332"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 48328.37837837838,
            "unit": "ns",
            "range": "± 2007.8285326472485"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43038.88888888889,
            "unit": "ns",
            "range": "± 706.3900679543669"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 45453.1914893617,
            "unit": "ns",
            "range": "± 7580.545305202513"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2144.0860215053763,
            "unit": "ns",
            "range": "± 272.054328650107"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9348.780487804877,
            "unit": "ns",
            "range": "± 508.9917175195122"
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
          "id": "711895ee13eff21471b5eb4a2f75183a495c4014",
          "message": "Merge pull request #3918 from timesince/main\n\nchore: fix some comments",
          "timestamp": "2024-08-12T09:42:16+09:00",
          "tree_id": "b93e31b3e0fb473f421c2fb7db27b0773d23824e",
          "url": "https://github.com/planetarium/libplanet/commit/711895ee13eff21471b5eb4a2f75183a495c4014"
        },
        "date": 1723423920399,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1062136.8686868686,
            "unit": "ns",
            "range": "± 125018.86359418141"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1807938.888888889,
            "unit": "ns",
            "range": "± 53747.24060838726"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1565594.680851064,
            "unit": "ns",
            "range": "± 90274.74714117135"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6987560.52631579,
            "unit": "ns",
            "range": "± 235219.14513396512"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34642.391304347824,
            "unit": "ns",
            "range": "± 4111.368150017522"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10360253.333333334,
            "unit": "ns",
            "range": "± 138691.58418523282"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25293206.666666668,
            "unit": "ns",
            "range": "± 138761.1023443152"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 63084146.666666664,
            "unit": "ns",
            "range": "± 217558.09032685193"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 130302660,
            "unit": "ns",
            "range": "± 514076.7824807052"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 254168873.33333334,
            "unit": "ns",
            "range": "± 997264.7552657409"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3371653.0729166665,
            "unit": "ns",
            "range": "± 6087.055348943612"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1095159.453125,
            "unit": "ns",
            "range": "± 2081.8244704862914"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 778791.3386418269,
            "unit": "ns",
            "range": "± 1080.091128378702"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1991039.453125,
            "unit": "ns",
            "range": "± 27414.70318404904"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 632134.6484375,
            "unit": "ns",
            "range": "± 1522.8414872095032"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 559647.578125,
            "unit": "ns",
            "range": "± 706.180599193061"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2229543.3333333335,
            "unit": "ns",
            "range": "± 66320.42221140371"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2306126.6666666665,
            "unit": "ns",
            "range": "± 68489.47532201614"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2863271.4285714286,
            "unit": "ns",
            "range": "± 38968.14139724967"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2415252.6315789474,
            "unit": "ns",
            "range": "± 73520.74440423252"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3119900,
            "unit": "ns",
            "range": "± 28449.930956481625"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 193035.48387096773,
            "unit": "ns",
            "range": "± 7789.317964507201"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 185883.33333333334,
            "unit": "ns",
            "range": "± 8323.896708288517"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 161598.78048780488,
            "unit": "ns",
            "range": "± 8412.387895203578"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2912546.6666666665,
            "unit": "ns",
            "range": "± 44576.44904569911"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2639784.6153846155,
            "unit": "ns",
            "range": "± 23755.765831823024"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14067.777777777777,
            "unit": "ns",
            "range": "± 1322.56371548712"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 65248.42105263158,
            "unit": "ns",
            "range": "± 6645.152819239106"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 60894,
            "unit": "ns",
            "range": "± 4986.341344111933"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 76372.72727272728,
            "unit": "ns",
            "range": "± 14206.50769378007"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4023.404255319149,
            "unit": "ns",
            "range": "± 722.8119420967057"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13480.851063829787,
            "unit": "ns",
            "range": "± 1551.0854053109865"
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
          "id": "7a6eba2b0b1d4f1d7d1d66a7f1e0237e57ea0753",
          "message": "Merge pull request #3924 from greymistcube/chore/remove-to-byte-array\n\n⚡ Optimized `HashNode.ToBencodex()`",
          "timestamp": "2024-08-21T00:48:05+09:00",
          "tree_id": "75e32bfecc99025a197960fe6f0b8c27c73a9b9f",
          "url": "https://github.com/planetarium/libplanet/commit/7a6eba2b0b1d4f1d7d1d66a7f1e0237e57ea0753"
        },
        "date": 1724169599126,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1100181.4432989692,
            "unit": "ns",
            "range": "± 109728.0362702647"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1898818.75,
            "unit": "ns",
            "range": "± 65345.07308992515"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1609748.2758620689,
            "unit": "ns",
            "range": "± 82704.09267180918"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6754761.111111111,
            "unit": "ns",
            "range": "± 139785.4243806594"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 39582.82828282828,
            "unit": "ns",
            "range": "± 4597.493558585236"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10375133.333333334,
            "unit": "ns",
            "range": "± 80942.84285546074"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26450290,
            "unit": "ns",
            "range": "± 311703.41397827887"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 64621173.333333336,
            "unit": "ns",
            "range": "± 679782.8828453419"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 127182286.66666667,
            "unit": "ns",
            "range": "± 1992754.3439982282"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 256833985.7142857,
            "unit": "ns",
            "range": "± 2557327.1400661045"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3385689.2578125,
            "unit": "ns",
            "range": "± 13272.062657398797"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1088396.0677083333,
            "unit": "ns",
            "range": "± 2671.568780614193"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 754242.0182291666,
            "unit": "ns",
            "range": "± 3004.924605372591"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1932671.015625,
            "unit": "ns",
            "range": "± 7953.95762902253"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 619963.8216145834,
            "unit": "ns",
            "range": "± 1336.6946633272964"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 586503.3333333334,
            "unit": "ns",
            "range": "± 1688.7120135405116"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2295258.3333333335,
            "unit": "ns",
            "range": "± 58099.20239418592"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2337200,
            "unit": "ns",
            "range": "± 63958.367709002705"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2786207.1428571427,
            "unit": "ns",
            "range": "± 48531.91597425212"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2388731.25,
            "unit": "ns",
            "range": "± 46273.86906595701"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3093116.6666666665,
            "unit": "ns",
            "range": "± 65591.07946879936"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 191913.51351351352,
            "unit": "ns",
            "range": "± 9571.580713191"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 190083.8383838384,
            "unit": "ns",
            "range": "± 11317.538376890496"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 152258.33333333334,
            "unit": "ns",
            "range": "± 6815.443372340638"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2949380,
            "unit": "ns",
            "range": "± 31937.912983072107"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2518584.6153846155,
            "unit": "ns",
            "range": "± 23884.01997688853"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13604.347826086956,
            "unit": "ns",
            "range": "± 1631.2816402373448"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 63484.94623655914,
            "unit": "ns",
            "range": "± 5951.323313504375"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 55154.255319148935,
            "unit": "ns",
            "range": "± 6340.8500650160795"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 72814.28571428571,
            "unit": "ns",
            "range": "± 13736.82686689812"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3996.969696969697,
            "unit": "ns",
            "range": "± 1154.5344980708119"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13011.224489795919,
            "unit": "ns",
            "range": "± 2195.150825105436"
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
          "id": "df313baf568a277f381e3572fcd39c2a47ebb836",
          "message": "Merge pull request #3913 from greymistcube/refactor/block-locator\n\n⚡ ♻️ Refactor `BlockLocator` to include only one `BlockHash`",
          "timestamp": "2024-08-21T01:10:30+09:00",
          "tree_id": "ff14c4cbc07ec52722c5c79cd6dee136c2821630",
          "url": "https://github.com/planetarium/libplanet/commit/df313baf568a277f381e3572fcd39c2a47ebb836"
        },
        "date": 1724170751665,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1026997.8723404255,
            "unit": "ns",
            "range": "± 89847.56742265465"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1838473.9130434783,
            "unit": "ns",
            "range": "± 81842.60477600733"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1588768.6746987952,
            "unit": "ns",
            "range": "± 81320.28056486884"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6837728.571428572,
            "unit": "ns",
            "range": "± 221046.27885345183"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 31357.894736842107,
            "unit": "ns",
            "range": "± 640.5863542044759"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9891820,
            "unit": "ns",
            "range": "± 111802.63988705403"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24224653.333333332,
            "unit": "ns",
            "range": "± 357086.1938097353"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 60348786.666666664,
            "unit": "ns",
            "range": "± 1105420.6218621468"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 122266176.92307693,
            "unit": "ns",
            "range": "± 1487863.3148208687"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 247026728.57142857,
            "unit": "ns",
            "range": "± 2138073.460070851"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3424231.953125,
            "unit": "ns",
            "range": "± 9589.82522137794"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1063005.7682291667,
            "unit": "ns",
            "range": "± 2434.9719697997493"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 742337.3604910715,
            "unit": "ns",
            "range": "± 1478.477827109505"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1919127.5390625,
            "unit": "ns",
            "range": "± 3604.551501929772"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 631669.3219866072,
            "unit": "ns",
            "range": "± 2024.7190231106601"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 567083.7289663461,
            "unit": "ns",
            "range": "± 833.2622928905403"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2189945.4545454546,
            "unit": "ns",
            "range": "± 52055.53561225538"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2298164.285714286,
            "unit": "ns",
            "range": "± 38438.03419176731"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2781378.2608695654,
            "unit": "ns",
            "range": "± 70183.71966438409"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2266663.0434782607,
            "unit": "ns",
            "range": "± 86817.30334109838"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2930585.714285714,
            "unit": "ns",
            "range": "± 22141.42852534265"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 177520,
            "unit": "ns",
            "range": "± 7465.46398707896"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 174221.568627451,
            "unit": "ns",
            "range": "± 7051.0797393162475"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 142956.66666666666,
            "unit": "ns",
            "range": "± 4279.536982152298"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2750940,
            "unit": "ns",
            "range": "± 46585.739694214826"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2474650,
            "unit": "ns",
            "range": "± 30218.32734769262"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11745.054945054944,
            "unit": "ns",
            "range": "± 1482.9597833959353"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 55892.55319148936,
            "unit": "ns",
            "range": "± 3988.5114414585323"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 46303.57142857143,
            "unit": "ns",
            "range": "± 2000.6330167055794"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 64941.237113402065,
            "unit": "ns",
            "range": "± 12397.561525838119"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2925.5102040816328,
            "unit": "ns",
            "range": "± 651.9299223123169"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10651.111111111111,
            "unit": "ns",
            "range": "± 928.118120684308"
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
          "id": "93d548b18005c8d27ac2c79bf6b579f330779dd0",
          "message": "Merge pull request #3926 from greymistcube/chore/optimize-key-converter\n\n⚡ Optimized KeyConverters",
          "timestamp": "2024-08-21T10:39:07+09:00",
          "tree_id": "222fee18e57fb9e8a9acfde888a76cf12ae1d057",
          "url": "https://github.com/planetarium/libplanet/commit/93d548b18005c8d27ac2c79bf6b579f330779dd0"
        },
        "date": 1724204882215,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 981887,
            "unit": "ns",
            "range": "± 113340.4058889446"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1691363.5294117648,
            "unit": "ns",
            "range": "± 86338.42444134595"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1503784.8484848484,
            "unit": "ns",
            "range": "± 156180.31204389967"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6685006.666666667,
            "unit": "ns",
            "range": "± 249430.57551150385"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 30008.88888888889,
            "unit": "ns",
            "range": "± 1076.9954465638152"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9729475,
            "unit": "ns",
            "range": "± 186936.30109389313"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23077404.76190476,
            "unit": "ns",
            "range": "± 549405.2889044576"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57193310,
            "unit": "ns",
            "range": "± 790273.1334346192"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 111242450,
            "unit": "ns",
            "range": "± 1935089.3792572697"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 226855861.1111111,
            "unit": "ns",
            "range": "± 4712560.747636406"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3225030.7421875,
            "unit": "ns",
            "range": "± 23070.33702114962"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1016921.1588541666,
            "unit": "ns",
            "range": "± 14438.346395915403"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 716905.234375,
            "unit": "ns",
            "range": "± 6225.1055214233575"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1921179.0755208333,
            "unit": "ns",
            "range": "± 18061.730325433688"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 606577.1033653846,
            "unit": "ns",
            "range": "± 9165.591344901897"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 560770.68359375,
            "unit": "ns",
            "range": "± 3729.0118743806215"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2079516.6666666667,
            "unit": "ns",
            "range": "± 60082.78819080894"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2163884.210526316,
            "unit": "ns",
            "range": "± 43456.0731359572"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2688192.592592593,
            "unit": "ns",
            "range": "± 73100.96245775915"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2215164.705882353,
            "unit": "ns",
            "range": "± 44544.76598289173"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2899866.6666666665,
            "unit": "ns",
            "range": "± 48605.41807933213"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 168096.61016949153,
            "unit": "ns",
            "range": "± 7239.498127530354"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 157000,
            "unit": "ns",
            "range": "± 7121.64150865359"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 139855.31914893616,
            "unit": "ns",
            "range": "± 5411.252708402239"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2605242.8571428573,
            "unit": "ns",
            "range": "± 83113.65459316497"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2392859.090909091,
            "unit": "ns",
            "range": "± 89485.16004859006"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9152.87356321839,
            "unit": "ns",
            "range": "± 683.3295844884486"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 48328.88888888889,
            "unit": "ns",
            "range": "± 3296.0819247906043"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43204.34782608696,
            "unit": "ns",
            "range": "± 1640.7256554124162"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 47220.61855670103,
            "unit": "ns",
            "range": "± 8542.856886315532"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2114.285714285714,
            "unit": "ns",
            "range": "± 447.9046290238927"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9030,
            "unit": "ns",
            "range": "± 865.1102417247635"
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
          "id": "1891fae405a0c4c172c3edef8ee077954bd0be16",
          "message": "Merge pull request #3929 from Atralupus/remove-planet-brew\n\nRemove `Homebrew Cask` Guide",
          "timestamp": "2024-08-22T14:44:37+09:00",
          "tree_id": "0c09369050f64bd360fad81f55afbccf4e9bb8bd",
          "url": "https://github.com/planetarium/libplanet/commit/1891fae405a0c4c172c3edef8ee077954bd0be16"
        },
        "date": 1724306181950,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 960434.375,
            "unit": "ns",
            "range": "± 86903.90316244961"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1694929.268292683,
            "unit": "ns",
            "range": "± 46432.44686586331"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1483020.879120879,
            "unit": "ns",
            "range": "± 87089.10445500123"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6708895.12195122,
            "unit": "ns",
            "range": "± 240286.38845263325"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 37511,
            "unit": "ns",
            "range": "± 4874.897460719071"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9671050,
            "unit": "ns",
            "range": "± 53016.96027615198"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23068640,
            "unit": "ns",
            "range": "± 258878.1036925073"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59089386.666666664,
            "unit": "ns",
            "range": "± 460353.945919669"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 115487878.57142857,
            "unit": "ns",
            "range": "± 478566.02177526377"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 233876186.66666666,
            "unit": "ns",
            "range": "± 821564.9820979006"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3287184.151785714,
            "unit": "ns",
            "range": "± 4041.205674876833"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1046870.9765625,
            "unit": "ns",
            "range": "± 3239.9236603477893"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 728683.5091145834,
            "unit": "ns",
            "range": "± 1832.504840141372"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1908665.6119791667,
            "unit": "ns",
            "range": "± 3828.5199859622626"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 598989.2513020834,
            "unit": "ns",
            "range": "± 1624.1024873359665"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 564899.2337740385,
            "unit": "ns",
            "range": "± 1093.5724421991429"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2156646.6666666665,
            "unit": "ns",
            "range": "± 30668.61743277801"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2191060,
            "unit": "ns",
            "range": "± 33225.10346108797"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2628871.4285714286,
            "unit": "ns",
            "range": "± 25663.33597151417"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2314833.3333333335,
            "unit": "ns",
            "range": "± 42140.04994685946"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2921600,
            "unit": "ns",
            "range": "± 49825.7270586499"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 168326.08695652173,
            "unit": "ns",
            "range": "± 6364.395224217954"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 160323.8805970149,
            "unit": "ns",
            "range": "± 7161.261306549177"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 145326.66666666666,
            "unit": "ns",
            "range": "± 2626.9120020789937"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2633500,
            "unit": "ns",
            "range": "± 35556.79561329612"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2369223.3333333335,
            "unit": "ns",
            "range": "± 34245.94797024828"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9449.425287356322,
            "unit": "ns",
            "range": "± 716.3982203012431"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 48681.395348837206,
            "unit": "ns",
            "range": "± 2653.8102076695413"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44634.61538461538,
            "unit": "ns",
            "range": "± 1101.9772439364826"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 48090.816326530614,
            "unit": "ns",
            "range": "± 8553.19421535042"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2285.5670103092784,
            "unit": "ns",
            "range": "± 325.63709693513675"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 8997.802197802197,
            "unit": "ns",
            "range": "± 765.067610952424"
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
          "id": "cb2deede5de578d42fec11050d90e7415af4a2f2",
          "message": "Merge pull request #3920 from greymistcube/refactor/get-block-demand-hashes\n\n♻️ Refactor `GetDemandBlockHashes()`",
          "timestamp": "2024-08-22T15:08:36+09:00",
          "tree_id": "0ddd0436e0c45e4513a53c3f17e01fbde1edcb0c",
          "url": "https://github.com/planetarium/libplanet/commit/cb2deede5de578d42fec11050d90e7415af4a2f2"
        },
        "date": 1724307583489,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 971008.0808080808,
            "unit": "ns",
            "range": "± 75381.945379091"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1722600,
            "unit": "ns",
            "range": "± 60556.02618808724"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1471877.380952381,
            "unit": "ns",
            "range": "± 78781.8604147385"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6628378.378378378,
            "unit": "ns",
            "range": "± 208582.99991335068"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33518.181818181816,
            "unit": "ns",
            "range": "± 4964.123607555983"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10199660,
            "unit": "ns",
            "range": "± 138847.7779028942"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23517638.46153846,
            "unit": "ns",
            "range": "± 130704.47287973443"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58970846.666666664,
            "unit": "ns",
            "range": "± 255246.34841844926"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 118128828.57142857,
            "unit": "ns",
            "range": "± 532748.4417600883"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 233181593.33333334,
            "unit": "ns",
            "range": "± 740072.1880491184"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3289215.78125,
            "unit": "ns",
            "range": "± 9873.51865814117"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1029652.5130208334,
            "unit": "ns",
            "range": "± 1342.489511107746"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 724891.8489583334,
            "unit": "ns",
            "range": "± 1208.9929668638588"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1887613.1556919643,
            "unit": "ns",
            "range": "± 1776.0223958947925"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 615313.1626674107,
            "unit": "ns",
            "range": "± 833.2777533563343"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 558464.3815104166,
            "unit": "ns",
            "range": "± 632.7326599743446"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2153237.5,
            "unit": "ns",
            "range": "± 52900.158728289854"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2172091.891891892,
            "unit": "ns",
            "range": "± 73197.90668826223"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2653923.076923077,
            "unit": "ns",
            "range": "± 28084.460526720522"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2222425.806451613,
            "unit": "ns",
            "range": "± 67206.91912663922"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2916193.3333333335,
            "unit": "ns",
            "range": "± 34431.53593243651"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 172448.78048780488,
            "unit": "ns",
            "range": "± 6054.4662007157785"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 158580.32786885247,
            "unit": "ns",
            "range": "± 7092.926515718111"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 144093.5483870968,
            "unit": "ns",
            "range": "± 4355.8340559048675"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2677706.6666666665,
            "unit": "ns",
            "range": "± 37526.89448280806"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2461486.6666666665,
            "unit": "ns",
            "range": "± 36912.829102914235"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9622.680412371134,
            "unit": "ns",
            "range": "± 1223.4262982364303"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 49645.65217391304,
            "unit": "ns",
            "range": "± 3672.3024200766354"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44114.0350877193,
            "unit": "ns",
            "range": "± 1773.9623321507493"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 46918.36734693877,
            "unit": "ns",
            "range": "± 7739.2205971463245"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2281.443298969072,
            "unit": "ns",
            "range": "± 348.90599763977025"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9215.217391304348,
            "unit": "ns",
            "range": "± 1114.03975135823"
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
          "id": "6ec04a552c1c683fc3cff3da72f9182dac1d4022",
          "message": "Merge pull request #3934 from greymistcube/refactor/block-demand\n\n♻️ Changed `BlockDemand` to hold an `IBlockExcerpt` instead of `BlockHeader`",
          "timestamp": "2024-08-23T20:34:41+09:00",
          "tree_id": "1cb43185aa471bc009a951ccdd4072500b6bb25a",
          "url": "https://github.com/planetarium/libplanet/commit/6ec04a552c1c683fc3cff3da72f9182dac1d4022"
        },
        "date": 1724413406835,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 983853.7634408602,
            "unit": "ns",
            "range": "± 80707.12424662907"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1757917.7419354839,
            "unit": "ns",
            "range": "± 74474.86433534723"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1500097.8494623655,
            "unit": "ns",
            "range": "± 86388.91708619177"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6671250,
            "unit": "ns",
            "range": "± 190205.71222485133"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 30111.11111111111,
            "unit": "ns",
            "range": "± 852.8620857874604"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10070914.285714285,
            "unit": "ns",
            "range": "± 46577.57560726566"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23550380,
            "unit": "ns",
            "range": "± 436800.4663786103"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 60381942.85714286,
            "unit": "ns",
            "range": "± 329106.8769921353"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 118189823.07692307,
            "unit": "ns",
            "range": "± 355283.58193103096"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 233744561.53846154,
            "unit": "ns",
            "range": "± 799077.8586788456"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3297565.078125,
            "unit": "ns",
            "range": "± 4284.195615847453"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1078106.7057291667,
            "unit": "ns",
            "range": "± 2540.093650793496"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 734706.6796875,
            "unit": "ns",
            "range": "± 1459.1472308190882"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1933839.296875,
            "unit": "ns",
            "range": "± 4676.570589576473"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 631791.15234375,
            "unit": "ns",
            "range": "± 796.6729444259099"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 561202.44140625,
            "unit": "ns",
            "range": "± 1786.261438304336"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2111944.117647059,
            "unit": "ns",
            "range": "± 67619.7801040426"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2227595.1219512196,
            "unit": "ns",
            "range": "± 80018.7945148498"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2614448,
            "unit": "ns",
            "range": "± 61655.60342201943"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2261086.9565217393,
            "unit": "ns",
            "range": "± 56173.26527117056"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2871407.6923076925,
            "unit": "ns",
            "range": "± 26755.263081571495"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 171790.6976744186,
            "unit": "ns",
            "range": "± 9052.755549385818"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 164153.84615384616,
            "unit": "ns",
            "range": "± 8458.526664063507"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 146953.84615384616,
            "unit": "ns",
            "range": "± 2447.6571739166498"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2671440,
            "unit": "ns",
            "range": "± 46384.78506702695"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2372500,
            "unit": "ns",
            "range": "± 29927.547125066514"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10443.157894736842,
            "unit": "ns",
            "range": "± 1561.0725058180522"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 50454.945054945056,
            "unit": "ns",
            "range": "± 3885.907980161243"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44168.29268292683,
            "unit": "ns",
            "range": "± 1470.7887381249293"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 53795.833333333336,
            "unit": "ns",
            "range": "± 10305.255855417374"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2434.4086021505377,
            "unit": "ns",
            "range": "± 322.85904302702926"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9838.947368421053,
            "unit": "ns",
            "range": "± 1245.6131308189285"
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
          "id": "7001504c3f0336dfaf7edb50a9a02f2e9634da17",
          "message": "Merge pull request #3931 from greymistcube/refactor/remove-chunksize\n\n♻️ Simplified the internal behavior of `GetDemandBlockHashes()`",
          "timestamp": "2024-08-27T17:31:13+09:00",
          "tree_id": "2af221e45661dfa4cc352c50fc483d0c144c4524",
          "url": "https://github.com/planetarium/libplanet/commit/7001504c3f0336dfaf7edb50a9a02f2e9634da17"
        },
        "date": 1724748060228,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 978492.7083333334,
            "unit": "ns",
            "range": "± 107703.09798094473"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1679912.857142857,
            "unit": "ns",
            "range": "± 75478.47552170583"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1426597.7011494252,
            "unit": "ns",
            "range": "± 77977.60557620389"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6435900,
            "unit": "ns",
            "range": "± 208239.91819392305"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 29887.17948717949,
            "unit": "ns",
            "range": "± 1044.3279095791925"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9966873.333333334,
            "unit": "ns",
            "range": "± 109091.87128724295"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23239433.333333332,
            "unit": "ns",
            "range": "± 195894.3872406276"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59284400,
            "unit": "ns",
            "range": "± 913902.5651410705"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 120199653.33333333,
            "unit": "ns",
            "range": "± 1341304.7825939949"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 237226413.33333334,
            "unit": "ns",
            "range": "± 3037850.2901762305"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3402736.4192708335,
            "unit": "ns",
            "range": "± 10865.94809705897"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1060592.734375,
            "unit": "ns",
            "range": "± 8839.822746021206"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 721832.6953125,
            "unit": "ns",
            "range": "± 12255.38167412392"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1909867.6432291667,
            "unit": "ns",
            "range": "± 29905.882957853275"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 614510.95703125,
            "unit": "ns",
            "range": "± 2149.591046533917"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 558769.55078125,
            "unit": "ns",
            "range": "± 8214.18209075014"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2144203.4482758623,
            "unit": "ns",
            "range": "± 41493.54926421542"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2180847.3684210526,
            "unit": "ns",
            "range": "± 45443.10690206251"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2586048.936170213,
            "unit": "ns",
            "range": "± 100528.20904632218"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2234375,
            "unit": "ns",
            "range": "± 59956.63015880729"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2810742.8571428573,
            "unit": "ns",
            "range": "± 66387.95501767298"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 166533.87096774194,
            "unit": "ns",
            "range": "± 7296.573270465696"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 154617.80821917808,
            "unit": "ns",
            "range": "± 7699.843837986324"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 143850.76923076922,
            "unit": "ns",
            "range": "± 6705.108199092574"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2551945,
            "unit": "ns",
            "range": "± 90682.03381271429"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2463707.1428571427,
            "unit": "ns",
            "range": "± 80413.63392490358"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 8869.89247311828,
            "unit": "ns",
            "range": "± 746.4095137559132"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 47564.10256410256,
            "unit": "ns",
            "range": "± 2437.90277972071"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43540.74074074074,
            "unit": "ns",
            "range": "± 1208.068789196294"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 44981.05263157895,
            "unit": "ns",
            "range": "± 7914.036745149938"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1984.5360824742268,
            "unit": "ns",
            "range": "± 402.94235686426225"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 8933.695652173914,
            "unit": "ns",
            "range": "± 992.5300309806606"
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
          "id": "3314da954e8e679f8d359f1196e4c44e56fefcf1",
          "message": "Merge pull request #3942 from greymistcube/refactor/remove-stop\n\n♻️ 🧹 Removed `Stop` from `GetBlockHashesMsg`",
          "timestamp": "2024-09-03T15:05:41+09:00",
          "tree_id": "8eb75235556fc0cb1ff5914b828d3b595eb9718d",
          "url": "https://github.com/planetarium/libplanet/commit/3314da954e8e679f8d359f1196e4c44e56fefcf1"
        },
        "date": 1725344119472,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1035991.9191919192,
            "unit": "ns",
            "range": "± 110891.3429174443"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1794279.4117647058,
            "unit": "ns",
            "range": "± 55689.41893629054"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1579132.2916666667,
            "unit": "ns",
            "range": "± 135664.60151478965"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6682596.875,
            "unit": "ns",
            "range": "± 191236.7954275621"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 30259.090909090908,
            "unit": "ns",
            "range": "± 673.0591786824232"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9697006.666666666,
            "unit": "ns",
            "range": "± 74129.8230583796"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23486821.42857143,
            "unit": "ns",
            "range": "± 253985.08187133117"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59685623.07692308,
            "unit": "ns",
            "range": "± 200292.0124628295"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 118504821.42857143,
            "unit": "ns",
            "range": "± 1301180.2335859262"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 236800685.7142857,
            "unit": "ns",
            "range": "± 1434771.5393625686"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3447540.7552083335,
            "unit": "ns",
            "range": "± 10248.842370636356"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1059641.6015625,
            "unit": "ns",
            "range": "± 4607.69926291543"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 741617.63671875,
            "unit": "ns",
            "range": "± 2187.0841979660377"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1955075.2213541667,
            "unit": "ns",
            "range": "± 4175.846090392897"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 618302.1158854166,
            "unit": "ns",
            "range": "± 1627.4464230664946"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 572168.10546875,
            "unit": "ns",
            "range": "± 2595.7434803994242"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2153412.5,
            "unit": "ns",
            "range": "± 39817.01269558026"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2227115.3846153845,
            "unit": "ns",
            "range": "± 26615.52949419587"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2682474.358974359,
            "unit": "ns",
            "range": "± 93236.58847522966"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2263450,
            "unit": "ns",
            "range": "± 75570.41560217671"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2945746.6666666665,
            "unit": "ns",
            "range": "± 27956.72335865527"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 181994.91525423728,
            "unit": "ns",
            "range": "± 7952.844291213085"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 173652.05479452055,
            "unit": "ns",
            "range": "± 8646.966545639016"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 144360.46511627908,
            "unit": "ns",
            "range": "± 4835.343073211964"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2763837.5,
            "unit": "ns",
            "range": "± 52489.502125028135"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2488922.222222222,
            "unit": "ns",
            "range": "± 53149.9826302396"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11356.382978723404,
            "unit": "ns",
            "range": "± 1548.4684428224034"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 53566.30434782609,
            "unit": "ns",
            "range": "± 4567.1372035471895"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45213.793103448275,
            "unit": "ns",
            "range": "± 1987.7209267798687"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 60061.61616161616,
            "unit": "ns",
            "range": "± 14813.677540007679"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2526.8041237113403,
            "unit": "ns",
            "range": "± 445.7006338146916"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10082.954545454546,
            "unit": "ns",
            "range": "± 892.3972094977278"
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
          "id": "19cacb7de06545e7fbe187119e7bef911e4b9f60",
          "message": "Merge pull request #3943 from greymistcube/refactor/remove-block-completion\n\n♻️ 🧹 Remove `BlockCompletion`",
          "timestamp": "2024-09-04T22:00:35+09:00",
          "tree_id": "3460bf5114ada3b409197681ed75fbf5abe7dd91",
          "url": "https://github.com/planetarium/libplanet/commit/19cacb7de06545e7fbe187119e7bef911e4b9f60"
        },
        "date": 1725455461242,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1012815.4639175257,
            "unit": "ns",
            "range": "± 93725.58831082162"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1852071.5909090908,
            "unit": "ns",
            "range": "± 101111.96928688561"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1584002.2222222222,
            "unit": "ns",
            "range": "± 101950.19270584559"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6809427.777777778,
            "unit": "ns",
            "range": "± 212600.342172969"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 31176,
            "unit": "ns",
            "range": "± 1258.8965041508636"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9903313.333333334,
            "unit": "ns",
            "range": "± 71535.3146221867"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24312446.666666668,
            "unit": "ns",
            "range": "± 432355.4719154577"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 62360935.71428572,
            "unit": "ns",
            "range": "± 730046.8568809527"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 123556600,
            "unit": "ns",
            "range": "± 1544270.193790119"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 252933780,
            "unit": "ns",
            "range": "± 3727349.65591217"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3298874.639423077,
            "unit": "ns",
            "range": "± 7954.401740936387"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1069833.6979166667,
            "unit": "ns",
            "range": "± 3425.4092602387864"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 749387.3111979166,
            "unit": "ns",
            "range": "± 1378.2741743768765"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1947551.9949776786,
            "unit": "ns",
            "range": "± 7353.795272776402"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 624967.8450520834,
            "unit": "ns",
            "range": "± 599.027213447889"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 556267.9338727678,
            "unit": "ns",
            "range": "± 1245.3200989492846"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2266916.6666666665,
            "unit": "ns",
            "range": "± 66559.82573819473"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2330503.5714285714,
            "unit": "ns",
            "range": "± 61716.61930050606"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2780888.888888889,
            "unit": "ns",
            "range": "± 61804.61977587942"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2326816.129032258,
            "unit": "ns",
            "range": "± 70287.60012393932"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3016150,
            "unit": "ns",
            "range": "± 56091.591764422825"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 188793.02325581395,
            "unit": "ns",
            "range": "± 6240.245544193533"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 172456.25,
            "unit": "ns",
            "range": "± 7824.6228166105375"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 152265.5172413793,
            "unit": "ns",
            "range": "± 4290.211105534232"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2883619.0476190476,
            "unit": "ns",
            "range": "± 66015.66949632199"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2629685.714285714,
            "unit": "ns",
            "range": "± 43409.58520778663"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13387.368421052632,
            "unit": "ns",
            "range": "± 1298.1363159302039"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59551.54639175258,
            "unit": "ns",
            "range": "± 7565.46585647107"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 49271.57894736842,
            "unit": "ns",
            "range": "± 4316.289362795531"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 66706.18556701031,
            "unit": "ns",
            "range": "± 13991.662803500976"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3428.865979381443,
            "unit": "ns",
            "range": "± 523.6010653172647"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11879.347826086956,
            "unit": "ns",
            "range": "± 1536.982775932022"
          }
        ]
      }
    ]
  }
}