window.BENCHMARK_DATA = {
  "lastUpdate": 1714479130079,
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
      }
    ]
  }
}