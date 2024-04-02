window.BENCHMARK_DATA = {
  "lastUpdate": 1711525631667,
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
          "id": "3f15fa48f9f57536b050c7443c2247627f30ee76",
          "message": "feat: add dpos related features",
          "timestamp": "2024-03-21T19:07:13+09:00",
          "tree_id": "9951d77e8b5a62bf4d33a34cdbb2c476c8268a10",
          "url": "https://github.com/planetarium/libplanet/commit/3f15fa48f9f57536b050c7443c2247627f30ee76"
        },
        "date": 1711016216572,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5543702.833333333,
            "unit": "ns",
            "range": "± 30971.80112772323"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14418771.6,
            "unit": "ns",
            "range": "± 59124.5353213996"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37586423.4,
            "unit": "ns",
            "range": "± 224712.2209137087"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 76692307.07142857,
            "unit": "ns",
            "range": "± 301667.9006509449"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 149651573.73333332,
            "unit": "ns",
            "range": "± 551560.7923649119"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36172.829545454544,
            "unit": "ns",
            "range": "± 2127.9823897464603"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 966327.4375,
            "unit": "ns",
            "range": "± 78918.94094586612"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1857089.2,
            "unit": "ns",
            "range": "± 60218.30992793198"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1579154.7659574468,
            "unit": "ns",
            "range": "± 127619.35953067584"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7441779.5,
            "unit": "ns",
            "range": "± 182416.1094291017"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2431925.409090909,
            "unit": "ns",
            "range": "± 58360.21709701215"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2533033.8,
            "unit": "ns",
            "range": "± 39289.03048871093"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3148147.466666667,
            "unit": "ns",
            "range": "± 58269.49053182201"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3135905.0384615385,
            "unit": "ns",
            "range": "± 128974.14230607128"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8674208.932432432,
            "unit": "ns",
            "range": "± 206075.19638640818"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 200228.82142857142,
            "unit": "ns",
            "range": "± 5668.438971563391"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 194651.41463414635,
            "unit": "ns",
            "range": "± 6960.007255655735"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 165785.1,
            "unit": "ns",
            "range": "± 2388.3894693166894"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3199347.1428571427,
            "unit": "ns",
            "range": "± 41983.44450972429"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2847147.9,
            "unit": "ns",
            "range": "± 44376.36804619581"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12345.577777777778,
            "unit": "ns",
            "range": "± 686.506630290785"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60196.89772727273,
            "unit": "ns",
            "range": "± 3070.3618119183816"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52188.42105263158,
            "unit": "ns",
            "range": "± 1148.7520434410299"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 64134.45744680851,
            "unit": "ns",
            "range": "± 6697.813982437184"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2902.516129032258,
            "unit": "ns",
            "range": "± 288.6137637541408"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12045.521739130434,
            "unit": "ns",
            "range": "± 742.6313104485165"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3636946.10546875,
            "unit": "ns",
            "range": "± 2609.888351529654"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1216460.9889322917,
            "unit": "ns",
            "range": "± 1111.0162639993835"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 762019.2191685268,
            "unit": "ns",
            "range": "± 2426.9290170437125"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1945224.0114182692,
            "unit": "ns",
            "range": "± 3844.7103812030045"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 623986.5447591146,
            "unit": "ns",
            "range": "± 711.0546677162647"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 568408.6684244792,
            "unit": "ns",
            "range": "± 1012.7585927111193"
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
          "id": "96970ec83a91f1590560b82834f8cb64518754a8",
          "message": "feat: add dpos related features",
          "timestamp": "2024-03-22T15:42:49+09:00",
          "tree_id": "e8a7fb5a69658de0b6f21e32e09cb5d6b7ddb3fe",
          "url": "https://github.com/planetarium/libplanet/commit/96970ec83a91f1590560b82834f8cb64518754a8"
        },
        "date": 1711090340718,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5739584.285714285,
            "unit": "ns",
            "range": "± 16236.99178480362"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14854665.866666667,
            "unit": "ns",
            "range": "± 166138.5292463004"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 38772261.43333333,
            "unit": "ns",
            "range": "± 206502.78542101584"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 76901944,
            "unit": "ns",
            "range": "± 372439.5196711234"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 150226967.42307693,
            "unit": "ns",
            "range": "± 425661.6538542205"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 39609.13440860215,
            "unit": "ns",
            "range": "± 5179.835417447803"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 971252.5625,
            "unit": "ns",
            "range": "± 81401.41224997751"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1875758.2,
            "unit": "ns",
            "range": "± 64475.22990173863"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1642877.34375,
            "unit": "ns",
            "range": "± 110931.98466768803"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7454422.928571428,
            "unit": "ns",
            "range": "± 122413.18420617326"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2406151.793103448,
            "unit": "ns",
            "range": "± 68393.14258878554"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2527903.6774193547,
            "unit": "ns",
            "range": "± 76702.51871848239"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3175053.0833333335,
            "unit": "ns",
            "range": "± 80835.48596292545"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3251711.206349206,
            "unit": "ns",
            "range": "± 143907.1519712936"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8882052.764705881,
            "unit": "ns",
            "range": "± 189737.28909002268"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 200701.0909090909,
            "unit": "ns",
            "range": "± 8512.42235679547"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 195638,
            "unit": "ns",
            "range": "± 5941.737568534421"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 166290.07894736843,
            "unit": "ns",
            "range": "± 3655.534363062692"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3203113.2666666666,
            "unit": "ns",
            "range": "± 26635.035633719806"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2911056.785714286,
            "unit": "ns",
            "range": "± 22522.269121330257"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12772.695652173914,
            "unit": "ns",
            "range": "± 1024.319691029826"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 63084.50515463918,
            "unit": "ns",
            "range": "± 6097.766346724347"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 53066.02272727273,
            "unit": "ns",
            "range": "± 1683.6162144654563"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 66374.53225806452,
            "unit": "ns",
            "range": "± 5923.939709663724"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3220.9777777777776,
            "unit": "ns",
            "range": "± 604.5044814060108"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13236.808080808081,
            "unit": "ns",
            "range": "± 1833.2996664137618"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3763572.0203683036,
            "unit": "ns",
            "range": "± 6283.479181375155"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1224774.963671875,
            "unit": "ns",
            "range": "± 1738.6452112861616"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 771102.934375,
            "unit": "ns",
            "range": "± 557.2254328602932"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1958994.927734375,
            "unit": "ns",
            "range": "± 5412.0888392620045"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 621704.0319661458,
            "unit": "ns",
            "range": "± 948.91225275155"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 567148.3240685096,
            "unit": "ns",
            "range": "± 820.5074340534528"
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
          "id": "e02529556f53f3e6ceeead0a3865c70df3e07855",
          "message": "Merge pull request #3701 from s2quake/exp/dpos\n\nIntroduce Begin / End block action",
          "timestamp": "2024-03-27T16:35:34+09:00",
          "tree_id": "1b1a9146062f603672dd5ba787fb24149be858cf",
          "url": "https://github.com/planetarium/libplanet/commit/e02529556f53f3e6ceeead0a3865c70df3e07855"
        },
        "date": 1711525608736,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5833004.466666667,
            "unit": "ns",
            "range": "± 14808.05976905177"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14545490.714285715,
            "unit": "ns",
            "range": "± 170100.57184339667"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37067743.35714286,
            "unit": "ns",
            "range": "± 193375.20819097027"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75123901,
            "unit": "ns",
            "range": "± 466107.82223281276"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 151494997.4,
            "unit": "ns",
            "range": "± 769799.75124674"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36703.07608695652,
            "unit": "ns",
            "range": "± 2270.04940757431"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 961804.6808510638,
            "unit": "ns",
            "range": "± 73906.12853110483"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1883622.027027027,
            "unit": "ns",
            "range": "± 63309.653945019614"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1658147.4631578948,
            "unit": "ns",
            "range": "± 138756.76100436153"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7710047.432432433,
            "unit": "ns",
            "range": "± 248195.44812344303"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2371276.7,
            "unit": "ns",
            "range": "± 54013.917796688"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2542351.7,
            "unit": "ns",
            "range": "± 39675.28309233777"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3093792.875,
            "unit": "ns",
            "range": "± 57776.29572050577"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3188984.9054054054,
            "unit": "ns",
            "range": "± 159750.6736538131"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8789964.925,
            "unit": "ns",
            "range": "± 222234.96544872108"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 200546.5873015873,
            "unit": "ns",
            "range": "± 9090.525052501573"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 193960.65094339623,
            "unit": "ns",
            "range": "± 8047.033618278293"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 165343.17647058822,
            "unit": "ns",
            "range": "± 3249.4002376456747"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3266319.25,
            "unit": "ns",
            "range": "± 61538.79316821219"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2853497.3666666667,
            "unit": "ns",
            "range": "± 39437.17658299203"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12104.08695652174,
            "unit": "ns",
            "range": "± 751.3263678567321"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59281.385542168675,
            "unit": "ns",
            "range": "± 3142.1410085858984"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52326.17307692308,
            "unit": "ns",
            "range": "± 2165.029083001272"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 59458.32474226804,
            "unit": "ns",
            "range": "± 11672.66365096451"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2949.351063829787,
            "unit": "ns",
            "range": "± 371.17644146386885"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11895.773684210526,
            "unit": "ns",
            "range": "± 829.6595615852922"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3743366.133370536,
            "unit": "ns",
            "range": "± 7112.899885914226"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1204253.8833333333,
            "unit": "ns",
            "range": "± 2646.9119709344477"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 756002.2907552083,
            "unit": "ns",
            "range": "± 1457.859927080059"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1936236.1213541667,
            "unit": "ns",
            "range": "± 1061.5823981083593"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 652554.8220052083,
            "unit": "ns",
            "range": "± 662.598903867455"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 576897.051953125,
            "unit": "ns",
            "range": "± 433.87964899222845"
          }
        ]
      }
    ]
  }
}