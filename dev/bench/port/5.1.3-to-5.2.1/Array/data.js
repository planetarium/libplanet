window.BENCHMARK_DATA = {
  "lastUpdate": 1722329189073,
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
          "id": "210708fbd38c9f1ba564240becc80e38a099d224",
          "message": "Merge tag '5.1.3' into port/5.1.3-to-5.2.1",
          "timestamp": "2024-07-30T17:37:26+09:00",
          "tree_id": "2da14b4d3ce21e018af2e714e4d069176d30fb52",
          "url": "https://github.com/planetarium/libplanet/commit/210708fbd38c9f1ba564240becc80e38a099d224"
        },
        "date": 1722329175882,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10813609.307692308,
            "unit": "ns",
            "range": "± 123350.07503063831"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26500417.07142857,
            "unit": "ns",
            "range": "± 101756.85624487748"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67501255.85714285,
            "unit": "ns",
            "range": "± 195203.8329886942"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 135328186.46666667,
            "unit": "ns",
            "range": "± 315462.75764385675"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 271938256.2692308,
            "unit": "ns",
            "range": "± 219873.72895981075"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 13810.954545454546,
            "unit": "ns",
            "range": "± 435.02371278105994"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 109619.73809523809,
            "unit": "ns",
            "range": "± 3939.079699746171"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 105720.58490566038,
            "unit": "ns",
            "range": "± 4373.079932223276"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 92984.15,
            "unit": "ns",
            "range": "± 3258.525421972495"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3017741.7422680412,
            "unit": "ns",
            "range": "± 188013.9713873944"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2800606.1938775512,
            "unit": "ns",
            "range": "± 164872.04429806728"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 4929.581395348837,
            "unit": "ns",
            "range": "± 434.0896211373944"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 26140.494252873563,
            "unit": "ns",
            "range": "± 1462.1679736289266"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22504.3661971831,
            "unit": "ns",
            "range": "± 1098.4436813632099"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 30099.884210526317,
            "unit": "ns",
            "range": "± 4985.003264821394"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1165.2307692307693,
            "unit": "ns",
            "range": "± 198.49215360496"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4779.829787234043,
            "unit": "ns",
            "range": "± 515.9373896810755"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 690666.7555555556,
            "unit": "ns",
            "range": "± 49722.320421033604"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1284612.5238095238,
            "unit": "ns",
            "range": "± 44262.61522766252"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1076812.536231884,
            "unit": "ns",
            "range": "± 51882.36594609107"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9506448.81,
            "unit": "ns",
            "range": "± 1435902.809386603"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2171347.4137931033,
            "unit": "ns",
            "range": "± 62061.00034788194"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2320121.896551724,
            "unit": "ns",
            "range": "± 67953.77247508823"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2597819.794117647,
            "unit": "ns",
            "range": "± 70444.48340124618"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2305109.476190476,
            "unit": "ns",
            "range": "± 54435.75433538057"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2990129.1875,
            "unit": "ns",
            "range": "± 130913.44384864945"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 2992254.358816964,
            "unit": "ns",
            "range": "± 48087.19426320232"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 925456.9504557292,
            "unit": "ns",
            "range": "± 6731.808853156881"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 616624.8921875,
            "unit": "ns",
            "range": "± 4375.491071913928"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1642148.6240234375,
            "unit": "ns",
            "range": "± 10099.524618251362"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 473017.58619791665,
            "unit": "ns",
            "range": "± 678.5800904888499"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 429911.89251302084,
            "unit": "ns",
            "range": "± 1169.5028294837055"
          }
        ]
      }
    ]
  }
}