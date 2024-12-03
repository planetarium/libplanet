window.BENCHMARK_DATA = {
  "lastUpdate": 1733191184172,
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
          "id": "2d3e294dfbcacf5b2472b2cd0fee4d0bb9ec6c18",
          "message": "timeout 3",
          "timestamp": "2024-11-28T17:50:09+09:00",
          "tree_id": "7be3901dd8475bfc75dbd4bbba88c66d252776b2",
          "url": "https://github.com/planetarium/libplanet/commit/2d3e294dfbcacf5b2472b2cd0fee4d0bb9ec6c18"
        },
        "date": 1732784331230,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 11077076.5,
            "unit": "ns",
            "range": "± 170690.716212101"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 28070877.466666665,
            "unit": "ns",
            "range": "± 196964.17292814108"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 70795201.46666667,
            "unit": "ns",
            "range": "± 661346.3497594311"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 140991935.73333332,
            "unit": "ns",
            "range": "± 969197.0602140182"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 292596165.8666667,
            "unit": "ns",
            "range": "± 1719799.7311193312"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 114885.42708333333,
            "unit": "ns",
            "range": "± 12549.956360372684"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 192678.21153846153,
            "unit": "ns",
            "range": "± 7448.71088290579"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 169491.62962962964,
            "unit": "ns",
            "range": "± 4737.171771849887"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2959304.8333333335,
            "unit": "ns",
            "range": "± 36751.25806333839"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2870705,
            "unit": "ns",
            "range": "± 46872.54971729189"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13716.994382022473,
            "unit": "ns",
            "range": "± 1474.4401797692844"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 64332.583333333336,
            "unit": "ns",
            "range": "± 10344.156202942664"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50229.5,
            "unit": "ns",
            "range": "± 1124.682575101456"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 64249.155913978495,
            "unit": "ns",
            "range": "± 10732.463729563908"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2775.3125,
            "unit": "ns",
            "range": "± 441.622852014083"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16873.188235294117,
            "unit": "ns",
            "range": "± 2464.4732002239034"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3767957.6766826925,
            "unit": "ns",
            "range": "± 4491.242938520793"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1208158.8318917411,
            "unit": "ns",
            "range": "± 2765.534394617859"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 766685.1790364584,
            "unit": "ns",
            "range": "± 1560.2097256970198"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1976104.1616586538,
            "unit": "ns",
            "range": "± 1618.6719632904249"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 628334.2580217634,
            "unit": "ns",
            "range": "± 506.34841954145065"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 572962.0498046875,
            "unit": "ns",
            "range": "± 1038.070403785028"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2503584.2,
            "unit": "ns",
            "range": "± 52819.82438500868"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2692945.033333333,
            "unit": "ns",
            "range": "± 45183.51984465553"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3121245.066666667,
            "unit": "ns",
            "range": "± 93029.20799328279"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2613963,
            "unit": "ns",
            "range": "± 39124.71486256383"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3295154.769230769,
            "unit": "ns",
            "range": "± 32141.79914108171"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1082216.9393939395,
            "unit": "ns",
            "range": "± 166397.20975945177"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2044041.2162162163,
            "unit": "ns",
            "range": "± 68914.61179852093"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1590099.4305555555,
            "unit": "ns",
            "range": "± 78424.3370841839"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7962234.926829268,
            "unit": "ns",
            "range": "± 286949.4215417928"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 30538.557142857142,
            "unit": "ns",
            "range": "± 1011.4748679049625"
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
            "email": "han0210@netsgo.com",
            "name": "s2quake",
            "username": "s2quake"
          },
          "distinct": true,
          "id": "c2a71cdfe40b93d4b13f98e1cb84202865647682",
          "message": "chore: increase timeout to 5",
          "timestamp": "2024-11-29T10:56:45+09:00",
          "tree_id": "7e98b53e32f9bf4ba868ba455b08a28621070e95",
          "url": "https://github.com/planetarium/libplanet/commit/c2a71cdfe40b93d4b13f98e1cb84202865647682"
        },
        "date": 1732845956400,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10818910.2,
            "unit": "ns",
            "range": "± 75829.6369428584"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27534070.966666665,
            "unit": "ns",
            "range": "± 109294.19572934242"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 70689232,
            "unit": "ns",
            "range": "± 366491.5460818006"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 142322509.13333333,
            "unit": "ns",
            "range": "± 779810.9382441789"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 296905108.64285713,
            "unit": "ns",
            "range": "± 1152964.577712643"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 116885.59793814433,
            "unit": "ns",
            "range": "± 9542.057090258144"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 209111.6616161616,
            "unit": "ns",
            "range": "± 13825.602302049267"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 165750,
            "unit": "ns",
            "range": "± 4198.556863867683"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2940739.8,
            "unit": "ns",
            "range": "± 32968.20521177509"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2762649.785714286,
            "unit": "ns",
            "range": "± 26193.36065150442"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13508.037634408602,
            "unit": "ns",
            "range": "± 1125.1231001166416"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59178.201492537315,
            "unit": "ns",
            "range": "± 2824.1233931693255"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 60905.46153846154,
            "unit": "ns",
            "range": "± 975.307440022941"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 57572.0306122449,
            "unit": "ns",
            "range": "± 10586.454240717514"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2780.821052631579,
            "unit": "ns",
            "range": "± 356.6556530762138"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12269.544943820225,
            "unit": "ns",
            "range": "± 779.613874563328"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3676116.396033654,
            "unit": "ns",
            "range": "± 9999.814195408173"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1219533.0164620536,
            "unit": "ns",
            "range": "± 1996.246069405523"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 752185.3115931919,
            "unit": "ns",
            "range": "± 847.6360604411393"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1942973.0578962055,
            "unit": "ns",
            "range": "± 2904.095933854341"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 623529.7183314732,
            "unit": "ns",
            "range": "± 778.6655473256321"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 573608.3905436198,
            "unit": "ns",
            "range": "± 361.5666265523495"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2450742.0833333335,
            "unit": "ns",
            "range": "± 63700.70088066855"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2581290.4166666665,
            "unit": "ns",
            "range": "± 51574.76115387942"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3090197.2,
            "unit": "ns",
            "range": "± 44394.8957783598"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2603749.8518518517,
            "unit": "ns",
            "range": "± 64985.992912498936"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3390729.8684210526,
            "unit": "ns",
            "range": "± 74754.20569083613"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 993137.3552631579,
            "unit": "ns",
            "range": "± 43751.105504875784"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1936939.8604651163,
            "unit": "ns",
            "range": "± 71188.91544454475"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1573446.1363636365,
            "unit": "ns",
            "range": "± 76493.14368207144"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7615649.983870967,
            "unit": "ns",
            "range": "± 231597.68462643304"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 42763.04651162791,
            "unit": "ns",
            "range": "± 1561.6332560356766"
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
          "id": "f3c6dbf3e15df378ce7c300b117fe4b2ca82c20a",
          "message": "fix: Change graphtype of validatorPower",
          "timestamp": "2024-12-03T10:51:01+09:00",
          "tree_id": "c24f7aa510eb278b0a4d5d6104653f8dc35b36da",
          "url": "https://github.com/planetarium/libplanet/commit/f3c6dbf3e15df378ce7c300b117fe4b2ca82c20a"
        },
        "date": 1733191157586,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10687483.714285715,
            "unit": "ns",
            "range": "± 75288.70122241612"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 29320639.785714287,
            "unit": "ns",
            "range": "± 156279.47752672923"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 71438812.86666666,
            "unit": "ns",
            "range": "± 397462.97753355355"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 144560112.6,
            "unit": "ns",
            "range": "± 790291.441747175"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 297059973.53846157,
            "unit": "ns",
            "range": "± 1769069.0214381884"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 117580.95614035087,
            "unit": "ns",
            "range": "± 5120.1551457736105"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 192362.25,
            "unit": "ns",
            "range": "± 7419.246753360809"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 165865.26923076922,
            "unit": "ns",
            "range": "± 2551.100682510922"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2922845.923076923,
            "unit": "ns",
            "range": "± 41697.98963071949"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2822129,
            "unit": "ns",
            "range": "± 33608.40797011537"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14434.150537634408,
            "unit": "ns",
            "range": "± 1447.7451429140524"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61790.779569892475,
            "unit": "ns",
            "range": "± 4175.632389922959"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50457.08,
            "unit": "ns",
            "range": "± 1327.4960740682689"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 54479.145833333336,
            "unit": "ns",
            "range": "± 9866.319445978208"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3022.59793814433,
            "unit": "ns",
            "range": "± 766.5668412337166"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12712.433333333332,
            "unit": "ns",
            "range": "± 1242.698990915528"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3731715.0887276786,
            "unit": "ns",
            "range": "± 6106.068716275105"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1216422.80625,
            "unit": "ns",
            "range": "± 2816.830590620487"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 764354.0260881697,
            "unit": "ns",
            "range": "± 1485.482053137498"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1960587.4715401786,
            "unit": "ns",
            "range": "± 2496.9818110385636"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 639399.559765625,
            "unit": "ns",
            "range": "± 891.0850249115374"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 580438.1770582933,
            "unit": "ns",
            "range": "± 573.7028350375513"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2414669.103448276,
            "unit": "ns",
            "range": "± 70422.78742421418"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2541458.1304347827,
            "unit": "ns",
            "range": "± 62765.11357311361"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2995768.533333333,
            "unit": "ns",
            "range": "± 34760.674384931575"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2735744.566666667,
            "unit": "ns",
            "range": "± 41157.621029172136"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3260629.5,
            "unit": "ns",
            "range": "± 46487.05279353135"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1022842.9,
            "unit": "ns",
            "range": "± 90750.1635482261"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1936099.9571428571,
            "unit": "ns",
            "range": "± 63065.07640354425"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1557147.196969697,
            "unit": "ns",
            "range": "± 68926.58678332382"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7808760.5,
            "unit": "ns",
            "range": "± 233664.6878556742"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 30671.346153846152,
            "unit": "ns",
            "range": "± 831.5674689311838"
          }
        ]
      }
    ]
  }
}