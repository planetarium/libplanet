window.BENCHMARK_DATA = {
  "lastUpdate": 1735609926909,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "committer": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "distinct": true,
          "id": "439d3da8dea7c8e5aad988c422f93311b3673540",
          "message": "test: add unit test for newly added feature",
          "timestamp": "2024-12-30T20:38:47+09:00",
          "tree_id": "d52a60d4d69dbf788cec93bacb199868f821ed8a",
          "url": "https://github.com/planetarium/libplanet/commit/439d3da8dea7c8e5aad988c422f93311b3673540"
        },
        "date": 1735559569260,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1020833.3333333334,
            "unit": "ns",
            "range": "± 89941.15386974024"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1826639.1304347827,
            "unit": "ns",
            "range": "± 68781.19083412547"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1610706.3829787234,
            "unit": "ns",
            "range": "± 114999.01524450802"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6789576.19047619,
            "unit": "ns",
            "range": "± 159134.87017232238"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 31202.272727272728,
            "unit": "ns",
            "range": "± 1178.3884613108398"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10056526.666666666,
            "unit": "ns",
            "range": "± 107829.58424335707"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25510576.666666668,
            "unit": "ns",
            "range": "± 435399.30682185566"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 61168100,
            "unit": "ns",
            "range": "± 774538.0383539228"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 126683093.33333333,
            "unit": "ns",
            "range": "± 1637595.4364628063"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 256602723.33333334,
            "unit": "ns",
            "range": "± 1853001.2063316815"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3381172.2395833335,
            "unit": "ns",
            "range": "± 7842.087076647832"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1061192.8385416667,
            "unit": "ns",
            "range": "± 1971.8389197904755"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 753679.7395833334,
            "unit": "ns",
            "range": "± 1446.3602045891053"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1931292.4348958333,
            "unit": "ns",
            "range": "± 4988.245129110352"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 621859.5284598215,
            "unit": "ns",
            "range": "± 726.3772502984503"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 562102.6041666666,
            "unit": "ns",
            "range": "± 1895.493489481302"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2188364.285714286,
            "unit": "ns",
            "range": "± 38268.67783575365"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2302403.125,
            "unit": "ns",
            "range": "± 69809.91465019666"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2746324,
            "unit": "ns",
            "range": "± 70861.59208861549"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2277295.238095238,
            "unit": "ns",
            "range": "± 52762.813383958935"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2904978.5714285714,
            "unit": "ns",
            "range": "± 39975.7845657637"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 182263.33333333334,
            "unit": "ns",
            "range": "± 8070.493792606322"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 176600,
            "unit": "ns",
            "range": "± 7640.470254787052"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 144795.83333333334,
            "unit": "ns",
            "range": "± 3318.7843723485457"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2771183.3333333335,
            "unit": "ns",
            "range": "± 56680.15785191187"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2532913.3333333335,
            "unit": "ns",
            "range": "± 30435.52592112116"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11383.720930232557,
            "unit": "ns",
            "range": "± 1137.8628538382852"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 56440.625,
            "unit": "ns",
            "range": "± 5699.336584199954"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 46234.09090909091,
            "unit": "ns",
            "range": "± 1732.3116940945786"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 57874.117647058825,
            "unit": "ns",
            "range": "± 8146.736900676953"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2928.125,
            "unit": "ns",
            "range": "± 672.888999213955"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10962.921348314607,
            "unit": "ns",
            "range": "± 1126.5778856253035"
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
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "distinct": true,
          "id": "557e951d598137f08497e64b315864f439cc67bc",
          "message": "test: add unit test for newly added feature",
          "timestamp": "2024-12-30T21:06:46+09:00",
          "tree_id": "38f1daf1f12dc4975098f9541c6ef39e88721186",
          "url": "https://github.com/planetarium/libplanet/commit/557e951d598137f08497e64b315864f439cc67bc"
        },
        "date": 1735560890797,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 978380.2083333334,
            "unit": "ns",
            "range": "± 82556.77423802193"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1756017.441860465,
            "unit": "ns",
            "range": "± 63742.04234528205"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1517674.0740740742,
            "unit": "ns",
            "range": "± 75983.79231418003"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6708908.333333333,
            "unit": "ns",
            "range": "± 135429.86285758097"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 29884.615384615383,
            "unit": "ns",
            "range": "± 328.7505484055092"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9630660,
            "unit": "ns",
            "range": "± 41287.88822749008"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23721346.666666668,
            "unit": "ns",
            "range": "± 135633.72877331206"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58493540,
            "unit": "ns",
            "range": "± 395838.77273455664"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 117178346.15384616,
            "unit": "ns",
            "range": "± 238184.17109240143"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 231453000,
            "unit": "ns",
            "range": "± 1299641.3115053817"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3240235.9375,
            "unit": "ns",
            "range": "± 7070.259845588761"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1077605.4557291667,
            "unit": "ns",
            "range": "± 2060.3117400680144"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 741286.0807291666,
            "unit": "ns",
            "range": "± 1398.767114745043"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1947476.7708333333,
            "unit": "ns",
            "range": "± 3997.581245503073"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 624038.3649553572,
            "unit": "ns",
            "range": "± 1191.5691504586662"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 590890.0651041666,
            "unit": "ns",
            "range": "± 1218.006391474644"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2120600,
            "unit": "ns",
            "range": "± 23123.082041045545"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2228670,
            "unit": "ns",
            "range": "± 36193.393240834914"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2639834.6153846155,
            "unit": "ns",
            "range": "± 35363.34840278011"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2244008.695652174,
            "unit": "ns",
            "range": "± 45778.17972714113"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2879528.5714285714,
            "unit": "ns",
            "range": "± 31136.36085082788"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 173728.57142857142,
            "unit": "ns",
            "range": "± 7027.0054215722075"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 166234.375,
            "unit": "ns",
            "range": "± 7532.157909774448"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 143974.1935483871,
            "unit": "ns",
            "range": "± 4392.567035491926"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2666064.285714286,
            "unit": "ns",
            "range": "± 33618.87306816851"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2533368.75,
            "unit": "ns",
            "range": "± 41933.021494600966"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10971.42857142857,
            "unit": "ns",
            "range": "± 1818.5187129304857"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 51590.80459770115,
            "unit": "ns",
            "range": "± 2843.582418886759"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45103.22580645161,
            "unit": "ns",
            "range": "± 1161.7469233781057"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 51853.22580645161,
            "unit": "ns",
            "range": "± 8706.038029822641"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2409.278350515464,
            "unit": "ns",
            "range": "± 409.54305691089115"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10041.304347826086,
            "unit": "ns",
            "range": "± 1272.2008423506063"
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
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "distinct": true,
          "id": "a56650d5f57a9e1b6e340b7f43c429c71db7b70c",
          "message": "chore: apply suggestions from the code review",
          "timestamp": "2024-12-31T10:40:45+09:00",
          "tree_id": "85dde7ffac6607f294047e23d5fecedd543934c1",
          "url": "https://github.com/planetarium/libplanet/commit/a56650d5f57a9e1b6e340b7f43c429c71db7b70c"
        },
        "date": 1735609853821,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1049096.907216495,
            "unit": "ns",
            "range": "± 85940.33474549877"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1903400,
            "unit": "ns",
            "range": "± 73792.74737545276"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1640185.8695652173,
            "unit": "ns",
            "range": "± 103937.50508344815"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6911510.256410256,
            "unit": "ns",
            "range": "± 241357.17231704528"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 35575.757575757576,
            "unit": "ns",
            "range": "± 5359.867705287307"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10264972.222222222,
            "unit": "ns",
            "range": "± 215541.1542675935"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24491426.666666668,
            "unit": "ns",
            "range": "± 333814.90693981614"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 62581853.333333336,
            "unit": "ns",
            "range": "± 486914.32198322215"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 123940306.66666667,
            "unit": "ns",
            "range": "± 1348492.2127359593"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 244567886.66666666,
            "unit": "ns",
            "range": "± 2233136.712553081"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3368698.2421875,
            "unit": "ns",
            "range": "± 6606.64064676367"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1088501.7857142857,
            "unit": "ns",
            "range": "± 1345.5576649457307"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 750602.1419270834,
            "unit": "ns",
            "range": "± 1289.9958564984654"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1934508.9713541667,
            "unit": "ns",
            "range": "± 5547.922065737283"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 607811.1002604166,
            "unit": "ns",
            "range": "± 553.7210397078312"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 567102.1549479166,
            "unit": "ns",
            "range": "± 1257.9960651190324"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2257486.8421052634,
            "unit": "ns",
            "range": "± 70666.1858471972"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2280207.6923076925,
            "unit": "ns",
            "range": "± 33624.80387894383"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2807706.6666666665,
            "unit": "ns",
            "range": "± 73423.85186700917"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2305994.285714286,
            "unit": "ns",
            "range": "± 73507.93451713081"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2973360.5263157897,
            "unit": "ns",
            "range": "± 63974.299481526534"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 186291.7808219178,
            "unit": "ns",
            "range": "± 9108.920435861175"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 180510.86956521738,
            "unit": "ns",
            "range": "± 6877.022232231673"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 147240.38461538462,
            "unit": "ns",
            "range": "± 6039.259129194788"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2812357.1428571427,
            "unit": "ns",
            "range": "± 40450.077765176065"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2510970,
            "unit": "ns",
            "range": "± 57565.82593683056"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12958.510638297872,
            "unit": "ns",
            "range": "± 1587.0043176332842"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59197.84946236559,
            "unit": "ns",
            "range": "± 5106.580973406929"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 48390.425531914894,
            "unit": "ns",
            "range": "± 3511.8254649890296"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 65798.97959183673,
            "unit": "ns",
            "range": "± 13416.70365970579"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2949.4949494949497,
            "unit": "ns",
            "range": "± 820.3251890503902"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11746.236559139785,
            "unit": "ns",
            "range": "± 1571.5237094993086"
          }
        ]
      }
    ]
  }
}