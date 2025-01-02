window.BENCHMARK_DATA = {
  "lastUpdate": 1735800572144,
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
          "id": "062b3c3c638f25bc55ee47f908b08c8972766274",
          "message": "temp: remove static validator from NetMQTransport\n\n(cherry picked from commit d176fe70fd9eb51970e4c8f704a8d7364e326408)",
          "timestamp": "2024-12-17T17:42:39+09:00",
          "tree_id": "620cbdda96fb6d454ac29d56e5a4469a5e845cff",
          "url": "https://github.com/planetarium/libplanet/commit/062b3c3c638f25bc55ee47f908b08c8972766274"
        },
        "date": 1735800294903,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10494503.75,
            "unit": "ns",
            "range": "± 88810.46713097914"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26228527,
            "unit": "ns",
            "range": "± 145554.04295735233"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 66624580.5,
            "unit": "ns",
            "range": "± 55848.55999383167"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 133478234.23076923,
            "unit": "ns",
            "range": "± 173755.49957490742"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 271486350.5714286,
            "unit": "ns",
            "range": "± 415811.61943855044"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 13356.5,
            "unit": "ns",
            "range": "± 428.21476195122136"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 53575.895348837206,
            "unit": "ns",
            "range": "± 2915.5244509716267"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 106585.96296296296,
            "unit": "ns",
            "range": "± 4488.225072396567"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 94934.66666666667,
            "unit": "ns",
            "range": "± 2921.965783794647"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2820551.12,
            "unit": "ns",
            "range": "± 197035.4024154434"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2629835.1464646463,
            "unit": "ns",
            "range": "± 171816.02729012643"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 5215.304347826087,
            "unit": "ns",
            "range": "± 731.944613576414"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 26773.955555555556,
            "unit": "ns",
            "range": "± 2114.3271350378955"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22861.041666666668,
            "unit": "ns",
            "range": "± 1930.7235944706365"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 31013.64893617021,
            "unit": "ns",
            "range": "± 5517.612117354708"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1281.2659574468084,
            "unit": "ns",
            "range": "± 260.09639137661634"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4924.521276595745,
            "unit": "ns",
            "range": "± 663.4495828658003"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 673938.5054945055,
            "unit": "ns",
            "range": "± 43975.91365114256"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1265731.6551724137,
            "unit": "ns",
            "range": "± 36853.176599151884"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1038624.4606741572,
            "unit": "ns",
            "range": "± 56372.90640943334"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8634617.3,
            "unit": "ns",
            "range": "± 1312607.5480414329"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2126566.6153846155,
            "unit": "ns",
            "range": "± 22048.675211670736"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2251567.705882353,
            "unit": "ns",
            "range": "± 71914.97112753721"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2550461.846153846,
            "unit": "ns",
            "range": "± 33831.78054198486"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2232313.4324324327,
            "unit": "ns",
            "range": "± 71532.15521029707"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2805014.0344827585,
            "unit": "ns",
            "range": "± 123144.4259148319"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3008813.7260416667,
            "unit": "ns",
            "range": "± 52025.91726520823"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 922717.7166015625,
            "unit": "ns",
            "range": "± 5502.916234803094"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 617144.8018880208,
            "unit": "ns",
            "range": "± 4345.400407634672"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1647231.5920222355,
            "unit": "ns",
            "range": "± 12120.906525112776"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 461712.23932291666,
            "unit": "ns",
            "range": "± 707.4172731608006"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 418945.9960611979,
            "unit": "ns",
            "range": "± 1203.3529044675004"
          }
        ]
      }
    ]
  }
}