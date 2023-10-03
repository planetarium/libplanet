window.BENCHMARK_DATA = {
  "lastUpdate": 1696351021632,
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
          "id": "8dc592d3d07260489d7ac7dd1f62754bc23faae0",
          "message": "Merge pull request #3435 from greymistcube/prepare/3.5.0\n\n🔧 Prepare 3.5.0",
          "timestamp": "2023-09-25T20:32:57+09:00",
          "tree_id": "0c99da6c0667ced3d6e43cb95f5270ef67333bc0",
          "url": "https://github.com/planetarium/libplanet/commit/8dc592d3d07260489d7ac7dd1f62754bc23faae0"
        },
        "date": 1696350955461,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1296125,
            "unit": "ns",
            "range": "± 100333.62365305827"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2338408.8235294116,
            "unit": "ns",
            "range": "± 74076.48531998433"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1904591.7525773195,
            "unit": "ns",
            "range": "± 108273.74226748059"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7897454.545454546,
            "unit": "ns",
            "range": "± 369838.8281740775"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 44338.57142857143,
            "unit": "ns",
            "range": "± 2146.942069187524"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6982292.857142857,
            "unit": "ns",
            "range": "± 32472.15290500022"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18144880,
            "unit": "ns",
            "range": "± 175661.1031015607"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46450221.428571425,
            "unit": "ns",
            "range": "± 181600.97499980315"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 92078440,
            "unit": "ns",
            "range": "± 557045.8801314562"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 184284886.66666666,
            "unit": "ns",
            "range": "± 1114026.7808185548"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4359220.479910715,
            "unit": "ns",
            "range": "± 21588.828706076936"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1397345.1171875,
            "unit": "ns",
            "range": "± 2325.202439690283"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 993796.9308035715,
            "unit": "ns",
            "range": "± 1906.3718284802187"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2548504.1852678573,
            "unit": "ns",
            "range": "± 4299.9661096007"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 825383.9017427885,
            "unit": "ns",
            "range": "± 994.7670854759566"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 735700.2473958334,
            "unit": "ns",
            "range": "± 1454.580324361374"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2937712,
            "unit": "ns",
            "range": "± 68499.55182335137"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3089950,
            "unit": "ns",
            "range": "± 53878.73811674352"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3903388.888888889,
            "unit": "ns",
            "range": "± 107295.74274059717"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3820217.6470588236,
            "unit": "ns",
            "range": "± 77908.40162728052"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9262854.838709677,
            "unit": "ns",
            "range": "± 218554.03578781104"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 247056.25,
            "unit": "ns",
            "range": "± 7622.375275379039"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 234125.7142857143,
            "unit": "ns",
            "range": "± 7677.826854656468"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 214488.88888888888,
            "unit": "ns",
            "range": "± 12544.87364923551"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3854840,
            "unit": "ns",
            "range": "± 28460.945672472455"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3461042.8571428573,
            "unit": "ns",
            "range": "± 33744.052793064126"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18492.391304347828,
            "unit": "ns",
            "range": "± 1811.8798261857598"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 78652.85714285714,
            "unit": "ns",
            "range": "± 3674.499726515928"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 65219.04761904762,
            "unit": "ns",
            "range": "± 1422.53964711675"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 81393.6170212766,
            "unit": "ns",
            "range": "± 7426.873732813022"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4342.857142857143,
            "unit": "ns",
            "range": "± 619.4443802361803"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17841.23711340206,
            "unit": "ns",
            "range": "± 1292.9095561078177"
          }
        ]
      }
    ]
  }
}