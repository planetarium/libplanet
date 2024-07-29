window.BENCHMARK_DATA = {
  "lastUpdate": 1722242806788,
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
          "id": "cf431ab333d8230dd3b95be212fba38c5c229356",
          "message": "fix: use cache instead of get block from store",
          "timestamp": "2024-07-29T15:32:01+09:00",
          "tree_id": "c5066b2e7de7929cfa68da54ed5d1b70584c49cd",
          "url": "https://github.com/planetarium/libplanet/commit/cf431ab333d8230dd3b95be212fba38c5c229356"
        },
        "date": 1722235407328,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1139640.8163265307,
            "unit": "ns",
            "range": "± 147718.65138274533"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1919044,
            "unit": "ns",
            "range": "± 76182.86046461781"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1741149.4736842106,
            "unit": "ns",
            "range": "± 168135.02797661992"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7093948.571428572,
            "unit": "ns",
            "range": "± 228883.84977773254"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 43149.4623655914,
            "unit": "ns",
            "range": "± 7805.915032231395"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10289540,
            "unit": "ns",
            "range": "± 155655.01598085428"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25033864.285714287,
            "unit": "ns",
            "range": "± 213997.7304234174"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 63150560,
            "unit": "ns",
            "range": "± 1023868.9388784093"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 127322819.04761904,
            "unit": "ns",
            "range": "± 2989528.9755443158"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 251839455,
            "unit": "ns",
            "range": "± 5435360.230784592"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3383534.7916666665,
            "unit": "ns",
            "range": "± 26970.365821222666"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1071997.2786458333,
            "unit": "ns",
            "range": "± 2193.7792200034837"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 745364.5833333334,
            "unit": "ns",
            "range": "± 3300.333881552038"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1952159.7377232143,
            "unit": "ns",
            "range": "± 13065.794905744693"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 622555.1106770834,
            "unit": "ns",
            "range": "± 2161.482650786377"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 564083.5561899039,
            "unit": "ns",
            "range": "± 1092.859271368058"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2214286.507936508,
            "unit": "ns",
            "range": "± 100468.06634623135"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2286392.4242424243,
            "unit": "ns",
            "range": "± 71958.8425347392"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2834072.4137931033,
            "unit": "ns",
            "range": "± 81488.97776716153"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2399045.1612903224,
            "unit": "ns",
            "range": "± 71572.95503521647"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3160461.111111111,
            "unit": "ns",
            "range": "± 66557.62774060924"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 194520.61855670103,
            "unit": "ns",
            "range": "± 12479.173801981793"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 189597.8494623656,
            "unit": "ns",
            "range": "± 11809.115661903837"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 163209.18367346938,
            "unit": "ns",
            "range": "± 16734.18063093012"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2913660,
            "unit": "ns",
            "range": "± 52892.24625865037"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2614053.3333333335,
            "unit": "ns",
            "range": "± 48595.147709955374"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15381.052631578947,
            "unit": "ns",
            "range": "± 2564.458166687421"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 71345.91836734694,
            "unit": "ns",
            "range": "± 12795.33716912602"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 66199,
            "unit": "ns",
            "range": "± 13561.856008077892"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 82437.75510204081,
            "unit": "ns",
            "range": "± 16200.995993985636"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5085.858585858586,
            "unit": "ns",
            "range": "± 1391.1535443219818"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14673.19587628866,
            "unit": "ns",
            "range": "± 2963.933038208323"
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
          "id": "df4ecc35dea4d4c0678de4a325f9fc46056b8015",
          "message": "fix: use cache instead of get block from store",
          "timestamp": "2024-07-29T15:34:25+09:00",
          "tree_id": "57e53015f2883ae6f46880f5f7cda7033a1ce87f",
          "url": "https://github.com/planetarium/libplanet/commit/df4ecc35dea4d4c0678de4a325f9fc46056b8015"
        },
        "date": 1722235524205,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1000063.0952380953,
            "unit": "ns",
            "range": "± 48348.12459392667"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1819287.878787879,
            "unit": "ns",
            "range": "± 54195.72606289954"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1650713.1313131314,
            "unit": "ns",
            "range": "± 178135.77351391537"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6712621.052631579,
            "unit": "ns",
            "range": "± 135506.41878584106"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 37292.78350515464,
            "unit": "ns",
            "range": "± 4740.829907627821"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10052053.333333334,
            "unit": "ns",
            "range": "± 103344.13292259899"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24084053.333333332,
            "unit": "ns",
            "range": "± 399542.5685646501"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 60648386.666666664,
            "unit": "ns",
            "range": "± 1092659.3998567157"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 120941880,
            "unit": "ns",
            "range": "± 1727785.6076492823"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 251821873.33333334,
            "unit": "ns",
            "range": "± 3022333.7984475004"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3332107.8125,
            "unit": "ns",
            "range": "± 10245.669564933762"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1070815.2278645833,
            "unit": "ns",
            "range": "± 1737.9238758254905"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 752656.19140625,
            "unit": "ns",
            "range": "± 1253.453878496851"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1934341.1979166667,
            "unit": "ns",
            "range": "± 3376.2668338933745"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 629120.9681919643,
            "unit": "ns",
            "range": "± 509.8707082226638"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 557869.9846540178,
            "unit": "ns",
            "range": "± 473.78148781563516"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2202806.6666666665,
            "unit": "ns",
            "range": "± 64218.43077010457"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2302115.789473684,
            "unit": "ns",
            "range": "± 48440.504896417864"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2835660,
            "unit": "ns",
            "range": "± 80031.75921319374"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2355824.4444444445,
            "unit": "ns",
            "range": "± 80670.10304476203"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2987750,
            "unit": "ns",
            "range": "± 55907.495025264725"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 184184.61538461538,
            "unit": "ns",
            "range": "± 9509.763635107047"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 175146.15384615384,
            "unit": "ns",
            "range": "± 7677.566283560275"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 148168.9655172414,
            "unit": "ns",
            "range": "± 4245.258148660511"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2774050,
            "unit": "ns",
            "range": "± 20307.88971349275"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2632014.285714286,
            "unit": "ns",
            "range": "± 59474.77016108835"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11931.25,
            "unit": "ns",
            "range": "± 1632.2611052737468"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59360.82474226804,
            "unit": "ns",
            "range": "± 6913.160105628113"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 47414.13043478261,
            "unit": "ns",
            "range": "± 3542.7865583724383"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 56725.3164556962,
            "unit": "ns",
            "range": "± 6224.0943807200065"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3282.1052631578946,
            "unit": "ns",
            "range": "± 554.8584154018187"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11886.516853932584,
            "unit": "ns",
            "range": "± 1429.1757805268514"
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
          "id": "a4bbabe9171ee2fa07b5935eebe8f3ba06c10a61",
          "message": "fix: use cache instead of get block from store",
          "timestamp": "2024-07-29T17:30:17+09:00",
          "tree_id": "b08a50a006b15eea0ac00ff2e4541e50aae7dacf",
          "url": "https://github.com/planetarium/libplanet/commit/a4bbabe9171ee2fa07b5935eebe8f3ba06c10a61"
        },
        "date": 1722242498776,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 965705.4945054945,
            "unit": "ns",
            "range": "± 58796.283636595355"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1780166.6666666667,
            "unit": "ns",
            "range": "± 74050.58444471436"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1543942.105263158,
            "unit": "ns",
            "range": "± 118703.19465394615"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6793397.674418605,
            "unit": "ns",
            "range": "± 246384.4861075123"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 31092.77108433735,
            "unit": "ns",
            "range": "± 1874.6565950588365"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9731740,
            "unit": "ns",
            "range": "± 155267.62057814887"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23843785.714285713,
            "unit": "ns",
            "range": "± 197134.48692216675"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59530326.666666664,
            "unit": "ns",
            "range": "± 815944.6991648626"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 118991013.33333333,
            "unit": "ns",
            "range": "± 763438.8616803638"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 236788406.66666666,
            "unit": "ns",
            "range": "± 1771173.413090343"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3308853.455528846,
            "unit": "ns",
            "range": "± 15338.69147060563"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1052014.8177083333,
            "unit": "ns",
            "range": "± 2214.6046784191717"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 739294.8958333334,
            "unit": "ns",
            "range": "± 2280.181894045977"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1928225.0260416667,
            "unit": "ns",
            "range": "± 5173.976607908073"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 623010.5338541666,
            "unit": "ns",
            "range": "± 1983.3578259275025"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 570663.0013020834,
            "unit": "ns",
            "range": "± 1650.374731582038"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2137765.11627907,
            "unit": "ns",
            "range": "± 78493.6481619492"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2271313.3333333335,
            "unit": "ns",
            "range": "± 17529.683668674956"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2704695,
            "unit": "ns",
            "range": "± 61425.028971995824"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2278321.4285714286,
            "unit": "ns",
            "range": "± 29313.272881631063"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2975113.3333333335,
            "unit": "ns",
            "range": "± 44979.644073206946"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 176861.01694915254,
            "unit": "ns",
            "range": "± 7555.382117933124"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 168922.44897959183,
            "unit": "ns",
            "range": "± 6673.494377826683"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 141791.30434782608,
            "unit": "ns",
            "range": "± 3471.9542628269246"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2724006.6666666665,
            "unit": "ns",
            "range": "± 22673.252544625815"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2490600,
            "unit": "ns",
            "range": "± 18191.52733188356"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10742.631578947368,
            "unit": "ns",
            "range": "± 1420.2368775503132"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 51182.666666666664,
            "unit": "ns",
            "range": "± 2583.3862825146152"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45158.333333333336,
            "unit": "ns",
            "range": "± 1159.8038314888565"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 53029.78723404255,
            "unit": "ns",
            "range": "± 9958.794997574067"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2691.5789473684213,
            "unit": "ns",
            "range": "± 443.07032194717084"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10424.175824175823,
            "unit": "ns",
            "range": "± 1102.7582246692616"
          }
        ]
      }
    ]
  }
}