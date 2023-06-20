window.BENCHMARK_DATA = {
  "lastUpdate": 1687250513460,
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
          "id": "278c0421ae8276ff3ea9dac2efaba18de37a6531",
          "message": "Merge pull request #3224 from greymistcube/release/2.1.0\n\n🚀 Release 2.1.0",
          "timestamp": "2023-06-20T17:11:44+09:00",
          "tree_id": "3c8b47900f776e7c6b705a66d3eb009253049fe9",
          "url": "https://github.com/planetarium/libplanet/commit/278c0421ae8276ff3ea9dac2efaba18de37a6531"
        },
        "date": 1687250446097,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1671526.8817204302,
            "unit": "ns",
            "range": "± 235986.81343953215"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3095778.125,
            "unit": "ns",
            "range": "± 313560.2652401927"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2438021.649484536,
            "unit": "ns",
            "range": "± 315016.7069732189"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6608585,
            "unit": "ns",
            "range": "± 775840.1180414855"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 60184.21052631579,
            "unit": "ns",
            "range": "± 13336.929339639102"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8409950,
            "unit": "ns",
            "range": "± 584023.1761803546"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22059865.979381442,
            "unit": "ns",
            "range": "± 1894282.3531115176"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52312536,
            "unit": "ns",
            "range": "± 5570309.550590342"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103941559.59595959,
            "unit": "ns",
            "range": "± 9968626.491658095"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 208273816.16161618,
            "unit": "ns",
            "range": "± 18397648.264737576"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5315662.375,
            "unit": "ns",
            "range": "± 139796.81792536227"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1694646.974609375,
            "unit": "ns",
            "range": "± 104284.71732514747"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1287465.203125,
            "unit": "ns",
            "range": "± 84214.85647906674"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3012974.75,
            "unit": "ns",
            "range": "± 199989.4966319083"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 952550.415319684,
            "unit": "ns",
            "range": "± 52132.16419765197"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 876033.984375,
            "unit": "ns",
            "range": "± 45417.89737335699"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3283059.793814433,
            "unit": "ns",
            "range": "± 308870.05920093704"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3571922.1052631577,
            "unit": "ns",
            "range": "± 345251.29089963034"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4771443.298969072,
            "unit": "ns",
            "range": "± 586413.9115042124"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4436315.555555556,
            "unit": "ns",
            "range": "± 356406.22477543325"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8423465.263157895,
            "unit": "ns",
            "range": "± 610897.0494748774"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 296129.797979798,
            "unit": "ns",
            "range": "± 43707.63249976235"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 289620.21276595746,
            "unit": "ns",
            "range": "± 39278.83935988461"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 231492.78350515463,
            "unit": "ns",
            "range": "± 37612.171809310064"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3872096.8421052634,
            "unit": "ns",
            "range": "± 397461.03875769646"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3935133.3333333335,
            "unit": "ns",
            "range": "± 469809.4343043821"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 28909,
            "unit": "ns",
            "range": "± 8335.261534498173"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 97548.3870967742,
            "unit": "ns",
            "range": "± 14517.28814134934"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 103356.3829787234,
            "unit": "ns",
            "range": "± 26724.852750172766"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 122701.05263157895,
            "unit": "ns",
            "range": "± 21023.560717993463"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6480,
            "unit": "ns",
            "range": "± 1858.064717490223"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 27687.628865979383,
            "unit": "ns",
            "range": "± 7897.550486964809"
          }
        ]
      }
    ]
  }
}