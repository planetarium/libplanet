window.BENCHMARK_DATA = {
  "lastUpdate": 1721011844305,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
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
          "id": "7dccf1d6f78638504d5ef461ae43954c29cc7d36",
          "message": "Prepare 5.2.0",
          "timestamp": "2024-07-11T13:43:50+09:00",
          "tree_id": "5357d8d956b14e1ac4fcbfb0faeeebf54662bcf0",
          "url": "https://github.com/planetarium/libplanet/commit/7dccf1d6f78638504d5ef461ae43954c29cc7d36"
        },
        "date": 1720673701494,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1058713.4020618557,
            "unit": "ns",
            "range": "± 112769.35036176161"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1830202.0833333333,
            "unit": "ns",
            "range": "± 68046.78143492521"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1651598.969072165,
            "unit": "ns",
            "range": "± 134072.0456934484"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7514385.714285715,
            "unit": "ns",
            "range": "± 420201.3743621895"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33684.69387755102,
            "unit": "ns",
            "range": "± 4613.166992331558"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10154235.714285715,
            "unit": "ns",
            "range": "± 87061.55962785853"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23954280,
            "unit": "ns",
            "range": "± 181359.63954844765"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59884093.333333336,
            "unit": "ns",
            "range": "± 581567.8985868001"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 118263657.14285715,
            "unit": "ns",
            "range": "± 1152798.6946252456"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 243225973.33333334,
            "unit": "ns",
            "range": "± 2977304.483797063"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3357051.8229166665,
            "unit": "ns",
            "range": "± 4693.808848961689"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1074922.9427083333,
            "unit": "ns",
            "range": "± 2039.2032399638172"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 739157.3102678572,
            "unit": "ns",
            "range": "± 1133.8805047753597"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1942007.212611607,
            "unit": "ns",
            "range": "± 2732.6774869790197"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 624050.29296875,
            "unit": "ns",
            "range": "± 1087.3719539331858"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 552027.48046875,
            "unit": "ns",
            "range": "± 765.3360692903052"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2212921.7391304346,
            "unit": "ns",
            "range": "± 52497.35020604494"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2302946.6666666665,
            "unit": "ns",
            "range": "± 37517.3458295658"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2785771.794871795,
            "unit": "ns",
            "range": "± 90605.1263471216"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2298208.5714285714,
            "unit": "ns",
            "range": "± 72160.63930943391"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3043212.5,
            "unit": "ns",
            "range": "± 57204.80020650948"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 185198.11320754717,
            "unit": "ns",
            "range": "± 7502.960712177297"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 174360,
            "unit": "ns",
            "range": "± 7853.299869518527"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 146658.82352941178,
            "unit": "ns",
            "range": "± 2813.3740471916926"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2796440,
            "unit": "ns",
            "range": "± 31307.570969335837"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2552750,
            "unit": "ns",
            "range": "± 31001.581845497447"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12068.131868131868,
            "unit": "ns",
            "range": "± 1451.5033678438463"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 56167.36842105263,
            "unit": "ns",
            "range": "± 4991.747276601676"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 47994.565217391304,
            "unit": "ns",
            "range": "± 2797.540683318266"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 58130,
            "unit": "ns",
            "range": "± 11213.639868531698"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2919.148936170213,
            "unit": "ns",
            "range": "± 618.5791203371933"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11004.255319148937,
            "unit": "ns",
            "range": "± 1487.12502411095"
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
          "id": "6ae55d917b690c6c7ba4c39ed274b6566b4cb4e3",
          "message": "Prepare 5.2.0",
          "timestamp": "2024-07-11T19:42:14+09:00",
          "tree_id": "87ce8f5e57fddf39bbd19fb45afdcd27722cb680",
          "url": "https://github.com/planetarium/libplanet/commit/6ae55d917b690c6c7ba4c39ed274b6566b4cb4e3"
        },
        "date": 1720695091477,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1005851.724137931,
            "unit": "ns",
            "range": "± 61073.12213234871"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1824623.4042553192,
            "unit": "ns",
            "range": "± 69838.49135767204"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1644346.2365591398,
            "unit": "ns",
            "range": "± 132979.62949520713"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6911806.25,
            "unit": "ns",
            "range": "± 210414.31010071843"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 31025.454545454544,
            "unit": "ns",
            "range": "± 1240.104264107896"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9825442.857142856,
            "unit": "ns",
            "range": "± 105733.36358890781"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24142363.333333332,
            "unit": "ns",
            "range": "± 264850.1998884509"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 61801193.333333336,
            "unit": "ns",
            "range": "± 905390.2098516629"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 121599294.73684211,
            "unit": "ns",
            "range": "± 2542005.688968563"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 244809126.66666666,
            "unit": "ns",
            "range": "± 2574255.5407803035"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3389051.640625,
            "unit": "ns",
            "range": "± 9196.603758503352"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1093648.6458333333,
            "unit": "ns",
            "range": "± 3775.500967853075"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 744919.7721354166,
            "unit": "ns",
            "range": "± 1739.1833831159904"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1960092.9129464286,
            "unit": "ns",
            "range": "± 4889.443545127745"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 623133.3147321428,
            "unit": "ns",
            "range": "± 1353.3104868088449"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 582651.2555803572,
            "unit": "ns",
            "range": "± 737.8007863363864"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2234183.7209302327,
            "unit": "ns",
            "range": "± 82008.95691567146"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2364431.8181818184,
            "unit": "ns",
            "range": "± 57106.520237882236"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2806506.6666666665,
            "unit": "ns",
            "range": "± 50597.97379718828"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2394521.4285714286,
            "unit": "ns",
            "range": "± 34802.52374958833"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3013128.5714285714,
            "unit": "ns",
            "range": "± 71278.32168939686"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 188679.74683544305,
            "unit": "ns",
            "range": "± 9762.255673384196"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 174226.92307692306,
            "unit": "ns",
            "range": "± 7142.721933648109"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 151950,
            "unit": "ns",
            "range": "± 3045.9713026341187"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2817036.6666666665,
            "unit": "ns",
            "range": "± 47639.85226477433"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2505165.789473684,
            "unit": "ns",
            "range": "± 53734.68012329855"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12577.52808988764,
            "unit": "ns",
            "range": "± 847.4229395092731"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 56937.77777777778,
            "unit": "ns",
            "range": "± 4319.711230927566"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 46628.333333333336,
            "unit": "ns",
            "range": "± 2084.0062190175813"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 66873.4693877551,
            "unit": "ns",
            "range": "± 15295.074006692064"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2980.851063829787,
            "unit": "ns",
            "range": "± 491.4377843217505"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12776.08695652174,
            "unit": "ns",
            "range": "± 1445.7493258634402"
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
          "id": "dd243fa138cb971e8a1c05ea116b2e4d18321f45",
          "message": "Prepare 5.2.0",
          "timestamp": "2024-07-15T11:05:07+09:00",
          "tree_id": "87ce8f5e57fddf39bbd19fb45afdcd27722cb680",
          "url": "https://github.com/planetarium/libplanet/commit/dd243fa138cb971e8a1c05ea116b2e4d18321f45"
        },
        "date": 1721009729166,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 991561.6161616162,
            "unit": "ns",
            "range": "± 83988.50833331453"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1782165.625,
            "unit": "ns",
            "range": "± 76238.62333812215"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1560140,
            "unit": "ns",
            "range": "± 83731.47016049638"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6761213.157894737,
            "unit": "ns",
            "range": "± 146851.70225823176"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 30840,
            "unit": "ns",
            "range": "± 557.801808120821"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9657107.692307692,
            "unit": "ns",
            "range": "± 55517.64676716857"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23383646.666666668,
            "unit": "ns",
            "range": "± 231451.32122162989"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58533000,
            "unit": "ns",
            "range": "± 432864.03088125633"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 117531260,
            "unit": "ns",
            "range": "± 1627394.2799983749"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 231093293.33333334,
            "unit": "ns",
            "range": "± 1236964.3657338065"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3332115.0390625,
            "unit": "ns",
            "range": "± 18011.034165912064"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1049235.853794643,
            "unit": "ns",
            "range": "± 2894.618922061304"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 737917.9361979166,
            "unit": "ns",
            "range": "± 2853.185058655608"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1929108.2161458333,
            "unit": "ns",
            "range": "± 6188.559312939824"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 609308.9973958334,
            "unit": "ns",
            "range": "± 1687.7620783615546"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 557506.9963727678,
            "unit": "ns",
            "range": "± 1369.3973965708678"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2198246.6666666665,
            "unit": "ns",
            "range": "± 37868.00131786102"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2265769.35483871,
            "unit": "ns",
            "range": "± 103101.07660106297"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2724271.951219512,
            "unit": "ns",
            "range": "± 98014.35229647523"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2233592.8571428573,
            "unit": "ns",
            "range": "± 19688.280945613475"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2972088.888888889,
            "unit": "ns",
            "range": "± 52233.749388335105"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 172796.7741935484,
            "unit": "ns",
            "range": "± 7510.451029697686"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 168995,
            "unit": "ns",
            "range": "± 8798.502461761334"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 144427.58620689655,
            "unit": "ns",
            "range": "± 4155.366285361285"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2684460,
            "unit": "ns",
            "range": "± 34630.350025045125"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2512886.6666666665,
            "unit": "ns",
            "range": "± 36925.03731822597"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10892.47311827957,
            "unit": "ns",
            "range": "± 1965.0885896138084"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52619.354838709674,
            "unit": "ns",
            "range": "± 5345.869150152012"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45132.692307692305,
            "unit": "ns",
            "range": "± 1855.0113528373229"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 53945.16129032258,
            "unit": "ns",
            "range": "± 8715.098294851301"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2667.3684210526317,
            "unit": "ns",
            "range": "± 468.68809781635645"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10237.362637362638,
            "unit": "ns",
            "range": "± 1050.5710988313135"
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
          "id": "577ef882acdd70bce006325a2e6214751dbd2f08",
          "message": "Prepare 5.2.0",
          "timestamp": "2024-07-15T11:35:19+09:00",
          "tree_id": "c9f25753ab85f923ab6000af2d4468c0f2a1c832",
          "url": "https://github.com/planetarium/libplanet/commit/577ef882acdd70bce006325a2e6214751dbd2f08"
        },
        "date": 1721011539032,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 979898.9795918367,
            "unit": "ns",
            "range": "± 87582.06195487533"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1757520,
            "unit": "ns",
            "range": "± 69924.96269690292"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1492886.7647058824,
            "unit": "ns",
            "range": "± 64414.4553731415"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6838861.70212766,
            "unit": "ns",
            "range": "± 261812.75714856875"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 30475,
            "unit": "ns",
            "range": "± 490.5778905196061"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9901169.23076923,
            "unit": "ns",
            "range": "± 85071.55208622312"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23912685.714285713,
            "unit": "ns",
            "range": "± 137878.30117196083"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58841707.692307696,
            "unit": "ns",
            "range": "± 253571.4543001586"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 117823142.85714285,
            "unit": "ns",
            "range": "± 1220970.7768910679"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 232730836.66666666,
            "unit": "ns",
            "range": "± 2029223.5481535671"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3266179.2131696427,
            "unit": "ns",
            "range": "± 8534.863417429975"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1060713.9927455357,
            "unit": "ns",
            "range": "± 2122.9919219775315"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 735697.890625,
            "unit": "ns",
            "range": "± 967.4858802505779"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1919546.953125,
            "unit": "ns",
            "range": "± 5693.5012247628665"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 626490.0540865385,
            "unit": "ns",
            "range": "± 1290.2004469443518"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 563820.6124441965,
            "unit": "ns",
            "range": "± 1302.6411294079749"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2131850,
            "unit": "ns",
            "range": "± 35330.76091264759"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2361686.6666666665,
            "unit": "ns",
            "range": "± 35549.05798765312"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2759696.153846154,
            "unit": "ns",
            "range": "± 73611.44737481653"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2246073.076923077,
            "unit": "ns",
            "range": "± 59218.04831429221"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2929528.5714285714,
            "unit": "ns",
            "range": "± 33104.808588003514"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 174151.28205128206,
            "unit": "ns",
            "range": "± 8940.332420527986"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 167117.64705882352,
            "unit": "ns",
            "range": "± 7965.109385021926"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 145992.85714285713,
            "unit": "ns",
            "range": "± 3285.052728430919"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2793000,
            "unit": "ns",
            "range": "± 40128.93505404085"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2536118.75,
            "unit": "ns",
            "range": "± 48649.36065013256"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10224.21052631579,
            "unit": "ns",
            "range": "± 1316.7267434472856"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 51397.916666666664,
            "unit": "ns",
            "range": "± 3674.57778932826"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44751.35135135135,
            "unit": "ns",
            "range": "± 1516.5057829727489"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 52197.9381443299,
            "unit": "ns",
            "range": "± 10178.459479269643"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2545.8333333333335,
            "unit": "ns",
            "range": "± 362.4236156667808"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9878.947368421053,
            "unit": "ns",
            "range": "± 939.9971408786424"
          }
        ]
      }
    ]
  }
}