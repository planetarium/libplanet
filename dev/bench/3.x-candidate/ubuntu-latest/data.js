window.BENCHMARK_DATA = {
  "lastUpdate": 1684483187567,
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
        "date": 1684483160350,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4395946.452631579,
            "unit": "ns",
            "range": "± 391027.2719578023"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4224901.090909091,
            "unit": "ns",
            "range": "± 322066.2298446846"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5209865.913978495,
            "unit": "ns",
            "range": "± 324391.0855928735"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5353262.032967033,
            "unit": "ns",
            "range": "± 299612.9065134415"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8698009.462962963,
            "unit": "ns",
            "range": "± 361037.69264977856"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 345634.989010989,
            "unit": "ns",
            "range": "± 24768.973019797035"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 343001.59550561797,
            "unit": "ns",
            "range": "± 24398.437296604534"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 304798.35,
            "unit": "ns",
            "range": "± 15838.414060501726"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5067572.526881721,
            "unit": "ns",
            "range": "± 323825.38897766283"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4841389.084210526,
            "unit": "ns",
            "range": "± 393580.931538882"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23425.23469387755,
            "unit": "ns",
            "range": "± 6335.973284335632"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 100478.79347826086,
            "unit": "ns",
            "range": "± 12586.503906297956"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 108840.9494949495,
            "unit": "ns",
            "range": "± 21646.65405420249"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 120117.92631578947,
            "unit": "ns",
            "range": "± 18519.27376697626"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9393.25,
            "unit": "ns",
            "range": "± 5258.475475915818"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22710.622448979593,
            "unit": "ns",
            "range": "± 6023.358469138149"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7234447.688337053,
            "unit": "ns",
            "range": "± 203212.58344674442"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2219013.796875,
            "unit": "ns",
            "range": "± 49576.30975247565"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1611424.7546875,
            "unit": "ns",
            "range": "± 30083.682013445006"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3183121.825911458,
            "unit": "ns",
            "range": "± 92623.02698519052"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1006120.2083007812,
            "unit": "ns",
            "range": "± 18572.69123351117"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 937606.2802734375,
            "unit": "ns",
            "range": "± 26766.39899170901"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9574289.897727273,
            "unit": "ns",
            "range": "± 657324.6840610992"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26657725.67857143,
            "unit": "ns",
            "range": "± 1138166.3390332093"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 62428420.178571425,
            "unit": "ns",
            "range": "± 1681080.1618803411"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 133498211.38157895,
            "unit": "ns",
            "range": "± 6570899.945952572"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 268394721.13333333,
            "unit": "ns",
            "range": "± 4938729.684626487"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1741023.4347826086,
            "unit": "ns",
            "range": "± 169754.41332596936"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3333474.6875,
            "unit": "ns",
            "range": "± 289290.4766601542"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2720999.625,
            "unit": "ns",
            "range": "± 278347.35873555165"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7126204.4948453605,
            "unit": "ns",
            "range": "± 530844.4629409102"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 63430.242105263154,
            "unit": "ns",
            "range": "± 9373.239868490024"
          }
        ]
      }
    ]
  }
}