window.BENCHMARK_DATA = {
  "lastUpdate": 1684483285662,
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
          "id": "3bf75a4fb6ee1fe6865c8d8f2efca983444d9d4a",
          "message": "Merge pull request #3190 from greymistcube/release/1.3.0\n\n🚀 Release 1.3.0",
          "timestamp": "2023-05-19T16:15:18+09:00",
          "tree_id": "b33c790994676a85b647569d28526a969f6cfc6e",
          "url": "https://github.com/planetarium/libplanet/commit/3bf75a4fb6ee1fe6865c8d8f2efca983444d9d4a"
        },
        "date": 1684483239692,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8826009.863636363,
            "unit": "ns",
            "range": "± 901562.0779193488"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22713564.116161615,
            "unit": "ns",
            "range": "± 1745267.8688251215"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59234703.083333336,
            "unit": "ns",
            "range": "± 4933143.162397663"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 121603262.71875,
            "unit": "ns",
            "range": "± 10838389.326673042"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 235293105.94366196,
            "unit": "ns",
            "range": "± 11524075.595549941"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 68741.25263157894,
            "unit": "ns",
            "range": "± 11351.872641437325"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 353096.8510638298,
            "unit": "ns",
            "range": "± 32511.93747404619"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 335101.68131868134,
            "unit": "ns",
            "range": "± 30935.263567247835"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 338267.2747252747,
            "unit": "ns",
            "range": "± 38335.60772790921"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4182818.3448275863,
            "unit": "ns",
            "range": "± 113257.07280382597"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3872168.2395833335,
            "unit": "ns",
            "range": "± 267655.5094639669"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21521.293478260868,
            "unit": "ns",
            "range": "± 4032.2419541317577"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 113320.55208333333,
            "unit": "ns",
            "range": "± 27393.80572429498"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 111914.76923076923,
            "unit": "ns",
            "range": "± 16795.437662305085"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 120092.28125,
            "unit": "ns",
            "range": "± 17787.922761897287"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7097.734693877551,
            "unit": "ns",
            "range": "± 1757.648426376188"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19597.220430107525,
            "unit": "ns",
            "range": "± 3642.1826989177066"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1561684.62,
            "unit": "ns",
            "range": "± 179153.74187347663"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2927221.861111111,
            "unit": "ns",
            "range": "± 144197.01813557625"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2503201.2959183673,
            "unit": "ns",
            "range": "± 216109.65791669354"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6164323.457142857,
            "unit": "ns",
            "range": "± 198157.89576635492"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3752881.53,
            "unit": "ns",
            "range": "± 411128.374884415"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4011763.3842105265,
            "unit": "ns",
            "range": "± 491525.56334902014"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5003615.773195877,
            "unit": "ns",
            "range": "± 572274.974561736"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4609009.725806451,
            "unit": "ns",
            "range": "± 407837.13697749836"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8496366.318181818,
            "unit": "ns",
            "range": "± 729574.68844756"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7614552.309952445,
            "unit": "ns",
            "range": "± 187482.429903223"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2170549.214409722,
            "unit": "ns",
            "range": "± 46213.98362728836"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1525523.6821986607,
            "unit": "ns",
            "range": "± 24134.435333094752"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3337535.8123078896,
            "unit": "ns",
            "range": "± 149385.16735104212"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1015155.0100708008,
            "unit": "ns",
            "range": "± 31563.21019458884"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 828150.2801011029,
            "unit": "ns",
            "range": "± 15798.465559517359"
          }
        ]
      }
    ]
  }
}