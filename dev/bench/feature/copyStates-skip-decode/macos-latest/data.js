window.BENCHMARK_DATA = {
  "lastUpdate": 1698989839479,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "ghdwlgud4545@gmail.com",
            "name": "sky1045",
            "username": "sky1045"
          },
          "committer": {
            "email": "ghdwlgud4545@gmail.com",
            "name": "sky1045",
            "username": "sky1045"
          },
          "distinct": true,
          "id": "0d95a809c7915f9fa05077be7fae2cea78d63196",
          "message": "no fingerprint check",
          "timestamp": "2023-11-03T12:43:51+09:00",
          "tree_id": "089f1c7afd2aa770e71acd3f82f294b0ce086dfc",
          "url": "https://github.com/planetarium/libplanet/commit/0d95a809c7915f9fa05077be7fae2cea78d63196"
        },
        "date": 1698984120167,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8293645.78313253,
            "unit": "ns",
            "range": "± 715402.8258223551"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20336775.388888888,
            "unit": "ns",
            "range": "± 342024.0781102886"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49597563.32716049,
            "unit": "ns",
            "range": "± 2568715.441993404"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103162568.41666667,
            "unit": "ns",
            "range": "± 4538958.074027428"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 206720045.9,
            "unit": "ns",
            "range": "± 10737976.628705997"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 54634.46666666667,
            "unit": "ns",
            "range": "± 10717.64785369114"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 248204.51030927835,
            "unit": "ns",
            "range": "± 18741.718054525027"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 253315.0287356322,
            "unit": "ns",
            "range": "± 24424.721790726646"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 238161.28,
            "unit": "ns",
            "range": "± 25730.277671885375"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3933470.370967742,
            "unit": "ns",
            "range": "± 119581.99530942271"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3599012.3,
            "unit": "ns",
            "range": "± 81990.82815785267"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15511.09793814433,
            "unit": "ns",
            "range": "± 3541.0470663697347"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 76758.14516129032,
            "unit": "ns",
            "range": "± 14820.776924455078"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 82695.11224489796,
            "unit": "ns",
            "range": "± 14938.49949725672"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 90412.04166666667,
            "unit": "ns",
            "range": "± 20257.51438793005"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6017.188172043011,
            "unit": "ns",
            "range": "± 1405.686324544261"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15296.802083333334,
            "unit": "ns",
            "range": "± 4153.3387967292865"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1257199.6489361702,
            "unit": "ns",
            "range": "± 132185.02777131117"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2516964.604651163,
            "unit": "ns",
            "range": "± 136848.54389255462"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1911229.0232558139,
            "unit": "ns",
            "range": "± 123234.70839127184"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5611417.439560439,
            "unit": "ns",
            "range": "± 764760.9138791782"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3034976.7974683545,
            "unit": "ns",
            "range": "± 157613.67144336144"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3146079.371794872,
            "unit": "ns",
            "range": "± 86500.25760995393"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3881289.7985074627,
            "unit": "ns",
            "range": "± 179157.89228659787"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3791173.294871795,
            "unit": "ns",
            "range": "± 193910.2902646706"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6159628.142857143,
            "unit": "ns",
            "range": "± 263026.8771023862"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5440675.50546875,
            "unit": "ns",
            "range": "± 242989.14256757"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1626512.4174316407,
            "unit": "ns",
            "range": "± 84723.82141515455"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1092523.2587239584,
            "unit": "ns",
            "range": "± 15120.639881451078"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2054466.6240234375,
            "unit": "ns",
            "range": "± 61594.538163648576"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 652549.2671274039,
            "unit": "ns",
            "range": "± 6653.195268157221"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 614343.5980776434,
            "unit": "ns",
            "range": "± 30548.372845649348"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ghdwlgud4545@gmail.com",
            "name": "sky1045",
            "username": "sky1045"
          },
          "committer": {
            "email": "ghdwlgud4545@gmail.com",
            "name": "sky1045",
            "username": "sky1045"
          },
          "distinct": true,
          "id": "ba4928bdc74dc0465935b91a4fdc438691e49dfc",
          "message": "no fingerprint check",
          "timestamp": "2023-11-03T12:50:31+09:00",
          "tree_id": "3c9a4548973c2ea8bb24d493a426ef5607ff29c1",
          "url": "https://github.com/planetarium/libplanet/commit/ba4928bdc74dc0465935b91a4fdc438691e49dfc"
        },
        "date": 1698984168158,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8945350.983333332,
            "unit": "ns",
            "range": "± 381220.33010456513"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21798995.232394367,
            "unit": "ns",
            "range": "± 1014665.8119830667"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54937577.375,
            "unit": "ns",
            "range": "± 2097159.5465751947"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 108922317.78947368,
            "unit": "ns",
            "range": "± 2025452.4585905238"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 224694785.47058824,
            "unit": "ns",
            "range": "± 4258411.024064744"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48692.34375,
            "unit": "ns",
            "range": "± 10925.520876252729"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 285900.7037037037,
            "unit": "ns",
            "range": "± 11922.14120533665"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 251127.0483870968,
            "unit": "ns",
            "range": "± 32602.18410278811"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 196042.9516129032,
            "unit": "ns",
            "range": "± 5852.128210253712"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3763487.5,
            "unit": "ns",
            "range": "± 69576.60546476812"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3541884.9375,
            "unit": "ns",
            "range": "± 66545.76391674003"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12970.677083333334,
            "unit": "ns",
            "range": "± 2209.4435188635725"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 68254.96315789473,
            "unit": "ns",
            "range": "± 7179.223794661996"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 61304.81914893617,
            "unit": "ns",
            "range": "± 11763.503312905883"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 67162.86021505376,
            "unit": "ns",
            "range": "± 10828.111169133672"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3571.1666666666665,
            "unit": "ns",
            "range": "± 559.4448542473335"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12616.886363636364,
            "unit": "ns",
            "range": "± 1473.6807888406904"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1198107.010989011,
            "unit": "ns",
            "range": "± 69816.38555087744"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2481847.188888889,
            "unit": "ns",
            "range": "± 157152.1329304248"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1922308.224719101,
            "unit": "ns",
            "range": "± 141211.23447442075"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5761028.779569892,
            "unit": "ns",
            "range": "± 1041295.3871749629"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3290823.775510204,
            "unit": "ns",
            "range": "± 131224.39463302057"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3530242.853932584,
            "unit": "ns",
            "range": "± 261615.77977049016"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4148684.8863636362,
            "unit": "ns",
            "range": "± 154914.46467516012"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4206395.639240506,
            "unit": "ns",
            "range": "± 208327.7104821554"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6506018.517857143,
            "unit": "ns",
            "range": "± 264426.76038201374"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5201404.243489583,
            "unit": "ns",
            "range": "± 56792.85068626828"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1551350.9758649555,
            "unit": "ns",
            "range": "± 16307.314956019693"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1085250.730102539,
            "unit": "ns",
            "range": "± 20905.94629286773"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2035349.4536132812,
            "unit": "ns",
            "range": "± 51336.37819914673"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 618975.9516276042,
            "unit": "ns",
            "range": "± 8293.218911825123"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 589155.5189453125,
            "unit": "ns",
            "range": "± 10662.85045921573"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ghdwlgud4545@gmail.com",
            "name": "Robert",
            "username": "sky1045"
          },
          "committer": {
            "email": "ghdwlgud4545@gmail.com",
            "name": "Robert",
            "username": "sky1045"
          },
          "distinct": true,
          "id": "2adc48f94542d57d5e097b6a30c3d056d73a9222",
          "message": "remove fingerpring check",
          "timestamp": "2023-11-03T14:18:25+09:00",
          "tree_id": "26ca58306dcf516bb0d07740be5129d12b410786",
          "url": "https://github.com/planetarium/libplanet/commit/2adc48f94542d57d5e097b6a30c3d056d73a9222"
        },
        "date": 1698989759044,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9936133.814814815,
            "unit": "ns",
            "range": "± 275452.15353599656"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21675500.9010989,
            "unit": "ns",
            "range": "± 1157218.837234351"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 64011415.07777778,
            "unit": "ns",
            "range": "± 5647577.0164057575"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 116760019.2755102,
            "unit": "ns",
            "range": "± 13807668.256601553"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 230105248.52061856,
            "unit": "ns",
            "range": "± 23215126.530792784"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 59116.642857142855,
            "unit": "ns",
            "range": "± 11303.918850955384"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 311712.8461538461,
            "unit": "ns",
            "range": "± 25006.84524681773"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 337144.9120879121,
            "unit": "ns",
            "range": "± 20383.98784702692"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 281655.6551724138,
            "unit": "ns",
            "range": "± 30703.54423895065"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4747929.87037037,
            "unit": "ns",
            "range": "± 129787.87213732443"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4324089.533333333,
            "unit": "ns",
            "range": "± 127144.05240913195"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16641.354838709678,
            "unit": "ns",
            "range": "± 3218.007500751794"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 92618.78260869565,
            "unit": "ns",
            "range": "± 9495.037139574128"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 101054.41111111111,
            "unit": "ns",
            "range": "± 14039.512257361157"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 93808.48958333333,
            "unit": "ns",
            "range": "± 13389.098730719066"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6360.826086956522,
            "unit": "ns",
            "range": "± 886.2277273965748"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16813.215789473685,
            "unit": "ns",
            "range": "± 1939.375517296345"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1559019.1195652173,
            "unit": "ns",
            "range": "± 135927.06618461598"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3041206.5531914895,
            "unit": "ns",
            "range": "± 185895.2166849267"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2447837.5555555555,
            "unit": "ns",
            "range": "± 127485.74955558758"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6516629.612903226,
            "unit": "ns",
            "range": "± 369738.1633272516"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4004831.585106383,
            "unit": "ns",
            "range": "± 535304.5711487283"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4345711.916666667,
            "unit": "ns",
            "range": "± 193746.51227131297"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4678331.934782608,
            "unit": "ns",
            "range": "± 210075.56351951903"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4302276.755102041,
            "unit": "ns",
            "range": "± 378871.64731886383"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6736573.214285715,
            "unit": "ns",
            "range": "± 601168.7486466734"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5967533.075126262,
            "unit": "ns",
            "range": "± 659131.5107319115"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1552124.36328125,
            "unit": "ns",
            "range": "± 26177.676537591527"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1095500.2184895833,
            "unit": "ns",
            "range": "± 19062.150835110235"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2008558.9516782407,
            "unit": "ns",
            "range": "± 54278.31221890695"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 632794.4591796875,
            "unit": "ns",
            "range": "± 11606.938408422522"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 588866.3332435344,
            "unit": "ns",
            "range": "± 16788.434146133422"
          }
        ]
      }
    ]
  }
}