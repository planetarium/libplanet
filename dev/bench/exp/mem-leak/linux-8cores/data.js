window.BENCHMARK_DATA = {
  "lastUpdate": 1724391322520,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Suho Lee",
            "username": "riemannulus"
          },
          "committer": {
            "email": "iam@suho.io",
            "name": "Suho Lee",
            "username": "riemannulus"
          },
          "distinct": true,
          "id": "1bcadcb5202d8c1fbe53819c4b6e7e6a640bb093",
          "message": "tmp",
          "timestamp": "2024-08-23T14:26:04+09:00",
          "tree_id": "756406cf733ee7849a986a1d3c04269577e8207c",
          "url": "https://github.com/planetarium/libplanet/commit/1bcadcb5202d8c1fbe53819c4b6e7e6a640bb093"
        },
        "date": 1724391296473,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 199364.04081632654,
            "unit": "ns",
            "range": "± 7516.980646507345"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 195276.32432432432,
            "unit": "ns",
            "range": "± 6544.903407546525"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 174661.11111111112,
            "unit": "ns",
            "range": "± 3556.628292422125"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3124712,
            "unit": "ns",
            "range": "± 23704.227400754207"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2933224.0714285714,
            "unit": "ns",
            "range": "± 33217.44389847526"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17237.896907216495,
            "unit": "ns",
            "range": "± 3122.7509389576953"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 63117.2,
            "unit": "ns",
            "range": "± 5815.567897481102"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50723.794117647056,
            "unit": "ns",
            "range": "± 1631.4218149044616"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 57089.73493975904,
            "unit": "ns",
            "range": "± 6080.064736265475"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3212.819587628866,
            "unit": "ns",
            "range": "± 556.0912235264658"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13982.690721649484,
            "unit": "ns",
            "range": "± 1933.720789268843"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2417932.6666666665,
            "unit": "ns",
            "range": "± 32153.747399168322"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2501716.285714286,
            "unit": "ns",
            "range": "± 33398.12640398714"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3059276.9736842103,
            "unit": "ns",
            "range": "± 64496.913410529814"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2661591.9285714286,
            "unit": "ns",
            "range": "± 46960.675285841004"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3307270.1333333333,
            "unit": "ns",
            "range": "± 48971.6778948618"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10284836.07142857,
            "unit": "ns",
            "range": "± 50588.64028988248"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26712763.6,
            "unit": "ns",
            "range": "± 170106.23412561926"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 69885375.35714285,
            "unit": "ns",
            "range": "± 258369.0797226852"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 137756654.93333334,
            "unit": "ns",
            "range": "± 650928.2719025705"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 285650525.93333334,
            "unit": "ns",
            "range": "± 1241304.1586411945"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 969814.725,
            "unit": "ns",
            "range": "± 50713.8198721481"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1898129.4318181819,
            "unit": "ns",
            "range": "± 70442.38538325924"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1480601.9516129033,
            "unit": "ns",
            "range": "± 66988.18039533503"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6735659.666666667,
            "unit": "ns",
            "range": "± 199511.55149278318"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3729711.8888221155,
            "unit": "ns",
            "range": "± 4378.876433521455"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1182495.035435268,
            "unit": "ns",
            "range": "± 1407.850654757787"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 763363.9060546875,
            "unit": "ns",
            "range": "± 1160.5244192210023"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1969941.8229166667,
            "unit": "ns",
            "range": "± 2591.183878949189"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 623697.0160435268,
            "unit": "ns",
            "range": "± 538.8240706864183"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 595952.8013020833,
            "unit": "ns",
            "range": "± 659.998913700674"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 29760.178571428572,
            "unit": "ns",
            "range": "± 859.7118403352943"
          }
        ]
      }
    ]
  }
}