window.BENCHMARK_DATA = {
  "lastUpdate": 1714383590123,
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
      },
      {
        "commit": {
          "author": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1398e6bb177dda739d30043165ac072ef33dbaf5",
          "message": "Merge pull request #3730 from limebell/feature/update-validatorset\n\nIntroduce `IAccount.SetValidatorSet()` method",
          "timestamp": "2024-04-05T15:35:18+09:00",
          "tree_id": "0f53133435a83c0ce427c2b033a2618f06fc709f",
          "url": "https://github.com/planetarium/libplanet/commit/1398e6bb177dda739d30043165ac072ef33dbaf5"
        },
        "date": 1712299455432,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5815330.133333334,
            "unit": "ns",
            "range": "± 41978.40430654564"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14755269.357142856,
            "unit": "ns",
            "range": "± 82188.53875141841"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37609387.928571425,
            "unit": "ns",
            "range": "± 154686.6685706771"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 77311719.71428572,
            "unit": "ns",
            "range": "± 865800.1406097563"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 151865598.6,
            "unit": "ns",
            "range": "± 766482.3788147663"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36080.34545454545,
            "unit": "ns",
            "range": "± 1534.6688654557788"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 968158.4239130435,
            "unit": "ns",
            "range": "± 79118.27321950288"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1888103.2368421052,
            "unit": "ns",
            "range": "± 80777.84212016453"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1598708.131868132,
            "unit": "ns",
            "range": "± 93816.60980020881"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7681267.370967742,
            "unit": "ns",
            "range": "± 213816.9349895282"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2424423.829787234,
            "unit": "ns",
            "range": "± 93547.36278283088"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2583879.9,
            "unit": "ns",
            "range": "± 75882.2510110691"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3111836.846153846,
            "unit": "ns",
            "range": "± 28057.751516132324"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3319497.234567901,
            "unit": "ns",
            "range": "± 170372.00170100364"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9137513.847826088,
            "unit": "ns",
            "range": "± 215837.52219172925"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 203160,
            "unit": "ns",
            "range": "± 7795.212438512402"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 189774.55454545454,
            "unit": "ns",
            "range": "± 8058.814285126247"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 168808.97826086957,
            "unit": "ns",
            "range": "± 4246.660076615988"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3248749.2666666666,
            "unit": "ns",
            "range": "± 30677.481814765015"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2920549.066666667,
            "unit": "ns",
            "range": "± 41752.34164941559"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16787.25773195876,
            "unit": "ns",
            "range": "± 4709.497795409361"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 63174.135416666664,
            "unit": "ns",
            "range": "± 5570.214937022377"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 56933.88043478261,
            "unit": "ns",
            "range": "± 5480.427070553622"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 86177.22448979592,
            "unit": "ns",
            "range": "± 17769.001354165703"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5291.040404040404,
            "unit": "ns",
            "range": "± 1831.2352913343511"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12919.236263736264,
            "unit": "ns",
            "range": "± 859.8306013417194"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3726747.771935096,
            "unit": "ns",
            "range": "± 4882.637385632696"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1214829.7219587055,
            "unit": "ns",
            "range": "± 2017.8498068089548"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 788278.8589192708,
            "unit": "ns",
            "range": "± 1292.6494158918922"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1998334.6986979167,
            "unit": "ns",
            "range": "± 2496.8004006450597"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 620160.412109375,
            "unit": "ns",
            "range": "± 646.5716411387674"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 572786.3000300481,
            "unit": "ns",
            "range": "± 611.7584186611965"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "16202678becba39ba2b2a9f8023f3e4d8872eee3",
          "message": "Merge pull request #3737 from limebell/feature/vote-power\n\nImplement Vote Power",
          "timestamp": "2024-04-16T12:51:53+09:00",
          "tree_id": "d6b3dbf6d76cec814d39b7b9f4e53f6796831e4a",
          "url": "https://github.com/planetarium/libplanet/commit/16202678becba39ba2b2a9f8023f3e4d8872eee3"
        },
        "date": 1713240074446,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 204845.72916666666,
            "unit": "ns",
            "range": "± 7247.357282807515"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 192749.8947368421,
            "unit": "ns",
            "range": "± 6649.026711093617"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 169770.38461538462,
            "unit": "ns",
            "range": "± 2701.420908166094"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3093563.7,
            "unit": "ns",
            "range": "± 42522.955016253116"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2706385.0714285714,
            "unit": "ns",
            "range": "± 29870.509249771076"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12688.351648351649,
            "unit": "ns",
            "range": "± 887.8336352371224"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61395.13043478261,
            "unit": "ns",
            "range": "± 4398.049639459684"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50256.38461538462,
            "unit": "ns",
            "range": "± 502.49420203314094"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 64823.63917525773,
            "unit": "ns",
            "range": "± 8539.675386816487"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2628.5833333333335,
            "unit": "ns",
            "range": "± 263.8630692200893"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12094.510752688173,
            "unit": "ns",
            "range": "± 706.235034387396"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10614481.346153846,
            "unit": "ns",
            "range": "± 65288.85076443776"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 28363976.733333334,
            "unit": "ns",
            "range": "± 150189.09668598577"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 71218011.7,
            "unit": "ns",
            "range": "± 511285.66199800954"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 140652415.2142857,
            "unit": "ns",
            "range": "± 401782.4532336984"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 296586566.53333336,
            "unit": "ns",
            "range": "± 687331.6149876654"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3713525.819754464,
            "unit": "ns",
            "range": "± 5690.004848531454"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1219719.9825520834,
            "unit": "ns",
            "range": "± 1095.292318190874"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 759344.4740084135,
            "unit": "ns",
            "range": "± 725.2925246561429"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1932715.8296274038,
            "unit": "ns",
            "range": "± 2108.5472231066747"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 615159.1497628348,
            "unit": "ns",
            "range": "± 1246.463578103102"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 565353.5538504465,
            "unit": "ns",
            "range": "± 426.96703643140677"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 941590.1341463415,
            "unit": "ns",
            "range": "± 45212.823447683644"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1872142.465116279,
            "unit": "ns",
            "range": "± 69260.13733411464"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1594227.8636363635,
            "unit": "ns",
            "range": "± 73846.01523474607"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7627353.342857143,
            "unit": "ns",
            "range": "± 248765.96742591134"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2440079.9285714286,
            "unit": "ns",
            "range": "± 23196.71666327034"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2598023.714285714,
            "unit": "ns",
            "range": "± 73935.98914469348"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3153988,
            "unit": "ns",
            "range": "± 68690.22646688121"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3225676.6428571427,
            "unit": "ns",
            "range": "± 116500.50249694235"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8960668.705882354,
            "unit": "ns",
            "range": "± 197884.4269104278"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45753.84126984127,
            "unit": "ns",
            "range": "± 2096.868596236357"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5cbb2c630450c32c5f72d0be59b4fd8cc4f6be3b",
          "message": "Merge pull request #3748 from limebell/feature/tx-action\n\nIntroduce Transaction-Actions",
          "timestamp": "2024-04-18T12:05:12+09:00",
          "tree_id": "91f4afc7c986219bc488d50bdb27fa41c2100f5e",
          "url": "https://github.com/planetarium/libplanet/commit/5cbb2c630450c32c5f72d0be59b4fd8cc4f6be3b"
        },
        "date": 1713410111230,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 205237.88333333333,
            "unit": "ns",
            "range": "± 8695.814070119623"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 193068.75,
            "unit": "ns",
            "range": "± 6452.15980830144"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 170077,
            "unit": "ns",
            "range": "± 4845.363236011196"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3161725.533333333,
            "unit": "ns",
            "range": "± 25559.384605454095"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2740065.9285714286,
            "unit": "ns",
            "range": "± 39404.10776217331"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13039.434782608696,
            "unit": "ns",
            "range": "± 780.8850614632321"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61348.77922077922,
            "unit": "ns",
            "range": "± 3156.929460990189"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51383.42857142857,
            "unit": "ns",
            "range": "± 866.6142309440373"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 49045.130952380954,
            "unit": "ns",
            "range": "± 3680.978863330163"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2573.2795698924733,
            "unit": "ns",
            "range": "± 233.3203789898922"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12200.740963855422,
            "unit": "ns",
            "range": "± 659.3623044619712"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10797119.714285715,
            "unit": "ns",
            "range": "± 42124.07842850155"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27764062.933333334,
            "unit": "ns",
            "range": "± 170113.6489318944"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 70636653.73333333,
            "unit": "ns",
            "range": "± 325163.09572109167"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 142960397.14285713,
            "unit": "ns",
            "range": "± 688978.9056002321"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 298701228.43333334,
            "unit": "ns",
            "range": "± 1401032.9576567768"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3676442.175223214,
            "unit": "ns",
            "range": "± 4213.976255242347"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1219510.5609375,
            "unit": "ns",
            "range": "± 1203.7996181030207"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 762617.6496744792,
            "unit": "ns",
            "range": "± 1157.0771061781713"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1915944.0477120536,
            "unit": "ns",
            "range": "± 1857.4281589153736"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 617200.8900669643,
            "unit": "ns",
            "range": "± 632.9372155712811"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 568636.8973106971,
            "unit": "ns",
            "range": "± 871.3595312721131"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 956436.1025641026,
            "unit": "ns",
            "range": "± 48391.49428550589"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1879562.280487805,
            "unit": "ns",
            "range": "± 67685.40115324433"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1623557.2323943663,
            "unit": "ns",
            "range": "± 79419.49740099948"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7396280.692307692,
            "unit": "ns",
            "range": "± 116530.5768202668"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2381853.7352941176,
            "unit": "ns",
            "range": "± 48275.995403421526"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2563998.6666666665,
            "unit": "ns",
            "range": "± 53119.77267209729"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3098173.705882353,
            "unit": "ns",
            "range": "± 61364.11991115483"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3221668.6666666665,
            "unit": "ns",
            "range": "± 116572.47121094947"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8875949.705882354,
            "unit": "ns",
            "range": "± 232642.49384168955"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 38246.0376344086,
            "unit": "ns",
            "range": "± 4170.759529825889"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2088719638c4fe35b6bbfba6e84109b0a02d98c5",
          "message": "Merge pull request #3764 from limebell/bugfix/tx-action-signer\n\nAdd BlockAction flag to ActionContext",
          "timestamp": "2024-04-23T16:21:21+09:00",
          "tree_id": "64ed9de5c55aaf37df5d6415f94a8eb84878477a",
          "url": "https://github.com/planetarium/libplanet/commit/2088719638c4fe35b6bbfba6e84109b0a02d98c5"
        },
        "date": 1713857586114,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2379594.625,
            "unit": "ns",
            "range": "± 84186.74510435728"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2535802.411764706,
            "unit": "ns",
            "range": "± 49999.24105181351"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3108123.285714286,
            "unit": "ns",
            "range": "± 46007.10698974599"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3194385.340425532,
            "unit": "ns",
            "range": "± 123979.66011674737"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8792547.411764706,
            "unit": "ns",
            "range": "± 226680.34527065261"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 202504.5849056604,
            "unit": "ns",
            "range": "± 7954.671574794569"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 191365.9705882353,
            "unit": "ns",
            "range": "± 3912.689422214071"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 173127.5,
            "unit": "ns",
            "range": "± 1729.3141309884575"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3067634.4285714286,
            "unit": "ns",
            "range": "± 32749.98979087166"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2796776.1428571427,
            "unit": "ns",
            "range": "± 36919.17548428676"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12494.97191011236,
            "unit": "ns",
            "range": "± 806.2902011103306"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61529.76190476191,
            "unit": "ns",
            "range": "± 3289.7894780817714"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50419.72222222222,
            "unit": "ns",
            "range": "± 1027.174525840642"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 58454.4693877551,
            "unit": "ns",
            "range": "± 11858.320019054594"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2974.1020408163267,
            "unit": "ns",
            "range": "± 388.26403864784123"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12309.732876712329,
            "unit": "ns",
            "range": "± 625.1013366857663"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10589148.916666666,
            "unit": "ns",
            "range": "± 40914.71501563473"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27794260.633333333,
            "unit": "ns",
            "range": "± 271632.15612501366"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 70355218.07142857,
            "unit": "ns",
            "range": "± 237665.6425949519"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 140321681.03333333,
            "unit": "ns",
            "range": "± 622764.1428466738"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 306735548.35714287,
            "unit": "ns",
            "range": "± 1236138.7648890088"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 941538.5722891566,
            "unit": "ns",
            "range": "± 50037.96095082874"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1900937.5957446808,
            "unit": "ns",
            "range": "± 72933.08257057333"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1574821.367816092,
            "unit": "ns",
            "range": "± 82247.24953726133"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7831419.6,
            "unit": "ns",
            "range": "± 250258.51219738173"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36426.846153846156,
            "unit": "ns",
            "range": "± 1875.242904279323"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3711840.4474158655,
            "unit": "ns",
            "range": "± 4280.684732761791"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1207428.3196149555,
            "unit": "ns",
            "range": "± 1167.7637929943085"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 780475.34765625,
            "unit": "ns",
            "range": "± 6691.06626037331"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1923384.732421875,
            "unit": "ns",
            "range": "± 1882.9064495844027"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 625544.9550130208,
            "unit": "ns",
            "range": "± 854.3615568802237"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 582471.1998046875,
            "unit": "ns",
            "range": "± 994.29714272902"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bed82d6dcaa24d13ecb28799a041a1fac6077075",
          "message": "Merge pull request #3762 from limebell/feature/max-gas-price\n\nAdd max gas price to `IActionContext`",
          "timestamp": "2024-04-24T12:43:32+09:00",
          "tree_id": "5551ee817ddca72946e507bb7a5a0db1876ba12b",
          "url": "https://github.com/planetarium/libplanet/commit/bed82d6dcaa24d13ecb28799a041a1fac6077075"
        },
        "date": 1713930803708,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2442508.423076923,
            "unit": "ns",
            "range": "± 27330.353652003658"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2558722.423076923,
            "unit": "ns",
            "range": "± 28869.68533907017"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3149680.066666667,
            "unit": "ns",
            "range": "± 36665.17637343694"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3236255.724137931,
            "unit": "ns",
            "range": "± 139438.97057976158"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8748188.684210526,
            "unit": "ns",
            "range": "± 144523.11972524313"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 204506.52564102566,
            "unit": "ns",
            "range": "± 7125.226354621192"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 192808.5,
            "unit": "ns",
            "range": "± 6711.231928640225"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 168286.07142857142,
            "unit": "ns",
            "range": "± 2608.934020874182"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3043382.5,
            "unit": "ns",
            "range": "± 17239.87883754794"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2766474.3333333335,
            "unit": "ns",
            "range": "± 42995.76100478921"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12689.968421052632,
            "unit": "ns",
            "range": "± 920.6873987549759"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61674.32258064516,
            "unit": "ns",
            "range": "± 3550.7486233349446"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50950.42857142857,
            "unit": "ns",
            "range": "± 437.55065012929805"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 52717.07608695652,
            "unit": "ns",
            "range": "± 8936.318859149384"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3174.953608247423,
            "unit": "ns",
            "range": "± 424.3744175405565"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12070.952380952382,
            "unit": "ns",
            "range": "± 632.702672986215"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10404158.666666666,
            "unit": "ns",
            "range": "± 62974.41364176255"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27794761.785714287,
            "unit": "ns",
            "range": "± 149816.24405670515"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 70828590.76666667,
            "unit": "ns",
            "range": "± 296495.7350614644"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 141219463.46666667,
            "unit": "ns",
            "range": "± 649080.4341668809"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 295852329.7692308,
            "unit": "ns",
            "range": "± 2956479.048748166"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 960656.7903225806,
            "unit": "ns",
            "range": "± 43669.058318946045"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1850710.738095238,
            "unit": "ns",
            "range": "± 66009.62978937037"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1595143.4725274725,
            "unit": "ns",
            "range": "± 94230.12936144276"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7441621.887096774,
            "unit": "ns",
            "range": "± 227058.4169834828"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36960.10666666667,
            "unit": "ns",
            "range": "± 1871.314551493316"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3702203.076171875,
            "unit": "ns",
            "range": "± 3653.32925172231"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1202463.6658761161,
            "unit": "ns",
            "range": "± 1506.5924552795852"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 771418.931640625,
            "unit": "ns",
            "range": "± 2292.876883141833"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1928485.730747768,
            "unit": "ns",
            "range": "± 4057.1867057446234"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 616886.2992838542,
            "unit": "ns",
            "range": "± 533.5562395219166"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 562422.41796875,
            "unit": "ns",
            "range": "± 257.64847121840984"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "15807781c0742c2a1135f8536f004238aca3aa41",
          "message": "Merge pull request #3766 from limebell/test/reinforce-aev-test\n\nAdd test for evaluation when policy actions fails",
          "timestamp": "2024-04-29T18:29:14+09:00",
          "tree_id": "fd5cb49e793adcafc3ac354ae14ca307b01f9cfb",
          "url": "https://github.com/planetarium/libplanet/commit/15807781c0742c2a1135f8536f004238aca3aa41"
        },
        "date": 1714383566511,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2462586,
            "unit": "ns",
            "range": "± 39718.50408475588"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2621142.1333333333,
            "unit": "ns",
            "range": "± 47944.27283519105"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3220961.785714286,
            "unit": "ns",
            "range": "± 54861.5332495275"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3254273.25,
            "unit": "ns",
            "range": "± 128604.42781141317"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9029021,
            "unit": "ns",
            "range": "± 213078.20976402637"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 224988.84615384616,
            "unit": "ns",
            "range": "± 12604.931929758532"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 200542.57407407407,
            "unit": "ns",
            "range": "± 7805.288530322201"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 167069.38888888888,
            "unit": "ns",
            "range": "± 3498.224257750829"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3063975.8666666667,
            "unit": "ns",
            "range": "± 50750.45907162764"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2728502.8,
            "unit": "ns",
            "range": "± 45239.10214026294"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12864.976470588235,
            "unit": "ns",
            "range": "± 704.6562481176227"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61421.73809523809,
            "unit": "ns",
            "range": "± 3725.4108437427203"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51187.642857142855,
            "unit": "ns",
            "range": "± 881.7528746015698"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 60538.42857142857,
            "unit": "ns",
            "range": "± 14942.74015984137"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2553.7365591397847,
            "unit": "ns",
            "range": "± 167.99562609791894"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12594.638461538461,
            "unit": "ns",
            "range": "± 589.7278471073298"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10515005.285714285,
            "unit": "ns",
            "range": "± 31681.722389509287"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27472254.230769232,
            "unit": "ns",
            "range": "± 70084.51489113441"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 71064268.8,
            "unit": "ns",
            "range": "± 269637.93619942595"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 141094474.03333333,
            "unit": "ns",
            "range": "± 825736.9171097904"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 294463132.26666665,
            "unit": "ns",
            "range": "± 3227321.7979739234"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 944669.7676056338,
            "unit": "ns",
            "range": "± 43043.4456862093"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1983148.803030303,
            "unit": "ns",
            "range": "± 62139.156476353965"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1685389.054945055,
            "unit": "ns",
            "range": "± 109638.45847262039"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7471425.16,
            "unit": "ns",
            "range": "± 187651.209024589"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36840.0843373494,
            "unit": "ns",
            "range": "± 1969.120815359839"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3774489.9020647323,
            "unit": "ns",
            "range": "± 5343.333251730826"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1189056.105859375,
            "unit": "ns",
            "range": "± 2643.993245739386"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 767231.1080729166,
            "unit": "ns",
            "range": "± 2013.4729653058414"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1919031.619921875,
            "unit": "ns",
            "range": "± 6092.053359353361"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 641427.1791616586,
            "unit": "ns",
            "range": "± 1082.6642830538144"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 567783.5684291294,
            "unit": "ns",
            "range": "± 1893.7170750873447"
          }
        ]
      }
    ]
  }
}