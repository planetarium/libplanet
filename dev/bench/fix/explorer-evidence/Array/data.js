window.BENCHMARK_DATA = {
  "lastUpdate": 1721196799046,
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
          "id": "ab3745fab1c78d8098cbecc1c3a3fdb39c63ac37",
          "message": "WIP",
          "timestamp": "2024-07-17T13:32:57+09:00",
          "tree_id": "020e5cff39f83f49989c56e5864a833fff8a016b",
          "url": "https://github.com/planetarium/libplanet/commit/ab3745fab1c78d8098cbecc1c3a3fdb39c63ac37"
        },
        "date": 1721191256657,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10826422.142857144,
            "unit": "ns",
            "range": "± 138534.17237127238"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26569696.785714287,
            "unit": "ns",
            "range": "± 178482.96161050847"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67279358.66666667,
            "unit": "ns",
            "range": "± 122748.68326070996"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 135124050.2142857,
            "unit": "ns",
            "range": "± 231048.3378673351"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 273024541.4285714,
            "unit": "ns",
            "range": "± 484188.9272345382"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 14250.40909090909,
            "unit": "ns",
            "range": "± 351.1810900499314"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 109564.34042553192,
            "unit": "ns",
            "range": "± 3949.6021609039576"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 108606.85185185185,
            "unit": "ns",
            "range": "± 4552.6189452508415"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 92655.14634146342,
            "unit": "ns",
            "range": "± 2981.3093730857217"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3006767.4105263157,
            "unit": "ns",
            "range": "± 172214.0868605797"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2596071.57,
            "unit": "ns",
            "range": "± 193728.53059086058"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 4921.076086956522,
            "unit": "ns",
            "range": "± 706.7619589894675"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 27572.369565217392,
            "unit": "ns",
            "range": "± 1992.1944977500925"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22463.048387096773,
            "unit": "ns",
            "range": "± 1423.9982559537518"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 29190.541666666668,
            "unit": "ns",
            "range": "± 5374.777359240428"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1124.8387096774193,
            "unit": "ns",
            "range": "± 218.63868796847882"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4834.566666666667,
            "unit": "ns",
            "range": "± 450.576635539818"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 700372.6195652174,
            "unit": "ns",
            "range": "± 56672.761369931846"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1273440.9594594594,
            "unit": "ns",
            "range": "± 37230.550133663826"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1084819.335443038,
            "unit": "ns",
            "range": "± 55967.326078207174"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9626483.7,
            "unit": "ns",
            "range": "± 1406997.1851377552"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2166552.224489796,
            "unit": "ns",
            "range": "± 77199.34720855948"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2277641.4615384615,
            "unit": "ns",
            "range": "± 61515.94251979289"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2547556.785714286,
            "unit": "ns",
            "range": "± 22618.66246871433"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2349572.3720930233,
            "unit": "ns",
            "range": "± 86819.92022298175"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3109168.2680412373,
            "unit": "ns",
            "range": "± 268858.4006632067"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3030966.891036184,
            "unit": "ns",
            "range": "± 65586.30135007204"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 919850.1213030134,
            "unit": "ns",
            "range": "± 4267.665617349056"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 614003.281640625,
            "unit": "ns",
            "range": "± 5324.447633816515"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1636749.458170573,
            "unit": "ns",
            "range": "± 7915.312783877732"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 464182.767578125,
            "unit": "ns",
            "range": "± 899.0690562312959"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 420720.57962472097,
            "unit": "ns",
            "range": "± 1085.1589772172815"
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
          "id": "e6cfa1de04ae4667f0f352a2ba916758192fb277",
          "message": "fix: Change evidence query name from evidence to committedEvidence",
          "timestamp": "2024-07-17T14:50:00+09:00",
          "tree_id": "58b18bcdc000d55ea8bef584b7d5983c89ea3940",
          "url": "https://github.com/planetarium/libplanet/commit/e6cfa1de04ae4667f0f352a2ba916758192fb277"
        },
        "date": 1721196180281,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10819910.76923077,
            "unit": "ns",
            "range": "± 163145.06136674495"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26763392,
            "unit": "ns",
            "range": "± 406325.28221909667"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67706633.66666667,
            "unit": "ns",
            "range": "± 131555.42583134558"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 135691640.14285713,
            "unit": "ns",
            "range": "± 161375.5179672827"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 273785538.28571427,
            "unit": "ns",
            "range": "± 265986.8006931716"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 14250.222222222223,
            "unit": "ns",
            "range": "± 235.0328026056227"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 109978.08695652174,
            "unit": "ns",
            "range": "± 4785.776406797207"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 106309.0425531915,
            "unit": "ns",
            "range": "± 3038.1333081597754"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 91192.725,
            "unit": "ns",
            "range": "± 3170.735055823928"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3067706.347222222,
            "unit": "ns",
            "range": "± 149837.7733220738"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2711173.77,
            "unit": "ns",
            "range": "± 182378.9486744372"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 4998.989010989011,
            "unit": "ns",
            "range": "± 351.39014387320714"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 26577.967391304348,
            "unit": "ns",
            "range": "± 1830.3707451931846"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22824.44578313253,
            "unit": "ns",
            "range": "± 1211.9559302642701"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 28901.520833333332,
            "unit": "ns",
            "range": "± 4929.689122213152"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1011.2857142857143,
            "unit": "ns",
            "range": "± 183.17461527880897"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4791.423076923077,
            "unit": "ns",
            "range": "± 620.3740310986094"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 675992.4864864865,
            "unit": "ns",
            "range": "± 30180.214889002866"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1281233.6545454545,
            "unit": "ns",
            "range": "± 47722.56174910322"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1081213.925531915,
            "unit": "ns",
            "range": "± 61671.34316267986"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9480576.66,
            "unit": "ns",
            "range": "± 1489535.1844363636"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2166342.3181818184,
            "unit": "ns",
            "range": "± 52626.55082423552"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2284055.117647059,
            "unit": "ns",
            "range": "± 72701.52337615089"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2563002.466666667,
            "unit": "ns",
            "range": "± 31760.11894514131"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2353850.422222222,
            "unit": "ns",
            "range": "± 82769.54088680891"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3052247.965116279,
            "unit": "ns",
            "range": "± 165743.77505701903"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3047216.41875,
            "unit": "ns",
            "range": "± 41541.62885563461"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 932914.7190755209,
            "unit": "ns",
            "range": "± 7282.125327521411"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 614904.81796875,
            "unit": "ns",
            "range": "± 4281.276500393039"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1640365.624609375,
            "unit": "ns",
            "range": "± 16574.45680680684"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 455230.98974609375,
            "unit": "ns",
            "range": "± 1126.601378491189"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 428867.47096354165,
            "unit": "ns",
            "range": "± 1308.8945194595058"
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
          "id": "3ab23afbf49efb8ee99d2e1d5f614d6bf4ff3c17",
          "message": "Changelog",
          "timestamp": "2024-07-17T14:59:17+09:00",
          "tree_id": "f60f63292b146abc9a4f45f1c0f90629c5e720a7",
          "url": "https://github.com/planetarium/libplanet/commit/3ab23afbf49efb8ee99d2e1d5f614d6bf4ff3c17"
        },
        "date": 1721196747000,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10722196.92857143,
            "unit": "ns",
            "range": "± 94365.43632028403"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26678392.92857143,
            "unit": "ns",
            "range": "± 192504.78034532597"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67240359.92857143,
            "unit": "ns",
            "range": "± 74488.06598733093"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 135271708.06666666,
            "unit": "ns",
            "range": "± 186041.5393755102"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 273828410.85714287,
            "unit": "ns",
            "range": "± 478051.3771093352"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 13879.971428571429,
            "unit": "ns",
            "range": "± 368.53250201578805"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 110450.375,
            "unit": "ns",
            "range": "± 3797.913203579444"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 105591.42372881356,
            "unit": "ns",
            "range": "± 4383.095332829143"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 91400.76086956522,
            "unit": "ns",
            "range": "± 3472.3483132042725"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3001462.02020202,
            "unit": "ns",
            "range": "± 194372.3233539168"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2635222.4,
            "unit": "ns",
            "range": "± 186463.9511307018"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 5125.816091954023,
            "unit": "ns",
            "range": "± 344.84494421695007"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 27308.044444444444,
            "unit": "ns",
            "range": "± 2040.3749815703552"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 23180.738636363636,
            "unit": "ns",
            "range": "± 1348.8391986361567"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 29185.35106382979,
            "unit": "ns",
            "range": "± 4466.729624915261"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1203.3191489361702,
            "unit": "ns",
            "range": "± 231.37867360047989"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 5020.4838709677415,
            "unit": "ns",
            "range": "± 688.5302180369937"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 703355.8191489362,
            "unit": "ns",
            "range": "± 59493.96196072459"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1271396.6511627906,
            "unit": "ns",
            "range": "± 43064.276638799296"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1082426.1219512196,
            "unit": "ns",
            "range": "± 57068.17078027966"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9400349.06,
            "unit": "ns",
            "range": "± 1260764.3813111654"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2182766.464285714,
            "unit": "ns",
            "range": "± 59605.555895951045"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2282697.2419354836,
            "unit": "ns",
            "range": "± 85409.23232349093"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2561482.125,
            "unit": "ns",
            "range": "± 49282.19178415262"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2317808.685714286,
            "unit": "ns",
            "range": "± 74222.23415914392"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3137202.45,
            "unit": "ns",
            "range": "± 224780.60784399227"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3011560.5473958333,
            "unit": "ns",
            "range": "± 29076.08719249009"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 922410.354296875,
            "unit": "ns",
            "range": "± 7139.981241471145"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 613918.3532552083,
            "unit": "ns",
            "range": "± 6203.317403074352"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1628242.7522135417,
            "unit": "ns",
            "range": "± 12587.089358915035"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 468838.0396484375,
            "unit": "ns",
            "range": "± 962.7432988204409"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 421050.75244140625,
            "unit": "ns",
            "range": "± 1896.6386611024125"
          }
        ]
      }
    ]
  }
}