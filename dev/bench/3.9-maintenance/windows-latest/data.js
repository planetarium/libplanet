window.BENCHMARK_DATA = {
  "lastUpdate": 1700794010972,
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
          "id": "115a4231a838e45a141426ede38a5d933c9a432c",
          "message": "Merge pull request #3515 from greymistcube/release/3.8.0\n\n🚀 Release 3.8.0",
          "timestamp": "2023-11-24T11:30:13+09:00",
          "tree_id": "f9a64dcd90f39b126c39cd08c734efccb86d5d65",
          "url": "https://github.com/planetarium/libplanet/commit/115a4231a838e45a141426ede38a5d933c9a432c"
        },
        "date": 1700793960079,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 908035.3535353536,
            "unit": "ns",
            "range": "± 66226.30698879212"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1698526.9841269841,
            "unit": "ns",
            "range": "± 75572.11724752681"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1318523.9130434783,
            "unit": "ns",
            "range": "± 124149.38172347868"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4955527.5,
            "unit": "ns",
            "range": "± 172425.43834498883"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34302.27272727273,
            "unit": "ns",
            "range": "± 2103.6354559812503"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5222950,
            "unit": "ns",
            "range": "± 29624.02221690519"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 12994635.714285715,
            "unit": "ns",
            "range": "± 219561.985665667"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33589820,
            "unit": "ns",
            "range": "± 220091.6211814655"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 65845360,
            "unit": "ns",
            "range": "± 605304.0862716383"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 131987796.15384616,
            "unit": "ns",
            "range": "± 1015791.3873883296"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3267969.765625,
            "unit": "ns",
            "range": "± 6823.266283626486"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1059194.3638392857,
            "unit": "ns",
            "range": "± 1800.7996109388348"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 744682.2591145834,
            "unit": "ns",
            "range": "± 1270.113459318819"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1931072.2395833333,
            "unit": "ns",
            "range": "± 3600.8392210071356"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 633699.3489583334,
            "unit": "ns",
            "range": "± 1299.70844461266"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 580412.40234375,
            "unit": "ns",
            "range": "± 810.1788056646815"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2094440,
            "unit": "ns",
            "range": "± 40041.46808830399"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2278943.75,
            "unit": "ns",
            "range": "± 89900.47548273188"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2789695.652173913,
            "unit": "ns",
            "range": "± 62782.41269554331"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2630696.7213114756,
            "unit": "ns",
            "range": "± 117918.42797348385"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5832553.846153846,
            "unit": "ns",
            "range": "± 188298.4652733301"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 169196.66666666666,
            "unit": "ns",
            "range": "± 7215.190347552338"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 163098.24561403508,
            "unit": "ns",
            "range": "± 7086.921839055529"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 139916.12903225806,
            "unit": "ns",
            "range": "± 3762.5431801901887"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2884423.3333333335,
            "unit": "ns",
            "range": "± 43488.856810298734"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2503550,
            "unit": "ns",
            "range": "± 40065.5296566346"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10711.95652173913,
            "unit": "ns",
            "range": "± 1201.4498925226612"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 53810.86956521739,
            "unit": "ns",
            "range": "± 4813.68142962086"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45091.57894736842,
            "unit": "ns",
            "range": "± 2598.0624187010912"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 59595.9595959596,
            "unit": "ns",
            "range": "± 14133.300661564785"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2822.4489795918366,
            "unit": "ns",
            "range": "± 594.5683025878919"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10290.90909090909,
            "unit": "ns",
            "range": "± 1192.7594166986491"
          }
        ]
      }
    ]
  }
}