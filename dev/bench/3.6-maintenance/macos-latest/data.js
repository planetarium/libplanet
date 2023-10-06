window.BENCHMARK_DATA = {
  "lastUpdate": 1696598030861,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b13ef3155389100c218a045fbdc3051e23e3c669",
          "message": "Merge pull request #3451 from greymistcube/release/3.6.0\n\n🚀 Release 3.6.0",
          "timestamp": "2023-10-06T18:26:22+09:00",
          "tree_id": "45b24eea1bbbdcc0b75e430f611660d011258ba1",
          "url": "https://github.com/planetarium/libplanet/commit/b13ef3155389100c218a045fbdc3051e23e3c669"
        },
        "date": 1696597938806,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7599950.346153846,
            "unit": "ns",
            "range": "± 73385.29332893858"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19106718.353535354,
            "unit": "ns",
            "range": "± 1149229.9960710718"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48143189.75454546,
            "unit": "ns",
            "range": "± 2028699.2659099211"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 91076553,
            "unit": "ns",
            "range": "± 1590954.094596384"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 186322447.85714287,
            "unit": "ns",
            "range": "± 2868180.208308259"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36938.77011494253,
            "unit": "ns",
            "range": "± 4947.2562508581095"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 218806.087628866,
            "unit": "ns",
            "range": "± 19024.801565299233"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 213497.83695652173,
            "unit": "ns",
            "range": "± 14224.964796323442"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 192213.53191489363,
            "unit": "ns",
            "range": "± 13843.402121978486"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3645618.652173913,
            "unit": "ns",
            "range": "± 88413.3132902756"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3401493.925,
            "unit": "ns",
            "range": "± 119913.25435088432"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16472.072164948455,
            "unit": "ns",
            "range": "± 2772.9249420641204"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 72483.55208333333,
            "unit": "ns",
            "range": "± 12633.497009616758"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 74550.73711340207,
            "unit": "ns",
            "range": "± 9735.742490916733"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 74190.76373626373,
            "unit": "ns",
            "range": "± 11357.601160882095"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5944.75,
            "unit": "ns",
            "range": "± 1309.6279825322836"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16327.005376344086,
            "unit": "ns",
            "range": "± 3150.5058621546445"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1168864.2577319588,
            "unit": "ns",
            "range": "± 116893.33756483928"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2280880.10989011,
            "unit": "ns",
            "range": "± 127636.61053200568"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1612200.91,
            "unit": "ns",
            "range": "± 128575.63101910688"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8004858.781609195,
            "unit": "ns",
            "range": "± 1206937.0621534172"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2822630.729508197,
            "unit": "ns",
            "range": "± 124125.75909111874"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2939275.5,
            "unit": "ns",
            "range": "± 106688.07222242131"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3525729.3139534886,
            "unit": "ns",
            "range": "± 115467.87327862401"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3505266.303030303,
            "unit": "ns",
            "range": "± 163973.05316835723"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10886096.641304348,
            "unit": "ns",
            "range": "± 970153.1869841748"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4704964.5071134865,
            "unit": "ns",
            "range": "± 395517.9763397973"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1516806.8472975127,
            "unit": "ns",
            "range": "± 125434.98843700955"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 915399.5666454082,
            "unit": "ns",
            "range": "± 71805.07254729248"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2278685.101859715,
            "unit": "ns",
            "range": "± 211912.92182779772"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 677451.7055951287,
            "unit": "ns",
            "range": "± 13085.503292651369"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 603537.9355024858,
            "unit": "ns",
            "range": "± 14523.471589531688"
          }
        ]
      }
    ]
  }
}