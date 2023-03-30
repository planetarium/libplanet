window.BENCHMARK_DATA = {
  "lastUpdate": 1680156175184,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "tki@tkis-MacBook-Pro.local",
            "name": "tki"
          },
          "committer": {
            "email": "tki@tkis-MacBook-Pro.local",
            "name": "tki"
          },
          "distinct": true,
          "id": "e5de587bc316b6ec9203f496c494a0fb255ae1b4",
          "message": "temp: genesis validator inited with pk",
          "timestamp": "2023-03-30T14:47:51+09:00",
          "tree_id": "c07a35a90aacf41977de0ba85bb91b0ee0a85f74",
          "url": "https://github.com/planetarium/libplanet/commit/e5de587bc316b6ec9203f496c494a0fb255ae1b4"
        },
        "date": 1680156155031,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3370404.44,
            "unit": "ns",
            "range": "± 89181.94352234836"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5271075.861111111,
            "unit": "ns",
            "range": "± 175628.09563069875"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 24544636,
            "unit": "ns",
            "range": "± 562057.5534072159"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6417126.230769231,
            "unit": "ns",
            "range": "± 169028.72730096686"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 28522982.157894738,
            "unit": "ns",
            "range": "± 616345.3934923594"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7800289.25,
            "unit": "ns",
            "range": "± 169670.39833620298"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21091060.5,
            "unit": "ns",
            "range": "± 356554.41060748894"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52786067.86666667,
            "unit": "ns",
            "range": "± 755983.4248353849"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 105602556,
            "unit": "ns",
            "range": "± 1821756.58567968"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 210499289.53333333,
            "unit": "ns",
            "range": "± 3715003.2273077285"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1405335.6559139786,
            "unit": "ns",
            "range": "± 79525.63119516257"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2761959.5625,
            "unit": "ns",
            "range": "± 127791.22776285894"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2289682.8194444445,
            "unit": "ns",
            "range": "± 112172.26582815948"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5251112.94117647,
            "unit": "ns",
            "range": "± 105016.07400802422"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 51075.64772727273,
            "unit": "ns",
            "range": "± 2827.423326560949"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5874410.733854166,
            "unit": "ns",
            "range": "± 45096.14033445006"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1844685.4467447917,
            "unit": "ns",
            "range": "± 7812.2569898659685"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1361755.3858072916,
            "unit": "ns",
            "range": "± 6446.144145881499"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2629879.7971540177,
            "unit": "ns",
            "range": "± 6327.763169222421"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 838255.1718098958,
            "unit": "ns",
            "range": "± 1298.867013351115"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 765647.9977213541,
            "unit": "ns",
            "range": "± 987.0829561932073"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 203244.34146341463,
            "unit": "ns",
            "range": "± 6316.538868754612"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 208056.16129032258,
            "unit": "ns",
            "range": "± 9481.516780840619"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 189231.51,
            "unit": "ns",
            "range": "± 11972.242799340629"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 12424138,
            "unit": "ns",
            "range": "± 251338.27121953593"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9749106.12,
            "unit": "ns",
            "range": "± 250673.40123211447"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21131.8,
            "unit": "ns",
            "range": "± 2254.0487289187936"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 58349.241758241755,
            "unit": "ns",
            "range": "± 4837.698751221516"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 41129.403846153844,
            "unit": "ns",
            "range": "± 1670.303896966121"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 104198.32474226804,
            "unit": "ns",
            "range": "± 15276.233304010128"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6604.25,
            "unit": "ns",
            "range": "± 969.9282339159781"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20635.340206185567,
            "unit": "ns",
            "range": "± 2164.687433588844"
          }
        ]
      }
    ]
  }
}