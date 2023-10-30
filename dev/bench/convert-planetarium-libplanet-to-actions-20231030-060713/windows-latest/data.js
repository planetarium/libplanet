window.BENCHMARK_DATA = {
  "lastUpdate": 1698646996134,
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
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "distinct": true,
          "id": "b4e68ad4036d61a9c11148a9aac5a071c309018d",
          "message": "Add composite action netcore_build_base",
          "timestamp": "2023-10-30T15:07:15+09:00",
          "tree_id": "bd3a28705c00cb6c075306eb8b84cc3bf2e74113",
          "url": "https://github.com/planetarium/libplanet/commit/b4e68ad4036d61a9c11148a9aac5a071c309018d"
        },
        "date": 1698646884763,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1277981,
            "unit": "ns",
            "range": "± 92698.96831282767"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2341413.793103448,
            "unit": "ns",
            "range": "± 102546.57212962017"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1900584,
            "unit": "ns",
            "range": "± 136795.12936571176"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7579500,
            "unit": "ns",
            "range": "± 267794.203418624"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 44786.458333333336,
            "unit": "ns",
            "range": "± 2871.662631983399"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7131807.692307692,
            "unit": "ns",
            "range": "± 56209.27357560704"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17952140,
            "unit": "ns",
            "range": "± 74971.93570168201"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46417746.666666664,
            "unit": "ns",
            "range": "± 268174.7134842898"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 93340780,
            "unit": "ns",
            "range": "± 317360.10236233"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 184894623.33333334,
            "unit": "ns",
            "range": "± 918024.779829473"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4472209.988839285,
            "unit": "ns",
            "range": "± 4968.20372265936"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1474558.6635044643,
            "unit": "ns",
            "range": "± 1786.5617488096511"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1068347.2935267857,
            "unit": "ns",
            "range": "± 948.5778847238196"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2549334.7265625,
            "unit": "ns",
            "range": "± 3815.4473356421618"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 824483.9618389423,
            "unit": "ns",
            "range": "± 1223.7548878642235"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 736161.8619791666,
            "unit": "ns",
            "range": "± 1076.5469689316342"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2977286.8421052634,
            "unit": "ns",
            "range": "± 101306.91439024136"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3201335.714285714,
            "unit": "ns",
            "range": "± 35981.71773260708"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3949884.210526316,
            "unit": "ns",
            "range": "± 71274.93141317791"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3742744,
            "unit": "ns",
            "range": "± 85995.79001323262"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8978492.857142856,
            "unit": "ns",
            "range": "± 174457.9816302406"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 246854.54545454544,
            "unit": "ns",
            "range": "± 6002.358843680681"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 231669.69696969696,
            "unit": "ns",
            "range": "± 6788.017238509566"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 209716.92307692306,
            "unit": "ns",
            "range": "± 9717.068893684731"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3835571.4285714286,
            "unit": "ns",
            "range": "± 38011.990589436755"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3540484.6153846155,
            "unit": "ns",
            "range": "± 26302.84668224608"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19629.166666666668,
            "unit": "ns",
            "range": "± 2466.274269405133"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 77540.21739130435,
            "unit": "ns",
            "range": "± 4642.329364687912"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 66207.44680851063,
            "unit": "ns",
            "range": "± 3856.6863977070416"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 74965.59139784946,
            "unit": "ns",
            "range": "± 7487.968532537581"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4273.469387755102,
            "unit": "ns",
            "range": "± 607.0973733287882"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16645.555555555555,
            "unit": "ns",
            "range": "± 1654.21906019913"
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
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "distinct": true,
          "id": "05d827971b5b36003e822abe7b362f39382a12cc",
          "message": "Add composite action macos_netcore_test_base",
          "timestamp": "2023-10-30T15:07:20+09:00",
          "tree_id": "f76f6128e625e75c530386bbfd01f3cbfe6cd056",
          "url": "https://github.com/planetarium/libplanet/commit/05d827971b5b36003e822abe7b362f39382a12cc"
        },
        "date": 1698646923274,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1327085.5670103093,
            "unit": "ns",
            "range": "± 119342.01812236501"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2384291.111111111,
            "unit": "ns",
            "range": "± 69268.74482839291"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1932713.6842105263,
            "unit": "ns",
            "range": "± 132886.62149536502"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7630870.27027027,
            "unit": "ns",
            "range": "± 249177.04645588945"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50934.343434343435,
            "unit": "ns",
            "range": "± 6894.587667535971"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7380796.666666667,
            "unit": "ns",
            "range": "± 28882.863596323157"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18309746.666666668,
            "unit": "ns",
            "range": "± 57750.26118267056"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46744573.333333336,
            "unit": "ns",
            "range": "± 193507.2810245749"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 94599578.57142857,
            "unit": "ns",
            "range": "± 357337.1865480976"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 187171180,
            "unit": "ns",
            "range": "± 445881.695071686"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4582705.970982143,
            "unit": "ns",
            "range": "± 16389.863241655967"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1456432.5358072917,
            "unit": "ns",
            "range": "± 1057.6189744064814"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1048279.7572544643,
            "unit": "ns",
            "range": "± 1185.4730144695634"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2575385.909598214,
            "unit": "ns",
            "range": "± 8945.779346644777"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 795202.1833147322,
            "unit": "ns",
            "range": "± 2448.678374509129"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 726576.4908854166,
            "unit": "ns",
            "range": "± 913.8890233133851"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3179986.6666666665,
            "unit": "ns",
            "range": "± 94318.78349268627"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3329687.5,
            "unit": "ns",
            "range": "± 62416.171782639794"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4035331.25,
            "unit": "ns",
            "range": "± 79268.24264272967"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3925125,
            "unit": "ns",
            "range": "± 89809.15364787361"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9205770,
            "unit": "ns",
            "range": "± 201752.40245765576"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 267712.962962963,
            "unit": "ns",
            "range": "± 11190.613423358669"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 250063.04347826086,
            "unit": "ns",
            "range": "± 9637.181669523561"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 246561.53846153847,
            "unit": "ns",
            "range": "± 4069.0986842990305"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3896556.6666666665,
            "unit": "ns",
            "range": "± 40676.55461366037"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3611850,
            "unit": "ns",
            "range": "± 28958.39854263088"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22255.208333333332,
            "unit": "ns",
            "range": "± 2203.388289916317"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 96927,
            "unit": "ns",
            "range": "± 9313.310286082413"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 77078,
            "unit": "ns",
            "range": "± 6931.083259600562"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 85460.63829787234,
            "unit": "ns",
            "range": "± 9099.181318309013"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4997.938144329897,
            "unit": "ns",
            "range": "± 772.1694791089284"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20809.782608695652,
            "unit": "ns",
            "range": "± 1691.4822021333175"
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
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "distinct": true,
          "id": "c83d28be25e905472c248ca0c16f2a7693cbbd40",
          "message": "Add composite action codecov",
          "timestamp": "2023-10-30T15:07:19+09:00",
          "tree_id": "a966d282738fbf8351070820904c8bd55e1b0b6d",
          "url": "https://github.com/planetarium/libplanet/commit/c83d28be25e905472c248ca0c16f2a7693cbbd40"
        },
        "date": 1698646926779,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1292491.9191919193,
            "unit": "ns",
            "range": "± 128201.50089602463"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2301118.1818181816,
            "unit": "ns",
            "range": "± 71616.40199068164"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1867453.5353535353,
            "unit": "ns",
            "range": "± 134761.10556873755"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7370610.714285715,
            "unit": "ns",
            "range": "± 197132.02821362906"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45124.7311827957,
            "unit": "ns",
            "range": "± 2616.446973265151"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6832700,
            "unit": "ns",
            "range": "± 17571.874380121466"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17939293.333333332,
            "unit": "ns",
            "range": "± 131804.77157342905"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 45626186.666666664,
            "unit": "ns",
            "range": "± 260940.15424084905"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 91482673.33333333,
            "unit": "ns",
            "range": "± 538996.6147079838"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 183355863.33333334,
            "unit": "ns",
            "range": "± 1379044.6863508017"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4440169.53125,
            "unit": "ns",
            "range": "± 4097.515129676294"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1467839.243861607,
            "unit": "ns",
            "range": "± 1248.4844673687114"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1066785.703125,
            "unit": "ns",
            "range": "± 1038.057064656092"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2533284.375,
            "unit": "ns",
            "range": "± 3768.1010662183016"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 829820.1397235577,
            "unit": "ns",
            "range": "± 1175.5683228956275"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 738683.2932692308,
            "unit": "ns",
            "range": "± 696.6634665513863"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2907555,
            "unit": "ns",
            "range": "± 65135.98306215762"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3067074.193548387,
            "unit": "ns",
            "range": "± 87536.60174556292"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3926373.3333333335,
            "unit": "ns",
            "range": "± 70921.45017720728"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3640552.272727273,
            "unit": "ns",
            "range": "± 136404.79171941473"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8904675,
            "unit": "ns",
            "range": "± 234759.52964525053"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 245734.4827586207,
            "unit": "ns",
            "range": "± 5826.066785335723"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 228865.8536585366,
            "unit": "ns",
            "range": "± 6474.666391255134"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 206131.3432835821,
            "unit": "ns",
            "range": "± 9699.89392249439"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3778714.285714286,
            "unit": "ns",
            "range": "± 33812.329502322464"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3502186.6666666665,
            "unit": "ns",
            "range": "± 37169.14747219155"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18194.791666666668,
            "unit": "ns",
            "range": "± 1803.2350923397687"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 78887.5,
            "unit": "ns",
            "range": "± 5358.166418507459"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 63695.833333333336,
            "unit": "ns",
            "range": "± 1661.450169781407"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 74971.91011235955,
            "unit": "ns",
            "range": "± 6115.349331507878"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4137.5,
            "unit": "ns",
            "range": "± 554.455636306079"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16815.957446808512,
            "unit": "ns",
            "range": "± 1334.2714327430795"
          }
        ]
      }
    ]
  }
}