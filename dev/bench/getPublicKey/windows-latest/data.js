window.BENCHMARK_DATA = {
  "lastUpdate": 1680681530641,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "tkiapril@users.noreply.github.com",
            "name": "Seo Myunggyun (Jonathan)",
            "username": "tkiapril"
          },
          "committer": {
            "email": "tkiapril@users.noreply.github.com",
            "name": "Seo Myunggyun (Jonathan)",
            "username": "tkiapril"
          },
          "distinct": true,
          "id": "d841327d8540052291f6b101b94eea9432e91493",
          "message": "tslib: accounts have async getPublicKey i/o publicKey\n\nCo-authored-by: Hong Minhee (洪 民憙) <hong.minhee@planetariumhq.com>",
          "timestamp": "2023-04-05T14:13:01+09:00",
          "tree_id": "b9a03bf1c8c3bfbc6943ae8a7f1ad710ef3fd7f4",
          "url": "https://github.com/planetarium/libplanet/commit/d841327d8540052291f6b101b94eea9432e91493"
        },
        "date": 1680672522647,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1383288.888888889,
            "unit": "ns",
            "range": "± 105534.57494080556"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2474412.5,
            "unit": "ns",
            "range": "± 87424.10389765337"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2215478.787878788,
            "unit": "ns",
            "range": "± 162601.76234248854"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5682896,
            "unit": "ns",
            "range": "± 378678.0698560441"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49321.739130434784,
            "unit": "ns",
            "range": "± 3094.654238243128"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6897441.666666667,
            "unit": "ns",
            "range": "± 51004.89207077607"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19295540,
            "unit": "ns",
            "range": "± 273805.2743935264"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48157200,
            "unit": "ns",
            "range": "± 857575.0579395369"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 98441743.33333333,
            "unit": "ns",
            "range": "± 1367052.4556069355"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 194316357.14285713,
            "unit": "ns",
            "range": "± 871771.7835749001"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4843332.087053572,
            "unit": "ns",
            "range": "± 10352.3610924914"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1569763.3984375,
            "unit": "ns",
            "range": "± 5337.7861325554395"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1157492.5,
            "unit": "ns",
            "range": "± 5286.238314423649"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2623022.3772321427,
            "unit": "ns",
            "range": "± 4335.795108159191"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 829415.95703125,
            "unit": "ns",
            "range": "± 2396.0663378398076"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 763013.0013020834,
            "unit": "ns",
            "range": "± 2909.1575851243524"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3065010.9375,
            "unit": "ns",
            "range": "± 140769.45930180672"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3286920,
            "unit": "ns",
            "range": "± 123946.91972409363"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3956298.5507246377,
            "unit": "ns",
            "range": "± 189842.91377250143"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4274195.652173913,
            "unit": "ns",
            "range": "± 150764.13360171687"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7252559.523809524,
            "unit": "ns",
            "range": "± 264721.1612239711"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 309768.8888888889,
            "unit": "ns",
            "range": "± 11689.385671357471"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 255851.92307692306,
            "unit": "ns",
            "range": "± 10514.891221773602"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 208100,
            "unit": "ns",
            "range": "± 4952.171240981071"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5229315.384615385,
            "unit": "ns",
            "range": "± 31678.30083179563"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3660633.3333333335,
            "unit": "ns",
            "range": "± 67234.38391888766"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21533.333333333332,
            "unit": "ns",
            "range": "± 2387.4672772626645"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 92661.70212765958,
            "unit": "ns",
            "range": "± 6657.312357422964"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 86152.63157894737,
            "unit": "ns",
            "range": "± 7865.367693793255"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 177734.0206185567,
            "unit": "ns",
            "range": "± 17883.82000695705"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7276.530612244898,
            "unit": "ns",
            "range": "± 1026.5346590689105"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20175.263157894737,
            "unit": "ns",
            "range": "± 2057.8840827646986"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tkiapril@users.noreply.github.com",
            "name": "Seo Myunggyun (Jonathan)",
            "username": "tkiapril"
          },
          "committer": {
            "email": "tkiapril@users.noreply.github.com",
            "name": "Seo Myunggyun (Jonathan)",
            "username": "tkiapril"
          },
          "distinct": true,
          "id": "a3a8ae2d01be5f29ee5b20cc35cc82149dc5922e",
          "message": "tslib: accounts have async getPublicKey i/o publicKey\n\nCo-authored-by: Hong Minhee (洪 民憙) <hong.minhee@planetariumhq.com>",
          "timestamp": "2023-04-05T14:17:10+09:00",
          "tree_id": "599e0906639d833ccfe5a7e765c82913ed61a81e",
          "url": "https://github.com/planetarium/libplanet/commit/a3a8ae2d01be5f29ee5b20cc35cc82149dc5922e"
        },
        "date": 1680673095853,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1520867.3684210526,
            "unit": "ns",
            "range": "± 261942.61489555356"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2905505.102040816,
            "unit": "ns",
            "range": "± 397775.76270605176"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2428612.3711340204,
            "unit": "ns",
            "range": "± 379687.21646292065"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6645527.835051547,
            "unit": "ns",
            "range": "± 762781.9410091192"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 60395.78947368421,
            "unit": "ns",
            "range": "± 16203.696162200438"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7945995.918367347,
            "unit": "ns",
            "range": "± 612515.5408789397"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19920993.684210528,
            "unit": "ns",
            "range": "± 1421456.9849136085"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52886085.85858586,
            "unit": "ns",
            "range": "± 4010597.7588468497"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 108001397.95918368,
            "unit": "ns",
            "range": "± 7510026.492327421"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 219094041,
            "unit": "ns",
            "range": "± 12963727.550323201"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5481885.208333333,
            "unit": "ns",
            "range": "± 83104.4204343959"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2162450.6002286584,
            "unit": "ns",
            "range": "± 71891.14060633538"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1408949.3017578125,
            "unit": "ns",
            "range": "± 49807.19362127134"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2969431.25,
            "unit": "ns",
            "range": "± 50194.273698703546"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 939249.8282596982,
            "unit": "ns",
            "range": "± 27363.925483068084"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 869167.5362723215,
            "unit": "ns",
            "range": "± 14269.232824600604"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3202111.4583333335,
            "unit": "ns",
            "range": "± 312282.9431848091"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3461279.347826087,
            "unit": "ns",
            "range": "± 401637.4781497801"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4234110.101010101,
            "unit": "ns",
            "range": "± 505953.8497335442"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4452272.448979592,
            "unit": "ns",
            "range": "± 561360.4382250765"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8243621.428571428,
            "unit": "ns",
            "range": "± 797229.722581271"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 376584,
            "unit": "ns",
            "range": "± 68197.07437665749"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 295390.625,
            "unit": "ns",
            "range": "± 45864.30116888871"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 259362.1052631579,
            "unit": "ns",
            "range": "± 51577.16833438084"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5878736.082474227,
            "unit": "ns",
            "range": "± 666798.074161381"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4082321.052631579,
            "unit": "ns",
            "range": "± 468544.3415276762"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25934.343434343435,
            "unit": "ns",
            "range": "± 11270.46131660158"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 101012.63157894737,
            "unit": "ns",
            "range": "± 18344.552453064844"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 84707.29166666667,
            "unit": "ns",
            "range": "± 22902.356784224845"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 217366.66666666666,
            "unit": "ns",
            "range": "± 40686.78995930967"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5175,
            "unit": "ns",
            "range": "± 714.9069548011046"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23026.262626262625,
            "unit": "ns",
            "range": "± 9131.908465158744"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tkiapril@users.noreply.github.com",
            "name": "Seo Myunggyun (Jonathan)",
            "username": "tkiapril"
          },
          "committer": {
            "email": "tkiapril@users.noreply.github.com",
            "name": "Seo Myunggyun (Jonathan)",
            "username": "tkiapril"
          },
          "distinct": true,
          "id": "db8bb077b2eef3c6d6eb75c32082896a5d0c9f8c",
          "message": "tslib: accounts have async getPublicKey i/o publicKey\n\nCo-authored-by: Hong Minhee (洪 民憙) <hong.minhee@planetariumhq.com>",
          "timestamp": "2023-04-05T14:36:26+09:00",
          "tree_id": "599e0906639d833ccfe5a7e765c82913ed61a81e",
          "url": "https://github.com/planetarium/libplanet/commit/db8bb077b2eef3c6d6eb75c32082896a5d0c9f8c"
        },
        "date": 1680673976805,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1397240.4040404041,
            "unit": "ns",
            "range": "± 126963.50425252123"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2598878.5714285714,
            "unit": "ns",
            "range": "± 126365.2021593373"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2268955.2083333335,
            "unit": "ns",
            "range": "± 135936.4873908645"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5848601,
            "unit": "ns",
            "range": "± 405771.73298779596"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 53945.26315789474,
            "unit": "ns",
            "range": "± 5404.682139197076"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7843193.75,
            "unit": "ns",
            "range": "± 151023.24752059422"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20538666.666666668,
            "unit": "ns",
            "range": "± 367051.7707094632"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50945780,
            "unit": "ns",
            "range": "± 828289.7700339279"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103323213.33333333,
            "unit": "ns",
            "range": "± 1528131.7537936254"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 204692540,
            "unit": "ns",
            "range": "± 1683701.3239543748"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4845507.421875,
            "unit": "ns",
            "range": "± 14793.289138217133"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1526601.869419643,
            "unit": "ns",
            "range": "± 5679.816968596519"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1196023.4114583333,
            "unit": "ns",
            "range": "± 5706.933366538805"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2622405.9151785714,
            "unit": "ns",
            "range": "± 6500.262748521949"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 844806.2220982143,
            "unit": "ns",
            "range": "± 1787.832905856947"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 762736.3541666666,
            "unit": "ns",
            "range": "± 2058.428993973347"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3241104.1666666665,
            "unit": "ns",
            "range": "± 80664.0563193053"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3572669.230769231,
            "unit": "ns",
            "range": "± 48981.63575285784"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4086955.5555555555,
            "unit": "ns",
            "range": "± 135176.10829035303"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4444292.857142857,
            "unit": "ns",
            "range": "± 238474.64758067334"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7498945.454545454,
            "unit": "ns",
            "range": "± 304776.43221936247"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 336453.488372093,
            "unit": "ns",
            "range": "± 12212.217708141796"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 276795.8333333333,
            "unit": "ns",
            "range": "± 13672.388516513085"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 231053.60824742267,
            "unit": "ns",
            "range": "± 15607.363792558453"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5336337.5,
            "unit": "ns",
            "range": "± 97100.7440754189"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3736694.117647059,
            "unit": "ns",
            "range": "± 75334.32543160717"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23427.551020408162,
            "unit": "ns",
            "range": "± 3217.054444906675"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 101343.15789473684,
            "unit": "ns",
            "range": "± 8236.680448774832"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 90683.87096774194,
            "unit": "ns",
            "range": "± 8248.864089423367"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 207016.32653061225,
            "unit": "ns",
            "range": "± 21700.043678408943"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8798.947368421053,
            "unit": "ns",
            "range": "± 1459.7795473932638"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22469.23076923077,
            "unit": "ns",
            "range": "± 2051.9742421868486"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tkiapril@users.noreply.github.com",
            "name": "Seo Myunggyun (Jonathan)",
            "username": "tkiapril"
          },
          "committer": {
            "email": "tkiapril@users.noreply.github.com",
            "name": "Seo Myunggyun (Jonathan)",
            "username": "tkiapril"
          },
          "distinct": true,
          "id": "630fdad82a887960678a5793dfc61d56289ee410",
          "message": "tslib: accounts have async getPublicKey i/o publicKey\n\nCo-authored-by: Hong Minhee (洪 民憙) <hong.minhee@planetariumhq.com>",
          "timestamp": "2023-04-05T16:21:35+09:00",
          "tree_id": "0e4718ba6facc794d72d1d3aaec75ab0cdff5b0f",
          "url": "https://github.com/planetarium/libplanet/commit/630fdad82a887960678a5793dfc61d56289ee410"
        },
        "date": 1680680383089,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1399765.6565656567,
            "unit": "ns",
            "range": "± 102392.92781064496"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2479276.595744681,
            "unit": "ns",
            "range": "± 95294.54159459674"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2181444,
            "unit": "ns",
            "range": "± 155377.85830846443"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5620409,
            "unit": "ns",
            "range": "± 375657.4455309362"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 52615.463917525776,
            "unit": "ns",
            "range": "± 4918.890885449211"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7346253.333333333,
            "unit": "ns",
            "range": "± 127240.07604674304"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20079360,
            "unit": "ns",
            "range": "± 219739.9755555253"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49871115.384615384,
            "unit": "ns",
            "range": "± 195963.59290334964"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100518778.57142857,
            "unit": "ns",
            "range": "± 841461.4659841909"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 202638226.66666666,
            "unit": "ns",
            "range": "± 2283477.1785486233"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5018411.5625,
            "unit": "ns",
            "range": "± 70150.75576305199"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1556582.798549107,
            "unit": "ns",
            "range": "± 4463.783928349964"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1182224.3359375,
            "unit": "ns",
            "range": "± 5462.079714580958"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2662697.9073660714,
            "unit": "ns",
            "range": "± 10005.532219360231"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 836289.6223958334,
            "unit": "ns",
            "range": "± 1983.6484135273602"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 771994.0730168269,
            "unit": "ns",
            "range": "± 1307.9278573035851"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3236550,
            "unit": "ns",
            "range": "± 78676.37752815252"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3466836.7346938774,
            "unit": "ns",
            "range": "± 138156.65428219148"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4105313.1578947366,
            "unit": "ns",
            "range": "± 141364.17828881435"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4433733.333333333,
            "unit": "ns",
            "range": "± 208380.31010876637"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7606648.387096774,
            "unit": "ns",
            "range": "± 231261.66978982592"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 335520.4081632653,
            "unit": "ns",
            "range": "± 13139.317263970199"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 283274.358974359,
            "unit": "ns",
            "range": "± 14606.824911640928"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 250755.05050505052,
            "unit": "ns",
            "range": "± 15824.428117708561"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5400307.142857143,
            "unit": "ns",
            "range": "± 66709.55950739242"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3850978.5714285714,
            "unit": "ns",
            "range": "± 66001.83189265896"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26648.453608247422,
            "unit": "ns",
            "range": "± 2915.908713493883"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 111947.31182795699,
            "unit": "ns",
            "range": "± 8932.118296373043"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 109056,
            "unit": "ns",
            "range": "± 11617.853032764233"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 198672.1649484536,
            "unit": "ns",
            "range": "± 19523.974270261726"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 10291.919191919193,
            "unit": "ns",
            "range": "± 1462.4327486841325"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 27114.285714285714,
            "unit": "ns",
            "range": "± 2605.663933833846"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tkiapril@users.noreply.github.com",
            "name": "Seo Myunggyun (Jonathan)",
            "username": "tkiapril"
          },
          "committer": {
            "email": "tkiapril@users.noreply.github.com",
            "name": "Seo Myunggyun (Jonathan)",
            "username": "tkiapril"
          },
          "distinct": true,
          "id": "8056ce90c481cdbbfdcaeb46df435d23a9cbcbb1",
          "message": "tslib: accounts have async getPublicKey i/o publicKey\n\nCo-authored-by: Hong Minhee (洪 民憙) <hong.minhee@planetariumhq.com>",
          "timestamp": "2023-04-05T16:41:41+09:00",
          "tree_id": "083841b01eeb4aa37dbed492698016aad0322a24",
          "url": "https://github.com/planetarium/libplanet/commit/8056ce90c481cdbbfdcaeb46df435d23a9cbcbb1"
        },
        "date": 1680681477483,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1356422.2222222222,
            "unit": "ns",
            "range": "± 138000.69473025034"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2438848.8372093025,
            "unit": "ns",
            "range": "± 89849.53128661969"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2212080.8080808083,
            "unit": "ns",
            "range": "± 165745.9973825007"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5137719.047619048,
            "unit": "ns",
            "range": "± 118259.56459858804"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 42218.75,
            "unit": "ns",
            "range": "± 1957.555569970827"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6973750,
            "unit": "ns",
            "range": "± 124146.97510842311"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17533026.666666668,
            "unit": "ns",
            "range": "± 107765.33677172734"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 44577491.666666664,
            "unit": "ns",
            "range": "± 177277.76591518405"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 89017686.66666667,
            "unit": "ns",
            "range": "± 922441.0928669233"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 178321313.33333334,
            "unit": "ns",
            "range": "± 1218365.5127533225"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4815458.75,
            "unit": "ns",
            "range": "± 8379.335336998492"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1512083.7109375,
            "unit": "ns",
            "range": "± 1849.6704924540866"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1158753.3333333333,
            "unit": "ns",
            "range": "± 1412.1764659449518"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2547826.6666666665,
            "unit": "ns",
            "range": "± 10119.83306370851"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 821573.73046875,
            "unit": "ns",
            "range": "± 1954.568842716551"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 728735.5338541666,
            "unit": "ns",
            "range": "± 612.6945429842174"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2952996,
            "unit": "ns",
            "range": "± 77500.40580538918"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3042424.3243243243,
            "unit": "ns",
            "range": "± 102056.90788696003"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3896388.2352941176,
            "unit": "ns",
            "range": "± 77316.47530081267"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4046170.588235294,
            "unit": "ns",
            "range": "± 82791.68711822675"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6955912.5,
            "unit": "ns",
            "range": "± 177651.3104309284"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 294845.45454545453,
            "unit": "ns",
            "range": "± 7156.663712780943"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 237194.73684210525,
            "unit": "ns",
            "range": "± 8128.49334027717"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 217918.18181818182,
            "unit": "ns",
            "range": "± 8766.689710765888"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5214373.333333333,
            "unit": "ns",
            "range": "± 30879.939550890747"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3614166.6666666665,
            "unit": "ns",
            "range": "± 31652.841593644967"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15950.537634408602,
            "unit": "ns",
            "range": "± 1376.5602733147052"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 77723.68421052632,
            "unit": "ns",
            "range": "± 4441.635948523486"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 70387.5,
            "unit": "ns",
            "range": "± 5155.625440643505"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 156924.74226804124,
            "unit": "ns",
            "range": "± 12900.444363533852"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5308.421052631579,
            "unit": "ns",
            "range": "± 932.813538401117"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16061.855670103092,
            "unit": "ns",
            "range": "± 1805.3994998204387"
          }
        ]
      }
    ]
  }
}