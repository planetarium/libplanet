window.BENCHMARK_DATA = {
  "lastUpdate": 1698647201728,
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
          "id": "6d56d40c30e4db85f0457a8bf11671ba68e697bb",
          "message": "Merge pull request #3465 from OnedgeLee/prepare/4.0.0\n\n🔧 Prepare 4.0.0",
          "timestamp": "2023-10-30T15:01:50+09:00",
          "tree_id": "36a091534bd95b64bbd71255b59a5ba272bccca5",
          "url": "https://github.com/planetarium/libplanet/commit/6d56d40c30e4db85f0457a8bf11671ba68e697bb"
        },
        "date": 1698646974429,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1335126,
            "unit": "ns",
            "range": "± 129200.31399092471"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2573744.871794872,
            "unit": "ns",
            "range": "± 132862.13110759167"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2028271.4285714286,
            "unit": "ns",
            "range": "± 102953.13427546954"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8564761.764705881,
            "unit": "ns",
            "range": "± 269375.77309424983"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 55223.958333333336,
            "unit": "ns",
            "range": "± 5702.792386960262"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7460430,
            "unit": "ns",
            "range": "± 165879.40165896682"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21077485.714285713,
            "unit": "ns",
            "range": "± 235628.46196483157"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54960773.333333336,
            "unit": "ns",
            "range": "± 773149.7068731871"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 107168700,
            "unit": "ns",
            "range": "± 1059578.7167186197"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 210280068.42105263,
            "unit": "ns",
            "range": "± 4449256.246092352"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4559417.083333333,
            "unit": "ns",
            "range": "± 20821.749039297298"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1482293.3314732143,
            "unit": "ns",
            "range": "± 4546.474785923572"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1099919.5703125,
            "unit": "ns",
            "range": "± 3015.367738899387"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2711376.4322916665,
            "unit": "ns",
            "range": "± 11155.91221394059"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 826904.2838541666,
            "unit": "ns",
            "range": "± 2143.268355971131"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 784165.2799479166,
            "unit": "ns",
            "range": "± 2604.800726898558"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3214517.7419354836,
            "unit": "ns",
            "range": "± 141074.98241598337"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3504132.1428571427,
            "unit": "ns",
            "range": "± 150644.06949934896"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4218281.578947368,
            "unit": "ns",
            "range": "± 142155.2175184218"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4079085.1063829786,
            "unit": "ns",
            "range": "± 145933.27537033675"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9911762.162162162,
            "unit": "ns",
            "range": "± 258670.95609775855"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 266988.5057471264,
            "unit": "ns",
            "range": "± 14080.288260852032"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 256560,
            "unit": "ns",
            "range": "± 13409.27362117796"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 229037.75510204083,
            "unit": "ns",
            "range": "± 16304.483699979948"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4231527.777777778,
            "unit": "ns",
            "range": "± 90448.18995070868"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3833466.6666666665,
            "unit": "ns",
            "range": "± 78914.91322564935"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24992,
            "unit": "ns",
            "range": "± 3093.0903770837476"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 91529.59183673469,
            "unit": "ns",
            "range": "± 9446.116413405181"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 73462.1052631579,
            "unit": "ns",
            "range": "± 4318.7660508029085"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 94482.1052631579,
            "unit": "ns",
            "range": "± 12480.290665492723"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5287.628865979382,
            "unit": "ns",
            "range": "± 985.3359972574883"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23118.18181818182,
            "unit": "ns",
            "range": "± 3686.6655371665265"
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
          "id": "6805df44072ed56c11b9c5bcb8a55d96eddbf457",
          "message": "Add workflow planetarium/libplanet/main",
          "timestamp": "2023-10-30T15:07:14+09:00",
          "tree_id": "7ae5df3fe1f21eca0c8d593ce9aebf2fec13aae6",
          "url": "https://github.com/planetarium/libplanet/commit/6805df44072ed56c11b9c5bcb8a55d96eddbf457"
        },
        "date": 1698646997091,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1264426,
            "unit": "ns",
            "range": "± 99471.66249944776"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2347945.238095238,
            "unit": "ns",
            "range": "± 77853.18015147503"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1892193.9393939395,
            "unit": "ns",
            "range": "± 142990.66247392166"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8518056.98924731,
            "unit": "ns",
            "range": "± 765675.6635975962"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50408.42105263158,
            "unit": "ns",
            "range": "± 2939.5564565515997"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7356791.666666667,
            "unit": "ns",
            "range": "± 49877.53107422826"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20355028.57142857,
            "unit": "ns",
            "range": "± 186025.19030650507"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50491388.88888889,
            "unit": "ns",
            "range": "± 1014592.377082534"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101771121.05263157,
            "unit": "ns",
            "range": "± 2230947.995952231"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 199522914.2857143,
            "unit": "ns",
            "range": "± 4328319.841380223"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4573783.203125,
            "unit": "ns",
            "range": "± 15321.550650619725"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1470264.7526041667,
            "unit": "ns",
            "range": "± 5411.503591348833"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1090424.9479166667,
            "unit": "ns",
            "range": "± 4643.530225676956"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2628103.7760416665,
            "unit": "ns",
            "range": "± 8090.464262276094"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 838139.7916666666,
            "unit": "ns",
            "range": "± 2331.059343208901"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 767926.7903645834,
            "unit": "ns",
            "range": "± 3331.1963622594826"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3098776.923076923,
            "unit": "ns",
            "range": "± 107926.8013675996"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3259006.1224489794,
            "unit": "ns",
            "range": "± 129813.51914728049"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3945988.4615384615,
            "unit": "ns",
            "range": "± 105676.44326688167"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3966958.695652174,
            "unit": "ns",
            "range": "± 152344.7064698081"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9831668.292682927,
            "unit": "ns",
            "range": "± 351174.0625665742"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 248620.93023255814,
            "unit": "ns",
            "range": "± 9179.339071018723"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 239041.66666666666,
            "unit": "ns",
            "range": "± 7970.853153834914"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 206213.15789473685,
            "unit": "ns",
            "range": "± 7119.298897026747"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3993907.6923076925,
            "unit": "ns",
            "range": "± 51028.186027241536"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3731160.8695652173,
            "unit": "ns",
            "range": "± 93063.82335468118"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19305.263157894737,
            "unit": "ns",
            "range": "± 1854.5727512248384"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 79604.44444444444,
            "unit": "ns",
            "range": "± 5189.183025718691"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 67342.55319148937,
            "unit": "ns",
            "range": "± 2586.4819720373803"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 78540.32258064517,
            "unit": "ns",
            "range": "± 7542.071340964761"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4973.958333333333,
            "unit": "ns",
            "range": "± 639.4479184037408"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17606.451612903227,
            "unit": "ns",
            "range": "± 1123.1561171066603"
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
          "id": "f795413e96b97bbafadb36021d87a6c60f43a8a4",
          "message": "Add composite action netcore_test_base",
          "timestamp": "2023-10-30T15:07:18+09:00",
          "tree_id": "7248fb19f55fa82e2171fa9a271971459c665e42",
          "url": "https://github.com/planetarium/libplanet/commit/f795413e96b97bbafadb36021d87a6c60f43a8a4"
        },
        "date": 1698647049141,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1279997.8260869565,
            "unit": "ns",
            "range": "± 78138.805738603"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2464960.5263157897,
            "unit": "ns",
            "range": "± 105657.17757413516"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1956216.6666666667,
            "unit": "ns",
            "range": "± 122517.93309481093"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8762396.551724138,
            "unit": "ns",
            "range": "± 635588.9582310098"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 51941.666666666664,
            "unit": "ns",
            "range": "± 4054.33274844181"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7428146.666666667,
            "unit": "ns",
            "range": "± 53050.67478588839"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20826714.285714287,
            "unit": "ns",
            "range": "± 108501.35665328981"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52044394.11764706,
            "unit": "ns",
            "range": "± 1064879.810982552"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 104297385.71428572,
            "unit": "ns",
            "range": "± 1509706.7992760118"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 205741515.3846154,
            "unit": "ns",
            "range": "± 2168588.694230326"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4637883.872767857,
            "unit": "ns",
            "range": "± 13455.467659096324"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1481200.5078125,
            "unit": "ns",
            "range": "± 4450.429348141038"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1113574.8307291667,
            "unit": "ns",
            "range": "± 3436.177308579249"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2638265.4296875,
            "unit": "ns",
            "range": "± 4987.740135846945"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 847416.9010416666,
            "unit": "ns",
            "range": "± 3151.37587544582"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 767880.4752604166,
            "unit": "ns",
            "range": "± 1754.391925295311"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3214696.9696969697,
            "unit": "ns",
            "range": "± 149946.43963731435"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3329187.037037037,
            "unit": "ns",
            "range": "± 139664.73879527833"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4021075,
            "unit": "ns",
            "range": "± 110533.22485251345"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4011781.25,
            "unit": "ns",
            "range": "± 123244.86363045854"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10018007.5,
            "unit": "ns",
            "range": "± 342036.8254184156"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 250128,
            "unit": "ns",
            "range": "± 6575.112166343628"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 243514.63414634147,
            "unit": "ns",
            "range": "± 8786.710447477193"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 212748.71794871794,
            "unit": "ns",
            "range": "± 7423.429190385625"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4069443.3333333335,
            "unit": "ns",
            "range": "± 59719.44486712929"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3772463.6363636362,
            "unit": "ns",
            "range": "± 77128.02310478306"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20294.505494505494,
            "unit": "ns",
            "range": "± 1419.7310103101015"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 84617.58241758242,
            "unit": "ns",
            "range": "± 4652.755298544279"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 68673.58490566038,
            "unit": "ns",
            "range": "± 2860.0800784510197"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 82767.02127659574,
            "unit": "ns",
            "range": "± 10596.889260511429"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5453.6082474226805,
            "unit": "ns",
            "range": "± 669.7421543135871"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20685.106382978724,
            "unit": "ns",
            "range": "± 1663.84432731858"
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
          "id": "b1cf3d9c80e68ec7c295ef4e5e09d0d386111a12",
          "message": "Add composite action ulimit",
          "timestamp": "2023-10-30T15:07:21+09:00",
          "tree_id": "37e3af5bb831e4144ee928c604da5e75f4539f08",
          "url": "https://github.com/planetarium/libplanet/commit/b1cf3d9c80e68ec7c295ef4e5e09d0d386111a12"
        },
        "date": 1698647124334,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1583673.1182795698,
            "unit": "ns",
            "range": "± 150921.60370593282"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2984300,
            "unit": "ns",
            "range": "± 136317.82773625085"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2288943.1818181816,
            "unit": "ns",
            "range": "± 133940.24383468658"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10329920.481927712,
            "unit": "ns",
            "range": "± 581881.0159908094"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 59146.31578947369,
            "unit": "ns",
            "range": "± 5648.7771323274455"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9047371.232876712,
            "unit": "ns",
            "range": "± 446294.03688084765"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24742986.363636363,
            "unit": "ns",
            "range": "± 581548.973121377"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 61576545.23809524,
            "unit": "ns",
            "range": "± 1241240.4889771324"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 126700406.66666667,
            "unit": "ns",
            "range": "± 3747455.655271971"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 256666510.52631578,
            "unit": "ns",
            "range": "± 8743378.824644255"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5611559.583333333,
            "unit": "ns",
            "range": "± 98609.41836446157"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1835608.9564732143,
            "unit": "ns",
            "range": "± 29848.577761930042"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1359634.921875,
            "unit": "ns",
            "range": "± 23444.916397195306"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3319010.05859375,
            "unit": "ns",
            "range": "± 35829.44373471481"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1052346.1805555555,
            "unit": "ns",
            "range": "± 29456.341050683288"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 948419.2210477941,
            "unit": "ns",
            "range": "± 19119.29508622603"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3891954.5454545454,
            "unit": "ns",
            "range": "± 188306.69730204454"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4059769.565217391,
            "unit": "ns",
            "range": "± 154749.8323381827"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5068706.451612903,
            "unit": "ns",
            "range": "± 154800.60063510493"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4717607.608695652,
            "unit": "ns",
            "range": "± 264791.86030188104"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12076585.88235294,
            "unit": "ns",
            "range": "± 771849.9771194347"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 293560.4166666667,
            "unit": "ns",
            "range": "± 11560.106374820392"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 286064.93506493507,
            "unit": "ns",
            "range": "± 14627.846247858604"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 261886.2068965517,
            "unit": "ns",
            "range": "± 14349.776535119245"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4881240,
            "unit": "ns",
            "range": "± 127619.33630919729"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4344517.777777778,
            "unit": "ns",
            "range": "± 161600.55171047937"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23137.09677419355,
            "unit": "ns",
            "range": "± 2524.0678781634297"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 98021.875,
            "unit": "ns",
            "range": "± 6009.662450018129"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 88920.65217391304,
            "unit": "ns",
            "range": "± 6184.783490369123"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 100590.72164948453,
            "unit": "ns",
            "range": "± 12271.376607732209"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6488.421052631579,
            "unit": "ns",
            "range": "± 816.0443195482494"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22851.612903225807,
            "unit": "ns",
            "range": "± 2259.117416315775"
          }
        ]
      }
    ]
  }
}