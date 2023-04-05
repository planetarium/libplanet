window.BENCHMARK_DATA = {
  "lastUpdate": 1680686023543,
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
          "id": "a5d51a6bcad69927aab3783ce460ee9d0b62fa41",
          "message": "tslib: accounts have async getPublicKey i/o publicKey\n\nCo-authored-by: Hong Minhee (洪 民憙) <hong.minhee@planetariumhq.com>",
          "timestamp": "2023-04-05T16:39:45+09:00",
          "tree_id": "231eef32ef7a06676c1bab568527df42b407cb29",
          "url": "https://github.com/planetarium/libplanet/commit/a5d51a6bcad69927aab3783ce460ee9d0b62fa41"
        },
        "date": 1680681496954,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1268973,
            "unit": "ns",
            "range": "± 131524.03310360576"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2363527.5362318843,
            "unit": "ns",
            "range": "± 113860.84629424015"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1988387.5,
            "unit": "ns",
            "range": "± 138347.79837709552"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5157089.50617284,
            "unit": "ns",
            "range": "± 268877.8406075017"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 52686.868686868685,
            "unit": "ns",
            "range": "± 13843.547428349"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7492366.666666667,
            "unit": "ns",
            "range": "± 102362.44893700499"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18913263.333333332,
            "unit": "ns",
            "range": "± 238122.63607125595"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47067383.333333336,
            "unit": "ns",
            "range": "± 601905.7812679735"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 94732223.07692307,
            "unit": "ns",
            "range": "± 1529601.7254794608"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 194479764.70588234,
            "unit": "ns",
            "range": "± 3714713.6437317035"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5048617.135416667,
            "unit": "ns",
            "range": "± 54893.42632456534"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1568845.103236607,
            "unit": "ns",
            "range": "± 6052.097839444675"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1073838.1184895833,
            "unit": "ns",
            "range": "± 6994.588994376541"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2574684.2447916665,
            "unit": "ns",
            "range": "± 17450.48324513359"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 864727.490234375,
            "unit": "ns",
            "range": "± 11043.674474598014"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 739400.3455528846,
            "unit": "ns",
            "range": "± 3810.426119751892"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3150493.5483870967,
            "unit": "ns",
            "range": "± 93908.1534815938"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3228216.326530612,
            "unit": "ns",
            "range": "± 192994.22975930426"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4006850,
            "unit": "ns",
            "range": "± 98412.06734948717"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4060090.8163265307,
            "unit": "ns",
            "range": "± 283157.97058628465"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7040239.130434782,
            "unit": "ns",
            "range": "± 172127.13784010836"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 259648.42105263157,
            "unit": "ns",
            "range": "± 17594.96944038445"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 198435.59322033898,
            "unit": "ns",
            "range": "± 7713.529598449737"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 162881.25,
            "unit": "ns",
            "range": "± 2944.4226938399997"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4982935.714285715,
            "unit": "ns",
            "range": "± 48786.07315685424"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3773565.3846153845,
            "unit": "ns",
            "range": "± 102800.98031558917"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13942.553191489362,
            "unit": "ns",
            "range": "± 3254.3928744100963"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 70809,
            "unit": "ns",
            "range": "± 17082.095860575744"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 58958,
            "unit": "ns",
            "range": "± 17113.572969955156"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 166157.7319587629,
            "unit": "ns",
            "range": "± 20058.507313250877"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4691.7525773195875,
            "unit": "ns",
            "range": "± 1795.4032800862126"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11785.263157894737,
            "unit": "ns",
            "range": "± 2317.645926964936"
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
          "id": "d7b24c2de86a7795beb0516b034132901f049711",
          "message": "Web3Account\n\nCo-authored-by: Hong Minhee (洪 民憙) <hong.minhee@planetariumhq.com>",
          "timestamp": "2023-04-05T17:25:50+09:00",
          "tree_id": "dbf942dc4382f805b444e2a8793372e571b21e92",
          "url": "https://github.com/planetarium/libplanet/commit/d7b24c2de86a7795beb0516b034132901f049711"
        },
        "date": 1680683967394,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1283395.8333333333,
            "unit": "ns",
            "range": "± 91356.38475272387"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2404301.0204081633,
            "unit": "ns",
            "range": "± 94805.61059884804"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2249985.714285714,
            "unit": "ns",
            "range": "± 30933.591577960808"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5094122.916666667,
            "unit": "ns",
            "range": "± 198535.40574918344"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 42470,
            "unit": "ns",
            "range": "± 1632.5848625211902"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6841566.666666667,
            "unit": "ns",
            "range": "± 16227.607281889654"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17396536.666666668,
            "unit": "ns",
            "range": "± 165399.9087349319"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 43879106.666666664,
            "unit": "ns",
            "range": "± 238966.68167838993"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 87345561.53846154,
            "unit": "ns",
            "range": "± 502436.5574187145"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 177415250,
            "unit": "ns",
            "range": "± 1569889.0111319104"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4818862.890625,
            "unit": "ns",
            "range": "± 12026.67070638649"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1519824.1536458333,
            "unit": "ns",
            "range": "± 2325.2186529316673"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1135428.9760044643,
            "unit": "ns",
            "range": "± 2047.397152930955"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2576733.4635416665,
            "unit": "ns",
            "range": "± 6361.785620163068"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 834191.8684895834,
            "unit": "ns",
            "range": "± 1203.5031583719929"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 725739.9739583334,
            "unit": "ns",
            "range": "± 575.3763444154587"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2866805.882352941,
            "unit": "ns",
            "range": "± 58547.859382178045"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3128759.090909091,
            "unit": "ns",
            "range": "± 117444.80211290912"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3873407.6923076925,
            "unit": "ns",
            "range": "± 41412.80924099172"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4007960,
            "unit": "ns",
            "range": "± 81410.93551269775"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7004404.761904762,
            "unit": "ns",
            "range": "± 162831.06115293383"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 290508.3333333333,
            "unit": "ns",
            "range": "± 2526.0311425897607"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 238345,
            "unit": "ns",
            "range": "± 5188.496892164435"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 211291.11111111112,
            "unit": "ns",
            "range": "± 8044.162825027572"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5209680,
            "unit": "ns",
            "range": "± 43108.785978863154"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3491721.4285714286,
            "unit": "ns",
            "range": "± 39719.752469819556"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15781.25,
            "unit": "ns",
            "range": "± 1397.3141529753655"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 78094.20289855072,
            "unit": "ns",
            "range": "± 3477.528029149569"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 69138.42105263157,
            "unit": "ns",
            "range": "± 4096.933548604338"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 150335.7142857143,
            "unit": "ns",
            "range": "± 18482.470100907176"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4959.79381443299,
            "unit": "ns",
            "range": "± 631.2454280056268"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14995.698924731183,
            "unit": "ns",
            "range": "± 1327.5438237664964"
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
          "id": "80d4528f5fe2a2608955fb3c31b4149d8ad13d80",
          "message": "Web3Account\n\nCo-authored-by: Hong Minhee (洪 民憙) <hong.minhee@planetariumhq.com>",
          "timestamp": "2023-04-05T17:41:58+09:00",
          "tree_id": "574200cd6e8e2d3d35e7eec95a0ed9e105c50d2c",
          "url": "https://github.com/planetarium/libplanet/commit/80d4528f5fe2a2608955fb3c31b4149d8ad13d80"
        },
        "date": 1680685457856,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1725556.25,
            "unit": "ns",
            "range": "± 221789.7410244311"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3231376.086956522,
            "unit": "ns",
            "range": "± 248323.24660912802"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2654253.846153846,
            "unit": "ns",
            "range": "± 205868.20935717985"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7239503.092783505,
            "unit": "ns",
            "range": "± 505489.6352493311"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 61578.125,
            "unit": "ns",
            "range": "± 11369.63826786522"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8393513.333333334,
            "unit": "ns",
            "range": "± 148045.42192307382"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25562841.07142857,
            "unit": "ns",
            "range": "± 1081333.2628627387"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 65830127.692307696,
            "unit": "ns",
            "range": "± 3041804.1155449427"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 123918060,
            "unit": "ns",
            "range": "± 2738796.83464723"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 253735680.6451613,
            "unit": "ns",
            "range": "± 7611643.734543342"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6272629.827008928,
            "unit": "ns",
            "range": "± 162629.51227194772"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1968277.6592548077,
            "unit": "ns",
            "range": "± 53356.2385141526"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1471009.3315972222,
            "unit": "ns",
            "range": "± 40087.377793911466"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3222023.28125,
            "unit": "ns",
            "range": "± 50880.264913823834"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1048855.9505208333,
            "unit": "ns",
            "range": "± 10960.331881987255"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 969278.9899553572,
            "unit": "ns",
            "range": "± 9186.386391725708"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4039716.6666666665,
            "unit": "ns",
            "range": "± 240944.68623433352"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4413697.894736842,
            "unit": "ns",
            "range": "± 371608.04218530754"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5374009.782608695,
            "unit": "ns",
            "range": "± 462665.6070740324"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5159084.615384615,
            "unit": "ns",
            "range": "± 287134.72405942786"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10523087.096774194,
            "unit": "ns",
            "range": "± 1028007.5559299592"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 409367.04545454547,
            "unit": "ns",
            "range": "± 30688.48569722388"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 336719.1011235955,
            "unit": "ns",
            "range": "± 31942.351753533676"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 308666.2921348315,
            "unit": "ns",
            "range": "± 23435.680566083538"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6990044.318181818,
            "unit": "ns",
            "range": "± 441418.9123431873"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5078505.263157895,
            "unit": "ns",
            "range": "± 329574.6783189294"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21881.632653061224,
            "unit": "ns",
            "range": "± 3834.2823341929616"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 99756.25,
            "unit": "ns",
            "range": "± 12065.163531947323"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 105301.06382978724,
            "unit": "ns",
            "range": "± 15738.36825770819"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 237738.04347826086,
            "unit": "ns",
            "range": "± 38776.75423056228"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8993.617021276596,
            "unit": "ns",
            "range": "± 1486.195149969607"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23702,
            "unit": "ns",
            "range": "± 5666.291966221353"
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
          "id": "bb27b41239cb562d032dc82d863282a12dd23127",
          "message": "Web3Account\n\nCo-authored-by: Hong Minhee (洪 民憙) <hong.minhee@planetariumhq.com>",
          "timestamp": "2023-04-05T17:49:40+09:00",
          "tree_id": "dcd6247b6f696bc0505218279a7ac03daacd50b4",
          "url": "https://github.com/planetarium/libplanet/commit/bb27b41239cb562d032dc82d863282a12dd23127"
        },
        "date": 1680685516550,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1202413.2653061224,
            "unit": "ns",
            "range": "± 102409.06817708068"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2212043.396226415,
            "unit": "ns",
            "range": "± 91882.80057818211"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1880953.2608695652,
            "unit": "ns",
            "range": "± 107200.1337245834"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4803243.333333333,
            "unit": "ns",
            "range": "± 132509.49916068692"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34953.1914893617,
            "unit": "ns",
            "range": "± 3447.5081269691286"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7152110,
            "unit": "ns",
            "range": "± 162481.7719331197"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18596920,
            "unit": "ns",
            "range": "± 313630.8640059885"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 44981015.384615384,
            "unit": "ns",
            "range": "± 322142.91302193253"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 91514177.27272727,
            "unit": "ns",
            "range": "± 2141101.0854301816"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 182095455,
            "unit": "ns",
            "range": "± 3968487.2191958805"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5070901.979166667,
            "unit": "ns",
            "range": "± 25942.431003598875"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1537346.796875,
            "unit": "ns",
            "range": "± 7447.604655371649"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1083750.1822916667,
            "unit": "ns",
            "range": "± 3165.7270138012336"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2649047.293526786,
            "unit": "ns",
            "range": "± 9120.879437731315"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 839519.5963541666,
            "unit": "ns",
            "range": "± 4382.380165696067"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 734931.2955729166,
            "unit": "ns",
            "range": "± 3307.7004813272742"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2851990.3225806453,
            "unit": "ns",
            "range": "± 124840.14494567913"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3058541.1764705884,
            "unit": "ns",
            "range": "± 141969.01095040794"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3832431.25,
            "unit": "ns",
            "range": "± 70861.87238800096"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3862766.153846154,
            "unit": "ns",
            "range": "± 180317.229380718"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6524947.05882353,
            "unit": "ns",
            "range": "± 133085.52286803708"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 254254.54545454544,
            "unit": "ns",
            "range": "± 9021.81992018819"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 203693.5483870968,
            "unit": "ns",
            "range": "± 5683.950239277315"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 167267.2131147541,
            "unit": "ns",
            "range": "± 7228.640289650501"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4963614.285714285,
            "unit": "ns",
            "range": "± 78991.50740274705"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3510363.1578947366,
            "unit": "ns",
            "range": "± 77499.01942409275"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11153.191489361701,
            "unit": "ns",
            "range": "± 1502.1634668760628"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59545.26315789474,
            "unit": "ns",
            "range": "± 5776.212563518361"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44667.816091954024,
            "unit": "ns",
            "range": "± 3367.750413778533"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 145281.6326530612,
            "unit": "ns",
            "range": "± 15416.882879471294"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3422.1649484536083,
            "unit": "ns",
            "range": "± 737.0750566769017"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10416.129032258064,
            "unit": "ns",
            "range": "± 1490.7169505469394"
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
          "id": "303361afc30ae49df7b6f27b0a2b80bab0d9d867",
          "message": "Web3Account\n\nCo-authored-by: Hong Minhee (洪 民憙) <hong.minhee@planetariumhq.com>",
          "timestamp": "2023-04-05T17:51:00+09:00",
          "tree_id": "dcd6247b6f696bc0505218279a7ac03daacd50b4",
          "url": "https://github.com/planetarium/libplanet/commit/303361afc30ae49df7b6f27b0a2b80bab0d9d867"
        },
        "date": 1680685957066,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1633913.1313131314,
            "unit": "ns",
            "range": "± 319143.8808163863"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3364898.969072165,
            "unit": "ns",
            "range": "± 509935.230669634"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2571950,
            "unit": "ns",
            "range": "± 347489.94237466267"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7287978.787878788,
            "unit": "ns",
            "range": "± 786729.778995113"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 59103.22580645161,
            "unit": "ns",
            "range": "± 12446.64658533359"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8189865.656565657,
            "unit": "ns",
            "range": "± 857259.6209947631"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22441737,
            "unit": "ns",
            "range": "± 2244558.2226081323"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 64287604.166666664,
            "unit": "ns",
            "range": "± 3831127.0399169037"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 127679448.45360824,
            "unit": "ns",
            "range": "± 8098847.526154485"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 256941107.14285713,
            "unit": "ns",
            "range": "± 14848613.127055291"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6140279.791666667,
            "unit": "ns",
            "range": "± 110874.6586818634"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1912009.4360351562,
            "unit": "ns",
            "range": "± 31372.022248764955"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1504680.9635416667,
            "unit": "ns",
            "range": "± 44535.58151018447"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3193477.097800926,
            "unit": "ns",
            "range": "± 88086.52797565529"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1059292.5903320312,
            "unit": "ns",
            "range": "± 32785.043714641455"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 969913.4508634869,
            "unit": "ns",
            "range": "± 32319.00770912437"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3834656.8421052634,
            "unit": "ns",
            "range": "± 357251.3018759333"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3902161.855670103,
            "unit": "ns",
            "range": "± 476792.14973685064"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4462374.742268041,
            "unit": "ns",
            "range": "± 497466.262262856"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5133520.833333333,
            "unit": "ns",
            "range": "± 503266.4509124715"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8849926.530612245,
            "unit": "ns",
            "range": "± 902477.8904737914"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 401280.6451612903,
            "unit": "ns",
            "range": "± 49987.740362370496"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 313379.78723404254,
            "unit": "ns",
            "range": "± 41633.249170745534"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 316030.2083333333,
            "unit": "ns",
            "range": "± 52283.96578159385"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6661220.4301075265,
            "unit": "ns",
            "range": "± 445623.19834604755"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4718429.591836735,
            "unit": "ns",
            "range": "± 449360.8930559924"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 31316,
            "unit": "ns",
            "range": "± 11479.060602820788"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 117221.42857142857,
            "unit": "ns",
            "range": "± 26384.01284908379"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 96506.25,
            "unit": "ns",
            "range": "± 18960.500840042787"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 243338.94736842104,
            "unit": "ns",
            "range": "± 38183.48839635035"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7116.483516483517,
            "unit": "ns",
            "range": "± 1264.93423072451"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 29564.646464646463,
            "unit": "ns",
            "range": "± 11149.186051844112"
          }
        ]
      }
    ]
  }
}