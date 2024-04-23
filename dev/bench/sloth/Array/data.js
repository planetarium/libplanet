window.BENCHMARK_DATA = {
  "lastUpdate": 1713837678105,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
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
          "id": "3c14cb2120d7aa40100f05537b15c3d7bc9b3d0b",
          "message": "Merge pull request #3760 from OnedgeLee/feature/srh-istore\n\nAdd tests for NestStateRootHash",
          "timestamp": "2024-04-18T17:04:59+09:00",
          "tree_id": "37cfb32103ba30aa339d0c4c9190dae1cb4d175e",
          "url": "https://github.com/planetarium/libplanet/commit/3c14cb2120d7aa40100f05537b15c3d7bc9b3d0b"
        },
        "date": 1713837643235,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5733682.733333333,
            "unit": "ns",
            "range": "± 54986.76929364355"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14182219.92857143,
            "unit": "ns",
            "range": "± 33107.903500905566"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 35940506,
            "unit": "ns",
            "range": "± 133015.74931375607"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 72664440.71428572,
            "unit": "ns",
            "range": "± 229921.45112471934"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 146170458.2857143,
            "unit": "ns",
            "range": "± 554428.8620965901"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 85916.04347826086,
            "unit": "ns",
            "range": "± 3097.1403868480693"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 111237.75,
            "unit": "ns",
            "range": "± 4551.635679021933"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 106612.56060606061,
            "unit": "ns",
            "range": "± 4987.008069061627"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 91961.41666666667,
            "unit": "ns",
            "range": "± 1773.1052573446364"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3066805.620689655,
            "unit": "ns",
            "range": "± 167176.2692317249"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2719222.62,
            "unit": "ns",
            "range": "± 172574.25175753274"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 5405.739583333333,
            "unit": "ns",
            "range": "± 869.9003844335966"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 27550.133333333335,
            "unit": "ns",
            "range": "± 2348.680538974448"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22876.85106382979,
            "unit": "ns",
            "range": "± 1432.0172699553834"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 30990.1875,
            "unit": "ns",
            "range": "± 5890.268411920944"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1222.7371134020618,
            "unit": "ns",
            "range": "± 358.2158559326776"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 5095.333333333333,
            "unit": "ns",
            "range": "± 694.8345086292293"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1166673.5555555555,
            "unit": "ns",
            "range": "± 123633.10526841367"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1849502.3086419753,
            "unit": "ns",
            "range": "± 97060.85693067031"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1560411.8673469387,
            "unit": "ns",
            "range": "± 150585.40974152664"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10854362.58,
            "unit": "ns",
            "range": "± 2164971.002154803"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2664598.9615384615,
            "unit": "ns",
            "range": "± 43971.91603856449"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2839708.6428571427,
            "unit": "ns",
            "range": "± 30796.98824837146"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3414024.0714285714,
            "unit": "ns",
            "range": "± 57647.767338799444"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3394059,
            "unit": "ns",
            "range": "± 91604.78422129911"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12770616.25,
            "unit": "ns",
            "range": "± 2073414.8773819425"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3006988.8658203124,
            "unit": "ns",
            "range": "± 67742.64534657382"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 917660.5159737723,
            "unit": "ns",
            "range": "± 5482.097400699747"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 618448.9141927083,
            "unit": "ns",
            "range": "± 5858.698523692836"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1642688.1734375,
            "unit": "ns",
            "range": "± 13864.813656862882"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 464800.151953125,
            "unit": "ns",
            "range": "± 871.0574401219426"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 422834.9866536458,
            "unit": "ns",
            "range": "± 1669.136839197822"
          }
        ]
      }
    ]
  }
}