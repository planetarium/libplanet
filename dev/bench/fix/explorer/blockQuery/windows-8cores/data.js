window.BENCHMARK_DATA = {
  "lastUpdate": 1722235283911,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Suho Lee",
            "username": "riemannulus"
          },
          "committer": {
            "email": "iam@suho.io",
            "name": "Suho Lee",
            "username": "riemannulus"
          },
          "distinct": true,
          "id": "2aa8b64e2c4a0c63e8dee2286e7688fe3f79f323",
          "message": "fix: use cache instead of get block from store",
          "timestamp": "2024-07-29T15:22:01+09:00",
          "tree_id": "b54d9c304404e61b9d2fd242c8811566e524801f",
          "url": "https://github.com/planetarium/libplanet/commit/2aa8b64e2c4a0c63e8dee2286e7688fe3f79f323"
        },
        "date": 1722234711124,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 949104.7619047619,
            "unit": "ns",
            "range": "± 46008.018957311804"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1748673.9130434783,
            "unit": "ns",
            "range": "± 66051.24335538484"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1511167.469879518,
            "unit": "ns",
            "range": "± 80136.56804881511"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6710043.75,
            "unit": "ns",
            "range": "± 193437.42997288847"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 29861.53846153846,
            "unit": "ns",
            "range": "± 250.12817227194253"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9529880,
            "unit": "ns",
            "range": "± 68298.48565566547"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23212128.57142857,
            "unit": "ns",
            "range": "± 254702.09273572144"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57815907.14285714,
            "unit": "ns",
            "range": "± 385991.6090444807"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 118049980,
            "unit": "ns",
            "range": "± 1834233.1679945788"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 241324935.7142857,
            "unit": "ns",
            "range": "± 2440424.1969243926"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3436542.606026786,
            "unit": "ns",
            "range": "± 6494.778943044336"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1052302.6925223214,
            "unit": "ns",
            "range": "± 2959.1652908034034"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 774450.6696428572,
            "unit": "ns",
            "range": "± 1643.9066028140471"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1941340.9635416667,
            "unit": "ns",
            "range": "± 5728.574415114852"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 629081.8294270834,
            "unit": "ns",
            "range": "± 2350.303775049163"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 570160.4622395834,
            "unit": "ns",
            "range": "± 1632.5243222429"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2124158.064516129,
            "unit": "ns",
            "range": "± 61512.198108416116"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2238307.8947368423,
            "unit": "ns",
            "range": "± 76755.87971695559"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2706838.4615384615,
            "unit": "ns",
            "range": "± 41960.96476610809"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2303527.659574468,
            "unit": "ns",
            "range": "± 88542.5412421663"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2972617.3913043477,
            "unit": "ns",
            "range": "± 74311.59613518002"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 173731.50684931508,
            "unit": "ns",
            "range": "± 8577.34219247186"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 165040.35087719298,
            "unit": "ns",
            "range": "± 6881.856571789819"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 147319.04761904763,
            "unit": "ns",
            "range": "± 3237.996146943206"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2731384.6153846155,
            "unit": "ns",
            "range": "± 19416.95333781994"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2500040,
            "unit": "ns",
            "range": "± 40855.84063858819"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10145.744680851063,
            "unit": "ns",
            "range": "± 968.9440981264001"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52440.86021505376,
            "unit": "ns",
            "range": "± 4290.7189161263295"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44295.65217391304,
            "unit": "ns",
            "range": "± 1351.5351800804776"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 50051.086956521736,
            "unit": "ns",
            "range": "± 6564.046168503508"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2402.0833333333335,
            "unit": "ns",
            "range": "± 436.2469524349391"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9865.625,
            "unit": "ns",
            "range": "± 1068.282253753291"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Suho Lee",
            "username": "riemannulus"
          },
          "committer": {
            "email": "iam@suho.io",
            "name": "Suho Lee",
            "username": "riemannulus"
          },
          "distinct": true,
          "id": "87e2a1721fdd873f1ba33ff2532c9cce9ba80886",
          "message": "fix: use cache instead of get block from store",
          "timestamp": "2024-07-29T15:27:15+09:00",
          "tree_id": "94e96c1daa692de7f03533f3adab42370d7ac916",
          "url": "https://github.com/planetarium/libplanet/commit/87e2a1721fdd873f1ba33ff2532c9cce9ba80886"
        },
        "date": 1722235040943,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 975770.1030927835,
            "unit": "ns",
            "range": "± 94560.06486724508"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1695010.810810811,
            "unit": "ns",
            "range": "± 56991.13860838262"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1567794.9494949495,
            "unit": "ns",
            "range": "± 171828.4439721945"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6836702.222222222,
            "unit": "ns",
            "range": "± 239602.5103155118"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 29820.454545454544,
            "unit": "ns",
            "range": "± 1116.8018177865831"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9426033.333333334,
            "unit": "ns",
            "range": "± 84106.859467726"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23761957.14285714,
            "unit": "ns",
            "range": "± 223078.61227098232"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58467203.333333336,
            "unit": "ns",
            "range": "± 251605.3652240425"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 118266140,
            "unit": "ns",
            "range": "± 684591.1248955206"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 230696106.66666666,
            "unit": "ns",
            "range": "± 1552535.2609138875"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3400747.34375,
            "unit": "ns",
            "range": "± 20256.093315069702"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1063509.0104166667,
            "unit": "ns",
            "range": "± 4517.622208440248"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 725487.7511160715,
            "unit": "ns",
            "range": "± 1372.0967164397807"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1925714.9348958333,
            "unit": "ns",
            "range": "± 4420.18425858034"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 630487.1940104166,
            "unit": "ns",
            "range": "± 1006.7113628437689"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 560042.0247395834,
            "unit": "ns",
            "range": "± 1235.5798103711022"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2116033.3333333335,
            "unit": "ns",
            "range": "± 34326.76312539047"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2237898.5074626864,
            "unit": "ns",
            "range": "± 105821.94664472004"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2740715,
            "unit": "ns",
            "range": "± 62479.73376686994"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2242606.6666666665,
            "unit": "ns",
            "range": "± 28327.56019615291"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2914835.714285714,
            "unit": "ns",
            "range": "± 25046.375667268392"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 174119.11764705883,
            "unit": "ns",
            "range": "± 8327.033073481101"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 169162.68656716417,
            "unit": "ns",
            "range": "± 8039.237786516215"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 152035.48387096773,
            "unit": "ns",
            "range": "± 4377.712369651282"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2791560,
            "unit": "ns",
            "range": "± 31278.285484616044"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2601228.5714285714,
            "unit": "ns",
            "range": "± 37723.49662746281"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11248.351648351649,
            "unit": "ns",
            "range": "± 1017.0067887201188"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62761.22448979592,
            "unit": "ns",
            "range": "± 8949.429892031323"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 46988.31168831169,
            "unit": "ns",
            "range": "± 2403.28580040207"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 46421.26436781609,
            "unit": "ns",
            "range": "± 5498.53908813201"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2525,
            "unit": "ns",
            "range": "± 392.02577788496995"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11677.173913043478,
            "unit": "ns",
            "range": "± 1323.590127858598"
          }
        ]
      }
    ]
  }
}